export interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
  }

  export interface Question {
    id: string;
    title: string;
    content: string;
}

  
 export  interface FaqCategory {
    title: string;
    description: string;
    path: string;
    id:number,
  }