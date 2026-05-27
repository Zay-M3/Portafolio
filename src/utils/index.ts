// Utility functions and demo data

export const PERSONAL_INFO = {
  name: 'Oscar David Estrada (Zay)',
  title: 'Backend Developer',
  bio: 'Desarrollador BackEnd con experiencia en Python, FastAPI, Django, PostgreSQL y arquitectura de microservicios.',
  avatar: '/src/assets/icon.jpg',
  contact: {
    email: 'oscardavidestrada@hotmail.com',
    location: 'Cali, Colombia',
    socials: [
      { platform: 'GitHub', url: 'https://github.com/Zay-M3', icon: 'FaGithub' },
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/oscar-david-estrada-betancourt-491732331/', icon: 'FaLinkedin' },
    ],
  },
}

export const PROJECTS_DATA: Project[] = [
  {
    id: '1',
    title: 'Natural SQL',
    description: 'RAG pipeline para consultas SQL en lenguaje natural',
    image: '/src/assets/portafolio.png',
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'RAG'],
    link: 'https://naturalsql.online',
    github: 'https://github.com/Zay-M3/NaturalSQL',
  },
  {
    id: '2',
    title: 'NoLimitAI',
    description: 'Router de LLMs con fallback inteligente',
    image: '/src/assets/portafolio.png',
    technologies: ['Python', 'FastAPI', 'LLM'],
    link: 'https://pypi.org/project/nolimitai/',
    github: 'https://github.com/Zay-M3/NoLimitAI',
  },
]

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ')
}
