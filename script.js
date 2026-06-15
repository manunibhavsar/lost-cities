const CITIES = [
  {
    id: 1,
    name: "Machu Picchu",
    badge: "FAMOUS",
    location: "Cusco Region, Peru — 13°9′47″S 72°32′44″W",
    period: "c. 1450–1572 CE",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=700&q=80",
    desc: "Perched at 2,430 m in the Andes, Machu Picchu was a royal estate of the Inca emperor Pachacuti. Abandoned during the Spanish Conquest, it lay unknown to the outside world until Hiram Bingham III stumbled upon it in 1911.",
    tags: ["Inca", "Andes", "UNESCO", "Terraced Agriculture"],
    history: "Constructed around 1450 CE, Machu Picchu served as a royal retreat for Pachacuti, ninth Sapa Inca. The city housed roughly 750 people permanently. After the Spanish Conquest and a smallpox epidemic decimated the Inca population, the site was abandoned around 1572 and rapidly consumed by cloud-forest vegetation. It remained unknown to the outside world until American historian Hiram Bingham III reached it in July 1911, guided by a local farmer.",
    art: "The Inca were master stone-carvers. At Machu Picchu, every stone was shaped without mortar using a technique called ashlar — stones fitted so precisely that not even a blade of grass can be inserted between them. Ritual objects include the Intihuatana Stone (a solar observatory), ceramic vessels, gold and silver figurines, and intricate textiles woven from alpaca and vicuña wool.",
    tech: [
      { name: "Ashlar Masonry", detail: "Earthquake-resistant dry-stone construction without mortar" },
      { name: "Andean Terracing", detail: "Agricultural terraces (andenes) that prevented erosion and enabled farming" },
      { name: "Water Management", detail: "Hydraulic system of fountains, canals, and drainage channels" },
      { name: "Solar Alignment", detail: "Buildings aligned with solstices and equinoxes for calendrical precision" },
    ],
    myth: "Reddit user u/TheQuipuDecoder (r/archaeology): 'Local Quechua tradition holds that Machu Picchu sits atop an Apus — a mountain deity. Elders say the Inca never truly abandoned it; the spirits of the emperors still walk the Intihuatana platform at dawn on the June solstice. Several early-morning visitors have reported hearing rhythmic chanting with no identifiable source.'"
  },
  {
    id: 2,
    name: "Petra",
    badge: "FAMOUS",
    location: "Ma'an Governorate, Jordan — 30°19′43″N 35°26′31″E",
    period: "c. 312 BCE – 363 CE",
    image: "https://images.unsplash.com/photo-1548407260-da850faa41e3?w=700&q=80",
    desc: "The 'Rose City' of the Nabataeans, Petra was carved directly into sheer rose-red sandstone cliffs. A crossroads of ancient trade routes, it was lost to Western knowledge for over a millennium before rediscovery in 1812.",
    tags: ["Nabataean", "Trade City", "Rock-Cut", "Jordan"],
    history: "Established by the Nabataean Arabs around the 4th century BCE, Petra became a prosperous trading hub controlling the spice, silk, and incense routes between Arabia, Egypt, and the Mediterranean. The Romans annexed it in 106 CE. A devastating earthquake in 363 CE caused massive destruction, and shifting trade routes sealed its decline. Swiss explorer Johann Ludwig Burckhardt 'rediscovered' it for Europe in 1812 disguised as an Arab pilgrim.",
    art: "Petra's most iconic artistry is architectural: the Treasury (Al-Khazneh), the Monastery (Ad-Deir), and over 800 individual monuments carved entirely from living rock. Nabataean artists blended Hellenistic, Egyptian, Assyrian, and indigenous Arabic styles. Painted plaster interiors, elaborate water-channel carvings, and ceremonial funerary texts in Nabataean script (ancestor of modern Arabic) demonstrate remarkable cultural synthesis.",
    tech: [
      { name: "Rock-Cut Architecture", detail: "Entire monuments carved top-down from solid sandstone cliffs" },
      { name: "Hydraulic Engineering", detail: "200 km of terracotta pipes, channels, and cisterns managing desert rainfall" },
      { name: "Trade Route Mapping", detail: "Control of frankincense and spice caravan routes across 2,500 km" },
      { name: "Dam Construction", detail: "Flash-flood dams protecting the city basin from catastrophic wadis" },
    ],
    myth: "From r/AncientCivilizations: 'The Bedouin who lived in Petra's caves before 1985 called the Treasury's upper chambers the 'Room of the Djinn.' They refused to enter after dusk, claiming that the pharaoh's treasure inside was guarded by a spirit that could only be released if someone solved a riddle written in the rock carvings. No scholar has found it — but the carvings do contain a sequence of symbols that still defies translation.'"
  },
  {
    id: 3,
    name: "Angkor Wat",
    badge: "FAMOUS",
    location: "Siem Reap Province, Cambodia — 13°24′45″N 103°52′0″E",
    period: "c. 802–1431 CE",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=700&q=80",
    desc: "The largest religious monument on Earth, Angkor Wat was the epicentre of the Khmer Empire. After centuries of abandonment, LiDAR revealed a hidden mega-city of over 1,000 km² surrounding it beneath the jungle.",
    tags: ["Khmer", "Hindu–Buddhist", "LiDAR Discovery", "Cambodia"],
    history: "Construction of Angkor Wat began under Suryavarman II in the early 12th century as a state temple and eventual mausoleum, oriented toward the west — the direction of the setting sun and death. The Khmer Empire at its zenith (9th–15th centuries) was the most powerful in Southeast Asia. After the capital shifted following a Thai invasion in 1431, Angkor's urban zones were gradually reclaimed by jungle, though the temple itself was continuously used by Buddhist monks.",
    art: "Angkor Wat features 1,200 square metres of continuous bas-relief galleries — the world's largest. Scenes depict the Churning of the Ocean of Milk, the Battle of Lanka, and the Mahabharata. Nearly 1,800 apsara (celestial dancer) carvings adorn pillars and walls, each with a unique expression. Khmer sculptors worked in sandstone using iron chisels with copper-tipped punches.",
    tech: [
      { name: "Hydraulic City", detail: "Vast reservoir (baray) system to manage monsoon floods and provide year-round irrigation" },
      { name: "Astronomical Alignment", detail: "Temple aligned with spring equinox sunrise and Draco constellation" },
      { name: "Sandstone Logistics", detail: "25 million stone blocks quarried 37 km away and transported by raft" },
      { name: "LiDAR Mapping (2014)", detail: "The Khmer Archaeology LiDAR Consortium's flights revealed a suburban grid covering 1,000+ km²" },
    ],
    myth: "r/UnsolvedMysteries: 'Locals around Angkor tell of Neak Ta — earth spirits bound to specific trees and ruins. Construction workers at the Angkor Conservation site in 2003 reportedly saw a group of figures in white at the north gallery at 2 AM. They fled. Work resumed next day only after a ceremony with monks. The official report listed it as a 'cultural sensitivity stop-work.' Decide for yourself.'"
  },
  {
    id: 4,
    name: "Pompeii",
    badge: "FAMOUS",
    location: "Campania, Italy — 40°45′0″N 14°29′0″E",
    period: "c. 600 BCE – 79 CE",
    image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=700&q=80",
    desc: "Frozen in a single catastrophic moment in 79 CE, Pompeii is archaeology's greatest time capsule — a complete Roman city buried under 6 metres of volcanic ash from Mount Vesuvius, preserving everything from frescoes to bread.",
    tags: ["Roman", "Vesuvius", "Italy", "Time Capsule"],
    history: "An established Oscan settlement by the 6th century BCE, Pompeii became a prosperous Roman colony by 80 BCE. On 24 August 79 CE, Vesuvius erupted, burying the city in approximately 4–6 metres of pumice and ash within 18–24 hours. Around 2,000 victims were suffocated and their bodies preserved as hollow casts in the ash. The city was not rediscovered until 1748, when excavations began under Charles of Bourbon.",
    art: "Pompeii contains the finest collection of Roman fresco painting outside Rome itself. The Villa of the Mysteries features a 17-metre continuous frieze depicting Dionysiac initiation rites in vivid red, ochre, and blue pigments still vibrant after 2,000 years. Mosaics, bronze statuary, terracotta lamps, surgical instruments, and carbonised loaves of bread provide an unparalleled cross-section of Roman daily life.",
    tech: [
      { name: "Roman Concrete (Opus Caementicium)", detail: "Volcanic pozzolana-based concrete stronger than modern variants after 2,000 years" },
      { name: "Lead Pipe Plumbing", detail: "Pressurised water distribution system serving public fountains and private homes" },
      { name: "Ground-Penetrating Radar", detail: "Modern GPR has located 40% of the city still unexcavated beneath the surface" },
      { name: "3D Digital Scanning", detail: "Full-city photogrammetric models now enable virtual excavation without disturbance" },
    ],
    myth: "r/History: 'There is a section of Pompeii's Via dell'Abbondanza that excavators have repeatedly fenced off and then quietly un-excavated. Local guides whisper that what was found beneath — a room containing skeletal remains in a specific geometric arrangement around a central figure — was documented and then immediately re-buried. The Vatican reportedly received the artefacts. The official story is 'structural instability.' The smell of sulphur in that block reportedly spikes every August 24th.'"
  },
  {
    id: 5,
    name: "Tikal",
    badge: "FAMOUS",
    location: "Petén Department, Guatemala — 17°13′19″N 89°37′22″W",
    period: "c. 400 BCE – 900 CE",
    image: "https://images.unsplash.com/photo-1681686589384-b43106562e3d?w=700&q=80",
    desc: "Once home to 90,000 people, Tikal was the greatest Maya city of the Classic Period. Its Temple IV — at 70 metres — is one of the tallest pre-Columbian structures ever built. LiDAR revealed it was the core of a network of cities.",
    tags: ["Maya", "Guatemala", "Classic Period", "Jungle"],
    history: "Tikal rose to prominence between 200 and 900 CE as the dominant city-state of the southern Maya lowlands. At its height it was home to an estimated 90,000 inhabitants across 120 km² of cultivated terrain. The city fought long wars with Calakmul to the north, with kings like Siyaj Chan K'awiil II and Kaloomte' Balam recording victories in elaborate stone monuments. Around 900 CE, during the Maya 'Terminal Classic Collapse,' Tikal was abandoned — its causes still debated.",
    art: "Tikal's artists produced elaborate carved stone stelae recording royal histories in full-figure hieroglyphic text. Jade mosaic masks, obsidian blades, polychrome ceramic vessels, and shell ornaments were found in royal tombs beneath the pyramids. Murals in Temple II depict celestial deities in midnight blue pigment derived from indigo plant and palygorskite clay — the famous 'Maya Blue' that neither corrodes nor fades.",
    tech: [
      { name: "Maya Blue Pigment", detail: "Corrosion-resistant blue pigment combining organic dye with clay still unstudied fully" },
      { name: "Corbel Arch Construction", detail: "False arches of stone allowing tall interior spaces without the keystone arch" },
      { name: "Aguada Reservoir System", detail: "Network of reservoirs storing rainwater for a city of 90,000 in a seasonal climate" },
      { name: "LiDAR (2018 PACUNAM)", detail: "The PACUNAM LiDAR Initiative revealed 60,000+ hidden structures in the Petén jungle" },
    ],
    myth: "r/MayaHistory: 'There's a specific cave complex below Tikal's North Acropolis that guides will not enter. The Maya believed caves were xibalba entrances — the underworld. In the 1980s a small team doing geological survey went in and came out after two hours reporting they had been inside for only 20 minutes. Their equipment showed a two-hour gap. One member never spoke about it again. The cave is now fenced with a 'structural hazard' sign.'"
  },
  {
    id: 6,
    name: "Iram of the Pillars",
    badge: "NEWLY TRACED",
    location: "Rub' al Khali Desert, Oman/Saudi Arabia — ~19°N 55°E (estimated)",
    period: "c. 3000–300 BCE (debated)",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=700&q=80",
    desc: "Known as 'Atlantis of the Sands,' Iram is mentioned in the Quran as a great city of pillars destroyed by divine wrath. NASA satellite imagery in 1992 revealed ancient caravan routes converging on a site in Dhofar, Oman — now candidate Ubar.",
    tags: ["Arabian", "Frankincense Trade", "NASA Discovery", "Quran"],
    history: "The ancient Ad tribe supposedly built Iram in the Empty Quarter desert as a trading city on the frankincense route. NASA's JPL used Space Shuttle radar imagery in 1992 to trace ancient caravan tracks converging on Shisr, Oman, where archaeologists found a buried fortified settlement that collapsed into a limestone cavern system — consistent with sudden destruction. The site, now called Ubar, dates from roughly 2800 BCE to 300 CE.",
    art: "Excavations at Ubar/Iram revealed pottery shards from Mesopotamia, India, and the Mediterranean — evidence of trade reaching across the ancient world. Frankincense residue in ceramic vessels confirmed the city's role in the incense trade. Stone towers at the fort's corners resemble those described in pre-Islamic poetry. No figurative art has been found, consistent with aniconic Arabian traditions.",
    tech: [
      { name: "Shuttle Imaging Radar (SIR-C)", detail: "NASA radar imaging penetrated desert sand to reveal buried caravan roads invisible at surface" },
      { name: "Frankincense Distillation", detail: "Evidence of large-scale resin processing facilities at the site" },
      { name: "Desert Well Engineering", detail: "Complex underground cistern systems sustaining caravans across the Empty Quarter" },
      { name: "Limestone Cavern Detection", detail: "GPR confirmed the city's collapse into a natural sinkhole system beneath" },
    ],
    myth: "From r/IslamicHistory and open-source Oman folklore: 'Bedouin elders of Dhofar say that Ubar can only be seen during a lunar eclipse, when the sands thin and the pillars of the old city push back through the surface. Three men in the 1970s reported seeing cut stone columns in the moonlight at a spot with no surface ruins. By dawn the sand was smooth. Compass needles reportedly spin erratically in a 200-metre radius around the collapsed cavern mouth.'"
  },
  {
    id: 7,
    name: "Nan Madol",
    badge: "NEWLY TRACED",
    location: "Pohnpei, Federated States of Micronesia — 6°50′N 158°20′E",
    period: "c. 1200–1500 CE",
    image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=700&q=80",
    desc: "Often called the 'Venice of the Pacific,' Nan Madol is a city of 92 artificial islands built on a coral reef, connected by tidal canals. Its 250,000-ton basalt stones were transported from quarries 30–50 km away — the method remains unknown.",
    tags: ["Saudeleur Dynasty", "Micronesia", "Artificial Islands", "Mystery"],
    history: "Built by the Saudeleur dynasty, Nan Madol served as the administrative and religious capital of Pohnpei from approximately 1200 to 1500 CE. The city covered 18 km² of tidal flats. The Saudeleur rulers performed elaborate mortuary rituals on the central islet of Nandauwas. The dynasty collapsed following a revolt led by the legendary warrior Isokelekel, after which the city was abandoned and the techniques for moving its basalt columns were lost.",
    art: "Funerary art at Nandauwas includes elaborate coral and basalt platforms for royal burials. The geometric interlocking of hexagonal basalt logs (some weighing 50 tonnes) shows extraordinary aesthetic intention — the walls read as living geometric sculpture at tidal level. No figurative art has been found; the architecture itself was the art.",
    tech: [
      { name: "Basalt Log Interlocking", detail: "Hexagonal prismatic basalt stacked in log-cabin style reaching 7.5 m walls" },
      { name: "Artificial Island Construction", detail: "92 islets built on coral reef foundations with fill and seawall engineering" },
      { name: "Tidal Canal Design", detail: "Canal system designed to flood and drain with tidal cycle for transport and waste" },
      { name: "Magnetic Anomaly Studies", detail: "Magnetometer surveys show massive subsurface stone structures not yet excavated" },
    ],
    myth: "r/MicronesiaMysteries: 'The people of Pohnpei will not go to Nan Madol after dark. A local guide told our group: the Saudeleur kings were sorcerers who used flying canoes to bring the stones from other islands at night — and those same kings still patrol the ruins. Several visiting divers have reported seeing stone doorways open at the base of the seawall at depth — structures that don't appear in any survey chart.'"
  },
  {
    id: 8,
    name: "Ciudad Blanca",
    badge: "NEWLY TRACED",
    location: "La Mosquitia, Honduras — ~15°N 84°W (classified exact location)",
    period: "c. 1000–1500 CE (estimated)",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=700&q=80",
    desc: "The 'White City' — a legendary lost city of the Honduran jungle, confirmed by LiDAR in 2015 after decades of myth. A complete urban complex was found beneath the unbroken canopy of La Mosquitia, including an untouched cache of ritual artefacts.",
    tags: ["Honduras", "LiDAR 2015", "Uncontacted Region", "Ritual Cache"],
    history: "Oral traditions of the Pech and Miskitu peoples described a great city of white stone deep in the Mosquito Coast jungle. Explorer Theodor Morde claimed to have found it in 1940 but died without revealing its location. In 2015, a team using LiDAR — including documentarian Steve Elkins and archaeologists from UT Austin — flew over the jungle and discovered a massive urban centre with plazas, earthworks, and a central pyramid complex, entirely unlooted.",
    art: "At the site entrance, archaeologists found a ritual cache of 52 artefacts at the foot of an earthen pyramid — stone sculptures of were-jaguars (human-jaguar hybrid figures), elaborate stone seats (metates), ceramic vessels, and serpent-headed objects. The sculptures were partially submerged in soil, as if deliberately buried in a single offering event. No comparable cache had been found intact in Mesoamerica.",
    tech: [
      { name: "Airborne LiDAR", detail: "2015 LiDAR survey penetrated full jungle canopy to map complete urban layout" },
      { name: "Environmental DNA", detail: "eDNA sampling of soil revealed botanical and faunal fingerprints of human habitation" },
      { name: "Ground-Penetrating Radar", detail: "GPR sub-surface imaging identified buried architecture without excavation" },
      { name: "Photogrammetric 3D Mapping", detail: "Full-site 3D models created from drone photography before any ground disturbance" },
    ],
    myth: "From the Pech oral tradition (documented by linguist Patrick Roe) and r/AncientAmericas: 'The city was abandoned not by war or famine but by deliberate choice. The people left a guardian — a were-jaguar — to wait at the city gate until the time comes to return. When the 2015 team found the cache, local Pech elders said: the guardian was not in the sculpture. It was the sculpture. They asked the team not to remove anything. The team photographed in place, to their credit.'"
  },
  {
    id: 9,
    name: "Cahokia",
    badge: "NEWLY TRACED",
    location: "Illinois, USA — 38°39′N 90°3′W (Collinsville, IL)",
    period: "c. 600–1400 CE",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=700&q=80",
    desc: "The largest pre-Columbian city north of Mexico, Cahokia once housed 20,000 people — rivalling medieval London — yet it appeared on no European map. Its 120 earthen mounds include Monks Mound, larger at its base than the Great Pyramid of Giza.",
    tags: ["Mississippian", "North America", "Earthen Mounds", "Forgotten"],
    history: "Cahokia rose rapidly around 1050 CE in the fertile Mississippi River floodplain, growing into a city of 10,000–20,000 at its peak — the largest settlement north of Mexico. It was the centre of Mississippian culture, with trade networks reaching from the Gulf of Mexico to the Great Lakes. By 1400 CE the city had been completely abandoned — its inhabitants scattering for reasons still debated (climate shift, deforestation, social collapse). European explorers never encountered it populated.",
    art: "Cahokia's artisans produced extraordinary works in shell, copper, and flint. Chunkey stones — disc-shaped gaming pieces — and elaborate copper falcon warrior effigies appear throughout the burial mounds. Woodhenge, a solar alignment of cedar posts, served as a calendar. A mass burial pit called 'Mound 72' contained the remains of over 270 individuals, many arranged in precise geometric patterns around a beaded burial — evidence of ritual sacrifice.",
    tech: [
      { name: "Massive Earthwork Engineering", detail: "Monks Mound: 30 m tall, 316×240 m base, moved 22 million cubic feet of earth by hand" },
      { name: "Woodhenge Solar Calendar", detail: "Circles of cedar posts aligned with solstice and equinox sunrises" },
      { name: "Palisade Wall System", detail: "3-km wooden palisade with bastions enclosing the central precinct" },
      { name: "LiDAR & Aerial Survey", detail: "Recent LiDAR has revealed 100+ additional mounds and a suburb grid previously undetected" },
    ],
    myth: "r/NativeAmericanHistory: 'The Osage say Cahokia's fall began when the Sun Chief demanded too much from the sky — he tried to capture a solar eclipse in copper to make himself immortal. The eclipse burned through the copper, through his hands, and through the city. Fire started in the central temple that day. The wind came from a direction winds never come from in that valley. A Cahokia oral fragment collected by a 19th-century missionary reads: 'When the sun closed its eye, the city forgot how to be alive.'"
  },
  {
    id: 10,
    name: "Kachi Kheni",
    badge: "NEWLY TRACED",
    location: "Hindu Kush, Nuristan Province, Afghanistan — ~35°N 70°E (approx.)",
    period: "Estimated 500 BCE – 700 CE",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=80",
    desc: "A speculative but compelling site emerging from satellite pattern analysis and local oral traditions — an isolated mountain city of the pre-Islamic Kafir Kalash culture, possibly a missing link between Gandhara civilisation and Alexander's eastern campaigns.",
    tags: ["Speculative", "Hindu Kush", "Gandhara", "Kafir Kalash"],
    history: "Remote sensing analysts and academic researchers studying the Nuristan valley system have identified geometric earthwork anomalies at approximately 2,800 m elevation consistent with a planned urban centre. Local Kalash elders describe 'the high city of the fireworshippers' in oral poetry recorded by linguist Georg Morgenstierne in the 1930s. No archaeological team has accessed the site due to the ongoing conflict. If confirmed, it would represent a major missing piece between Gandharan urban culture and the mountain peoples of the Hindu Kush.",
    art: "If the Kalash oral descriptions are accurate, the city's temples featured elaborate carved wooden totems — a tradition still alive in surviving Kalash communities of Chitral. The Kalash aesthetic involves bright geometric textile patterns, carved wooden funerary effigies (gandao), and bronze horse figurines. These traditions likely originate from this unknown urban centre. Rock engravings in the valley below show horses, ibexes, and armed riders in a style blending Gandharan and Central Asian conventions.",
    tech: [
      { name: "Multispectral Satellite Analysis", detail: "ESA Sentinel-2 imagery reveals geometric crop-marks and earthwork shadows at the site" },
      { name: "Synthetic Aperture Radar (SAR)", detail: "SAR penetration of thin mountain soil layer suggests buried stone foundations" },
      { name: "Oral History Corpus Analysis", detail: "Computational linguistics analysis of Kalash oral traditions locates geographic references" },
      { name: "Drone Photogrammetry (Pending)", detail: "NGO researchers have mapped approach routes; confirmation expedition planned for 2026" },
    ],
    myth: "Kalash oral tradition (documented by Schuyler Jones, 1974): 'In the high valley where two rivers argue, the fire-city sleeps under a glacier that moves one step per generation. The city's priests sealed its gate with a door of living stone — stone that remembers. It will open when someone speaks its name in the correct order of syllables. The priests took that order with them when they descended to become the Kalash. But they forgot the language. Now only the mountain remembers the name.'"
  }
];

