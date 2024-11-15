"use client";

import { Fade } from "react-awesome-reveal";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Globe, Settings, MapPin } from "lucide-react";

const ABOUT_CARDS = [
  {
    icon: <Settings className="mr-2 text-main" />,
    title: "Manufacturing Excellence",
    description:
      "Almaram Alfaneyah ManufacturingCo. is a certified channel partner of Schneider Electric, specializing in the manufacturing of LV switchgear panels in the Kingdom of Saudi Arabia. Adhering to IEC and ISO 9001 standards, we maintain the highest quality in all operations.",
  },
  {
    icon: <MapPin className="mr-2 text-main" />,
    title: "Expanding Reach",
    description:
      "With our head office in Jeddah, Almaram Alfaneyah envisions a network of branches across major Saudi cities, ensuring widespread access to our innovative LV switchgear solutions.",
  },
  {
    icon: <Globe className="mr-2 text-main" />,
    title: "Global Standards",
    description:
      "All products are designed and manufactured in state-of-the-art facilities and undergo stringent quality checks, reflecting our dedication to quality, safety, and performance.",
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
          <h1 className="text-3xl font-bold mb-4 text-main">
            About Almaram Alfaneyah ManufacturingCo.
          </h1>
          <p className="max-w-3xl mx-auto text-muted-foreground text-lg">
            Powering Cities with High-Quality LV Switchgear Solutions
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
                  <p className="sm:truncate">{item.title}</p>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 text-lg">
                {item.description}
              </CardContent>
            </Card>
          ))}
        </Fade>
      </section>

      <Fade triggerOnce direction="up" duration={800} cascade damping={0.2}>
        <section className="text-center mt-12 pb-8">
          <h2 className="text-3xl font-bold mb-4 text-main">Our Vision</h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            To remain committed to our customers by providing complete solutions
            with an innovative approach, utilizing the latest technology, and
            building a skilled workforce dedicated to exploring and advancing in
            the field of power distribution.
          </p>
        </section>
      </Fade>
    </div>
  );
}
