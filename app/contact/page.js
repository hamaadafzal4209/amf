"use client";

import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function ContactUs() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent",
      description: "We've received your message and will get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-12 py-12">
      <h2 className="text-4xl font-semibold text-center text-gray-900 mb-10">
        Contact Us
      </h2>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <Card className="shadow-lg rounded-lg border border-gray-200 bg-white">
          <CardHeader className="flex flex-col items-center py-6">
            <MapPin className="h-12 w-12 text-main mb-4" />
            <CardTitle className="text-xl font-semibold text-center text-gray-900">
              Our Location
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center text-main">
            <p>108930, Jeddah 21351, K.S.A</p>
          </CardContent>
        </Card>

        <Card className="shadow-lg rounded-lg border border-gray-200 bg-white">
          <CardHeader className="flex flex-col items-center py-6">
            <Mail className="h-12 w-12 text-main mb-4" />
            <CardTitle className="text-xl font-semibold text-center text-gray-900">
              Email Us
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center text-gray-600">
            <a
              href="mailto:info@amf-sa.com"
              className="text-lg text-main hover:underline"
            >
              info@amf-sa.com
            </a>
          </CardContent>
        </Card>

        <Card className="shadow-lg rounded-lg border border-gray-200 bg-white">
          <CardHeader className="flex flex-col items-center py-6">
            <Phone className="h-12 w-12 text-main mb-4" />
            <CardTitle className="text-xl font-semibold text-center text-gray-900">
              Call Us
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center text-gray-600">
            <a
              href="tel:+966569105617"
              className="text-lg text-main hover:underline"
            >
              +966 56 910 5617
            </a>
          </CardContent>
        </Card>
      </div>

      {/* Contact Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="shadow-lg rounded-lg border border-gray-200 bg-white">
          <CardHeader>
            <CardTitle>Send Us a Message</CardTitle>
            <CardDescription>
              {
                "Fill out the form below and we'll get back to you as soon as possible."
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-6">
                <div className="flex flex-col">
                  <Label htmlFor="name" className="text-gray-600 mb-2">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    required
                    className="border-gray-300 rounded-md"
                  />
                </div>

                <div className="flex flex-col">
                  <Label htmlFor="email" className="text-gray-600 mb-2">
                    Your Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    required
                    className="border-gray-300 rounded-md"
                  />
                </div>

                <div className="flex flex-col">
                  <Label htmlFor="message" className="text-gray-600 mb-2">
                    Your Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write your message"
                    required
                    className="border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="text-right">
            <Button
              type="submit"
              onClick={handleSubmit}
              className="bg-main text-white hover:bg-black transition-all duration-300"
            >
              Send Message
            </Button>
          </CardFooter>
        </Card>

        {/* Map & Address Info */}
        <Card className="shadow-lg rounded-lg border border-gray-200 bg-white">
          <CardHeader>
            <CardTitle>Our Contact Information</CardTitle>
            <CardDescription>
              Feel free to reach out to us directly.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="h-5 w-5 text-main" />
                <span>123 Switchgear Avenue, Power City, PC 12345</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Phone className="h-5 w-5 text-main" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Mail className="h-5 w-5 text-main" />
                <span>info@switchgearcompany.com</span>
              </div>

              <div className="mt-6">
                <iframe
                  title="Company Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095919576!2d-74.00425528459415!3d40.74076797932818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1621436591560!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
