"use client";

import HeroBanner from "@/components/HeroBanner";
import MainLayout from "@/components/Layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const products = [
  {
    id: 1,
    title: "AL NAHDI WAREHOUSE",
    image: "/assets/projects/project1.jpg",
  },
  {
    id: 2,
    title: "MAKKAH HOSPITAL",
    image: "/assets/projects/project2.jpg",
  },
  {
    id: 3,
    title: "ZAHID BUSINESS PARK",
    image: "/assets/projects/project3.jpg",
  },
  {
    id: 4,
    title: "JAMJOOM PHARMACEUTICALS CO.",
    image: "/assets/projects/project4.jpg",
  },
  {
    id: 5,
    title: "NAJRAN TEACHING HOSPITAL",
    image: "/assets/projects/project5.jpg",
  },
  {
    id: 6,
    title: "LULU HYPERMARKET",
    image: "/assets/projects/project6.jpg",
  },
  {
    id: 7,
    title: "AL-SERAFI CITY",
    image: "/assets/projects/project7.jpg",
  },
  {
    id: 8,
    title: "AL-RAIDAH DIGITAL CITY",
    image: "/assets/projects/project8.jpg",
  },
];

export default function ProductShowcase() {
  return (
    <MainLayout>
      <HeroBanner
        title={"Our Projects"}
        backgroundImage={"/assets/products-banner.jpg"}
      />
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Fade
              key={product.id}
              direction="up"
              delay={index * 100}
              triggerOnce
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="overflow-hidden transition duration-300 hover:scale-105 hover:shadow-2xl rounded-xl border border-gray-200 bg-white cursor-pointer">
                    <CardContent className="p-0">
                      <div className="relative">
                        <Image
                          width={1000}
                          height={1000}
                          src={product.image}
                          alt={product.title}
                          className="w-full h-48 object-cover rounded-t-xl transition-opacity duration-200"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black opacity-60 rounded-t-xl"></div>
                        <h2 className="absolute bottom-4 left-4 text-lg font-semibold text-white z-10">
                          {product.title}
                        </h2>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>

                <DialogContent className="rounded-xl p-6 max-w-md mx-auto bg-white">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-bold">
                      {product.title}
                    </DialogTitle>
                  </DialogHeader>
                  <Image
                    width={1000}
                    height={600}
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <DialogDescription className="text-gray-700">
                    {product.description}
                  </DialogDescription>
                </DialogContent>
              </Dialog>
            </Fade>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
