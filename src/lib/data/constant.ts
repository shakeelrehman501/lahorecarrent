import { IconType } from "react-icons";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { CheckCircle2, Shield, Headphones, DollarSign, Award, Clock, Car } from 'lucide-react';
import { FaFacebookF } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa"

export const navItems = [
  { id: "/", label: "Services" },
  { id: "contact", label: "Contact Us" },
  { id: "about", label: "About Us" },
];


export interface BrandType {
  name:string,
  image:string
}

export const brands:BrandType[] = [
  {
    name: "Toyota",
    image:
      "/others/toyotaLogo.webp",
  },
  {
    name: "Fortuner",
    image:
      "/others/fortunerLogo.webp",
  },
  {
    name: "Bentley",
    image:
      "/others/toyotaLogo.webp",
  },
  {
    name: "Chevrolet",
    image:
      "/others/fortunerLogo.webp",
  },
  {
    name: "Ferrari",
    image:
      "/others/parado.png",
  },
];


export interface popularCarCardType {
  id: number;
  name: string;
  description:string;
  price: string;
  image: string;
}

export const popularCarCard:popularCarCardType[] = [
  {
    id: 1,
    name: "Land Cruiser v8 LC300",
    description:"Experience elite luxury, unmatched power and premium comfort for every journey",
    price: "50,000",
    image: "/cardImages/card_img_1.webp",
  },
  {
    id: 2,
    name: "Toyota Carolla",
    description:"Reliable, fuel-efficient and comfortable sedan for daily city and family travel.",
    price: "7,000",
    image: "/cardImages/card_img_2.webp",
  },
  {
    id: 3,
    name: "Parado",
    description:"Luxury SUV built for comfort, adventure and unforgettable driving experiences everywhere.",
    price: "18,000",
    image: "/cardImages/card_img_3.webp",
  },
  {
    id: 4,
    name: "Honda Sivic",
    description:"Stylish sedan delivering premium comfort, smooth performance and modern driving experience.",
    price: "10,000",
    image: "/cardImages/card_img_4.webp",
  },
  {
    id: 5,
    name: "Grandi X",
    description:"Premium sedan combining elegant design, comfort and advanced driving technology features.",
    price: "8,000",
    image: "/cardImages/card_img_5.webp",
  },
  {
    id: 6,
    name: "Yasir",
    description:"Compact, comfortable and fuel-efficient car perfect for everyday city travel needs.",
    price: "6,000",
    image: "/cardImages/card_img_6.webp",
  },   
];  


export interface WhyChooseUsType {
  icon:IconType;
  title:string;
  description:string
}

export const whyChooseUsFeatures:WhyChooseUsType[] = [
  {
    icon: Shield,
    title: 'Best Price Guarantee',
    description: 'We offer the most competitive prices with unbeatable value for money.',
  },
  {
    icon: Award,
    title: '24/7 Customer Service',
    description: 'Premium customer service that exceeds your expectations.',
  },
  {
    icon: Car,
    title: 'Professional Drivers',
    description: 'Travel with highly experienced and professional drivers for a safe and comfortable journey.',
  },
  {
    icon: DollarSign,
    title: 'Free Cancellation',
    description: 'Cancel anytime without any hidden fees or charges.',
  },
  {
    icon: CheckCircle2,
    title: 'Unlimited Miles',
    description: 'Drive as much as you want with no mileage restrictions.',
  },
];


export const feedbackCardItems = [
  {
    id: 1,
    firstCharacter: "J",
    name: "James Wilson",
    review:
      "Excellent service from start to finish. The car was spotless, well-maintained, and exactly as described. The booking process was smooth, and the staff was extremely professional.",
  },
  {
    id: 2,
    firstCharacter: "S",
    name: "Sarah Johnson",
    review:
      "Outstanding experience. Their professional drivers and premium vehicles made our journey comfortable and stress-free. I’ll definitely use their service again.",
  },
  {
    id: 3,
    firstCharacter: "Z",
    name: "Zainab Malik",
    review:
      "Booking was super smooth via WhatsApp, and the car was clean, comfortable, and exactly what I needed.",
  },
  {
    id: 4,
    firstCharacter: "M",
    name: "Mark Kole",
    review:
      "Best luxury car rental service in Lahore, hands down. Their rates are very competitive compared to market standards, and their 24/7 customer support team is incredibly responsive and helpful.",
  },
  {
    id: 5,
    firstCharacter: "E",
    name: "Emily Davis",
    review:
      "Highly recommended. Great prices and very reliable service.",
  },
  {
    id: 6,
    firstCharacter: "J",
    name: "Jim Lewis",
    review:
      "Fantastic experience from booking to return. The car was in excellent condition, drove perfectly, and the entire process was quick and seamless.",
  },
];


export interface ContactCardType {
  icon:IconType,
  title:string,
  data:string
}

export const contactCardData:ContactCardType[] = [
  {
    icon:HiOutlineMail, 
    title:"Email",
    data:"lahorecarrent@gmail.com"
  },
  {
    icon:FiPhoneCall, 
    title:"Phone",
    data:"0335-4611570"
  },
  {
    icon:GrLocation, 
    title:"Location",
    data:"153-H, Commercial Zone, Phase 1, DHA Lahore Cantt, Lahore"
  },
]


export interface AboutCardType {
  icon:IconType;
  title:string;
  description:string
}

export const aboutCardData:AboutCardType[] = [
  {
    icon: Shield,
    title: 'Best Price Guarantee',
    description: 'We offer the most competitive prices with unbeatable value for money.',
  },
  {
    icon: Award,
    title: '24/7 Customer Service',
    description: 'Premium customer service that exceeds your expectations.',
  },
  {
    icon: Car,
    title: 'Professional Drivers',
    description: 'Travel with highly experienced and professional drivers for a safe and comfortable journey.',
  },
  {
    icon: DollarSign,
    title: 'Free Cancellation',
    description: 'Cancel anytime without any hidden fees or charges.',
  },
  {
    icon: CheckCircle2,
    title: 'Unlimited Miles',
    description: 'Drive as much as you want with no mileage restrictions.',
  }
];


export interface Links {
  name: string;
  icon:IconType;
  href:string
}

export const socialLinks:Links[] = [
    {
      name: "Facebook",
      icon: FaFacebookF,
      href: "#",
    },
    {
      name: "Instagram",
      icon: LuInstagram,
      href: "#",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedinIn ,
      href: "#",
    },
];