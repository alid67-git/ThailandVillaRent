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
};

export default en;
