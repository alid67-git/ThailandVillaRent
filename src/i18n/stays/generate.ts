import type { Locale } from "@/i18n/config";
import type { StayCatalogItem, StayContent, StayPropertyType } from "@/data/stays/types";
import type { Messages } from "@/i18n/messages/tr";
import { dictionaries } from "@/i18n";

type Dict = Messages;

const TYPE_LABELS: Record<Locale, Record<StayPropertyType, string>> = {
  en: {
    villa: "Villa",
    bungalow: "Bungalow",
    "pool-villa": "Pool Villa",
  },
  tr: {
    villa: "Villa",
    bungalow: "Bungalov",
    "pool-villa": "Havuzlu Villa",
  },
  de: {
    villa: "Villa",
    bungalow: "Bungalow",
    "pool-villa": "Poolvilla",
  },
  fr: {
    villa: "Villa",
    bungalow: "Bungalow",
    "pool-villa": "Villa avec piscine",
  },
  ru: {
    villa: "Вилла",
    bungalow: "Бунгало",
    "pool-villa": "Вилла с бассейном",
  },
  th: {
    villa: "วิลล่า",
    bungalow: "บังกะโล",
    "pool-villa": "วิลล่าพร้อมสระ",
  },
  ar: {
    villa: "فيلا",
    bungalow: "بنغل",
    "pool-villa": "فيلا مع مسبح",
  },
  zh: {
    villa: "别墅",
    bungalow: "bungalow",
    "pool-villa": "泳池别墅",
  },
};

