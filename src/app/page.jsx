import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
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
            {/* Project Card 1 */}
            <ProjectCard title="Work" />
            <ProjectCard title="Services" />
            <ProjectCard title="About" />
            <ProjectCard title="Plans" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-row justify-center gap-4 mt-10">
          <Button className="text-lg py-2 px-6 rounded-full bg-black text-white hover:bg-gray-800">
            Email
          </Button>
          <Button
            variant="outline"
            className="text-lg py-2 px-6 rounded-full border-black text-black hover:bg-gray-100"
          >
            Book a call
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
const ProjectCard = ({ title }) => (
  <Card className="border shadow bg-transparent p-6 w-full max-w-[400px] ">
    <div className="flex flex-col items-center">
      <div className="relative w-full h-[120px] mt-4 rounded-lg overflow-hidden bg-gray-100">
        <Image src="/window.svg" fill className="p-3" />
      </div>
      <div>
        <CardTitle className=" justify-center p-8 text-2xl font-bold mt-2 -mb-8">
          {title}
        </CardTitle>
      </div>
    </div>
  </Card>
);
