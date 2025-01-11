import { Clock, Shield, Zap } from "lucide-react";

export const features = [
  {
    icon: <Shield className="w-8 h-8 text-main group-hover:text-white" />,
    title: "Advanced Safety Standards",
    description:
      "Our AMF panels and low voltage switchgear are designed to meet stringent safety standards, ensuring secure operation in all environments.",
    benefits: [
      "Enhanced protection",
      "Certified compliance",
      "Operational safety",
    ],
  },
  {
    icon: <Zap className="w-8 h-8 text-main group-hover:text-white" />,
    title: "Optimized Efficiency",
    description:
      "Engineered for peak performance, our AMF panels and switchgear minimize energy loss and maximize system efficiency.",
    benefits: ["Energy savings", "Improved performance", "Cost-effectiveness"],
  },
  {
    icon: <Clock className="w-8 h-8 text-main group-hover:text-white" />,
    title: "Built for Longevity",
    description:
      "Constructed with durable materials, our AMF panels and switchgear are built to provide reliable performance over their entire lifespan.",
    benefits: [
      "Durable materials",
      "Reduced downtime",
      "Long-term reliability",
    ],
  },
];
