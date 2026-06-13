import { Mail, Phone, MapPin } from "lucide-react";
import { socialLinks } from "@/lib/data/constant";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedItem } from "@/components/ui/AnimatedItem";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0B0B0B] text-white pt-16 pb-8 px-8">
      <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <AnimatedSection>
            <AnimatedItem type="slideLeft" index={0} className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#FF2E2E] rounded-md flex items-center justify-center">
                <span className="font-bold">CR</span>
              </div>
              <span className="font-bold text-xl">CarRental</span>
            </AnimatedItem>
            <AnimatedItem type="slideLeft" index={1}>
            <p className="text-gray-400 mb-4">
              Your trusted partner for premium car rentals. Experience luxury
              and comfort on every journey.
            </p>
            </AnimatedItem>
            <div className="flex gap-4">
              {socialLinks.map((socialIcon, index) => {
                const Icon = socialIcon.icon;
                return (
                  <AnimatedItem type="slideUp" key={index} index={index}>
                    <a
                      href="#"
                      className="w-10 h-10 bg-white/10 hover:bg-[#FF2E2E] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      <Icon size={18} />
                    </a>
                  </AnimatedItem>
                );
              })}
            </div>
          </AnimatedSection>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Services", "About Us", "Cars", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#FF2E2E] transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <AnimatedSection>
            <h3 className="text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                "Wedding Car Rental",
                "Airport Transfer",
                "Corporate Rental",
                "Long Term Rental",
                "Chauffeur Service",
              ].map((service, index) => (
                <AnimatedItem key={index} type="slideUp" index={index}>
                  <li
                    key={service}
                    className="text-gray-400 hover:text-[#FF2E2E] transition-colors duration-300"
                  >
                    {service}
                  </li>
                </AnimatedItem>
              ))}
            </ul>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection>
            <AnimatedItem type="slideRight" index={0}>
              <h3 className="text-lg mb-4">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-400">
                  <MapPin
                    size={20}
                    className="shrink-0 text-[#FF2E2E] mt-1"
                  />
                  <span>
                    153-H, Commercial Zone, Phase 1, DHA Lahore Cantt, Lahore,
                    Pakistan
                  </span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <Phone size={20} className="shrink-0 text-[#FF2E2E]" />
                  <span>+92 335 4611570</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <Mail size={20} className="shrink-0 text-[#FF2E2E]" />
                  <span>lahorecarrent@gmail.com</span>
                </li>
              </ul>
            </AnimatedItem>
          </AnimatedSection>
        </div>

        {/* Bottom Bar */}
        <AnimatedSection className="pt-8 border-t border-white/10">
          <AnimatedItem
            type="slideUp"
            index={0}
            className="flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <p className="text-gray-400 text-sm">
              © 2026 CarRental. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-[#FF2E2E] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#FF2E2E] transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </AnimatedItem>
        </AnimatedSection>
      </div>
    </footer>
  );
}
