export type Lang = "en" | "hi" | "mr";

type Dictionary = Record<string, string>;

const dictionaries: Record<Lang, Dictionary> = {
  en: {
    "nav.dashboard": "Dashboard",
    "nav.analytics": "Analytics",
    "nav.predictions": "Predictions",
    "nav.recommendations": "Recommendations",
    "nav.history": "History",
    "label.language": "Language",
    "label.assistant": "Farm Assistant",
    "label.translator": "Translator",
    "label.export": "Export Data",
  },
  hi: {
    "nav.dashboard": "Dashboard",
    "nav.analytics": "Vishleshan",
    "nav.predictions": "Purvanuman",
    "nav.recommendations": "Sifarish",
    "nav.history": "Itihas",
    "label.language": "Bhasha",
    "label.assistant": "Kisan Sahayak",
    "label.translator": "Anuvadak",
    "label.export": "Data Niryat",
  },
  mr: {
    "nav.dashboard": "Dashboard",
    "nav.analytics": "Vishleshan",
    "nav.predictions": "Andaz",
    "nav.recommendations": "Shifarish",
    "nav.history": "Itihas",
    "label.language": "Bhasha",
    "label.assistant": "Shetkari Sahayak",
    "label.translator": "Bhashantarak",
    "label.export": "Data Niryat",
  },
};

export function t(key: string, lang: Lang) {
  return dictionaries[lang][key] ?? dictionaries.en[key] ?? key;
}
