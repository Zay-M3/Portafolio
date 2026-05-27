// Domain types
export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  link?: string
  github?: string
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
}

export interface ContactInfo {
  email: string
  location: string
  socials: SocialLink[]
}

export interface PersonalInfo {
  name: string
  title: string
  bio: string
  avatar: string
  contact: ContactInfo
}
