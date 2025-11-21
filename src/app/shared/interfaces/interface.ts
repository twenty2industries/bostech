export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  techstack: {icon: string; name: string}[] ,
  duration: string;
  details?: string;
  category?: string;
  budget?: string;
  status?: string;
  client?: string;
  teamsize?: string;
}

export interface Service {
  title: string;
  price: number;
  description: string;
  target: string;
  duration: string;
  iconUrl: string;
}