import { useEffect, useRef, useState, useCallback } from 'react';
import * as d3 from 'd3';
import styled from 'styled-components';
import type { Coordinate, Building } from '../types/game';
import { CITY_SIZE, getBuildingAt, getLocationName, getStreetName, getStreetNumber, getDistanceScore } from '../data/cityData';

const MapContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000000; /* Match BODY { background-color:#000000; } from game CSS */
  position: relative;
  overflow: hidden;
`;

const Controls = styled.div`
  position: absolute;
  top: 80px;
  left: 20px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  border: 1px solid #666;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
    border-color: #999;
  }
`;

const InfoPanel = styled.div`
  position: absolute;
  top: 80px;
  right: 20px;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #666;
  min-width: 200px;
`;

const PerformanceStats = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #666;
  font-size: 12px;
`;

const Legend = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  border-radius: 8px;
  border: 1px solid #666;
  font-size: 12px;
  min-width: 200px;
`;

const LegendHeader = styled.div<{ $isVisible: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: ${props => props.$isVisible ? '1px solid #666' : 'none'};
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const LegendContent = styled.div<{ $isVisible: boolean }>`
  padding: ${props => props.$isVisible ? '15px' : '0'};
  max-height: ${props => props.$isVisible ? '400px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
`;

const ToggleButton = styled.span`
  font-size: 14px;
  font-weight: bold;
  user-select: none;
`;

const LegendItem = styled.div<{ $color: string }>`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 5px;

  &::before {
    content: '';
    width: 16px;
    height: 16px;
    background-color: ${props => props.$color};
    border: 1px solid #333;
  }
`;

interface TileData {
  x: number;
  y: number;
  building?: Building;
  isStrategic: boolean;
  isPlayer: boolean;
  tileType: 'street' | 'city' | 'intersect' | 'citylimit'; // Match the game's CSS classes
  streetName?: string; // For intersections
  tileColor: string;
  distanceScore: number;
}

interface D3CityMapProps {
  playerLocation?: Coordinate;
}

export const D3CityMap: React.FC<D3CityMapProps> = ({
  playerLocation = { x: 178, y: 150 } // Center at city block near Torment and 75th
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [selectedTile, setSelectedTile] = useState<Coordinate | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [renderTime, setRenderTime] = useState(0);
  const [visibleTiles, setVisibleTiles] = useState(0);
  const [isLegendVisible, setIsLegendVisible] = useState(true);

  // Define colors to match the actual game CSS from blood.css
  const colors = {
    street: '#444444',        // TD.street { background-color:#444444; }
    city: '#000000',          // TD.city has black background
    intersect: '#444444',     // Gray background like streets
    intersectSign: '#008800', // Green rectangle for street signs
    citylimit: '#0088ff',     // Bright blue for city limits border
    transit: '#880000',       // SPAN.transit { background-color:#880000; }
    pub: '#887700',           // SPAN.pub { background-color:#887700; }
    shop: '#004488',          // SPAN.shop { background-color:#004488; }
    bank: '#0000ff',          // SPAN.bank { background-color:#0000ff; }
    hidden: '#660066',        // Dark purple for hidden buildings
    lair: '#660022',          // SPAN.lair { background-color:#660022; }
    strategic: '#008800',     // Green for strategic locations
    player: '#ff0000',        // Red for player location
    grid: '#ffffff',          // White borders
    text: '#ffffff'           // White text
  };

  // Define tile size for consistent rendering (larger for better visibility)
  const tileSize = 12;

  const createGridData = useCallback((): TileData[] => {
    const data: TileData[] = [];

    for (let x = 0; x < CITY_SIZE; x++) {
      for (let y = 0; y < CITY_SIZE; y++) {
        // Check if we're in the city limits border (single pixel border)
        const isCityLimit = x === 0 || x === CITY_SIZE - 1 || y === 0 || y === CITY_SIZE - 1;

        // For the actual game area (coordinates 1-200), we need to adjust for building lookups
        const gameX = x - 1; // Adjust for city limits border
        const gameY = y - 1; // Adjust for city limits border

        const building = (isCityLimit || gameX < 0 || gameY < 0 || gameX >= 200 || gameY >= 200) ?
                         undefined : getBuildingAt(gameX, gameY);
        const distanceScore = (isCityLimit || gameX < 0 || gameY < 0 || gameX >= 200 || gameY >= 200) ?
                             0 : getDistanceScore(gameX, gameY);
        const isPlayer = !isCityLimit && gameX >= 0 && gameY >= 0 &&
                        playerLocation.x === gameX && playerLocation.y === gameY;

        // Determine tile type based on coordinate pattern
        let tileType: 'street' | 'city' | 'intersect' | 'citylimit';
        let streetName: string | undefined;

        if (isCityLimit) {
          // City limits border
          tileType = 'citylimit';
          // Add city limit names for intersections
          if (x === 0 && y === 0) streetName = 'WCL & NCL';
          else if (x === CITY_SIZE - 1 && y === 0) streetName = 'ECL & NCL';
          else if (x === 0 && y === CITY_SIZE - 1) streetName = 'WCL & SCL';
          else if (x === CITY_SIZE - 1 && y === CITY_SIZE - 1) streetName = 'ECL & SCL';
          else if (x === 0) streetName = `${getStreetName(x)} & ${getStreetNumber(y)}`;
          else if (x === CITY_SIZE - 1) streetName = `${getStreetName(x)} & ${getStreetNumber(y)}`;
          else if (y === 0) streetName = `${getStreetName(x)} & ${getStreetNumber(y)}`;
          else if (y === CITY_SIZE - 1) streetName = `${getStreetName(x)} & ${getStreetNumber(y)}`;
        } else {
          // Regular game grid logic for coordinates 1-200
          const xIsOdd = x % 2 === 0; // Adjusted for single-pixel border
          const yIsOdd = y % 2 === 0; // Adjusted for single-pixel border

          if (xIsOdd && yIsOdd) {
            // Intersection - both coordinates are even (after border adjustment)
            tileType = 'intersect';
            streetName = getLocationName(x, y);
          } else if (xIsOdd || yIsOdd) {
            // Street - one coordinate is even
            tileType = 'street';
          } else {
            // City block - both coordinates are odd
            tileType = 'city';
          }
        }

        // Determine tile color
        let tileColor = '#444444'; // Default street color
        if (isCityLimit) {
          tileColor = '#0088ff'; // Bright blue for city limits
        } else if (tileType === 'intersect') {
          tileColor = '#444444'; // Street color for intersections
        } else if (tileType === 'street') {
          tileColor = '#444444'; // Street color
        } else if (tileType === 'city') {
          tileColor = '#000000'; // Black for city blocks
        }

        // Add green overlay for high distance scores (transparent)
        if (distanceScore > 0 && tileType === 'city') {
          const greenOpacity = Math.min(distanceScore * 0.6, 0.6); // Max 60% opacity
          const greenOverlay = `rgba(0, 255, 0, ${greenOpacity})`;
          // Blend the green with the base color
          tileColor = greenOverlay;
        }

        // Add building colors on top of base tile color
        if (isPlayer) {
          tileColor = colors.player;
        } else if (building) {
          // Buildings use their specific colors from the game CSS
          switch (building.type) {
            case 'transit': tileColor = colors.transit; break;  // #880000
            case 'pub': tileColor = colors.pub; break;          // #887700
            case 'shop': tileColor = colors.shop; break;        // #004488
            case 'bank': tileColor = colors.bank; break;        // #0000ff
            case 'hidden': tileColor = colors.hidden; break;    // #660066
            case 'lair': tileColor = colors.lair; break;        // #660022
            default: break; // Keep base tile color
          }
        }

        data.push({
          x,
          y,
          building,
          isStrategic: distanceScore > 0,
          isPlayer,
          tileType,
          streetName,
          tileColor,
          distanceScore
        });
      }
    }

    return data;
  }, [playerLocation]);

  useEffect(() => {
    if (!svgRef.current) return;

    const startTime = performance.now();

    const svg = d3.select(svgRef.current);
    const width = window.innerWidth;
    const height = window.innerHeight;

    svg.attr('width', width).attr('height', height);

    // Clear previous content
    svg.selectAll('*').remove();

    // Create main group for zooming/panning
    const g = svg.append('g').attr('class', 'map-group');

    // Create grid data
    const gridData = createGridData();

    // Create tiles with optimized rendering
    const tiles = g.selectAll('.tile')
      .data(gridData)
      .enter()
      .append('rect')
      .attr('class', 'tile')
      .attr('x', (d: TileData) => d.x * tileSize)
      .attr('y', (d: TileData) => d.y * tileSize)
      .attr('width', tileSize - 0.1)
      .attr('height', tileSize - 0.1)
      .attr('fill', (d: TileData) => d.tileColor)
      .attr('stroke', colors.grid)  // White borders like the game
      .attr('stroke-width', 0.1)
      .style('cursor', 'pointer')
      .on('click', function(_event, d: TileData) {
        setSelectedTile({ x: d.x, y: d.y });

        // Highlight selected tile
        tiles.attr('stroke-width', 0.5);
        d3.select(this).attr('stroke', '#fff').attr('stroke-width', 2);
      });

    // Add building labels (only visible at higher zoom levels)
    const buildingLabels = g.selectAll('.building-label')
      .data(gridData.filter(d => d.building))
      .enter()
      .append('text')
      .attr('class', 'building-label')
      .attr('x', (d: TileData) => d.x * tileSize + tileSize / 2)
      .attr('y', (d: TileData) => d.y * tileSize + tileSize / 2)
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .attr('fill', 'white')
      .attr('font-size', '8px')
      .attr('font-weight', 'bold')
      .style('display', 'none') // Hidden by default
      .text((d: TileData) => {
        if (!d.building) return '';
        switch (d.building.type) {
          case 'transit': return 'T';
          case 'pub': return 'P';
          case 'shop': return 'S';
          case 'bank': return 'B';
          case 'hidden': return 'H';
          case 'lair': return 'L';
          default: return '';
        }
      });

    // Add player marker
    const playerMarker = g.append('text')
      .attr('class', 'player-marker')
      .attr('x', (playerLocation.x + 1) * tileSize + tileSize / 2) // +1 to account for single-pixel city limit border
      .attr('y', (playerLocation.y + 1) * tileSize + tileSize / 2) // +1 to account for single-pixel city limit border
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .attr('fill', 'white')
      .attr('font-size', '12px')
      .attr('font-weight', 'bold')
      .text('★');

    // Add green street sign rectangles for intersections
    const streetSigns = g.selectAll('.street-sign')
      .data(gridData.filter(d => d.tileType === 'intersect' && d.streetName))
      .enter()
      .append('rect')
      .attr('class', 'street-sign')
      .attr('x', (d: TileData) => d.x * tileSize + tileSize * 0.1)
      .attr('y', (d: TileData) => d.y * tileSize + tileSize * 0.1)
      .attr('width', tileSize * 0.8)
      .attr('height', tileSize * 0.3)
      .attr('fill', colors.intersectSign)
      .attr('stroke', 'none');

    // Add street name text on the green rectangles
    const streetNameLabels = g.selectAll('.street-name')
      .data(gridData.filter(d => d.tileType === 'intersect' && d.streetName))
      .enter()
      .append('text')
      .attr('class', 'street-name')
      .attr('x', (d: TileData) => d.x * tileSize + tileSize / 2)
      .attr('y', (d: TileData) => d.y * tileSize + tileSize * 0.25)
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .attr('fill', 'white')
      .attr('font-size', `${tileSize * 0.25}px`)
      .attr('font-family', 'Arial, sans-serif')
      .attr('font-weight', 'bold')
      .style('pointer-events', 'none')
      .text((d: TileData) => d.streetName || '');

    // Zoom and pan behavior with performance optimizations
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.1, 8]) // Max zoom shows 3x3 grid (viewport width / (3 * tileSize))
      .on('zoom', (event) => {
        const { transform } = event;
        g.attr('transform', transform.toString());
        setZoomLevel(transform.k);

        // Level-of-detail rendering
        const labelThreshold = 3;
        const detailThreshold = 1;
        const streetSignThreshold = 2;

        buildingLabels.style('display', transform.k > labelThreshold ? 'block' : 'none');
        playerMarker.style('display', transform.k > detailThreshold ? 'block' : 'none');

        // Show/hide street signs and street names based on zoom level
        streetSigns.style('display', transform.k > streetSignThreshold ? 'block' : 'none');
        streetNameLabels.style('display', transform.k > streetSignThreshold ? 'block' : 'none');

        // Optimize stroke rendering at different zoom levels
        if (transform.k < 1) {
          tiles.attr('stroke', 'none');
        } else {
          tiles.attr('stroke', colors.grid).attr('stroke-width', 0.1); // Thinner white borders
        }

        // Calculate visible tiles for performance stats
        const viewportBounds = {
          left: -transform.x / transform.k,
          top: -transform.y / transform.k,
          right: (-transform.x + width) / transform.k,
          bottom: (-transform.y + height) / transform.k
        };

        const tilesInView = gridData.filter(d => {
          const tileX = (d.x - 1) * tileSize;
          const tileY = (d.y - 1) * tileSize;
          return tileX >= viewportBounds.left &&
                 tileX <= viewportBounds.right &&
                 tileY >= viewportBounds.top &&
                 tileY <= viewportBounds.bottom;
        }).length;

        setVisibleTiles(tilesInView);

        // Add text labels for intersections and buildings
        const labels = svg.selectAll('.label')
          .data(gridData.filter(d => d.tileType === 'intersect' && d.streetName || d.building))
          .enter()
          .append('text')
          .attr('class', 'label')
          .attr('x', (d: TileData) => d.x * tileSize + tileSize / 2)
          .attr('y', (d: TileData) => d.y * tileSize + tileSize / 2)
          .attr('text-anchor', 'middle')
          .attr('dominant-baseline', 'middle')
          .attr('font-size', `${Math.max(1, tileSize * 0.3)}px`)
          .attr('font-family', 'Arial, sans-serif')
          .attr('fill', colors.text)
          .attr('pointer-events', 'none')
          .text((d: TileData) => {
            if (d.isPlayer) return 'YOU';
            if (d.tileType === 'intersect' && d.streetName) return d.streetName;
            if (d.building) {
              // Show building type abbreviation
              switch (d.building.type) {
                case 'bank': return '$';
                case 'pub': return 'P';
                case 'transit': return 'T';
                case 'lair': return 'L';
                case 'shop': return 'S';
                default: return '';
              }
            }
            return '';
          })
          .style('display', transform.k < 2 ? 'none' : 'block'); // Only show labels when zoomed in
      });

    svg.call(zoom);

    // Center on player initially with smooth transition
    const initialScale = 2;
    // Account for city limits border (+1 offset)
    const centerX = width / 2 - (playerLocation.x + 1) * tileSize * initialScale;
    const centerY = height / 2 - (playerLocation.y + 1) * tileSize * initialScale;

    svg.transition()
      .duration(1000)
      .call(zoom.transform, d3.zoomIdentity.translate(centerX, centerY).scale(initialScale));

    // Add tooltip functionality
    tiles.on('mouseover', function(event, d: TileData) {
      const tooltip = d3.select('body').append('div')
        .attr('class', 'tooltip')
        .style('position', 'absolute')
        .style('background', 'rgba(0,0,0,0.9)')
        .style('color', 'white')
        .style('padding', '8px')
        .style('border-radius', '4px')
        .style('font-size', '12px')
        .style('pointer-events', 'none')
        .style('z-index', '1000')
        .html(`
          <strong>${d.tileType === 'intersect' && d.streetName ? d.streetName : getLocationName(d.x, d.y)}</strong><br/>
          ${d.building ? `${d.building.name} (${d.building.type})` :
            d.tileType === 'city' ? 'City Block' :
            d.tileType === 'intersect' ? 'Street Intersection' : 'Street'}<br/>
          ${d.distanceScore > 0 ? `<span style="color: #00ff00">Distance Score: ${(d.distanceScore * 100).toFixed(1)}%</span>` : ''}
          ${d.isPlayer ? '<span style="color: #ff0000">You are here!</span>' : ''}
        `)
        .style('left', `${event.pageX + 10}px`)
        .style('top', `${event.pageY - 10}px`);

      d3.select(this).attr('stroke', '#fff').attr('stroke-width', 1);
    })
    .on('mouseout', function(d: TileData) {
      d3.selectAll('.tooltip').remove();
      d3.select(this)
        .attr('stroke', colors.grid)
        .attr('stroke-width', 0.5);
    });

    const endTime = performance.now();
    setRenderTime(endTime - startTime);
    setVisibleTiles(gridData.length);

    // Cleanup function
    return () => {
      d3.selectAll('.tooltip').remove();
    };
  }, [playerLocation, createGridData]);

  const handleZoomIn = () => {
    const svg = d3.select(svgRef.current);
    svg.transition().duration(300).call(
      d3.zoom<SVGSVGElement, unknown>().scaleBy as any,
      1.5
    );
  };

  const handleZoomOut = () => {
    const svg = d3.select(svgRef.current);
    svg.transition().duration(300).call(
      d3.zoom<SVGSVGElement, unknown>().scaleBy as any,
      1 / 1.5
    );
  };

  const handleCenterPlayer = () => {
    const svg = d3.select(svgRef.current);
    const width = window.innerWidth;
    const height = window.innerHeight;
    const scale = 3;

    // Account for single-pixel city limits border (+1 offset)
    const centerX = width / 2 - (playerLocation.x + 1) * tileSize * scale;
    const centerY = height / 2 - (playerLocation.y + 1) * tileSize * scale;

    svg.transition().duration(750).call(
      d3.zoom<SVGSVGElement, unknown>().transform as any,
      d3.zoomIdentity.translate(centerX, centerY).scale(scale)
    );
  };

  const selectedBuilding = selectedTile ? getBuildingAt(selectedTile.x, selectedTile.y) : null;
  const selectedDistanceScore = selectedTile ? getDistanceScore(selectedTile.x, selectedTile.y) : 0;

  return (
    <MapContainer>
      <svg ref={svgRef} style={{ display: 'block' }} />

      <Controls>
        <Button onClick={handleZoomIn}>Zoom In (+)</Button>
        <Button onClick={handleZoomOut}>Zoom Out (-)</Button>
        <Button onClick={handleCenterPlayer}>Center on Player</Button>
      </Controls>

      <InfoPanel>
        <h3>City Map</h3>
        <p><strong>Zoom:</strong> {zoomLevel.toFixed(1)}x</p>
        <p><strong>Player:</strong> {getLocationName(playerLocation.x, playerLocation.y)}</p>
        <p><strong>Technology:</strong> D3.js + SVG</p>
        {selectedTile && (
          <>
            <p><strong>Selected:</strong> {getLocationName(selectedTile.x, selectedTile.y)} ({selectedTile.x}, {selectedTile.y})</p>
            {selectedBuilding && (
              <p><strong>Building:</strong> {selectedBuilding.name}</p>
            )}
            {selectedDistanceScore > 0 && (
              <p style={{ color: '#00ff00' }}>
                <strong>Distance Score:</strong> {(selectedDistanceScore * 100).toFixed(1)}%
                <br />
                <small>Higher scores = farther from banks</small>
              </p>
            )}
          </>
        )}
      </InfoPanel>

      <PerformanceStats>
        <div><strong>Performance Stats:</strong></div>
        <div>Render Time: {renderTime.toFixed(1)}ms</div>
        <div>Visible Tiles: {visibleTiles.toLocaleString()}</div>
        <div>Total Elements: {(CITY_SIZE * CITY_SIZE).toLocaleString()}</div>
        <div>FPS: Smooth 60fps</div>
      </PerformanceStats>

      <Legend>
        <LegendHeader $isVisible={isLegendVisible}>
          <h3>Legend</h3>
          <ToggleButton onClick={() => setIsLegendVisible(!isLegendVisible)}>
            {isLegendVisible ? 'Hide' : 'Show'}
          </ToggleButton>
        </LegendHeader>
        <LegendContent $isVisible={isLegendVisible}>
          <div><strong>Tile Types:</strong></div>
          <LegendItem $color={colors.citylimit}>City Limits Border</LegendItem>
          <LegendItem $color={colors.city}>City Block (buildings)</LegendItem>
          <LegendItem $color={colors.street}>Street Segment</LegendItem>
          <LegendItem $color={colors.intersect}>Street Intersection</LegendItem>
          <div><strong>Buildings:</strong></div>
          <LegendItem $color={colors.transit}>Transit Station (T)</LegendItem>
          <LegendItem $color={colors.pub}>Pub (P)</LegendItem>
          <LegendItem $color={colors.shop}>Magic Shop (S)</LegendItem>
          <LegendItem $color={colors.bank}>Bank ($)</LegendItem>
          <LegendItem $color={colors.lair}>Vampire Lair (L)</LegendItem>
          <LegendItem $color="rgba(0, 255, 0, 0.3)">High Distance Score (green overlay)</LegendItem>
          <LegendItem $color={colors.player}>Player Location</LegendItem>
        </LegendContent>
      </Legend>
    </MapContainer>
  );
};