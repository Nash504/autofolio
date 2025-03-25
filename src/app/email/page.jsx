import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft } from "lucide-react";

export default function EmailPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4 md:p-8">
      <div className="w-full max-w-[600px] mx-auto">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-black hover:underline"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6">Email Us</h1>
        <p className="text-black/70 mb-8">
          Send us an email and we'll get back to you as soon as possible.
        </p>

        <form className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <Input
              id="name"
              placeholder="Your name"
              className="border-black/20 focus:border-black focus:ring-black"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              className="border-black/20 focus:border-black focus:ring-black"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <Textarea
              id="message"
              placeholder="Your message"
              rows={6}
              className="border-black/20 focus:border-black focus:ring-black"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-black text-white hover:bg-gray-800"
          >
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
}