const AREA_LABELS: Record<Locale, Record<string, string>> = {
  en: {
    kamala: "Kamala", karon: "Karon", kata: "Kata", bangtao: "Bang Tao", rawai: "Rawai",
    boPhut: "Bo Phut", maenam: "Maenam", chaweng: "Chaweng", lamai: "Lamai",
    aoNang: "Ao Nang", railay: "Railay", tubkaek: "Tubkaek", klongMuang: "Klong Muang",
    oldCity: "Old City", nimman: "Nimman", doiSuthep: "Doi Suthep",
    sukhumvit: "Sukhumvit", riverside: "Riverside", sathorn: "Sathorn",
    jomtien: "Jomtien", central: "Central Pattaya", naklua: "Naklua",
    haadRin: "Haad Rin", bottleBeach: "Bottle Beach", thongSala: "Thong Sala",
    sairee: "Sairee", maeHaad: "Mae Haad",
    pattayaBeach: "Pattaya Beach", sunriseBeach: "Sunrise Beach",
    centre: "City Centre", khaoTakiab: "Khao Takiab",
    whiteSand: "White Sand", lonelyBeach: "Lonely Beach",
    riverKwai: "River Kwai", erawan: "Erawan",
  },
  tr: {
    kamala: "Kamala", karon: "Karon", kata: "Kata", bangtao: "Bang Tao", rawai: "Rawai",
    boPhut: "Bo Phut", maenam: "Maenam", chaweng: "Chaweng", lamai: "Lamai",
    aoNang: "Ao Nang", railay: "Railay", tubkaek: "Tubkaek", klongMuang: "Klong Muang",
    oldCity: "Eski Şehir", nimman: "Nimman", doiSuthep: "Doi Suthep",
    sukhumvit: "Sukhumvit", riverside: "Nehir Kenarı", sathorn: "Sathorn",
    jomtien: "Jomtien", central: "Merkez Pattaya", naklua: "Naklua",
    haadRin: "Haad Rin", bottleBeach: "Bottle Beach", thongSala: "Thong Sala",
    sairee: "Sairee", maeHaad: "Mae Haad",
    pattayaBeach: "Pattaya Plajı", sunriseBeach: "Sunrise Plajı",
    centre: "Şehir Merkezi", khaoTakiab: "Khao Takiab",
    whiteSand: "White Sand", lonelyBeach: "Lonely Beach",
    riverKwai: "Kwai Nehri", erawan: "Erawan",
  },
  de: {
    kamala: "Kamala", karon: "Karon", kata: "Kata", bangtao: "Bang Tao", rawai: "Rawai",
    boPhut: "Bo Phut", maenam: "Maenam", chaweng: "Chaweng", lamai: "Lamai",
    aoNang: "Ao Nang", railay: "Railay", tubkaek: "Tubkaek", klongMuang: "Klong Muang",
    oldCity: "Altstadt", nimman: "Nimman", doiSuthep: "Doi Suthep",
    sukhumvit: "Sukhumvit", riverside: "Flussufer", sathorn: "Sathorn",
    jomtien: "Jomtien", central: "Pattaya Zentrum", naklua: "Naklua",
    haadRin: "Haad Rin", bottleBeach: "Bottle Beach", thongSala: "Thong Sala",
    sairee: "Sairee", maeHaad: "Mae Haad",
    pattayaBeach: "Pattaya Beach", sunriseBeach: "Sunrise Beach",
    centre: "Stadtzentrum", khaoTakiab: "Khao Takiab",
    whiteSand: "White Sand", lonelyBeach: "Lonely Beach",
    riverKwai: "River Kwai", erawan: "Erawan",
  },
  fr: {
    kamala: "Kamala", karon: "Karon", kata: "Kata", bangtao: "Bang Tao", rawai: "Rawai",
    boPhut: "Bo Phut", maenam: "Maenam", chaweng: "Chaweng", lamai: "Lamai",
    aoNang: "Ao Nang", railay: "Railay", tubkaek: "Tubkaek", klongMuang: "Klong Muang",
    oldCity: "Vieille ville", nimman: "Nimman", doiSuthep: "Doi Suthep",
    sukhumvit: "Sukhumvit", riverside: "Bords de rivière", sathorn: "Sathorn",
    jomtien: "Jomtien", central: "Centre Pattaya", naklua: "Naklua",
    haadRin: "Haad Rin", bottleBeach: "Bottle Beach", thongSala: "Thong Sala",
    sairee: "Sairee", maeHaad: "Mae Haad",
    pattayaBeach: "Pattaya Beach", sunriseBeach: "Sunrise Beach",
    centre: "Centre-ville", khaoTakiab: "Khao Takiab",
    whiteSand: "White Sand", lonelyBeach: "Lonely Beach",
    riverKwai: "River Kwai", erawan: "Erawan",
  },
  ru: {
    kamala: "Камала", karon: "Карон", kata: "Ката", bangtao: "Банг Тао", rawai: "Равай",
    boPhut: "Бо Пхут", maenam: "Маенам", chaweng: "Чавенг", lamai: "Ламай",
    aoNang: "Ао Нанг", railay: "Райли", tubkaek: "Тубкаек", klongMuang: "Клонг Муанг",
    oldCity: "Старый город", nimman: "Нимман", doiSuthep: "Дой Сутеп",
    sukhumvit: "Сукхумвит", riverside: "Набережная", sathorn: "Сатхорн",
    jomtien: "Джомтьен", central: "Центр Паттайи", naklua: "Наклуа",
    haadRin: "Хаад Рин", bottleBeach: "Боттл Бич", thongSala: "Тонг Сала",
    sairee: "Сайри", maeHaad: "Мэ Хаад",
    pattayaBeach: "Паттайя Бич", sunriseBeach: "Санрайз Бич",
    centre: "Центр", khaoTakiab: "Као Такиаб",
    whiteSand: "Уайт Сэнд", lonelyBeach: "Лонли Бич",
    riverKwai: "Река Квай", erawan: "Эраван",
  },
  th: {
    kamala: "กมลา", karon: "กะรน", kata: "กะตะ", bangtao: "บางเทา", rawai: "ราไวย์",
    boPhut: "โบภูต", maenam: "แม่น้ำ", chaweng: "เฉลิง", lamai: "ละไม",
    aoNang: "อ่าวนาง", railay: "ไร่เลย์", tubkaek: "ทับแขก", klongMuang: "คลองม่วง",
    oldCity: "เมืองเก่า", nimman: "นิมมาน", doiSuthep: "ดอยสุเทพ",
    sukhumvit: "สุขุมวิท", riverside: "ริมแม่น้ำ", sathorn: "สาทร",
    jomtien: "จอมเทียน", central: "พัทยากลาง", naklua: "นาเกลือ",
    haadRin: "หาดริ้น", bottleBeach: "หาดขวด", thongSala: "ท้องศาลา",
    sairee: "สายรี", maeHaad: "แม่หาด",
    pattayaBeach: "หาดพัทยา", sunriseBeach: "หาดอรุณ",
    centre: "ใจกลางเมือง", khaoTakiab: "เขาตะเกียบ",
    whiteSand: "หาดทรายขาว", lonelyBeach: "หาดลี้ลับ",
    riverKwai: "แม่น้ำแคว", erawan: "เอราวัณ",
  },
  ar: {
    kamala: "كامالا", karon: "كارون", kata: "كاتا", bangtao: "بانغ تاو", rawai: "راواي",
    boPhut: "بو فوت", maenam: "ماينام", chaweng: "تشاوينغ", lamai: "لاماي",
    aoNang: "أو نانغ", railay: "رايلاي", tubkaek: "توبكيك", klongMuang: "كلوغ موانغ",
    oldCity: "المدينة القديمة", nimman: "نيمان", doiSuthep: "دوي سوتيب",
    sukhumvit: "سوخومفيت", riverside: "الواجهة النهرية", sathorn: "ساثورن",
    jomtien: "جومتين", central: "وسط باتايا", naklua: "ناكلوا",
    haadRin: "هاد رين", bottleBeach: "شاطئ الزجاجة", thongSala: "ثونغ سالا",
    sairee: "سايري", maeHaad: "ماي هاد",
    pattayaBeach: "شاطئ باتايا", sunriseBeach: "شاطئ الشروق",
    centre: "وسط المدينة", khaoTakiab: "خاو تاكياب",
    whiteSand: "الرمال البيضاء", lonelyBeach: "الشاطئ المنعزل",
    riverKwai: "نهر كواي", erawan: "إيراوان",
  },
  zh: {
    kamala: "卡马拉", karon: "卡伦", kata: "卡塔", bangtao: "邦涛", rawai: "拉威",
    boPhut: "波普", maenam: "湄南", chaweng: "查汶", lamai: "拉迈",
    aoNang: "奥南", railay: "莱利", tubkaek: "图布克", klongMuang: "空芒",
    oldCity: "古城", nimman: "宁曼", doiSuthep: "素贴山",
    sukhumvit: "素坤逸", riverside: "河畔", sathorn: "沙吞",
    jomtien: "仲天", central: "芭提雅中心", naklua: "那库鲁阿",
    haadRin: "哈林", bottleBeach: "瓶子海滩", thongSala: "通萨拉",
    sairee: "塞瑞", maeHaad: "迈哈德",
    pattayaBeach: "芭提雅海滩", sunriseBeach: "日出海滩",
    centre: "市中心", khaoTakiab: "考塔基布",
    whiteSand: "白沙滩", lonelyBeach: "孤独海滩",
    riverKwai: "桂河", erawan: "爱侣湾",
  },
};

