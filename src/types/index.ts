//Destination
export interface Destination {
  name: string
  image: string
  description: string
  distance: string
  travel: string
}

//Crew
export interface Member {
  name: string
  image: string
  role: string
  bio: string
}

//Technologies
export interface Technology {
  name: string
  images: ImagesTechnology
  description: string
}
interface ImagesTechnology {
  portrait: string
  landscape: string
}

//data
export interface Data {
  destinations: Destination[]
  crew: Member[]
  technologies: Technology[]
}

//Section title

export interface SectionTitle {
  number: string
  description: string
}