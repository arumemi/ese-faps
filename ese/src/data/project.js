import techPix from '../assets/tech_pix.jpeg'

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
    title: 'Projeto Três',
    description: 'aplicativo móvel para gerenciamento de tarefas',
    imageUrl: '/images/project3.png',
    category: 'Aplicativos Móveis',
    technologies: ['React Native', 'Redux'],
    projectUrl: 'https://example.com/project-three',
  
    githubUrl: 'https://github.com/example/project-three',
  },
  {
    id: 4,
    title: 'Projeto Quatro',
    description: 'blog pessoal com CMS',
    imageUrl: '/images/project4.png',
    category: 'Desenvolvimento Web',
    technologies: ['Gatsby', 'GraphQL', 'Contentful'],
    projectUrl: 'https://example.com/project-four',
    
    githubUrl: 'https://github.com/example/project-four',
  },
  {
    id: 5,
    title: 'Projeto Cinco',
    description: 'aplicação de bate-papo em tempo real',
    imageUrl: '/images/project5.png',
    category: 'Full-Stack',
    technologies: ['Socket.io', 'Node.js', 'Express'],
    projectUrl: 'https://example.com/project-five',
   
    githubUrl: 'https://github.com/example/project-five',
  },
  {
    id: 6,
    title: 'Projeto Seis',
    description: 'site de portfólio com animações',
    imageUrl: '/images/project6.png',
    category: 'Componentes UI',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    projectUrl: 'https://example.com/project-six',
   
    githubUrl: 'https://github.com/example/project-six',
  }

];
export const categories = [
  'Todos',
  'Aplicativos Web',
  'Aplicativos Móveis',
  'E-commerce',
  
  'Full-Stack',

];
    
 