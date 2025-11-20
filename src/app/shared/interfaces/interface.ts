export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  techstack: {icon: string; name: string}[] ,
  duration: string;
  details?: string;
}

export interface Service {
  title: string;
  price: number;
  description: string;
  target: string;
  duration: string;
  iconUrl: string;
}