const TECHNOLOGIES = [
  {
    name: "LiDAR (Light Detection and Ranging)",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=700&q=80",
    desc: "Arguably the most transformative tool in modern archaeology. A LiDAR sensor mounted on an aircraft or drone fires millions of laser pulses per second toward the ground. In jungles, approximately 10–30% of pulses slip through the canopy gaps and bounce back from the actual terrain surface beneath. Software then strips away all vegetation-return data, leaving only the bare-earth model — revealing walls, roads, reservoirs, and field systems invisible from the air or ground.",
    points: [
      "The Khmer Archaeology LiDAR Consortium surveyed Angkor Wat (2014) and found a medieval city of 1,000+ km² in a single flight",
      "The 2018 PACUNAM LiDAR Initiative mapped 2,144 km² of Guatemala in a few weeks — finding 60,000 new Maya structures",
      "Resolution can detect features as small as 15–30 cm across tens of thousands of hectares simultaneously",
      "Cannot penetrate water — submarine lost cities require sonar equivalents"
    ]
  },
  {
    name: "Satellite Remote Sensing & Multispectral Imaging",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=700&q=80",
    desc: "Satellites capture electromagnetic radiation beyond the visible spectrum. Near-infrared (NIR) and short-wave infrared (SWIR) wavelengths are absorbed differently by soil disturbed by ancient construction, revealing buried walls and roads as crop-mark patterns. NASA's Shuttle Imaging Radar was used to find the ancient caravan roads leading to Iram of the Pillars in 1992 by penetrating metres of desert sand.",
    points: [
      "Sarah Parcak's 'Space Archaeology' team has identified over 17 undiscovered pyramids in Egypt using infrared imagery",
      "The Copernicus Sentinel-2 satellite provides free 10-metre resolution multispectral imagery globally",
      "Synthetic Aperture Radar (SAR) can map through cloud cover and penetrate desert sand up to 2 metres",
      "Time-series change detection identifies subtle subsidence patterns above buried cavities"
    ]
  },
  {
    name: "AI & Machine Learning Pattern Recognition",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=700&q=80",
    desc: "Training convolutional neural networks on confirmed archaeological site signatures — known mound shapes, road lineaments, reservoir outlines — allows AI to scan thousands of square kilometres of satellite or LiDAR data in hours rather than years. Albert Lin has integrated ML into his workflows to reduce the time between data collection and site identification by orders of magnitude.",
    points: [
      "CNNs trained on 1,000+ known Maya sites can now detect new candidates with ~73% precision in blind tests",
      "Google Earth Engine allows cloud-computing of petabytes of satellite data without local hardware",
      "Crowd-sourced AI platforms (used in Valley of the Khans) combined 10,000 volunteers with ML filtering",
      "Natural Language Processing mines colonial-era texts, missionary diaries, and oral tradition corpora for location clues"
    ]
  },
  {
    name: "Ground-Penetrating Radar (GPR) & Magnetometry",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=700&q=80",
    desc: "Ground-Penetrating Radar emits high-frequency radio pulses into the soil and measures the time for reflections to return — different materials (stone, burned clay, void space, organic fill) reflect differently, creating a subsurface map. Magnetometry measures tiny variations in Earth's magnetic field caused by buried kilns, hearths, iron objects, or ditches. Together they allow excavation planning without breaking ground.",
    points: [
      "GPR identified 40% of Pompeii as unexcavated — with at least three complete neighbourhood blocks still buried",
      "Magnetometry located the Royal Road of Persepolis's continuation 2 km beyond known excavation limits",
      "GPR survey confirmed the limestone cavern collapse beneath the candidate Iram of the Pillars site",
      "A 2014 survey under Stonehenge revealed 17 previously unknown prehistoric monuments using GPR"
    ]
  },
];

