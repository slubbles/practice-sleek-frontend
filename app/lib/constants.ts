import { Vehicle, Mission, NavLink, SocialLink } from "./types";

export const VEHICLES: Vehicle[] = [
  {
    id: "falcon-9",
    name: "Falcon 9",
    tagline: "Proven Reliability",
    description: "Falcon 9 is a reusable, two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of people and payloads into Earth orbit and beyond.",
    image: "/images/rockets/falcon9.jpg",
    specs: {
      payloadToLEO: "22,800 kg",
      height: "70 m",
      diameter: "3.7 m",
      reusable: true,
    },
  },
  {
    id: "falcon-heavy",
    name: "Falcon Heavy",
    tagline: "Heavy-Lift Power",
    description: "Falcon Heavy is the most powerful operational rocket in the world, capable of carrying payloads to orbit, the Moon, Mars and beyond.",
    image: "/images/rockets/falcon-heavy.jpg",
    specs: {
      payloadToLEO: "63,800 kg",
      height: "70 m",
      diameter: "12.2 m",
      reusable: true,
    },
  },
  {
    id: "starship",
    name: "Starship",
    tagline: "Mars & Beyond",
    description: "Starship is a fully reusable transportation system designed to carry both crew and cargo to Earth orbit, the Moon, Mars and beyond.",
    image: "/images/rockets/starship.jpg",
    specs: {
      payloadToLEO: "100-150 tons",
      height: "120 m",
      diameter: "9 m",
      reusable: true,
    },
  },
  {
    id: "dragon",
    name: "Dragon",
    tagline: "Crew & Cargo",
    description: "Dragon is a free-flying spacecraft designed to deliver both cargo and people to orbiting destinations.",
    image: "/images/rockets/dragon.jpg",
    specs: {
      payloadToLEO: "6,000 kg",
      height: "8.1 m",
      diameter: "4 m",
      reusable: true,
    },
  },
];

export const FEATURED_MISSION: Mission = {
  id: "starship-flight-5",
  name: "Starship Flight Test 5",
  patch: "/images/logos/starship-patch.png",
  launchDate: new Date("2026-03-15T10:00:00Z"),
  description: "The fifth integrated flight test of Starship will demonstrate orbital refueling capabilities, a critical milestone for deep space missions to the Moon and Mars. This test will validate the technology needed for sustainable space exploration.",
  destination: "Low Earth Orbit",
  payload: "Orbital Refueling Demonstration",
  orbit: "LEO - 300km",
  status: "upcoming",
};

export const NAV_LINKS: NavLink[] = [
  { label: "Missions", href: "#missions" },
  { label: "Vehicles", href: "#vehicles" },
  { label: "Technology", href: "#technology" },
  { label: "About", href: "#about" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "Twitter", url: "https://twitter.com/spacex", icon: "twitter" },
  { platform: "YouTube", url: "https://youtube.com/spacex", icon: "youtube" },
  { platform: "Instagram", url: "https://instagram.com/spacex", icon: "instagram" },
  { platform: "LinkedIn", url: "https://linkedin.com/company/spacex", icon: "linkedin" },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Careers", href: "/careers" },
  { label: "Press", href: "/press" },
];
