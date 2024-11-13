"use client";

import { Fade } from "react-awesome-reveal";
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
    icon: <Zap className="mr-2 text-main" />,
    title: "Our Background",
    description:
      "Founded in 1985, PowerSwitch Industries has led the industry in innovation for over three decades, focusing on groundbreaking solutions that drive the electrical industry forward.",
  },
  {
    icon: <Shield className="mr-2 text-main" />,
    title: "Experience & Expertise",
    description:
      "With over 35 years of expertise, our skilled team brings an unmatched depth of knowledge, setting industry standards and leading with integrity and precision.",
  },
  {
    icon: <Lightbulb className="mr-2 text-main" />,
    title: "Innovation",
    description:
      "Our R&D department consistently pushes boundaries, delivering state-of-the-art power distribution solutions designed to meet evolving industry demands with precision and efficiency.",
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
          <h1 className="text-3xl font-bold mb-4 text-main">About PowerSwitch Industries</h1>
          <p className="max-w-3xl mx-auto text-muted-foreground text-lg">
            Powering the Future with Innovative Switchgear Solutions
          </p>
        </header>
      </Fade>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        <Fade triggerOnce direction="up" cascade damping={0.3}>
          {ABOUT_CARDS.map((item, index) => (
            <Card
              key={index}
              className="h-full flex flex-col shadow-md border border-gray-200 rounded-lg bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <CardTitle className="flex items-center text-2xl font-semibold pb-0 text-main">
                  {item.icon}
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 text-lg">
                {item.description}
              </CardContent>
            </Card>
          ))}
        </Fade>
      </section>

      <Fade triggerOnce direction="up" cascade damping={0.2}>
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Values</h2>
          <div className="flex flex-wrap gap-3">
            {VALUES.map((value, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="transition-transform bg-gray-50 border border-main text-main px-4 py-2 rounded-full font-semibold shadow-sm hover:bg-main hover:text-white hover:shadow-lg transform hover:-translate-y-1 duration-300"
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