const HIGHLIGHTS: Record<Locale, Record<string, string>> = {
  en: {
    pool: "Scenic outdoor pool", garden: "Garden", bbq: "Barbecue", kitchen: "Kitchen",
    parking: "Free parking", wifi: "Free Wi-Fi", beach: "Near the beach",
    breakfast: "Breakfast available", privatePool: "Private pool", oceanfront: "Oceanfront",
    balcony: "Private balcony", spa: "Spa & wellness", beachfront: "Beachfront",
    restaurant: "On-site restaurant",
  },
  tr: {
    pool: "Açık havuz", garden: "Bahçe", bbq: "Barbekü", kitchen: "Mutfak",
    parking: "Ücretsiz otopark", wifi: "Ücretsiz Wi-Fi", beach: "Plaja yakın",
    breakfast: "Kahvaltı", privatePool: "Özel havuz", oceanfront: "Deniz kenarı",
    balcony: "Balkon", spa: "Spa", beachfront: "Sahil kenarı",
    restaurant: "Restoran",
  },
  de: {
    pool: "Außenpool", garden: "Garten", bbq: "Grill", kitchen: "Küche",
    parking: "Gratis Parkplatz", wifi: "Gratis WLAN", beach: "Nahe Strand",
    breakfast: "Frühstück", privatePool: "Privater Pool", oceanfront: "Meerblick",
    balcony: "Balkon", spa: "Spa", beachfront: "Strandlage",
    restaurant: "Restaurant",
  },
  fr: {
    pool: "Piscine extérieure", garden: "Jardin", bbq: "Barbecue", kitchen: "Cuisine",
    parking: "Parking gratuit", wifi: "Wi-Fi gratuit", beach: "Près de la plage",
    breakfast: "Petit-déjeuner", privatePool: "Piscine privée", oceanfront: "Front de mer",
    balcony: "Balcon", spa: "Spa", beachfront: "Bord de plage",
    restaurant: "Restaurant",
  },
  ru: {
    pool: "Бассейн", garden: "Сад", bbq: "Барбекю", kitchen: "Кухня",
    parking: "Парковка", wifi: "Wi-Fi", beach: "Рядом с пляжем",
    breakfast: "Завтрак", privatePool: "Частный бассейн", oceanfront: "У океана",
    balcony: "Балкон", spa: "Спа", beachfront: "На пляже",
    restaurant: "Ресторан",
  },
  th: {
    pool: "สระว่ายน้ำ", garden: "สวน", bbq: "บาร์บีคิว", kitchen: "ครัว",
    parking: "ที่จอดรถฟรี", wifi: "Wi-Fi ฟรี", beach: "ใกล้ชายหาด",
    breakfast: "อาหารเช้า", privatePool: "สระส่วนตัว", oceanfront: "ริมทะเล",
    balcony: "ระเบียง", spa: "สปา", beachfront: "ริมหาด",
    restaurant: "ร้านอาหาร",
  },
  ar: {
    pool: "مسبح خارجي", garden: "حديقة", bbq: "شواء", kitchen: "مطبخ",
    parking: "موقف مجاني", wifi: "واي فاي مجاني", beach: "قرب الشاطئ",
    breakfast: "إفطار", privatePool: "مسبح خاص", oceanfront: "واجهة بحرية",
    balcony: "شرفة", spa: "سبا", beachfront: "على الشاطئ",
    restaurant: "مطعم",
  },
  zh: {
    pool: "室外泳池", garden: "花园", bbq: "烧烤", kitchen: "厨房",
    parking: "免费停车", wifi: "免费Wi-Fi", beach: "近海滩",
    breakfast: "早餐", privatePool: "私人泳池", oceanfront: "海滨",
    balcony: "阳台", spa: "水疗", beachfront: "海滩front",
    restaurant: "餐厅",
  },
};

