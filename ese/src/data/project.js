import techPix from '../assets/tech_pix.jpeg'
import berber from '../assets/berber.jpeg'
import phone from '../assets/phone.jpeg'
import resturant from '../assets/resturant.jpeg'


export const projects = [ 
  {
    id: 1,
    title: 'Plataforma de Educação',
    description: 'Plataforma de intercâmbio estudantil',
    imageUrl: '/images/sch-img.jpeg',
    category: 'Aplicativos Web',
    technologies: ['HTML', 'CSS', 'JAVASCRIPT'],
    projectUrl: 'https://www.rockstarstudyabroad.com/',
    demoUrl: 'https://demo.example.com/project-one',
    githubUrl: 'https://github.com/arumemi/VICTORS-SCHOOL.git',
  },
  {
    id: 2,
    title: 'Tech-blog',
    description: 'Plataforma de blog de tecnologia com sistema de autenticação',
    imageUrl: techPix,
    category: 'Full-Stack',
    technologies: ['Next.js', 'React', 'Prisma', 'Tailwind CSS', 'PostgreSQL'],
    projectUrl: 'https://tech-blog-i77h.vercel.app/',
    
    githubUrl: 'https://github.com/arumemi/Tech_Blog ',
  },

  {
    id: 3,
    title: 'Dotman Store',
    description: 'aplicativo móvel para gerenciamento de tarefas',
    imageUrl: phone,
    category: 'E-commerce',
    technologies: ['React + Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
    projectUrl: 'https://dotman-s-store-3eax.vercel.app/',
  
    githubUrl: 'https://github.com/Ese-Fapo/Dotman-s-Store.git ',
  },
  {
    id: 4,
    title: 'Berber&Blade',
    description: 'um loja de barbearia online com sistema de agendamento',
    imageUrl: berber,
    category: 'Aplicativos Web',
    technologies: ['HTML', 'CSS', 'javaScript'],
    projectUrl: 'https://berber-shop-ruby.vercel.app/',
    
    githubUrl: 'https://github.com/Ese-Fapo/berber_shop.git',
  },
  {
    id: 5,
    title: 'Resturant Template',
    description: 'Ainda estou trabalhando no backend deste projeto. Estou implementando e publicando por partes, de forma gradual.',
    imageUrl: resturant,
    category: 'Full-Stack',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
    projectUrl: 'https://resturant-templete.vercel.app/',
   
    githubUrl: 'https://github.com/Ese-Fapo/resturant-templete.git',
  },
  {
    id: 6,
    title: 'Budget Tracker',
    description: 'Aplicativo móvel para rastreamento de despesas e orçamento',
    imageUrl: '/images/budget.jpeg',
    category: 'Aplicativos Móveis',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    projectUrl: 'https://budget-eight-bay.vercel.app/',
    githubUrl: 'https://github.com/Ese-Fapo/Budget.git',
  }
  

];
export const categories = [
  'Todos',
  'Aplicativos Web',
  'Aplicativos Móveis',
  'E-commerce',
  
  'Full-Stack',

];
    
 