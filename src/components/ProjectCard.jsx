import { Card, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function ProjectCard({ title, onClick }) {
  return (
    <Card
      onClick={onClick}
      className="border shadow bg-transparent p-6 w-full max-w-[400px] cursor-pointer 
                 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] 
                 hover:scale-105 hover:shadow-2xl will-change-transform "
    >
      <div className="flex flex-col items-center">
        <div className="relative w-full h-[100px] mt-4 rounded-lg overflow-hidden bg-gray-100">
          <Image src="/window.svg" fill className="p-3" alt={title} />
        </div>
        <CardTitle className="justify-center p-8 text-2xl font-bold mt-2 -mb-8">
          {title}
        </CardTitle>
      </div>
    </Card>
  );
}