const AMENITIES: Record<Locale, Record<string, string>> = {
  en: {
    pool: "Swimming pool", wifi: "Wi-Fi", parking: "Parking", garden: "Garden",
    airCon: "Air conditioning", breakfast: "Breakfast", luggage: "Luggage storage",
    privatePool: "Private pool", spa: "Spa", restaurant: "Restaurant",
    kitchen: "Kitchen", laundry: "Laundry", bar: "Bar", safe: "Safe",
  },
  tr: {
    pool: "Havuz", wifi: "Wi-Fi", parking: "Otopark", garden: "Bahçe",
    airCon: "Klima", breakfast: "Kahvaltı", luggage: "Bagaj",
    privatePool: "Özel havuz", spa: "Spa", restaurant: "Restoran",
    kitchen: "Mutfak", laundry: "Çamaşırhane", bar: "Bar", safe: "Kasa",
  },
  de: {
    pool: "Pool", wifi: "WLAN", parking: "Parkplatz", garden: "Garten",
    airCon: "Klimaanlage", breakfast: "Frühstück", luggage: "Gepäckaufbewahrung",
    privatePool: "Privatpool", spa: "Spa", restaurant: "Restaurant",
    kitchen: "Küche", laundry: "Wäscherei", bar: "Bar", safe: "Safe",
  },
  fr: {
    pool: "Piscine", wifi: "Wi-Fi", parking: "Parking", garden: "Jardin",
    airCon: "Climatisation", breakfast: "Petit-déjeuner", luggage: "Consigne",
    privatePool: "Piscine privée", spa: "Spa", restaurant: "Restaurant",
    kitchen: "Cuisine", laundry: "Blanchisserie", bar: "Bar", safe: "Coffre",
  },
  ru: {
    pool: "Бассейн", wifi: "Wi-Fi", parking: "Парковка", garden: "Сад",
    airCon: "Кондиционер", breakfast: "Завтрак", luggage: "Камера хранения",
    privatePool: "Частный бассейн", spa: "Спа", restaurant: "Ресторан",
    kitchen: "Кухня", laundry: "Прачечная", bar: "Бар", safe: "Сейф",
  },
  th: {
    pool: "สระว่ายน้ำ", wifi: "Wi-Fi", parking: "ที่จอดรถ", garden: "สวน",
    airCon: "เครื่องปรับอากาศ", breakfast: "อาหารเช้า", luggage: "ฝากกระเป๋า",
    privatePool: "สระส่วนตัว", spa: "สปา", restaurant: "ร้านอาหาร",
    kitchen: "ครัว", laundry: "ซักรีด", bar: "บาร์", safe: "ตู้เซฟ",
  },
  ar: {
    pool: "مسبح", wifi: "واي فاي", parking: "موقف", garden: "حديقة",
    airCon: "تكييف", breakfast: "إفطار", luggage: "تخزين الأمتعة",
    privatePool: "مسبح خاص", spa: "سبا", restaurant: "مطعم",
    kitchen: "مطبخ", laundry: "غسيل", bar: "بار", safe: "خزنة",
  },
  zh: {
    pool: "游泳池", wifi: "Wi-Fi", parking: "停车", garden: "花园",
    airCon: "空调", breakfast: "早餐", luggage: "行李寄存",
    privatePool: "私人泳池", spa: "水疗", restaurant: "餐厅",
    kitchen: "厨房", laundry: "洗衣", bar: "酒吧", safe: "保险箱",
  },
};

