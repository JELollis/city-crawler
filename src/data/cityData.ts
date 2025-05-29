import type { Building, Street } from '../types/game';

// Street names from the official game data (from streets.html)
// Array indices 0-99 map to game coordinates 1-100
export const STREET_NAMES: string[] = [
  // First 50 streets (west half) - animals, trees, and other names
  'Aardvark', 'Alder', 'Buzzard', 'Beech', 'Cormorant', 'Cedar', 'Duck', 'Dogwood', 'Eagle', 'Elm',
  'Ferret', 'Fir', 'Gibbon', 'Gum', 'Haddock', 'Holly', 'Iguana', 'Ivy', 'Jackal', 'Juniper',
  'Kraken', 'Knotweed', 'Lion', 'Larch', 'Mongoose', 'Maple', 'Nightingale', 'Nettle', 'Octopus', 'Olive',
  'Pilchard', 'Pine', 'Quail', 'Quince', 'Raven', 'Ragweed', 'Squid', 'Sycamore', 'Tapir', 'Teasel',
  'Unicorn', 'Umbrella', 'Vulture', 'Vervain', 'Walrus', 'Willow', 'Yak', 'Yew', 'Zebra', 'Zelkova',

  // Second 50 streets (east half) - minerals, emotions, and malaise
  'Amethyst', 'Anguish', 'Beryl', 'Bleak', 'Cobalt', 'Chagrin', 'Diamond', 'Despair', 'Emerald', 'Ennui',
  'Flint', 'Fear', 'Gypsum', 'Gloom', 'Hessite', 'Horror', 'Ivory', 'Ire', 'Jet', 'Jaded',
  'Kyanite', 'Killjoy', 'Lead', 'Lonely', 'Malachite', 'Malaise', 'Nickel', 'Nervous', 'Obsidian', 'Oppression',
  'Pyrites', 'Pessimism', 'Quartz', 'Qualms', 'Ruby', 'Regret', 'Steel', 'Sorrow', 'Turquoise', 'Torment',
  'Uranium', 'Unctuous', 'Vauxite', 'Vexation', 'Wulfenite', 'Woe', 'Yuksporite', 'Yearning', 'Zinc', 'Zestless'
];

