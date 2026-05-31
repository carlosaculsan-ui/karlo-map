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

  // ── 1921 ─────────────────────────────────────────────────────────────────────
  {
    year: 1921,
    title: 'The Arrival of the Wood-Forbes Mission and the Reversal of Harrison\'s Policies',
    description:
      'Following the election of Republican US President Warren G. Harding, a special fact-finding commission led by former Governor-General William Cameron Forbes and Major General Leonard Wood arrives in Manila. The Wood-Forbes Report concludes that the rapid \'Filipinization\' under the previous Harrison administration had left the colony administratively inefficient, financially unstable, and unready for independent statehood. Wood is subsequently appointed Governor-General and immediately institutes a rigid, hands-on administration. He aggressively vetoes local legislative acts, cracks down on fiscal mismanagement at the Philippine National Bank, and seeks to restore strict American executive authority, directly clashing with the entrenched leaders of the Partido Nacionalista.',
    location: 'Palacio del Gobernador, Intramuros, Manila',
    lat: 14.5919,
    lng: 120.9731,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 1922 ─────────────────────────────────────────────────────────────────────
  {
    year: 1922,
    title: 'The Split within the Partido Nacionalista and the Colectivista Ascendancy',
    description:
      'Deep tactical and personal rivalries within the dominant Partido Nacionalista culminate in an open political schism. Manuel L. Quezon rebels against the highly centralized, \'unipersonal\' leadership style of Speaker Sergio Osmeña, launching the Partido Nacionalista Colectivista. Quezon champions a platform of collective leadership and democratic consensus, utilizing the split to build a new power base among younger provincial elites. Following a bitter campaign during the June legislative elections, Quezon\'s Colectivistas achieve a decisive victory. Quezon assumes the Senate Presidency with absolute control over the legislative agenda, effectively eclipsing Osmeña as the undisputed paramount leader of the Philippine independence movement.',
    location: 'Ayuntamiento de Manila, Intramuros, Manila',
    lat: 14.5927,
    lng: 120.9744,
    category: 'politics',
    effect: null,
  },

  // ── 1923 ─────────────────────────────────────────────────────────────────────
  {
    year: 1923,
    title: 'The Cabinet Crisis of 1923 and the Conley Affair',
    description:
      'Political tensions between native leaders and Governor-General Leonard Wood explode into a full constitutional crisis over the case of Ray Conley, an American detective in the Manila Police Department suspended for alleged corruption. Wood bypasses local administrative channels to reinstate Conley, prompting Secretary of the Interior José P. Laurel to resign in protest. On July 17, all Filipino members of the Cabinet and the Council of State, led by Senate President Quezon and Speaker Roxas, tender a dramatic collective resignation. This coordinated political strike is designed to paralyze Wood\'s administration and force the US government to address the boundaries of colonial executive interference.',
    location: 'Malacañang Palace, Manila',
    lat: 14.5942,
    lng: 120.9944,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 1924 ─────────────────────────────────────────────────────────────────────
  {
    year: 1924,
    title: 'The Colorum Uprising in Surigao and the Rise of Millenarian Resistance',
    description:
      'An armed peasant rebellion erupts in Socorro, Surigao, led by the Sacdalista and Colorum secret societies under the spiritual leadership of Felix Bernales. Composed primarily of impoverished, disenfranchised rural tenants, these millenarian movements blend Catholic mysticism, anti-colonial zeal, and radical demands for immediate land redistribution. Armed with traditional weapons and an absolute belief in spiritual invulnerability, the rebels successfully ambush local Philippine Constabulary detachments. The colonial state responds with overwhelming military force, deploying naval gunboats and infantry units to crush the uprising, highlighting the severe agrarian distress festering beneath the surface of elite politics.',
    location: 'Socorro, Bucas Grande Island, Surigao del Norte',
    lat: 9.6178,
    lng: 125.9556,
    category: 'revolution',
    effect: 'pulse',
  },

  // ── 1925 ─────────────────────────────────────────────────────────────────────
  {
    year: 1925,
    title: 'The Intramuros Strike and the Rapid Expansion of the Bolshevik Movement',
    description:
      'Manila\'s industrial landscape faces deep polarization as Crisanto Evangelista leads a massive, coordinated strike of the Union de Impresores de Filipinas (Printers\' Union), effectively paralyzing the capital\'s printing presses and newspaper publications. Simultaneously, radical labor organizers deepen their ideological ties with international communist networks, sending delegates to the Pan-Pacific Labor Conference in Canton. This Marxist shift culminates in the restructuring of the Congreso Obrera de Filipinas (COF) along class-conscious, anti-imperialist lines, laying the structural and organizational groundwork for the formal entry of scientific socialism into the Philippine political sphere.',
    location: 'Intramuros, Manila',
    lat: 14.5910,
    lng: 120.9754,
    category: 'trade',
    effect: null,
  },

  // ── 1926 ─────────────────────────────────────────────────────────────────────
  {
    year: 1926,
    title: 'The Supreme National Council and the Push for a Plebiscite',
    description:
      'In an effort to rebuild a unified front against the unyielding administration of Governor-General Wood, Manuel L. Quezon forms the Supreme National Council. This coalition successfully unites all major political parties, agricultural associations, and labor groups under a singular executive body tasked with centralizing the campaign for independence. The Council drafts bills demanding a nationwide plebiscite on immediate independence to counter American assertions that the population is deeply divided on the issue. Wood immediately utilizes his executive powers to veto the plebiscite measure, prompting native politicians to launch an aggressive fundraising campaign to send regular lobbying delegations directly to Washington.',
    location: 'Ayuntamiento de Manila, Intramuros, Manila',
    lat: 14.5927,
    lng: 120.9744,
    category: 'politics',
    effect: null,
  },

  // ── 1927 ─────────────────────────────────────────────────────────────────────
  {
    year: 1927,
    title: 'The Death of Governor-General Wood and the Appointment of Henry Stimson',
    description:
      'Governor-General Leonard Wood dies suddenly in Boston during a medical visit, bringing an abrupt end to a tumultuous six-year administration defined by intense executive-legislative deadlock. The US government appoints Henry L. Stimson as his successor. Stimson adopts a radically different, highly diplomatic approach; he restores the advisory capacity of the Council of State, regularizes informal consultations with Quezon and Osmeña, and abandons the frequent use of the executive veto. This strategic shift pacifies the native political leadership and restores a smoothly functioning administrative relationship, allowing elite politicians to refocus on economic policy.',
    location: 'Malacañang Palace, Manila',
    lat: 14.5942,
    lng: 120.9944,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 1928 ─────────────────────────────────────────────────────────────────────
  {
    year: 1928,
    title: 'The Expansion of the Sugar Central System and the Global Trade Peak',
    description:
      'The Philippine sugar industry achieves unprecedented production volumes due to massive capital investments in highly automated, modern corporate mills known as \'centrals,\' primarily concentrated in Negros Occidental and Pampanga. Financed largely by PNB loans and advanced American machinery, these centrals rapidly process vast fields of cane grown by elite hacenderos. Because the Payne-Aldrich and Underwood-Simmons acts grant these products unrestricted, duty-free entry into the highly lucrative US market, the colony\'s economic elite amasses vast fortunes, further consolidating their absolute control over both provincial landholdings and national legislative policy.',
    location: 'Silay, Negros Occidental',
    lat: 10.7986,
    lng: 122.9756,
    category: 'trade',
    effect: null,
  },

  // ── 1929 ─────────────────────────────────────────────────────────────────────
  {
    year: 1929,
    title: 'The Inception of the Great Depression and the Collapse of Commodity Prices',
    description:
      'The catastrophic Wall Street crash of October 1929 reverberates across the globe, severely damaging the export-dependent economy of the Philippines. International demand for primary colonial exports—such as abaca, coconut oil, tobacco, and timber—collapses within months, triggering widespread corporate bankruptcies and massive wage cuts across provincial plantations. While the elite sugar sector temporarily survives due to protective US tariff walls, the severe economic contraction plunges hundreds of thousands of rural agricultural laborers into extreme poverty, accelerating social radicalization and setting off intense tenant unrest across the agricultural heartland of Central Luzon.',
    location: 'Port of Manila, Manila',
    lat: 14.5994,
    lng: 120.9678,
    category: 'trade',
    effect: 'pulse',
  },

  // ── 1930 ─────────────────────────────────────────────────────────────────────
  {
    year: 1930,
    title: 'The Formal Founding of the Partido Comunista de las Islas Filipinas (PKP)',
    description:
      'On November 7, the anniversary of the Bolshevik Revolution, veteran labor leader Crisanto Evangelista officially announces the founding of the Partido Comunista de las Islas Filipinas (PKP) during a massive rally of over sixty thousand workers at the Plaza Moriones in Tondo. The PKP adopts a revolutionary Marxist-Leninist platform, openly calling for the immediate overthrow of American imperialism, the liquidation of the landlord class, and the establishment of a sovereign Soviet-style workers\' republic. The rapid mobilization of the urban working class alarms both the American colonial administration and the native landowning elite, who immediately unleash state security forces to monitor communist cadres.',
    location: 'Plaza Moriones, Tondo, Manila',
    lat: 14.6097,
    lng: 120.9631,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 1931 ─────────────────────────────────────────────────────────────────────
  {
    year: 1931,
    title: 'The Tayug Uprising and the Judicial Outlawing of the PKP',
    description:
      'On January 10, hundreds of impoverished, armed peasants belonging to a millenarian society led by Pedro Calosa attack and seize the municipal hall of Tayug, Pangasinan. The rebels systematically burn all land titles, tax records, and debt contracts stored in the municipal archives, declaring a war against landlord tyranny before being suppressed by the Philippine Constabulary. In response to this rising tide of rural radicalism, the Court of First Instance moves decisively against urban agitators, declaring the PKP an illegal organization. Crisanto Evangelista and dozens of top communist cadres are arrested and sentenced to prison for sedition, forcing the Marxist movement deep underground.',
    location: 'Tayug, Pangasinan',
    lat: 16.0283,
    lng: 120.7456,
    category: 'revolution',
    effect: 'pulse',
  },

  // ── 1932 ─────────────────────────────────────────────────────────────────────
  {
    year: 1932,
    title: 'The Departure of the OSROX Mission and the Rise of the Sakdal Movement',
    description:
      'As the Great Depression deepens in the United States, American domestic farm groups lobby aggressively to grant independence to the Philippines in order to erect tariff barriers against cheap colonial imports. Seizing this opportunity, Sergio Osmeña and Manuel Roxas lead the OSROX Mission to Washington to secure an autonomy bill. Concurrently, charismatic writer Benigno Ramos officially launches the Sakdal movement in Luzon. Publishing a fiery Tagalog newspaper, the Sakdalistas fiercely attack the elite leadership of the Nacionalista Party, accusing Quezon and Osmeña of operating as colonial puppets who are deliberately delaying true independence while enriching their own class.',
    location: 'Manila',
    lat: 14.5995,
    lng: 120.9842,
    category: 'politics',
    effect: null,
  },

  // ── 1933 ─────────────────────────────────────────────────────────────────────
  {
    year: 1933,
    title: 'The Hare-Hawes-Cutting Act and the Historic Quezon-Osmeña Feud',
    description:
      'The US Congress passes the Hare-Hawes-Cutting Act over President Hoover\'s veto, promising Philippine independence after a ten-year transition period but retaining extensive US military and naval bases. In Manila, a titanic political war erupts between the \'Pros\' led by Osmeña and Roxas (who support the bill) and the \'Antis\' led by Manuel L. Quezon (who fiercely opposes it, arguing that the retention of US military bases violates true national sovereignty). Quezon successfully utilizes his absolute control over the Philippine Legislature to reject the bill, severely damaging Osmeña\'s political standing and setting off a high-stakes struggle for complete dominance over the decolonization process.',
    location: 'Legislative Building, Manila',
    lat: 14.5869,
    lng: 120.9812,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 1934 ─────────────────────────────────────────────────────────────────────
  {
    year: 1934,
    title: 'The Tydings-McDuffie Act and the Election of the Constitutional Convention',
    description:
      'Manuel L. Quezon travels to Washington and maneuvers brilliantly to secure the passage of the Tydings-McDuffie Act. This new decolonization law is nearly identical to the rejected Hare-Hawes-Cutting bill, but it alters the clause on military installations, promising the total withdrawal of US land bases upon independence. The Philippine Legislature swiftly accepts the act. In July, voters across the islands elect a distinguished group of 202 delegates to a Constitutional Convention tasked with drafting the organic law for the upcoming transition state. Preeminent jurist Claro M. Recto is elected President of the convention, guiding the body toward creating a powerful, highly centralized executive branch.',
    location: 'Legislative Building, Manila',
    lat: 14.5869,
    lng: 120.9812,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 1935 ─────────────────────────────────────────────────────────────────────
  {
    year: 1935,
    title: 'The Sakdal Uprising and the Inauguration of the Philippine Commonwealth',
    description:
      'On May 2, believing that the upcoming Commonwealth is an elite conspiracy to lock in economic inequality, the Sakdal movement launches a coordinated, armed uprising across Laguna, Bulacan, and Cavite. Armed peasants seize municipal buildings, pulling down American and Commonwealth flags. The Philippine Constabulary crushes the rebellion within forty-eight hours, killing over fifty Sakdalistas. Months later, on November 15, following a landslide election victory that reunited the Nacionalista factions, the Philippine Commonwealth is officially inaugurated. Manuel L. Quezon takes the oath of office as President alongside Vice President Sergio Osmeña, launching a semi-sovereign transition government before a crowd of a quarter-million citizens.',
    location: 'Legislative Building Grounds, Manila',
    lat: 14.5869,
    lng: 120.9812,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 1936 ─────────────────────────────────────────────────────────────────────
  {
    year: 1936,
    title: 'Commonwealth Act No. 1 and the Creation of the Philippine Army under MacArthur',
    description:
      'President Manuel L. Quezon signs his very first legislative measure, Commonwealth Act No. 1, also known as the National Defense Act. This landmark law establishes the structural foundation for a sovereign military infrastructure. Quezon recruits retired US Army Chief of Staff General Douglas MacArthur, appointing him Military Advisor to the Commonwealth with the rank of Field Marshal. MacArthur drafts a comprehensive defense master plan centered on the creation of a small professional core and the rapid training of a massive citizen army reserve through biannual regional conscription cohorts, aiming to make the archipelago completely cost-prohibitive to any foreign invader by 1946.',
    location: 'No. 1 Victoria Street, Intramuros, Manila',
    lat: 14.5905,
    lng: 120.9750,
    category: 'politics',
    effect: null,
  },

  // ── 1937 ─────────────────────────────────────────────────────────────────────
  {
    year: 1937,
    title: 'The Plebiscite on Women\'s Suffrage and the Proclamation of the National Language',
    description:
      'On April 30, a nationwide plebiscite on women\'s suffrage delivers a landslide victory, with over 447,000 women voting in favor of expanding political rights, easily surpassing the constitutional threshold of 300,000 affirmative votes. This historic reform grants Filipinas full voting rights and eligibility to run for public office. Later that year, on December 30, acting upon the systematic recommendations of the Institute of National Language, President Quezon issues Executive Order No. 134, officially proclaiming a national language based entirely on Tagalog. This policy aims to build a cohesive national identity, but it triggers lingering cultural resentment among non-Tagalog ethno-linguistic majorities in the Visayas and Mindanao.',
    location: 'Malacañang Palace, Manila',
    lat: 14.5942,
    lng: 120.9944,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 1938 ─────────────────────────────────────────────────────────────────────
  {
    year: 1938,
    title: 'The Social Justice Program and the Merger of the PKP and Socialist Parties',
    description:
      'Faced with deepening agrarian unrest and frequent strikes by tenant organizations like the Aguman ding Maldang Talapagobra (AMT) in Central Luzon, President Quezon launches his ambitious \'Social Justice\' program. The state passes laws setting a minimum wage and creating arbitration courts, but these measures are consistently sabotaged by powerful landlord blocs in the National Assembly. Recognizing the limitations of piecemeal reforms, Pedro Abad Santos\'s Socialist Party officially merges with Crisanto Evangelista\'s recently pardoned PKP. This powerful alliance unites urban industrial labor with millions of organized rural tenants, creating a potent, highly disciplined left-wing front.',
    location: 'San Fernando, Pampanga',
    lat: 15.0286,
    lng: 120.6898,
    category: 'politics',
    effect: null,
  },

  // ── 1939 ─────────────────────────────────────────────────────────────────────
  {
    year: 1939,
    title: 'The Outbreak of War in Europe and the Establishment of the Department of National Defense',
    description:
      'As Nazi Germany\'s invasion of Poland triggers the outbreak of World War II in Europe, the Commonwealth government moves to secure its administrative security apparatus. The National Assembly passes legislation creating the Department of National Defense (DND), centralizing operational control over the Philippine Army, the Constabulary, and emergency civil defense systems under a single cabinet secretary. President Quezon assumes expansive emergency executive powers to control commodity prices, prevent hoarding, and secure strategic transport infrastructure, as the global threat environment grows increasingly volatile and unpredictable.',
    location: 'Manila',
    lat: 14.5995,
    lng: 120.9842,
    category: 'politics',
    effect: null,
  },

  // ── 1940 ─────────────────────────────────────────────────────────────────────
  {
    year: 1940,
    title: 'The Constitutional Amendments on Presidential Terms and Re-establishment of the Senate',
    description:
      'The Commonwealth government executes a series of sweeping constitutional amendments that fundamentally reshape the institutional architecture of the state. The unicameral National Assembly is abolished and replaced with a bicameral Philippine Congress, restoring the Senate elected at-large. Crucially, the single six-year presidential term is amended to a four-year term with eligibility for a single re-election, a structural modification designed to allow Manuel L. Quezon to maintain executive power beyond 1941. These changes consolidate political authority within the Nacionalista party machine, drawing sharp criticism from civil libertarians who fear a creeping trend toward authoritarian governance.',
    location: 'Legislative Building, Manila',
    lat: 14.5869,
    lng: 120.9812,
    category: 'politics',
    effect: null,
  },

  // ── 1941 ─────────────────────────────────────────────────────────────────────
  {
    year: 1941,
    title: 'The Mobilization of USAFFE, the Pearl Harbor Attack, and the Invasion of Luzon',
    description:
      'As war with Imperial Japan looms, US President Franklin D. Roosevelt issues a military order mobilizing all forces of the Philippine Commonwealth into the service of the United States, creating the United States Army Forces in the Far East (USAFFE) under General Douglas MacArthur. On December 8, just hours after the strike on Pearl Harbor, Japanese bombers destroy American air assets at Clark Field. Days later, General Masaharu Homma\'s 14th Army lands massive amphibious forces at Lingayen Gulf. Caught off-balance, MacArthur abandons his coastal defense plan and invokes War Plan Orange-3, ordering a rapid retreat toward the Bataan Peninsula. On December 26, MacArthur declares Manila an Open City to save it from destruction, but Japanese forces occupy the capital on January 2, 1942, as Quezon and the Commonwealth leadership flee to Corregidor Island.',
    location: 'Lingayen Gulf, Pangasinan',
    lat: 16.2000,
    lng: 120.2500,
    category: 'war',
    effect: 'pulse',
  },

  // ── 1942 ─────────────────────────────────────────────────────────────────────
  {
    year: 1942,
    title: 'The Fall of Bataan, the Death March, Corregidor\'s Surrender, and Rise of the Hukbalahap',
    description:
      'For three months, starving and disease-ridden USAFFE forces wage a heroic defense on the Bataan Peninsula. On April 9, Major General Edward P. King Jr. surrenders over seventy-five thousand troops, triggering the infamous Bataan Death March where thousands of Filipino and American prisoners are brutally marched eighty miles to Camp O\'Donnell under torturous conditions. On May 6, Lieutenant General Jonathan Wainwright surrenders the island fortress of Corregidor, completing the Japanese conquest of the islands. President Quezon escapes via submarine to establish a government-in-exile in Washington. Meanwhile, in the swamps of Central Luzon, radical peasant leaders led by Luis Taruc found the Hukbalahap (People\'s Army Against Japan), launching a highly effective guerrilla campaign that targets both Japanese occupiers and collaborating landlords.',
    location: 'Mariveles, Bataan',
    lat: 14.4333,
    lng: 120.4833,
    category: 'war',
    effect: 'pulse',
  },

  // ── 1943 ─────────────────────────────────────────────────────────────────────
  {
    year: 1943,
    title: 'Inauguration of the Japanese-Sponsored Second Philippine Republic',
    description:
      'Seeking to co-opt local nationalist sentiments and secure regional administrative stability, the Japanese Imperial Army commands the creation of a puppet government. On October 14, the Second Philippine Republic is officially inaugurated under a new constitution drafted by the KALIBAPI party. José P. Laurel is inaugurated as President. Laurel performs a high-stakes political balancing act; while he publicly praises pan-Asian solidarity to pacify the Japanese military administration, he steadfastly refuses to enforce a military draft of Filipino youth to fight against the Allies. The puppet state suffers from hyperinflation, severe food shortages, and complete lack of popular legitimacy, as underground guerrilla networks expand across every province.',
    location: 'Legislative Building, Manila',
    lat: 14.5869,
    lng: 120.9812,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 1944 ─────────────────────────────────────────────────────────────────────
  {
    year: 1944,
    title: 'The Death of Quezon, the Battle of Leyte Gulf, and MacArthur\'s Return',
    description:
      'On August 1, Commonwealth President Manuel L. Quezon dies of tuberculosis in Saranac Lake, New York; Sergio Osmeña immediately assumes the wartime presidency. Months later, the Allied counter-offensive reaches the archipelago. On October 20, General Douglas MacArthur, wading through the surf at Red Beach alongside President Osmeña, fulfills his famous vow, declaring, \'I have returned!\' The Japanese navy moves to intercept the landings, triggering the Battle of Leyte Gulf—the largest naval battle in modern history—which decisively shatters the Imperial Japanese Navy. US and Filipino guerrilla forces launch an intense land campaign to liberate the Visayas, cutting off Japanese lines of communication.',
    location: 'Red Beach, Palo, Leyte',
    lat: 11.1683,
    lng: 125.0128,
    category: 'war',
    effect: 'pulse',
  },

  // ── 1945 ─────────────────────────────────────────────────────────────────────
  {
    year: 1945,
    title: 'The Devastation of Manila, the Liberation Campaign, and the Surrender of Yamashita',
    description:
      'The liberation of the capital turns into an apocalyptic catastrophe. Rear Admiral Sanji Iwabuchi ignores orders to evacuate, locking twenty thousand Japanese sailors inside Manila. During the month-long Battle of Manila, trapped Japanese forces execute the Manila Massacre, slaughtering over one hundred thousand innocent civilians. Heavy Allied artillery completely destroys Intramuros and the capital\'s historic core, making Manila the second most devastated Allied capital of World War II after Warsaw. On February 27, MacArthur turns over the civilian administration to President Osmeña. In the Cordillera mountains, General Tomoyuki Yamashita wages a fierce rearguard defense until officially surrendering in Baguio on September 3, bringing an end to the brutal occupation.',
    location: 'Intramuros, Manila',
    lat: 14.5910,
    lng: 120.9754,
    category: 'war',
    effect: 'pulse',
  },

  // ── 1946 ─────────────────────────────────────────────────────────────────────
  {
    year: 1946,
    title: 'Proclamation of Sovereign Independence and the Election of Manuel Roxas',
    description:
      'In April, Manuel Roxas wins a bitter presidential election, defeating incumbent Sergio Osmeña and splitting the Nacionalistas to form the Liberal Party. On July 4, precisely as mandated by the Tydings-McDuffie Act, the United States officially withdraws its sovereignty, and the Third Philippine Republic is proclaimed. Roxas takes the oath of office as the first President of the fully sovereign nation. The young republic faces monumental challenges: a completely devastated capital, a bankrupted treasury, and a growing leftist insurgency in Central Luzon, forcing the government to rely heavily on American financial reconstruction packages that come with strict strings attached.',
    location: 'Grandstand, Rizal Park, Manila',
    lat: 14.5825,
    lng: 120.9742,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 1947 ─────────────────────────────────────────────────────────────────────
  {
    year: 1947,
    title: 'The Bell Trade Act, the Parity Rights Amendment, and the Military Bases Agreement',
    description:
      'To secure 620 million dollars in war rehabilitation funds from the US, President Roxas forces through the deeply controversial Bell Trade Act, which requires amending the Philippine Constitution to grant American citizens equal economic rights (\'parity rights\') to exploit local natural resources and public utilities. Simultaneously, Roxas signs the US-Philippines Military Bases Agreement, granting the United States ninety-nine-year leases over twenty-three strategic military installations, including Subic Naval Base and Clark Air Base. These agreements trigger fierce condemnation from nationalists like Claro M. Recto, who argue that the economic and military pacts reduce the nation\'s independence to a neo-colonial facade.',
    location: 'Manila',
    lat: 14.5995,
    lng: 120.9842,
    category: 'trade',
    effect: 'pulse',
  },

  // ── 1948 ─────────────────────────────────────────────────────────────────────
  {
    year: 1948,
    title: 'The Death of Roxas, the Quirino Succession, and the Amnesty Failure with the Huks',
    description:
      'On April 15, President Manuel Roxas suffers a fatal heart attack after delivering a speech at Clark Air Base; Vice President Elpidio Quirino immediately assumes the presidency. Facing an intensifying armed insurgency by the Hukbalahap, Quirino attempts a policy of pacification, declaring a general amnesty and allowing Huk leader Luis Taruc to take his elected seat in Congress. However, negotiations collapse within weeks over mutual distrust regarding the terms of disarmament and the government\'s refusal to implement genuine land reform. Taruc returns to the hills, officially renaming the movement the Hukbong Mapagpalaya ng Bayan (HMB) and launching an all-out revolutionary war to overthrow the state.',
    location: 'Clark Air Base, Pampanga',
    lat: 15.1867,
    lng: 120.5600,
    category: 'politics',
    effect: null,
  },

  // ── 1949 ─────────────────────────────────────────────────────────────────────
  {
    year: 1949,
    title: 'The Fraudulent 1949 Elections and the Peak of the Huk Rebellion',
    description:
      'Elpidio Quirino wins re-election against Jose P. Laurel in what is widely condemned as the most corrupt, violent, and fraudulent election in Philippine democratic history, defined by rampant ballot-snatching and the infamous phrase \'even the birds and the trees voted\' in pro-Quirino provinces. The total loss of public faith in democratic institutions causes recruitment for the Huk insurgency to skyrocket. Armed Huk regiments expand their operations across Luzon, successfully raiding provincial capitals, threatening the outskirts of Manila, and prompting the US Joint Military Advisory Group (JUSMAG) to urgently intervene with massive shipments of military hardware.',
    location: 'Manila',
    lat: 14.5995,
    lng: 120.9842,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 1950 ─────────────────────────────────────────────────────────────────────
  {
    year: 1950,
    title: 'The Appointment of Magsaysay, the Politburo Arrests, and Deployment to the Korean War',
    description:
      'Faced with total state collapse, President Quirino appoints charismatic congressman Ramon Magsaysay as Secretary of National Defense. Magsaysay aggressively restructures the military, cracks down on battlefield corruption, and utilizes advanced intelligence assets to execute a brilliant midnight raid in Manila, arresting the entire urban Politburo of the PKP, including Chairman Jose Lava. This decapitation strike paralyzes the communist insurgency. Simultaneously, to demonstrate its commitment to the global anti-communist alliance, the Philippine government passes the Foreign Assistance Act, deploying the Philippine Expeditionary Forces to Korea (PEFTOK) to fight alongside UN forces, securing its status as a vital strategic partner in the developing Cold War.',
    location: 'Tondo, Manila',
    lat: 14.6111,
    lng: 120.9697,
    category: 'war',
    effect: 'pulse',
  },

  // ── 1951 ─────────────────────────────────────────────────────────────────────
  {
    year: 1951,
    title: 'The Battle of Yultong and the Signing of the US-Philippines Mutual Defense Treaty',
    description:
      'In April, the 10th Battalion Combat Team (BCT) of the Philippine Expeditionary Forces to Korea (PEFTOK) wins a legendary defensive victory against overwhelming Chinese forces at the Battle of Yultong, cementing the combat reputation of the young republic\'s military. Back in Washington, on August 30, representatives of both nations officially sign the landmark United States-Philippines Mutual Defense Treaty (MDT). The treaty establishes an institutional framework where both nations pledge to support each other in the event of an external armed attack in the Pacific, firmly anchoring Philippine foreign policy and national security within the geopolitical framework of the Western bloc during the Cold War.',
    location: 'Washington, D.C.',
    lat: 38.8951,
    lng: -77.0364,
    category: 'war',
    effect: 'pulse',
  },

  // ── 1952 ─────────────────────────────────────────────────────────────────────
  {
    year: 1952,
    title: 'The Enactment of the Magna Carta of Labor and the Expansion of JUSMAG Counter-Insurgency',
    description:
      'To address deep-seated social grievances and counter Marxist propaganda, the Philippine Congress passes Republic Act No. 875, popularly known as the \'Magna Carta of Labor,\' which legally protects the rights of workers to form independent unions and engage in collective bargaining. Concurrently, Defense Secretary Ramon Magsaysay, working closely with Colonel Edward Lansdale of the Joint US Military Advisory Group (JUSMAG), heavily expands psychological warfare and civic action operations. By combining aggressive military tracking with the Economic Development Corps (EDCOR)—which offers cleared land to surrendered rebels—the government successfully breaks the back of the Huk movement in Central Luzon.',
    location: 'Camp Murphy, Quezon City',
    lat: 14.6186,
    lng: 121.0633,
    category: 'politics',
    effect: null,
  },

  // ── 1953 ─────────────────────────────────────────────────────────────────────
  {
    year: 1953,
    title: 'The Landslide Election of Ramon Magsaysay and the Birth of Populist Politics',
    description:
      'Ramon Magsaysay resigns from the Quirino cabinet, switches political parties to head the Nacionalista ticket, and launches a revolutionary, American-style populist presidential campaign. Breaking tradition by visiting remote rural barrios, kissing babies, and wearing the traditional native barong tagalog, Magsaysay captures the popular imagination. Supported by the National Movement for Free Elections (NAMFREL) to ensure a clean vote, Magsaysay wins a historic landslide victory against Elpidio Quirino. His inauguration marks a profound shift in national politics, breaking the aristocratic aloofness of the old elite and establishing the rural peasant class as a crucial electoral force.',
    location: 'Independence Grandstand, Rizal Park, Manila',
    lat: 14.5825,
    lng: 120.9742,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 1954 ─────────────────────────────────────────────────────────────────────
  {
    year: 1954,
    title: 'The Surrender of Luis Taruc and the Signing of the SEATO Treaty',
    description:
      'On May 17, following intensive secret negotiations brokered by young presidential emissary Benigno \'Ninoy\' Aquino Jr., paramount Huk leader Luis Taruc officially surrenders to the government, effectively bringing an end to the decade-long communist agrarian rebellion in Luzon. Months later, in September, President Magsaysay hosts an international diplomatic summit that culminates in the signing of the Manila Pact, establishing the Southeast Asia Treaty Organization (SEATO). Headquartered in Bangkok with the Philippines as a foundational member, this mutual defense alliance is explicitly designed to contain the expansion of communism across the region.',
    location: 'Manila',
    lat: 14.5995,
    lng: 120.9842,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 1955 ─────────────────────────────────────────────────────────────────────
  {
    year: 1955,
    title: 'The Laurel-Langley Agreement and the Enactment of the Land Reform Act',
    description:
      'Senator José P. Laurel successfully concludes complex economic negotiations in Washington, signing the Laurel-Langley Agreement. This historic pact modifies the restrictive 1946 Bell Trade Act by accelerating the application of tariffs on US goods entering the Philippines while slowing down tariffs on Philippine exports to the US, giving the young republic breathing room to build up its domestic industries. Concurrently, President Magsaysay pressures a reluctant Congress to pass Republic Act No. 1400 (Land Reform Act), creating the Land Tenure Administration to expropriate large landed estates for redistribution to tenant farmers, though landlord opposition reduces its overall implementation.',
    location: 'Legislative Building, Manila',
    lat: 14.5869,
    lng: 120.9812,
    category: 'trade',
    effect: 'pulse',
  },

  // ── 1956 ─────────────────────────────────────────────────────────────────────
  {
    year: 1956,
    title: 'The Passage of the Rizal Law and the Signing of the San Francisco Reparations Agreement',
    description:
      'A fierce ideological war erupts over Republic Act No. 1425 (The Rizal Law), which mandates the compulsory reading of José Rizal\'s anti-clerical novels, Noli Me Tángere and El Filibusterismo, in all schools. Despite a bitter campaign by the Catholic Church hierarchy to block the bill, nationalist senators Claro M. Recto and José P. Laurel successfully push it into law to foster secular patriotism. In July, the government signs a definitive reparations agreement with Imperial Japan in San Francisco, securing 550 million dollars in industrial capital goods and services to rebuild the nation\'s shattered infrastructure, paving the way for the normalization of diplomatic relations.',
    location: 'Legislative Building, Manila',
    lat: 14.5869,
    lng: 120.9812,
    category: 'politics',
    effect: null,
  },

  // ── 1957 ─────────────────────────────────────────────────────────────────────
  {
    year: 1957,
    title: 'The Tragic Death of Magsaysay and the Ascendancy of Carlos P. Garcia',
    description:
      'On March 17, the presidential aircraft Mt. Pinatubo crashes into Mount Manunggal in Cebu, instantly killing President Ramon Magsaysay and plunging the nation into sudden, deep mourning. Vice President Carlos P. Garcia immediately assumes the executive office and goes on to win a full presidential term in November. Garcia shifts the direction of the state away from Magsaysay\'s intense focus on rural development and American alignment, working instead to stabilize the country\'s dwindling foreign exchange reserves and laying the conceptual groundwork for an economic policy designed to protect native business interests from foreign domination.',
    location: 'Mount Manunggal, Balamban, Cebu',
    lat: 10.4578,
    lng: 123.7844,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 1958 ─────────────────────────────────────────────────────────────────────
  {
    year: 1958,
    title: 'The Proclamation of the Filipino First Policy',
    description:
      'On August 21, the National Economic Council under President Carlos P. Garcia formally adopts Resolution No. 204, institutionalizing the landmark Filipino First policy. This economic doctrine consciously prioritizes Filipino businesses, entrepreneurs, and local capital over foreign investors in the allocation of scarce foreign exchange, import licenses, and government contracts. The policy triggers a major wave of domestic industrialization and import-substitution, leading to a boom in local manufacturing, textiles, and food processing. However, it also draws fierce criticism from American trade groups and international financial institutions who argue that it discriminates against foreign capital investments.',
    location: 'Manila',
    lat: 14.5995,
    lng: 120.9842,
    category: 'trade',
    effect: 'pulse',
  },

  // ── 1959 ─────────────────────────────────────────────────────────────────────
  {
    year: 1959,
    title: 'The Bohlen-Serrano Agreement and the Capture of Foreign Exchange Control',
    description:
      'Foreign Affairs Secretary Felixberto Serrano and US Ambassador Charles E. Bohlen sign a historic diplomatic accord that fundamentally revises the highly uneven 1947 Military Bases Agreement. The Bohlen-Serrano Agreement dramatically reduces the lease terms of US military bases from ninety-nine years down to twenty-five years and mandates prior consultation with the Philippine government before deploying US forces for combat operations outside SEATO actions. Concurrently, the Central Bank imposes a margin fee on sales of foreign exchange, aggressively strengthening state control over the economy and reinforcing the nationalist industrial push of the Garcia administration.',
    location: 'Department of Foreign Affairs, Manila',
    lat: 14.5912,
    lng: 120.9789,
    category: 'politics',
    effect: null,
  },

  // ── 1960 ─────────────────────────────────────────────────────────────────────
  {
    year: 1960,
    title: 'The Launch of the First Marikina Valley Structural Program and the Death of Claro M. Recto',
    description:
      'The government launches large-scale public infrastructure projects, including the dynamic transformation of the Marikina Valley into a major industrial shoe-manufacturing hub and the expansion of suburban power grids. In October, while on an official cultural tour in Rome, preeminent nationalist statesman and constitutional legal expert Claro M. Recto dies suddenly of a heart attack. His unexpected passing deprives the country\'s nationalist movement of its chief intellectual architect at a time when tensions over American economic influence, the presence of military bases, and structural agrarian reform are intensifying across the country.',
    location: 'Marikina, Metro Manila',
    lat: 14.6507,
    lng: 121.1029,
    category: 'trade',
    effect: null,
  },

  // ── 1961 ─────────────────────────────────────────────────────────────────────
  {
    year: 1961,
    title: 'The Election of Diosdado Macapagal and the Shift to Free-Market Decontrol',
    description:
      'Diosdado Macapagal, campaigning as the \'Poor Boy from Lubao,\' wins the presidency under the Liberal Party banner, defeating incumbent Carlos P. Garcia. Backed by international financial institutions, Macapagal immediately dismantles Garcia\'s nationalist trade policies, lifting foreign exchange controls and allowing the Philippine peso to float freely against the US dollar. While this \'decontrol\' policy pleases foreign investors and provincial agricultural exporters, it causes a sharp devaluation of the currency and inflicts heavy financial damage on the young, urban manufacturing industries that had grown under the protection of the Filipino First policy.',
    location: 'Malacañang Palace, Manila',
    lat: 14.5942,
    lng: 120.9944,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 1962 ─────────────────────────────────────────────────────────────────────
  {
    year: 1962,
    title: 'Changing Independence Day to June 12 and the Launch of the Sabah Claim',
    description:
      'In a profound symbolic move to assert national sovereignty, President Diosdado Macapagal issues Executive Order No. 28, officially shifting the celebration of Philippine Independence Day from July 4 (the day the US withdrew sovereignty in 1946) to June 12 (the anniversary of Emilio Aguinaldo\'s 1898 declaration in Cavite). Concurrently, following the formal turnover of sovereign rights from the heirs of the Sultan of Sulu, Macapagal files an official, historic diplomatic claim over British North Borneo (Sabah), directly challenging the British-backed plan to incorporate the strategic territory into the upcoming Federation of Malaysia.',
    location: 'Malacañang Palace, Manila',
    lat: 14.5942,
    lng: 120.9944,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 1963 ─────────────────────────────────────────────────────────────────────
  {
    year: 1963,
    title: 'The Agricultural Land Reform Code and the Formation of Maphilindo',
    description:
      'President Macapagal signs the historic Republic Act No. 3844, also known as the Agricultural Land Reform Code. This landmark legislation seeks to abolish the century-old share tenancy system, replacing it with an agricultural leasehold system designed to eventually transform poor tenants into owner-cultivators. On the diplomatic front, Macapagal hosts a major regional summit that creates Maphilindo, a short-lived, non-communist confederation linking Malaysia, the Philippines, and Indonesia. The alliance quickly falls apart due to Indonesia\'s aggressive confrontation policy and Manila\'s ongoing territorial dispute over Sabah.',
    location: 'Legislative Building, Manila',
    lat: 14.5869,
    lng: 120.9812,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 1964 ─────────────────────────────────────────────────────────────────────
  {
    year: 1964,
    title: 'The Inception of the International Rice Research Institute (IRRI) and Student Radicalization',
    description:
      'The International Rice Research Institute (IRRI) in Los Baños begins large-scale laboratory testing of high-yielding semi-dwarf rice varieties (such as IR8), launching the Green Revolution that dramatically increases agricultural yields across Asia. In Manila, deep social discontent over urban poverty and the growing escalation of the Vietnam War sparks an explosive wave of student radicalization. Charismatic university professor Jose Maria Sison officially founds the Kabataang Makabayan (Nationalist Youth), creating a powerful, highly disciplined student organization that bridges urban campus activism with the burgeoning rural peasant movement.',
    location: 'Los Baños, Laguna',
    lat: 14.1674,
    lng: 121.2428,
    category: 'politics',
    effect: null,
  },

  // ── 1965 ─────────────────────────────────────────────────────────────────────
  {
    year: 1965,
    title: 'The Election of Ferdinand Marcos and the Rise of Infra-Driven Politics',
    description:
      'Senate President Ferdinand E. Marcos breaks ranks with the Liberal Party, secures the Nacionalista presidential nomination, and wins a hard-fought election against incumbent Diosdado Macapagal. Marcos assumes office with a highly modernizing, ambitious platform focused on large-scale infrastructure development. Leveraging foreign loans, his administration launches a massive, nationwide construction blitz of roads, bridges, public school buildings, and irrigation networks, utilizing the engineering units of the Armed Forces of the Philippines to accelerate construction and consolidate his political support across the provinces.',
    location: 'Independence Grandstand, Rizal Park, Manila',
    lat: 14.5825,
    lng: 120.9742,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 1966 ─────────────────────────────────────────────────────────────────────
  {
    year: 1966,
    title: 'The Deployment of PHILCAG to Vietnam and the Manila Summit Conference',
    description:
      'Despite fierce legislative opposition from nationalist politicians, President Marcos signs a bill authorizing the deployment of the Philippine Civic Action Group (PHILCAG V), sending over two thousand military engineers, medical personnel, and security troops to South Vietnam to support Allied war efforts. In October, Marcos hosts the historic Manila Summit Conference, bringing together heads of state from the United States, South Korea, Australia, and other allied nations to coordinate regional strategy regarding the Vietnam War, significantly raising his international profile as a key regional ally of Washington.',
    location: 'Manila Hotel, Ermita, Manila',
    lat: 14.5794,
    lng: 120.9722,
    category: 'war',
    effect: 'pulse',
  },

  // ── 1967 ─────────────────────────────────────────────────────────────────────
  {
    year: 1967,
    title: 'The Founding of ASEAN and the Lapiang Malaya Massacre',
    description:
      'On August 8, Foreign Affairs Secretary Narciso Ramos signs the Bangkok Declaration alongside regional leaders, formally establishing the Association of Southeast Asian Nations (ASEAN) to accelerate economic growth and regional stability. In Manila, deep domestic social tensions explode into violence on May 21 when members of the Lapiang Malaya, a millenarian peasant sect led by Valentin de los Santos armed only with traditional swords, march down Taft Avenue demanding the overthrow of the state. The Philippine Constabulary opens fire with automatic weapons, killing thirty-three sect members and exposing the raw, unresolved socio-economic alienation in the provinces.',
    location: 'Taft Avenue, Pasay City',
    lat: 14.5458,
    lng: 120.9936,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 1968 ─────────────────────────────────────────────────────────────────────
  {
    year: 1968,
    title: 'The Jabidah Massacre, Moro Mobilization, and the Re-establishment of the CPP',
    description:
      'In March, news leaks out of a clandestine military camp on Corregidor Island detailing the Jabidah Massacre, where army handlers allegedly executed dozens of young Muslim recruits who mutinied after learning they were being trained to infiltrate Sabah. The incident sparks widespread outrage across Mindanao, prompting Cotabato Governor Udtog Matalam to issue the Moro Liberation Manifesto. Concurrently, on December 26, Jose Maria Sison meets with a core group of radical cadres in Pangasinan to formally re-establish the Communist Party of the Philippines (CPP) on Marxist-Leninist-Mao Zedong Thought lines, openly plotting a protracted people\'s war.',
    location: 'Corregidor Island, Cavite',
    lat: 14.3822,
    lng: 120.5733,
    category: 'revolution',
    effect: 'pulse',
  },

  // ── 1969 ─────────────────────────────────────────────────────────────────────
  {
    year: 1969,
    title: 'The Founding of the New People\'s Army and the Historic Re-election of Marcos',
    description:
      'On March 29, Jose Maria Sison partners with Bernabe Buscayno (\'Commander Dante\'), leader of a remnant Huk faction, to form the New People\'s Army (NPA) in Tarlac, launching an armed rural insurgency. In November, President Marcos pulls off a historic political feat, breaking the country\'s traditional \'one-term jinx\' to win a highly contentious re-election against Sergio Osmeña Jr. The campaign is defined by massive state spending on infrastructure, which completely drains the national treasury, triggers a major balance-of-payments crisis, and forces the administration to seek emergency loans from the International Monetary Fund.',
    location: 'Capas, Tarlac',
    lat: 15.3319,
    lng: 120.5908,
    category: 'revolution',
    effect: 'pulse',
  },

  // ── 1970 ─────────────────────────────────────────────────────────────────────
  {
    year: 1970,
    title: 'The First Quarter Storm and the Floating of the Peso',
    description:
      'In January, economic collapse and fury over election spending spark the First Quarter Storm (FQS). Tens of thousands of student radicals clash with police outside Congress and attempt to storm Malacañang Palace, leading to weeks of violent street battles. To secure an IMF stabilization plan, the government floats the peso, causing its value to crash from four pesos to over six pesos per US dollar. The resultant hyperinflation sparks massive labor strikes and transport boycotts, turning Manila into an ideological battleground as the political system begins to fracture under the weight of civil unrest and economic strain.',
    location: 'Mendiola Street, San Miguel, Manila',
    lat: 14.5992,
    lng: 120.9931,
    category: 'revolution',
    effect: 'pulse',
  },

  // ── 1971 ─────────────────────────────────────────────────────────────────────
  {
    year: 1971,
    title: 'The Plaza Miranda Bombing and Suspension of the Writ of Habeas Corpus',
    description:
      'On August 21, during a packed Liberal Party campaign rally at Plaza Miranda in Quiapo, two fragmentation grenades explode on stage, killing nine people and severely injuring top opposition leaders. President Ferdinand Marcos blames the Communist Party of the Philippines for the attack and immediately issues Proclamation No. 889, suspending the Writ of Habeas Corpus across the nation. This allows state security forces to detain suspected subversives without a warrant, escalating the political atmosphere as student activists and civil libertarians accuse the administration of orchestrating a systemic crackdown on democratic dissent.',
    location: 'Plaza Miranda, Quiapo, Manila',
    lat: 14.5983,
    lng: 120.9836,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 1972 ─────────────────────────────────────────────────────────────────────
  {
    year: 1972,
    title: 'Declaration of Martial Law and the Founding of the Moro National Liberation Front',
    description:
      'On September 23, citing a growing communist insurgency and urban anarchy, President Marcos appears on national television to announce Proclamation No. 1081, placing the entire nation under Martial Law. He shuts down Congress, padlocks independent media outlets, and orders the immediate arrest of key opposition leaders, including Senator Benigno \'Ninoy\' Aquino Jr. In response to the loss of Muslim political representation under the centralized regime, Nur Misuari formally organizes the Moro National Liberation Front (MNLF) in Mindanao, launching an all-out, armed separatist rebellion that plunges the southern provinces into a bloody civil war.',
    location: 'Malacañang Palace, Manila',
    lat: 14.5942,
    lng: 120.9944,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 1973 ─────────────────────────────────────────────────────────────────────
  {
    year: 1973,
    title: 'Ratification of the 1973 Constitution and the Launch of the Overseas Filipino Worker (OFW) Program',
    description:
      'President Marcos signs the 1973 Constitution, replacing the American-style presidential system with a French-style parliamentary model that permits him to rule indefinitely as both President and Prime Minister. Ratification is achieved through hand-votes in tightly controlled Citizen Assemblies rather than a secret ballot. Facing an acute balance-of-payments crisis and severe domestic unemployment, the regime enacts a temporary labor export framework. This system institutionalizes the deployment of contract workers to the oil-booming Middle East, unexpectedly launching the modern global Overseas Filipino Worker (OFW) phenomenon.',
    location: 'Malacañang Palace, Manila',
    lat: 14.5942,
    lng: 120.9944,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 1974 ─────────────────────────────────────────────────────────────────────
  {
    year: 1974,
    title: 'The Battle of Jolo and the Inception of the Presidential Decree on Coconut Levy',
    description:
      'The conflict in the south reaches an apocalyptic peak as MNLF forces seize the town of Jolo. Armed forces launch a devastating counter-offensive using heavy artillery and air strikes, causing firestorms that level the historic municipality, killing thousands of civilians and displacing over forty thousand residents. In Manila, Marcos issues Presidential Decree No. 582, formalizing the Coconut Levy fund. Ostensibly a tax collected from small farmers to modernize the industry, the enormous fund is instead structurally funneled into private banks and conglomerates controlled by close presidential associates, creating a powerful oligarchy.',
    location: 'Jolo, Sulu',
    lat: 6.0525,
    lng: 121.0011,
    category: 'war',
    effect: 'pulse',
  },

  // ── 1975 ─────────────────────────────────────────────────────────────────────
  {
    year: 1975,
    title: 'The Signing of the Tondo Expropriation Act and the First Metro Manila Commission',
    description:
      'The urban poor movement achieves a milestone as organizations like ZOTO push back against structural displacement, forcing the regime to issue Presidential Decree No. 814, which mandates the upgrading of slums rather than outright demolition in Tondo\'s maritime zones. Seeking to streamline administrative control over the rapidly growing metropolis, Marcos creates the Metro Manila Commission via Presidential Decree No. 824. He appoints First Lady Imelda Marcos as Governor, granting her an independent institutional power base to launch grandiose, debt-financed cultural and architectural vanity projects along Manila Bay.',
    location: 'Tondo, Manila',
    lat: 14.6111,
    lng: 120.9697,
    category: 'politics',
    effect: null,
  },

  // ── 1976 ─────────────────────────────────────────────────────────────────────
  {
    year: 1976,
    title: 'The Tripoli Agreement and the Magnitude 8.0 Moro Gulf Earthquake',
    description:
      'Under diplomatic pressure from the Organization of Islamic Cooperation, First Lady Imelda Marcos travels to Libya, culminating in the signing of the Tripoli Agreement between the government and the MNLF. The treaty promises political autonomy to thirteen provinces in Mindanao, temporarily halting large-scale conventional warfare. In August, a catastrophic magnitude 8.0 earthquake strikes the Moro Gulf, generating massive tsunamis that devastate coastal communities across southwestern Mindanao, killing over eight thousand people and highlighting the fragile administrative rescue capabilities of the state.',
    location: 'Moro Gulf, Mindanao',
    lat: 6.7500,
    lng: 123.5000,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 1977 ─────────────────────────────────────────────────────────────────────
  {
    year: 1977,
    title: 'The Capture of Jose Maria Sison and Military Commission No. 2 Verdict on Ninoy Aquino',
    description:
      'In a major counter-insurgency victory, military intelligence tracking leads to the capture of CPP Chairman Jose Maria Sison in San Fernando, La Union, temporarily disrupting the tactical leadership of the communist movement. Days later, Military Commission No. 2 sentences jailed opposition icon Benigno \'Ninoy\' Aquino Jr. to death by firing squad for alleged subversion and murder. The arbitrary military verdict triggers widespread international condemnation and a domestic outcry, forcing Marcos to stay the execution as Aquino\'s international stature as a democratic martyr deepens.',
    location: 'Fort Bonifacio, Taguig',
    lat: 14.5322,
    lng: 121.0414,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 1978 ─────────────────────────────────────────────────────────────────────
  {
    year: 1978,
    title: 'The Interim Batasang Pambansa Elections and the Historic Noise Barrage',
    description:
      'The regime holds the first national legislative elections under Martial Law for the new Interim Batasang Pambansa. Jailed opposition leader Ninoy Aquino leads the Laban party from his cell, challenging the state\'s KBL party. On April 6, the night before the vote, millions of residents across Manila stage a spontaneous, thunderous Noise Barrage, banging pots, honking car horns, and shouting to protest the regime. The following day, the KBL claims a clean sweep amid rampant ballot fraud, demonstrating that while the regime controlled the counts, it had lost its grip on urban popular support.',
    location: 'Metro Manila',
    lat: 14.5995,
    lng: 120.9842,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 1979 ─────────────────────────────────────────────────────────────────────
  {
    year: 1979,
    title: 'The Revision of the US Military Bases Agreement and the Inception of the Second Oil Crisis',
    description:
      'To address growing nationalist pressure, the government signs a major revision to the Military Bases Agreement, officially restoring Philippine sovereignty over the land area of Clark and Subic installations and placing them under native base commanders. However, the United States maintains operational military use. Concurrently, the Iranian Revolution triggers the second global oil crisis. Energy costs skyrocket, inflicting heavy structural damage on the domestic economy, accelerating inflation, and forcing the state to heavily borrow from international syndicates to sustain its massive infrastructure program.',
    location: 'Clark Air Base, Pampanga',
    lat: 15.1867,
    lng: 120.5600,
    category: 'trade',
    effect: null,
  },

  // ── 1980 ─────────────────────────────────────────────────────────────────────
  {
    year: 1980,
    title: 'The Exile of Ninoy Aquino and the Execution of the Chico River Dam Protests',
    description:
      'Following a severe heart attack in prison, Ninoy Aquino is allowed by Marcos to fly to the United States for emergency medical surgery, beginning a three-year political exile in Boston. In the Cordillera mountains, Kalinga and Bontoc tribal communities achieve an indigenous milestone under leader Macli-ing Dulag, mounting fierce resistance against the World Bank-funded Chico River Dam Project. In April, military personnel assassinate Dulag in his home, turning him into an iconic symbol of tribal resistance and driving hundreds of indigenous youth into the ranks of the New People\'s Army.',
    location: 'Bugnay, Tinglayan, Kalinga',
    lat: 17.2833,
    lng: 121.1667,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 1981 ─────────────────────────────────────────────────────────────────────
  {
    year: 1981,
    title: 'The Official Lifting of Martial Law and the Visit of Pope John Paul II',
    description:
      'Seeking to normalize his international image ahead of a historic visit by Pope John Paul II, President Marcos signs Proclamation No. 2045, officially lifting Martial Law after nine years. However, he retains expansive legislative powers via hidden decrees, alongside absolute control over the military and the right to detain citizens indefinitely. During his apostolic tour, Pope John Paul II delivers a blunt, televised speech at Malacañang Palace, firmly declaring that human rights must never be sacrificed for national security or state engineering, dealing a major symbolic blow to the regime\'s legitimacy.',
    location: 'Malacañang Palace, Manila',
    lat: 14.5942,
    lng: 120.9944,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 1982 ─────────────────────────────────────────────────────────────────────
  {
    year: 1982,
    title: 'The Founding of the National Democratic Front (NDF) Urban Networks and the Escalation of the Sugar Crisis',
    description:
      'Despite the formal lifting of Martial Law, the economy continues to crater as the global sugar market experiences a catastrophic structural price collapse. The state-run buying monopoly, NASUTRA, mismanages sugar stocks, bankrupting thousands of small farms across Negros Island and causing severe widespread famine. Exploiting this economic collapse, the communist underground expands its urban resistance networks under the National Democratic Front (NDF), mobilizing progressive trade unions, progressive clergy, and human rights lawyers into a highly organized, nationwide anti-Marcos front.',
    location: 'Bacolod, Negros Occidental',
    lat: 10.6667,
    lng: 122.9500,
    category: 'trade',
    effect: null,
  },

  // ── 1983 ─────────────────────────────────────────────────────────────────────
  {
    year: 1983,
    title: 'The Assassination of Ninoy Aquino and the Outbreak of Economic Collapse',
    description:
      'On August 21, returning from exile to lead the opposition, Ninoy Aquino is shot dead on the tarmac of Manila International Airport while under military escort. The assassination sparks massive outrage. His funeral procession draws over two million citizens, transforming political fear into open defiance. The assassination triggers a catastrophic economic crisis; foreign banks freeze credit lines, triggering a massive flight of capital. The government defaults on its external debt, forcing inflation past fifty percent and shattering the business elite\'s confidence in Marcos\'s capacity to govern.',
    location: 'Manila International Airport, Pasay',
    lat: 14.5083,
    lng: 121.0194,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 1984 ─────────────────────────────────────────────────────────────────────
  {
    year: 1984,
    title: 'The Agrava Commission Report and the Rise of the Parliament of the Streets',
    description:
      'The independent Agrava Fact-Finding Board releases its report on the Aquino assassination, rejecting the military\'s claim that a lone communist hitman was responsible. Instead, the board concludes that a high-level military conspiracy orchestrated the killing, implicating top generals. Emboldened by these findings, diverse social groups coalesce into the Parliament of the Streets. Regular, massive protest marches paralyze Manila\'s business districts, uniting traditional politicians, radical student cadres, and corporate executives under the banner of the August Twenty-One Movement (ATOM).',
    location: 'Ayala Avenue, Makati',
    lat: 14.5547,
    lng: 121.0244,
    category: 'politics',
    effect: null,
  },

  // ── 1985 ─────────────────────────────────────────────────────────────────────
  {
    year: 1985,
    title: 'The Announcement of the Snap Presidential Election and the Rise of Cory Aquino',
    description:
      'Appearing on American television to counter growing international isolation, President Marcos surprises the nation by announcing a snap presidential election for early 1986 to prove his popular mandate. The fractured opposition unifies behind Ninoy\'s widow, Corazon \'Cory\' Aquino, who launches a powerful campaign powered by a massive civic movement. Aquino adopts the color yellow, drawing millions of citizens to her rallies, turning the upcoming vote into a high-stakes referendum on the survival of the dictatorship.',
    location: 'Manila',
    lat: 14.5995,
    lng: 120.9842,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 1986 ─────────────────────────────────────────────────────────────────────
  {
    year: 1986,
    title: 'The EDSA People Power Revolution and the Flight of the Marcos Family',
    description:
      'Following widespread fraud during the February 7 election, Defense Minister Juan Ponce Enrile and General Fidel V. Ramos launch a military mutiny. Catholic Archbishop Jaime Cardinal Sin appeals to the public via radio, prompting millions of unarmed citizens to flood Epifanio de los Santos Avenue (EDSA) to shield the rebels with their bodies. Armed tanks refuse to fire on the crowds. On February 25, Corazon Aquino is sworn in as President. Deserted by the military and the US government, Marcos and his family flee via US helicopters to Hawaii, ending twenty years of authoritarian rule in a non-violent People Power Revolution.',
    location: 'EDSA, Quezon City',
    lat: 14.5995,
    lng: 121.0544,
    category: 'revolution',
    effect: 'pulse',
  },

  // ── 1987 ─────────────────────────────────────────────────────────────────────
  {
    year: 1987,
    title: 'Ratification of the 1987 Constitution, the Mendiola Massacre, and the August Coup d\'État',
    description:
      'Voters overwhelmingly ratify a new, democratic 1987 Constitution, restoring a bicameral Congress and instituting strict checks on presidential war powers. However, structural instability plagues the young democracy. On January 22, state forces open fire on protesting farmers during the Mendiola Massacre, killing thirteen. In August, right-wing military renegades led by Colonel Gringo Honasan launch a bloody coup attempt against the Aquino government, attacking Malacañang Palace and killing over fifty people before being suppressed, exposing deep ideological fractures within the post-Marcos military.',
    location: 'Mendiola Street, San Miguel, Manila',
    lat: 14.5992,
    lng: 120.9931,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 1988 ─────────────────────────────────────────────────────────────────────
  {
    year: 1988,
    title: 'Enactment of the Comprehensive Agrarian Reform Law (CARL)',
    description:
      'President Corazon Aquino signs Republic Act No. 6657, enacting the Comprehensive Agrarian Reform Program (CARP). Designed to address centuries of agrarian unrest, the law aims to redistribute commercial agricultural lands to landless farmers. However, the legislation features major structural loopholes inserted by landowning elites in Congress, such as stock distribution options. This allows prominent estates—including the Aquino family\'s own Hacienda Luisita—to legally bypass land redistribution, triggering ongoing protests from left-wing peasant groups.',
    location: 'Hacienda Luisita, Tarlac',
    lat: 15.4411,
    lng: 120.6128,
    category: 'politics',
    effect: null,
  },

  // ── 1989 ─────────────────────────────────────────────────────────────────────
  {
    year: 1989,
    title: 'The December Coup d\'État and the Death of Ferdinand Marcos in Exile',
    description:
      'The Reform the Armed Forces Movement (RAM) launches its most destructive coup attempt yet, seizing the military headquarters at Camp Aguinaldo and deploying rebel T-28 Trojan aircraft to bomb Malacañang Palace. The mutineers seize Makati\'s financial district, trapping foreign tourists. The coup is broken only after US fighter jets fly intimidation sorties over rebel bases. Months earlier, in September, deposed dictator Ferdinand Marcos dies of organ failure in Honolulu, Hawaii, with President Aquino refusing to allow his body back into the country for burial to prevent political unrest.',
    location: 'Makati Central Business District',
    lat: 14.5547,
    lng: 121.0244,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 1990 ─────────────────────────────────────────────────────────────────────
  {
    year: 1990,
    title: 'The Magnitude 7.7 Luzon Earthquake and the Rise of the Built-Operate-Transfer (BOT) Law',
    description:
      'On July 16, a catastrophic magnitude 7.7 earthquake rips through Central Luzon along the Digdig Fault, completely collapsing luxury hotels in Baguio, destroying coastal infrastructure in Dagupan, and killing over 1,600 people. Faced with a crippled infrastructure landscape and severe nationwide electricity shortages, Congress passes Republic Act No. 6957, institutionalizing the Build-Operate-Transfer (BOT) law. This landmark economic legislation allows private corporations to finance and build major public infrastructure projects, reshaping the landscape of public works development.',
    location: 'Baguio City, Benguet',
    lat: 16.4023,
    lng: 120.5961,
    category: 'disaster',
    effect: 'pulse',
  },

  // ── 1991 ─────────────────────────────────────────────────────────────────────
  {
    year: 1991,
    title: 'The Catastrophic Eruption of Mount Pinatubo and the Historical Rejection of the US Bases Treaty',
    description:
      'On June 15, after centuries of dormancy, Mount Pinatubo explodes in the second-largest terrestrial volcanic eruption of the twentieth century, launching millions of tons of sulfur dioxide into the stratosphere and burying Central Luzon in volcanic ash and lahars. Weeks later, on September 16, a historic nationalist milestone is achieved when the Philippine Senate votes 12-11 to reject the RP-US Treaty of Friendship, Cooperation, and Security. This historic legislative action officially terminates the leases of American forces, ending nearly a century of continuous US military presence on Philippine soil.',
    location: 'Mount Pinatubo, Zambales',
    lat: 15.1417,
    lng: 120.3500,
    category: 'disaster',
    effect: 'ash',
  },

  // ── 1992 ─────────────────────────────────────────────────────────────────────
  {
    year: 1992,
    title: 'The Election of Fidel V. Ramos and the Dismantling of the Telecommunications Monopoly',
    description:
      'Fidel V. Ramos wins a highly competitive, multi-candidate presidential election to succeed Corazon Aquino. Ramos immediately prioritizes political stabilization and economic liberalization. To revitalize the economy, his administration aggressively targets the century-old telecommunications monopoly held by PLDT. By issuing Executive Order No. 59, Ramos mandates interconnectivity across all telecommunications networks, opening up the domestic market to local and international corporate competitors, which triggers an explosive modernization boom in digital infrastructure.',
    location: 'Malacañang Palace, Manila',
    lat: 14.5942,
    lng: 120.9944,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 1993 ─────────────────────────────────────────────────────────────────────
  {
    year: 1993,
    title: 'The Resolution of the Power Crisis and the Legal Re-establishment of the Central Bank',
    description:
      'President Ramos successfully resolves the crippling power crisis of the early 1990s by utilizing emergency fast-track executive powers to build new generation plants through private sector BOT contracts, effectively ending daily eight-hour blackouts in Manila. Concurrently, Congress passes the New Central Bank Act, legally liquidating the debt-ridden colonial Central Bank and replacing it with the Bangko Sentral ng Pilipinas (BSP). This structural reform establishes an independent monetary authority focused on price stability, boosting international confidence.',
    location: 'Bangko Sentral ng Pilipinas, Manila',
    lat: 14.5653,
    lng: 120.9836,
    category: 'trade',
    effect: null,
  },

  // ── 1994 ─────────────────────────────────────────────────────────────────────
  {
    year: 1994,
    title: 'The Entry into the World Trade Organization (WTO) and the Grand Opening of Subic Freeport',
    description:
      'Following intense debate, the Philippine Senate ratifies the General Agreement on Tariffs and Trade (GATT), formally admitting the nation into the World Trade Organization (WTO). This accelerates economic globalization by slashing import tariffs across agricultural and industrial lines. Simultaneously, the former US naval facility is successfully transformed into the Subic Bay Freeport Zone under Richard Gordon. This special economic zone draws hundreds of millions of dollars in foreign corporate manufacturing investments, becoming a premier engine of economic growth.',
    location: 'Subic Bay Freeport Zone, Zambales',
    lat: 14.8219,
    lng: 120.2711,
    category: 'trade',
    effect: 'pulse',
  },

  // ── 1995 ─────────────────────────────────────────────────────────────────────
  {
    year: 1995,
    title: 'The Execution of Flor Contemplacion and the Passing of the Migrant Workers Act',
    description:
      'The execution of Filipina domestic worker Flor Contemplacion in Singapore for murder sparks unprecedented national grief and fury, severely straining diplomatic relations between the two nations. The tragedy exposes the harsh realities and vulnerabilities faced by millions of citizens working abroad. In immediate response to the popular outcry, President Ramos signs Republic Act No. 8042, also known as the Migrant Workers and Overseas Filipinos Act, institutionalizing legal protections, emergency repatriation frameworks, and welfare services for the global diaspora.',
    location: 'Manila',
    lat: 14.5995,
    lng: 120.9842,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 1996 ─────────────────────────────────────────────────────────────────────
  {
    year: 1996,
    title: 'The Signing of the MNLF Peace Agreement and the Hosting of the APEC Summit',
    description:
      'On September 2, President Ramos and Nur Misuari sign a definitive historic Peace Agreement between the government and the MNLF, officially ending twenty-four years of continuous armed separatist rebellion. Misuari is subsequently elected Governor of the Autonomous Region in Muslim Mindanao (ARMM). Months later, the nation proudly showcases its economic resurgence by hosting the Asia-Pacific Economic Cooperation (APEC) Summit in Subic, welcoming world leaders and solidifying its reputation as the new Tiger Cub Economy of Asia.',
    location: 'Malacañang Palace, Manila',
    lat: 14.5942,
    lng: 120.9944,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 1997 ─────────────────────────────────────────────────────────────────────
  {
    year: 1997,
    title: 'The Outbreak of the Asian Financial Crisis and the Privatization of MWSS',
    description:
      'The sudden collapse of the Thai baht triggers the devastating Asian Financial Crisis, causing the Philippine peso to plummet from twenty-six pesos to over forty pesos per US dollar within months. Property markets crash and corporate debt defaults spike. Amid the financial storm, the government executes the largest water privatization in the world, splitting the Metropolitan Waterworks and Sewerage System (MWSS) into private concessions awarded to Manila Water and Maynilad, structurally transforming urban utility management.',
    location: 'Manila',
    lat: 14.5995,
    lng: 120.9842,
    category: 'trade',
    effect: 'pulse',
  },

  // ── 1998 ─────────────────────────────────────────────────────────────────────
  {
    year: 1998,
    title: 'The Election of Joseph Estrada and the Philippine Centennial Celebration',
    description:
      'On June 12, the nation celebrates the grand centennial of the declaration of independence from Spain, marked by massive cultural celebrations across the historical sites of Cavite and Manila. Months later, charismatic former actor Joseph Ejercito Estrada wins the presidency by a massive landslide under the populist slogan \'Huwag kang matakot, kay Erap ang mahirap\' (Do not fear, Erap is for the poor), capturing the support of the marginalized working class but raising deep anxieties among macroeconomic technocrats and the business elite.',
    location: 'Barasoain Church, Malolos, Bulacan',
    lat: 14.8456,
    lng: 120.8117,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 1999 ─────────────────────────────────────────────────────────────────────
  {
    year: 1999,
    title: 'The Ratification of the Visiting Forces Agreement (VFA) and the Grounding of the BRP Sierra Madre',
    description:
      'Amid growing territorial incursions by China in the South China Sea, the Senate ratifies the Visiting Forces Agreement (VFA), restoring a formal mechanism for large-scale joint military exercises with the United States. Seeking to assert sovereign rights over Ayungin Shoal (Second Thomas Shoal), the Philippine Navy intentionally runs aground the World War II-era tank landing ship BRP Sierra Madre. A small detachment of marine personnel is stationed aboard the rusty vessel, establishing a permanent geopolitical outpost in the disputed waters.',
    location: 'Ayungin Shoal, South China Sea',
    lat: 9.7333,
    lng: 114.8667,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 2000 ─────────────────────────────────────────────────────────────────────
  {
    year: 2000,
    title: 'The All-Out War Policy in Mindanao, the Rizal Day Bombings, and the Impeachment of Estrada',
    description:
      'President Estrada launches a highly controversial All-Out War policy against the Moro Islamic Liberation Front (MILF), deploying heavy artillery to capture the rebel stronghold of Camp Abubakar. In October, whistleblower Chavit Singson accuses Estrada of receiving millions in illegal gambling payoffs, triggering a political explosion. In November, the House of Representatives votes to impeach Estrada, sending the case to the Senate for trial. As the historic trial begins in December, coordinated terrorist blasts rock Manila on Rizal Day, killing twenty-two people and plunging the capital into deep political and security chaos.',
    location: 'Camp Abubakar, Barira, Maguindanao',
    lat: 7.4833,
    lng: 124.3167,
    category: 'war',
    effect: 'pulse',
  },

  // ── 2001 ─────────────────────────────────────────────────────────────────────
  {
    year: 2001,
    title: 'The EDSA II Revolution, the Ouster of Estrada, and the Post-9/11 Security Pivot',
    description:
      'In January 2001, a dramatic 11–1 vote by senator-judges to block the opening of a critical second envelope containing bank records triggers a massive walkout by prosecutors and sparks the EDSA II People Power revolution. Hundreds of thousands gather at the EDSA Shrine, prompting the military and police leadership to withdraw institutional support from President Joseph Estrada. The Supreme Court declares the presidency vacant, and Vice President Gloria Macapagal-Arroyo is sworn in as the 14th President amid intense economic instability, high fiscal deficits, and capital flight. The year is further marred by violent counter-reactions from Estrada\'s poorest supporters who storm Malacañang on May 1 (EDSA III), and high-profile Abu Sayyaf kidnappings that pivot Arroyo heavily toward Washington, bringing US military aid and Balikatan joint exercises back to Mindanao under the post-9/11 War on Terror framework.',
    location: 'EDSA Shrine, Quezon City',
    lat: 14.5912,
    lng: 121.0583,
    category: 'revolution',
    effect: 'pulse',
  },

  // ── 2002 ─────────────────────────────────────────────────────────────────────
  {
    year: 2002,
    title: 'The Comprehensive Dangerous Drugs Act and Institutional Anti-Narcotics Re-engineering',
    description:
      'To combat a massive domestic explosion in the trafficking and consumption of crystalline methamphetamine (shabu) orchestrated by transnational organized crime syndicates, the state enacts Republic Act No. 9165, known as the Comprehensive Dangerous Drugs Act of 2002. This legislation completely overhauls the state\'s anti-narcotics framework by institutionalizing a dual command structure: the Dangerous Drugs Board (DDB) as the strategic policy-making body, and the Philippine Drug Enforcement Agency (PDEA) as the premier civil enforcement arm. The law positions the Philippines as an aggressive regional partner in ASEAN\'s collective push for a drug-free zone, streamlining intelligence sharing with the US DEA. However, by introducing strict mandatory minimum sentences and limiting plea bargaining, it establishes the statutory baseline that later defined the 2016 drug war while triggering long-term prison overcrowding.',
    location: 'Quezon City, Metro Manila',
    lat: 14.6507,
    lng: 121.0331,
    category: 'politics',
    effect: null,
  },

  // ── 2003 ─────────────────────────────────────────────────────────────────────
  {
    year: 2003,
    title: 'The Oakwood Mutiny, Military Factionalism, and the SARS Containment Success',
    description:
      'On July 27, 2003, deep structural corruption and demoralization within the Armed Forces of the Philippines (AFP) boil over when a faction of over three hundred junior officers calling themselves the Magdalo group—led by Lieutenant Senior Grade Antonio Trillanes IV—seize the Oakwood Premier apartments in Makati\'s financial district. They wire the complex with explosives and demand the resignation of President Arroyo over allegations that senior officials were selling weapons to communist and Moro rebels, exposing severe internal stability vulnerabilities to global markets before surrendering peacefully. Concurrently, the Department of Health achieves a major public health milestone by successfully containing the localized introduction of Severe Acute Respiratory Syndrome (SARS) through aggressive contact tracing and strict airport quarantines, limiting national casualties to just 14 cases.',
    location: 'Ayala Center, Makati City',
    lat: 14.5501,
    lng: 121.0253,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 2004 ─────────────────────────────────────────────────────────────────────
  {
    year: 2004,
    title: 'The Highly Contested 2004 Presidential Election and the Political Demise of Fernando Poe Jr.',
    description:
      'The May 2004 presidential election becomes a deeply polarized battle between the incumbent Gloria Macapagal-Arroyo, backed by the traditional economic elite promising fiscal continuity, and legendary action film icon Fernando Poe Jr. (FPJ), a beloved populist figure commanding immense cultural capital among the working class. Arroyo is officially declared the winner by a margin of one million votes, but the opposition immediately alleges systematic, state-engineered electoral fraud and vote rigging in Mindanao. The political temperature reaches a boiling point when FPJ suffers a sudden, fatal hemorrhagic stroke on December 14, 2004, plunging millions of his devotees into deep mourning, leaving a massive leadership vacuum in the populist opposition, and permanently damaging public trust in the formal democratic process.',
    location: 'Manila, Metro Manila',
    lat: 14.5995,
    lng: 120.9842,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 2005 ─────────────────────────────────────────────────────────────────────
  {
    year: 2005,
    title: 'The Hello Garci Crisis and the Macroeconomic Shield of the E-VAT Law',
    description:
      'In June 2005, the Philippine state faces a massive institutional crisis when audio recordings emerge of a wiretapped phone conversation allegedly between President Arroyo and Election Commissioner Virgilio Garcillano discussing the manipulation of the 2004 vote counts. The Hello Garci tapes trigger a profound political breakdown, forcing the mass resignation of key cabinet secretaries (the Hyatt 10) and prompting widespread street protests demanding regime change. To stave off a looming fiscal sovereign default and balance-of-payments collapse amid the political chaos, the administration successfully pushes through Congress the highly unpopular Expanded Value-Added Tax (E-VAT) law (RA 9337), raising the VAT rate to 12% and expanding it to energy and petroleum products, a move that structurally stabilized the country\'s sovereign credit profile and laid the groundwork for a decade of macroeconomic expansion.',
    location: 'Batasang Pambansa, Quezon City',
    lat: 14.6922,
    lng: 121.0944,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 2006 ─────────────────────────────────────────────────────────────────────
  {
    year: 2006,
    title: 'Proclamation 1017 Authoritarian Pivot, Death Penalty Abolition, and the Guimaras Oil Spill',
    description:
      'In February 2006, following intelligence reports of an imminent coup plot involving an alliance of right-wing military mutineers and left-wing communist radicals, President Arroyo issues Proclamation No. 1017. This decree places the nation under a State of Emergency, banning public rallies, executing warrantless arrests of opposition figures, and raiding independent media outlets, drawing sharp international criticism over a slide back into martial law. Amid this authoritarian shift, the government passes a major human rights milestone in June by enacting Republic Act No. 9346, which officially abolishes the death penalty, sparing over 1,200 inmates and opening up EU trade concessions. Two months later, the country suffers its worst ecological disaster when the M/T Solar 1 sinks off Guimaras, spilling over two million liters of bunker fuel into critical marine sanctuaries, forcing a structural overhaul of domestic maritime environmental laws.',
    location: 'Guimaras Strait',
    lat: 10.5833,
    lng: 122.6167,
    category: 'disaster',
    effect: 'pulse',
  },

  // ── 2007 ─────────────────────────────────────────────────────────────────────
  {
    year: 2007,
    title: 'The Manila Peninsula Siege and the Strategic Political Pardon of Joseph Estrada',
    description:
      'In September 2007, the anti-graft court Sandiganbayan sentences former President Joseph Estrada to life imprisonment for plunder, but President Arroyo grants him a full executive pardon just six weeks later to defuse potential urban uprisings and court his political base. Weeks later, on November 29, political volatility flares again when Senator-elect Antonio Trillanes IV and Brigadier General Danilo Lim walk out of their subversion trial and seize the luxury Manila Peninsula Hotel in Makati. They demand the immediate removal of the president, but government forces respond with overwhelming tactical force, driving an armored personnel carrier into the hotel lobby and using tear gas to enforce a quick surrender within hours, signaling to global markets that the state maintained control over the military chain of command.',
    location: 'The Manila Peninsula, Makati City',
    lat: 14.5549,
    lng: 121.0249,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 2008 ─────────────────────────────────────────────────────────────────────
  {
    year: 2008,
    title: 'The MOA-AD Collapse, Resumption of Moro Bush Warfare, and the Global Financial Crisis',
    description:
      'In August 2008, the government and the Moro Islamic Liberation Front (MILF) prepare to sign the historic Memorandum of Agreement on Ancestral Domain (MOA-AD) in Malaysia, granting the Moro people an expanded autonomous homeland. However, Christian politicians challenge the pact, and the Supreme Court declares it unconstitutional on the grounds that it creates a separate state within the republic. The sudden collapse of the agreement causes rogue MILF commanders to launch coordinated attacks across Central Mindanao, triggering full-scale bush warfare that displaces over 500,000 civilians. Concurrently, the global financial shock strikes; while domestic growth slows dramatically, the country avoids a banking collapse due to strict central bank regulations and robust remittance inflows from the global OFW diaspora.',
    location: 'Cotabato City, Maguindanao',
    lat: 7.2206,
    lng: 124.2444,
    category: 'war',
    effect: 'pulse',
  },

  // ── 2009 ─────────────────────────────────────────────────────────────────────
  {
    year: 2009,
    title: 'The Maguindanao Massacre Warlord Atrocity and the Devastation of Typhoon Ondoy',
    description:
      'On November 23, 2009, weak state authority in the regions culminates in the worst political atrocity in modern Philippine history when 58 people—including 32 journalists—are ambushed and executed by a warlord\'s private army in Ampatuan, Maguindanao, to block a rival\'s gubernatorial filing. President Arroyo places the province under Martial Law to disarm the Ampatuan clan, drawing intense global condemnation that brands the nation as highly dangerous for journalists. Earlier, on September 26, Typhoon Ondoy (Ketsana) drops a month\'s worth of rain on Metro Manila in just six hours, submerging 80% of the capital, causing hundreds of casualties, and forcing international development agencies to radically pivot funding toward urban climate-change adaptation and disaster risk reduction.',
    location: 'Ampatuan, Maguindanao',
    lat: 6.8122,
    lng: 124.4233,
    category: 'disaster',
    effect: 'pulse',
  },

  // ── 2010 ─────────────────────────────────────────────────────────────────────
  {
    year: 2010,
    title: 'The Rise of Benigno Aquino III, the Automated Election Milestone, and the Quirino Hostage Crisis',
    description:
      'The May 2010 national elections mark a major historical milestone as the country executes its first-ever fully automated vote utilizing optical scan machines to deliver rapid, indisputable results within days. Riding a massive wave of public sentiment following the death of his mother, democracy icon Cory Aquino, Benigno \'Noynoy\' Aquino III wins the presidency on an explicit anti-corruption platform (\'Kung walang corrupt, walang mahirap\'). His administration\'s honeymoon period is abruptly ended on August 23, 2010, when a disgruntled former police officer hijacks a tourist bus at the Quirino Grandstand. A botched tactical rescue by local police results in the deaths of eight Hong Kong tourists, triggering a severe international diplomatic crisis that exposes deep deficiencies in the state\'s crisis-management protocols.',
    location: 'Quirino Grandstand, Manila',
    lat: 14.5826,
    lng: 120.9729,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 2011 ─────────────────────────────────────────────────────────────────────
  {
    year: 2011,
    title: 'The Judicial Prosecution of Gloria Arroyo and the K-to-12 Basic Education Overhaul',
    description:
      'Fulfilling his anti-corruption promises, President Aquino\'s state prosecutors file formal charges of electoral sabotage against former President Gloria Macapagal-Arroyo regarding the 2007 midterms. Government agents intercept Arroyo at the Manila international airport as she attempts to leave the country, placing her under high-profile hospital arrest at the Veterans Memorial Medical Center. Concurrently, to align the nation\'s massive migrant labor force and domestic services economy with international academic standards, the Department of Education launches the implementation of the K-to-12 Basic Education Program (RA 10533), structurally adding mandatory kindergarten and two years of senior high school to the public school cycle.',
    location: 'Pasay City, Metro Manila',
    lat: 14.535,
    lng: 121.011,
    category: 'politics',
    effect: null,
  },

  // ── 2012 ─────────────────────────────────────────────────────────────────────
  {
    year: 2012,
    title: 'The Scarborough Shoal Standoff, the Impeachment of CJ Corona, and the Enactment of the RH Law',
    description:
      'In April 2012, a tense maritime standoff erupts at Scarborough Shoal when Chinese surveillance vessels physically block Philippine navy assets from arresting Chinese poachers, resulting in Beijing seizing effective control of the reef and prompting Manila to prepare a formal legal challenge under UNCLOS. Domestically, the administration secures a major political victory by successfully convicting impeached Supreme Court Chief Justice Renato Corona for failing to accurately disclose his assets in his SALN. In December, after over a decade of fierce resistance from the Catholic hierarchy, Congress passes the landmark Responsible Parenthood and Reproductive Health Act of 2012 (RA 10354), establishing modern, state-mandated reproductive healthcare access for the poor.',
    location: 'Scarborough Shoal, West Philippine Sea',
    lat: 15.1167,
    lng: 117.7667,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 2013 ─────────────────────────────────────────────────────────────────────
  {
    year: 2013,
    title: 'The Trauma of Super Typhoon Yolanda, the Zamboanga Siege, and the PDAF Pork Barrel Scandal',
    description:
      'In September 2013, a rogue faction of the MNLF launches the Zamboanga City Siege, leading to three weeks of heavy urban combat that displaces over 100,000 residents. In November, Super Typhoon Yolanda (Haiyan)—one of the strongest tropical cyclones ever recorded—slams into the Visayas with a devastating five-meter storm surge, obliterating Tacloban City and killing over 6,300 people, a disaster that triggered a massive multi-national humanitarian military deployment. Simultaneously, investigative journalists expose the multi-billion-peso Priority Development Assistance Fund (PDAF) scam, revealing systematic funneled legislative pork barrel funds into fake NGOs, causing deep public disillusionment with elite governance that fueled the rise of the 2016 populist movement.',
    location: 'Tacloban City, Leyte',
    lat: 11.2444,
    lng: 125.0039,
    category: 'disaster',
    effect: 'pulse',
  },

  // ── 2014 ─────────────────────────────────────────────────────────────────────
  {
    year: 2014,
    title: 'The Signing of the Comprehensive Agreement on the Bangsamoro Peace Treaty',
    description:
      'Following seventeen years of grueling negotiations to resolve a separatist conflict that claimed over 120,000 lives and trapped resource-rich provinces in deep structural poverty, the government and the Moro Islamic Liberation Front (MILF) sign the historic Comprehensive Agreement on the Bangsamoro (CAB) at Malacañang Palace. Highly praised by the United Nations and the international community, this landmark peace treaty outlines a comprehensive roadmap: the decommissioning and demobilization of over 10,000 armed rebel fighters, and the structural creation of a new, highly autonomous political entity with expanded powers over taxation, sharia law, and natural resources, providing a permanent legal blueprint for peace.',
    location: 'Malacañang Palace, Manila',
    lat: 14.5942,
    lng: 120.9944,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 2015 ─────────────────────────────────────────────────────────────────────
  {
    year: 2015,
    title: 'The Mamasapano Tactical Tragedy, the SAF 44, and the Grand Apostolic Visit of Pope Francis',
    description:
      'In January 2015, millions of ecstatic faithful brave torrential rains to attend an outdoor mass celebrated by Pope Francis at Manila\'s Luneta Park, establishing a global record for an apostolic gathering with six million attendees. Days later, a covert anti-terrorist operation known as Oplan Exodus in Mamasapano, Maguindanao, goes catastrophically wrong. An elite unit of the Special Action Force neutralizes international terrorist Marwan but is ambushed and cut off by local rebel factions. Due to a breakdown in communication with the military command, 44 elite commandos (the SAF 44) are killed in action, triggering a massive collapse in public trust, inflaming anti-Moro sentiment, and halting the immediate passage of the Bangsamoro peace legislation.',
    location: 'Mamasapano, Maguindanao',
    lat: 6.9406,
    lng: 124.5275,
    category: 'war',
    effect: 'pulse',
  },

  // ── 2016 ─────────────────────────────────────────────────────────────────────
  {
    year: 2016,
    title: 'The Election of Rodrigo Duterte, the Launch of the War on Drugs, and the Arbitral Victory at The Hague',
    description:
      'In May 2016, Davao City Mayor Rodrigo Duterte wins the presidency by a landslide on an uncompromising anti-establishment, populist platform. He immediately launches a highly controversial, state-led War on Drugs (Project Double Barrel), instructing law enforcement and encouraging vigilante groups to apply lethal force against suspected drug dealers and users. This campaign results in thousands of extrajudicial killings, drawing sharp condemnation from global human rights bodies. Concurrently, on July 12, the Permanent Court of Arbitration in The Hague delivers a historic milestone victory for Manila, ruling that China\'s nine-dash line claims over the South China Sea have no basis in international law under UNCLOS. However, President Duterte chooses to downplay the ruling in an effort to court Chinese infrastructure loans, shifting the nation\'s traditional foreign policy alignment away from Washington and toward Beijing.',
    location: 'Malacañang Palace, Manila',
    lat: 14.5942,
    lng: 120.9944,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 2017 ─────────────────────────────────────────────────────────────────────
  {
    year: 2017,
    title: 'The Five-Month Urban Siege of Marawi, the Declaration of Mindanao Martial Law, and the TRAIN Law Tax Overhaul',
    description:
      'In May, ISIS-affiliated militants led by the Maute and Abu Sayyaf groups launch a surprise armed takeover of Marawi City in Mindanao, attempting to establish an Islamic caliphate in Southeast Asia. President Duterte places the entire island of Mindanao under Martial Law as the Armed Forces engage in a brutal, five-month urban siege involving heavy house-to-house combat, artillery barrages, and air strikes. The city is liberated in October after the deaths of over one thousand militants, soldiers, and civilians, leaving the historic Islamic city completely in ruins and displacing hundreds of thousands of residents. In December, the regime signs the TRAIN Law (Tax Reform for Acceleration and Inclusion), structurally overhauling individual income taxation by lowering income taxes while aggressively increasing excise taxes on fuel, automobiles, and sugary drinks to fund the Build, Build, Build infrastructure campaign.',
    location: 'Marawi City, Lanao del Sur',
    lat: 8.0031,
    lng: 124.2853,
    category: 'war',
    effect: 'pulse',
  },

  // ── 2018 ─────────────────────────────────────────────────────────────────────
  {
    year: 2018,
    title: 'The Environmental Closure of Boracay Island, the Enactment of the Bangsamoro Organic Law, and Runaway Inflation',
    description:
      'Calling the country\'s premier tourist destination a \'cesspool\' due to rapid, unregulated commercial development and raw sewage discharge, President Duterte orders the unprecedented, total closure of Boracay Island to all tourists for six months. A massive inter-agency task force rehabilitates the island\'s coastal ecosystem, setting a global precedent for radical environmental state intervention. In politics, Duterte signs the historic Bangsamoro Organic Law (BOL), codifying the previous peace treaties and providing the legal mechanism to create a powerful autonomous Muslim territory. Economically, the year is marked by severe macroeconomic stress as global crude spikes and domestic implementation of the TRAIN law combine to push local inflation to a nine-year high of 6.7%, triggering widespread public outcry over soaring prices of rice and basic commodities.',
    location: 'Boracay Island, Aklan',
    lat: 11.9674,
    lng: 121.9248,
    category: 'trade',
    effect: 'pulse',
  },

  // ── 2019 ─────────────────────────────────────────────────────────────────────
  {
    year: 2019,
    title: 'The Ratification of the BARMM, the Jolo Cathedral Bombing, and the Implementation of the Rice Tariffication Law',
    description:
      'Voters overwhelmingly ratify the Bangsamoro Organic Law in a historic regional plebiscite, officially establishing the new Bangsamoro Autonomous Region in Muslim Mindanao (BARMM) and dissolving the ineffective ARMM. Days later, twin suicide bombings orchestrated by the Abu Sayyaf group hit the Cathedral of Our Lady of Mount Carmel in Jolo, killing over twenty people and highlighting the resilience of radical splinter cells despite the peace process. In economic policy, the state signs the Rice Tariffication Law (RA 11203), lifting decades of quantitative import restrictions on foreign rice and replacing them with tariffs. While this structural shift successfully stabilizes urban food prices and lowers inflation, it floods the domestic market with cheap imports, severely undercutting the livelihoods of local smallholder farmers.',
    location: 'Cotabato City, BARMM',
    lat: 7.2206,
    lng: 124.2444,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 2020 ─────────────────────────────────────────────────────────────────────
  {
    year: 2020,
    title: 'The Taal Volcano Eruption, the COVID-19 Lockdown Shockwave, and the Forced Shutdown of ABS-CBN',
    description:
      'In January, the Taal Volcano suffers a major phreatomagmatic eruption, blanketing Calabarzon and Metro Manila in thick ash and halting economic activity. By March, as the global COVID-19 pandemic accelerates, the administration enforces one of the longest, strictest continuous pandemic lockdowns in the world, shutting down public transit, freezing the economy, and restricting millions to their homes. Amid this profound public health and economic crisis, the government draws fierce domestic and international criticism when a staunchly loyalist Congress officially denies a franchise renewal to ABS-CBN, forcing the country\'s largest independent broadcast network off the air, which fundamentally alters the domestic media landscape and shrinks press freedom.',
    location: 'Taal Volcano, Batangas',
    lat: 14.0111,
    lng: 120.9978,
    category: 'disaster',
    effect: 'ash',
  },

  // ── 2021 ─────────────────────────────────────────────────────────────────────
  {
    year: 2021,
    title: 'The Passing of Noynoy Aquino, the Pandemic Delta Variant Wave, and Hidilyn Diaz\'s Historic Olympic Gold',
    description:
      'In June, former President Benigno \'Noynoy\' Aquino III dies of renal disease, prompting a nationwide re-evaluation of his administration\'s economic and anti-corruption legacy. Throughout the year, the state struggles through multiple pandemic waves driven by the deadly Delta variant, stretching the hospital infrastructure to its absolute limit and slowly rolling out foreign-sourced vaccines to reopen the economic core. In July, weightlifter Hidilyn Diaz achieves a historic national sports milestone, winning the country\'s first-ever Olympic gold medal at the Tokyo Games, providing a powerful moment of unified national pride and psychological relief amidst the prolonged gloom of pandemic isolation and economic contraction.',
    location: 'Manila, Metro Manila',
    lat: 14.5995,
    lng: 120.9842,
    category: 'culture',
    effect: 'pulse',
  },

  // ── 2022 ─────────────────────────────────────────────────────────────────────
  {
    year: 2022,
    title: 'The Return of the Marcoses via the UniTeam Alliance and the Complete Post-Pandemic Reopening',
    description:
      'In a historic political realignment, Ferdinand \'Bongbong\' Marcos Jr.—the son of the former dictator—unites with Davao City Mayor Sara Duterte to form the powerhouse UniTeam alliance. Marcos Jr. wins the presidential election by an absolute majority, capturing over thirty-one million votes and returning the Marcos family to Malacañang Palace thirty-six years after their ouster in the 1986 EDSA Revolution. The new administration fully removes remaining pandemic travel restrictions, dismantles mandatory masking protocols, fully reopens face-to-face schooling, and attempts to manage severe post-pandemic global inflation, agricultural supply line crises, and soaring domestic commodity prices.',
    location: 'Malacañang Palace, Manila',
    lat: 14.5942,
    lng: 120.9944,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 2023 ─────────────────────────────────────────────────────────────────────
  {
    year: 2023,
    title: 'The Creation of the Maharlika Sovereign Wealth Fund and Dangerous Flashpoints in the West Philippine Sea',
    description:
      'President Marcos Jr. signs into law the highly debated Maharlika Investment Fund (MIF), creating the nation\'s first sovereign wealth fund despite intense pushback from economists over fiscal transparency, state debt, and the utilization of government bank capital. In foreign policy, the administration shifts radically away from Duterte\'s pro-Beijing stance, expanding US access to strategic military bases under EDCA. This pivots the state into direct confrontation with China, resulting in frequent, dangerous maritime encounters involving high-pressure water cannons, laser targeting, and physical ship collisions around Ayungin Shoal.',
    location: 'Ayungin Shoal, West Philippine Sea',
    lat: 9.7333,
    lng: 114.8667,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 2024 ─────────────────────────────────────────────────────────────────────
  {
    year: 2024,
    title: 'The Complete Collapse of the UniTeam Coalition, the POGO Ban, and the Arrest of Apollo Quiboloy',
    description:
      'The dominant political alliance fractures completely as Vice President Sara Duterte resigns from the Marcos cabinet, exposing a bitter feud between the political houses of Manila and Davao. The administration launches a heavy domestic crackdown and total ban on Philippine Offshore Gaming Operators (POGOs) due to national security threats and criminal syndicates, highlighted by the high-profile senate investigation and flight of Mayor Alice Guo. State forces pull off a major operational milestone by arresting fugitive doomsday preacher Apollo Quiboloy inside his vast Davao compound following a dramatic, multi-week police siege.',
    location: 'Davao City, Mindanao',
    lat: 7.0731,
    lng: 125.6128,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 2025 ─────────────────────────────────────────────────────────────────────
  {
    year: 2025,
    title: 'The Proxy Battlefield Midterms, Legislative Drug War Inquiries, and Constitutional Cha-Cha Battles',
    description:
      'The country holds high-stakes midterm legislative elections, operating as a direct proxy battlefield between the loyalist Marcos Alyansa para sa Bagong Pilipinas and the opposing Duterte faction. The political discourse is intensely dominated by fierce judicial and legislative battles over proposed Charter Change (Cha-Cha) economic provisions, severe legislative inquiries into the extrajudicial funding of the previous administration\'s drug war, and highly complex economic policy adjustments designed to mitigate deep climate vulnerabilities across vulnerable agricultural regions.',
    location: 'Batasang Pambansa, Quezon City',
    lat: 14.6922,
    lng: 121.0944,
    category: 'politics',
    effect: 'pulse',
  },

  // ── 2026 ─────────────────────────────────────────────────────────────────────
  {
    year: 2026,
    title: 'The Consolidation of the Bagong Pilipinas Vision, Maritime Defense Posturing, and Tech-Sector AI Integration',
    description:
      'Reaching the present day, the administration aggressively consolidates its domestic policy platform under the Bagong Pilipinas brand, prioritizing large-scale structural infrastructure modernization and comprehensive digital integration across public services. In international relations, Manila hardens its permanent maritime defense posture in the West Philippine Sea through upgraded security alliances with regional democratic partners like Japan and Australia, while navigating complex digital landscape shifts like real-time AI implementation across the local tech and business process outsourcing sectors.',
    location: 'Malacañang Palace, Manila',
    lat: 14.5942,
    lng: 120.9944,
    category: 'politics',
    effect: 'pulse',
  },
]

export default events
