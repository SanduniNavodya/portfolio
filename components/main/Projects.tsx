import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-10 mt-[-300px]"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        <ProjectCard
          src="/house.jpg"
          title="House Price Prediction System"
          description="A system for predicting house prices based on real-world datasets."
        />
        <ProjectCard
          src="/phone.jpg"
          title="Mobile Recommendation System"
          description="A personalized recommendation system for mobile phones."
        />
        <ProjectCard
          src="/summary.jpg"
          title="Text Summarization & Analysis System"
          description="A tool for summarizing and analyzing textual content."
        />
        <ProjectCard
          src="/email.jpg"
          title="GenAI Cold Email Generator"
          description="Generate cold emails using generative AI models."
        />
        <ProjectCard
          src="/vehicle.jpg"
          title="Vehicle Service Management System"
          description="A platform to manage vehicle services and maintenance."
        />
        <ProjectCard
          src="/currency.jpg"
          title="Currency Converter App"
          description="An app for converting currencies with live rates."
        />
        <ProjectCard
          src="/event.jpg"
          title="Online Event Planning System"
          description="Plan and manage events with an online platform."
        />
        <ProjectCard
          src="/land.jpg"
          title="Online Land Sale System"
          description="A system for buying and selling land properties online."
        />
      </div>
    </div>
  );
};

export default Projects;
