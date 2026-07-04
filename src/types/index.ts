export type SpaceType = "flex-desk" | "private-office";

export interface NavItem {
  label: string;
  href: string;
}

export interface CTA {
  label: string;
  href: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  whatsapp: string;
  address: string;
  city: string;
  province: string;
  cap: string;
  mapsUrl: string;
  mapsEmbed: string;
}

export interface SocialLinks {
  instagram: string;
  facebook: string;
  linkedin: string;
}

export interface ValueProposition {
  icon: string;
  title: string;
  description: string;
}

export interface Space {
  id: string;
  type: SpaceType;
  title: string;
  description: string;
  features: string[];
  ctaLabel: string;
  image: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface AudienceProfile {
  icon: string;
  title: string;
  description: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface SEO {
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
  keywords: string[];
}

export interface TimeSlot {
  start: string;
  end: string;
}

export interface BookingSlot {
  date: string;
  slots: TimeSlot[];
}

export interface BookingRequest {
  name: string;
  email: string;
  spaceType: SpaceType;
  date: string;
  slot: TimeSlot;
  message?: string;
}