const COPY: Record<
  Locale,
  {
    tagline: (type: string, area: string) => string;
    desc: (type: string, area: string, region: string, rooms: number) => string;
    long: (type: string, area: string, region: string) => string;
    rating: (r: number) => string;
    roomName: (type: string) => string;
    beds: (rooms: number, guests: number) => string;
    checkIn: string;
    checkOut: string;
    children: string;
    cribs: string;
    breakfast: string;
    deposit: string;
    pets: string;
    age: string;
    faqQ: string;
    faqA: string;
  }
> = {
  en: {
    tagline: (type, area) => `${type} stay in ${area}`,
    desc: (type, area, region, rooms) =>
      `Comfortable ${type.toLowerCase()} in ${area}, ${region}. ${rooms} bedroom layout with modern amenities and easy access to local beaches and dining.`,
    long: (type, area, region) =>
      `This ${type.toLowerCase()} in ${area} offers a relaxed base for exploring ${region}. Guests enjoy thoughtful amenities, flexible check-in and a location suited to both short breaks and longer holidays.`,
    rating: (r) => (r >= 9 ? "Exceptional" : r >= 8 ? "Very good" : "Good"),
    roomName: (type) => `${type} Suite`,
    beds: (rooms, guests) => `${rooms} bedrooms · up to ${guests} guests`,
    checkIn: "From 14:00",
    checkOut: "Until 12:00",
    children: "Children welcome",
    cribs: "On request",
    breakfast: "Optional",
    deposit: "May apply",
    pets: "On request",
    age: "18+ to book",
    faqQ: "Is airport transfer available?",
    faqA: "Contact the property after booking to arrange transfer.",
  },
  tr: {
    tagline: (type, area) => `${area}'da ${type}`,
    desc: (type, area, region, rooms) =>
      `${region}, ${area} bölgesinde konforlu ${type.toLowerCase()}. ${rooms} yatak odalı düzen, modern olanaklar ve plajlara kolay erişim.`,
    long: (type, area, region) =>
      `${area}'daki bu ${type.toLowerCase()}, ${region} keşfi için rahat bir üs sunar. Kısa ve uzun konaklamalar için uygun konum ve olanaklar.`,
    rating: (r) => (r >= 9 ? "Mükemmel" : r >= 8 ? "Çok iyi" : "İyi"),
    roomName: (type) => `${type} Süit`,
    beds: (rooms, guests) => `${rooms} yatak odası · ${guests} misafire kadar`,
    checkIn: "14:00'ten itibaren",
    checkOut: "12:00'ye kadar",
    children: "Çocuklar kabul edilir",
    cribs: "Talep üzerine",
    breakfast: "İsteğe bağlı",
    deposit: "Uygulanabilir",
    pets: "Talep üzerine",
    age: "Rezervasyon 18+",
    faqQ: "Havalimanı transferi var mı?",
    faqA: "Rezervasyon sonrası tesisle iletişime geçin.",
  },
  de: {
    tagline: (type, area) => `${type} in ${area}`,
    desc: (type, area, region, rooms) =>
      `Komfortables ${type} in ${area}, ${region}. ${rooms} Schlafzimmer mit modernen Annehmlichkeiten und guter Anbindung.`,
    long: (type, area, region) =>
      `Diese Unterkunft in ${area} ist ein entspannter Ausgangspunkt für ${region}. Geeignet für Kurz- und Langzeitaufenthalte.`,
    rating: (r) => (r >= 9 ? "Hervorragend" : r >= 8 ? "Sehr gut" : "Gut"),
    roomName: (type) => `${type} Suite`,
    beds: (rooms, guests) => `${rooms} Schlafzimmer · bis ${guests} Gäste`,
    checkIn: "Ab 14:00",
    checkOut: "Bis 12:00",
    children: "Kinder willkommen",
    cribs: "Auf Anfrage",
    breakfast: "Optional",
    deposit: "Kann anfallen",
    pets: "Auf Anfrage",
    age: "Buchung ab 18",
    faqQ: "Gibt es einen Flughafentransfer?",
    faqA: "Kontaktieren Sie die Unterkunft nach der Buchung.",
  },
  fr: {
    tagline: (type, area) => `${type} à ${area}`,
    desc: (type, area, region, rooms) =>
      `${type} confortable à ${area}, ${region}. ${rooms} chambres avec équipements modernes.`,
    long: (type, area, region) =>
      `Ce logement à ${area} est une base idéale pour explorer ${region}. Adapté aux courts séjours et vacances prolongées.`,
    rating: (r) => (r >= 9 ? "Exceptionnel" : r >= 8 ? "Très bien" : "Bien"),
    roomName: (type) => `Suite ${type}`,
    beds: (rooms, guests) => `${rooms} chambres · jusqu'à ${guests} personnes`,
    checkIn: "À partir de 14h",
    checkOut: "Jusqu'à 12h",
    children: "Enfants acceptés",
    cribs: "Sur demande",
    breakfast: "En option",
    deposit: "Peut s'appliquer",
    pets: "Sur demande",
    age: "Réservation 18+",
    faqQ: "Transfert aéroport disponible ?",
    faqA: "Contactez l'établissement après réservation.",
  },
  ru: {
    tagline: (type, area) => `${type} в ${area}`,
    desc: (type, area, region, rooms) =>
      `Комфортный ${type} в ${area}, ${region}. ${rooms} спальни и современные удобства.`,
    long: (type, area, region) =>
      `Этот объект в ${area} — удобная база для поездок по ${region}. Подходит для короткого и длительного отдыха.`,
    rating: (r) => (r >= 9 ? "Превосходно" : r >= 8 ? "Очень хорошо" : "Хорошо"),
    roomName: (type) => `Номер ${type}`,
    beds: (rooms, guests) => `${rooms} спальни · до ${guests} гостей`,
    checkIn: "С 14:00",
    checkOut: "До 12:00",
    children: "Дети приветствуются",
    cribs: "По запросу",
    breakfast: "По желанию",
    deposit: "Может взиматься",
    pets: "По запросу",
    age: "Бронирование 18+",
    faqQ: "Есть трансфер из аэропорта?",
    faqA: "Свяжитесь с объектом после бронирования.",
  },
  th: {
    tagline: (type, area) => `${type} ที่ ${area}`,
    desc: (type, area, region, rooms) =>
      `${type} สะดวกสบายที่ ${area}, ${region} ห้องนอน ${rooms} ห้อง พร้อมสิ่งอำนวยความสะดวกครบ`,
    long: (type, area, region) =>
      `ที่พักแห่งนี้ที่ ${area} เหมาะสำหรับสำรวจ ${region} ทั้งพักสั้นและพักยาว`,
    rating: (r) => (r >= 9 ? "ยอดเยี่ยม" : r >= 8 ? "ดีมาก" : "ดี"),
    roomName: (type) => `ห้อง ${type}`,
    beds: (rooms, guests) => `${rooms} ห้องนอน · สูงสุด ${guests} คน`,
    checkIn: "ตั้งแต่ 14:00",
    checkOut: "ถึง 12:00",
    children: "รับเด็ก",
    cribs: "ตามคำขอ",
    breakfast: "ทางเลือก",
    deposit: "อาจมี",
    pets: "ตามคำขอ",
    age: "จอง 18+",
    faqQ: "มีรถรับส่งสนามบินไหม?",
    faqA: "ติดต่อที่พักหลังจอง",
  },
  ar: {
    tagline: (type, area) => `${type} في ${area}`,
    desc: (type, area, region, rooms) =>
      `${type} مريح في ${area}، ${region}. ${rooms} غرف نوم مع مرافق حديثة.`,
    long: (type, area, region) =>
      `هذا السكن في ${area} قاعدة مريحة لاستكشاف ${region}. مناسب للإقامات القصيرة والطويلة.`,
    rating: (r) => (r >= 9 ? "ممتاز" : r >= 8 ? "جيد جداً" : "جيد"),
    roomName: (type) => `جناح ${type}`,
    beds: (rooms, guests) => `${rooms} غرف · حتى ${guests} ضيف`,
    checkIn: "من 14:00",
    checkOut: "حتى 12:00",
    children: "الأطفال مرحب بهم",
    cribs: "عند الطلب",
    breakfast: "اختياري",
    deposit: "قد يُطبق",
    pets: "عند الطلب",
    age: "الحجز 18+",
    faqQ: "هل يتوفر نقل من المطار؟",
    faqA: "تواصل مع المكان بعد الحجز.",
  },
  zh: {
    tagline: (type, area) => `${area}${type}`,
    desc: (type, area, region, rooms) =>
      `位于${region}${area}的舒适${type}，${rooms}间卧室，设施完善，交通便利。`,
    long: (type, area, region) =>
      `这家位于${area}的${type}是探索${region}的理想住所，适合短途与长住。`,
    rating: (r) => (r >= 9 ? "卓越" : r >= 8 ? "很好" : "不错"),
    roomName: (type) => `${type}套房`,
    beds: (rooms, guests) => `${rooms}间卧室 · 最多${guests}人`,
    checkIn: "14:00起",
    checkOut: "12:00前",
    children: "欢迎儿童",
    cribs: "可应要求提供",
    breakfast: "可选",
    deposit: "可能收取",
    pets: "可应要求",
    age: "预订需满18岁",
    faqQ: "是否提供机场接送？",
    faqA: "预订后请联系住宿方安排。",
  },
};

