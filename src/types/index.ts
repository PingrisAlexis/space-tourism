//Destination
export interface Destination {
  name: String
  image: String
  description: String
  distance: String
  travel: String
}

//Crew
export interface Member {
  name: String
  image: String
  role: String
  bio: String
}

//Technologies
export interface Technology {
  name: String
  images: ImagesTechnology
  description: String
}
interface ImagesTechnology {
  portrait: String
  landscape: String
}

//data
export interface Data {
  destinations: Destination[]
  crew: Member[]
  technologies: Technology[]
}

//Section title

export interface SectionTitle {
  number: String
  description: String
}