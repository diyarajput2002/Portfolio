"use client"
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "GlamGrove-Ecommerce-Web-App",
    description:"I improved an online Beauty product store using React adding dynamic features like image carousels with Swiper.js and smooth animations with Framer Motion. The site is now fully responsive, offering a better user experience with modern frontend tools.",
    image: "/images/projects/ecom.png",
    tag: ["Projects"],
    gitUrl: "https://github.com/diyarajput2002/GlamGrove-Ecommerce-Web-App?tab=readme-ov-file",
    previewUrl: "https://ecommerce-web-app-sigma.vercel.app/",
  },
  {
    id: 2,
    title: "Food App",
    description: "Our food app, made with React and Material-UI, offers a smooth and attractive interface. It's easy to use, with dynamic updates and seamless interactions thanks to React's design.",
    image: "/images/projects/food.png",
    tag: ["Projects"],
    gitUrl: "https://github.com/diyarajput2002/food-app",
    previewUrl: "https://food-app-ten-zeta.vercel.app/",
  },
  {
    id: 3,
    title: "Weather App",
    description: "Built a React-based weather app delivering real-time updates on global weather conditions. Provides current temperature, date, and day, ensuring users stay informed. Ideal for accessing accurate weather data from any location worldwide.",
    image: "/images/projects/weather.png",
    tag: ["Projects"],
    gitUrl:"https://github.com/diyarajput2002/SkyWatch",
    previewUrl:"https://sky-watch-nu.vercel.app/",
  },
  {
    id: 4,
    title: "Rock Paper scissor Game",
    description: "A Rock-Paper-Scissors game using HTML, CSS, and JavaScript. Proficient in front-end technologies, with skills in DOM manipulation, event handling, and game logic implementation. Demonstrated ability to develop engaging user experiences with a focus on functionality and aesthetics",
    tag: ["Projects"],
    image: "/images/projects/game-img.png",
    gitUrl:"https://github.com/diyarajput2002/RPS_Game",
    previewUrl:"https://rps-game-beta.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Projects");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Projects"
          isSelected={tag ==="Projects"}
        />
        
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