function regionLabel(locale: Locale, region: string): string {
  const d = dictionaries[locale] as Dict;
  const key = region as keyof Dict["regions"];
  return d.regions[key] ?? region;
}

function airportLabel(locale: Locale, key: string): string {
  const d = dictionaries[locale] as Dict;
  const airports = d.airports as Record<string, string>;
  return airports[key] ?? key;
}

export function buildGeneratedStayContent(locale: Locale, stay: StayCatalogItem): StayContent {
  const type = stay.propertyType ?? "villa";
  const typeLabel = TYPE_LABELS[locale][type];
  const areaLabel = AREA_LABELS[locale][stay.areaKey] ?? stay.areaKey;
  const region = regionLabel(locale, stay.region);
  const c = COPY[locale];
  const hi = HIGHLIGHTS[locale];
  const am = AMENITIES[locale];

  const highlights: Record<string, string> = {};
  stay.highlightKeys.forEach((k) => {
    highlights[k] = hi[k] ?? k;
  });

  const amenitiesMap: Record<string, string> = {};
  stay.amenityKeys.forEach((k) => {
    amenitiesMap[k] = am[k] ?? k;
  });

  const popular = stay.amenityKeys.slice(0, 6).map((k) => am[k] ?? k);
  const allAmenities = stay.amenityKeys.map((k) => am[k] ?? k);

  return {
    name: `${typeLabel} ${areaLabel}`,
    localName: `${typeLabel} ${areaLabel}`,
    tagline: c.tagline(typeLabel, areaLabel),
    description: c.desc(typeLabel, areaLabel, region, stay.roomCount),
    longDescription: c.long(typeLabel, areaLabel, region),
    address: `${areaLabel}, ${region}, Thailand`,
    ratingLabel: c.rating(stay.rating),
    rooms: [
      {
        name: c.roomName(typeLabel),
        beds: c.beds(stay.roomCount, stay.maxGuests),
        features: popular.slice(0, 4),
      },
    ],
    amenitiesPopular: popular,
    amenitiesAll: allAmenities,
    policies: {
      checkIn: c.checkIn,
      checkOut: c.checkOut,
      children: c.children,
      cribs: c.cribs,
      breakfast: c.breakfast,
      deposit: c.deposit,
      pets: c.pets,
      age: c.age,
    },
    faq: [{ q: c.faqQ, a: c.faqA }],
    landmarks: {},
    beaches: {},
    areas: { [stay.areaKey]: areaLabel },
    highlights,
    amenities: amenitiesMap,
  };
}

export function getAirportLabelForStay(locale: Locale, airportKey: string): string {
  return airportLabel(locale, airportKey);
}
