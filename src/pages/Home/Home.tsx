import { Hero } from "./components/Hero/Hero";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/common/components/ui/card";
import { Button } from "@/common/components/ui/button";
import {
  ArrowRight,
  Code,
  BookOpen,
  Video,
  Lightbulb,
  Rocket,
} from "lucide-react";
import { Link } from "react-router-dom";

// Sample featured content
const featuredContent = [
  {
    id: 1,
    title: "Getting Started",
    description: "Learn how to start using GitHub Copilot in your projects.",
    icon: <Rocket className="h-8 w-8 text-primary" />,
    link: "/help",
  },
  {
    id: 2,
    title: "VS Code Integration",
    description: "Discover how Copilot integrates with Visual Studio Code.",
    icon: <Code className="h-8 w-8 text-primary" />,
    link: "/help",
  },
  {
    id: 3,
    title: "Code Generation",
    description: "See examples of how Copilot can generate code for you.",
    icon: <Video className="h-8 w-8 text-primary" />,
    link: "/help",
  },
  {
    id: 4,
    title: "AI Pair Programming",
    description: "Understand how AI can assist in your development workflow.",
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    link: "/help",
  },
  {
    id: 5,
    title: "Best Practices",
    description: "Learn best practices for working effectively with Copilot.",
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    link: "/help",
  },
];

export function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">Featured Content</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {featuredContent.map((item) => (
            <Card key={item.id} className="h-full flex flex-col" role="article">
              <CardHeader>
                <div className="mb-2">{item.icon}</div>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" asChild className="w-full">
                  <Link
                    to={item.link}
                    className="flex items-center justify-center"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
