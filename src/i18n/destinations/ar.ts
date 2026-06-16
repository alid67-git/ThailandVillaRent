import type { DestinationDictionary } from "./ui";

const ar: DestinationDictionary = {
  "kamala-beach": {
    name: "شاطئ Kamala",
    description:
      "خليج هادئ على الساحل الغربي بمياه صافية ونوادي شاطئية ومطاعم عند الغروب — أهدأ من Patong لكنه قريب من FantaSea.",
    bestFor: "العائلات · السباحة · الغروب",
    tips: "صل قبل الساعة 10:00 للمواقف. الطرف الشمالي أهدأ؛ الجنوبي قرب المطاعم.",
  },
  "surin-beach": {
    name: "شاطئ Surin",
    description: "شاطئ راقٍ بمياه صافية ومنتجعات فاخرة ونوادي شاطئية أنيقة.",
    bestFor: "السباحة · التصوير · مطاعم راقية",
    tips: "مزدحم في عطلة نهاية الأسبوع. اجمعه مع Bang Tao ليوم شاطئ كامل.",
  },
  "bang-tao-beach": {
    name: "شاطئ Bang Tao",
    description: "شاطئ رملي طويل بمنطقة منتجعات Laguna ونوادي شاطئية ورياضات مائية.",
    bestFor: "مشي طويل · رياضات مائية · منتجعات",
    tips: "منطقة Laguna فيها مقاهٍ وسبا. 6 كم من الرمال — استأجر كرسيّاً أو أحضر منشفة.",
  },
  "patong-beach": {
    name: "شاطئ Patong",
    description: "أكثر مدن الشواطئ حيوية في Phuket — سباحة وتسوق وحياة ليلية وBangla Road.",
    bestFor: "الحياة الليلية · التسوق · النشاط",
    tips: "ازدحام مروري مساءً. اركن قرب Jungceylon وامشِ إلى الشاطئ.",
  },
  "phuket-fantasea": {
    name: "Phuket FantaSea",
    description: "حديقة ثقافية بكرنفال وعشاء بوفيه وعرض ليلي مذهل.",
    bestFor: "العائلات · العرض المسائي · الثقافة",
    tips: "احجز تذاكر العرض مسبقاً. يبعد مسافة مشي من إقامات تلال Kamala.",
  },
  "kamala-market": {
    name: "سوق Kamala",
    description: "سوق محلي بطعام الشارع والهدايا التذكارية والمنتجات الطازجة — حيوي مساءً.",
    bestFor: "طعام الشارع · هدايا · الحياة المحلية",
    tips: "الأفضل بعد 17:00. يُفضَّل النقد. اجمعه مع عشاء في شاطئ Kamala.",
  },
  "big-buddha-phuket": {
    name: "Big Buddha (Phuket)",
    description: "تمثال بوذا رخامي بارتفاع 45 متراً على تل Nakkerd بإطلالة بانورامية على الجزيرة.",
    bestFor: "الإطلالات · الثقافة · التصوير",
    tips: "لباس محتشم (الأكتاف والركبتان مغطاة). ضوء الصباح الأفضل للتصوير.",
  },
  "old-phuket-town": {
    name: "مدينة Phuket القديمة",
    description: "عمارة صينية-برتغالية ومقاهٍ وفن الشارع وسوق المشاة يوم الأحد.",
    bestFor: "الثقافة · الطعام · التصوير",
    tips: "سوق الأحد 16:00–22:00. اركن عند Robinson أو امشِ من مواقف Thalang Rd.",
  },
  "wat-chalong": {
    name: "Wat Chalong",
    description: "أكبر وأهم مجمع معابد بوذية في Phuket.",
    bestFor: "الثقافة · زيارة المعبد · التاريخ",
    tips: "اخلع حذاءك قبل دخول القاعات. دخول مجاني؛ التبرعات مرحب بها.",
  },
  "promthep-cape": {
    name: "Promthep Cape",
    description: "أقصى نقطة جنوبية في Phuket — نقطة مشهورة لمشاهدة الغروب فوق بحر أندامان.",
    bestFor: "الغروب · التصوير · الرومانسية",
    tips: "صل قبل الغروب بـ 45 دقيقة. مزدحم جداً في عطلة نهاية الأسبوع — أيام الأسبوع أهدأ.",
  },
  "phi-phi-day-trip": {
    name: "جزر Phi Phi (رحلة يومية)",
    description: "رحلة يومية بقارب سريع أو عبّارة إلى Maya Bay وViking Cave والبحيرات الفيروزية.",
    bestFor: "الغطس · جولة الجزر · يوم كامل",
    tips: "احجز الجولات من Rassada Pier أو عبر الإنترنت. موسم الجفاف (نوف–أبريل) أهدأ بحاراً.",
  },
  "bang-pae-elephant": {
    name: "Baanchanghai Elephant Lovers",
    description: "تجربة أفيال أخلاقية قرب Kamala — برامج إطعام واستحمام.",
    bestFor: "العائلات · الحياة البرية · نصف يوم",
    tips: "احجز جلسات الصباح. ارتدِ ملابس لا تمانع من تبليلها.",
  },
  "chaweng-beach": {
    name: "شاطئ Chaweng",
    description: "أكثر شواطئ Koh Samui حيوية — رمال طويلة وحانات وتسوق ورياضات مائية.",
    bestFor: "الحياة الليلية · السباحة · التسوق",
    tips: "وسط Chaweng فيه أكثر النشاط. الطرف الشمالي أهدأ قليلاً.",
  },
  "bo-phut-beach": {
    name: "شاطئ Bo Phut",
    description: "خليج هادئ بجانب Fisherman's Village بمياه ضحلة ورصيف خشبي.",
    bestFor: "العائلات · Fisherman's Village · الغروب",
    tips: "سوق ليلي يوم الجمعة في Fisherman's Village. تاكسي سهل من منطقة المطار.",
  },
  "fishermans-village": {
    name: "Fisherman's Village",
    description: "شارع مشاة تاريخي في Bophut بمتاجر بوتيك ومطاعم مأكولات بحرية وسوق ليلي.",
    bestFor: "الطعام · التسوق · سوق الجمعة",
    tips: "سوق الجمعة 17:00–23:00. احجز المطاعم في ليالي السوق.",
  },
  "big-buddha-samui": {
    name: "معبد Big Buddha (Samui)",
    description: "تمثال بوذا ذهبي بارتفاع 12 متراً يُرى من الجو — معبد بإطلالة على الجزيرة.",
    bestFor: "الثقافة · الإطلالات · التصوير",
    tips: "صعود قصير من موقف السيارات. لباس محتشم. دخول مجاني.",
  },
  "wat-plai-laem": {
    name: "Wat Plai Laem",
    description: "معبد ملون على ضفة البحيرة بتمثال Guanyin وBig Buddha قريباً.",
    bestFor: "الثقافة · التصوير · زيارة سهلة",
    tips: "اجمعه مع Big Buddha — يفصلهما 5 دقائق. صناديق تبرعات عند المدخل.",
  },
  "lamai-beach": {
    name: "شاطئ Lamai",
    description: "ثاني أكبر شاطئ في Samui بصخور Hin Ta Hin Yai وحانات وأجواء مريحة.",
    bestFor: "السباحة · صخور Hin Ta · الطعام",
    tips: "زر Hin Ta Hin Yai في الصباح الباكر. Lamai night plaza لطعام الشارع.",
  },
  "maenam-beach": {
    name: "شاطئ Maenam",
    description: "شاطئ هادئ على الساحل الشمالي بإطلالة على Koh Phangan — شائع لإقامات طويلة.",
    bestFor: "إقامة هادئة · الغروب · الاسترخاء",
    tips: "أقل ازدحاماً من Chaweng. عدة مطاعم على الشاطئ.",
  },
  "ang-thong-park": {
    name: "Ang Thong Marine Park",
    description: "منتزه وطني من 42 جزيرة — تجديف بالكاياك ومسار إلى نقطة مشاهدة وبحيرة زمردية.",
    bestFor: "يوم كامل · الغطس · الطبيعة",
    tips: "الجولات تنطلق من Nathon أو Bophut. احجز مسبقاً في الموسم العالي.",
  },
  "natien-beach": {
    name: "شاطئ Natien",
    description: "شاطئ جنوبي منعزل في Samui قرب حديقة الفراشات — هادئ وغير مزدحم.",
    bestFor: "سباحة هادئة · الطبيعة · حديقة الفراشات",
    tips: "اجمعه مع منطقة Samui Natien Village. مرافق محدودة — أحضر ماءً.",
  },
};

export default ar;