export const BUILDINGS: Building[] = [
  // Transit stations from the game database (https://blood.pinkgothic.com/rbmlist.php?type=transit)
  // Buildings are placed in city blocks (even coordinates)
  { id: 'transit_1', type: 'transit', name: 'Calliope Station', coordinate: { x: 102, y: 102 } }, // Near Mongoose/25th
  { id: 'transit_2', type: 'transit', name: 'Clio Station', coordinate: { x: 102, y: 200 } }, // Near Mongoose/50th
  { id: 'transit_3', type: 'transit', name: 'Erato Station', coordinate: { x: 102, y: 200 } }, // Near Mongoose/75th
  { id: 'transit_4', type: 'transit', name: 'Eutepre Station', coordinate: { x: 200, y: 102 } }, // Near Zelkova/25th
  { id: 'transit_5', type: 'transit', name: 'Melpomene Station', coordinate: { x: 101, y: 101 } }, // Near Zelkova/50th
  { id: 'transit_6', type: 'transit', name: 'Polyhymnia Station', coordinate: { x: 151, y: 101 } }, // Near Malachite/50th
  { id: 'transit_7', type: 'transit', name: 'Terpsichore Station', coordinate: { x: 152, y: 152 } }, // Near Malachite/25th
  { id: 'transit_8', type: 'transit', name: 'Thalia Station', coordinate: { x: 152, y: 152 } }, // Near Malachite/50th
  { id: 'transit_9', type: 'transit', name: 'Urania Station', coordinate: { x: 152, y: 152 } }, // Near Malachite/75th

  // Banks from the actual game database (https://blood.pinkgothic.com/rbmlist.php?type=bank)
  // All banks are labeled "$BANK$" in the game
  // Buildings are located one square southeast of street intersections
  { id: 'bank_1', type: 'bank', name: '$BANK$', coordinate: { x: 2, y: 164 } }, // Aardvark and 82nd
  { id: 'bank_2', type: 'bank', name: '$BANK$', coordinate: { x: 4, y: 80 } }, // Alder and 40th
  { id: 'bank_3', type: 'bank', name: '$BANK$', coordinate: { x: 4, y: 160 } }, // Alder and 80th
  { id: 'bank_4', type: 'bank', name: '$BANK$', coordinate: { x: 102, y: 32 } }, // Amethyst and 16th
  { id: 'bank_5', type: 'bank', name: '$BANK$', coordinate: { x: 102, y: 74 } }, // Amethyst and 37th
  { id: 'bank_6', type: 'bank', name: '$BANK$', coordinate: { x: 102, y: 198 } }, // Amethyst and 99th
  { id: 'bank_7', type: 'bank', name: '$BANK$', coordinate: { x: 104, y: 60 } }, // Anguish and 30th
  { id: 'bank_8', type: 'bank', name: '$BANK$', coordinate: { x: 104, y: 146 } }, // Anguish and 73rd
  { id: 'bank_9', type: 'bank', name: '$BANK$', coordinate: { x: 104, y: 182 } }, // Anguish and 91st
  { id: 'bank_10', type: 'bank', name: '$BANK$', coordinate: { x: 8, y: 52 } }, // Beech and 26th
  { id: 'bank_11', type: 'bank', name: '$BANK$', coordinate: { x: 8, y: 78 } }, // Beech and 39th
  { id: 'bank_12', type: 'bank', name: '$BANK$', coordinate: { x: 106, y: 56 } }, // Beryl and 28th
  { id: 'bank_13', type: 'bank', name: '$BANK$', coordinate: { x: 106, y: 80 } }, // Beryl and 40th
  { id: 'bank_14', type: 'bank', name: '$BANK$', coordinate: { x: 106, y: 130 } }, // Beryl and 65th
  { id: 'bank_15', type: 'bank', name: '$BANK$', coordinate: { x: 106, y: 144 } }, // Beryl and 72nd
  { id: 'bank_16', type: 'bank', name: '$BANK$', coordinate: { x: 108, y: 28 } }, // Bleak and 14th
  { id: 'bank_17', type: 'bank', name: '$BANK$', coordinate: { x: 6, y: 26 } }, // Buzzard and 13th
  { id: 'bank_18', type: 'bank', name: '$BANK$', coordinate: { x: 12, y: 2 } }, // Cedar and 1st
  { id: 'bank_19', type: 'bank', name: '$BANK$', coordinate: { x: 12, y: 104 } }, // Cedar and 52nd
  { id: 'bank_20', type: 'bank', name: '$BANK$', coordinate: { x: 12, y: 160 } }, // Cedar and 80th
  { id: 'bank_21', type: 'bank', name: '$BANK$', coordinate: { x: 112, y: 46 } }, // Chagrin and 23rd
  { id: 'bank_22', type: 'bank', name: '$BANK$', coordinate: { x: 112, y: 78 } }, // Chagrin and 39th
  { id: 'bank_23', type: 'bank', name: '$BANK$', coordinate: { x: 110, y: 92 } }, // Cobalt and 46th
  { id: 'bank_24', type: 'bank', name: '$BANK$', coordinate: { x: 110, y: 162 } }, // Cobalt and 81st
  { id: 'bank_25', type: 'bank', name: '$BANK$', coordinate: { x: 110, y: 176 } }, // Cobalt and 88th
  { id: 'bank_26', type: 'bank', name: '$BANK$', coordinate: { x: 10, y: 186 } }, // Cormorant and 93rd
  { id: 'bank_27', type: 'bank', name: '$BANK$', coordinate: { x: 116, y: 2 } }, // Despair and 1st
  { id: 'bank_28', type: 'bank', name: '$BANK$', coordinate: { x: 116, y: 150 } }, // Despair and 75th
  { id: 'bank_29', type: 'bank', name: '$BANK$', coordinate: { x: 16, y: 8 } }, // Dogwood and 4th
  { id: 'bank_30', type: 'bank', name: '$BANK$', coordinate: { x: 14, y: 74 } }, // Duck and 37th
  { id: 'bank_31', type: 'bank', name: '$BANK$', coordinate: { x: 14, y: 154 } }, // Duck and 77th
  { id: 'bank_32', type: 'bank', name: '$BANK$', coordinate: { x: 18, y: 128 } }, // Eagle and 64th
  { id: 'bank_33', type: 'bank', name: '$BANK$', coordinate: { x: 18, y: 178 } }, // Eagle and 89th
  { id: 'bank_34', type: 'bank', name: '$BANK$', coordinate: { x: 20, y: 196 } }, // Elm and 98th
  { id: 'bank_35', type: 'bank', name: '$BANK$', coordinate: { x: 118, y: 38 } }, // Emerald and 19th
  { id: 'bank_36', type: 'bank', name: '$BANK$', coordinate: { x: 118, y: 180 } }, // Emerald and 90th
  { id: 'bank_37', type: 'bank', name: '$BANK$', coordinate: { x: 120, y: 40 } }, // Ennui and 20th
  { id: 'bank_38', type: 'bank', name: '$BANK$', coordinate: { x: 120, y: 156 } }, // Ennui and 78th
  { id: 'bank_39', type: 'bank', name: '$BANK$', coordinate: { x: 124, y: 30 } }, // Fear and 15th
  { id: 'bank_40', type: 'bank', name: '$BANK$', coordinate: { x: 22, y: 64 } }, // Ferret and 32nd
  { id: 'bank_41', type: 'bank', name: '$BANK$', coordinate: { x: 22, y: 180 } }, // Ferret and 90th
  { id: 'bank_42', type: 'bank', name: '$BANK$', coordinate: { x: 24, y: 4 } }, // Fir and 2nd
  { id: 'bank_43', type: 'bank', name: '$BANK$', coordinate: { x: 122, y: 74 } }, // Flint and 37th
  { id: 'bank_44', type: 'bank', name: '$BANK$', coordinate: { x: 122, y: 90 } }, // Flint and 45th
  { id: 'bank_45', type: 'bank', name: '$BANK$', coordinate: { x: 122, y: 94 } }, // Flint and 47th
  { id: 'bank_46', type: 'bank', name: '$BANK$', coordinate: { x: 122, y: 10 } }, // Flint and 5th
  { id: 'bank_47', type: 'bank', name: '$BANK$', coordinate: { x: 128, y: 68 } }, // Gloom and 34th
  { id: 'bank_48', type: 'bank', name: '$BANK$', coordinate: { x: 128, y: 142 } }, // Gloom and 71st
  { id: 'bank_49', type: 'bank', name: '$BANK$', coordinate: { x: 128, y: 178 } }, // Gloom and 89th
  { id: 'bank_50', type: 'bank', name: '$BANK$', coordinate: { x: 128, y: 180 } }, // Gloom and 90th
  { id: 'bank_51', type: 'bank', name: '$BANK$', coordinate: { x: 30, y: 92 } }, // Haddock and 46th
  { id: 'bank_52', type: 'bank', name: '$BANK$', coordinate: { x: 30, y: 104 } }, // Haddock and 52nd
  { id: 'bank_53', type: 'bank', name: '$BANK$', coordinate: { x: 30, y: 134 } }, // Haddock and 67th
  { id: 'bank_54', type: 'bank', name: '$BANK$', coordinate: { x: 30, y: 148 } }, // Haddock and 74th
  { id: 'bank_55', type: 'bank', name: '$BANK$', coordinate: { x: 30, y: 176 } }, // Haddock and 88th
  { id: 'bank_56', type: 'bank', name: '$BANK$', coordinate: { x: 130, y: 78 } }, // Hessite and 39th
  { id: 'bank_57', type: 'bank', name: '$BANK$', coordinate: { x: 130, y: 152 } }, // Hessite and 76th
  { id: 'bank_58', type: 'bank', name: '$BANK$', coordinate: { x: 32, y: 192 } }, // Holly and 96th
  { id: 'bank_59', type: 'bank', name: '$BANK$', coordinate: { x: 132, y: 98 } }, // Horror and 49th
  { id: 'bank_60', type: 'bank', name: '$BANK$', coordinate: { x: 132, y: 118 } }, // Horror and 59th
  { id: 'bank_61', type: 'bank', name: '$BANK$', coordinate: { x: 136, y: 62 } }, // Ire and 31st
  { id: 'bank_62', type: 'bank', name: '$BANK$', coordinate: { x: 136, y: 84 } }, // Ire and 42nd
  { id: 'bank_63', type: 'bank', name: '$BANK$', coordinate: { x: 136, y: 106 } }, // Ire and 53rd
  { id: 'bank_64', type: 'bank', name: '$BANK$', coordinate: { x: 136, y: 194 } }, // Ire and 97th
  { id: 'bank_65', type: 'bank', name: '$BANK$', coordinate: { x: 134, y: 10 } }, // Ivory and 5th
  { id: 'bank_66', type: 'bank', name: '$BANK$', coordinate: { x: 134, y: 142 } }, // Ivory and 71st
  { id: 'bank_67', type: 'bank', name: '$BANK$', coordinate: { x: 36, y: 2 } }, // Ivy and NCL
  { id: 'bank_68', type: 'bank', name: '$BANK$', coordinate: { x: 36, y: 140 } }, // Ivy and 70th
  { id: 'bank_69', type: 'bank', name: '$BANK$', coordinate: { x: 36, y: 158 } }, // Ivy and 79th
  { id: 'bank_70', type: 'bank', name: '$BANK$', coordinate: { x: 38, y: 86 } }, // Jackal and 43rd
  { id: 'bank_71', type: 'bank', name: '$BANK$', coordinate: { x: 140, y: 50 } }, // Jaded and 25th
  { id: 'bank_72', type: 'bank', name: '$BANK$', coordinate: { x: 140, y: 96 } }, // Jaded and 48th
  { id: 'bank_73', type: 'bank', name: '$BANK$', coordinate: { x: 140, y: 142 } }, // Jaded and 71st
  { id: 'bank_74', type: 'bank', name: '$BANK$', coordinate: { x: 40, y: 32 } }, // Juniper and 16th
  { id: 'bank_75', type: 'bank', name: '$BANK$', coordinate: { x: 40, y: 40 } }, // Juniper and 20th
  { id: 'bank_76', type: 'bank', name: '$BANK$', coordinate: { x: 40, y: 196 } }, // Juniper and 98th
  { id: 'bank_77', type: 'bank', name: '$BANK$', coordinate: { x: 44, y: 30 } }, // Knotweed and 15th
  { id: 'bank_78', type: 'bank', name: '$BANK$', coordinate: { x: 44, y: 58 } }, // Knotweed and 29th
  { id: 'bank_79', type: 'bank', name: '$BANK$', coordinate: { x: 42, y: 26 } }, // Kraken and 13th
  { id: 'bank_80', type: 'bank', name: '$BANK$', coordinate: { x: 42, y: 36 } }, // Kraken and 18th
  { id: 'bank_81', type: 'bank', name: '$BANK$', coordinate: { x: 42, y: 6 } }, // Kraken and 3rd
  { id: 'bank_82', type: 'bank', name: '$BANK$', coordinate: { x: 42, y: 68 } }, // Kraken and 34th
  { id: 'bank_83', type: 'bank', name: '$BANK$', coordinate: { x: 42, y: 90 } }, // Kraken and 45th
  { id: 'bank_84', type: 'bank', name: '$BANK$', coordinate: { x: 42, y: 96 } }, // Kraken and 48th
  { id: 'bank_85', type: 'bank', name: '$BANK$', coordinate: { x: 42, y: 14 } }, // Kraken and 7th
  { id: 'bank_86', type: 'bank', name: '$BANK$', coordinate: { x: 142, y: 80 } }, // Kyanite and 40th
  { id: 'bank_87', type: 'bank', name: '$BANK$', coordinate: { x: 142, y: 12 } }, // Kyanite and 6th
  { id: 'bank_88', type: 'bank', name: '$BANK$', coordinate: { x: 48, y: 66 } }, // Larch and 33rd
  { id: 'bank_89', type: 'bank', name: '$BANK$', coordinate: { x: 48, y: 14 } }, // Larch and 7th
  { id: 'bank_90', type: 'bank', name: '$BANK$', coordinate: { x: 48, y: 182 } }, // Larch and 91st
  { id: 'bank_91', type: 'bank', name: '$BANK$', coordinate: { x: 146, y: 22 } }, // Lead and 11th
  { id: 'bank_92', type: 'bank', name: '$BANK$', coordinate: { x: 146, y: 42 } }, // Lead and 21st
  { id: 'bank_93', type: 'bank', name: '$BANK$', coordinate: { x: 146, y: 176 } }, // Lead and 88th
  { id: 'bank_94', type: 'bank', name: '$BANK$', coordinate: { x: 46, y: 160 } }, // Lion and 80th
  { id: 'bank_95', type: 'bank', name: '$BANK$', coordinate: { x: 148, y: 186 } }, // Lonely and 93rd
  { id: 'bank_96', type: 'bank', name: '$BANK$', coordinate: { x: 150, y: 22 } }, // Malachite and 11th
  { id: 'bank_97', type: 'bank', name: '$BANK$', coordinate: { x: 150, y: 64 } }, // Malachite and 32nd
  { id: 'bank_98', type: 'bank', name: '$BANK$', coordinate: { x: 150, y: 174 } }, // Malachite and 87th
  { id: 'bank_99', type: 'bank', name: '$BANK$', coordinate: { x: 152, y: 72 } }, // Malaise and 36th
  { id: 'bank_100', type: 'bank', name: '$BANK$', coordinate: { x: 152, y: 8 } }, // Malaise and 4th
  { id: 'bank_101', type: 'bank', name: '$BANK$', coordinate: { x: 152, y: 100 } }, // Malaise and 50th
  { id: 'bank_102', type: 'bank', name: '$BANK$', coordinate: { x: 52, y: 68 } }, // Maple and 34th
  { id: 'bank_103', type: 'bank', name: '$BANK$', coordinate: { x: 52, y: 168 } }, // Maple and 84th
  { id: 'bank_104', type: 'bank', name: '$BANK$', coordinate: { x: 52, y: 170 } }, // Maple and 85th
  { id: 'bank_105', type: 'bank', name: '$BANK$', coordinate: { x: 50, y: 156 } }, // Mongoose and 78th
  { id: 'bank_106', type: 'bank', name: '$BANK$', coordinate: { x: 50, y: 158 } }, // Mongoose and 79th
  { id: 'bank_107', type: 'bank', name: '$BANK$', coordinate: { x: 50, y: 182 } }, // Mongoose and 91st
  { id: 'bank_108', type: 'bank', name: '$BANK$', coordinate: { x: 156, y: 20 } }, // Nervous and 10th
  { id: 'bank_109', type: 'bank', name: '$BANK$', coordinate: { x: 56, y: 74 } }, // Nettle and 37th
  { id: 'bank_110', type: 'bank', name: '$BANK$', coordinate: { x: 56, y: 134 } }, // Nettle and 67th
  { id: 'bank_111', type: 'bank', name: '$BANK$', coordinate: { x: 154, y: 186 } }, // Nickel and 93rd
  { id: 'bank_112', type: 'bank', name: '$BANK$', coordinate: { x: 158, y: 72 } }, // Obsidian and 36th
  { id: 'bank_113', type: 'bank', name: '$BANK$', coordinate: { x: 158, y: 158 } }, // Obsidian and 79th
  { id: 'bank_114', type: 'bank', name: '$BANK$', coordinate: { x: 58, y: 54 } }, // Octopus and 27th
  { id: 'bank_115', type: 'bank', name: '$BANK$', coordinate: { x: 58, y: 142 } }, // Octopus and 71st
  { id: 'bank_116', type: 'bank', name: '$BANK$', coordinate: { x: 58, y: 154 } }, // Octopus and 77th
  { id: 'bank_117', type: 'bank', name: '$BANK$', coordinate: { x: 60, y: 18 } }, // Olive and 9th
  { id: 'bank_118', type: 'bank', name: '$BANK$', coordinate: { x: 60, y: 198 } }, // Olive and 99th
  { id: 'bank_119', type: 'bank', name: '$BANK$', coordinate: { x: 160, y: 4 } }, // Oppression and 2nd
  { id: 'bank_120', type: 'bank', name: '$BANK$', coordinate: { x: 160, y: 178 } }, // Oppression and 89th
  { id: 'bank_121', type: 'bank', name: '$BANK$', coordinate: { x: 164, y: 38 } }, // Pessimism and 19th
  { id: 'bank_122', type: 'bank', name: '$BANK$', coordinate: { x: 164, y: 88 } }, // Pessimism and 44th
  { id: 'bank_123', type: 'bank', name: '$BANK$', coordinate: { x: 164, y: 174 } }, // Pessimism and 87th
  { id: 'bank_124', type: 'bank', name: '$BANK$', coordinate: { x: 62, y: 88 } }, // Pilchard and 44th
  { id: 'bank_125', type: 'bank', name: '$BANK$', coordinate: { x: 62, y: 120 } }, // Pilchard and 60th
  { id: 'bank_126', type: 'bank', name: '$BANK$', coordinate: { x: 64, y: 84 } }, // Pine and 42nd
  { id: 'bank_127', type: 'bank', name: '$BANK$', coordinate: { x: 64, y: 88 } }, // Pine and 44th
  { id: 'bank_128', type: 'bank', name: '$BANK$', coordinate: { x: 162, y: 22 } }, // Pyrites and 11th
  { id: 'bank_129', type: 'bank', name: '$BANK$', coordinate: { x: 162, y: 48 } }, // Pyrites and 24th
  { id: 'bank_130', type: 'bank', name: '$BANK$', coordinate: { x: 162, y: 180 } }, // Pyrites and 90th
  { id: 'bank_131', type: 'bank', name: '$BANK$', coordinate: { x: 66, y: 20 } }, // Quail and 10th
  { id: 'bank_132', type: 'bank', name: '$BANK$', coordinate: { x: 66, y: 24 } }, // Quail and 12th
  { id: 'bank_133', type: 'bank', name: '$BANK$', coordinate: { x: 66, y: 36 } }, // Quail and 18th
  { id: 'bank_134', type: 'bank', name: '$BANK$', coordinate: { x: 66, y: 52 } }, // Quail and 26th
  { id: 'bank_135', type: 'bank', name: '$BANK$', coordinate: { x: 66, y: 72 } }, // Quail and 36th
  { id: 'bank_136', type: 'bank', name: '$BANK$', coordinate: { x: 66, y: 82 } }, // Quail and 41st
  { id: 'bank_137', type: 'bank', name: '$BANK$', coordinate: { x: 66, y: 116 } }, // Quail and 58th
  { id: 'bank_138', type: 'bank', name: '$BANK$', coordinate: { x: 66, y: 148 } }, // Quail and 74th
  { id: 'bank_139', type: 'bank', name: '$BANK$', coordinate: { x: 168, y: 56 } }, // Qualms and 28th
  { id: 'bank_140', type: 'bank', name: '$BANK$', coordinate: { x: 168, y: 114 } }, // Qualms and 57th
  { id: 'bank_141', type: 'bank', name: '$BANK$', coordinate: { x: 168, y: 150 } }, // Qualms and 75th
  { id: 'bank_142', type: 'bank', name: '$BANK$', coordinate: { x: 166, y: 150 } }, // Quartz and 75th
  { id: 'bank_143', type: 'bank', name: '$BANK$', coordinate: { x: 68, y: 96 } }, // Quince and 48th
  { id: 'bank_144', type: 'bank', name: '$BANK$', coordinate: { x: 72, y: 62 } }, // Ragweed and 31st
  { id: 'bank_145', type: 'bank', name: '$BANK$', coordinate: { x: 72, y: 112 } }, // Ragweed and 56th
  { id: 'bank_146', type: 'bank', name: '$BANK$', coordinate: { x: 70, y: 22 } }, // Raven and 11th
  { id: 'bank_147', type: 'bank', name: '$BANK$', coordinate: { x: 70, y: 30 } }, // Raven and 15th
  { id: 'bank_148', type: 'bank', name: '$BANK$', coordinate: { x: 70, y: 158 } }, // Raven and 79th
  { id: 'bank_149', type: 'bank', name: '$BANK$', coordinate: { x: 70, y: 196 } }, // Raven and 98th
  { id: 'bank_150', type: 'bank', name: '$BANK$', coordinate: { x: 172, y: 140 } }, // Regret and 70th
  { id: 'bank_151', type: 'bank', name: '$BANK$', coordinate: { x: 170, y: 36 } }, // Ruby and 18th
  { id: 'bank_152', type: 'bank', name: '$BANK$', coordinate: { x: 170, y: 90 } }, // Ruby and 45th
  { id: 'bank_153', type: 'bank', name: '$BANK$', coordinate: { x: 176, y: 96 } }, // Sorrow and 48th
  { id: 'bank_154', type: 'bank', name: '$BANK$', coordinate: { x: 176, y: 18 } }, // Sorrow and 9th
  { id: 'bank_155', type: 'bank', name: '$BANK$', coordinate: { x: 74, y: 20 } }, // Squid and 10th
  { id: 'bank_156', type: 'bank', name: '$BANK$', coordinate: { x: 74, y: 48 } }, // Squid and 24th
  { id: 'bank_157', type: 'bank', name: '$BANK$', coordinate: { x: 174, y: 62 } }, // Steel and 31st
  { id: 'bank_158', type: 'bank', name: '$BANK$', coordinate: { x: 174, y: 128 } }, // Steel and 64th
  { id: 'bank_159', type: 'bank', name: '$BANK$', coordinate: { x: 174, y: 14 } }, // Steel and 7th
  { id: 'bank_160', type: 'bank', name: '$BANK$', coordinate: { x: 76, y: 32 } }, // Sycamore and 16th
  { id: 'bank_161', type: 'bank', name: '$BANK$', coordinate: { x: 78, y: 22 } }, // Tapir and 11th
  { id: 'bank_162', type: 'bank', name: '$BANK$', coordinate: { x: 78, y: 82 } }, // Tapir and 41st
  { id: 'bank_163', type: 'bank', name: '$BANK$', coordinate: { x: 78, y: 2 } }, // Tapir and NCL
  { id: 'bank_164', type: 'bank', name: '$BANK$', coordinate: { x: 80, y: 120 } }, // Teasel and 60th
  { id: 'bank_165', type: 'bank', name: '$BANK$', coordinate: { x: 80, y: 132 } }, // Teasel and 66th
  { id: 'bank_166', type: 'bank', name: '$BANK$', coordinate: { x: 80, y: 184 } }, // Teasel and 92nd
  { id: 'bank_167', type: 'bank', name: '$BANK$', coordinate: { x: 180, y: 46 } }, // Torment and 23rd
  { id: 'bank_168', type: 'bank', name: '$BANK$', coordinate: { x: 180, y: 56 } }, // Torment and 28th
  { id: 'bank_169', type: 'bank', name: '$BANK$', coordinate: { x: 180, y: 62 } }, // Torment and 31st
  { id: 'bank_170', type: 'bank', name: '$BANK$', coordinate: { x: 84, y: 40 } }, // Umbrella and 20th
  { id: 'bank_171', type: 'bank', name: '$BANK$', coordinate: { x: 84, y: 160 } }, // Umbrella and 80th
  { id: 'bank_172', type: 'bank', name: '$BANK$', coordinate: { x: 184, y: 46 } }, // Unctuous and 23rd
  { id: 'bank_173', type: 'bank', name: '$BANK$', coordinate: { x: 184, y: 86 } }, // Unctuous and 43rd
  { id: 'bank_174', type: 'bank', name: '$BANK$', coordinate: { x: 82, y: 22 } }, // Unicorn and 11th
  { id: 'bank_175', type: 'bank', name: '$BANK$', coordinate: { x: 82, y: 156 } }, // Unicorn and 78th
  { id: 'bank_176', type: 'bank', name: '$BANK$', coordinate: { x: 182, y: 2 } }, // Uranium and 1st
  { id: 'bank_177', type: 'bank', name: '$BANK$', coordinate: { x: 182, y: 96 } }, // Uranium and 48th
  { id: 'bank_178', type: 'bank', name: '$BANK$', coordinate: { x: 182, y: 186 } }, // Uranium and 93rd
  { id: 'bank_179', type: 'bank', name: '$BANK$', coordinate: { x: 182, y: 194 } }, // Uranium and 97th
  { id: 'bank_180', type: 'bank', name: '$BANK$', coordinate: { x: 186, y: 136 } }, // Vauxite and 68th
  { id: 'bank_181', type: 'bank', name: '$BANK$', coordinate: { x: 186, y: 182 } }, // Vauxite and 91st
  { id: 'bank_182', type: 'bank', name: '$BANK$', coordinate: { x: 188, y: 48 } }, // Vexation and 24th
  { id: 'bank_183', type: 'bank', name: '$BANK$', coordinate: { x: 86, y: 86 } }, // Vulture and 43rd
  { id: 'bank_184', type: 'bank', name: '$BANK$', coordinate: { x: 86, y: 164 } }, // Vulture and 82nd
  { id: 'bank_185', type: 'bank', name: '$BANK$', coordinate: { x: 2, y: 154 } }, // WCL and 77th
  { id: 'bank_186', type: 'bank', name: '$BANK$', coordinate: { x: 92, y: 168 } }, // Willow and 84th
  { id: 'bank_187', type: 'bank', name: '$BANK$', coordinate: { x: 192, y: 88 } }, // Woe and 44th
  { id: 'bank_188', type: 'bank', name: '$BANK$', coordinate: { x: 192, y: 170 } }, // Woe and 85th
  { id: 'bank_189', type: 'bank', name: '$BANK$', coordinate: { x: 94, y: 90 } }, // Yak and 45th
  { id: 'bank_190', type: 'bank', name: '$BANK$', coordinate: { x: 94, y: 164 } }, // Yak and 82nd
  { id: 'bank_191', type: 'bank', name: '$BANK$', coordinate: { x: 94, y: 188 } }, // Yak and 94th
  { id: 'bank_192', type: 'bank', name: '$BANK$', coordinate: { x: 196, y: 150 } }, // Yearning and 75th
  { id: 'bank_193', type: 'bank', name: '$BANK$', coordinate: { x: 196, y: 186 } }, // Yearning and 93rd
  { id: 'bank_194', type: 'bank', name: '$BANK$', coordinate: { x: 96, y: 8 } }, // Yew and 4th
  { id: 'bank_195', type: 'bank', name: '$BANK$', coordinate: { x: 98, y: 122 } }, // Zebra and 61st
  { id: 'bank_196', type: 'bank', name: '$BANK$', coordinate: { x: 100, y: 46 } }, // Zelkova and 23rd
  { id: 'bank_197', type: 'bank', name: '$BANK$', coordinate: { x: 100, y: 146 } }, // Zelkova and 73rd
  { id: 'bank_198', type: 'bank', name: '$BANK$', coordinate: { x: 198, y: 148 } }, // Zinc and 74th

  // Pubs from the actual game database (https://blood.pinkgothic.com/rbmlist.php?type=pub)
  { id: 'pub_1', type: 'pub', name: 'Abbot\'s Tavern', coordinate: { x: 18, y: 70 } }, // Gum and 33rd
  { id: 'pub_2', type: 'pub', name: 'Archer\'s Tavern', coordinate: { x: 106, y: 26 } }, // Knotweed and 11th
  { id: 'pub_3', type: 'pub', name: 'Baker\'s Tavern', coordinate: { x: 146, y: 34 } }, // Torment and 16th
  { id: 'pub_4', type: 'pub', name: 'Balmer\'s Tavern', coordinate: { x: 26, y: 30 } }, // Fir and 13th
  { id: 'pub_5', type: 'pub', name: 'Barker\'s Tavern', coordinate: { x: 106, y: 10 } }, // Nettle and 3rd
  { id: 'pub_6', type: 'pub', name: 'Bloodwood Canopy Cafe', coordinate: { x: 18, y: 18 } }, // Duck and 7th
  { id: 'pub_7', type: 'pub', name: 'Bowyer\'s Tavern', coordinate: { x: 34, y: 130 } }, // Haddock and 64th
  { id: 'pub_8', type: 'pub', name: 'Chandler\'s Tavern', coordinate: { x: 90, y: 146 } }, // Raven and 71st
  { id: 'pub_9', type: 'pub', name: 'Club Xendom', coordinate: { x: 110, y: 130 } }, // Bleak and 64th
  { id: 'pub_10', type: 'pub', name: 'Draper\'s Tavern', coordinate: { x: 114, y: 98 } }, // Pilchard and 48th
  { id: 'pub_11', type: 'pub', name: 'Falconer\'s Tavern', coordinate: { x: 54, y: 182 } }, // Yak and 90th
  { id: 'pub_12', type: 'pub', name: 'Fiddler\'s Tavern', coordinate: { x: 138, y: 42 } }, // Ruby and 20th
  { id: 'pub_13', type: 'pub', name: 'Fisher\'s Tavern', coordinate: { x: 26, y: 170 } }, // Ferret and 84th
  { id: 'pub_14', type: 'pub', name: 'Five French Hens', coordinate: { x: 106, y: 138 } }, // Pine and 68th
  { id: 'pub_15', type: 'pub', name: 'Freeman\'s Tavern', coordinate: { x: 142, y: 54 } }, // Steel and 26th
  { id: 'pub_16', type: 'pub', name: 'Harper\'s Tavern', coordinate: { x: 30, y: 198 } }, // Gibbon and 98th
  { id: 'pub_17', type: 'pub', name: 'Hawker\'s Tavern', coordinate: { x: 146, y: 130 } }, // Ire and 63rd
  { id: 'pub_18', type: 'pub', name: 'Hunter\'s Tavern', coordinate: { x: 26, y: 146 } }, // Fir and 72nd
  { id: 'pub_19', type: 'pub', name: 'Lovers at Dawn Inn', coordinate: { x: 110, y: 154 } }, // Malachite and 76th
  { id: 'pub_20', type: 'pub', name: 'Marbler\'s Tavern', coordinate: { x: 110, y: 158 } }, // Ragweed and 78th
  { id: 'pub_21', type: 'pub', name: 'Miller\'s Tavern', coordinate: { x: 26, y: 90 } }, // Ferret and 44th
  { id: 'pub_22', type: 'pub', name: 'Oyler\'s Tavern', coordinate: { x: 142, y: 10 } }, // Steel and 3rd
  { id: 'pub_23', type: 'pub', name: 'Painter\'s Tavern', coordinate: { x: 110, y: 186 } }, // Diamond and 92nd
  { id: 'pub_24', type: 'pub', name: 'Peace De Résistance', coordinate: { x: 50, y: 170 } }, // Walrus and 83rd
  { id: 'pub_25', type: 'pub', name: 'Porter\'s Tavern', coordinate: { x: 142, y: 50 } }, // Steel and 23rd
  { id: 'pub_26', type: 'pub', name: 'Pub Forty-two', coordinate: { x: 154, y: 70 } }, // Fear and 34th
  { id: 'pub_27', type: 'pub', name: 'Ratskeller', coordinate: { x: 90, y: 126 } }, // Qualms and 61st
  { id: 'pub_28', type: 'pub', name: 'Rider\'s Tavern', coordinate: { x: 106, y: 198 } }, // Beryl and 98th
  { id: 'pub_29', type: 'pub', name: 'Rogue\'s Tavern', coordinate: { x: 90, y: 14 } }, // Qualms and 5th
  { id: 'pub_30', type: 'pub', name: 'Shooter\'s Tavern', coordinate: { x: 22, y: 138 } }, // Eagle and 67th
  { id: 'pub_31', type: 'pub', name: 'Ten Turtle Doves', coordinate: { x: 106, y: 198 } }, // Anguish and 98th
  { id: 'pub_32', type: 'pub', name: 'The Angel\'s Wing', coordinate: { x: 134, y: 94 } }, // Oppression and 45th
  { id: 'pub_33', type: 'pub', name: 'The Axeman and Guillotine', coordinate: { x: 134, y: 142 } }, // Oppression and 70th
  { id: 'pub_34', type: 'pub', name: 'The Blinking Pixie', coordinate: { x: 122, y: 200 } }, // Ivory and 99th
  { id: 'pub_35', type: 'pub', name: 'The Book and Beggar', coordinate: { x: 126, y: 78 } }, // Pessimism and 37th
  { id: 'pub_36', type: 'pub', name: 'The Booze Hall', coordinate: { x: 110, y: 142 } }, // Malachite and 70th
  { id: 'pub_37', type: 'pub', name: 'The Brain and Hatchling', coordinate: { x: 134, y: 86 } }, // Pyrites and 41st
  { id: 'pub_38', type: 'pub', name: 'The Brimming Brew', coordinate: { x: 158, y: 178 } }, // Lonely and 87th
  { id: 'pub_39', type: 'pub', name: 'The Broken Lover', coordinate: { x: 90, y: 90 } }, // Qualms and 43rd
  { id: 'pub_40', type: 'pub', name: 'The Burning Brand', coordinate: { x: 138, y: 182 } }, // Ruby and 90th
  { id: 'pub_41', type: 'pub', name: 'The Cart and Castle', coordinate: { x: 50, y: 138 } }, // Walrus and 68th
  { id: 'pub_42', type: 'pub', name: 'The Celtic Moonlight', coordinate: { x: 26, y: 6 } }, // Lion and 1st
  { id: 'pub_43', type: 'pub', name: 'The Clam and Champion', coordinate: { x: 10, y: 42 } }, // Beech and 19th
  { id: 'pub_44', type: 'pub', name: 'The Cosy Walrus', coordinate: { x: 82, y: 66 } }, // Nightingale and 32nd
  { id: 'pub_45', type: 'pub', name: 'The Crossed Swords Tavern', coordinate: { x: 154, y: 142 } }, // Sorrow and 70th
  { id: 'pub_46', type: 'pub', name: 'The Crouching Tiger', coordinate: { x: 18, y: 22 } }, // Gum and 10th
  { id: 'pub_47', type: 'pub', name: 'The Crow\'s Nest Tavern', coordinate: { x: 158, y: 94 } }, // Killjoy and 46th
  { id: 'pub_48', type: 'pub', name: 'The Dead of Night', coordinate: { x: 106, y: 106 } }, // Pine and 51st
  { id: 'pub_49', type: 'pub', name: 'The Dog House', coordinate: { x: 110, y: 14 } }, // Ragweed and 6th
  { id: 'pub_50', type: 'pub', name: 'The Drunk Cup', coordinate: { x: 154, y: 190 } }, // Zinc and 94th
  { id: 'pub_51', type: 'pub', name: 'The Ferryman\'s Arms', coordinate: { x: 54, y: 62 } }, // Yak and 30th
  { id: 'pub_52', type: 'pub', name: 'The Flirty Angel', coordinate: { x: 118, y: 6 } }, // Nervous and 2nd
  { id: 'pub_53', type: 'pub', name: 'The Freudian Slip', coordinate: { x: 154, y: 186 } }, // Sorrow and 91st
  { id: 'pub_54', type: 'pub', name: 'The Ghastly Flabber', coordinate: { x: 50, y: 126 } }, // Walrus and 62nd
  { id: 'pub_55', type: 'pub', name: 'The Golden Patridge', coordinate: { x: 26, y: 194 } }, // Lion and 95th
  { id: 'pub_56', type: 'pub', name: 'The Guardian Outpost', coordinate: { x: 102, y: 158 } }, // Yew and 78th
  { id: 'pub_57', type: 'pub', name: 'The Gunny\'s Shack', coordinate: { x: 130, y: 110 } }, // Obsidian and 54th
  { id: 'pub_58', type: 'pub', name: 'The Hell\'s Angels Clubhouse', coordinate: { x: 114, y: 114 } }, // Hessite and 55th
  { id: 'pub_59', type: 'pub', name: 'The Kestrel', coordinate: { x: 18, y: 110 } }, // Dogwood and 54th
  { id: 'pub_60', type: 'pub', name: 'The Last Days', coordinate: { x: 82, y: 34 } }, // Mongoose and 15th
  { id: 'pub_61', type: 'pub', name: 'The Lazy Sunflower', coordinate: { x: 46, y: 186 } }, // Unicorn and 92nd
  { id: 'pub_62', type: 'pub', name: 'The Lightbringer', coordinate: { x: 118, y: 86 } }, // Nervous and 42nd
  { id: 'pub_63', type: 'pub', name: 'The Lounge', coordinate: { x: 106, y: 42 } }, // Kyanite and 19th
  { id: 'pub_64', type: 'pub', name: 'The Marsupial', coordinate: { x: 154, y: 98 } }, // Yearning and 48th
  { id: 'pub_65', type: 'pub', name: 'The McAllister Tavern', coordinate: { x: 114, y: 198 } }, // Hessite and 97th
  { id: 'pub_66', type: 'pub', name: 'The Moon', coordinate: { x: 18, y: 158 } }, // Dogwood and 78th
  { id: 'pub_67', type: 'pub', name: 'The Ox and Bow', coordinate: { x: 30, y: 90 } }, // Gibbon and 44th
  { id: 'pub_68', type: 'pub', name: 'The Palm & Parson Public Tavern', coordinate: { x: 38, y: 110 } }, // Jackal and 53rd
  { id: 'pub_69', type: 'pub', name: 'The Poltroon', coordinate: { x: 86, y: 174 } }, // Quail and 85th
  { id: 'pub_70', type: 'pub', name: 'The Red Arch', coordinate: { x: 110, y: 2 } }, // Bleak and NCL (North City Limit)
  { id: 'pub_71', type: 'pub', name: 'The Round Room', coordinate: { x: 138, y: 46 } }, // Ruby and 21st
  { id: 'pub_72', type: 'pub', name: 'The Scupper and Forage', coordinate: { x: 110, y: 6 } }, // Diamond and 1st
  { id: 'pub_73', type: 'pub', name: 'The Shattered Platter', coordinate: { x: 106, y: 186 } }, // Pine and 91st
  { id: 'pub_74', type: 'pub', name: 'The Shining Devil', coordinate: { x: 118, y: 118 } }, // Nickel and 57th
  { id: 'pub_75', type: 'pub', name: 'The Sign of the Times', coordinate: { x: 6, y: 118 } }, // Alder and 57th
  { id: 'pub_76', type: 'pub', name: 'The Stick and Stag', coordinate: { x: 150, y: 162 } }, // Ennui and 80th
  { id: 'pub_77', type: 'pub', name: 'The Sun', coordinate: { x: 162, y: 178 } }, // Malaise and 87th
  { id: 'pub_78', type: 'pub', name: 'The Sunken Sofa', coordinate: { x: 22, y: 70 } }, // Eagle and 34th
  { id: 'pub_79', type: 'pub', name: 'The Swords at Dawn', coordinate: { x: 142, y: 146 } }, // Turquoise and 71st
  { id: 'pub_80', type: 'pub', name: 'The Teapot and Toxin', coordinate: { x: 22, y: 190 } }, // Elm and 93rd
  { id: 'pub_81', type: 'pub', name: 'The Thief of Hearts', coordinate: { x: 82, y: 186 } }, // Mongoose and 92nd
  { id: 'pub_82', type: 'pub', name: 'The Thorn\'s Pride', coordinate: { x: 150, y: 78 } }, // Despair and 38th
  { id: 'pub_83', type: 'pub', name: 'The Two Sisters', coordinate: { x: 54, y: 74 } }, // Zebra and 36th
  { id: 'pub_84', type: 'pub', name: 'The Wart and Whisk', coordinate: { x: 106, y: 174 } }, // Nettle and 86th
  { id: 'pub_85', type: 'pub', name: 'The Whirling Dervish', coordinate: { x: 182, y: 182 } }, // Sycamore and 89th
  { id: 'pub_86', type: 'pub', name: 'The Wild Hunt', coordinate: { x: 98, y: 26 } }, // Vulture and 11th
  { id: 'pub_87', type: 'pub', name: 'Vagabond\'s Tavern', coordinate: { x: 102, y: 14 } }, // Yew and 5th
  { id: 'pub_88', type: 'pub', name: 'Xendom Tavern', coordinate: { x: 106, y: 138 } }, // Anguish and 68th
  { id: 'pub_89', type: 'pub', name: 'Ye Olde Gallows Ale House', coordinate: { x: 134, y: 142 } }, // Pyrites and 70th

  // Vampire Lairs from the actual game database (https://blood.pinkgothic.com/rbmlist.php?type=lair)
  { id: 'lair_1', type: 'lair', name: 'Ace\'s House of Dumont', coordinate: { x: 14, y: 200 } }, // Cedar and 99th
  { id: 'lair_2', type: 'lair', name: 'Alatáriël Maenor', coordinate: { x: 110, y: 102 } }, // Diamond and 50th
  { id: 'lair_3', type: 'lair', name: 'Alpha Dragon\'s and Lyric\'s House of Dragon and Flame', coordinate: { x: 106, y: 182 } }, // Amethyst and 90th
  { id: 'lair_4', type: 'lair', name: 'AmadisdeGaula\'s Stellaburgi', coordinate: { x: 150, y: 78 } }, // Wulfenite and 38th
  { id: 'lair_5', type: 'lair', name: 'Andre\'s Crypt', coordinate: { x: 26, y: 22 } }, // Ferret and 10th
  { id: 'lair_6', type: 'lair', name: 'Annabelle\'s Paradise', coordinate: { x: 114, y: 174 } }, // Emerald and 85th
  { id: 'lair_7', type: 'lair', name: 'Anthony\'s Gero Claw', coordinate: { x: 98, y: 82 } }, // Vulture and 39th
  { id: 'lair_8', type: 'lair', name: 'Aphaythean Vineyards', coordinate: { x: 102, y: 30 } }, // Willow and 13th
  { id: 'lair_9', type: 'lair', name: 'Archangel\'s Castle', coordinate: { x: 10, y: 10 } }, // Beech and 4th
  { id: 'lair_10', type: 'lair', name: 'Avant\'s Garden', coordinate: { x: 106, y: 138 } }, // Amethyst and 68th
  { id: 'lair_11', type: 'lair', name: 'bitercat\'s mews', coordinate: { x: 26, y: 86 } }, // Lion and 42nd
  { id: 'lair_12', type: 'lair', name: 'black_dragonet\'s mansion', coordinate: { x: 134, y: 162 } }, // Oppression and 80th
  { id: 'lair_13', type: 'lair', name: 'Blutengel\'s Temple of Blood', coordinate: { x: 154, y: 30 } }, // Fear and 13th
  { id: 'lair_14', type: 'lair', name: 'Cair Paravel', coordinate: { x: 26, y: 58 } }, // Lion and 27th
  { id: 'lair_15', type: 'lair', name: 'Capadocian Castle', coordinate: { x: 102, y: 102 } }, // Larch and 49th
  { id: 'lair_16', type: 'lair', name: 'Castle of Shadows', coordinate: { x: 142, y: 174 } }, // Turquoise and 86th
  { id: 'lair_17', type: 'lair', name: 'Castle RavenesQue', coordinate: { x: 90, y: 2 } }, // Raven and NCL
  { id: 'lair_18', type: 'lair', name: 'ChaosRaven\'s Dimensional Tower', coordinate: { x: 158, y: 50 } }, // Killjoy and 23rd
  { id: 'lair_19', type: 'lair', name: 'CHASS\'s forever-blues hall', coordinate: { x: 146, y: 154 } }, // Torment and 75th
  { id: 'lair_20', type: 'lair', name: 'CrimsonClover\'s Hideaway', coordinate: { x: 110, y: 174 } }, // Diamond and 85th
  { id: 'lair_21', type: 'lair', name: 'CrowsSong\'s Blackbird Towers', coordinate: { x: 150, y: 10 } }, // Wulfenite and 3rd
  { id: 'lair_22', type: 'lair', name: 'D\'dary Manor', coordinate: { x: 6, y: 6 } }, // Aardvark and 1st
  { id: 'lair_23', type: 'lair', name: 'Daphne\'s Dungeons', coordinate: { x: 110, y: 130 } }, // Malachite and 64th
  { id: 'lair_24', type: 'lair', name: 'DarkestDesire\'s Chambers', coordinate: { x: 150, y: 114 } }, // Despair and 56th
  { id: 'lair_25', type: 'lair', name: 'deaths embrace\'s House of R\'lyeh', coordinate: { x: 34, y: 166 } }, // Holly and 81st
  { id: 'lair_26', type: 'lair', name: 'Devil Miyu\'s Abeir-Toril', coordinate: { x: 154, y: 6 } }, // Fear and 2nd
  { id: 'lair_27', type: 'lair', name: 'Devil Miyu\'s Edge of Reason', coordinate: { x: 154, y: 2 } }, // Fear and NCL
  { id: 'lair_28', type: 'lair', name: 'Devil Miyu\'s Lair', coordinate: { x: 154, y: 6 } }, // Fear and 1st
  { id: 'lair_29', type: 'lair', name: 'ElishaDraken\'s Sanguine Ankh', coordinate: { x: 82, y: 122 } }, // Nightingale and 59th
  { id: 'lair_30', type: 'lair', name: 'espy\'s Jaded Sorrows', coordinate: { x: 122, y: 142 } }, // Jaded and 69th
  { id: 'lair_31', type: 'lair', name: 'Freedom Trade Alliance', coordinate: { x: 106, y: 94 } }, // Amethyst and 46th
  { id: 'lair_32', type: 'lair', name: 'Gypsychild\'s Caravan', coordinate: { x: 146, y: 142 } }, // Torment and 69th
  { id: 'lair_33', type: 'lair', name: 'Hesu\'s Place', coordinate: { x: 90, y: 50 } }, // Raven and 24th
  { id: 'lair_34', type: 'lair', name: 'Hexenkessel', coordinate: { x: 38, y: 170 } }, // Jackal and 83rd
  { id: 'lair_35', type: 'lair', name: 'Jacomo Varis\' Shadow Manor', coordinate: { x: 90, y: 194 } }, // Raven and 96th
  { id: 'lair_36', type: 'lair', name: 'jaxi\'s and Speedy\'s Cave', coordinate: { x: 90, y: 50 } }, // Raven and 23rd
  { id: 'lair_37', type: 'lair', name: 'King Lestat\'s Le Paradis Caché', coordinate: { x: 106, y: 182 } }, // Cobalt and 90th
  { id: 'lair_38', type: 'lair', name: 'La Cucina', coordinate: { x: 110, y: 58 } }, // Diamond and 28th
  { id: 'lair_39', type: 'lair', name: 'Lady Ophy\'s and WhiteLighter\'s Abode', coordinate: { x: 162, y: 190 } }, // Malaise and 94th
  { id: 'lair_40', type: 'lair', name: 'LadyFae\'s and nitenurse\'s Solas Gealaí Caisleán', coordinate: { x: 90, y: 154 } }, // Raven and 76th
  { id: 'lair_41', type: 'lair', name: 'Lass\' Lair', coordinate: { x: 102, y: 6 } }, // Vervain and 1st
  { id: 'lair_42', type: 'lair', name: 'Lord Galamushi\'s Enchanted Mansion', coordinate: { x: 106, y: 106 } }, // Anguish and 52nd
  { id: 'lair_43', type: 'lair', name: 'Majica\'s Playground', coordinate: { x: 102, y: 102 } }, // Willow and 50th
  { id: 'lair_44', type: 'lair', name: 'Marlena\'s Wishing Well', coordinate: { x: 154, y: 114 } }, // Fear and 56th
  { id: 'lair_45', type: 'lair', name: 'Master Dracula\'s and Juliana\'s Abode', coordinate: { x: 158, y: 154 } }, // Gloom and 76th
  { id: 'lair_46', type: 'lair', name: 'Moirai\'s Gate to the Church of Blood', coordinate: { x: 110, y: 30 } }, // Horror and 13th
  { id: 'lair_47', type: 'lair', name: 'Moonlight Gardens', coordinate: { x: 142, y: 178 } }, // Turquoise and 87th
  { id: 'lair_48', type: 'lair', name: 'Ms Delgado\'s Manor', coordinate: { x: 154, y: 142 } }, // Sorrow and 69th
  { id: 'lair_49', type: 'lair', name: 'MyMotherInLaw\'s Home for Wayward Ghouls', coordinate: { x: 106, y: 142 } }, // Amethyst and 69th
  { id: 'lair_50', type: 'lair', name: 'NightWatch Headquarters', coordinate: { x: 102, y: 106 } }, // Larch and 51st
  { id: 'lair_51', type: 'lair', name: 'obsidian\'s Arboretum', coordinate: { x: 130, y: 178 } }, // Obsidian and 88th
  { id: 'lair_52', type: 'lair', name: 'obsidian\'s Castle of Warwick', coordinate: { x: 130, y: 2 } }, // Obsidian and NCL
  { id: 'lair_53', type: 'lair', name: 'obsidian\'s Château de la Lumière', coordinate: { x: 130, y: 134 } }, // Obsidian and 66th
  { id: 'lair_54', type: 'lair', name: 'obsidian\'s château noir', coordinate: { x: 130, y: 200 } }, // Obsidian and 99th
  { id: 'lair_55', type: 'lair', name: 'obsidian\'s Hall of Shifting Realms', coordinate: { x: 130, y: 34 } }, // Obsidian and 15th
  { id: 'lair_56', type: 'lair', name: 'obsidian\'s Penthouse', coordinate: { x: 130, y: 62 } }, // Obsidian and 29th
  { id: 'lair_57', type: 'lair', name: 'obsidian\'s Silver Towers', coordinate: { x: 130, y: 106 } }, // Obsidian and 51st
  { id: 'lair_58', type: 'lair', name: 'obsidian\'s Tranquility', coordinate: { x: 130, y: 162 } }, // Obsidian and 80th
  { id: 'lair_59', type: 'lair', name: 'obsidians, Phoenixxe\'s and Em\'s Heaven\'s Gate', coordinate: { x: 130, y: 94 } }, // Obsidian and 45th
  { id: 'lair_60', type: 'lair', name: 'Occamrazor\'s House of Ears', coordinate: { x: 102, y: 62 } }, // Yew and 30th
  { id: 'lair_61', type: 'lair', name: 'Ordo Dracul Sanctum', coordinate: { x: 82, y: 158 } }, // Nightingale and 77th
  { id: 'lair_62', type: 'lair', name: 'Palazzo Lucius', coordinate: { x: 54, y: 58 } }, // Zebra and 27th
  { id: 'lair_63', type: 'lair', name: 'Pandrora and CBK\'s Chamber of Horrors', coordinate: { x: 146, y: 194 } }, // Torment and 95th
  { id: 'lair_64', type: 'lair', name: 'RemipunX\'s Sacred Yew', coordinate: { x: 106, y: 86 } }, // Cobalt and 42nd
  { id: 'lair_65', type: 'lair', name: 'renovate\'s grove', coordinate: { x: 46, y: 146 } }, // Umbrella and 71st
  { id: 'lair_66', type: 'lair', name: 'Saki\'s Fondest Wish', coordinate: { x: 82, y: 38 } }, // Nightingale and 17th
  { id: 'lair_67', type: 'lair', name: 'Samantha Dawn\'s Salacious Sojourn', coordinate: { x: 106, y: 110 } }, // Anguish and 53rd
  { id: 'lair_68', type: 'lair', name: 'Sartori\'s Domicile', coordinate: { x: 22, y: 6 } }, // Elm and 1st
  { id: 'lair_69', type: 'lair', name: 'SCORPIOUS1\'s Tower of Truth', coordinate: { x: 154, y: 118 } }, // Yearning and 58th
  { id: 'lair_70', type: 'lair', name: 'setitevampyr\'s Temple', coordinate: { x: 90, y: 102 } }, // Raven and 50th
  { id: 'lair_71', type: 'lair', name: 'Shaarinya\'s Sanguine Sanctuary', coordinate: { x: 90, y: 158 } }, // Raven and 77th
  { id: 'lair_72', type: 'lair', name: 'Shadow bat\'s Sanctorium', coordinate: { x: 106, y: 154 } }, // Cobalt and 76th
  { id: 'lair_73', type: 'lair', name: 'SIE Compound', coordinate: { x: 90, y: 30 } }, // Raven and 13th
  { id: 'lair_74', type: 'lair', name: 'starreagle\'s Paradise Lair', coordinate: { x: 106, y: 50 } }, // Beryl and 24th
  { id: 'lair_75', type: 'lair', name: 'Steele Industries', coordinate: { x: 46, y: 90 } }, // Umbrella and 44th
  { id: 'lair_76', type: 'lair', name: 'stormy jayne\'s web', coordinate: { x: 118, y: 200 } }, // Nickel and 99th
  { id: 'lair_77', type: 'lair', name: 'Talon Castle', coordinate: { x: 102, y: 74 } }, // Willow and 35th
  { id: 'lair_78', type: 'lair', name: 'tejas_dragon\'s Lair', coordinate: { x: 102, y: 142 } }, // Zelkova and 69th
  { id: 'lair_79', type: 'lair', name: 'The Calignite', coordinate: { x: 22, y: 34 } }, // Eagle and 16th
  { id: 'lair_80', type: 'lair', name: 'The COVE', coordinate: { x: 106, y: 106 } }, // Knotweed and 51st
  { id: 'lair_81', type: 'lair', name: 'The Dragons Lair Club', coordinate: { x: 102, y: 82 } }, // Vervain and 39th
  { id: 'lair_82', type: 'lair', name: 'The Eternal Spiral', coordinate: { x: 106, y: 142 } }, // Anguish and 69th
  { id: 'lair_83', type: 'lair', name: 'The goatsucker\'s lair', coordinate: { x: 54, y: 30 } }, // Yak and 13th
  { id: 'lair_84', type: 'lair', name: 'The Halls of Heorot', coordinate: { x: 122, y: 154 } }, // Jaded and 75th
  { id: 'lair_85', type: 'lair', name: 'The Inner Circle Manor', coordinate: { x: 110, y: 54 } }, // Diamond and 26th
  { id: 'lair_86', type: 'lair', name: 'The Ivory Tower', coordinate: { x: 102, y: 154 } }, // Zelkova and 76th
  { id: 'lair_87', type: 'lair', name: 'The Ixora Estate', coordinate: { x: 114, y: 98 } }, // Lead and 48th
  { id: 'lair_88', type: 'lair', name: 'The Lokason Myrkrasetur', coordinate: { x: 150, y: 82 } }, // Wulfenite and 40th
  { id: 'lair_89', type: 'lair', name: 'The Path of Enlightenment Castle', coordinate: { x: 102, y: 162 } }, // Willow and 80th
  { id: 'lair_90', type: 'lair', name: 'The RavenBlack Bite', coordinate: { x: 134, y: 82 } }, // Oppression and 40th
  { id: 'lair_91', type: 'lair', name: 'The Reynolds\' Estate', coordinate: { x: 106, y: 50 } }, // Beryl and 23rd
  { id: 'lair_92', type: 'lair', name: 'The River Passage', coordinate: { x: 102, y: 70 } }, // Yew and 33rd
  { id: 'lair_93', type: 'lair', name: 'The Sakura Garden', coordinate: { x: 118, y: 158 } }, // Nickel and 77th
  { id: 'lair_94', type: 'lair', name: 'The Sanctum of Vermathrax-rex and Bellina', coordinate: { x: 146, y: 200 } }, // Vexation and 99th
  { id: 'lair_95', type: 'lair', name: 'The Scythe\'s Negotiation Offices', coordinate: { x: 178, y: 178 } }, // Vauxite and 88th
  { id: 'lair_96', type: 'lair', name: 'The Sepulchre of Shadows', coordinate: { x: 150, y: 6 } }, // Ennui and 1st
  { id: 'lair_97', type: 'lair', name: 'The Towers of the Crossed Swords', coordinate: { x: 146, y: 134 } }, // Torment and 66th
  { id: 'lair_98', type: 'lair', name: 'Wilde Sanctuary', coordinate: { x: 102, y: 106 } }, // Willow and 51st
  { id: 'lair_99', type: 'lair', name: 'Wilde Wolfe Estate', coordinate: { x: 102, y: 102 } }, // Vervain and 50th
  { id: 'lair_100', type: 'lair', name: 'Willhelm\'s Warrior House', coordinate: { x: 110, y: 110 } }, // Horror and 53rd
  { id: 'lair_101', type: 'lair', name: 'Willow Woods\' & The Ent Moot', coordinate: { x: 102, y: 110 } }, // Willow and 54th
  { id: 'lair_102', type: 'lair', name: 'Wolfe Mansion', coordinate: { x: 154, y: 42 } }, // Yearning and 20th
  { id: 'lair_103', type: 'lair', name: 'Wolfe Mansion', coordinate: { x: 102, y: 42 } }, // Willow and 20th
  { id: 'lair_104', type: 'lair', name: 'Wolfshadow\'s and Crazy\'s RBC Casino', coordinate: { x: 114, y: 146 } }, // Lead and 72nd
  { id: 'lair_105', type: 'lair', name: 'Wyndcryer\'s TygerNight\'s and Bambi\'s Lair', coordinate: { x: 46, y: 158 } }, // Unicorn and 77th
  { id: 'lair_106', type: 'lair', name: 'X', coordinate: { x: 114, y: 2 } }, // Emerald and NCL

  // Magic shops scattered around
  { id: 'shop_1', type: 'shop', name: 'Mystic Emporium', coordinate: { x: 82, y: 122 } },
  { id: 'shop_2', type: 'shop', name: 'Arcane Artifacts', coordinate: { x: 134, y: 34 } },
  { id: 'shop_3', type: 'shop', name: 'Shadow Supplies', coordinate: { x: 174, y: 82 } },
  { id: 'shop_4', type: 'shop', name: 'Occult Oddities', coordinate: { x: 62, y: 54 } },
  { id: 'shop_5', type: 'shop', name: 'Dark Arts Depot', coordinate: { x: 142, y: 154 } },
  { id: 'shop_6', type: 'shop', name: 'Necromancer\'s Nook', coordinate: { x: 34, y: 134 } },

  // Hidden/Special buildings
  { id: 'hidden_1', type: 'hidden', name: 'Secret Lair', coordinate: { x: 30, y: 178 } },
  { id: 'hidden_2', type: 'hidden', name: 'Underground Hideout', coordinate: { x: 138, y: 50 } },
  { id: 'hidden_3', type: 'hidden', name: 'Mysterious Building', coordinate: { x: 86, y: 158 } },
];

