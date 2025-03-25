import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, Mail, MapPin } from "lucide-react";
import BackToHome from "@/components/BackToHome";

export default function ContactPage() {
  return (
    <>
      <BackToHome />
      <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4 md:p-8">
        <div className="w-full max-w-[800px] mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold -mt-32 mb-6">
            Contact Us
          </h1>
          <p className="text-black/70 mb-12 max-w-[600px]">
            We're always looking for new opportunities and collaborations. Get
            in touch with us using any of the methods below.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-4 mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Phone</h3>
                  <p className="text-black/70">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-4 mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <p className="text-black/70">hello@codex.design</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-4 mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Office</h3>
                  <p className="text-black/70">
                    123 Design Street
                    <br />
                    San Francisco, CA 94103
                    <br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-black/10 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Schedule a Call</h2>
              <p className="text-black/70 mb-6">
                Book a 30-minute introductory call with our team to discuss your
                project.
              </p>
              <Button className="w-full bg-black text-white hover:bg-gray-800">
                Book a Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
