// Constants and configuration for the application

export const BUSINESS_INFO = {
  name: "PolishedbyNami",
  tagline: "Professional Nail Artistry",
  whatsappNumber: "2348114554741",
  email: "agboolaayomide1122@gmail.com",
  phones: ["(234) 8134921419", "(234) 8114554741"],
  businessHours: "Mon-Fri 9am-6pm, Sat 10am-4pm",
} as const;

export const SOCIAL_LINKS = {
  instagram:
    "https://www.instagram.com/polishedby_nami?igsh=MTFubGE0dm45a3E3Zw%3D%3D&utm_source=qr",
  tiktok: "https://www.tiktok.com/@polishedby_nami?_r=1&_t=ZS-92lx6EeHX9c",
  snapchat: "https://snapchat.com/t/nggqDhwS",
} as const;

export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
] as const;

export const TIME_SLOTS = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
] as const;

export const BRAND_COLORS = {
  primary: "yellow-500",
  secondary: "pink-500",
  dark: "gray-900",
  light: "white",
} as const;