export const CITY_SIZE = 202;

export function getStreetNumber(index: number): string {
  // Handle city limits
  if (index <= 1) return 'NCL'; // Northern City Limit
  if (index >= 200) return 'SCL'; // Southern City Limit

  // Street numbers start at coordinate 2 (1st Street = coordinates 2-3, 2nd Street = coordinates 4-5, etc.)
  const streetNum = Math.floor((index - 2) / 2) + 1;
  if (streetNum < 1 || streetNum > 100) return 'Unknown';
  return `${streetNum}${streetNum === 1 ? 'st' : streetNum === 2 ? 'nd' : streetNum === 3 ? 'rd' : 'th'} Street`;
}

export function getStreetName(index: number): string {
  // Handle city limits
  if (index <= 1) return 'WCL'; // Western City Limit
  if (index >= 200) return 'ECL'; // Eastern City Limit

  // Street names start at coordinate 2 (each street covers 2 coordinates in the 200x200 grid)
  const streetIndex = Math.floor((index - 2) / 2);
  if (streetIndex < 0 || streetIndex >= 100) return 'Unknown';
  return STREET_NAMES[streetIndex];
}

export function getLocationName(x: number, y: number): string {
  const streetName = getStreetName(x);     // X = named streets (east-west)
  const streetNumber = getStreetNumber(y); // Y = numbered streets (north-south)
  return `${streetName} & ${streetNumber}`;
}

export function getBuildingAt(x: number, y: number): Building | undefined {
  return BUILDINGS.find(building => building.coordinate.x === x && building.coordinate.y === y);
}

// Calculate distance-based score for a city block based on distance from nearest bank
export function getDistanceScore(x: number, y: number): number {
  // Only calculate scores for city blocks (even coordinates)
  if (x % 2 !== 0 || y % 2 !== 0) {
    return 0;
  }

  // Get all bank locations
  const banks = BUILDINGS.filter(building => building.type === 'bank');

  if (banks.length === 0) {
    return 0;
  }

  // Calculate minimum distance to any bank using Manhattan distance
  let minDistance = Number.POSITIVE_INFINITY;
  for (const bank of banks) {
    const distance = Math.abs(x - bank.coordinate.x) + Math.abs(y - bank.coordinate.y);
    minDistance = Math.min(minDistance, distance);
  }

  // Convert distance to a score (0-1 range)
  // Normalize based on maximum possible distance in the grid
  const maxDistance = 400; // Approximate max distance in 200x200 grid
  const normalizedScore = Math.min(minDistance / maxDistance, 1);

  return normalizedScore;
}