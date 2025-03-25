
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BackToHome() {
    return(
        <header>
            <div className="p-4">
          <Link
            href="/"
            className="inline-flex items-center text-black hover:underline"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>
        </header>
    )}