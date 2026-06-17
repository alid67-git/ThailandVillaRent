import type { DestinationDictionary } from "./ui";

const en: DestinationDictionary = {
  "kamala-beach": {
    name: "Kamala Beach",
    description:
      "A relaxed west-coast bay with calm water, beach clubs and sunset dining — quieter than Patong but close to FantaSea.",
    bestFor: "Families · Swimming · Sunset",
    tips: "Arrive before 10:00 for parking. North end is quieter; south is near restaurants.",
  },
  "surin-beach": {
    name: "Surin Beach",
    description: "Upscale beach with clear water, luxury resorts and stylish beach clubs.",
    bestFor: "Swimming · Photos · Upscale dining",
    tips: "Weekends get busy. Combine with Bang Tao for a full beach day.",
  },
  "bang-tao-beach": {
    name: "Bang Tao Beach",
    description: "Long sandy beach with Laguna resort area, beach clubs and water sports.",
    bestFor: "Long walks · Water sports · Resorts",
    tips: "Laguna area has cafes and spas. 6 km of sand — rent a sunbed or bring a towel.",
  },
  "patong-beach": {
    name: "Patong Beach",
    description: "Phuket's busiest beach town — swimming, shopping, nightlife and Bangla Road.",
    bestFor: "Nightlife · Shopping · Action",
    tips: "Expect traffic evenings. Park near Jungceylon mall and walk to the beach.",
  },
  "phuket-fantasea": {
    name: "Phuket FantaSea",
    description: "Cultural theme park with carnival, buffet dinner and spectacular night show.",
    bestFor: "Families · Evening show · Culture",
    tips: "Book show tickets in advance. Walking distance from Kamala hillside stays.",
  },
  "kamala-market": {
    name: "Kamala Market",
    description: "Local market with street food, souvenirs and fresh produce — lively in evenings.",
    bestFor: "Street food · Souvenirs · Local life",
    tips: "Best after 17:00. Cash preferred. Combine with Kamala Beach dinner.",
  },
  "big-buddha-phuket": {
    name: "Big Buddha (Phuket)",
    description: "45-metre marble Buddha on Nakkerd Hill with panoramic island views.",
    bestFor: "Views · Culture · Photography",
    tips: "Dress modestly (shoulders/knees covered). Morning light is best for photos.",
  },
  "old-phuket-town": {
    name: "Old Phuket Town",
    description: "Sino-Portuguese architecture, cafés, street art and Sunday walking street market.",
    bestFor: "Culture · Food · Photography",
    tips: "Sunday market 16:00–22:00. Park at Robinson or walk from parking lots on Thalang Rd.",
  },
  "wat-chalong": {
    name: "Wat Chalong",
    description: "Phuket's largest and most important Buddhist temple complex.",
    bestFor: "Culture · Temple visit · History",
    tips: "Remove shoes before entering halls. Free entry; donations welcome.",
  },
  "promthep-cape": {
    name: "Promthep Cape",
    description: "Phuket's southernmost point — famous sunset viewpoint over the Andaman Sea.",
    bestFor: "Sunset · Photography · Romance",
    tips: "Arrive 45 min before sunset. Very crowded on weekends — weekdays are calmer.",
  },
  "phi-phi-day-trip": {
    name: "Phi Phi Islands (day trip)",
    description: "Speedboat or ferry day trip to Maya Bay, Viking Cave and turquoise lagoons.",
    bestFor: "Snorkelling · Island hopping · Full day",
    tips: "Book tours from Rassada Pier or online. Dry season (Nov–Apr) has calmest seas.",
  },
  "bang-pae-elephant": {
    name: "Baanchanghai Elephant Lovers",
    description: "Ethical elephant sanctuary experience near Kamala — feeding and bathing programs.",
    bestFor: "Families · Wildlife · Half day",
    tips: "Book morning sessions. Wear clothes you don't mind getting wet.",
  },
  "chaweng-beach": {
    name: "Chaweng Beach",
    description: "Koh Samui's liveliest beach — long sand, bars, shopping and water sports.",
    bestFor: "Nightlife · Swimming · Shopping",
    tips: "Central Chaweng has most action. North end is slightly quieter.",
  },
  "bo-phut-beach": {
    name: "Bo Phut Beach",
    description: "Calm bay next to Fisherman's Village with shallow water and wooden pier.",
    bestFor: "Families · Fisherman's Village · Sunset",
    tips: "Friday night market in Fisherman's Village. Easy taxi from airport area.",
  },
  "fishermans-village": {
    name: "Fisherman's Village",
    description: "Historic Bophut walking street with boutiques, seafood restaurants and night market.",
    bestFor: "Dining · Shopping · Friday market",
    tips: "Friday market 17:00–23:00. Reserve restaurants on market nights.",
  },
  "big-buddha-samui": {
    name: "Big Buddha Temple (Samui)",
    description: "12-metre golden Buddha visible from the air — temple with island views.",
    bestFor: "Culture · Views · Photography",
    tips: "Short climb from parking. Dress modestly. Free entry.",
  },
  "wat-plai-laem": {
    name: "Wat Plai Laem",
    description: "Colourful lakeside temple with Guanyin statue and Big Buddha nearby.",
    bestFor: "Culture · Photography · Easy visit",
    tips: "Combine with Big Buddha — 5 min apart. Donation boxes at entrance.",
  },
  "lamai-beach": {
    name: "Lamai Beach",
    description: "Second-largest Samui beach with Hin Ta Hin Yai rocks, bars and relaxed vibe.",
    bestFor: "Swimming · Hin Ta rocks · Dining",
    tips: "Visit Hin Ta Hin Yai early morning. Lamai night plaza for street food.",
  },
  "maenam-beach": {
    name: "Maenam Beach",
    description: "Quiet north-coast beach with views of Koh Phangan — popular with long-stay guests.",
    bestFor: "Quiet stays · Sunset · Relaxation",
    tips: "Less crowded than Chaweng. Several beachfront restaurants.",
  },
  "ang-thong-park": {
    name: "Ang Thong Marine Park",
    description: "42-island national park — kayaking, viewpoint hike and emerald lagoon.",
    bestFor: "Full day · Snorkelling · Nature",
    tips: "Tours depart from Nathon or Bophut. Book ahead in high season.",
  },
  "natien-beach": {
    name: "Natien Beach",
    description: "Secluded south Samui beach near butterfly garden — calm and uncrowded.",
    bestFor: "Quiet swim · Nature · Butterfly garden",
    tips: "Combine with Samui Natien Village area. Limited facilities — bring water.",
  },
  "railay-beach": {
    name: "Railay Beach",
    description:
      "Towering limestone cliffs frame this Andaman bay — reachable only by longtail boat from Ao Nang or Krabi Town. A world-class rock-climbing hub with turquoise water, caves and laid-back beach bars.",
    bestFor: "Rock climbing · Beach · Boat access",
    tips: "Last boats back to Ao Nang leave around sunset. No roads reach Railay — pack light.",
  },
  "ao-nang-beach": {
    name: "Ao Nang Beach",
    description:
      "Krabi's main resort strip stretches along a lively bay with restaurants, shops and sunset views. Longtail boats depart from the pier to Railay, Phi Phi and Hong Island.",
    bestFor: "Resort base · Island boats · Sunset",
    tips: "Negotiate boat prices at the pier or book shared tours. Evening market along the promenade.",
  },
  "phra-nang-cave": {
    name: "Phra Nang Cave Beach",
    description:
      "A stunning crescent beach on the Railay peninsula named for a sacred cave shrine. Crystal-clear water, dramatic karst walls and one of Krabi's most photographed shores.",
    bestFor: "Swimming · Photography · Short hike",
    tips: "Walk from East Railay in 10–15 minutes or arrive by boat. Respect the cave shrine — offerings only.",
  },
  "tiger-cave-temple": {
    name: "Tiger Cave Temple (Wat Tham Suea)",
    description:
      "A forest temple crowned by a golden chedi after 1,237 steep steps through jungle. Panoramic views over Krabi town, mangroves and distant islands reward the climb.",
    bestFor: "Hiking · Views · Temple visit",
    tips: "Start early to avoid heat. Wear trainers — steps are steep and can be slippery after rain.",
  },
  "emerald-pool": {
    name: "Emerald Pool (Sa Morakot)",
    description:
      "A vivid jade-coloured natural pool in Khao Phra Bang Khram jungle, fed by a mineral spring. A boardwalk trail leads through rainforest to the famous Blue Pool nearby.",
    bestFor: "Nature · Swimming · Half day",
    tips: "Do not swim in the Blue Pool — it is protected. Arrive before 10:00 to beat tour groups.",
  },
  "doi-suthep": {
    name: "Doi Suthep Temple",
    description:
      "Chiang Mai's iconic mountaintop temple gleams with gold and overlooks the entire valley. Naga-flanked stairs and a sacred chedi draw pilgrims and visitors from across Thailand.",
    bestFor: "Culture · Views · Photography",
    tips: "Dress modestly and remove shoes in temple halls. Morning visits are cooler and less crowded.",
  },
  "old-city-chiang-mai": {
    name: "Chiang Mai Old City",
    description:
      "A moated square of ancient walls enclosing dozens of temples, boutique cafes and craft shops. Wander tree-lined lanes between Wat Chedi Luang, Wat Phra Singh and Sunday markets.",
    bestFor: "Culture · Cafes · Temple hopping",
    tips: "Rent a bicycle to explore the moat loop. Many temples are free; donations welcome.",
  },
  "sunday-walking-street": {
    name: "Sunday Walking Street",
    description:
      "Ratchadamnoen Road transforms into Chiang Mai's largest open-air market every Sunday evening. Street food, handicrafts, live music and temple-lit atmosphere fill the old city.",
    bestFor: "Street food · Shopping · Night out",
    tips: "Starts around 16:00 and peaks after 19:00. Go hungry — dozens of food stalls line the road.",
  },
  "doi-inthanon": {
    name: "Doi Inthanon National Park",
    description:
      "Thailand's highest peak rises above cloud forests, twin pagodas and cascading waterfalls. Hmong and Karen villages dot the slopes with coffee stalls and cool mountain air.",
    bestFor: "Nature · Waterfalls · Full day",
    tips: "Bring a jacket — summit temperatures can drop to 10°C. Park entry fee applies per vehicle.",
  },
  "sticky-waterfall": {
    name: "Bua Tong Sticky Waterfall",
    description:
      "A unique cascade of porous limestone you can climb barefoot — the rock grips like velcro. Shaded forest pools and picnic spots make it a family favourite near Chiang Mai.",
    bestFor: "Families · Adventure · Nature",
    tips: "Wear swimwear and bring a towel. Weekday mornings are quietest.",
  },
  "grand-palace": {
    name: "Grand Palace & Wat Phra Kaew",
    description:
      "Bangkok's dazzling royal complex houses the Emerald Buddha and ornate throne halls. Centuries of Thai craftsmanship in gold, mosaic and mural make it the capital's must-see landmark.",
    bestFor: "Culture · History · Architecture",
    tips: "Strict dress code — covered shoulders and knees. Arrive at opening time to avoid heat and crowds.",
  },
  "wat-arun": {
    name: "Wat Arun (Temple of Dawn)",
    description:
      "A riverside spire of porcelain-encrusted prangs glows at sunrise and sunset on the Chao Phraya. Climb the steep central prang for sweeping views of the Old City skyline.",
    bestFor: "Sunrise · Photography · Riverside",
    tips: "Take the cross-river ferry from Tha Tien pier. Best light is early morning or late afternoon.",
  },
  "chatuchak-market": {
    name: "Chatuchak Weekend Market",
    description:
      "One of the world's largest markets with over 15,000 stalls across 27 acres. Everything from vintage clothing and plants to street food and antiques — a Bangkok institution since 1942.",
    bestFor: "Shopping · Street food · Bargains",
    tips: "Open Saturday and Sunday 09:00–18:00. Use section numbers on the map — easy to get lost.",
  },
  "asiatique-riverfront": {
    name: "Asiatique The Riverfront",
    description:
      "A converted warehouse district on the Chao Phraya with night market stalls, restaurants and a ferris wheel. Free shuttle boat from Saphan Taksin BTS pier adds to the riverside atmosphere.",
    bestFor: "Night market · Dining · Ferris wheel",
    tips: "Opens from 16:00. Combine with a dinner cruise or Wat Arun visit across the river.",
  },
  "walking-street-pattaya": {
    name: "Walking Street Pattaya",
    description:
      "Pattaya's famous neon-lit strip at the south end of Beach Road — go-go bars, live music and street performers. The pedestrian zone buzzes from dusk until the early hours.",
    bestFor: "Nightlife · Entertainment · People-watching",
    tips: "Pedestrian-only after 18:00. Taxis and baht buses drop off at the north entrance.",
  },
  "koh-larn": {
    name: "Koh Larn (Coral Island)",
    description:
      "A quick ferry ride from Pattaya Bali Hai pier to turquoise bays and white sand. Tawaen, Nual and Samae beaches offer snorkelling, jet skis and beach chairs for a classic day trip.",
    bestFor: "Day trip · Snorkelling · Beach",
    tips: "First ferry around 07:00 — earlier means quieter beaches. Rent a scooter to reach hidden coves.",
  },
  "sanctuary-of-truth": {
    name: "Sanctuary of Truth",
    description:
      "An all-teak temple rising 105 metres by the sea — every surface hand-carved with Hindu and Buddhist motifs. Still under construction after decades, it remains one of Pattaya's most striking sights.",
    bestFor: "Architecture · Photography · Culture",
    tips: "Guided tours included in entry. Dress modestly — sarongs provided at the gate.",
  },
  "jomtien-beach": {
    name: "Jomtien Beach",
    description:
      "A long, family-friendly beach south of central Pattaya with calmer water and fewer crowds. Beachfront seafood restaurants, water sports and a relaxed promenade stretch for kilometres.",
    bestFor: "Families · Swimming · Seafood",
    tips: "Less hectic than Pattaya Beach. Baht buses run regularly along Jomtien Beach Road.",
  },
  "haad-rin-beach": {
    name: "Haad Rin Beach",
    description:
      "The south-tip beach famous for the Full Moon Party — powder sand and shallow turquoise bays by day. Coconut groves and beach bars line the coast between sunrise and sunset sessions.",
    bestFor: "Parties · Beach · Nightlife",
    tips: "Quiet mid-month; busiest around full moon. Book accommodation early for party weekends.",
  },
  "bottle-beach": {
    name: "Bottle Beach",
    description:
      "A secluded north-coast cove on Koh Phangan reached only by longtail boat or a jungle trek. Pristine sand, calm water and a handful of bungalows make it ideal for unplugging.",
    bestFor: "Seclusion · Snorkelling · Relaxation",
    tips: "Boats depart from Chaloklum or Thong Nai Pan. No ATM on the beach — bring cash.",
  },
  "than-sadet-waterfall": {
    name: "Than Sadet Waterfall",
    description:
      "A series of rock pools and cascades in east-coast jungle where Thai kings once bathed. Royal inscriptions carved in stone date back to the Rama V era.",
    bestFor: "Nature · Hiking · History",
    tips: "Road is rough — 4x4 or motorbike recommended. Combine with east-coast beaches.",
  },
  "sairee-beach": {
    name: "Sairee Beach",
    description:
      "Koh Tao's main beach curves along the west coast with dive schools, bars and golden sand. Sunset views, beachfront dining and the island's best nightlife concentrate here.",
    bestFor: "Diving · Beach · Nightlife",
    tips: "Book dive courses in advance during peak season. South end is quieter for swimming.",
  },
  "shark-bay-tao": {
    name: "Shark Bay (Koh Tao)",
    description:
      "A sheltered bay on the south coast where blacktip reef sharks cruise shallow water. Snorkel from the beach or kayak across calm turquoise shallows fringed by coral.",
    bestFor: "Snorkelling · Wildlife · Kayaking",
    tips: "Sharks are harmless reef species — observe without touching. Morning visibility is best.",
  },
  "pattaya-beach-lipe": {
    name: "Pattaya Beach (Koh Lipe)",
    description:
      "Koh Lipe's main beach and walking street hub — turquoise water, longtail boats and island cafes. The island's ferry pier, restaurants and shops cluster along this lively strip.",
    bestFor: "Island base · Swimming · Dining",
    tips: "Busiest beach on Lipe — walk 10 minutes to quieter Sunrise or Sunset beaches.",
  },
  "sunrise-beach-lipe": {
    name: "Sunrise Beach (Koh Lipe)",
    description:
      "The east-facing shore catches first light over the Tarutao islands — calm mornings and clear shallows. Chao Ley village and small resorts line this quieter alternative to Pattaya Beach.",
    bestFor: "Sunrise · Snorkelling · Quiet stays",
    tips: "Wake early for empty sand and glassy water. Snorkel straight off the beach at low tide.",
  },
  "ayutthaya-historical-park": {
    name: "Ayutthaya Historical Park",
    description:
      "UNESCO-listed ruins of Thailand's ancient capital — brick prangs, Buddha statues and temple foundations spread across an island between three rivers. A day trip from Bangkok into 400 years of Siamese history.",
    bestFor: "History · Temple ruins · Photography",
    tips: "Rent a bicycle to cover the park. Start at Wat Mahathat and Wat Phra Si Sanphet.",
  },
  "wat-mahathat": {
    name: "Wat Mahathat",
    description:
      "Ayutthaya's most photographed site — a serene Buddha head entwined in banyan tree roots. Once the kingdom's spiritual centre, the temple grounds hold dozens of ruined chedis and headless statues.",
    bestFor: "History · Photography · Iconic sight",
    tips: "Visit early morning for photos without crowds. Stay on paths — ruins are fragile.",
  },
  "pai-canyon": {
    name: "Pai Canyon",
    description:
      "Red sandstone ridges and narrow ridges create a dramatic mini-canyon above the Mae Hong Son valley. Sunset turns the rock golden — a short hike from the car park rewards with sweeping views.",
    bestFor: "Sunset · Hiking · Views",
    tips: "Narrow paths with steep drops — wear proper shoes. Arrive 45 minutes before sunset.",
  },
  "pam-bok-waterfall": {
    name: "Pam Bok Waterfall",
    description:
      "A jungle waterfall with natural rock slides and emerald pools a short ride from Pai town. Less crowded than Mor Paeng, it is a local favourite for cooling off on hot afternoons.",
    bestFor: "Swimming · Nature · Half day",
    tips: "Scooter or songthaew from Pai — road is narrow. Bring water shoes for slippery rocks.",
  },
  "hua-hin-beach": {
    name: "Hua Hin Beach",
    description:
      "The long sandy shore of Thailand's original royal resort town — calm Gulf water, horse rides and seafood stalls. A classic family beach with a century of holiday tradition.",
    bestFor: "Families · Swimming · Seafood",
    tips: "Weekends get busy with Bangkok visitors. South end near Khao Takiab is quieter.",
  },
  "karon-beach": {
    name: "Karon Beach",
    description:
      "A long golden beach south of Patong with calmer water, resort hotels and a relaxed family atmosphere. The wide sand strip suits swimming, parasailing and sunset walks without Patong's nightlife intensity.",
    bestFor: "Families · Swimming · Sunset",
    tips: "South end near Kata is quieter. Rent sunbeds near the main road access points.",
  },
  "kata-beach": {
    name: "Kata Beach",
    description:
      "A picturesque bay framed by forested headlands — clear water, surf in season and a compact village of cafes and shops. One of Phuket's most photogenic beaches with a lively but manageable crowd.",
    bestFor: "Swimming · Surfing · Photography",
    tips: "Kata Noi, a smaller cove to the south, is even quieter. Parking fills up on weekends.",
  },
  "nai-harn-beach": {
    name: "Nai Harn Beach",
    description:
      "A sheltered southern bay with calm turquoise water, pine-shaded sand and a peaceful village feel. Locals and long-stay visitors favour it for swimming and paddleboarding away from the west-coast bustle.",
    bestFor: "Swimming · Paddleboarding · Quiet beach",
    tips: "Combine with Promthep Cape for sunset. Limited parking — arrive before 10:00.",
  },
  "freedom-beach-phuket": {
    name: "Freedom Beach",
    description:
      "A hidden white-sand cove reached only by longtail boat or a steep jungle trail — crystal water and dramatic cliffs. One of Phuket's most pristine beaches with no road access.",
    bestFor: "Snorkelling · Secluded beach · Photography",
    tips: "Boats leave from Patong or Tri Trang. Bring cash for boat fare and beach chairs.",
  },
  "rawai-beach": {
    name: "Rawai Beach",
    description:
      "A working southern shore where colourful longtail boats line the sand and seafood restaurants serve the day's catch. Gateway to nearby islands — hire a boat for half-day trips to Coral Island or Racha.",
    bestFor: "Boat trips · Seafood · Local life",
    tips: "Not ideal for swimming — use it as a pier base. Negotiate boat prices before boarding.",
  },
  "monkey-hill-phuket": {
    name: "Monkey Hill (Toh Sae)",
    description:
      "A forested hill above Phuket Town where wild macaques gather along the roadside viewpoint. Panoramic views over the city, harbour and bay reward the short drive or hike to the top.",
    bestFor: "Views · Wildlife · Short visit",
    tips: "Do not feed or tease monkeys — keep bags zipped. Best visited in morning light.",
  },
  "simon-cabaret-phuket": {
    name: "Simon Cabaret",
    description:
      "Phuket's flagship cabaret theatre — elaborate costumes, choreography and a glamorous evening show in a modern auditorium. A polished entertainment staple for visitors seeking a fun night out.",
    bestFor: "Evening show · Entertainment · Groups",
    tips: "Book tickets with hotel pickup for convenience. Shows run nightly — arrive 30 min early.",
  },
  "chillva-market": {
    name: "Chillva Market",
    description:
      "A trendy night market in Phuket Town with shipping-container stalls, live music and creative street food. Younger crowds and locals mix here on evenings when the containers light up.",
    bestFor: "Street food · Night market · Local vibe",
    tips: "Open Mon, Wed and Sat evenings. Park at nearby lots on Yaowarat Road.",
  },
  "naiyang-beach": {
    name: "Nai Yang Beach",
    description:
      "A peaceful national-park beach near the airport — long sand shaded by casuarina pines and calm shallows. Sea turtles nest here in season, and the setting feels worlds away from Patong.",
    bestFor: "Quiet beach · Nature · Families",
    tips: "Respect turtle nesting zones Nov–Feb. Ideal for a pre-flight beach stop.",
  },
  "mai-khao-beach": {
    name: "Mai Khao Beach",
    description:
      "Phuket's longest and quietest beach stretches along the northwest coast — endless sand, minimal development and planes descending overhead. A wild, empty shore perfect for long walks.",
    bestFor: "Long walks · Solitude · Plane spotting",
    tips: "Almost no shade or facilities — bring water and sun protection. Strong currents at times.",
  },
  "lipa-noi-beach": {
    name: "Lipa Noi Beach",
    description:
      "A tranquil west-coast bay on Koh Samui with shallow calm water and golden sunsets over the Ang Thong islands. Low-key resorts and beachfront dining make it ideal for peaceful stays.",
    bestFor: "Sunset · Families · Quiet stays",
    tips: "Shallow water suits children. Combine with a sunset dinner at a beachfront restaurant.",
  },
  "silver-beach-samui": {
    name: "Silver Beach (Thong Takhian)",
    description:
      "A small hidden cove on Samui's east coast — powdery sand, clear water and a handful of boutique resorts. One of the island's prettiest and least crowded swimming beaches.",
    bestFor: "Swimming · Secluded beach · Romance",
    tips: "Access via resort roads — public entry allowed on the beach. Snorkel at the rocky ends.",
  },
  "namuang-waterfall": {
    name: "Na Muang Waterfall",
    description:
      "Samui's most famous cascade tumbles through jungle with two tiers and natural pools for swimming. Elephant rides and zipline adventures operate nearby in the forested interior.",
    bestFor: "Waterfall · Swimming · Nature",
    tips: "Wear grippy shoes — rocks are slippery. Second tier requires a 30-minute hike uphill.",
  },
  "overlap-stone-samui": {
    name: "Overlap Stone (Samui)",
    description:
      "A dramatic rock outcrop on a cliff edge where visitors pose on a cantilevered boulder above the sea. Thrilling photos and sweeping south-coast views from this Instagram-famous viewpoint.",
    bestFor: "Photography · Views · Adventure",
    tips: "Not for those afraid of heights. Small entry fee; go early to avoid queues.",
  },
  "secret-garden-samui": {
    name: "Secret Buddha Garden",
    description:
      "A mystical hilltop garden deep in Samui's interior — stone statues, waterfalls and lush jungle at 300 metres elevation. Created by a local fruit farmer, it feels like a hidden spiritual retreat.",
    bestFor: "Culture · Nature · Off the beaten path",
    tips: "Reachable only by 4WD or sturdy scooter — road is steep and rough. Combine with Na Muang.",
  },
  "koh-poda": {
    name: "Koh Poda",
    description:
      "A small limestone island with a perfect white-sand beach and iconic karst backdrop — the classic Krabi postcard scene. Day trips include snorkelling, lunch and time to swim in emerald shallows.",
    bestFor: "Island hopping · Snorkelling · Photography",
    tips: "Join a four-island tour from Ao Nang or Railay. Dry season has calmest crossings.",
  },
  "koh-hong-krabi": {
    name: "Koh Hong (Krabi)",
    description:
      "A stunning lagoon island enclosed by vertical cliffs — paddle a kayak through mangroves into an inner emerald pool. Part of Than Bok Khorani National Park with pristine beaches and clear water.",
    bestFor: "Kayaking · Lagoon · Island hopping",
    tips: "Tours include kayak use inside the lagoon. No overnight stays — day trip only.",
  },
  "tubkaek-beach": {
    name: "Tubkaek Beach",
    description:
      "A quiet northern Krabi beach backed by jungle and luxury resorts — calm water, long sand and views of offshore islands. A refined alternative to busy Ao Nang for relaxed swimming.",
    bestFor: "Quiet beach · Resorts · Swimming",
    tips: "Limited public access points — use resort beach clubs or the main public car park.",
  },
  "ao-thalane": {
    name: "Ao Thalane",
    description:
      "A mangrove-lined inlet south of Krabi — kayak through limestone caves, tidal channels and monkey-filled forests. One of southern Thailand's best paddle experiences in sheltered calm water.",
    bestFor: "Kayaking · Mangroves · Nature",
    tips: "Book a guided kayak tour for cave routes. Morning low tide reveals more channels.",
  },
  "klong-muang-beach": {
    name: "Klong Muang Beach",
    description:
      "An upscale stretch of sand north of Ao Nang with five-star resorts, calm swimming and views toward the Krabi islands. Wide beach, soft sand and a quieter atmosphere than central Ao Nang.",
    bestFor: "Swimming · Resorts · Families",
    tips: "Sunset views toward Koh Kai. Public beach access at the south end near Centara.",
  },
  "warorot-market": {
    name: "Warorot Market",
    description:
      "Chiang Mai's oldest and most authentic market — spices, textiles, flowers and northern Thai street food under one roof. A sensory dive into local daily life along the Ping River.",
    bestFor: "Street food · Local shopping · Culture",
    tips: "Best in early morning for fresh produce. Night bazaar stalls extend along Chang Moi Road.",
  },
  "doi-pui-village": {
    name: "Doi Pui Hmong Village",
    description:
      "A hill-tribe village on Doi Suthep mountain with craft stalls, coffee shops and cool mountain air. Cultural displays and panoramic views over Chiang Mai valley from 1,400 metres.",
    bestFor: "Culture · Mountain views · Cool climate",
    tips: "Combine with Wat Phra That Doi Suthep on the same trip. Bring a light jacket — it is cooler up top.",
  },
  "nimman-road": {
    name: "Nimman Road",
    description:
      "Chiang Mai's trendiest neighbourhood — boutique cafes, art galleries, cocktail bars and creative street life. The city's modern face contrasts with the old walled city just minutes away.",
    bestFor: "Cafes · Shopping · Nightlife",
    tips: "Best explored on foot in late afternoon into evening. Soi side streets hide the best spots.",
  },
  "art-in-paradise-cm": {
    name: "Art in Paradise (Chiang Mai)",
    description:
      "An interactive 3D art museum where painted illusions invite playful photography on walls and floors. Family-friendly fun in air-conditioned comfort — a rainy-day favourite in Chiang Mai.",
    bestFor: "Families · Photography · Indoor activity",
    tips: "Allow 1–2 hours. Camera phone is all you need — follow floor markers for best angles.",
  },
  "san-kamphaeng-hot-springs": {
    name: "San Kamphaeng Hot Springs",
    description:
      "Natural mineral springs in the countryside east of Chiang Mai — boil eggs in thermal pools and soak feet in terraced stone baths. A relaxing half-day escape surrounded by gardens and forest.",
    bestFor: "Hot springs · Families · Half day",
    tips: "Buy a basket of eggs at the entrance to cook in the hottest pool. Pools are too hot for full bathing.",
  },
  "wat-pho": {
    name: "Wat Pho",
    description:
      "Bangkok's Temple of the Reclining Buddha — a 46-metre gold-plated statue in Thailand's largest temple complex. Birthplace of traditional Thai massage with a renowned massage school on site.",
    bestFor: "Culture · Temple · Massage",
    tips: "Visit early morning to avoid heat and crowds. Dress modestly and remove shoes in halls.",
  },
  "lumpini-park": {
    name: "Lumpini Park",
    description:
      "Bangkok's green lung — 142 acres of lakes, jogging paths, monitor lizards and tai chi at dawn. An oasis of calm amid skyscrapers in the heart of the business district.",
    bestFor: "Walking · Nature · Morning activity",
    tips: "Best at sunrise or late afternoon. Paddle boats available on the main lake weekends.",
  },
  "iconsiam": {
    name: "ICONSIAM",
    description:
      "A riverside mega-mall on the Chao Phraya with luxury brands, an indoor floating market and spectacular evening fountain shows. Modern Bangkok at its most polished — dining, shopping and river views.",
    bestFor: "Shopping · Dining · River views",
    tips: "Take the free shuttle boat from Sathorn Pier. Evening light show runs on the riverfront.",
  },
  "mahanakhon-skywalk": {
    name: "Mahanakhon SkyWalk",
    description:
      "A glass-floor observation deck atop Bangkok's tallest building — 314 metres above the city with 360-degree views. Thrilling transparent walkway and rooftop bar for sunset cocktails.",
    bestFor: "Views · Photography · Sunset",
    tips: "Book timed tickets online. Sunset slot sells out — arrive 30 min before your entry.",
  },
  "jim-thompson-house": {
    name: "Jim Thompson House",
    description:
      "A preserved teakwood compound showcasing traditional Thai architecture and the silk empire of an American expat legend. Guided tours reveal antiques, gardens and the mystery of his disappearance.",
    bestFor: "Culture · History · Architecture",
    tips: "Guided tours only — buy tickets at the entrance. Combine with nearby Siam shopping.",
  },
  "nong-nooch-garden": {
    name: "Nong Nooch Tropical Garden",
    description:
      "A vast landscaped garden near Pattaya with themed sections, elephant shows and cultural performances. Orchids, bonsai, French-formal gardens and a skywalk over the canopy.",
    bestFor: "Families · Gardens · Shows",
    tips: "Allow a full day. Schedule includes elephant and cultural shows at set times.",
  },
  "mini-siam-pattaya": {
    name: "Mini Siam",
    description:
      "A miniature park displaying scaled replicas of Thailand's and the world's famous landmarks. A quirky half-day attraction — photograph the Eiffel Tower beside Angkor Wat in one stroll.",
    bestFor: "Families · Photography · Half day",
    tips: "Best visited in late afternoon when lighting is softer. Allow 1–2 hours on foot.",
  },
  "ko-sichang": {
    name: "Ko Sichang",
    description:
      "A quiet Gulf island once favoured by Thai royalty — cliffside temples, old palaces and a laid-back fishing village atmosphere. A peaceful day trip from Pattaya without the tourist crowds.",
    bestFor: "Island day trip · History · Quiet escape",
    tips: "Ferry from Sriracha pier takes about 40 min. Rent a golf cart to explore the island.",
  },
  "pratumnak-viewpoint": {
    name: "Pratumnak Viewpoint",
    description:
      "A hilltop lookout between Pattaya and Jomtien with panoramic views over the bay, city skyline and offshore islands. Big Buddha statue nearby and a popular sunset spot away from beach noise.",
    bestFor: "Views · Sunset · Photography",
    tips: "Short climb from the road or drive to the car park. Combine with the Big Buddha temple.",
  },
  "zen-beach": {
    name: "Zen Beach (Koh Tao)",
    description:
      "A small rocky cove on Koh Tao's northwest tip — clear water, snorkelling and a bohemian beach bar vibe. Sunset views and a relaxed crowd make it a favourite for divers' days off.",
    bestFor: "Snorkelling · Sunset · Chill vibe",
    tips: "Short scooter ride from Sairee. Rocky entry — water shoes help.",
  },
  "khao-rae-viewpoint": {
    name: "Khao Rae Viewpoint",
    description:
      "A jungle viewpoint on Koh Tao's east coast overlooking a heart-shaped bay and turquoise shallows. A short hike through forest rewards with one of the island's most dramatic panoramas.",
    bestFor: "Hiking · Views · Photography",
    tips: "Trail can be muddy after rain — wear trainers. Go in morning for best light.",
  },
  "salad-bay": {
    name: "Salad Bay (Koh Tao)",
    description:
      "A sheltered north-coast bay with calm clear water, coral reefs and a handful of quiet resorts. One of Koh Tao's best snorkelling beaches without the Sairee crowds.",
    bestFor: "Snorkelling · Quiet beach · Swimming",
    tips: "Rent snorkel gear from your resort. Kayak to nearby Shark Island at calm tide.",
  },
  "john-suwan-viewpoint": {
    name: "John-Suwan Viewpoint",
    description:
      "A famous twin-bay lookout on Koh Tao's south tip — steep 10-minute climb to a rocky perch above two turquoise bays. Essential Koh Tao photo stop with sweeping coastal views.",
    bestFor: "Views · Photography · Short hike",
    tips: "Wear proper shoes — final section is rocky. Mid-morning avoids harsh overhead sun.",
  },
  "mango-bay-tao": {
    name: "Mango Bay (Koh Tao)",
    description:
      "A secluded north-shore cove reachable by boat or a jungle trail — emerald water, reef fish and a peaceful atmosphere. Popular with snorkelling tours stopping for an hour of swimming.",
    bestFor: "Snorkelling · Secluded beach · Boat trip",
    tips: "No facilities on shore — bring water and sun protection. Boat tours from Mae Haad.",
  },
  "ao-leuk-tao": {
    name: "Ao Leuk (Koh Tao)",
    description:
      "A protected bay on the east coast with some of Koh Tao's clearest snorkelling — coral gardens just metres from the sand. Calm mornings and a small beach restaurant make it an easy half-day.",
    bestFor: "Snorkelling · Swimming · Families",
    tips: "Arrive before 10:00 for best visibility. Snorkel along the rocky southern edge.",
  },
  "karma-beach-lipe": {
    name: "Karma Beach (Koh Lipe)",
    description:
      "A small secluded beach on the island's west side — soft sand, clear water and a boutique resort atmosphere. Quieter than Pattaya Beach with excellent sunset views over the Andaman.",
    bestFor: "Sunset · Quiet beach · Romance",
    tips: "Walk or longtail from Pattaya Beach. Beach is public even near resort loungers.",
  },
  "walking-street-lipe": {
    name: "Walking Street (Koh Lipe)",
    description:
      "Koh Lipe's evening pedestrian strip — seafood grills, cocktail bars, live music and island shopping from dusk onward. The social heart of the island when the sun goes down.",
    bestFor: "Dining · Nightlife · Island life",
    tips: "Opens around 18:00 on Pattaya Beach. Cash useful for street food stalls.",
  },
  "bang-pa-in-palace": {
    name: "Bang Pa-In Palace",
    description:
      "A riverside royal summer palace near Ayutthaya blending Thai, Chinese and European architecture across manicured gardens. Ornate pavilions, a floating throne hall and lakeside strolls in a serene setting.",
    bestFor: "History · Architecture · Gardens",
    tips: "Dress code enforced — no shorts or sleeveless tops. Rent appropriate cover at the gate.",
  },
  "wat-chaiwatthanaram": {
    name: "Wat Chaiwatthanaram",
    description:
      "A magnificent Khmer-style temple ruin on the Chao Phraya riverbank — symmetrical prangs and Buddha statues glow at sunset. One of Ayutthaya's most photogenic and historically significant sites.",
    bestFor: "History · Sunset · Photography",
    tips: "Visit at golden hour for the best light. Bicycle or tuk-tuk from Ayutthaya centre.",
  },
  "yun-lai-viewpoint": {
    name: "Yun Lai Viewpoint",
    description:
      "A misty mountain lookout above Pai with panoramic views over the valley and layered hills at sunrise. Chinese tea pavilions and a sea of clouds on cool mornings create a magical atmosphere.",
    bestFor: "Sunrise · Views · Photography",
    tips: "Drive or scooter up before dawn — road is steep. Bring warm layers; it is cold at sunrise.",
  },
  "tha-pai-hot-springs": {
    name: "Tha Pai Hot Springs",
    description:
      "Natural hot mineral pools in the forest south of Pai — soak in terraced rock baths surrounded by bamboo and jungle. A soothing stop on the Mae Hong Son loop road.",
    bestFor: "Hot springs · Nature · Relaxation",
    tips: "Small entry fee. Pools vary in temperature — test before fully immersing.",
  },
  "cicada-market-hua-hin": {
    name: "Cicada Market",
    description:
      "An arts-and-crafts weekend market in Hua Hin with live music, handmade goods and gourmet street food. A sophisticated market experience popular with Bangkok weekenders.",
    bestFor: "Arts · Street food · Weekend market",
    tips: "Open Fri–Sun evenings only. Combine with a Hua Hin beach dinner afterward.",
  },
  "khao-sam-roi-yot": {
    name: "Khao Sam Roi Yot National Park",
    description:
      "A coastal national park south of Hua Hin — limestone peaks, mangroves and the famous Phraya Nakhon Cave with a royal pavilion inside. Wildlife, beaches and hiking trails in one compact park.",
    bestFor: "Hiking · Caves · Nature",
    tips: "Phraya Nakhon Cave needs a 30-min hike — go early before heat. Boat option across the lagoon.",
  },
  "white-sand-beach-koh-chang": {
    name: "White Sand Beach (Koh Chang)",
    description:
      "Koh Chang's busiest and most developed beach — long white sand, beach bars, restaurants and water sports along a lively strip. The island's main hub with the widest dining and nightlife choice.",
    bestFor: "Swimming · Nightlife · Island base",
    tips: "North end is quieter. Songthaew connects to other beaches along the coastal road.",
  },
  "lonely-beach-koh-chang": {
    name: "Lonely Beach (Koh Chang)",
    description:
      "A bohemian west-coast bay that lives up to its name — backpacker bars, rustic bungalows and a relaxed party vibe. Sunset sessions and fire shows draw a younger, laid-back crowd.",
    bestFor: "Backpackers · Sunset · Nightlife",
    tips: "Road is steep and winding — scooter with experience recommended. Quieter on weekday mornings.",
  },
  "klong-plu-waterfall": {
    name: "Klong Plu Waterfall",
    description:
      "The most accessible waterfall on Koh Chang — a 20-minute jungle walk to a tiered cascade with a natural swimming pool. Popular midday escape from the beach heat.",
    bestFor: "Waterfall · Swimming · Jungle walk",
    tips: "200 baht national park fee. Wear grippy shoes — trail can be muddy in rainy season.",
  },
  "bang-bao-pier": {
    name: "Bang Bao Pier",
    description:
      "A charming fishing village built on stilts at Koh Chang's southern tip — seafood restaurants, souvenir shops and snorkelling boat departures. A photogenic waterfront and gateway to nearby islets.",
    bestFor: "Seafood · Boat trips · Photography",
    tips: "Lunch at a pier restaurant is a must. Book snorkelling trips to Koh Wai or Koh Rang.",
  },
  "sai-kaew-beach": {
    name: "Sai Kaew Beach (Koh Samet)",
    description:
      "The liveliest beach on Koh Samet — white sand, beach bars, fire shows and swimming in clear Gulf water. The island's main arrival point with the densest restaurant and resort scene.",
    bestFor: "Swimming · Nightlife · Beach bars",
    tips: "Weekends are packed from Bangkok. Walk south for slightly quieter sections.",
  },
  "ao-prao-beach": {
    name: "Ao Prao Beach",
    description:
      "An exclusive west-coast bay on Koh Samet with calm water, soft sand and upscale resort ambience. One of the island's prettiest and quietest swimming beaches with excellent sunset views.",
    bestFor: "Quiet beach · Swimming · Resorts",
    tips: "Access through Le Vimarn or Ao Prao Resort day-pass. Less crowded than Sai Kaew.",
  },
  "samet-viewpoint": {
    name: "Samet Viewpoint",
    description:
      "A hilltop lookout on Koh Samet with panoramic views over the Gulf, nearby islands and the island's forested interior. A short climb from Ao Noi Na rewards with breezy coastal vistas.",
    bestFor: "Views · Photography · Short hike",
    tips: "Best at sunset. Bring insect repellent — mosquitos at dusk.",
  },
  "bridge-river-kwai": {
    name: "Bridge on the River Kwai",
    description:
      "The famous WWII railway bridge at Kanchanaburi — walk the iron spans over the Kwai River and visit the adjacent war museum. A poignant historical landmark and symbol of the Death Railway.",
    bestFor: "History · WWII · Photography",
    tips: "Trains still cross — watch for schedules. Combine with JEATH War Museum nearby.",
  },
  "erawan-waterfall": {
    name: "Erawan Waterfall",
    description:
      "A seven-tiered emerald cascade in Erawan National Park — turquoise pools, jungle trails and fish that nibble your feet. One of Thailand's most beautiful and accessible waterfalls.",
    bestFor: "Waterfall · Swimming · Hiking",
    tips: "Arrive at park opening (8:00) to beat crowds. Upper tiers require steeper climbs.",
  },
  "sai-yok-national-park": {
    name: "Sai Yok National Park",
    description:
      "A river valley park in Kanchanaburi with waterfalls, limestone caves and remnant Death Railway tracks along the Kwai Noi. Nature, history and quiet jungle trails west of the main tourist circuit.",
    bestFor: "Nature · History · Caves",
    tips: "Stay at a riverside raft house for the full experience. Lawa Cave needs a guide and headlamp.",
  },
  "hellfire-pass": {
    name: "Hellfire Pass",
    description:
      "A moving memorial cutting through solid rock where Allied POWs built the Death Railway by hand. An audio-guided walking trail through the jungle conveys the scale of wartime suffering.",
    bestFor: "History · WWII · Memorial",
    tips: "Pick up the free audio guide at the museum. Allow 1–2 hours for the walk.",
  },
  "james-bond-island": {
    name: "James Bond Island (Koh Tapu)",
    description:
      "The iconic limestone sea stack from The Man with the Golden Gun rising from Phang Nga Bay. A classic longtail boat tour stop with karst scenery, caves and floating village visits.",
    bestFor: "Island hopping · Photography · Boat tour",
    tips: "Book tours from Phuket or Krabi. Go early to avoid peak midday boat traffic.",
  },
  "koh-panyee": {
    name: "Koh Panyee",
    description:
      "A remarkable Muslim fishing village built entirely on stilts over the water in Phang Nga Bay. A floating football pitch, seafood lunch and a glimpse of centuries-old island community life.",
    bestFor: "Culture · Seafood · Boat tour",
    tips: "Included on most James Bond Island tours. Respect local customs — modest dress appreciated.",
  },
  "samet-nangshe-viewpoint": {
    name: "Samet Nangshe Viewpoint",
    description:
      "A breathtaking sunrise lookout over Phang Nga Bay's karst islands shrouded in morning mist. Bamboo huts and a steep 10-minute climb deliver one of southern Thailand's iconic panoramas.",
    bestFor: "Sunrise · Views · Photography",
    tips: "Leave hotel by 5:00 for sunrise. Bamboo huts rent overnight for astrophotography.",
  },
  "koh-yao-noi": {
    name: "Koh Yao Noi",
    description:
      "A peaceful island between Phuket and Krabi with rice paddies, fishing villages and uncrowded beaches facing Phang Nga Bay. Slow island life, kayaking and views of James Bond Island from the east shore.",
    bestFor: "Quiet island · Kayaking · Local life",
    tips: "Ferry from Bang Rong Pier (Phuket) or Ao Nang. Rent a scooter to explore the island.",
  },
};

export default en;
