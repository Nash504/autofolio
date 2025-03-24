"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { title: "Work" },
    { title: "Services" },
    { title: "About" },
    { title: "Plans" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <Card className="w-full max-w-[95vw] border-2 shadow-lg">
        <CardHeader className="text-center mb-6">
          <CardTitle className="text-5xl font-bold">
            Code<span className="text-purple-600">X</span>
          </CardTitle>
          <CardDescription className="text-lg text-black mt-2 max-w-3xl mx-auto">
            Partnering with{" "}
            <span className="text-gray-500">product-led founders</span> to craft
            exceptional design and development solutions.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-grow max-w-[90vw] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </CardContent>

        {/* Footer for Large Screens */}
        <CardFooter className="lg:flex hidden justify-center gap-4 mt-10">
          <Button className="text-lg py-2 px-6 rounded-full bg-black text-white hover:bg-gray-800">
            Email
          </Button>
          <Button
            variant="outline"
            className="text-lg py-2 px-6 rounded-full border-black text-black hover:bg-gray-100"
          >
            Contact
          </Button>
        </CardFooter>
      </Card>

      {/* Sticky Footer for Mobile */}
      <div className="mt-4 fixed bottom-0 left-0 w-full bg-white/20 backdrop-blur-md border-t border-gray-200 p-2 flex justify-between items-center lg:hidden">
        <button className="bg-black text-white px-6 py-2 rounded-full text-lg">
          Email
        </button>
        <button className="border border-black text-black px-6 py-2 rounded-full text-lg">
          Contact
        </button>
      </div>

      {/* Dialog (Glass Background Effect) */}
      {selectedProject && (
        <Dialog open={true} onOpenChange={() => setSelectedProject(null)}>
          {/* Custom backdrop for glass effect */}
          <div className="transition-transform duration-500 fixed inset-0 bg-white/10 backdrop-blur-md" />
          <DialogContent className="bg-white border border-white shadow-lg">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
