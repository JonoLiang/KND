export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  icon: 'facebook' | 'instagram';
  href: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}
