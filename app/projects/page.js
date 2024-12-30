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
import { projects } from "@/constants/projectsData";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export default function Projectshowcase() {
  return (
    <MainLayout>
      <HeroBanner 
        title={"Our Projects"}
        backgroundImage={"/assets/projects-banner.jpg"}
      />
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((product, index) => (
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

                <DialogContent className="rounded-xl p-6 max-w-full md:max-w-lg lg:max-w-xl max-h-[90vh] overflow-y-auto mx-auto bg-white shadow-lg">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-bold text-main">
                      {product.title}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="relative mb-4">
                    <Image
                      width={1000}
                      height={300}
                      src={product.image}
                      alt={product.title}
                      className="w-full h-60 md:h-72 object-cover rounded-lg"
                    />
                  </div>
                  <DialogDescription className="text-gray-700 text-sm md:text-base leading-relaxed">
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
