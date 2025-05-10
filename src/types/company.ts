export interface Company {
  id: string;
  nameKey: string;
  descriptionKey: string;
  color: string;
  gradientClass: string;
  logoIcon: string;
  heroImage: string;
  services: {
    titleKey: string;
    descriptionKey: string;
    icon: string;
    image: string;
  }[];
  features: {
    titleKey: string;
    descriptionKey: string;
    icon: string;
  }[];
  stats: {
    number: string;
    labelKey: string;
    icon: string;
  }[];
  testimonials: {
    authorKey: string;
    roleKey: string;
    contentKey: string;
    image: string;
    rating: number;
  }[];
  projects?: {
    titleKey: string;
    descriptionKey: string;
    image: string;
    category: string;
  }[];
  successStories?: {
    titleKey: string;
    descriptionKey: string;
    image: string;
    category: string;
  }[];
}