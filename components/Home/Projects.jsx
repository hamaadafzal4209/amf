"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { projects } from "@/constants/projectsData";
import { Fade, Slide } from "react-awesome-reveal";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <section className="py-8 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800">
          <Fade triggerOnce>
            Our Projects
          </Fade>
        </h2>
        <Fade triggerOnce cascade damping={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {displayedProjects.map((project) => (
              <Slide direction="up" triggerOnce key={project.id}>
                <div
                  className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="relative h-48 sm:h-56 md:h-64">
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-base md:text-lg font-semibold text-main line-clamp-1">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </Slide>
            ))}
          </div>
        </Fade>
        <div className="mt-8 text-center">
          <Button
            onClick={() => setShowAll(!showAll)}
            variant="outline"
            className="w-full sm:w-auto bg-main text-white hover:bg-black hover:text-white"
          >
            {showAll ? "Show Less" : "Show More"}
          </Button>
        </div>
      </div>
      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="sm:max-w-[425px] bg-white md:max-w-[600px] lg:max-w-[800px]">
          <DialogHeader>
            <DialogTitle className="text-main">
              {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>
          {selectedProject && (
            <div className="relative h-48 sm:h-64 md:h-80 lg:h-96">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
