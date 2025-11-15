export interface Vehicle {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  specs: {
    payloadToLEO: string;
    height: string;
    diameter: string;
    reusable: boolean;
  };
}

export interface Mission {
  id: string;
  name: string;
  patch?: string;
  launchDate: Date;
  description: string;
  destination: string;
  payload: string;
  orbit: string;
  status: "completed" | "upcoming" | "live";
}

export interface LaunchEvent {
  id: string;
  mission: string;
  date: Date;
  vehicle: string;
  status: "completed" | "upcoming" | "live";
  thumbnail: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
