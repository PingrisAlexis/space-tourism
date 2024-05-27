//Destination
export interface Destination {
  name: string
  images: DestinationImages
  description: string
  distance: string
  travel: string
}
interface DestinationImages {
  png: string
  webp: string
}

//Crew
export interface Member {
  name: string
  images: MemberImages
  role: string
  bio: string
}
interface MemberImages {
  png: string
  webp: string
}

//Technologies
interface TechnologyImages {
  portrait: string
  landscape: string
}
export interface Technology {
  name: string
  images: TechnologyImages
  description: string
}

//data
export interface Data {
  destinations: Destination[]
  crew: Member[]
  technologies: Technology[]
}

//Section title

export interface SectionTitle {
  number: number
  description: String
}