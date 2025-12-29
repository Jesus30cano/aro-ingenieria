export interface Project {
  client: string;
  title: string;
  description: string;
  
  media: {
  type: "image" | "video";
  src: string;
  alt?: string;
  poster?: string; // miniatura del video
}[];
}

export interface projectsData {
  [key: string]: Project; 
}