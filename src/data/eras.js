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
]

export default eras
