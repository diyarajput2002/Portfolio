"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: " Frontend Skills",
    id: "Frontend Skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>ReactJS</li>
        <li>NextJS</li>
        <li>Bootstrap</li>
        <li>Tailwind CSS</li>
        <li>Typescript</li>
        <li>Material UI</li>
      </ul>
    ),
  },
  {
    title: " Backend Skills",
    id: "Backend Skills",
    content: (
      <ul className="list-disc pl-2">
       <li>NodeJS</li>
       <li>MongoDB</li>
       <li>Express</li>
        <li>SQL</li>
       <li>DBMS</li>
       <li>Git & GitHub</li>
       <li>Vercel</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Rajkiya Engineering College,Sonbhadra (2020-2024) <br/> B.Tech in Elecrtical Engineering (CGPA 7.79)</li>
      </ul>
    ),
  },
  {
    title: "Courses",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>IBM  Introduction to Web Development with HTML,CSS,Javascript</li>
        <li>Certificate of Participation in Tata Crucible Campus Quiz 2023 </li>
        <li>Coding Ninjas Certificate of C++</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("Frontend Skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/cutegirl.jpg" width={600} height={700} alt=""/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am a frontend React developer who loves creating interactive websites. I am skilled in JavaScript, React, Next.js, Tailwind CSS, TypeScript, HTML, CSS, and Git. I am a fast learner and enjoy expanding my skills. I work well in teams and eager to build awesome apps with others.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("Frontend Skills")}
              active={tab === "Frontend Skills"}
            >
              {" "}
              Frontend Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Backend Skills")}
              active={tab === "Backend Skills"}
            >
              {" "}
              Backend Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Courses{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