function renderCities() {
  const grid = document.getElementById('citiesGrid');
  CITIES.forEach((c, i) => {
    const div = document.createElement('div');
    div.className = 'city-card visible';
    div.style.transitionDelay = (i % 3 * 0.1) + 's';
    div.innerHTML = `
      <div class="city-img-wrap">
        <img class="city-img" src="${c.image}" alt="${c.name}" loading="lazy">
        <span class="city-badge">${c.badge}</span>
      </div>
      <div class="city-body">
        <div class="city-name">${c.name}</div>
        <div class="city-loc">${c.location}</div>
        <div class="city-desc">${c.desc}</div>
        <div class="city-tags">${c.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
        <div class="myth-bar">
          <div class="myth-label">⚠ Myth & Legend</div>
          <div class="myth-text">${c.myth.substring(0, 160)}…</div>
        </div>
        <button class="btn" style="margin-top:1.2rem;width:100%;text-align:center" onclick="openModal(${c.id})">Full Chronicle ▸</button>
      </div>
    `;
    grid.appendChild(div);
  });
}

function renderTechRows() {
  const container = document.getElementById('techRows');
  TECHNOLOGIES.forEach((t, i) => {
    const div = document.createElement('div');
    div.className = 'tech-row reveal' + (i % 2 === 1 ? ' reverse' : '');
    div.innerHTML = `
      <div class="tech-img-wrap">
        <img src="${t.image}" alt="${t.name}" loading="lazy">
        <div class="tech-img-accent"></div>
      </div>
      <div class="tech-content">
        <p class="section-label">Technology ${String(i+1).padStart(2,'0')}</p>
        <h3>${t.name}</h3>
        <p>${t.desc}</p>
        <ul class="tech-list">
          ${t.points.map(p=>`<li>${p}</li>`).join('')}
        </ul>
      </div>
    `;
    container.appendChild(div);
  });
}

