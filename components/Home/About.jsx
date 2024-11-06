"use client";

import { Fade, Zoom } from "react-awesome-reveal";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Shield, Zap } from "lucide-react";

const ABOUT_CARDS = [
  {
    icon: <Zap className="mr-2" />,
    title: "Our Background",
    description:
      "Founded in 1985, PowerSwitch Industries has led the industry in innovation for over three decades.",
  },
  {
    icon: <Shield className="mr-2" />,
    title: "Experience & Expertise",
    description:
      "With over 35 years of experience, our skilled team is unmatched in the industry.",
  },
  {
    icon: <Lightbulb className="mr-2" />,
    title: "Innovation",
    description:
      "Our R&D department pushes the boundaries, continuously enhancing power distribution solutions.",
  },
];

const VALUES = [
  "Quality",
  "Innovation",
  "Safety",
  "Sustainability",
  "Customer-Centric",
  "Integrity",
];

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-12 pt-16 pb-4">
      <Fade triggerOnce direction="up" duration={800} cascade damping={0.2}>
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-4">
            About PowerSwitch Industries
          </h1>
          <p className="text-2xl text-gray-600">
            Powering the Future with Innovative Switchgear Solutions
          </p>
        </header>
      </Fade>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        <Fade triggerOnce direction="up" cascade damping={0.3}>
          {ABOUT_CARDS.map((item, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transform transition duration-500 ease-in-out hover:-translate-y-2"
            >
              <CardHeader>
                <CardTitle className="flex items-center text-xl pb-0">
                  {item.icon}
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                {item.description}
              </CardContent>
            </Card>
          ))}
        </Fade>
      </section>

      <Zoom triggerOnce duration={1000}>
        <section className="mb-8">
          <Card className="hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
              <CardDescription className="text-gray-500">
                Empowering a brighter future through innovative power solutions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Deliver reliable and efficient switchgear solutions</li>
                <li>Prioritize safety in all our products and operations</li>
                <li>Contribute to sustainable energy practices</li>
                <li>Foster innovation in power distribution technology</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </Zoom>

      <Fade triggerOnce direction="up" cascade damping={0.2}>
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <div className="flex flex-wrap gap-3">
            {VALUES.map((value, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="transition-transform bg-gray-100 duration-300 hover:bg-main hover:text-white"
              >
                {value}
              </Badge>
            ))}
          </div>
        </section>
      </Fade>
    </div>
  );
}
