import Project from "./project";


export interface ProjectItem {
  title: string;
  description: string;
  link: string;
  imgSrc: string;
}

const Projects = () => {
  const projects : ProjectItem[] = [
    {
      title: "E-commerce Dashboard Website",
      description: "I've successfully developed a robust E-commerce Dashboard Website utilizing a powerful tech stack, including Next.js, Clerk, Prisma, Tailwind CSS, and PlanetScale. This project offers a comprehensive solution for managing e-commerce operations, providing a seamless and intuitive interface for both administrators and users. Key features include secure authentication and authorization using Clerk, efficient database management through Prisma, and a sleek, responsive design with Tailwind CSS. The utilization of PlanetScale ensures scalability and reliability, making it a sustainable solution for growing e-commerce businesses. This project demonstrates my proficiency in cutting-edge web development technologies and my ability to create user-friendly, high-performing digital experiences.",
      link: "https://ecommerce-admin-khaki-delta.vercel.app/sign-in?redirect_url=https%3A%2F%2Fecommerce-admin-khaki-delta.vercel.app%2F",
      imgSrc: "/images/ecommerce-dashboard.png",
    },
    {
      title: "E-commerce Store Website",
      description: "I have designed and developed a feature-rich E-commerce Store Website, leveraging an advanced technology stack that includes Next.js, Clerk, Prisma, Tailwind CSS, and PlanetScale. This website offers a comprehensive shopping experience for customers, featuring a secure and user-friendly interface. Clerk handles user authentication and authorization, ensuring a smooth and safe online shopping experience. Prisma powers the efficient management of product data and transactions. The website's visually appealing and responsive design is achieved through the use of Tailwind CSS. By utilizing PlanetScale, the platform is equipped for scalability and reliability, making it an ideal solution for e-commerce businesses looking to expand and meet growing demands. This project showcases my expertise in cutting-edge web development technologies and my ability to create a high-performing and visually appealing E-commerce Store.",
      link: "https://ecommerce-admin-khaki-delta.vercel.app/sign-in?redirect_url=https%3A%2F%2Fecommerce-admin-khaki-delta.vercel.app%2F",
      imgSrc: "/images/ecommerce-dashboard.png",
    },
    {
      title: "Netflix-Style Movie Catalog",
      description: "I've developed a Netflix-style movie catalog using ReactJS, Redux, and Firebase. This project offers users the ability to log in and navigate through an extensive library of movies, conveniently categorized by genres. While browsing, users can access detailed information about each movie without the capability to watch them directly, creating a familiar and immersive experience similar to popular streaming platforms. The project seamlessly integrates modern web technologies to provide an engaging and interactive platform for movie enthusiasts.",
      link: "https://netflix-clone-6669e.web.app/",
      imgSrc: "/images/netflix-clone.png"
    }
  ];

  if(!projects.length) return null;
  return (
    <div id="projects">
      {
        projects.map(project => <Project key={project.link} {...project} />)
      }
    </div>
  );
}

export default Projects