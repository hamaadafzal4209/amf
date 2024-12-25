"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Fade } from "react-awesome-reveal";
import HeroBanner from "@/components/HeroBanner";
import MainLayout from "@/components/Layout/MainLayout";

export default function ContactUs() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    console.log("Form submission triggered");
    console.log("Contact API hit");

    console.log("SMTP_HOST:", process.env.SMTP_HOST);
    console.log("SMTP_PORT:", process.env.SMTP_PORT);
    console.log("EMAIL:", process.env.EMAIL);
    console.log("EMAIL_PASSWORD:", process.env.EMAIL_PASSWORD);

    console.log("Form submitted with data:", formData);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    console.log("API Response:", result);

    setLoading(false); // Set loading state to false when response is received

    if (response.ok) {
      toast({
        title: "Message sent successfully!",
        description: "We will get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } else {
      toast({
        title: "Error sending message",
        description: result.error || "Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <MainLayout>
      <HeroBanner
        title={"Contact Us"}
        backgroundImage={"/assets/contact-banner.jpg"}
      />
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              icon: MapPin,
              title: "Our Location",
              content:
                "AL-MARAM AL-FANEYAH, حي المحجر, Jeddah 22511, SAUDI ARABIA",
            },
            {
              icon: Mail,
              title: "Email Us",
              content: (
                <a
                  href="mailto:info@amf-sa.com"
                  className="text-main hover:underline"
                >
                  info@amf-sa.com
                </a>
              ),
            },
            {
              icon: Phone,
              title: "Call Us",
              content: (
                <a
                  href="tel:+966569105621"
                  className="text-main hover:underline"
                >
                  +966 56 910 5621
                </a>
              ),
            },
            {
              icon: MessageCircle,
              title: "WhatsApp Us",
              content: (
                <a
                  href="https://wa.me/966569105781"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-main hover:underline"
                >
                  +966 56 910 5781
                </a>
              ),
            },
          ].map(({ icon: Icon, title, content }, index) => (
            <Card
              key={index}
              className="shadow-md rounded-lg border border-gray-200 bg-white"
            >
              <CardHeader className="flex flex-col items-center py-6">
                <Icon className="h-12 w-12 text-main mb-4" />
                <CardTitle className="text-xl font-semibold text-center text-gray-900">
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                {content}
              </CardContent>
            </Card>
          ))}
        </div>

        <Fade direction="up" triggerOnce delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-md rounded-lg border border-gray-200 bg-white">
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and well get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-6">
                    <div className="flex flex-col">
                      <Label htmlFor="name" className="text-gray-600 mb-2">
                        Your Name
                      </Label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        required
                        className="border-gray-300 w-full px-3 py-1.5 border rounded-md shadow-sm focus:ring-2 focus:ring-[#E66F3D] focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-col">
                      <Label htmlFor="email" className="text-gray-600 mb-2">
                        Your Email
                      </Label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        required
                        className="border-gray-300 w-full mt-1 px-3 py-1.5 border rounded-md shadow-sm focus:ring-2 focus:ring-[#E66F3D] focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-col">
                      <Label htmlFor="message" className="text-gray-600 mb-2">
                        Your Message
                      </Label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Write your message"
                        required
                        className="border-gray-300 min-h-40 w-full mt-1 px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-[#E66F3D] focus:outline-none"
                      />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="text-right">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="px-4 py-2 rounded-md bg-main text-white hover:bg-black transition-all duration-300 disabled:opacity-75 disabled:hover:bg-main disabled:cursor-not-allowed"
                  disabled={loading}
                >
                  {loading ? <span>Sending...</span> : "Send Message"}
                </button>
              </CardFooter>
            </Card>
            <Card className="shadow-md rounded-lg border border-gray-200 bg-white">
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
                    <span>AL-MARAM AL-FANEYAH, حي المحجر, Jeddah 22511</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Phone className="h-5 w-5 text-main" />
                    <span>+966 56 910 5621</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Mail className="h-5 w-5 text-main" />
                    <span> info@amf-sa.com</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MessageCircle className="h-5 w-5 text-main" />
                    <span>WhatsApp: +966 56 910 5781</span>
                  </div>

                  <div className="mt-6">
                    <iframe
                      title="Company Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.0160869557562!2d39.18492307388917!3d21.428612673927788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3c8e5327c464b%3A0x4143e81285adbd42!2zSkpNQTM3NjDYjCAzNzYwINin2YTYo9iu2LfZhNiMIDc3NjbYjCDYrdmKINin2YTZhdit2KzYsSwgSmVkZGFoIDIyNTExLCBTYXVkaSBBcmFiaWE!5e0!3m2!1sen!2s!4v1734176258791!5m2!1sen!2s"
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
        </Fade>
      </div>
    </MainLayout>
  );
}
