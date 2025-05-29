# City Crawler - Vampires Interactive Map

An interactive web-based map for the [Vampires!](https://quiz.ravenblack.net/blood.pl) browser game. This application provides a zoomable, pannable grid view of the 100x100 city with all the buildings and locations.

## Features

- **Interactive Grid Map**: 100x100 tile city grid matching the game layout
- **Zoom & Pan**: Smooth zooming and panning controls
- **Building Locations**: All transit stations, pubs, shops, and banks marked
- **Street Names**: Proper street naming system (trees/animals in west, minerals/malaise in east)
- **Player Location**: Visual indicator of current player position
- **Building Information**: Click on tiles to see building details
- **Game-like Styling**: Dark theme matching the original game aesthetic

## Game Information

Based on the Vampires! browser game:
- **City Layout**: 100 numbered streets crossed by 100 named streets
- **Transit Stations**: Located at Mongoose/25th, 50th, 75th; Zelkova/25th, 50th, 75th; Malachite/25th, 50th, 75th
- **Buildings**: Pubs, magic shops, banks, and hidden locations scattered throughout
- **Navigation**: Click and drag to pan, use zoom controls, click tiles for info

## Technology Stack

- **TypeScript**: Type-safe development
- **React**: Component-based UI
- **Styled Components**: CSS-in-JS styling
- **Vite**: Fast development and build tool

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser to the displayed URL (usually `http://localhost:5173`)

## Controls

- **Mouse Drag**: Pan around the map
- **Zoom In/Out**: Use the control buttons
- **Center on Player**: Return to player location
- **Click Tiles**: Select tiles to see information
- **Hover**: See coordinate and building tooltips

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## License

This project is for educational and fan purposes. The original Vampires! game is created by RavenBlack.