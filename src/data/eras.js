const eras = [
  {
    startYear: 900,
    endYear: 1300,
    name: 'Age of Early Maritime Polities',
    description:
      'The Philippine archipelago thrives as a network of independent maritime kingdoms. Tondo dominates Luzon, the state of Ma-i commands Mindoro, and the Kingdom of Butuan rules the southern gold routes. No centralized state exists — power flows through trade, diplomacy, and ancestral law.',
    tradeRoutes: [
      { from: [120.9692, 14.6150], to: [121.0700, 13.2000], label: 'Tondo → Ma-i' },
      { from: [121.0700, 13.2000], to: [125.5406,  8.9475], label: 'Ma-i → Butuan' },
      { from: [125.5406,  8.9475], to: [121.0017,  6.0519], label: 'Butuan → Sulu' },
      { from: [120.9692, 14.6150], to: [123.9017, 10.2929], label: 'Tondo → Cebu' },
    ],
    milestoneYears: [900, 971, 982, 1001, 1003, 1007, 1011, 1028],
  },
  {
    startYear: 1300,
    endYear: 1450,
    name: 'Rise of Islamic Sultanates',
    description:
      'Arab and Malay missionaries bring Islam to the southern Philippines. The Sultanate of Sulu emerges as a dominant political and religious power, reshaping governance and culture across Mindanao and the Sulu Archipelago.',
    tradeRoutes: [
      { from: [121.0017, 6.0519], to: [122.0797, 6.9214], label: 'Sulu → Zamboanga' },
      { from: [121.0017, 6.0519], to: [124.6739, 8.9475], label: 'Sulu → Butuan'    },
    ],
    milestoneYears: [1380, 1390, 1450],
  },
  {
    startYear: 1450,
    endYear: 1521,
    name: 'Late Pre-Colonial Period',
    description:
      'The archipelago reaches peak pre-colonial complexity. The Sultanate of Maguindanao rises in Mindanao, Tondo strengthens ties with Ming Dynasty China, and the Confederation of Madyas governs the Visayas. A sophisticated world of trade, law, and culture exists before European contact.',
    tradeRoutes: [
      { from: [120.9692, 14.6150], to: [121.0700, 13.2000], label: 'Tondo → Ma-i' },
      { from: [121.0017,  6.0519], to: [123.9017, 10.2929], label: 'Sulu → Cebu'  },
    ],
    milestoneYears: [1450, 1475, 1500],
  },
  {
    startYear: 1521,
    endYear: 1565,
    name: 'Age of Exploration and Contact',
    description:
      'Ferdinand Magellan arrives in 1521, marking the first European contact with the Philippines. Lapu-Lapu defeats the Spanish at the Battle of Mactan. Subsequent expeditions probe the archipelago until Spain establishes its first permanent settlement in 1565.',
    tradeRoutes: [],
    milestoneYears: [1521, 1522, 1543, 1565],
  },
  {
    startYear: 1565,
    endYear: 1896,
    name: 'Spanish Colonial Period',
    description:
      'Spain establishes Manila in 1571, making it the colonial capital and the heart of the Manila Galleon Trade linking Asia to the Americas. Three centuries of Spanish rule reshape religion, governance, and culture — Catholicism takes deep root, new cities rise, and a distinctly Filipino identity begins to form beneath the weight of colonial administration and the friar orders.',
    tradeRoutes: [
      { from: [120.9842, 14.5995], to: [119.3000, 26.0500], label: 'Manila → Fujian' },
      { from: [120.9842, 14.5995], to: [123.9017, 10.2929], label: 'Manila → Cebu'   },
    ],
    milestoneYears: [1565, 1571, 1600, 1700, 1762, 1800, 1872, 1892],
  },
  {
    startYear: 1896,
    endYear: 1946,
    name: 'Revolution & American Rule',
    description:
      'The Katipunan sparks a revolution against Spain in 1896, giving rise to the first Philippine Republic under Emilio Aguinaldo. The Spanish-American War of 1898 transfers sovereignty to the United States, beginning a new colonial era marked by public education, infrastructure, and the Philippine Commonwealth — leading toward promised independence in 1946.',
    tradeRoutes: [],
    milestoneYears: [1896, 1898, 1899, 1902, 1935, 1941, 1945, 1946],
  },
  {
    startYear: 1946,
    endYear: 1986,
    name: 'Independence & Martial Law',
    description:
      'The Philippines gains full independence on July 4, 1946, inaugurating the Third Republic. Decades of fragile democracy are shattered when Ferdinand Marcos declares Martial Law in 1972, concentrating power and silencing opposition for over a decade. The assassination of Benigno Aquino in 1983 ignites a national awakening that culminates in the peaceful People Power Revolution of 1986.',
    tradeRoutes: [],
    milestoneYears: [1946, 1965, 1972, 1983, 1986],
  },
  {
    startYear: 1986,
    endYear: 2026,
    name: 'Contemporary Philippines',
    description:
      'The EDSA People Power Revolution restores democracy, and a new constitution is ratified in 1987. The nation navigates rapid urbanization, economic growth, territorial disputes in the West Philippine Sea, waves of overseas migration, devastating natural disasters, and the challenges of democratic governance — forging a modern identity shaped by resilience, diaspora, and a vibrant, complex culture.',
    tradeRoutes: [],
    milestoneYears: [1986, 1987, 1991, 2001, 2013, 2016, 2020, 2022],
  },
]

export default eras
