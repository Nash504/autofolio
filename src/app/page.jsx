import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-[95%] h-[95vh] overflow-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-5xl font-bold">
            Code<span className="text-purple-600">X</span>
          </CardTitle>
          <CardDescription className="text-xl font-bold text-black ">
            Partnering with{" "}
            <span className="text-gray-500">product-led founders</span> to craft
            exceptional design and development solutions.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Card className="p-6 md:w-2/3 lg:w-1/2 mx-auto shadow-md border bg-white flex flex-col gap-4">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl font-bold">
                    Project Name
                  </CardTitle>
                  <CardDescription className={"text-md"}>
                    This consists of the project description
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0 space-y-4">
                  <div className="border-b pb-3">
                    <h3 className="font-medium">UI/UX Design</h3>
                    <p className="text-sm text-gray-600">
                      User-centered interfaces that drive engagement
                    </p>
                  </div>
                  <div className="border-b pb-3">
                    <h3 className="font-medium">Frontend Development</h3>
                    <p className="text-sm text-gray-600">
                      Modern, responsive web applications with NextJS
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium">Backend Solutions</h3>
                    <p className="text-sm text-gray-600">
                      Scalable API architecture and database design
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-row justify-center gap-4">
          <Button className="text-lg py-2 px-4 rounded-4xl">Email</Button>
          <Button
            variant="outline"
            className="text-lg py-2 px-4 rounded-4xl bg-neutral-200"
          >
            Book a call
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