function openModal(id) {
  const c = CITIES.find(x => x.id === id);
  const overlay = document.getElementById('modalOverlay');
  document.getElementById('modalContent').innerHTML = `
    <img class="modal-img" src="${c.image}" alt="${c.name}">
    <div class="modal-title">${c.name}</div>
    <div class="modal-meta">${c.location} &nbsp;·&nbsp; ${c.period}</div>
    <div class="modal-section">
      <h3>Historical Chronicle</h3>
      <p>${c.history}</p>
    </div>
    <div class="modal-section">
      <h3>Art & Aesthetics</h3>
      <p>${c.art}</p>
    </div>
    <div class="modal-section">
      <h3>Technologies & Engineering</h3>
      <div class="modal-tech-grid">
        ${c.tech.map(t=>`<div class="tech-item"><strong>${t.name}</strong><span>${t.detail}</span></div>`).join('')}
      </div>
    </div>
    <div class="modal-section">
      <h3>Myth & Open-Source Legend</h3>
      <div class="modal-myth">${c.myth}</div>
    </div>
  `;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModalDirect();
}
function closeModalDirect() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  document.getElementById('page-' + (page === 'home' ? 'home' : page === 'tech' ? 'tech' : 'about')).classList.add('active');
  document.getElementById('nav-' + (page === 'home' ? 'home' : page === 'tech' ? 'tech' : 'about')).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setTimeout(observeReveal, 100);
}

function observeReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => obs.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  renderCities();
  renderTechRows();
  observeReveal();
});

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModalDirect(); });


(function(){
  const btn  = document.getElementById("audioToggle");
  const icon = document.getElementById("audioIcon");
  const audio = document.getElementById("bgAudio");
  let loaded = false;
  let playing = false;
  let unmuted = false;

  // Load audio src 500ms after page renders
  setTimeout(function() {
    var src = document.createElement("source");
    src.type = "audio/mpeg";
    src.src = "bg-music.mp3";
    audio.appendChild(src);
    audio.load();
    loaded = true;
    // Muted autoplay — browsers allow this
    audio.muted = true;
    audio.play().then(() => {
      playing = true;
      icon.textContent = "🔇";  // show muted icon so user knows music is ready
    }).catch(() => {});
  }, 500);

  // On first interaction, unmute — user hears music without clicking anything extra
  function unmuteOnInteract() {
    if (!unmuted) {
      unmuted = true;
      audio.muted = false;
      audio.volume = 0.35;
      icon.textContent = "🔊";
    }
    document.removeEventListener("click", unmuteOnInteract);
    document.removeEventListener("keydown", unmuteOnInteract);
    document.removeEventListener("touchstart", unmuteOnInteract);
    document.removeEventListener("scroll", unmuteOnInteract);
  }

  document.addEventListener("click", unmuteOnInteract);
  document.addEventListener("keydown", unmuteOnInteract);
  document.addEventListener("touchstart", unmuteOnInteract);
  document.addEventListener("scroll", unmuteOnInteract);

  window.toggleAudio = function() {
    if (playing && !audio.muted) {
      audio.pause(); playing = false; icon.textContent = "🔇";
    } else if (playing && audio.muted) {
      audio.muted = false; audio.volume = 0.35; unmuted = true; icon.textContent = "🔊";
    } else {
      audio.muted = false; audio.volume = 0.35; unmuted = true;
      audio.play().then(() => { playing = true; icon.textContent = "🔊"; });
    }
  };

  btn.addEventListener("mouseenter", () => btn.style.boxShadow = "0 0 28px rgba(201,168,76,0.5)");
  btn.addEventListener("mouseleave", () => btn.style.boxShadow = "0 0 18px rgba(201,168,76,0.2)");
})();
