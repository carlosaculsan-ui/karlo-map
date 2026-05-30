// Seed data — mirrors the shape that will be stored in Firestore.
// Each document will be keyed by auto-ID; year + category are the main indexes.

const events = [
  // ── 900 AD ──────────────────────────────────────────────────────────────────
  {
    year: 900,
    title: 'Laguna Copperplate Inscription Written',
    description:
      'The earliest known written document found in the Philippines is officially issued on April 21, 900 AD. Inscribed in the Old Kawi script, it legalizes the acquittal of a debt in gold owed by the descendants of a man named Namwaran. This artifact proves the existence of a highly sophisticated society with complex legal structures and written communication in pre-colonial Luzon.',
    location: 'Lumban, Laguna',
    lat: 14.3014,
    lng: 121.4608,
    category: 'culture',
    effect: null,
  },
  {
    year: 900,
    title: 'Kingdom of Tondo Records Authority',
    description:
      'The Chief Commander of Tundun, historically identified as the ancient city-state of Tondo, is documented as the supreme authority granting the legal pardon in the copperplate inscription. Tondo is confirmed as a flourishing maritime political hub along the Pasig River delta, administering regional commerce and coordinating diplomatic laws with nearby settlements.',
    location: 'Tondo, Manila',
    lat: 14.6150,
    lng: 120.9692,
    category: 'politics',
    effect: null,
  },
  {
    year: 900,
    title: 'Pailah and Puliran Form Alliances',
    description:
      'Local rulers Jayadewa of Pailah and the Lord Minister of Puliran are named as legal witnesses to the debt acquittal of Namwaran\'s family. These locations trace to ancestral settlements in modern-day Bulacan along the Angat River, establishing that independent barangays maintained close diplomatic ties and a unified legal framework.',
    location: 'Bulacan',
    lat: 14.9042,
    lng: 121.0564,
    category: 'trade',
    effect: null,
  },

  // ── 971 AD ──────────────────────────────────────────────────────────────────
  {
    year: 971,
    title: 'Ma-i Listed in Song Dynasty Trade Edict',
    description:
      'The Song Dynasty issues an imperial edict creating a superintendent of maritime trade in Guangzhou, explicitly listing Ma-i — an early Philippine state centered around Mindoro — as one of the active trading nations. This constitutes the earliest known mention of an organized Philippine polity in any foreign historical text.',
    location: 'Mindoro',
    lat: 13.2000,
    lng: 121.0700,
    category: 'trade',
    effect: null,
  },

  // ── 982 AD ──────────────────────────────────────────────────────────────────
  {
    year: 982,
    title: 'Ma-i Traders Arrive in Guangzhou',
    description:
      'Native merchants from the state of Ma-i sail across the South China Sea and land in Canton with valuable merchandise including beeswax, cotton, and pearls. Operating as independent traders rather than a formal tribute mission, this marks the first documented instance of direct overseas maritime trade initiated by Filipinos with mainland China.',
    location: 'Mindoro',
    lat: 13.0000,
    lng: 121.0700,
    category: 'trade',
    effect: null,
  },

  // ── 1000–1020 AD ─────────────────────────────────────────────────────────────
  {
    year: 1000,
    title: 'Butuan Consolidates Agusan River Commerce',
    description:
      'At the turn of the millennium, the maritime chiefdom of Butuan centralizes its control over the gold-rich Agusan River network. Local elites organize regional blacksmiths and miners to increase production of high-value trade goods, preparing the kingdom for its first transoceanic diplomatic outreach.',
    location: 'Butuan, Agusan del Norte',
    lat: 8.9475,
    lng: 125.5406,
    category: 'trade',
    effect: null,
  },
  {
    year: 1001,
    title: 'Butuan Initiates First Chinese Diplomacy',
    description:
      'On March 17, 1001 AD, the Kingdom of Butuan sends its first official diplomatic tribute mission to the Imperial Court of the Song Dynasty. King Kiling dispatches envoys across the ocean to present the Emperor with prized gold and native pearls, marking the official entry of a Mindanao-based polity into international diplomatic records.',
    location: 'Butuan, Agusan del Norte',
    lat: 8.9475,
    lng: 125.5406,
    category: 'politics',
    effect: 'pulse',
  },
  {
    year: 1002,
    title: 'Mindoro Shipyards Expand Fleet',
    description:
      'Following successful trade runs to Southern China, maritime merchants in Ma-i expand their local shipyards. Craftsmen utilize durable native hardwoods like ironwood and teak to construct large flexible-hulled vessels engineered to navigate the rough waters of the South China Sea.',
    location: 'Mindoro Island',
    lat: 13.2000,
    lng: 120.6000,
    category: 'culture',
    effect: null,
  },
  {
    year: 1003,
    title: 'Butuan Envoys Gift Red Parrots to China',
    description:
      'King Kiling sends Minister Li-ihan and Assistant Minister Gaminan to the Chinese capital bearing exotic red parrots and tortoise shells. The gesture deepens relations, resulting in the Butuan envoys being summoned as special state guests to the Emperor\'s New Year Festival.',
    location: 'Butuan, Agusan del Norte',
    lat: 8.9475,
    lng: 125.5406,
    category: 'politics',
    effect: null,
  },
  {
    year: 1004,
    title: 'Tondo Fortifies Manila Bay Alliances',
    description:
      'The leadership of Tondo strengthens trade alliances with neighboring barangays across the Manila Bay region. By coordinating customs duties and river access, Tondo establishes a stable monopoly on luxury Chinese ceramics entering Luzon.',
    location: 'Tondo, Manila',
    lat: 14.6150,
    lng: 120.9692,
    category: 'politics',
    effect: null,
  },
  {
    year: 1005,
    title: 'Cebu Deepens Song Dynasty Trade',
    description:
      'Archaeological pottery strata indicate an influx of early Song Dynasty ceramics into coastal settlements of Cebu. Local chieftains trade sea cucumbers and high-grade pearls for foreign iron implements and stoneware, accelerating Cebu\'s development into a major Visayan trading hub.',
    location: 'Cebu City',
    lat: 10.2929,
    lng: 123.9017,
    category: 'trade',
    effect: null,
  },
  {
    year: 1006,
    title: 'Sulu Pearl Divers Organize Export Trade',
    description:
      'Indigenous coastal communities around the Sulu Archipelago systematically organize pearl-diving operations to meet growing international demand. Divers harvest rare giant South Sea pearls routed north to Butuan and Ma-i for export to mainland Asian empires.',
    location: 'Jolo, Sulu',
    lat: 6.0519,
    lng: 121.0017,
    category: 'trade',
    effect: null,
  },
  {
    year: 1007,
    title: 'Butuan Denied Equal Status with Champa',
    description:
      'King Kiling sends envoys to request equal diplomatic status with the powerful Champa Kingdom. The Imperial Court denies the request, declaring Butuan \'beneath Champa\' in priority and sending the disappointed envoys home with only five small vari-colored flags.',
    location: 'Butuan, Agusan del Norte',
    lat: 8.9475,
    lng: 125.5406,
    category: 'politics',
    effect: null,
  },
  {
    year: 1008,
    title: 'Pangasinan Expands Coastal Metallurgy',
    description:
      'Metalworking centers along Lingayen Gulf expand to service incoming trade fleets. Local artisans smelt imported Chinese iron alongside locally sourced copper to forge agricultural tools and weapons highly sought after by inland farming communities across Central Luzon.',
    location: 'Lingayen, Pangasinan',
    lat: 16.0204,
    lng: 120.2319,
    category: 'culture',
    effect: null,
  },
  {
    year: 1009,
    title: 'Iloilo River Valley Agricultural Boom',
    description:
      'Panay Island communities implement expanded wet-rice terrace farming along the fertile plains of the Jalaur River. Agricultural surpluses allow local leaders to support larger populations of craftsmen, warriors, and sailors, strengthening the island\'s defense against regional maritime raiders.',
    location: 'Oton, Iloilo',
    lat: 10.6975,
    lng: 122.4831,
    category: 'culture',
    effect: 'rain',
  },
  {
    year: 1010,
    title: 'Mt. Parker Volcanic Activity Disrupts Mindanao',
    description:
      'Geological sediment tracking reveals localized volcanic ash disruptions from Mount Parker in southern Mindanao. Light ash fall temporarily affects agricultural yields, prompting tribal relocations toward coastal areas before normal farming resumes within the following seasonal cycle.',
    location: 'Mount Parker, South Cotabato',
    lat: 6.1136,
    lng: 124.8919,
    category: 'disaster',
    effect: 'ash',
  },
  {
    year: 1011,
    title: 'Butuan Achieves Full Diplomatic Equality',
    description:
      'King Sri Bata Shaja sends envoy Li-gan-xie with a memorial engraved on a tablet of pure gold. Impressed by the grand gesture, the Song Emperor grants Butuan equal diplomatic honors alongside Champa, awarding the envoy military titles, banners, and ceremonial armor.',
    location: 'Butuan, Agusan del Norte',
    lat: 8.9475,
    lng: 125.5406,
    category: 'politics',
    effect: 'pulse',
  },
  {
    year: 1012,
    title: 'Ma-i Counters Butuan Trade Dominance',
    description:
      'Reacting to Butuan\'s diplomatic breakthrough, Ma-i restructures its commercial routes through the Mindoro Strait, offering lower tariffs to attract Chinese merchant junks. This commercial rivalry sparks a golden age of competitive maritime trade across the archipelago.',
    location: 'Mindoro Island',
    lat: 13.0000,
    lng: 121.0000,
    category: 'trade',
    effect: null,
  },
  {
    year: 1013,
    title: 'Laguna Lakeshore Pottery Trade Expands',
    description:
      'Communities around Laguna de Bay use large cargo canoes to distribute locally made earthenware across the inland water network, linking directly with Tondo\'s international market. This integrated micro-economy fosters widespread regional stability.',
    location: 'Lumban, Laguna',
    lat: 14.3014,
    lng: 121.4608,
    category: 'trade',
    effect: null,
  },
  {
    year: 1014,
    title: 'Cordillera Tribes Establish Gold Trade Tolls',
    description:
      'Tribal councils in the Benguet highlands establish designated trading posts along mountain passes. Lowland merchants exchange sea salt, dried fish, and iron tools for fixed weights of raw gold, protecting highland autonomy while formalizing inter-regional economic ties.',
    location: 'Mankayan, Benguet',
    lat: 16.8573,
    lng: 120.7850,
    category: 'politics',
    effect: null,
  },
  {
    year: 1015,
    title: 'Samar Coastal Watchtowers Built',
    description:
      'In response to deep-sea raiders, coastal barangays in eastern Samar construct elevated wooden watchtowers along prominent cliff sides. Guards monitor the horizon using horn blasts and smoke signals to warn inland communities, drastically reducing successful coastal raids.',
    location: 'Homonhon Island, Eastern Samar',
    lat: 10.7333,
    lng: 125.7167,
    category: 'war',
    effect: 'smoke',
  },
  {
    year: 1016,
    title: 'Butuan Navy Patrols Spice Routes',
    description:
      'Flush with diplomatic wealth, Butuan expands its naval forces with elite warriors aboard fast-rowing warships patrolling northern Mindanao waters. This security enforcement guarantees safe passage for ships carrying valuable cloves and nutmeg from the southern Moluccas.',
    location: 'Butuan Bay, Agusan del Norte',
    lat: 9.0022,
    lng: 125.4194,
    category: 'war',
    effect: null,
  },
  {
    year: 1017,
    title: 'Manila Bay Inter-Island Regatta',
    description:
      'Oral accounts trace an annual gathering of seafaring clans around the Cavite and Bataan coastlines. Communities race double-outrigger karakoa vessels to celebrate maritime ancestral spirits and test naval readiness for upcoming trading expeditions.',
    location: 'Cavite Coast',
    lat: 14.4819,
    lng: 120.9125,
    category: 'culture',
    effect: null,
  },
  {
    year: 1018,
    title: 'Taal Lake Animist Ceremonies Expand',
    description:
      'Lakeside spiritual leaders expand stone and wooden sanctuaries dedicated to anitos controlling volcanic activity. Communal ceremonies featuring ritual offerings of trade porcelain and harvest crops strengthen social cohesion among separate lakeside barangays.',
    location: 'Taal Lake, Batangas',
    lat: 13.9786,
    lng: 121.0186,
    category: 'religion',
    effect: null,
  },
  {
    year: 1019,
    title: 'Zamboanga Tribes Standardize Barter Values',
    description:
      'Chieftains along the Zamboanga peninsula establish fixed barter values for maritime resources, standardizing exchange rates between upland hardwoods, native cinnamon, and coastal marine products. This economic agreement stabilizes trade along the corridor connecting Sulu to Mindanao.',
    location: 'Zamboanga Peninsula',
    lat: 6.9214,
    lng: 122.0797,
    category: 'trade',
    effect: null,
  },
  {
    year: 1020,
    title: 'Butuan Reaches Peak Maritime Influence',
    description:
      'By 1020 AD, Butuan operates as an unrivaled commercial hub in the southern archipelago, integrating river systems with overseas trade lanes. A constant flux of diverse regional merchants creates a highly multicultural urban core, solidifying Mindanao\'s central role in medieval Southeast Asian maritime networks.',
    location: 'Butuan, Agusan del Norte',
    lat: 8.9475,
    lng: 125.5406,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 1021–1050 AD ─────────────────────────────────────────────────────────────
  {
    year: 1021,
    title: 'Ma-i Merchant Fleets Standardize Routes',
    description:
      'To maintain competitiveness against Butuan\'s expanding network, shipping guilds based in Ma-i establish fixed navigational timetables tied strictly to the changing monsoon winds. Ships sail northwest toward South China during the Southwest Monsoon and return during the Northeast Monsoon. This operational efficiency increases the volume of porcelain imports arriving in Mindoro.',
    location: 'Mindoro Island Coast',
    lat: 13.2000,
    lng: 120.6000,
    category: 'trade',
    effect: null,
  },
  {
    year: 1022,
    title: 'Sulu Sea Pearl Trade Expansion',
    description:
      'Bountiful marine harvests in the Sulu Archipelago prompt local chieftains to expand trade agreements with Javanese and Bornean merchants. Large fleets of traditional double-outrigger vessels transport massive yields of high-quality South Sea pearls southward. This commercial route solidifies the Sulu Sea as an essential luxury corridor in maritime Southeast Asia.',
    location: 'Jolo, Sulu',
    lat: 6.0519,
    lng: 121.0017,
    category: 'trade',
    effect: null,
  },
  {
    year: 1023,
    title: 'Tondo Strengthens Delta Customs Enforcement',
    description:
      'The leadership of Tondo installs specialized maritime checkpoints along the major entry channels of the Pasig River delta. Traveling merchants are required to pay fixed mooring and trade tariffs in gold dust before unloading goods at local markets. This institutionalized revenue collection system significantly builds the treasury of the Luzon polity.',
    location: 'Pasig River Delta, Manila',
    lat: 14.5995,
    lng: 120.9842,
    category: 'politics',
    effect: null,
  },
  {
    year: 1024,
    title: 'Central Luzon Agricultural Communities Form',
    description:
      'Farming clans along the Pampanga River basin systematically expand their communal irrigation channels to cultivate swampy marshlands for intensive wet-rice farming. The resulting increase in food production supports growing populations in nearby trading villages. This agricultural stability reinforces the domestic supply chain for coastal exporters.',
    location: 'Pampanga River Valley',
    lat: 15.0116,
    lng: 120.7345,
    category: 'culture',
    effect: 'rain',
  },
  {
    year: 1025,
    title: 'Srivijayan Naval Raids Disrupt Visayas',
    description:
      'Maritime records and regional folklore note a spike in aggressive naval patrols from Chola-weakened Srivijaya factions entering the western Visayan sea lanes. Coastal settlements on Panay and Negros islands fortify their river mouths to protect their local storehouses from pillaging. These defensive actions temporarily choke regional barter trade networks.',
    location: 'Panay Coastal Waters',
    lat: 10.7212,
    lng: 122.5621,
    category: 'war',
    effect: 'smoke',
  },
  {
    year: 1026,
    title: 'Butuan Shipyards Commission Elite Warships',
    description:
      'Following naval skirmishes in the western sea lanes, the King of Butuan orders his shipwrights to increase production of large karakoa warships. These specialized vessels feature elevated platforms for warriors and multiple rows of high-speed rowers, designed specifically for rapid coastal defense. This naval expansion successfully deters foreign raiders from entering the Agusan Gulf.',
    location: 'Libertad, Butuan City',
    lat: 8.9412,
    lng: 125.5186,
    category: 'war',
    effect: null,
  },
  {
    year: 1027,
    title: 'Pangasinan Coastal Saltworks Industrialize',
    description:
      'Coastal settlements along the Lingayen Gulf expand their traditional salt-making industries, utilizing solar evaporation pans in coastal clay beds. This highly prized salt is mass-produced to preserve meat and fish for long-distance maritime voyages. Lowland merchants barter this vital preservative for highland gold and forest resources.',
    location: 'Dasol, Pangasinan',
    lat: 15.9867,
    lng: 119.8783,
    category: 'culture',
    effect: null,
  },
  {
    year: 1028,
    title: 'Butuan Sends Historic Imperial Embassy',
    description:
      'In August 1028 AD, King Sri Bata Shaja of Butuan dispatches a high-level diplomatic mission to China led by a prominent envoy named In-cha-jin. The embassy presents the Song Emperor with rare, valuable tribute, including native gold, precious stones, and rare medicinal plants. In return, the Chinese court awards the Butuan ambassadors luxurious silks and imperial official titles.',
    location: 'Agusan River Delta, Butuan',
    lat: 8.9475,
    lng: 125.5406,
    category: 'politics',
    effect: 'pulse',
  },
  {
    year: 1029,
    title: 'Mindoro Cotton Cultivation Intensifies',
    description:
      'Agricultural communities in the interior plains of Ma-i systematically scale up the cultivation of native cotton varieties to fulfill growing textile demands from Chinese and regional traders. Local weavers utilize traditional backstrap looms to produce high-tensile, lightweight white fabrics. This specialized textile becomes a core currency in the regional barter economy.',
    location: 'Mindoro Island Interior',
    lat: 13.1000,
    lng: 121.1000,
    category: 'culture',
    effect: null,
  },
  {
    year: 1030,
    title: 'Cebu Regional Barter Centers Unify',
    description:
      'To streamline incoming commerce, coastal chiefs in Cebu establish a centralized marketplace where inland mountain farmers can meet directly with maritime traders. Upland root crops and forest hardwoods are exchanged for coastal fish, sea salt, and iron implements. This structural integration turns the central Visayas into a cohesive internal market.',
    location: 'Cebu Coastal Plains',
    lat: 10.2929,
    lng: 123.9017,
    category: 'trade',
    effect: null,
  },
  {
    year: 1031,
    title: 'Samar Watchtower Networks Complete',
    description:
      'Following successful defensive operations along the eastern seaboard, coastal barangays across Samar link their cliffside watchtowers into a unified warning grid. Scouts utilize coordinated fire signals at night and dense smoke flags during the day to pass messages across long coastal distances. This defense system drastically mitigates the success of sudden sea-borne invasions.',
    location: 'Guiuan Coast, Eastern Samar',
    lat: 11.0314,
    lng: 125.7236,
    category: 'war',
    effect: 'smoke',
  },
  {
    year: 1032,
    title: 'Laguna Copper Workers Standardize Weights',
    description:
      'Metallurgists operating around the river networks of Laguna standardize the measurements and shapes of small bronze and copper trading ingots. These cast weights match the traditional units mentioned in earlier legal records, providing a reliable medium of exchange for high-value merchant deals. This calibration reduces transaction disputes in the busy lakeshore markets.',
    location: 'Lumban, Laguna',
    lat: 14.3014,
    lng: 121.4608,
    category: 'trade',
    effect: null,
  },
  {
    year: 1033,
    title: 'Taal Lakeside Settlements Reorganize',
    description:
      'Decades after heavy volcanic activities, local clans completely reoccupy the fertile volcanic soil plains surrounding Taal Lake. They establish highly organized, terraced agricultural grids to optimize crop cultivation while building settlements on elevated bamboo pilings near the water. This resettlement signals a complete demographic recovery for southwestern Luzon.',
    location: 'Taal Lake, Batangas',
    lat: 13.9786,
    lng: 121.0186,
    category: 'culture',
    effect: null,
  },
  {
    year: 1034,
    title: 'Butuan Initiates Champa Naval Joint Venture',
    description:
      'Building on their equal diplomatic status in China, Butuan merchants enter a maritime pact with Cham traders from modern-day Vietnam. The allied fleets establish regular cargo convoys to safely escort heavily laden merchant junks across open ocean paths. This maritime security partnership expands Butuan\'s commercial footprint into mainland Southeast Asia.',
    location: 'Butuan Bay, Agusan del Norte',
    lat: 9.0022,
    lng: 125.4194,
    category: 'trade',
    effect: null,
  },
  {
    year: 1035,
    title: 'Sulu Sea Nomads Sign Alliance Pact',
    description:
      'The leadership of organized Sulu coastal polities formalizes a mutual maritime security pact with the localized Sama-Bajau sea-nomad clans. In exchange for exclusive trading rights to rare marine products, the nomads provide their expert navigational services and early-warning scouting for the regional navy. This alliance permanently strengthens maritime control over the Sulu Sea.',
    location: 'Sulu Archipelago',
    lat: 6.0000,
    lng: 121.0000,
    category: 'politics',
    effect: null,
  },
  {
    year: 1036,
    title: 'Bicol Peninsula Gold Deposition Expands',
    description:
      'Early tribal communities in the Paracale region scale up their riverine panning and shaft-mining operations due to rising commercial value from external traders. Miners extract high-purity gold dust from alluvial mountain beds, packing it into hollow bamboo reed containers for secure transport. This resource draws maritime merchants directly to the southeastern tip of Luzon.',
    location: 'Paracale, Camarines Norte',
    lat: 14.2792,
    lng: 122.7856,
    category: 'trade',
    effect: null,
  },
  {
    year: 1037,
    title: 'Bulacan River Trading Settlements Integrate',
    description:
      'The ancestral barangays of Pailah and Puliran construct expanded wooden river wharves along the Angat River to accommodate larger transport canoes. Local elders unify their domestic legal systems to mirror the administrative codes used by Tondo, smoothing out commercial transactions. This alignment turns the river network into a highly efficient economic corridor.',
    location: 'Pulilan, Bulacan',
    lat: 14.9042,
    lng: 121.0564,
    category: 'politics',
    effect: null,
  },
  {
    year: 1038,
    title: 'Panay Coastal Defenses Fight Raiders',
    description:
      'Hostile seafaring raiders from the southern seas launch a coordinated midnight attack on coastal granaries in southern Panay. Local defensive forces rely on hidden bamboo spike traps and poisonous dart fortifications to repulse the invaders at the river banks. The victory preserves the island\'s essential food reserves and protects the population.',
    location: 'Oton, Iloilo',
    lat: 10.6975,
    lng: 122.4831,
    category: 'war',
    effect: 'smoke',
  },
  {
    year: 1039,
    title: 'Mindoro Spiritual Leaders Refurbish Shrines',
    description:
      'To celebrate consecutive years of safe ocean crossings, spiritual mediums in Ma-i lead a massive community effort to rebuild their open-air sacred precincts. They place large quantities of highly valued imported Chinese stoneware pots as permanent offerings around ancestral burials and sacred coastal rock formations. These communal projects solidify local religious identities.',
    location: 'Mindoro Coastline',
    lat: 13.2000,
    lng: 120.6000,
    category: 'religion',
    effect: null,
  },
  {
    year: 1040,
    title: 'Ilocos Region Formulates Trade Links',
    description:
      'Early coastal settlements along the northwestern shores of Luzon open regular maritime contact with passing merchant vessels from southern China and Taiwan. Local communities trade unique native forest resins and durable mountain hardwoods for high-quality iron tools and weaving yarns. This contact sets off an economic boom across the coastal plains of Ilocos.',
    location: 'Vigan Coastal Area, Ilocos Sur',
    lat: 17.5747,
    lng: 120.3869,
    category: 'trade',
    effect: null,
  },
  {
    year: 1041,
    title: 'Butuan Royal Succession Stabilizes Empire',
    description:
      'Following the long reign of Sri Bata Shaja, a new ruling lineage ascends the golden throne of Butuan without internal civil conflict. The incoming monarch formally reaffirms all existing maritime protection treaties with the Agusan river chieftains and regional sea lords. This smooth political transition preserves the kingdom\'s immense commercial dominance.',
    location: 'Agusan River Delta, Butuan',
    lat: 8.9475,
    lng: 125.5406,
    category: 'politics',
    effect: null,
  },
  {
    year: 1042,
    title: 'Zamboanga Forest Extraction Boom Begins',
    description:
      'Upland tribal networks along the rugged Zamboanga peninsula increase their extraction of wild cinnamon bark and aromatic woods to meet foreign merchant demands. They float these high-value forest products down major river ways on bamboo rafts to coastal trading stations. This resource extraction system deepens economic ties between inland and coastal communities.',
    location: 'Zamboanga Peninsula Rivers',
    lat: 6.9214,
    lng: 122.0797,
    category: 'trade',
    effect: null,
  },
  {
    year: 1043,
    title: 'Manila Bay Communities Host Grand Rituals',
    description:
      'Seafaring clans across Manila Bay hold an extensive, multi-day ceremonial gathering to honor the deities regulating ocean currents and weather cycles. The communities construct large ritual platforms, presenting elaborate food displays and sacrificial items to secure protection against catastrophic typhoons. This event reinforces spiritual bonds across separate coastal polities.',
    location: 'Mariveles, Bataan',
    lat: 14.4333,
    lng: 120.4833,
    category: 'religion',
    effect: 'rain',
  },
  {
    year: 1044,
    title: 'Cordillera Gold Mining Technology Evolves',
    description:
      'Highland mining communities in northern Luzon introduce advanced timber-shoring techniques to stabilize deep underground gold mining tunnels. This technological improvement prevents tunnel collapses during heavy rainy seasons, enabling year-round gold extraction from deep quartz veins. The increased output boosts the volume of gold flowing to lowland ports.',
    location: 'Mankayan, Benguet',
    lat: 16.8573,
    lng: 120.7850,
    category: 'culture',
    effect: null,
  },
  {
    year: 1045,
    title: 'Ma-i Implements Maritime Merchant Accommodations',
    description:
      'To incentivize foreign traders to stay longer, the governors of Ma-i construct dedicated secured quarters and storage facilities near the main ports. Foreign ship crews are provided with safe housing and protected warehouses to shield their luxury porcelain cargo from tropical elements. This institutional hospitality draws a record number of merchant fleets to Mindoro.',
    location: 'Mindoro Island Ports',
    lat: 13.0000,
    lng: 121.0000,
    category: 'trade',
    effect: null,
  },
  {
    year: 1046,
    title: 'Leyte Coastal Settlements Expand Agriculture',
    description:
      'Growing population densities along the western plains of Leyte lead to the wide clearing of coastal forests for root crop and banana farming. Local chieftains organize cooperative labor teams to build protective earthen dikes along coastal farmlands to block seawater incursions. This development secures the domestic food supply for regional trading voyages.',
    location: 'Ormoc Coastal Plains, Leyte',
    lat: 11.0044,
    lng: 124.6075,
    category: 'culture',
    effect: null,
  },
  {
    year: 1047,
    title: 'Mt. Hibok-Hibok Minor Seismic Activity',
    description:
      'Geological ice and soil core analyses track a period of localized seismic activity and gas venting from the Camiguin island volcanic cluster. Mild ash emissions temporarily disrupt local fishing patterns in the Bohol Sea, forcing communities to adjust their migratory paths. Normal operations resume as the volcanic venting settles down within a few months.',
    location: 'Mount Hibok-Hibok, Camiguin',
    lat: 9.2031,
    lng: 124.6739,
    category: 'disaster',
    effect: 'ash',
  },
  {
    year: 1048,
    title: 'Tondo Ironworkers Refine Smelting Methods',
    description:
      'Local blacksmiths inside the Tondo manufacturing zones adjust their furnace designs to refine imported raw iron blocks more effectively. They mass-produce high-strength machetes, daggers, and agricultural tilling tools to distribute to agricultural sectors across the Luzon Central Plain. This technological mastery deepens Tondo\'s economic leverage over inland regions.',
    location: 'Tondo, Manila',
    lat: 14.6150,
    lng: 120.9692,
    category: 'culture',
    effect: 'smoke',
  },
  {
    year: 1049,
    title: 'Sulu Fleet Repels Celebes Pirates',
    description:
      'A rapid flotilla of Celebes-based sea pirates attempts to intercept a valuable pearl transport ship navigating near the southern edges of Sulu. The allied naval forces of the Sulu chieftains execute a coordinated counter-ambush, using fast karakoa warships to outmaneuver and crush the raiders. The successful operation maintains the security of the southern trade routes.',
    location: 'Sibutu Passage, Sulu',
    lat: 4.8425,
    lng: 119.4644,
    category: 'war',
    effect: null,
  },
  {
    year: 1050,
    title: 'Mid-Century Commercial Networks Consolidate',
    description:
      'By 1050 AD, the complex web of independent Philippine polities achieves a stable commercial equilibrium. Tondo dominates Luzon, Ma-i commands the central paths, and Butuan controls the southern gold networks. This integrated inter-island trading framework ensures continuous wealth and cultural growth as the archipelago enters the latter half of the 11th century.',
    location: 'Agusan River Delta, Butuan',
    lat: 8.9475,
    lng: 125.5406,
    category: 'trade',
    effect: 'pulse',
  },

  // ── 1225 ─────────────────────────────────────────────────────────────────────
  {
    year: 1225,
    title: 'The First Written Ethnography of the Philippines',
    description:
      'Zhao Rukuo (Chau Ju-Kua), the Superintendent of Maritime Trade for the Song Dynasty in Quanzhou, publishes the "Zhu Fan Zhi" (Description of Barbarian Nations). This text contains the world\'s first detailed, eyewitness-backed written chapters on "Ma-i" (Mindoro) and "San-hsu" (The Three Islands, covering areas of the Visayas/Calamianes). It explicitly documents the pre-colonial barter system: how local traders would board Chinese junks, take the goods on credit, sail to neighboring islands to trade them for native yellow wax, cotton, and pearls, and return months later to settle their debts with absolute honesty.',
    location: 'Mindoro and Central Visayan Waters',
    lat: 13.0000,
    lng: 121.0000,
    category: 'trade',
    effect: 'pulse',
  },

  // ── 1300s ────────────────────────────────────────────────────────────────────
  {
    year: 1349,
    title: 'Wang Dayuan Records Pearl and Calico Trade',
    description:
      'The Chinese merchant Wang Dayuan publishes the "Daoyi Zhilue". He includes detailed accounts of "San-dao" (Three Islands) and "Ma-i" (Mindoro), documenting that locals trade high-value white pearls and fine calico cloth for Chinese copper beads, porcelain, and iron pots.',
    location: 'Sulu Archipelago and Mindoro Ports',
    lat: 6.0500,
    lng: 121.0000,
    category: 'trade',
    effect: 'pulse',
  },
  {
    year: 1368,
    title: 'Sulu Launches Trade Envoys to the New Ming Dynasty',
    description:
      'Following the rise of the native Chinese Ming Dynasty, the History of Ming records that rulers from the Sulu Archipelago immediately dispatched a formal diplomatic embassy to the Hongwu Emperor to secure direct trading privileges.',
    location: 'Sulu Sea / Nanjing Imperial Court',
    lat: 6.0000,
    lng: 121.0000,
    category: 'politics',
    effect: 'pulse',
  },
  {
    year: 1372,
    title: 'Luzon Envoys Establish First Direct Ming Relations',
    description:
      'The Ming Shilu logs the arrival of the very first official diplomatic mission from "Lüsong" (Luzon). The imperial court welcomes the Luzon delegation, formally recognizing Luzon\'s trade network in the northern archipelago.',
    location: 'Manila Bay Delta (Luzon)',
    lat: 14.5995,
    lng: 120.9842,
    category: 'politics',
    effect: 'pulse',
  },
  {
    year: 1375,
    title: 'Ming Emperor Sends Official Return Embassy to Luzon',
    description:
      'Following up on the 1372 mission, the Ming Shilu records that the Chinese Emperor dispatches imperial officials to Luzon carrying official proclamations and gifts of silk textiles. This formal return mission cements the geopolitical trade alliance between the early Kingdom of Tondo/Luzon and the Ming Empire.',
    location: 'Manila Bay Delta (Luzon)',
    lat: 14.5995,
    lng: 120.9842,
    category: 'politics',
    effect: null,
  },

  // ── 1380 ─────────────────────────────────────────────────────────────────────
  {
    year: 1380,
    title: 'Islam Arrives in Sulu',
    description:
      'Arab missionary Karim ul\' Makhdum arrives in Jolo, Sulu, establishing the first mosque in the Philippine archipelago and beginning the Islamization of Mindanao and the Sulu Sea region.',
    lat: 6.0474,
    lng: 121.0027,
    category: 'religion',
    effect: 'rain',
  },

  // ── 1400s ────────────────────────────────────────────────────────────────────
  {
    year: 1405,
    title: 'Zheng He\'s Treasure Fleet Anchors in the Philippines',
    description:
      'The massive Ming Dynasty fleet commanded by Admiral Zheng He makes its first historic stop in the archipelago. Ming records indicate visits to Pangasinan, Manila (Luzon), and Sulu to project imperial Chinese authority, secure regional trade dominance, and bring local rulers into the tributary system.',
    location: 'Lingayen Gulf, Manila Bay, and Sulu Sea',
    lat: 16.0300,
    lng: 120.2400,
    category: 'politics',
    effect: 'pulse',
  },
  {
    year: 1406,
    title: 'Pangasinan Chieftain Sends First Tribute to Ming Court',
    description:
      'Following Zheng He\'s visit, the "Ming Shilu" records that a chieftain named Kamayan from "Feng-jia-shi-lan" (Pangasinan) sends an official diplomatic mission to Nanjing, presenting local horses and silver to the Yongle Emperor.',
    location: 'Lingayen Gulf, Pangasinan',
    lat: 16.0300,
    lng: 120.2400,
    category: 'politics',
    effect: null,
  },
  {
    year: 1417,
    title: 'The Historic Royal Sulu Embassy Departs for China',
    description:
      'In the most heavily documented pre-colonial Philippine event, Paduka Batara (the Eastern King of Sulu) leads a massive, 340-member royal delegation on an overseas voyage from their capital. They carry a priceless collection of giant pearls and gold to establish elite diplomatic status with the Ming Empire.',
    location: 'Maimbung, Sulu Archipelago',
    lat: 5.9264,
    lng: 121.0311,
    category: 'politics',
    effect: 'pulse',
  },
  {
    year: 1421,
    title: 'News of Sulu King\'s Passing Reaches Home',
    description:
      'Word arrives back at the royal capital in Sulu that King Paduka Batara fell gravely ill and passed away in Dezhou, China, during his return journey. The news details how the Chinese Emperor honored the Sulu monarch with a massive imperial stone tomb and granted his attending family members imperial protections.',
    location: 'Maimbung, Sulu Archipelago',
    lat: 5.9264,
    lng: 121.0311,
    category: 'politics',
    effect: null,
  },
  {
    year: 1424,
    title: 'The Final Recorded Early Diplomatic Mission to China',
    description:
      'The "Ming Shilu" logs the last major pre-colonial tribute mission from Luzon. Following the death of the Yongle Emperor and a massive shift in Chinese policy toward isolationism, the treasure fleets are burned, and direct records between China and the Philippines go dark for nearly a century.',
    location: 'Manila Bay Delta (Luzon)',
    lat: 14.5995,
    lng: 120.9842,
    category: 'politics',
    effect: 'pulse',
  },
  {
    year: 1457,
    title: 'The Formal Founding of the Sultanate of Sulu',
    description:
      'The Arab-Malaysian scholar and explorer Sharif ul-Hāshim (born Syed Abu Bakr) arrives in Jolo and marries Dayang-dayang Paramisuli, the daughter of the local chief. He establishes the Sultanate of Sulu, introduces a centralized code of law (the Diwan), and aligns the region\'s governance with international Islamic trade networks.',
    location: 'Jolo, Sulu',
    lat: 6.0511,
    lng: 121.0014,
    category: 'religion',
    effect: 'pulse',
  },

  // ── 1500s (pre-contact) ───────────────────────────────────────────────────────
  {
    year: 1500,
    title: 'Bruneian Empire Establishes Kota Seludong',
    description:
      'Sultan Bolkiah of Brunei launches a naval expansion northward into Luzon, conquering the local settlements along the Pasig River delta. He establishes a fortified military outpost known as Kota Seludong (the precursor to the Islamic Kingdom of Maynila), placing it under a loyal Muslim Rajah to demand tribute and dominate the northern trade monopoly.',
    location: 'Pasig River Delta, Manila',
    lat: 14.5995,
    lng: 120.9842,
    category: 'war',
    effect: 'pulse',
  },
  {
    year: 1515,
    title: 'First Written Record of the Luções in Malacca',
    description:
      'Portuguese accountant Tomé Pires completes his foundational manuscript "Suma Oriental" in Malacca. It contains the world\'s first Western written record of the Philippine people, documenting the "Luções" (the people of Luzon) as a robust, hardworking merchant community with their own active trade colonies in Malaysia.',
    location: 'Manila Bay (Origin of Merchants)',
    lat: 14.5995,
    lng: 120.9842,
    category: 'trade',
    effect: null,
  },

  // ── 1521 ─────────────────────────────────────────────────────────────────────
  {
    year: 1521,
    title: 'Magellan Makes First European Landfall at Homonhon',
    description:
      'On March 16, 1521, the Spanish expedition led by Portuguese explorer Ferdinand Magellan sights the mountains of Samar and anchors at the uninhabited island of Homonhon. They are met by friendly locals from Suluan, marking the formal entry of the Spanish Empire into the Philippine theater.',
    location: 'Homonhon Island, Eastern Samar',
    lat: 10.7388,
    lng: 125.7194,
    category: 'exploration',
    effect: 'pulse',
  },
  {
    year: 1521,
    title: 'The First Mass and the Cebu Alliance',
    description:
      'On March 31, 1521, the first Catholic mass is celebrated on Limasawa Island. Days later, Magellan sails into Sugbu (Cebu), forming a blood compact with Rajah Humabon. Humabon and his queen are baptized, receiving a small wooden image of the Santo Niño as a diplomatic and religious gift.',
    location: 'Cebu Port / Limasawa',
    lat: 10.2932,
    lng: 123.9016,
    category: 'religion',
    effect: 'pulse',
  },
  {
    year: 1521,
    title: 'The Battle of Mactan: Death of Magellan',
    description:
      'On April 27, 1521, Magellan leads an overconfident amphibious assault against the defiant chieftain Lapulapu on Mactan Island. Trapped in shallow water by low tide and overwhelmed by local warriors firing poisoned arrows and bamboo spears, Magellan is isolated and killed on the beach, forcing the Spanish survivors to flee.',
    location: 'Mactan Island, Cebu',
    lat: 10.3142,
    lng: 124.0152,
    category: 'war',
    effect: 'smoke',
  },

  // ── 1525–1543 (early expeditions) ────────────────────────────────────────────
  {
    year: 1525,
    title: 'The Disastrous Loaísa Expedition Lands in Mindanao',
    description:
      'Spain dispatches a massive follow-up armada led by Friar García Jofre de Loaísa to claim the islands. The fleet is completely shattered by storms across the Pacific. The flagship survives and limps into Mindanao, where the starving crew is harassed by local forces, eventually getting captured by the Portuguese in the Moluccas.',
    location: 'Lianga Bay, Surigao del Sur',
    lat: 8.6333,
    lng: 126.1000,
    category: 'exploration',
    effect: null,
  },
  {
    year: 1528,
    title: 'Saavedra Cements the Name Islas del Poniente',
    description:
      'The Álvaro de Saavedra Cerón expedition, launched from Mexico, arrives in the Visayas to rescue any Spanish stragglers from previous fleets. He explores the coasts of Mindanao and Sarangani, formally mapping the territory for the Spanish crown under the strategic name "Islas del Poniente" (Islands of the West).',
    location: 'Sarangani Island',
    lat: 5.4000,
    lng: 125.4667,
    category: 'exploration',
    effect: null,
  },
  {
    year: 1543,
    title: 'Villalobos Names the Archipelago Las Islas Filipinas',
    description:
      'Spanish explorer Ruy López de Villalobos commands a new fleet to the islands. While anchored off Leyte and Samar, he officially names the islands "Las Islas Filipinas" in honor of Philip, the Prince of Asturias (later King Philip II of Spain), providing the modern name the country carries today.',
    location: 'Sariaya, Leyte / Samar Coast',
    lat: 11.0000,
    lng: 125.0000,
    category: 'exploration',
    effect: 'pulse',
  },

  // ── 1565 ─────────────────────────────────────────────────────────────────────
  {
    year: 1565,
    title: 'Spanish Colonization Begins',
    description:
      'Miguel López de Legazpi establishes the first permanent Spanish settlement in Cebu City and claims the archipelago for the Spanish Crown, initiating more than 333 years of colonial rule.',
    lat: 10.2931,
    lng: 123.9020,
    category: 'politics',
    effect: 'pulse',
  },

  {
    year: 1565,
    title: 'Legazpi Executes Blood Compact with Sikatuna',
    description:
      'In March 1565, Miguel López de Legazpi enters the Bohol Sea. To ease rising tensions and prove peaceful intent, Legazpi performs a historic, binding blood compact (Sandugo) with Datu Sikatuna of Bohol, drawing blood from their chests and drinking it mixed with wine.',
    location: 'Tagbilaran, Bohol',
    lat: 9.6412,
    lng: 123.8562,
    category: 'politics',
    effect: 'pulse',
  },
  {
    year: 1565,
    title: 'The Fall of Cebu and the Finding of the Santo Niño',
    description:
      'On April 27, 1565, Legazpi\'s heavy naval artillery bombards Cebu after Rajah Tupas refuses to submit. Spanish soldier Juan Camus discovers the wooden Santo Niño doll given by Magellan 44 years earlier, completely intact inside a burned hut. Legazpi declares it a divine miracle and establishes "Villa del Santísimo Nombre de Jesús", the first permanent Spanish settlement.',
    location: 'Cebu Port',
    lat: 10.2932,
    lng: 123.9016,
    category: 'war',
    effect: 'pulse',
  },
  {
    year: 1565,
    title: 'Urdaneta Discovers the Tornaviaje',
    description:
      'On June 1, 1565, navigator friar Andrés de Urdaneta sets sail from Cebu aboard the galleon San Pedro. By steering far north into the Pacific to catch the Kuroshio Current, he maps the elusive eastern return route to Mexico. This breakthrough cracks open the global Manila-Acapulco Galleon Trade network.',
    location: 'Cebu Port (Departure Point)',
    lat: 10.2932,
    lng: 123.9016,
    category: 'trade',
    effect: 'pulse',
  },

  // ── 1568–1596 (early colonial conflicts) ─────────────────────────────────────
  {
    year: 1568,
    title: 'The Blockade of Cebu',
    description:
      'A powerful Portuguese fleet commanded by Admiral Gonzalo Pereira arrives off the coast of Cebu and establishes a strict naval blockade around the fledgling settlement of Miguel López de Legazpi. Claiming that the Philippine archipelago falls squarely within the Portuguese zone of hemispheric sovereignty under the Treaty of Tordesillas, Pereira demands the immediate surrender and evacuation of the Spanish expedition. Legazpi firmly refuses, digging into a fortified defensive position. The Portuguese shell the settlement and cut off vital maritime food supply lines, but a sudden, devastating outbreak of disease within Pereira\'s fleet forces them to break the blockade and withdraw to the Moluccas, narrowly saving the Spanish colonial enterprise from early extinction.',
    location: 'Cebu City, Cebu',
    lat: 10.2933,
    lng: 123.9016,
    category: 'war',
    effect: null,
  },
  {
    year: 1569,
    title: 'Establishment of the Panay Bridgehead',
    description:
      'Faced with acute, chronic food shortages and the constant threat of renewed Portuguese naval assaults in Cebu, Miguel López de Legazpi makes the strategic command decision to relocate the primary Spanish headquarters to the banks of the Panay River in Capiz. The fertile plains of Panay provide a highly secure agricultural hinterland capable of feeding his starving soldiers, while the local native populations prove receptive to making early tactical alliances. This vital operational pause allows Legazpi to consolidate his military forces, build sturdier sailing vessels, and map out the logistics for an all-out northward expansion toward the prosperous trading hubs of Luzon.',
    location: 'Roxas City, Panay',
    lat: 11.5853,
    lng: 122.7554,
    category: 'politics',
    effect: null,
  },
  {
    year: 1570,
    title: 'First Battle of Manila (The Goiti Expedition)',
    description:
      'Master-of-Camp Martín de Goiti leads an advanced Spanish reconnaissance fleet into Manila Bay to explore the heavily rumored kingdom of \'Maynila,\' a wealthy indigenous Muslim trading hub ruled by Rajah Sulayman. Negotiations for a peaceful submission rapidly collapse due to intense mutual suspicion and a misunderstanding over local maritime firing etiquette. Sulayman\'s artillery pieces, forged by the master metalworker Panday Pira, open fire on the Spanish vessels. Goiti responds with an immediate, aggressive amphibious assault, storming the palisaded native fort, seizing the village, and capturing several bronze cannons before burning the settlement to the ground and withdrawing back to Panay to report his findings to Legazpi.',
    location: 'Intramuros, Manila',
    lat: 14.5910,
    lng: 120.9754,
    category: 'war',
    effect: null,
  },
  {
    year: 1571,
    title: 'Founding of Spanish Manila and the Battle of Bankusay Channel',
    description:
      'Miguel López de Legazpi arrives in Manila with his main fleet to permanently claim the scorched ruins of Rajah Sulayman\'s kingdom. Recognizing the site\'s peerless strategic location — boasting a massive natural harbor and direct access to the agricultural heartlands of Central Luzon — Legazpi signs a peace pact with Rajah Lakandula of Tondo and Rajah Matanda. On June 24, 1571, Legazpi officially declares Manila the capital of the Spanish East Indies, establishing a municipal government organized under a city council, and laying the literal foundations for the stone-walled administrative fortress that would become Intramuros.',
    location: 'Bangkusay, Tondo, Manila',
    lat: 14.6186,
    lng: 120.9631,
    category: 'politics',
    effect: null,
  },
  {
    year: 1574,
    title: 'Invasion Attempt by the Pirate Limahong',
    description:
      'The notorious Chinese warlord and pirate king Limahong, fleeing a relentless maritime crackdown by the Ming Dynasty navy, arrives in Manila Bay with a massive armada carrying over sixty war vessels and thousands of soldiers, intent on conquering the colony and founding an independent kingdom. Limahong\'s vanguard launches a surprise amphibious raid, killing Master-of-Camp Martín de Goiti. The colony is saved only by the timely arrival of Captain Juan de Salcedo from Ilocos, who reinforces the desperate defenders inside the wooden fort of Manila. Trapped by Salcedo\'s counter-attack, Limahong abandons the siege and flees north to the Agno River in Pangasinan, where he establishes a short-lived fortified base before being permanently driven out of the archipelago.',
    location: 'Fort Santiago, Intramuros, Manila',
    lat: 14.5947,
    lng: 120.9701,
    category: 'war',
    effect: 'smoke',
  },
  {
    year: 1575,
    title: 'Establishment of the Royal Encomienda System',
    description:
      'Following the sudden death of Legazpi, Governor-General Juan de Sande begins the comprehensive, aggressive partition of Luzon into the formal encomienda system. Under this imperial framework, vast tracts of land and entire native populations are assigned to Spanish military conquistadors and religious orders as rewards for service to the Crown. The encomendero is granted the official legal authority to collect heavy tributes in gold, rice, and textiles, in exchange for providing military defense and facilitating Christian conversion. This system creates immediate, structural economic exploitation across the provinces, sparking localized native food riots and severe depopulation due to overwork.',
    location: 'Intramuros, Manila',
    lat: 14.5910,
    lng: 120.9754,
    category: 'politics',
    effect: null,
  },
  {
    year: 1575,
    title: 'The Lingayen Siege',
    description:
      'Following his defeat in Manila, Limahong retreats to Pangasinan and establishes a fortified pirate kingdom at the mouth of the Agno River, subjugating the local population. Juan de Salcedo tracks the pirates and leads a combined force of 250 Spanish soldiers and 2,500 native warriors to lay siege to the fort. The blockade lasts four months. Limahong narrowly escapes total capture by secretly digging a bypass canal out to Lingayen Gulf, abandoning his forces and fleeing back into the South China Sea.',
    location: 'Lingayen, Pangasinan',
    lat: 16.0204,
    lng: 120.2317,
    category: 'war',
    effect: null,
  },
  {
    year: 1578,
    title: 'The Castilian War against Brunei',
    description:
      'Governor-General Juan de Sande commands a massive, aggressive naval expedition against the Sultanate of Brunei, entering a regional conflict known as the Castilian War. Driven by a desire to smash the dominant political and religious influence of Brunei over the southern Philippine islands, Sande\'s fleet storms the Bruneian capital of Kota Batu. Backed by local native allies and internal Bruneian defectors, the Spanish depose the reigning sultan and temporarily install a pro-Spanish claimant. Although a catastrophic outbreak of dysentery and malaria forces the Spanish to abandon Brunei and withdraw to Manila, the campaign successfully shatters Brunei\'s ability to militarily intervene in Luzon and the Visayas.',
    location: 'Kota Batu, Brunei',
    lat: 4.9031,
    lng: 114.9398,
    category: 'war',
    effect: null,
  },
  {
    year: 1582,
    title: 'The Cagayan Battles (Clash with Wokou Samurai)',
    description:
      'A formidable fleet of Japanese Wako pirates, led by the warlord Tay Fusa, establishes a heavily fortified base at the mouth of the Cagayan River, terrorizing northern Luzon and extorting tribute from the native inhabitants. In response, Governor Gonzalo Ronquillo de Peñalosa dispatches a specialized task force of Spanish galleons and professional soldiers under the brilliant naval commander Juan Pablo de Carrión. Utilizing superior steel armor, disciplined pike formations, and devastating shipboard artillery, Carrión engages the pirates in a series of brutal, close-quarters land and sea battles. The Spanish decimate the pirate fleet and drive the survivors out, securing northern Luzon and paving the way for the formal founding of the city of Nueva Segovia.',
    location: 'Cagayan River Mouth, Buguey, Cagayan',
    lat: 18.2811,
    lng: 121.8347,
    category: 'war',
    effect: null,
  },
  {
    year: 1583,
    title: 'The Great Fire of Manila',
    description:
      'During the elaborate funeral ceremonies for Governor Gonzalo Ronquillo de Peñalosa, a stray candle ignites the heavy fabric draperies inside the San Agustin Church, sparking a catastrophic fire that completely engulfs the largely wooden city of Manila. The inferno destroys the royal palace, the archives, and vital food storehouses, forcing a total rethink of urban planning that mandates all future structures within Intramuros be constructed of solid stone. Concurrently, a royal decree arrives establishing the Real Audiencia de Manila, the supreme judicial court and advisory council of the colony, designed to curb the unchecked power and financial corruption of the provincial governors-general.',
    location: 'San Agustin Church, Intramuros, Manila',
    lat: 14.5888,
    lng: 120.9751,
    category: 'disaster',
    effect: 'fire',
  },
  {
    year: 1587,
    title: 'The Tondo Conspiracy',
    description:
      'A highly sophisticated, clandestine anti-Spanish alliance is forged among the indigenous nobility (maharlikas) of Tondo, Manila, and Bulacan, led by Agustín de Legazpi (the nephew of Rajah Lakandula) and Magat Salamat. Driven by the total loss of their traditional political authority, ancestral lands, and trade monopolies, the conspirators spend over a year plotting a coordinated, pan-regional uprising. They secure promises of military aid from Japanese Christian traders and weapons from the Sultanate of Brunei, intending to launch a surprise attack to slaughter the Spanish garrison in Manila. The entire plot is blown wide open when a native informant betrays the conspiracy to Spanish officials, leading to the immediate arrest, public hanging, and dismemberment of the native leaders.',
    location: 'Tondo, Manila',
    lat: 14.6214,
    lng: 120.9733,
    category: 'revolution',
    effect: null,
  },
  {
    year: 1593,
    title: 'Publication of the Doctrina Christiana',
    description:
      'Governor-General Gómez Pérez Dasmariñas organizes a massive military expedition to conquer the Moluccas, anchoring off Maricaban Island with a fleet of galleys. During the night, the Chinese rowers, subjected to brutal floggings and forced labor, launch a violent midnight mutiny. Led by P\'an Ho-wu, the mutineers butcher Governor Dasmariñas in his sleep and seize the flagship, sailing it to Cochin-China. Concurrently, in Manila, the Dominican order publishes the Doctrina Christiana, the very first book printed in the Philippines. This bilingual catechism — deploying Spanish, Latinized Tagalog, and Baybayin script — serves as the primary linguistic weapon for the rapid, standardized spiritual colonization of the native population.',
    location: 'Binondo, Manila',
    lat: 14.6001,
    lng: 120.9749,
    category: 'culture',
    effect: null,
  },
  {
    year: 1596,
    title: 'The Ill-Fated Figueroa Expedition to Maguindanao',
    description:
      'Captain Esteban Rodríguez de Figueroa, armed with an exclusive royal contract to colonize and pacify Mindanao, leads an aggressive fleet of over two hundred vessels down the Rio Grande de Mindanao. He attempts to smash the power of the Muslim Sultanates, landing his forces at Tampakan. During a fierce, close-quarters jungle ambush orchestrated by the warriors of Datu Sirungan, Figueroa is struck in the head by a native kampilan blade, dying instantly. His death paralyzes the Spanish command, turning what was supposed to be a permanent colonization conquest into a brutal, multi-decade cycle of retaliatory frontier warfare across the southern islands.',
    location: 'Buayan, Cotabato, Mindanao',
    lat: 7.0167,
    lng: 124.5833,
    category: 'war',
    effect: null,
  },

  // ── 1600–1617 ────────────────────────────────────────────────────────────────
  {
    year: 1600,
    title: 'Battle of San Diego (Mariveles)',
    description:
      'As part of the global geopolitical chessboard of the Eighty Years\' War, Dutch Admiral Oliver van Noort anchors a predatory fleet outside Manila Bay to intercept and plunder the incoming silver galleons. Antonio de Morga, the Auditor of the Real Audiencia, is hurriedly given military command of the hastily retrofitted merchant vessel San Diego. The two forces clash in a chaotic, bloody naval battle off Fortune Island. Though the San Diego suffers catastrophic damage and sinks with hundreds of men aboard, the Spanish successfully board and cripple Van Noort\'s fleet, forcing the Dutch to abandon their blockade. This encounter solidifies the Dutch Republic as Spain\'s most dangerous naval rival in the Pacific.',
    location: 'Fortune Island, Nasugbu, Batangas',
    lat: 14.0583,
    lng: 120.4833,
    category: 'war',
    effect: 'pulse',
  },
  {
    year: 1603,
    title: 'The Sangley Rebellion of 1603',
    description:
      'Tensions within Manila\'s segregated Chinese merchant quarter, the Parian, explode into a catastrophic, bloody rebellion. Spurred by intense rumors that the Spanish military was preparing to massacre them following the suspicious arrival of three Chinese mandarins, over twenty thousand Chinese residents launch a preemptive assault on Intramuros. Armed with improvised weapons, they burn buildings and defeat an elite Spanish vanguard, killing former Governor Luis Pérez Dasmariñas. The colonial state retaliates with absolute ferocity, mobilizing thousands of Japanese mercenaries and native Kapampangan soldiers to surround the Parian. The uprising is suppressed with ruthless efficiency, resulting in the slaughter of over twenty thousand Chinese individuals and the total destruction of Manila\'s commercial retail hub.',
    location: 'Binondo, Manila',
    lat: 14.6001,
    lng: 120.9749,
    category: 'revolution',
    effect: 'pulse',
  },
  {
    year: 1603,
    title: 'The First Moro Raid on the Visayas',
    description:
      'Maguindanao forces under Datu Buisan and Datu Sirongan launch a major naval raid on the Visayas with 50 war-boats. They assault Dulag, Leyte, burning churches and capturing hundreds of native converts, signaling an escalation in the Moro-Spanish conflicts.',
    location: 'Dulag, Leyte',
    lat: 10.9525,
    lng: 125.0314,
    category: 'war',
    effect: null,
  },
  {
    year: 1606,
    title: 'The Capture of Ternate Staging',
    description:
      'Governor-General Pedro Bravo de Acuña organizes a massive expedition in Manila using thousands of local Pampango and Tagalog rowers and soldiers. The armada successfully sails south and captures the Dutch-allied Sultanate of Ternate in the Moluccas.',
    location: 'Intramuros, Manila',
    lat: 14.5910,
    lng: 120.9754,
    category: 'politics',
    effect: null,
  },
  {
    year: 1609,
    title: 'Royal Decree on Polo y Servicio',
    description:
      'To sustain the massive logistical demands of the escalating war against the Dutch and the construction of massive galleon fleets, the Spanish Crown codifies the Polo y Servicio system within the comprehensive Laws of the Indies. This decree mandates the compulsory, forced labor of all healthy native Filipino males (polistas) aged sixteen to sixty. The laborers are forcibly uprooted from their ancestral farms and shipped to royal shipyards, timber-cutting camps, and fortifications for months at a time. This structural disruption of local agricultural cycles triggers widespread regional famines, massive domestic depopulation, and deep-seated agrarian resentment that sparks multiple provincial mutinies.',
    location: 'Intramuros, Manila',
    lat: 14.5910,
    lng: 120.9754,
    category: 'politics',
    effect: 'pulse',
  },
  {
    year: 1610,
    title: 'First Battle of Playa Honda',
    description:
      'Governor-General Juan de Silva leads a fleet out of Manila to break a devastating Dutch naval blockade. The opposing forces engage off Zambales. De Silva decisively defeats the Dutch fleet under Admiral François de Wittert, capturing three enemy warships.',
    location: 'Playa Honda, Botolan, Zambales',
    lat: 15.2902,
    lng: 120.0201,
    category: 'war',
    effect: 'pulse',
  },
  {
    year: 1610,
    title: "Tomas Pinpin's Tagalog-Spanish Primer",
    description:
      'In Abucay, Bataan, Tomas Pinpin — recognized historically as the Prince of Filipino Printers — collaborates with Spanish friars to publish Librong Pagaaralan nang manga Tagalog nang Uicang Castila. This highly innovative work stands as the first book written and printed by a native Filipino. It utilizes a brilliant phonetic approach to teach the Tagalog population the rules of the Spanish language, serving as an intellectual bridge during a time of intense cultural assimilation. Concurrently, a fierce institutional feud erupts between the Jesuit and Dominican orders over academic jurisdiction and the official right to grant advanced degrees in theology, transforming Manila\'s intellectual elite into factional rivals.',
    location: 'Abucay, Bataan',
    lat: 14.7214,
    lng: 120.5311,
    category: 'culture',
    effect: null,
  },
  {
    year: 1611,
    title: 'Founding of the Colegio de Santisimo Rosario',
    description:
      'Following a bequest from the late Archbishop Miguel de Benavides, Dominican friars in Manila officially establish the Colegio de Santisimo Rosario (later renamed the University of Santo Tomas) to train men for the priesthood and civil governance.',
    location: 'Intramuros, Manila',
    lat: 14.5925,
    lng: 120.9740,
    category: 'culture',
    effect: null,
  },
  {
    year: 1614,
    title: 'Arrival of Justo Takayama Ukon',
    description:
      'Following anti-Christian edicts in Japan, Christian Samurai lord Justo Takayama Ukon is exiled alongside 350 Japanese Catholics. They arrive in Manila, receive full military honors from the Governor-General, and are granted immediate asylum in Dilao.',
    location: 'Paco, Manila',
    lat: 14.5814,
    lng: 120.9904,
    category: 'culture',
    effect: null,
  },
  {
    year: 1615,
    title: 'Moro Raid on the Panay Shipbuilding Yards',
    description:
      'A massive joint invasion fleet from Maguindanao and Sulu carrying thousands of warriors strikes the central Visayas. They bypass major fortifications and systematically raze vital Spanish shipbuilding yards and native settlements throughout Panay.',
    location: 'Oton, Iloilo',
    lat: 10.6936,
    lng: 122.4842,
    category: 'war',
    effect: null,
  },
  {
    year: 1616,
    title: 'Second Battle of Playa Honda',
    description:
      'A powerful Dutch fleet under Admiral Joris van Spilbergen blockades Manila Bay to strangle the colony\'s trade lines. Spanish naval squadrons intercept them off Zambales, engaging in a bloody multi-day artillery battle that forces the Dutch to withdraw.',
    location: 'Playa Honda, Botolan, Zambales',
    lat: 15.2902,
    lng: 120.0201,
    category: 'war',
    effect: null,
  },
  {
    year: 1616,
    title: 'The Great Shipyard Draft of Governor Silva',
    description:
      'Governor-General Juan de Silva launches the most ambitious and logistically punishing military industrial mobilization in the history of the early colony. Intent on assembling an unstoppable armada to permanently crush the Dutch fleet in the Moluccas, Silva orchestrates a massive, ruthless labor draft under the polo laws. Tens of thousands of native Kapampangan and Tagalog workers are forcibly marched into the dense mountain forests to fell massive hardwood trees, while shipyards in Cavite operate around the clock. The extreme physical toll, combined with starvation wages, sparks widespread localized uprisings and decimates the local agricultural labor pool, leaving entire provinces completely bankrupted when Silva unexpectedly dies of disease during the campaign.',
    location: 'Cavite Naval Base, Cavite',
    lat: 14.4826,
    lng: 120.9124,
    category: 'politics',
    effect: 'pulse',
  },
  {
    year: 1617,
    title: 'Third Battle of Playa Honda',
    description:
      'The Dutch make a final major attempt to shatter the Spanish East Indies trade network, sending an armada under Admiral Jan Dirkzoon Lam. Commander Juan Ronquillo leads a fleet from Manila, destroys the Dutch flagship, and completely breaks the naval blockade.',
    location: 'Playa Honda, Botolan, Zambales',
    lat: 15.2902,
    lng: 120.0201,
    category: 'war',
    effect: 'pulse',
  },

  // ── 1621–1650 ────────────────────────────────────────────────────────────────
  {
    year: 1621,
    title: 'The Tamblot Revolt',
    description:
      'Tamblot, a native babaylan (shaman), incites a large-scale religious rebellion in Bohol. He urges the local population to abandon Christianity, return to their ancestral gods, and expel the Jesuit priests while they are away in Cebu.',
    location: 'Antequera, Bohol',
    lat: 9.7833,
    lng: 123.9000,
    category: 'revolution',
    effect: null,
  },
  {
    year: 1621,
    title: 'The Bankaw Revolt',
    description:
      'Bankaw, the aging chieftain of Limasawa who originally welcomed Legazpi in 1565, rejects his conversion to Christianity. Alongside his son and a native priest, he leads a violent nativist uprising across Leyte to restore pre-colonial spiritual traditions.',
    location: 'Carigara, Leyte',
    lat: 11.2942,
    lng: 124.6811,
    category: 'revolution',
    effect: null,
  },
  {
    year: 1622,
    title: 'Suppression of the Visayan Nativist Insurgencies',
    description:
      'Alcalde-Mayor Juan de Alcarazo of Cebu mobilizes a massive counter-insurgency force of Spanish soldiers and over 1,000 loyal native auxiliary troops. The colonial force systematically hunts down and brutally crushes both the Tamblot and Bankaw rebellions.',
    location: 'Carigara, Leyte',
    lat: 11.2942,
    lng: 124.6811,
    category: 'war',
    effect: 'pulse',
  },
  {
    year: 1625,
    title: 'The Mandaya Revolt',
    description:
      'Triggered by oppressive colonial labor and excessive tribute collection, the Mandaya people of northern Cagayan mutiny against the state. Led by native warriors Miguel Lanab and Fengal, they assassinate local Dominican missionaries and flee into the mountains.',
    location: 'Abulug, Cagayan',
    lat: 18.4233,
    lng: 121.4428,
    category: 'revolution',
    effect: null,
  },
  {
    year: 1626,
    title: 'The Formosa Expedition Staging',
    description:
      'Governor-General Fernando de Silva dispatches a massive Spanish-Filipino expeditionary fleet from Cavite to northern Formosa (Taiwan). Staged to check Dutch expansion, the fleet successfully establishes Fort San Salvador in Keelung, anchoring it under Manila\'s administrative loop.',
    location: 'Cavite Naval Base, Cavite',
    lat: 14.4826,
    lng: 120.9124,
    category: 'politics',
    effect: 'pulse',
  },
  {
    year: 1628,
    title: 'Jolo Raid on the Camarines Shipyards',
    description:
      'Sultan Muwallil Wasit of Sulu breaks years of relative peace, launching a devastating maritime raid targeting the newly established Royal Shipyards in Camarines. Moro fighters sack the facility, capture several Spanish vessels, and seize crucial iron tools and timber.',
    location: 'Pasacao, Camarines Sur',
    lat: 13.5112,
    lng: 123.0446,
    category: 'war',
    effect: null,
  },
  {
    year: 1635,
    title: 'Founding of Zamboanga (Fort Pilar)',
    description:
      'To establish a permanent military checkpoint capable of intercepting the devastating maritime raids launched by the Sultanates of Sulu and Maguindanao, Governor-General Juan Cerezo de Salamanca orders the formal construction of Real Fuerza de San José (later renamed Fort Pilar) in Zamboanga. Designed by the brilliant Jesuit engineer-architect Father Melchor de Vera, the stone fortress is strategically positioned at the southernmost tip of the Zamboanga peninsula. This base allows Spanish naval flotillas to monitor the vital sea lanes of the Basilan Strait, serving as the frontline military outpost of the Spanish empire in Mindanao for centuries to come.',
    location: 'Zamboanga City, Zamboanga del Sur',
    lat: 6.9011,
    lng: 122.0818,
    category: 'politics',
    effect: 'pulse',
  },
  {
    year: 1636,
    title: 'Battle of Lamitan',
    description:
      'Moro privateer Datu Tagal plunders the Visayas for seven months. Upon returning south with immense loot, his fleet is intercepted off Punta Flechas by a Spanish squadron from Zamboanga. Tagal is killed in a ferocious naval battle, prompting an aggressive Spanish counter-offensive.',
    location: 'Punta Flechas, San Pablo, Zamboanga del Sur',
    lat: 7.4215,
    lng: 122.4144,
    category: 'war',
    effect: null,
  },
  {
    year: 1637,
    title: 'The Fall of Lamitan and Defeat of Kudarat',
    description:
      'Governor-General Sebastián Hurtado de Corcuera personally leads a massive expeditionary force to Mindanao. They assault Sultan Kudarat\'s principal stronghold at Lamitan, breaching its heavy defenses. Kudarat is wounded but escapes into the interior to regroup his forces.',
    location: 'Lamitan, Basilan',
    lat: 6.6631,
    lng: 122.1442,
    category: 'war',
    effect: 'pulse',
  },
  {
    year: 1638,
    title: 'The Siege and Occupation of Jolo',
    description:
      'Governor Corcuera leads a force of 2,000 Spaniards and native volunteers to assault the fortified capital of the Sulu Sultanate. After months of bloody stalemate, a severe malaria epidemic breaks out inside Sultan Wasit\'s fort, forcing the Moro defenders to retreat to Tawi-Tawi.',
    location: 'Jolo, Sulu',
    lat: 6.0522,
    lng: 121.0014,
    category: 'war',
    effect: null,
  },
  {
    year: 1639,
    title: 'The Sangley Rebellion of 1639',
    description:
      'Driven to an absolute breaking point by the corrupt extortion of Spanish agricultural inspectors and the forced, lethal labor conditions in the state-run rice plantations of Calamba, thousands of Chinese laborers launch a massive, armed agrarian revolt. The rebellion quickly spreads like wildfire across Laguna, Rizal, and Cavite, with rebel forces marching toward the capital. For several months, the economic life of Luzon is entirely paralyzed as the rebels clash with colonial forces. The Real Audiencia responds by organizing an all-out war of attrition, deploying combined Spanish, Kapampangan, and indigenous bowmen regiments. The revolt is suppressed with apocalyptic violence, culminating in the execution of over twenty-four thousand Chinese merchants and laborers, and plunging Manila into a prolonged fiscal depression.',
    location: 'Calamba, Laguna',
    lat: 14.2125,
    lng: 121.1664,
    category: 'revolution',
    effect: 'pulse',
  },
  {
    year: 1645,
    title: 'The Great Manila Earthquake of 1645',
    description:
      'A catastrophic earthquake of estimated magnitude 7.5 strikes Luzon, reducing Intramuros to rubble. The Governor\'s palace, the cathedral, and nearly all stone buildings collapse. Over 600 residents are killed instantly, plunging the capital into structural and financial ruin.',
    location: 'Intramuros, Manila',
    lat: 14.5910,
    lng: 120.9754,
    category: 'disaster',
    effect: 'pulse',
  },
  {
    year: 1646,
    title: 'The Battles of La Naval de Manila',
    description:
      'In the midst of the global Thirty Years\' War, a massive, modern Dutch Protestant armada arrives in the Philippines with explicit orders to capture Manila and convert the archipelago into a commercial colony of the Dutch East India Company. The Spanish defense rests on just two aging, heavily retrofitted wooden merchant galleons, the Encarnación and the Rosario. Over the course of several months, the drastically outnumbered Spanish and native crews engage the superior Dutch fleets in five consecutive, grueling naval battles across Manila Bay and the Central Visayas. Against all mathematical odds, the Spanish vessels repel every single assault. The spectacular victory is universally attributed by the devout citizenry to the miraculous intercession of Our Lady of the Holy Rosary, initiating the celebrated annual festival of La Naval de Manila.',
    location: 'Manila Bay, Manila',
    lat: 14.5000,
    lng: 120.8500,
    category: 'war',
    effect: 'pulse',
  },
  {
    year: 1647,
    title: 'The Raid on Cavite and Abucay Massacre',
    description:
      'Flushed with rage after their strategic defeats at La Naval, a powerful Dutch naval squadron bypasses the heavy fortifications of Cavite and launches a brutal amphibious raid along the coast of Bataan, successfully seizing the stone church and convent of Abucay. Over several days, the Dutch forces fortify the complex. A hastily assembled force of poorly armed native Pampango militias, commanded by Spanish officers, attempts to storm the position but is outmaneuvered. Upon taking the compound, the Dutch execute over two hundred native defenders in cold blood, looting the rich ecclesiastical treasures before being driven back to their ships by a relief force from Manila.',
    location: 'Abucay, Bataan',
    lat: 14.7214,
    lng: 120.5311,
    category: 'war',
    effect: null,
  },
  {
    year: 1649,
    title: 'The Sumuroy Revolt',
    description:
      'Agustín Sumuroy sparks a massive rebellion in Samar after colonial officials mandate the forced conscription of Visayan shipwrights to rebuild vessels damaged in the Dutch wars. Sumuroy kills the local parish priest, inciting widespread anti-Spanish mutinies across the region.',
    location: 'Palapag, Northern Samar',
    lat: 12.5512,
    lng: 125.1189,
    category: 'revolution',
    effect: 'pulse',
  },
  {
    year: 1650,
    title: 'Execution of Sumuroy and Pacification',
    description:
      'Following a year of guerrilla warfare, native recruits from Pampanga turn the tide against the rebels. Traitors within Sumuroy\'s inner circle betray his position in the mountains, executing him and presenting his severed head to the Spanish command to secure full amnesty.',
    location: 'Palapag, Northern Samar',
    lat: 12.5512,
    lng: 125.1189,
    category: 'war',
    effect: null,
  },

  // ── 1660–1668 ────────────────────────────────────────────────────────────────
  {
    year: 1660,
    title: 'The Maniago Revolt',
    description:
      'Francisco Maniago, a powerful native military captain from Mexico, Pampanga, launches a highly organized, armed mutiny against the colonial state. The rebellion is fueled by decades of uncompensated rice seizures under the vandala system and the brutal, endless forced labor of Kapampangan men in the royal shipyards. Maniago\'s forces block vital river transport lanes and cut off the primary food supply lines into Manila, threatening an all-out march on the capital. Recognizing the existential threat of a wealthy, militarily trained province rebelling, Governor-General Sabiniano Manrique de Lara uses tactical diplomacy — partially paying off the state\'s massive debts to the local nobility and granting strategic amnesties — successfully fracturing the rebel alliance and arresting Maniago before the rebellion can merge with neighboring factions.',
    location: 'Mexico, Pampanga',
    lat: 15.0664,
    lng: 120.7203,
    category: 'revolution',
    effect: 'pulse',
  },
  {
    year: 1660,
    title: 'The Malong Rebellion',
    description:
      'Directly inspired by Maniago\'s early defiance in Pampanga, Juan Malong leads a massive, bloody anti-tribute uprising in Binalatongan, Pangasinan. Malong proclaims himself King of Pangasinan, executing local Spanish officials and assembling a native army that rapidly invades neighboring Ilocos and Pampanga. The uprising causes widespread panic within the central administration, prompting Governor-General de Lara to deploy a ruthless multi-pronged military counter-offensive utilizing highly disciplined Kapampangan troops to crush the rebel strongholds.',
    location: 'Binalatongan (San Carlos), Pangasinan',
    lat: 15.9272,
    lng: 120.3489,
    category: 'revolution',
    effect: 'pulse',
  },
  {
    year: 1661,
    title: 'The Almazan Revolt',
    description:
      'In Ilocos Norte, a wealthy chieftain named Don Pedro Almazan crowns himself King of Ilocos in a synchronized rebellion that targets regular friars and colonial outposts across the northern provinces. Together with the simultaneous Malong revolt in Pangasinan, these twin uprisings represent the most sweeping multi-province challenge to Spanish authority in seventeenth-century Luzon. Governor-General de Lara\'s forces ultimately capture and publicly execute both Malong and Almazan, stamping out the coordinated insurrection.',
    location: 'San Nicolas, Ilocos Norte',
    lat: 18.1736,
    lng: 120.5961,
    category: 'revolution',
    effect: null,
  },
  {
    year: 1661,
    title: 'Suppression of the Luzon Uprisings',
    description:
      'Governor-General Sabiniano Manrique de Lara dispatches extensive military columns led by General Francisco de Esteybar. Leveraging severe ethnic rivalries, the state uses thousands of loyal native troops to isolate Maniago, capture Andrés Malong, and systematically execute the ringleaders by hanging.',
    location: 'Binalatongan (San Carlos), Pangasinan',
    lat: 15.9272,
    lng: 120.3489,
    category: 'war',
    effect: 'pulse',
  },
  {
    year: 1662,
    title: 'The Koxinga Crisis and Total Fort Evacuation',
    description:
      'The brilliant Ming Dynasty loyalist and pirate warlord Koxinga, having successfully driven the Dutch out of Taiwan, dispatches a provocative Italian Dominican friar, Vittorio Ricci, to Manila as an official envoy. Koxinga issues an ultimatum demanding that the Spanish colony immediately pay heavy annual tribute to his kingdom or face an all-out naval invasion. The ultimatum triggers massive panic in Manila, prompting the immediate fortification of Intramuros and the tragic massacre of local Chinese residents out of fear of an internal fifth column. To concentrate all defensive forces around the capital, Governor Manrique de Lara issues a controversial emergency decree ordering the total abandonment and evacuation of Fort Pilar in Zamboanga — a pullout that leaves the Visayan islands entirely unprotected against southern maritime raids for over half a century.',
    location: 'Intramuros, Manila',
    lat: 14.5910,
    lng: 120.9754,
    category: 'politics',
    effect: 'pulse',
  },
  {
    year: 1663,
    title: 'The Sangley Riots of 1662–1663',
    description:
      'The mass defensive troop concentrations in Manila due to the Koxinga threat spark immense panic and racial paranoia. Believing a Spanish massacre is imminent, the Chinese residents of the Parian launch an outbreak of riots. Thousands flee or are slaughtered before Koxinga\'s sudden death in Formosa ends the invasion threat.',
    location: 'Santa Cruz, Manila',
    lat: 14.6014,
    lng: 120.9802,
    category: 'revolution',
    effect: null,
  },
  {
    year: 1663,
    title: 'The Tapar Mystical Revolt',
    description:
      'In Oton, Iloilo, a charismatic native mystic named Tapar launches a clandestine religious movement that blends traditional indigenous animism with distorted elements of Catholic theology. Tapar proclaims himself God the Almighty, establishing a complex native priesthood and attracting thousands of followers deeply alienated by the harsh labor demands of the local friars. When Spanish authorities attempt to forcibly dismantle the movement, Tapar\'s inner circle assassinates the Spanish curate, Father Francisco de Mesa. The colonial state responds with swift military force, tracking down the cult\'s jungle sanctuary, slaughtering the core believers, and displaying the mutilated bodies of Tapar and his high priests along the rivers to deter future religious apostasy.',
    location: 'Oton, Iloilo',
    lat: 10.6936,
    lng: 122.4842,
    category: 'revolution',
    effect: null,
  },
  {
    year: 1668,
    title: 'The Arrest of Governor Salcedo',
    description:
      'In an extraordinary breach of royal law, the Commissary of the Holy Office of the Inquisition, Fray José de Paternina, conspires with bitter local merchants. They launch a midnight coup, arresting Governor-General Diego de Salcedo in his bed over commercial feuds and locking him in an Augustinian cell.',
    location: 'Intramuros, Manila',
    lat: 14.5910,
    lng: 120.9754,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 1672–1696 ────────────────────────────────────────────────────────────────
  {
    year: 1672,
    title: 'Martyrdom of Pedro Calungsod',
    description:
      'Pedro Calungsod, a highly devout young Visayan catechist trained within the Jesuit mission network staging out of the Philippines, is brutally assassinated alongside his mentor, Father Diego Luis de San Vitores, by native Chamorro chieftains in Guam. The killings occur after the missionaries perform baptisms on local infants, which native shamans claimed were linked to a deadly smallpox outbreak. The news of Calungsod\'s violent death sends deep shockwaves through the ecclesiastical and political hub of Manila, highlighting the immense physical dangers faced by native Filipinos serving on the absolute frontlines of Spain\'s spiritual expansion across the broader Ladrones and Pacific islands.',
    location: 'Intramuros, Manila',
    lat: 14.5910,
    lng: 120.9754,
    category: 'culture',
    effect: null,
  },
  {
    year: 1679,
    title: 'Establishment of the New Parian',
    description:
      'Following a series of destructive fires and urban redesign programs within Manila\'s suburbs, Governor-General Juan de Vargas Hurtado mandates the total structural segregation of all non-Christian Chinese merchants. The state constructs a heavily guarded, stone-walled commercial ghetto known as the New Parian outside the northern walls of Intramuros. This zone is explicitly designed to isolate the Chinese population from the general public, allowing Spanish artillery pieces atop the bastions of Intramuros to have a clear, unobstructed line of fire on the merchant quarters in the event of an uprising, while simultaneously ensuring strict colonial collection of commercial customs taxes.',
    location: 'Plaza de Cervantes, Binondo, Manila',
    lat: 14.5996,
    lng: 120.9744,
    category: 'politics',
    effect: 'pulse',
  },
  {
    year: 1681,
    title: 'The Sambal Revolt',
    description:
      'Oppressive forced labor demands and corrupt timber quotas in the logging camps of Zambales drive the native Sambal and Negrito groups to rise up in a fierce guerrilla mutiny. The logging operations, which supplied the vital hardwood needed for Manila\'s galleon construction, had systematically destroyed ancestral hunting grounds. The rebels launch lethal hit-and-run ambushes on Spanish trade outposts and mining operations, effectively cutting off overland travel between Pangasinan and Manila. An aggressive, scorched-earth counter-offensive led by professional Spanish infantry forces pacifies the hills through mass executions and the forced relocation of mountain communities.',
    location: 'Botolan, Zambales',
    lat: 15.2902,
    lng: 120.0201,
    category: 'revolution',
    effect: null,
  },
  {
    year: 1683,
    title: 'The Banishing of Archbishop Pardo',
    description:
      'A fierce jurisdictional feud over royal versus ecclesiastical authority explodes between Governor-General Juan de Vargas Hurtado and the uncompromising Archbishop Felipe Pardo. The conflict, centered around the right to appoint religious offices and control church revenues, reaches a crisis point when the Royal Audiencia rules against the prelate. Armed guards arrest Archbishop Pardo within his cathedral, sentencing him to immediate exile and shipping him to Lingayen, Pangasinan under heavy military escort. This dramatic banishment plunges the colonial capital into a severe canonical crisis, with churches closing their doors and the religious orders openly defying the governor\'s secular administration.',
    location: 'Lingayen, Pangasinan',
    lat: 16.0204,
    lng: 120.2317,
    category: 'politics',
    effect: 'pulse',
  },
  {
    year: 1684,
    title: 'The Pardo Return and Retaliation',
    description:
      'The newly arrived Governor-General Gabriel de Curuzealegui, seeking to restore political stability and appease the powerful religious orders, immediately reverses his predecessor\'s exile decree and reinstates Archbishop Felipe Pardo. Pardo returns to Manila in triumph, fueled by absolute religious fervor. He promptly places the capital under a strict spiritual interdict, excommunicating Governor Vargas, the members of the Royal Audiencia, and all political detractors who had signed his banishment papers. This severe religious retaliation forces the former governor to perform humiliating public penance in the streets of Intramuros, demonstrating the supreme dominance of ecclesiastical power over secular governance.',
    location: 'Intramuros, Manila',
    lat: 14.5910,
    lng: 120.9754,
    category: 'politics',
    effect: null,
  },
  {
    year: 1685,
    title: 'The Chinese Expulsion Decree',
    description:
      'Citing lingering panic from old revolts and widespread non-compliance with Christian baptism mandates, Governor-General Gabriel de Curuzealegui aggressively enforces a strict royal decree expelling all non-baptized Chinese merchants from Luzon. The state orders the immediate closure of shops within the Parian, forcing hundreds of long-term residents to board vessels bound for mainland Chinese ports. This sudden mass deportation temporarily destabilizes the colony\'s domestic retail trade economy, causing severe shortages of basic provisions, artisan labor, and agricultural goods within the capital, which forces the state to quietly issue exemptions for vital craftsmen.',
    location: 'Intramuros, Manila',
    lat: 14.5910,
    lng: 120.9754,
    category: 'trade',
    effect: 'pulse',
  },
  {
    year: 1690,
    title: 'The Caraga Revolt',
    description:
      'Spurred by excessive tribute collection, illegal arbitrary arrests, and the flagrant abuse of local judicial offices by colonial governors, native warriors in northeastern Mindanao launch an anti-Spanish uprising. The rebels attack and sack a handful of remote colonial military outposts and mission stations along the Caraga coast, attempting to completely sever ties with the colonial government in Cebu. Regional Spanish naval forces and native Christian militias deploy rapidly to neutralize the faction leaders, executing the rebel commanders and establishing tighter garrison control over the mineral-rich coastal zones.',
    location: 'Cantilan, Surigao del Sur',
    lat: 9.3512,
    lng: 125.9754,
    category: 'revolution',
    effect: null,
  },
  {
    year: 1696,
    title: 'Assassination of Auditor Jose de Paza',
    description:
      'In an unprecedented act of internal elite violence, the Auditor of the Royal Audiencia, Jose de Paza, is brutally assassinated in broad daylight within the streets of Intramuros. De Paza had been spearheading a series of bitter, high-stakes anti-corruption trials targeting high-ranking military officers, wealthy merchant cartels, and senior officials involved in the systematic embezzlement of galleon customs revenues. His public murder shocks the colonial establishment, forcing the state to declare martial law within the capital, deploy heavy military checkpoints, and initiate an intensive investigation that exposes deep structural corruption linking the judiciary with the mercantile class.',
    location: 'Intramuros, Manila',
    lat: 14.5910,
    lng: 120.9754,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 1702–1720 ────────────────────────────────────────────────────────────────
  {
    year: 1702,
    title: 'Establishment of the Real Audiencia Passports',
    description:
      'To address growing internal security concerns and track non-native populations, Governor-General Domingo Zabálburu de Echevarrí mandates that all traveling foreign merchants and non-resident Sangleys must carry formal pass registries vetted directly by the Audiencia. This measure aims to restrict illegal Chinese migration into the provinces and prevent espionage by rival European traders, marking an early phase of bureaucratic border controls within the colony.',
    location: 'Intramuros, Manila',
    lat: 14.5910,
    lng: 120.9754,
    category: 'politics',
    effect: null,
  },
  {
    year: 1704,
    title: 'Opening of the Seminario de San Clemente',
    description:
      'Following a royal decree from King Philip V, the first formal diocesan seminary in Manila, San Clemente, is established. The institution aims to train native and secular priests, representing a shift toward localized religious administration despite fierce regular clergy resistance. The project is funded largely by the French foreign missions, causing immediate suspicion among Spanish friars who view it as a violation of the patronato real.',
    location: 'Intramuros, Manila',
    lat: 14.5941,
    lng: 120.9723,
    category: 'culture',
    effect: 'pulse',
  },
  {
    year: 1707,
    title: 'The Pardo Seminary Dissolution',
    description:
      'Fierce ecclesiastical infighting reaches a breaking point as the regular religious orders successfully petition the Crown to close and reconstruct the native seminary system, highlighting deep racial and administrative divides regarding the ordination of native Filipino priests. The existing native students are evicted, and the administration is completely overhauled to favor European-born candidates, solidifying the friars\' monopoly over lucrative provincial parishes.',
    location: 'Intramuros, Manila',
    lat: 14.5910,
    lng: 120.9754,
    category: 'culture',
    effect: null,
  },
  {
    year: 1709,
    title: 'The Chinese Expulsion Order of Governor Zabalburu',
    description:
      'Responding to complaints from local retail guilds regarding economic dominance, Governor Zabálburu enforces a strict royal decree expelling non-resident, non-baptized Chinese traders from Manila, forcing hundreds to deport back to mainland ports. This move disrupts the regional supply chain but temporarily appeases the Spanish mercantile elite who felt squeezed out by the efficient commercial networks of the Sangley merchants.',
    location: 'Intramuros, Manila',
    lat: 14.5910,
    lng: 120.9754,
    category: 'trade',
    effect: 'pulse',
  },
  {
    year: 1717,
    title: 'Arrival and Fiscal Audits of Governor Bustamante',
    description:
      'Governor-General Fernando Manuel de Bustamante arrives in Manila and discovers a severely depleted royal treasury caused by rampant tax evasion and institutional corruption among the city\'s high-ranking elite, merchants, and religious orders. Bustamante immediately launches aggressive, sweeping audits, freezing the assets of prominent citizens and reclaiming millions of pesos in unpaid customs duties, earning him the bitter hatred of Manila\'s ruling class.',
    location: 'Intramuros, Manila',
    lat: 14.5910,
    lng: 120.9754,
    category: 'politics',
    effect: null,
  },
  {
    year: 1718,
    title: 'The Refoundation of Fort Pilar',
    description:
      'Recognizing the strategic disaster of having abandoned Mindanao during the Koxinga crisis, Governor Bustamante orders the immediate reconstruction and re-garrisoning of Fort Pilar in Zamboanga to intercept escalating maritime raids from the southern Sultanates. The fort is rebuilt with thicker stone bastions and equipped with heavy bronze artillery, re-establishing a permanent Spanish military presence on the Islamic frontier.',
    location: 'Zamboanga City, Zamboanga del Sur',
    lat: 6.9011,
    lng: 122.0818,
    category: 'politics',
    effect: 'pulse',
  },
  {
    year: 1719,
    title: 'The Assassination of Governor Bustamante',
    description:
      'Governor Bustamante\'s aggressive jailing of elite tax evaders and his arrest of the Archbishop triggers a violent coup. An angry mob composed of regular friars, citizens, and merchants storms the Palacio del Gobernador, brutally assassinating Bustamante and his son on the palace steps. The conspirators release the jailed Archbishop and establish a temporary junta, marking one of the most shocking breakdowns of royal authority in the history of Spain\'s colonial empire.',
    location: 'Intramuros, Manila',
    lat: 14.5922,
    lng: 120.9729,
    category: 'revolution',
    effect: 'pulse',
  },
  {
    year: 1720,
    title: 'The Siege of Fort Pilar',
    description:
      'Seeking to smash the newly rebuilt Spanish outpost before its defenses can solidify, a massive allied fleet from Sulu and Maguindanao lays siege to Fort Pilar. The Spanish garrison holds out against a multi-month blockade, securing the strategic southern point. The successful defense proves the structural validity of the fort\'s design and prevents the total collapse of Spanish influence in the western Visayas.',
    location: 'Zamboanga City, Zamboanga del Sur',
    lat: 6.9011,
    lng: 122.0818,
    category: 'war',
    effect: null,
  },

  // ── 1730–1750 ────────────────────────────────────────────────────────────────
  {
    year: 1730,
    title: 'The Maguindanao Civil War Intervention',
    description:
      'A bitter war of succession breaks out within the Sultanate of Maguindanao between rival claimants. Spanish forces stationed at the newly reinforced Fort Pilar in Zamboanga intervene, providing strategic military assistance to traditional allies to fracture Moro political cohesion. By supplying firearms and naval transport to one faction, the Spanish successfully keep the sultanate divided and reduce their capacity to launch coordinated raids against the northern islands.',
    location: 'Zamboanga City, Zamboanga del Sur',
    lat: 6.9011,
    lng: 122.0818,
    category: 'war',
    effect: null,
  },
  {
    year: 1734,
    title: 'Publication of the Murillo Velarde Map',
    description:
      'The Jesuit cartographer Father Pedro Murillo Velarde, collaborating with native Filipino engravers Francisco Suárez and Nicolás de la Cruz Bagay, publishes the Carta Hydrographica y Chorographica de las Yslas Filipinas. It stands as the first scientific, highly detailed map of the entire archipelago. The map serves not only as a vital navigational tool for the galleon trade but also as a definitive statement of Spanish imperial sovereignty, featuring intricate border illustrations of local ethnic groups and urban scenes.',
    location: 'Intramuros, Manila',
    lat: 14.5910,
    lng: 120.9754,
    category: 'culture',
    effect: null,
  },
  {
    year: 1737,
    title: 'The Peace Treaty with the Sultanate of Sulu',
    description:
      'Governor-General Fernando Valdés y Tamón signs a formal maritime peace treaty with Sultan Azim ud-Din I (Alimuddin) of Sulu. The treaty establishes mutual trade protocols, exchange mechanisms for prisoners of war, and a short-lived defense alliance against common maritime threats. The pact signals a rare period of diplomatic engagement, allowing Christian and Muslim merchants to legally trade in each other\'s ports under strict royal regulation.',
    location: 'Jolo, Sulu',
    lat: 6.0522,
    lng: 121.0014,
    category: 'politics',
    effect: null,
  },
  {
    year: 1743,
    title: 'Capture of the Galleon Covadonga',
    description:
      'During the War of Jenkins\' Ear, British Commodore George Anson intercepts and captures the richly laden Manila Galleon Nuestra Señora de la Covadonga off Cape Espíritu Santo. The loss of over 1.3 million silver pesos inflicts a devastating financial shock on the Manila merchants. The event exposes the vulnerability of Spain\'s trans-Pacific monopoly and prompts the military to significantly upgrade the naval escorts for future galleon routes.',
    location: 'Cape Espíritu Santo, Eastern Samar',
    lat: 12.5800,
    lng: 125.1700,
    category: 'war',
    effect: null,
  },
  {
    year: 1744,
    title: 'Outbreak of the Dagohoy Rebellion',
    description:
      'Following a Jesuit priest\'s refusal to give his brother a proper Christian burial, Francisco Dagohoy incites a massive, armed rebellion in Bohol. The movement rapidly gains traction, driving Spanish forces out of the island\'s interior and establishing an independent, self-sustaining native state. The rebels build fortified mountain settlements and defy colonial tax collectors for over eight decades, making it the longest-running armed resistance movement in Philippine history.',
    location: 'Inabanga, Bohol',
    lat: 9.7833,
    lng: 123.9000,
    category: 'revolution',
    effect: 'pulse',
  },
  {
    year: 1745,
    title: 'The Tagalog Agrarian Revolts',
    description:
      'Simultaneous agrarian uprisings explode across Cavite, Laguna, Batangas, and Bulacan. Led by figures like Matias de los Reyes, thousands of native farmers revolt against the illegal land encroachments of regular friar estates, which had seized ancestral communal grazing fields and water sources. The rebels sack church granaries and clash with colonial militias, forcing the central government to intervene to prevent a total systemic collapse of the capital\'s food supply.',
    location: 'Calamba, Laguna',
    lat: 14.2125,
    lng: 121.1664,
    category: 'revolution',
    effect: 'pulse',
  },
  {
    year: 1746,
    title: 'Royal Decree on the Agrarian Audits',
    description:
      'In response to the massive 1745 uprisings, King Philip V dispatches Oidor Pedro Calderón Enríquez to formally audit friar land titles. Calderón rules in favor of the native peasants on multiple counts, ordering the religious estates to return stolen lands to prevent total systemic collapse. However, bureaucratic resistance from the friars delays the actual implementation of the land returns, leaving the underlying agrarian tensions completely unresolved.',
    location: 'Intramuros, Manila',
    lat: 14.5910,
    lng: 120.9754,
    category: 'politics',
    effect: null,
  },
  {
    year: 1749,
    title: 'Exile and Deposition of Sultan Alimuddin',
    description:
      'Fierce anti-Spanish and anti-Christian factions led by his brother, Datu Bantilan, stage a coup within the Sulu Sultanate. Deposed and facing death, Sultan Alimuddin escapes Jolo and sails north to Manila to seek official political refuge and military asylum from the colonial state. Governor Juan de Arrechederra welcomes him with royal honors, seeing a golden opportunity to convert the sultan and turn Sulu into a client state.',
    location: 'Jolo, Sulu',
    lat: 6.0522,
    lng: 121.0014,
    category: 'politics',
    effect: null,
  },
  {
    year: 1750,
    title: 'The Baptism of Sultan Alimuddin',
    description:
      'Sultan Alimuddin formalizes his compliance with Spanish political expectations by converting to Catholicism. He is baptized in Paniqui, Tarlac, taking the name Don Fernando de Alimuddin I — a highly controversial event that deepens religious divisions across the southern frontier. While celebrated in Manila as a triumph of the faith, the conversion is rejected by the ruling datus of Sulu, who permanently sever their allegiance to him.',
    location: 'Paniqui, Tarlac',
    lat: 15.6667,
    lng: 120.5500,
    category: 'religion',
    effect: null,
  },

  // ── 1751–1755 ────────────────────────────────────────────────────────────────
  {
    year: 1751,
    title: 'Imprisonment of Sultan Alimuddin',
    description:
      'While returning to Jolo to reclaim his throne with a Spanish escort, Sultan Alimuddin is intercepted in Zamboanga. Governor Pedro Zacharías Manuel de Arandía discovers hidden letters suspected of treason, arrests Alimuddin, and ships him back to Manila as a prisoner of state in Fort Santiago. This sudden reversal destroys Spanish-Sulu diplomacy, triggering a brutal wave of retaliatory raids across the Visayas by Moro fleets who view the arrest as an act of absolute treachery.',
    location: 'Fort Santiago, Intramuros, Manila',
    lat: 14.5947,
    lng: 120.9701,
    category: 'politics',
    effect: 'pulse',
  },
  {
    year: 1754,
    title: 'The Great Moro Raids and Eruption of Taal',
    description:
      'Sulu and Maguindanao fleets launch the most destructive coordinated raids in history, raiding Visayan coasts and reaching Mariveles. Concurrently, Taal Volcano undergoes its longest recorded historical eruption (200 days), burying several lakeside towns in ash and changing regional geography. The double catastrophe of systemic maritime warfare and volcanic devastation plunges the colony into economic paralysis, destroying agricultural yields across southern Luzon.',
    location: 'Taal Volcano, San Nicolas, Batangas',
    lat: 14.0112,
    lng: 120.9978,
    category: 'disaster',
    effect: 'ash',
  },
  {
    year: 1755,
    title: 'Expulsion of Non-Christian Chinese',
    description:
      'Governor-General Pedro Manuel de Arandía enforces a strict expulsion order banishing all non-Christian Chinese merchants from the colony. He establishes the Alcaicería de San Fernando in Binondo as a highly regulated, enclosed marketplace for authorized Christian Chinese traders. This measure aims to curb the economic influence of non-baptized Sangleys and force assimilation, but it results in a severe shortage of skilled labor and immediate inflation within Manila\'s domestic markets.',
    location: 'Binondo, Manila',
    lat: 14.6001,
    lng: 120.9749,
    category: 'trade',
    effect: null,
  },

  // ── 1762–1789 ────────────────────────────────────────────────────────────────
  {
    year: 1762,
    title: 'The British Invasion and Fall of Manila',
    description:
      'As part of the Seven Years\' War, a British expeditionary fleet under Admiral Samuel Cornish breaches Manila Bay. British forces storm Intramuros, unleashing a brutal three-day sack of the city. Archbishop-Governor Manuel Rojo surrenders while Simon de Anda escapes to Bulacan to organize a resistance government. The capture of the capital completely shatters the myth of Spanish military invincibility, permanently altering the political consciousness of the native population.',
    location: 'Intramuros, Manila',
    lat: 14.5910,
    lng: 120.9754,
    category: 'war',
    effect: 'smoke',
  },
  {
    year: 1762,
    title: 'Outbreak of the Silang and Palaris Revolts',
    description:
      'Exploiting the collapse of Spanish authority caused by the British occupation, Diego Silang launches an anti-tribute uprising in Ilocos, offering an alliance to the British. Simultaneously, Juan de la Cruz Palaris incites a massive agrarian rebellion in Pangasinan, driving out Spanish officials. These concurrent revolts represent a profound regional rejection of colonial taxation and forced labor at a moment when the central state was paralyzed by foreign invasion.',
    location: 'Vigan, Ilocos Sur',
    lat: 17.5747,
    lng: 120.3869,
    category: 'revolution',
    effect: 'pulse',
  },

  {
    year: 1763,
    title: 'Assassination of Diego Silang and Gabriela\'s Resistance',
    description:
      'Spanish loyalists assassinate Diego Silang in his home. His widow, Gabriela Silang, takes command of the rebel forces, leading fierce guerrilla assaults against Spanish columns before being captured and publicly hanged in Vigan alongside her top commanders. Her leadership marks a historic moment of female military command within the anti-colonial struggle, inspiring future generations of Ilocano resistance.',
    location: 'Vigan, Ilocos Sur',
    lat: 17.5747,
    lng: 120.3869,
    category: 'revolution',
    effect: null,
  },
  {
    year: 1764,
    title: 'The Treaty of Paris and British Evacuation',
    description:
      'Following the Treaty of Paris, the British formally hand Manila back to the Spanish Crown. Simon de Anda enters the capital in triumph. The war leaves the royal treasury completely bankrupted and shatters the myth of Spanish military invincibility among the native population. The colonial state is forced to completely re-evaluate its defense strategies and economic policies, paving the way for the implementation of the aggressive Bourbon Reforms.',
    location: 'Intramuros, Manila',
    lat: 14.5910,
    lng: 120.9754,
    category: 'politics',
    effect: 'pulse',
  },
  {
    year: 1765,
    title: 'Suppression of the Palaris Rebellion',
    description:
      'With Manila recaptured, the Spanish state redirects its entire military apparatus to Pangasinan. Accompanied by thousands of loyal native auxiliaries, colonial forces hunt down the remaining rebels. Palaris is betrayed, captured, and executed, ending the multi-year revolt. The brutal pacification campaign serves as a stark warning to the provinces that the restored Spanish administration would brook no internal dissent.',
    location: 'Calasiao, Pangasinan',
    lat: 16.0076,
    lng: 120.3601,
    category: 'war',
    effect: null,
  },
  {
    year: 1768,
    title: 'The Expulsion of the Jesuits',
    description:
      'Following a royal decree from King Charles III executing the Bourbon Reforms, the Spanish military enforces the sudden arrest and total banishment of the Jesuit order from the Philippines. All Jesuit parishes, schools, and vast haciendas are confiscated by the crown. The sudden vacuum of educators and parish priests forces the state to accelerate the secularization of the clergy, inadvertently opening the doors for native Filipino priests to take over major parishes.',
    location: 'Intramuros, Manila',
    lat: 14.5910,
    lng: 120.9754,
    category: 'politics',
    effect: 'pulse',
  },
  {
    year: 1774,
    title: 'The Royal Decree on Secularization',
    description:
      'King Charles III issues a decree ordering the gradual turnover of parishes from regular religious orders to secular priests. This allows native Filipino priests to head major parishes for the first time, triggering a bitter, racially charged backlash from European friars. The conflict over parish jurisdiction would become a central ideological driver of the early nationalist movement, pitting native intellectuals against monastic power.',
    location: 'Intramuros, Manila',
    lat: 14.5910,
    lng: 120.9754,
    category: 'culture',
    effect: null,
  },
  {
    year: 1778,
    title: 'Arrival of Governor Basco and Economic Overhaul',
    description:
      'Governor-General José Basco y Vargas arrives with mandates to implement aggressive Bourbon economic reforms. He aims to eliminate the colony\'s financial dependence on the annual Mexican subsidy by transforming the islands into an agricultural export powerhouse. Basco\'s policies favor the intensive cultivation of cash crops and development of local industries, laying the groundwork for the modern, globalized economy of the 19th-century Philippines.',
    location: 'Intramuros, Manila',
    lat: 14.5910,
    lng: 120.9754,
    category: 'politics',
    effect: 'pulse',
  },
  {
    year: 1781,
    title: 'Establishment of the Tobacco Monopoly',
    description:
      'Governor Basco establishes the Estanco de Tabaco (Tobacco Monopoly). Certain provinces, particularly Cagayan and Marinduque, are strictly forbidden from planting standard food crops and forced to cultivate tobacco exclusively for state-run factories and export. While the monopoly generates unprecedented revenues for the royal treasury, it inflicts severe economic hardships on native farmers who face food shortages and strict corporate surveillance.',
    location: 'Ilagan, Cagayan Valley',
    lat: 17.1364,
    lng: 121.8872,
    category: 'trade',
    effect: 'pulse',
  },
  {
    year: 1782,
    title: 'Founding of the Sociedad Económica',
    description:
      'Governor Basco officially inaugurates the Sociedad Económica de los Amigos del País (Economic Society of Friends of the Country). The society funds research into scientific agriculture, introducing new machinery and cash crops like indigo, silk, and cotton to global markets. This institution serves as an intellectual and commercial hub, promoting economic self-sufficiency and training local farmers in advanced production techniques.',
    location: 'Intramuros, Manila',
    lat: 14.5910,
    lng: 120.9754,
    category: 'trade',
    effect: null,
  },
  {
    year: 1785,
    title: 'Charter of the Royal Company of the Philippines',
    description:
      'King Charles III charters the Real Compañía de Filipinas (Royal Company of the Philippines). Granted a monopoly on direct trade between Spain and the islands, it allows Philippine vessels to bypass the strict Manila Galleon routes, opening commercial avenues with Asian neighbors. The company encourages investment in local agriculture and manufacturing, accelerating the erosion of Manila\'s traditional isolationist mercantile system.',
    location: 'Intramuros, Manila',
    lat: 14.5910,
    lng: 120.9754,
    category: 'trade',
    effect: 'pulse',
  },
  {
    year: 1787,
    title: 'The Ilocos Basi Revolt',
    description:
      'The strict implementation of state monopolies spreads to local sugarcane wines (basi). Prohibiting home breweries, the government forces Ilocano farmers to purchase wine from state outlets, sparking a series of violent localized riots across northern Luzon. The rebellion highlights the deep cultural and economic resistance of the native populations to the intrusive financial interventions of the Bourbon reforms.',
    location: 'Piddig, Ilocos Norte',
    lat: 18.1011,
    lng: 120.6974,
    category: 'revolution',
    effect: null,
  },
  {
    year: 1789,
    title: 'The Careri Proposal for Manila Free Port',
    description:
      'Governor-General Félix Berenguer de Marquina submits a radical masterplan to the Spanish Crown, recommending that Manila be officially declared an open free port to foreign vessels to capture mainstream Asian and European merchant shipping. Although initially rejected by conservative trade factions in Spain, the proposal marks a critical intellectual shift toward the inevitable dismantling of the archaic Galleon trade system.',
    location: 'Manila Port, Manila',
    lat: 14.5994,
    lng: 120.9678,
    category: 'trade',
    effect: null,
  },

  // ── 1803–1820 ────────────────────────────────────────────────────────────────
  {
    year: 1803,
    title: 'Establishment of the Foreign Merchants Decree',
    description:
      'Governor-General Rafael María de Aguilar issues a decree regulating the entry and residence of non-Spanish foreign merchants. While designed to restrict British and American influence, it unintentionally formalizes their presence, paving the way for the commercial opening of Manila. Foreign trading houses capitalize on this framework to establish permanent roots, driving the expansion of the colony\'s cash-crop economy.',
    location: 'Intramuros, Manila',
    lat: 14.5910,
    lng: 120.9754,
    category: 'trade',
    effect: null,
  },
  {
    year: 1805,
    title: 'Introduction of the Smallpox Vaccine',
    description:
      'The Balmis Expedition arrives in Manila via the galleon Magallanes, bringing the smallpox vaccine preserved through a living chain of orphaned children. Governor Aguilar establishes the Central Vaccination Board, launching one of the earliest mass public health campaigns in Asia. This medical intervention successfully mitigates the endemic outbreaks that had historically decimated both urban centers and rural agricultural communities.',
    location: 'Intramuros, Manila',
    lat: 14.5910,
    lng: 120.9754,
    category: 'culture',
    effect: 'pulse',
  },
  {
    year: 1807,
    title: 'The Ambaristo (Basi) Revolt',
    description:
      'Driven to a breaking point by the government\'s strict monopoly on sugarcane wine (basi) and the ban on homemade brewing, Ilocano rebels led by Pedro Mateo and Sararong Ambaristo launch a violent uprising, marching on Vigan before being defeated by colonial forces. The revolt exposes the explosive nature of state fiscal monopolies and the depth of native attachment to ancestral communal practices.',
    location: 'San Ildefonso, Ilocos Sur',
    lat: 17.6189,
    lng: 120.3792,
    category: 'revolution',
    effect: 'pulse',
  },
  {
    year: 1811,
    title: 'The Igorot Revolt of Nueva Vizcaya',
    description:
      'Indigenous Igorot and Gaddang communities launch a coordinated revolt against the coercive enforcement of the state tobacco monopoly and heavy religious conversions, raiding colonial settlements before being pushed back into the Cordillera mountains. The resistance limits the reach of colonial tax collectors in the highland interiors and reinforces the historical autonomy of the mountain tribes.',
    location: 'Bayombong, Nueva Vizcaya',
    lat: 16.4833,
    lng: 121.1500,
    category: 'revolution',
    effect: null,
  },
  {
    year: 1812,
    title: 'Proclamation of the Cadiz Constitution',
    description:
      'The liberal Spanish Constitution of 1812 is officially promulgated in Manila. It grants Spanish citizenship to native Filipinos and abolishes forced labor (polo y servicio), sparking intense political awakening among the native population and deep alarm among conservative friars. The sudden promise of radical equality before the law permanently alters expectations of governance, creating an ideological baseline for future nationalist reform movements.',
    location: 'Intramuros, Manila',
    lat: 14.5910,
    lng: 120.9754,
    category: 'politics',
    effect: 'pulse',
  },
  {
    year: 1814,
    title: 'Cataclysmic Eruption of Mayon Volcano',
    description:
      'Mayon Volcano suffers its most destructive historical eruption, raining lethal pyroclastic flows and lahars down upon surrounding settlements. The entire town of Cagsawa is completely obliterated, leaving only the stone church bell tower standing as a permanent monument. The natural disaster triggers regional displacement, agricultural devastation, and deep socio-economic instability across the Bicol peninsula.',
    location: 'Mayon Volcano, Daraga, Albay',
    lat: 13.2548,
    lng: 123.6861,
    category: 'disaster',
    effect: 'ash',
  },
  {
    year: 1815,
    title: 'Abolition of the Manila Galleon Trade',
    description:
      'Following King Ferdinand VII\'s reversal of liberal reforms and the outbreak of the Mexican War of Independence, the historic Manila-Acapulco Galleon trade is permanently abolished. The last official state galleon, the San Fernando, departs Manila, ending a 250-year-old economic era. This collapse forces the Philippines to transition completely toward a direct agricultural export model to survive in the global marketplace.',
    location: 'Manila Port, Manila',
    lat: 14.5994,
    lng: 120.9678,
    category: 'trade',
    effect: 'pulse',
  },
  {
    year: 1815,
    title: 'The Sarrat Rebellion',
    description:
      'Triggered by King Ferdinand VII\'s revocation of the 1812 Cadiz Constitution, which restored oppressive tribute laws, over a thousand Ilocano commoners (kailanes) lead a bloody revolt against the wealthy pro-Spanish native elites (principales) in Sarrat. The rebellion exposes sharp internal class divisions within native society, targeting the elite who collaborated with Spanish authorities to enforce taxes.',
    location: 'Sarrat, Ilocos Norte',
    lat: 18.1678,
    lng: 120.6492,
    category: 'revolution',
    effect: null,
  },
  {
    year: 1820,
    title: 'The Cholera Epidemic and Manila Massacre',
    description:
      'The first global cholera pandemic devastates Manila, killing thousands. Fueled by panic and rumors that foreign merchants poisoned the water supply, a violent local mob massacres dozens of European and American traders and Chinese residents in the streets of Binondo. The tragedy highlights the extreme volatility of the urban population under public health crises and temporarily strains Spain\'s international trade relations.',
    location: 'Binondo, Manila',
    lat: 14.6001,
    lng: 120.9749,
    category: 'disaster',
    effect: 'pulse',
  },

  // ── 1823 ─────────────────────────────────────────────────────────────────────
  {
    year: 1823,
    title: 'The Novales Mutiny',
    description:
      'Captain Andrés Novales, a creole officer in the Spanish army, leads a military coup in Manila driven by resentment over a royal policy demoting locally born officers in favor of peninsulars. Novales and his co-conspirators seize key government buildings in Intramuros, declaring him Emperor of the Philippines. The mutiny collapses within twenty-four hours after Governor-General Martínez rallies loyal Pampangan regiments; Novales is immediately executed. The uprising serves as an early warning to the Crown regarding racial tensions within the colonial military.',
    location: 'Intramuros, Manila',
    lat: 14.5922,
    lng: 120.9729,
    category: 'revolution',
    effect: 'pulse',
  },

  // ── 1828 ─────────────────────────────────────────────────────────────────────
  {
    year: 1828,
    title: 'Establishment of the Banco Español-Filipino Charter',
    description:
      'King Ferdinand VII issues a royal decree mandating a public bank in Manila to stabilize the colony\'s finances after the loss of the Mexican subsidy. Though bureaucratic delays stall operations for over two decades, the charter marks the legal birth of what becomes the Banco Español-Filipino de Isabel II — now the Bank of the Philippine Islands — signaling a shift from galleon-era wealth toward a credit-driven commercial banking system.',
    location: 'Intramuros, Manila',
    lat: 14.5910,
    lng: 120.9754,
    category: 'trade',
    effect: null,
  },

  // ── 1829 ─────────────────────────────────────────────────────────────────────
  {
    year: 1829,
    title: 'Termination of the Dagohoy Rebellion',
    description:
      'The longest rebellion in Philippine history ends after eighty-five years of autonomous native rule in the Bohol interior. Governor-General Ricafort deploys over six thousand troops in a scorched-earth campaign, destroying mountain strongholds and capturing more than twenty thousand rebels. Though Francisco Dagohoy had died years prior, the final surrender of his commanders re-establishes Spanish administrative control over Bohol.',
    location: 'Inabanga, Bohol',
    lat: 10.0333,
    lng: 124.0667,
    category: 'war',
    effect: 'pulse',
  },

  // ── 1834 ─────────────────────────────────────────────────────────────────────
  {
    year: 1834,
    title: 'Official Opening of Manila to World Trade',
    description:
      'A royal decree opens the Port of Manila to unrestricted global commerce, dismantling centuries of mercantilist isolation. British and American firms establish permanent trading houses, directly financing local crop production. The liberalization triggers a boom in agricultural exports — sugar, abaca, and tobacco — while fostering the rise of a wealthy educated middle class of native and mestizo elites who would eventually challenge Spanish rule.',
    location: 'Manila Port, Manila',
    lat: 14.5994,
    lng: 120.9678,
    category: 'trade',
    effect: 'pulse',
  },

  // ── 1837 ─────────────────────────────────────────────────────────────────────
  {
    year: 1837,
    title: 'Abolition of Philippine Representation in the Spanish Cortes',
    description:
      'Following conservative shifts in Madrid, the Crown strips the Philippines of its right to send elected delegates to the Spanish Cortes, reclassifying it as an overseas colony governed by special laws. The disenfranchisement shatters the hopes of educated native elites for peaceful political integration and creates deep resentment that accelerates the drive toward reform.',
    location: 'Intramuros, Manila',
    lat: 14.5910,
    lng: 120.9754,
    category: 'politics',
    effect: null,
  },

  // ── 1841 ─────────────────────────────────────────────────────────────────────
  {
    year: 1841,
    title: 'The Cofradía de San José Revolt',
    description:
      'Apolinario de la Cruz, known as Hermano Pule, launches an armed rebellion in Tayabas after Spanish authorities ban his native-only religious fraternity, the Cofradía de San José. After an early success killing the provincial governor, Spanish forces ambush the main Cofradía camp on Mount San Cristobal. Hermano Pule is captured, shot, and dismembered — his head displayed as a warning. The brutal suppression deepens the divide between native secular priests and European regular friars.',
    location: 'Tayabas, Quezon',
    lat: 14.0253,
    lng: 121.5950,
    category: 'revolution',
    effect: 'pulse',
  },

  // ── 1843 ─────────────────────────────────────────────────────────────────────
  {
    year: 1843,
    title: 'The Tayabas Regiment Mutiny',
    description:
      'Enraged by the execution of Hermano Pule and his followers, native soldiers of the Spanish army\'s Tayabas Regiment stage a midnight mutiny at Fort Santiago, executing their Spanish officers and calling for a native uprising. The rebellion is crushed the following morning; Sergeant Samaniego and eighty soldiers are executed at Bagumbayan. The mutiny alarms the colonial administration, revealing anti-Spanish sentiment had penetrated the state\'s own defense forces.',
    location: 'Fort Santiago, Intramuros, Manila',
    lat: 14.5947,
    lng: 120.9701,
    category: 'revolution',
    effect: null,
  },

  // ── 1844 ─────────────────────────────────────────────────────────────────────
  {
    year: 1844,
    title: "Clavería's Correction of the Philippine Calendar",
    description:
      'Governor-General Clavería issues a decree correcting a 240-year-old error: because early Spanish explorers arrived via the Pacific without accounting for the International Date Line, the Philippines had been a full day behind the rest of Asia since 1521. December 31, 1844 is removed from the calendar entirely, aligning the colony with the modern trading world effective January 1, 1845.',
    location: 'Intramuros, Manila',
    lat: 14.5910,
    lng: 120.9754,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 1848 ─────────────────────────────────────────────────────────────────────
  {
    year: 1848,
    title: 'The Balanguingui Expedition',
    description:
      'Governor-General Clavería commands an amphibious campaign against the Sama-Balanguingui maritime raiding networks in the Sulu Archipelago using newly acquired British steam-powered warships. The Spanish fleet smashes the fortified island strongholds, burning hundreds of raiding vessels, killing over four hundred warriors, and liberating thousands of Christian captives. Steam power definitively breaks the centuries-old military dominance of southern maritime raiders.',
    location: 'Balanguingui Island, Sulu',
    lat: 6.0116,
    lng: 121.4510,
    category: 'war',
    effect: 'pulse',
  },

  // ── 1849 ─────────────────────────────────────────────────────────────────────
  {
    year: 1849,
    title: 'The Catálogo Alfabético de Apellidos Decree',
    description:
      'Governor-General Clavería enforces a civil reform distributing a massive alphabetical catalog of Spanish, native, and geographical surnames to every province. Noting that a large portion of the native population lacked distinct hereditary family names, local authorities compel heads of families to select a permanent surname — permanently reshaping demographic records and family lineages across the archipelago.',
    location: 'Intramuros, Manila',
    lat: 14.5910,
    lng: 120.9754,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 1851 ─────────────────────────────────────────────────────────────────────
  {
    year: 1851,
    title: 'The Destruction of the Jolo Stronghold',
    description:
      'Governor-General Antonio de Urbiztondo leads a massive, heavily armed amphibious expedition to Jolo to permanently break the military resistance of the Sultanate of Sulu. Utilizing modern steamships and heavy artillery, Spanish forces successfully storm and burn the heavily fortified capital of Sultan Pulalun. This forced capitulation leads to a treaty where the Sultan acknowledges a vague Spanish sovereignty, though the interior remains autonomous.',
    location: 'Jolo, Sulu',
    lat: 6.0519,
    lng: 121.0058,
    category: 'war',
    effect: 'pulse',
  },
  {
    year: 1851,
    title: 'Chartering of the Banco Español-Filipino de Isabel II',
    description:
      'The Banco Español-Filipino de Isabel II officially begins commercial operations under a royal charter issued by Queen Isabella II. As the first modern bank in the archipelago and the entire Southeast Asian region, it is granted an exclusive monopoly to print the colony\'s first paper currency, the pesos fuertes. This structural financial shift provides the essential liquidity and monetary stability required to support the burgeoning cash-crop export market, integrating the islands directly into modern international financial networks and laying the economic foundations for a globalized commercial class.',
    location: 'Intramuros, Manila',
    lat: 14.5925,
    lng: 120.9740,
    category: 'trade',
    effect: 'pulse',
  },

  // ── 1855 ─────────────────────────────────────────────────────────────────────
  {
    year: 1855,
    title: 'The Opening of Regional Ports to International Trade',
    description:
      'A royal decree formally opens the strategic regional ports of Sual (Pangasinan), Iloilo, and Zamboanga to direct international shipping, dismantling the long-standing commercial monopoly of the Manila-based merchant cartels. The opening of Iloilo, in particular, triggers an immediate, explosive economic boom in the Western Visayas, transforming the region into the Sugar Capital of the Philippines. British and American vice-consuls, most notably Nicholas Loney in Iloilo, flood the region with modern steam-powered sugar mills and easy credit, permanently altering the socio-economic hierarchy of the Visayas by giving rise to a powerful, highly educated class of land-owning sugar barons (hacenderos).',
    location: 'Port of Iloilo, Iloilo City',
    lat: 10.6930,
    lng: 122.5760,
    category: 'trade',
    effect: 'pulse',
  },

  // ── 1859 ─────────────────────────────────────────────────────────────────────
  {
    year: 1859,
    title: 'The Return of the Jesuits and the Founding of the Ateneo',
    description:
      'Ninety-one years after their sudden banishment from the Spanish Empire, the Jesuit order is officially permitted to return to the Philippines. While their primary imperial assignment is to establish remote missions and pacify the Islamic frontiers of Mindanao, the municipal council of Manila requests that they take over local secondary education. The Jesuits establish the Escuela Municipal de Manila in Intramuros, a highly progressive institution focusing on the natural sciences, humanities, and rigorous academic discipline. This school, later renamed the Ateneo Municipal, would educate the brightest minds of the native and mestizo elite — including José Rizal — fostering a generation of critical thinkers who would ultimately spearhead the propaganda movement against Spanish rule.',
    location: 'Intramuros, Manila',
    lat: 14.5915,
    lng: 120.9735,
    category: 'culture',
    effect: null,
  },

  // ── 1860 ─────────────────────────────────────────────────────────────────────
  {
    year: 1860,
    title: 'The Opening of the Port of Cebu to World Commerce',
    description:
      'The Spanish Crown officially declares the Port of Cebu an open international trading hub, revitalizing the stagnant economy of the Central and Eastern Visayas. Foreign commercial firms rapidly establish permanent corporate outposts in Cebu City, directly financing the large-scale cultivation and mass export of sugar, tobacco, and high-grade abaca. The sudden influx of international capital triggers radical urban development, rapid population growth, and a profound demographic shift, cementing the rise of a wealthy, highly influential Chinese-Filipino mestizo merchant class that would dominate the region\'s political and cultural landscape well into the modern era.',
    location: 'Port of Cebu, Cebu City',
    lat: 10.2941,
    lng: 123.9061,
    category: 'trade',
    effect: 'pulse',
  },

  // ── 1863 ─────────────────────────────────────────────────────────────────────
  {
    year: 1863,
    title: 'The Educational Decree of 1863',
    description:
      'The Spanish Crown issues the transformative Educational Decree of 1863, which mandates the establishment of a free, comprehensive primary school system for boys and girls in every single municipality across the Philippines, alongside a centralized normal school (Escuela Normal de Maestros) to train native teachers. For the first time, the state attempts to wrestle educational control away from the absolute monopoly of the parish friars and introduce a standardized curriculum taught entirely in the Spanish language. This decree inadvertently creates the Ilustrados — a highly articulate, pan-regional class of educated native Filipinos who use their mastery of Spanish to critique colonial failures.',
    location: 'Intramuros, Manila',
    lat: 14.5910,
    lng: 120.9754,
    category: 'politics',
    effect: 'pulse',
  },
  {
    year: 1863,
    title: 'The Great Manila Earthquake and Death of Father Pelaez',
    description:
      'A catastrophic earthquake completely devastates Manila, reducing Intramuros to rubble, destroying the Manila Cathedral and the Palacio del Gobernador, and killing hundreds of citizens. Among the prominent casualties is Father Pedro Pelaez, the brilliant champion of the native secular clergy, who had spent years leading a legal and intellectual campaign against the regular Spanish friars to secure parish appointments for native priests. His sudden death stalls the secularization movement momentarily but creates a vacuum that would soon be filled by his radical protégé, Father José Burgos, setting up the defining ideological clash of the next decade.',
    location: 'Manila Cathedral, Intramuros, Manila',
    lat: 14.5917,
    lng: 120.9734,
    category: 'disaster',
    effect: 'pulse',
  },

  // ── 1869 ─────────────────────────────────────────────────────────────────────
  {
    year: 1869,
    title: 'The Arrival of Governor-General De la Torre',
    description:
      'Following the liberal Spanish Revolution of 1868 which deposed Queen Isabella II, Governor-General Carlos María de la Torre arrives in Manila, ushering in a brief but historic golden era of political liberalization. De la Torre abolishes strict media censorship, outlaws state-sanctioned flogging within the military, pardons agrarian rebels, and actively mingles with native secular priests and reformist intellectuals at the palace. This radical democratic breathing room allows native elites to openly discuss political reforms and constitutional rights for the first time in the colony\'s history.',
    location: 'Palacio del Gobernador, Intramuros, Manila',
    lat: 14.5919,
    lng: 120.9731,
    category: 'politics',
    effect: 'pulse',
  },
  {
    year: 1869,
    title: 'The Opening of the Suez Canal',
    description:
      'The official opening of the Suez Canal drastically alters the geopolitical and economic reality of the Philippines by reducing maritime travel time between Spain and Manila from several months to just thirty days. This maritime breakthrough floods the colony with modern European literature, radical liberal ideas, and an influx of progressive Spaniards. It permanently shatters the intellectual isolation of the archipelago, enabling a rapid exchange of people and revolutionary philosophies that accelerates the development of a distinct Filipino nationalist consciousness.',
    location: 'Manila Port, Manila',
    lat: 14.5994,
    lng: 120.9678,
    category: 'trade',
    effect: 'pulse',
  },

  // ── 1870 ─────────────────────────────────────────────────────────────────────
  {
    year: 1870,
    title: 'The Rise of the Comité de Reformadores and Student Activism',
    description:
      'Capitalizing on the liberal atmosphere fostered by Governor De la Torre, native secular priests, professionals, and student activists organize the Comité de Reformadores. Led by figures like Father José Burgos and the wealthy merchant Joaquín Pardo de Tavera, the committee pushes for structural ecclesiastical reforms, parish secularization, and civil and educational changes. At the University of Santo Tomas, native students launch unprecedented organized protests under the banner of Juventud Escolar Liberal, demanding the modernization of the academic curriculum, better treatment of native students, and the removal of conservative friar control over higher education. This marks the formal, institutional crystallization of the early nationalist reform movement.',
    location: 'University of Santo Tomas, Intramuros, Manila',
    lat: 14.5936,
    lng: 120.9751,
    category: 'revolution',
    effect: 'pulse',
  },

  // ── 1871 ─────────────────────────────────────────────────────────────────────
  {
    year: 1871,
    title: 'The Arrival of Governor-General Izquierdo and the Reactionary Backlash',
    description:
      'Following the collapse of the liberal regime in Spain, Governor-General Rafael de Izquierdo arrives in Manila to replace the reform-minded Carlos María de la Torre. Izquierdo immediately institutes a harsh reactionary policy, declaring that he will govern with a crucifix in one hand and a sword in the other. He swiftly reinstates strict media censorship, strips native professionals of civil positions, and revokes longstanding tax and labor exemptions for native workers at the strategic Cavite naval arsenals. This abrupt socio-economic reversal creates immense resentment among soldiers, laborers, and the educated ilustrado class, setting a volatile stage by squeezing the growing pressure valve of native reformism.',
    location: 'Palacio del Gobernador, Intramuros, Manila',
    lat: 14.5919,
    lng: 120.9731,
    category: 'politics',
    effect: null,
  },

  // ── 1872 ─────────────────────────────────────────────────────────────────────
  {
    year: 1872,
    title: 'The Cavite Mutiny and the Martyrdom of GOMBURZA',
    description:
      'On January 20, around two hundred native soldiers and arsenal workers at Fort San Felipe in Cavite stage an armed mutiny under Sergeant Fernando La Madrid, believing their uprising will trigger a general rebellion in Manila. The colonial state violently suppresses the mutiny within days and uses it as a convenient political pretext to crush the secularization movement. In a heavily rigged military trial, progressive native priests Mariano Gomes, José Burgos, and Jacinto Zamora (GOMBURZA) are falsely accused of orchestrating the mutiny. On February 17, they are publicly executed by garrote at Bagumbayan. This execution deeply traumatizes the populace, serving as the decisive catalyst for modern Filipino nationalism; it permanently shatters native loyalty to Spain and binds diverse ethno-linguistic regions into a shared consciousness of colonial suffering.',
    location: 'Bagumbayan (Rizal Park), Manila',
    lat: 14.5818,
    lng: 120.9760,
    category: 'revolution',
    effect: 'fire',
  },

  // ── 1873–1895 ────────────────────────────────────────────────────────────────
  {
    year: 1873,
    title: 'Expansion of Maritime Lines and Telegraph Interconnection',
    description:
      'The maritime link between Europe and the Philippines is heavily modernized with the expansion of regular steamship routes, alongside structural upgrades to the ports of Manila and Iloilo. These vessels rapidly export high-grade cash crops like abaca and sugar, while importing European industrial goods and radical political literature. Simultaneously, the state begins connecting major government offices via early telegraph lines. This socio-economic acceleration deepens the wealth of provincial landowning families (hacenderos), funding the overseas education of their sons and structurally knitting the archipelago into the fast-paced network of global industrial capitalism.',
    location: 'Manila Port, Manila',
    lat: 14.5994,
    lng: 120.9678,
    category: 'trade',
    effect: null,
  },
  {
    year: 1874,
    title: 'The Founding of the Hacienda de Luisita and Agrarian Consolidation',
    description:
      'The Spanish Crown issues a royal concession granting the Compañía General de Tabacos de Filipinas (Tabacalera) immense tracts of fertile land in Central Luzon, laying the structural groundwork for the Hacienda de Luisita in Tarlac. This marks a major shift toward corporate-driven, monoculture agribusiness focused on sugar and tobacco for global export. To maximize profits, corporate owners aggressively enforce exploitative tenant-farming (inquilinato) systems. The resulting displacement of traditional smallholders and indigenous farmers transforms the agrarian landscape, cementing a deep-seated economic inequality that would fuel peasant radicalism and social unrest across Central Luzon for over a century.',
    location: 'San Miguel, Tarlac',
    lat: 15.4372,
    lng: 120.6558,
    category: 'trade',
    effect: null,
  },
  {
    year: 1875,
    title: 'The Opening of the Chartered Bank of India, Australia and China',
    description:
      'The Chartered Bank of India, Australia, and China (precursor to Standard Chartered) officially establishes its first branch in Manila, breaking the monopoly of domestic ecclesiastical funds and the Banco Español-Filipino. This influx of British financial capital allows foreign merchant houses to advance massive credit to native and Chinese-Filipino mestizo planters in Negros, Iloilo, and Pampanga. This financial integration shifts the colony\'s economic center of gravity away from mercantilist Spanish administrative control and directly into the sphere of British and American free-trade imperialism, accelerating the growth of an ambitious, cash-rich local bourgeoisie.',
    location: 'Binondo, Manila',
    lat: 14.5991,
    lng: 120.9753,
    category: 'trade',
    effect: null,
  },
  {
    year: 1876,
    title: 'The Treaty of Jolo and the Manila-Dagupan Railway Master Plan',
    description:
      'Governor-General José Malcampo leads a massive assault on Jolo, forcing Sultan Jamalul Alam to sign the Treaty of Jolo. While Spain frames this as an absolute annexation to prevent German or British colonization of the Sulu Archipelago, the Sultan retains domestic administrative autonomy and religious freedom. Concurrently, engineers submit the first comprehensive master plan for the Ferro-carril de Manila-Dagupan (the Manila-Dagupan Railway). This transport infrastructure project aims to physically connect the lucrative agricultural plains of Pangasinan and Central Luzon directly to the capital, transforming domestic logistics, encouraging internal migration, and accelerating state control over peripheral territories.',
    location: 'Jolo, Sulu',
    lat: 6.0519,
    lng: 121.0058,
    category: 'war',
    effect: 'pulse',
  },
  {
    year: 1877,
    title: "The Publication of 'El Eco de Filipinas' and the Resurgence of Liberal Press",
    description:
      'Amid minor political shifts in Madrid, a brief relaxation of censorship allows for the publication of El Eco de Filipinas, a periodical that cautiously articulates the economic and administrative grievances of the colony\'s merchant and professional elites. Though heavily monitored by conservative regular friars, the paper provides an early forum for discussing structural reforms, such as the assimilation of the Philippines as a regular province of Spain and the secularization of parishes. This editorial experiment nurtures a growing appetite for civil liberties among the local ilustrados, proving that media could serve as an effective weapon against institutional autocracy.',
    location: 'Intramuros, Manila',
    lat: 14.5910,
    lng: 120.9754,
    category: 'politics',
    effect: null,
  },
  {
    year: 1878,
    title: 'The Lease Agreement of the Sultanate of Sulu with the British North Borneo Company',
    description:
      'Sultan Jamalul Alam of Sulu signs a historic, ambiguous lease agreement (pajak) with Baron von Overbeck and Alfred Dent of the British North Borneo Company, ceding the Sultanate\'s territorial claims in northern Borneo (Sabah) for an annual rental payment. This diplomatic maneuver is designed by the Sultan to secure British protection against aggressive Spanish military incursions. However, the move triggers a long-term geopolitical dispute over territorial sovereignty between Spain, Great Britain, and later the modern republics of the Philippines and Malaysia, fundamentally altering the diplomatic cartography of maritime Southeast Asia.',
    location: 'Maimbung, Sulu',
    lat: 5.9258,
    lng: 121.0314,
    category: 'politics',
    effect: null,
  },
  {
    year: 1879,
    title: "Rizal's 'A la Juventud Filipina' and the Emergence of National Identity",
    description:
      'An eighteen-year-old José Rizal wins first prize in a literary contest held by the Liceo Artístico-Literario de Manila for his poem A la Juventud Filipina (To the Filipino Youth). In this historic work, Rizal explicitly refers to the Philippines as his fatherland (patria) and calls upon the native youth to unshackle their intellects. By publicly designating native inhabitants as Filipinos — a term previously reserved exclusively for Spanish creoles born in the islands — Rizal subverts the colonial racial hierarchy, initiating an intellectual revolution that redefines national identity and inspires a generation of students to question Spanish cultural hegemony.',
    location: 'Intramuros, Manila',
    lat: 14.5910,
    lng: 120.9754,
    category: 'politics',
    effect: null,
  },
  {
    year: 1880,
    title: 'The Submarine Telegraph Cable and the Great Earthquake of 1880',
    description:
      'The Eastern Extension Australasia and China Telegraph Company successfully lays a submarine telegraph cable connecting Cape Bolinao in Pangasinan directly to British Hong Kong. For the first time, Manila is linked in real-time to the global communication grid, allowing international commodity markets to dictate domestic export prices within hours. Months later, a succession of violent earthquakes shatters Manila and surrounding provinces, destroying historic stone churches and public infrastructure, forcing a comprehensive architectural shift toward the flexible arquitectura mestiza (wood-framed upper stories on stone bases).',
    location: 'Bolinao, Pangasinan',
    lat: 16.3842,
    lng: 119.8931,
    category: 'disaster',
    effect: 'pulse',
  },
  {
    year: 1881,
    title: 'The Abolition of the Tobacco Monopoly',
    description:
      'Governor-General Fernando Primo de Rivera officially abolishes the century-old Government Tobacco Monopoly (Estanco de Tabaco) in response to rampant corruption, systemic inefficiencies, and persistent peasant resistance across the Cagayan Valley. The industry is privatized, paving the way for the dominance of the corporate giant Tabacalera. Simultaneously, Primo de Rivera issues an aggressive royal decree demanding the absolute military pacification and cultural assimilation of the non-Christian Igorot tribes of the Cordillera, deepening a historic socio-cultural divide between the Hispanicized lowland Catholic populations and the fiercely autonomous highland groups.',
    location: 'Cagayan Valley Region',
    lat: 17.6132,
    lng: 121.7262,
    category: 'trade',
    effect: 'pulse',
  },
  {
    year: 1882,
    title: "The Founding of 'Diariong Layan' and Rizal's Departure for Europe",
    description:
      'Marcelo H. del Pilar establishes Diariong Layan (Free Diary) in Bulacan, the first bilingual daily newspaper in the Philippines to publish articles in both Tagalog and Spanish. The paper serves as a platform for del Pilar\'s sharp, witty critiques against friar abuses and institutional corruption before it is swiftly suppressed by authorities. Concurrently, José Rizal secretly boards a steamship bound for Spain. Rizal\'s departure marks the formal geopolitical shift of the reformist movement, as young elites realize that the suffocating atmosphere of Manila makes meaningful intellectual dissent impossible, leading to the creation of the expatriate Propaganda Movement in Europe.',
    location: 'Malolos, Bulacan',
    lat: 14.8433,
    lng: 120.8114,
    category: 'politics',
    effect: null,
  },
  {
    year: 1883,
    title: 'The Outbreak of the Global Cholera Pandemic in the Provinces',
    description:
      'A devastating wave of the fifth global cholera pandemic sweeps through the Philippine archipelago, rapidly overwhelming the state\'s primitive sanitation infrastructure and killing tens of thousands of rural laborers. The regular friars utilize the public health crisis to reinforce spiritual dependency, framing the disease as a divine punishment for growing secular tendencies. The massive loss of rural life disrupts agricultural production, triggers widespread economic distress, and exposes the systemic failure of the Spanish medical system, highlighting the profound vulnerability of the colonial state\'s healthcare network.',
    location: 'Vigan, Ilocos Sur',
    lat: 17.5747,
    lng: 120.3875,
    category: 'disaster',
    effect: null,
  },
  {
    year: 1884,
    title: 'The Abolition of the Tributo and Introduction of the Cédula Personal',
    description:
      'In a sweeping fiscal overhaul, the Spanish colonial administration officially abolishes the archaic, race-based Tributo system that had stood since the 16th century, replacing it with the Cédula Personal — an identity tax certificate mandatory for all subjects over eighteen. While the reform removes explicit racial distinctions in tax forms, it significantly increases the financial burden on the working class and functions as a highly intrusive mechanism for population tracking and counter-insurgency. This document becomes an immediate, hated symbol of Spanish bureaucratic oppression, laying the groundwork for its eventual defiance as a physical act of revolution.',
    location: 'Intramuros, Manila',
    lat: 14.5910,
    lng: 120.9754,
    category: 'politics',
    effect: 'pulse',
  },
  {
    year: 1885,
    title: 'The Caroline Islands Crisis and Colonial Military Mobilization',
    description:
      'A major geopolitical standoff erupts between Spain and the German Empire when Germany attempts to annex the Caroline Islands, an isolated Spanish possession in Micronesia. The colonial government in Manila rapidly mobilizes its naval forces and conscripts thousands of native soldiers for potential Pacific warfare. While Pope Leo XIII eventually mediates the dispute, validating Spain\'s territorial sovereignty, the crisis highlights the geopolitical vulnerability of Spain\'s remaining Pacific empire, forcing the administration to increase military expenditures and impose heavier tax burdens on an already restive Philippine population.',
    location: 'Manila Bay, Manila',
    lat: 14.5800,
    lng: 120.9400,
    category: 'politics',
    effect: null,
  },
  {
    year: 1886,
    title: 'The Completion of the Carriedo Water System',
    description:
      'After decades of delays and financial mismanagement, the Carriedo Water System officially opens, providing Manila with its first modern, centralized network of running water and public hydrants. Funded by a century-old bequest from philanthropist Francisco Carriedo and engineered using modern Spanish techniques, the project greatly improves urban public health by providing clean water to cholera-prone working-class districts like Tondo and Sampaloc. This infrastructure achievement fosters a sense of municipal modernization among residents, while accentuating the stark socio-economic divide between the fully serviced capital and the neglected, disease-prone provinces.',
    location: 'San Juan del Monte, Rizal',
    lat: 14.6067,
    lng: 121.0333,
    category: 'trade',
    effect: 'pulse',
  },
  {
    year: 1887,
    title: "The Publication of 'Noli Me Tángere'",
    description:
      'In March, José Rizal publishes his explosive debut novel, Noli Me Tángere (Touch Me Not), in Berlin, Germany. Smuggled into the Philippines inside commercial cargo boxes, the book offers a scathing, realistic takedown of the corrupt regular friars, the inefficiencies of civil governance, and the psychological submissiveness of native society. The colonial government immediately condemns the novel as heretical and seditious, banning its possession. The book electrifies the literate public, providing a shared vocabulary for colonial critique and irreversibly radicalizing the political dialogue by demonstrating that reform through assimilation is structurally impossible.',
    location: 'Calamba, Laguna',
    lat: 14.2127,
    lng: 121.1648,
    category: 'politics',
    effect: 'pulse',
  },
  {
    year: 1888,
    title: 'The Anti-Friar Demonstration and Founding of La Solidaridad',
    description:
      'On March 1, native and mestizo district leaders (gobernadorcillos) led by Doroteo Cortés march boldly through the streets of Manila to present a petition to the Governor-General, demanding the immediate expulsion of the regular Spanish friars and the secularization of parishes. The state responds with swift arrests, exiling the leaders to remote islands. Expatriate activists fleeing the crackdown escape to Spain, where they organize the Asociación Hispano-Filipina and lay the foundations for La Solidaridad, a fortnightly newspaper designed to lobby the Spanish Cortes for civil liberties, legal equality, and freedom of speech.',
    location: 'Binondo to Intramuros, Manila',
    lat: 14.5940,
    lng: 120.9720,
    category: 'politics',
    effect: 'pulse',
  },
  {
    year: 1889,
    title: "The First Issue of 'La Solidaridad' and Del Pilar's Ascendancy",
    description:
      'On February 15, the first issue of La Solidaridad is published in Barcelona, Spain, under the initial editorship of Graciano López Jaena, who is soon succeeded by the politically astute Marcelo H. del Pilar. Financed by progressive merchants in Manila, the journal becomes the intellectual engine of the Propaganda Movement. It systematically dismantles Spanish assertions of racial inferiority, advocates for parliamentary representation, and exposes colonial abuses. Although its immediate readership is limited to Spanish liberals and educated ilustrados, the ideas expressed trickle down into the working-class districts of Manila, providing the intellectual framework for armed revolution.',
    location: 'Intramuros, Manila',
    lat: 14.5910,
    lng: 120.9754,
    category: 'politics',
    effect: null,
  },
  {
    year: 1890,
    title: 'The Calamba Agrarian Land Dispute',
    description:
      'The longstanding tension between tenant farmers in Calamba and the powerful Dominican Order reaches a violent crisis point. Encouraged by José Rizal, the tenants — including Rizal\'s own family — refuse to pay exorbitant land rent increases demanded by the friars until legal land titles are produced. Governor-General Valeriano Weyler sides completely with the Dominicans, deploying artillery units to Calamba to enforce the eviction of over three hundred families, burning their homes and exiling prominent residents. This agrarian suppression exposes the absolute dominance of monastic property owners over civil courts, convincing working-class organizers that legal appeals are completely useless against institutional violence.',
    location: 'Calamba, Laguna',
    lat: 14.2127,
    lng: 121.1648,
    category: 'politics',
    effect: 'pulse',
  },
  {
    year: 1891,
    title: "The Publication of 'El Filibusterismo' and the Manila-Dagupan Railway",
    description:
      'In September, José Rizal publishes El Filibusterismo (The Reign of Greed) in Ghent, Belgium. A dark, cynical sequel to his first novel, it explores the themes of failed reforms and the morality of violent revolution through the character of Simoun, an anarchist bomb-plotter. Simultaneously, the historic Manila-Dagupan Railway begins operations along its entire length. While the state celebrates this engineering marvel for its economic utility, the railway physically accelerates the distribution of subversive literature and political ideas, inadvertently linking radical urban networks with restive rural populations across Central Luzon.',
    location: 'Dagupan, Pangasinan',
    lat: 16.0433,
    lng: 120.3433,
    category: 'trade',
    effect: 'pulse',
  },
  {
    year: 1892,
    title: 'The Founding of La Liga Filipina and the Birth of the Katipunan',
    description:
      'On July 3, José Rizal returns to Manila and establishes La Liga Filipina, a civic association aiming to unify the archipelago into a cohesive body for mutual protection and socio-economic advancement. Just three days later, Governor-General Eulogio Despujol orders Rizal\'s immediate arrest and banishment to Dapitan. Recognizing that peaceful constitutional reform died with Rizal\'s exile, a radical faction of the Liga led by Andres Bonifacio meets secretly in Tondo on July 7 to found the Katipunan (KKK). This secret, revolutionary society abandons assimilation entirely, committing itself to achieving absolute national independence through armed revolution.',
    location: 'Tondo, Manila',
    lat: 14.6111,
    lng: 120.9697,
    category: 'revolution',
    effect: 'pulse',
  },
  {
    year: 1893,
    title: 'The Spread of the Katipunan Triangle System',
    description:
      'To maintain absolute secrecy under the watchful eye of Spanish intelligence, Andres Bonifacio aggressively expands the Katipunan utilizing a highly secure triangle system, where a member knows only two other operatives. Simultaneously, the society begins embedding itself within local Filipino Masonic Lodges, which operate under international charters and offer safe spaces for political networking. Bonifacio begins recruiting progressive women, creating a female chapter of the KKK to safeguard sensitive documents and act as an intelligence shield, transforming the secret society into a highly organized, underground shadow government across the provinces of Manila, Cavite, and Bulacan.',
    location: 'Trozo, Manila',
    lat: 14.6060,
    lng: 120.9790,
    category: 'revolution',
    effect: null,
  },
  {
    year: 1894,
    title: 'The Japanese Overtures and the First Sino-Japanese War',
    description:
      'As the Katipunan\'s membership swells into the thousands, Bonifacio and his top advisor, Emilio Jacinto, make early diplomatic overtures to the Empire of Japan, seeking arms shipments and financial support for their upcoming revolution. These efforts are heavily influenced by the outbreak of the First Sino-Japanese War, which demonstrates that an industrialized Asian power can decisively smash a traditional empire. Though Japan officially maintains neutrality to preserve its delicate relations with Spain, the geopolitical shift inspires the Katipunan leadership, convincing them that the global balance of power is shifting away from fading European empires.',
    location: 'Manila Bay, Manila',
    lat: 14.5900,
    lng: 120.9600,
    category: 'politics',
    effect: null,
  },
  {
    year: 1895,
    title: "Publication of 'Kalayaan' and the Intensification of Katipunan Recruitment",
    description:
      'The Katipunan acquires a functional printing press, enabling Emilio Jacinto to edit and print Kalayaan (Liberty), the society\'s official underground newspaper. To evade immediate censorship, the masthead falsely claims it is printed in Yokohama, Japan. The paper features powerful, accessible essays written in Tagalog that detail the historic exploitation of the Filipino people by Spain. The single issue distributed across the provinces triggers a massive wave of popular radicalization, causing Katipunan membership to skyrocket from a few hundred to over thirty thousand within months.',
    location: 'Lavezares Street, Binondo, Manila',
    lat: 14.6012,
    lng: 120.9715,
    category: 'revolution',
    effect: null,
  },

  // ── 1896 ─────────────────────────────────────────────────────────────────────
  {
    year: 1896,
    title: 'Discovery of the Katipunan, Cry of Pugad Lawin, and Execution of Rizal',
    description:
      'On August 19, Teodoro Patiño betrays the secrets of the Katipunan to a Spanish friar, triggering a massive, immediate wave of state arrests in Manila. Bonifacio and his followers flee to the hills, gathering at Pugad Lawin where they tear up their cédulas as a physical act of open rebellion. Armed conflict erupts across Luzon, leading Governor-General Ramón Blanco to declare martial law in eight provinces. In an effort to terrorize the population, the state subjects José Rizal to a show trial; on December 30, he is executed by firing squad at Bagumbayan. Far from stopping the rebellion, Rizal\'s martyrdom turns a localized insurrection into an all-out national war for absolute independence.',
    location: 'Bagumbayan (Rizal Park), Manila',
    lat: 14.5818,
    lng: 120.9760,
    category: 'revolution',
    effect: 'fire',
  },

  // ── 1897 ─────────────────────────────────────────────────────────────────────
  {
    year: 1897,
    title: 'The Tejeros Convention, Execution of Bonifacio, and Pact of Biak-na-Bato',
    description:
      'Deep ideological and class fractures divide the revolution into two factions: Bonifacio\'s Magdiwang and Emilio Aguinaldo\'s Magdalo. At the Tejeros Convention on March 22, a revolutionary government is formed, replacing the Katipunan and electing Aguinaldo as President. Bonifacio rejects the outcome, leading to his arrest and controversial execution for treason in Maragondon. Aguinaldo retreats to the mountains of Bulacan under heavy Spanish pressure, signing the Pact of Biak-na-Bato with Governor-General Fernando Primo de Rivera in December. The pact provides for a temporary ceasefire, a monetary indemnity, and the voluntary exile of Aguinaldo and his top generals to Hong Kong, leaving the revolution temporarily leaderless but structurally intact.',
    location: 'Biak-na-Bato, San Miguel, Bulacan',
    lat: 15.1436,
    lng: 121.0805,
    category: 'revolution',
    effect: 'pulse',
  },

  // ── 1898 ─────────────────────────────────────────────────────────────────────
  {
    year: 1898,
    title: 'The Spanish-American War, Declaration of Independence, and Treaty of Paris',
    description:
      'The geopolitical landscape changes forever when the United States enters a war with Spain. On May 1, Commodore George Dewey destroys the Spanish Pacific fleet at the Battle of Manila Bay. Aguinaldo returns from exile aboard an American ship, rallies his forces, and proclaims Philippine Independence on June 12 in Kawit, Cavite. However, American forces isolate the Filipino army, staging a mock battle with Spain to secure Manila\'s surrender without native participation. On December 10, completely ignoring the newly formed Philippine government, Spain and the United States sign the Treaty of Paris, transferring sovereignty over the Philippines to the U.S. for twenty million dollars, replacing an old European colonial master with an ascendant Western industrial superpower.',
    location: 'Kawit, Cavite',
    lat: 14.4442,
    lng: 120.9042,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 1899 ─────────────────────────────────────────────────────────────────────
  {
    year: 1899,
    title: 'The Malolos Constitution and the Outbreak of the Philippine-American War',
    description:
      'On January 23, the First Philippine Republic is officially inaugurated in Malolos, Bulacan, under a highly progressive, democratic constitution drafted by Apolinario Mabini and Felipe Calderon. However, on February 4, an American sentry shoots a Filipino soldier near the San Juan Bridge, triggering the immediate outbreak of the Philippine-American War. President William McKinley justifies the bloody conflict as a mission of Benevolent Assimilation. The heavily armed U.S. army swiftly captures Malolos, forcing Aguinaldo to dissolve his conventional army and transition to a protracted, decentralised guerrilla warfare campaign across the rugged terrain of Luzon.',
    location: 'Barasoain Church, Malolos, Bulacan',
    lat: 14.8472,
    lng: 120.8119,
    category: 'war',
    effect: 'pulse',
  },

  // ── 1900 ─────────────────────────────────────────────────────────────────────
  {
    year: 1900,
    title: 'The Guerrilla Campaign, Battle of Mabitac, and Taft Commission',
    description:
      'The Philippine-American War transitions into a bloody, decentralized guerrilla campaign. Filipino commanders achieve notable tactical victories, such as General Juan Cailles routing U.S. forces at the Battle of Mabitac. In response, U.S. Military Governor Arthur MacArthur institutes a brutal pacification strategy, forcing rural populations into guarded concentration zones (reconcentración) and cutting off guerrilla supply lines. Concurrently, the Second Philippine Commission led by William Howard Taft arrives in Manila, setting up a civil administrative framework designed to co-opt wealthy native elites, establish public schools, and systematically institutionalize American legislative and judicial structures across the islands.',
    location: 'Mabitac, Laguna',
    lat: 14.4403,
    lng: 121.4278,
    category: 'war',
    effect: 'pulse',
  },

  // ── 1901–1920 ────────────────────────────────────────────────────────────────
  {
    year: 1901,
    title: 'Capture of Aguinaldo, Balangiga Encounter, and Arrival of the Thomasites',
    description:
      'On March 23, General Emilio Aguinaldo is captured in Palanan, Isabela, by US troops led by General Frederick Funston, who used Macabebe scouts disguised as reinforcements to infiltrate his camp. Aguinaldo subsequently takes an oath of allegiance to the United States, fracturing the remaining conventional leadership of the First Republic. In September, local fighters in Samar surprise and eliminate a company of the US 9th Infantry in the Balangiga Encounter. The US military responds with a brutal scorched-earth campaign led by General Jacob H. Smith, who famously orders his men to transform Samar into a howling wilderness. Concurrently, the USAT Thomas arrives in Manila carrying over five hundred American teachers (the Thomasites), launching a highly centralized public education system that establishes English as the primary medium of instruction to culturally assimilate the population.',
    location: 'Palanan, Isabela',
    lat: 17.0375,
    lng: 122.4286,
    category: 'war',
    effect: 'pulse',
  },
  {
    year: 1902,
    title: 'The Philippine Organic Act, the Sedition Act, and the End of the Insurrection',
    description:
      'The United States Congress passes the Philippine Organic Act (Cooper Act), providing the basic constitutional framework for the colonial administration and paving the way for the creation of a bicameral, native-led legislature. On July 4, President Theodore Roosevelt officially declares the Philippine Insurrection at an end, though widespread guerrilla warfare persists. To suppress ongoing nationalist sentiment, the American civil regime enforces the Sedition Act and the Brigandage Act (Ley de Bandolerismo), which criminalize the public display of the Philippine flag, advocacy for independence, and classify active insurgent leaders — such as Macario Sakay in Southern Luzon — as common bandits subject to the death penalty.',
    location: 'Ayuntamiento de Manila, Intramuros',
    lat: 14.5927,
    lng: 120.9744,
    category: 'politics',
    effect: 'pulse',
  },
  {
    year: 1903,
    title: 'The First Civil Census, the Pensionado Act, and the Reconcentración Campaign',
    description:
      'Governor-General William Howard Taft authorizes the first comprehensive civil census of the archipelago to systematically register population demographics, literacy rates, and economic resources for administrative control. Simultaneously, the colonial government passes the Pensionado Act, institutionalizing a scholarship program that sends bright, young, upper-class Filipino students to elite universities in the United States. These pensionados return to dominate the civil service, permanently binding the professional elite to American institutional values. In the provinces, the military intensifies its reconcentración policy, forcing thousands of rural families into guarded camps to isolate ongoing guerrilla groups.',
    location: 'Manila',
    lat: 14.5995,
    lng: 120.9842,
    category: 'politics',
    effect: null,
  },
  {
    year: 1904,
    title: "The St. Louis World's Fair and the Reconstitution of Friar Lands",
    description:
      'The US government transports over one thousand indigenous Filipinos from various ethno-linguistic groups (most notably the Igorots and Moros) to the St. Louis World\'s Fair in Missouri, displaying them in a massive Philippine Village exhibition deliberately framed to convince the American public that Filipinos are in urgent need of prolonged American tutelage. Concurrently, Taft completes complex diplomatic negotiations with the Vatican, spending over seven million dollars to purchase vast agricultural estates (friar lands) owned by Spanish monastic orders. These lands are structurally broken up and auctioned, primarily benefiting wealthy hacendero families and entrenching a powerful land-owning oligarchy.',
    location: 'Intramuros, Manila',
    lat: 14.5910,
    lng: 120.9754,
    category: 'politics',
    effect: null,
  },
  {
    year: 1905,
    title: 'The Battle of Bud Dajo and the Expansion of the Moro Province',
    description:
      'The US colonial regime intensifies its military efforts to pacify the Muslim south, passing administrative control of the Sulu Archipelago and western Mindanao to the specialized Moro Province under Governor Leonard Wood. Tensions over the imposition of a modern poll tax and disarmament campaigns culminate in the Battle of Bud Dajo on Jolo Island. US troops armed with modern artillery trap over one thousand Tausug men, women, and children inside an extinct volcanic crater, killing nearly all of them in a brutal military action. The massacre temporarily breaks organized resistance in Sulu but deepens historical resentment against Western administrative intrusion.',
    location: 'Bud Dajo, Jolo, Sulu',
    lat: 6.0125,
    lng: 121.0372,
    category: 'war',
    effect: 'pulse',
  },
  {
    year: 1906,
    title: 'The Execution of Macario Sakay and the Reorganization of the Philippine Constabulary',
    description:
      'Macario Sakay, the President of the Republika ng Katagalugan who had kept armed resistance alive in the mountains of Rizal and Laguna, is lured out of hiding after receiving false promises of amnesty from American intermediaries. Upon entering Manila, Sakay and his top generals are immediately arrested, charged with banditry under the Brigandage Act, and sentenced to death by hanging. To maintain internal security and suppress localized peasant movements without deploying the regular US Army, the colonial administration heavily expands the Philippine Constabulary, a native police force officered by Americans that operates as a highly efficient counter-insurgency mechanism.',
    location: 'Bilibid Prison, Manila',
    lat: 14.6053,
    lng: 120.9822,
    category: 'war',
    effect: null,
  },
  {
    year: 1907,
    title: 'Inauguration of the First Philippine Assembly and the Flag Law',
    description:
      'On October 16, the First Philippine Assembly is officially inaugurated at the Grand Opera House in Manila, marking the birth of the first fully elective native legislative body under American sovereignty. Sergio Osmeña is chosen as Speaker of the Assembly, while Manuel L. Quezon becomes the majority floor leader, establishing the dominance of the Partido Nacionalista and its platform of immediate, absolute, and complete independence. In reaction to a surge of nationalist sentiment during the elections, the conservative Philippine Commission passes the Flag Law (Act No. 1696), strictly banning the public display of the Philippine flag and Katipunan symbols under penalty of heavy fines and imprisonment.',
    location: 'Manila Grand Opera House, Santa Cruz, Manila',
    lat: 14.6033,
    lng: 120.9814,
    category: 'politics',
    effect: 'pulse',
  },
  {
    year: 1908,
    title: 'Founding of the University of the Philippines and the El Renacimiento Libel Case',
    description:
      'The Philippine Assembly passes Act No. 1870, founding the University of the Philippines in Manila as the premier institution of higher learning in the colony. Designed on the secular, American land-grant model, UP aims to train a highly skilled, English-speaking professional elite to manage the administrative machinery of the state. Simultaneously, the fiery nationalist newspaper El Renacimiento prints an editorial titled Aves de Rapiña (Birds of Prey), sharply criticizing the rapacious economic corruption of American officials. Secretary of the Interior Dean C. Worcester files a devastating libel suit that bankrupts the paper and strips its editors of their property, demonstrating the boundaries of press freedom under colonial rule.',
    location: 'Calle Hidalgo, Quiapo, Manila',
    lat: 14.5986,
    lng: 120.9856,
    category: 'politics',
    effect: 'pulse',
  },
  {
    year: 1909,
    title: 'The Payne-Aldrich Tariff Act and the Launch of Free Trade',
    description:
      'The United States Congress passes the Payne-Aldrich Tariff Act, establishing a system of qualified free trade between the US and the Philippines. While it places specific quotas on colonial sugar and tobacco exports, it allows American manufactured goods to enter the Philippine market completely duty-free. This structural economic policy binds the Philippine agricultural sector directly to American market demands, triggering an artificial export boom that enriches provincial elites while discouraging industrial diversification. The policy creates a permanent state of economic dependency, making true political autonomy increasingly difficult to achieve without economic collapse.',
    location: 'Port of Manila, Manila',
    lat: 14.5994,
    lng: 120.9678,
    category: 'trade',
    effect: 'pulse',
  },
  {
    year: 1910,
    title: 'The Eruption of Mount Taal and the Bureau of Science',
    description:
      'A catastrophic phreatic eruption of Mount Taal devastates communities across the Batangas and Laguna lake basins, killing over 1,300 people within hours and covering Manila in volcanic ash. The newly established Bureau of Science, a premier scientific research hub in Asia organized by American scientists, mobilizes immediately to study the geological patterns and manage the humanitarian health response. The disaster highlights the expanding administrative capacity of the colonial state to deploy modern empirical science, laboratory medicine, and systematic data gathering to mitigate natural disasters and police public sanitation across peripheral provinces.',
    location: 'Taal Volcano, Batangas',
    lat: 14.0111,
    lng: 120.9978,
    category: 'disaster',
    effect: 'ash',
  },
  {
    year: 1911,
    title: 'The Execution of the First Executive Orders on Corporate Land Sales',
    description:
      'The colonial administration executes a series of administrative adjustments allowing large American syndicates to bypass the conservative land-holding limits originally set by the 1902 Organic Act. Large tracts of the newly acquired San Jose friar estate in Mindoro are sold directly to corporate developers to build modern, steam-powered sugar centrals. This executive shift triggers fierce debates within both the Philippine Assembly and the US Congress regarding the systemic exploitation of public domain lands, highlighting the deep structural tensions between corporate American investment and native political sovereignty.',
    location: 'San Jose, Mindoro',
    lat: 12.3533,
    lng: 121.0667,
    category: 'trade',
    effect: null,
  },
  {
    year: 1912,
    title: "The Arrival of Sun Yat-sen's Emissaries and Kuomintang Branch Organization",
    description:
      'Following the success of the Xinhai Revolution in China, emissaries from Sun Yat-sen\'s newly formed Chinese Republic arrive secretly in Manila to network with the influential Chinese merchant community in Binondo. They successfully establish early overseas branches of the Kuomintang (Nationalist Party of China) to raise financial capital and coordinate political support for the republican movement back home. This development alarms American intelligence officers, who increase surveillance on transnational political networks in Manila, showing that the city remained an open, volatile crossroads for radical pan-Asian political thought.',
    location: 'Binondo, Manila',
    lat: 14.5991,
    lng: 120.9753,
    category: 'politics',
    effect: null,
  },
  {
    year: 1913,
    title: 'The Underwood-Simmons Tariff Act and Arrival of Governor Harrison',
    description:
      'The US Congress passes the Underwood-Simmons Tariff Act, abolishing all remaining quotas on Philippine sugar and tobacco, ushering in an era of absolute, unrestricted free trade. Simultaneously, the newly elected US President Woodrow Wilson appoints Francis Burton Harrison as Governor-General of the Philippines. Harrison arrives with a radical, liberal mandate to accelerate the Filipinization of the colonial government. He swiftly replaces American bureaucrats with native professionals across all departments, transferring operational administrative power to the elite of the Partido Nacionalista and shifting the balance of power toward native self-governance.',
    location: 'Palacio del Gobernador, Intramuros, Manila',
    lat: 14.5919,
    lng: 120.9731,
    category: 'politics',
    effect: 'pulse',
  },
  {
    year: 1914,
    title: 'The Founding of the Iglesia ni Cristo and Outbreak of World War I',
    description:
      'On July 27, Felix Manalo officially registers the Iglesia ni Cristo (Church of Christ) with the colonial government. Operating as an entirely indigenous, highly organized Christian restorationist movement, the church grows rapidly among the urban working class and marginalized agricultural tenants, offering a potent socio-spiritual alternative to both the Catholic establishment and American Protestant missions. Concurrently, the outbreak of World War I in Europe disrupts global maritime shipping lanes, forcing the Philippine economy to diversify its domestic manufacturing capabilities as imports of European industrial machinery suddenly dry up.',
    location: 'Punta, Santa Ana, Manila',
    lat: 14.5878,
    lng: 121.0212,
    category: 'religion',
    effect: null,
  },
  {
    year: 1915,
    title: 'The Kiram-Carpenter Agreement and Dissolution of Sulu Sultanate Temporal Power',
    description:
      'Frank W. Carpenter, the Governor of the newly organized Department of Mindanao and Sulu, signs a landmark diplomatic accord with Sultan Jamalul Kiram II of Sulu. Under the Kiram-Carpenter Agreement, the Sultan officially relinquishes all remaining claims to temporal and political sovereignty over the Sulu Archipelago, recognizing the absolute administrative authority of the United States. In return, the colonial state guarantees the Sultan\'s status as the spiritual head of the Islamic faith in Sulu, alongside a permanent financial pension and land grants. This administrative victory integrates the Muslim south directly into the centralized legislative framework of the Philippine government.',
    location: 'Zamboanga City, Mindanao',
    lat: 6.9214,
    lng: 122.0739,
    category: 'politics',
    effect: 'pulse',
  },
  {
    year: 1916,
    title: 'The Jones Act and the Creation of the Bicameral Philippine Legislature',
    description:
      'The United States Congress passes the landmark Philippine Autonomy Act (Jones Law), which explicitly pledges in its preamble to grant independent statehood to the Philippines as soon as a stable government is established. The law replaces the old, American-dominated Philippine Commission with an all-Filipino, bicameral legislature consisting of an elected Senate and a House of Representatives. Manuel L. Quezon is swiftly elected Senate President, while Sergio Osmeña retains his position as Speaker of the House. This constitutional transformation places almost all domestic legislative power directly into the hands of the Partido Nacionalista leadership.',
    location: 'Ayuntamiento de Manila, Intramuros',
    lat: 14.5927,
    lng: 120.9744,
    category: 'politics',
    effect: 'pulse',
  },
  {
    year: 1917,
    title: 'The Mobilization of the Philippine National Guard for World War I',
    description:
      'Following the entry of the United States into World War I, the Philippine Legislature authorizes the creation of the Philippine National Guard to assist the American war effort. Under the enthusiastic leadership of Manuel L. Quezon, over twenty-five thousand native volunteers are quickly mobilized and trained at Camp Tomas Claudio in Rizal. While the division is never deployed to the battlefields of Europe before the armistice, the mobilization effort functions as an important tool for nation-building, demonstrating to the US Congress that the Philippines possesses the military capacity and civic loyalty required to defend a sovereign democratic state.',
    location: 'Camp Tomas Claudio, Pasay',
    lat: 14.5494,
    lng: 120.9983,
    category: 'war',
    effect: null,
  },
  {
    year: 1918,
    title: 'The Spanish Influenza Epidemic and Creation of the Council of State',
    description:
      'The catastrophic global Spanish Influenza pandemic sweeps through the Philippine islands, rapidly infecting nearly forty percent of the population and killing over eighty-five thousand citizens. The public health crisis exposes severe shortages in medical personnel and rural clinics. Concurrently, Governor-General Harrison issues an executive order creating the Council of State — comprising the Governor-General, the heads of executive departments, the Senate President, and the Speaker of the House — which functions as a shadow cabinet that effectively coordinates state policy, maximizing native executive authority over colonial governance.',
    location: 'Ayuntamiento de Manila, Intramuros',
    lat: 14.5927,
    lng: 120.9744,
    category: 'disaster',
    effect: 'pulse',
  },
  {
    year: 1919,
    title: 'The First Independence Mission to Washington and the Philippine National Bank Crisis',
    description:
      'Manuel L. Quezon leads the first official, bipartisan Philippine Independence Mission to Washington, D.C., formally presenting a detailed brief to President Wilson and Congress asserting that a stable government now exists under the criteria of the Jones Act. Although the mission fails to secure an immediate independence bill due to the post-war conservative shift in American politics, it cements Quezon\'s status as the chief diplomat of the nation. Simultaneously, the Philippine National Bank experiences a severe liquidity crisis due to reckless over-extension of credit to political allies in the sugar industry, highlighting the structural vulnerabilities of early economic self-governance.',
    location: 'Escolta, Manila',
    lat: 14.5972,
    lng: 120.9772,
    category: 'politics',
    effect: 'pulse',
  },
  {
    year: 1920,
    title: 'Manila Railroad Nationalization and the Rise of Urban Labor Unions',
    description:
      'The Philippine Legislature completes the full financial buy-out and nationalization of the British-owned Manila Railroad Company, placing the vital northern and southern rail infrastructure under complete state ownership. Concurrently, Manila experiences an explosive surge in labor activism, culminating in organized strikes led by the Congreso Obrera de Filipinas (COF). Thousands of urban workers across the transport, printing, and tobacco industries march through the streets demanding standardized eight-hour workdays, a minimum wage, and safe working conditions. This marks the entry of a class-conscious urban proletariat into the political sphere, challenging the conservative dominance of the landlord-politicians.',
    location: 'Tutuban Station, Tondo, Manila',
    lat: 14.6083,
    lng: 120.9739,
    category: 'trade',
    effect: 'pulse',
  },

  // ── 1986 ─────────────────────────────────────────────────────────────────────
  {
    year: 1986,
    title: 'EDSA People Power Revolution',
    description:
      'Millions of Filipinos gather peacefully along Epifanio de los Santos Avenue in Metro Manila, forcing Ferdinand Marcos to flee after 21 years of authoritarian rule and restoring democratic governance.',
    lat: 14.6392,
    lng: 121.0336,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 1991 ─────────────────────────────────────────────────────────────────────
  {
    year: 1991,
    title: 'Mount Pinatubo Eruption',
    description:
      'The second-largest volcanic eruption of the 20th century devastates Central Luzon. Towering ash columns and subsequent lahars displace hundreds of thousands and permanently reshape the landscape of Pampanga and Zambales.',
    lat: 15.1429,
    lng: 120.3496,
    category: 'disaster',
    effect: 'ash',
  },
]

export default events
