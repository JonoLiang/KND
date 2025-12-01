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
  bio?: string;
  creds?: string;
}

export type NavigateFunction = (page: string, params?: string) => void;