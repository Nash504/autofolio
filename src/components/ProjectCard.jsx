import { Card, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectCard({ title, onClick }) {
  return (
    <motion.div
    className="bg-gray-50 rounded-3xl p-4 flex flex-col items-center justify-center cursor-pointer h-full"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay: 0.1,
      duration: 0.5,
      ease: "easeOut",
    }}
    whileHover={{
      y: -8,
      scale: 1.03,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        type: "keyframes",
        stiffness: 300,
        damping: 20,
      },
    }}
  >
    <Card
      onClick={onClick}
      className="border shadow bg-transparent p-6 w-full max-w-[400px] cursor-pointer 
                 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] 
                 "
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
  </motion.div>
  );
}
