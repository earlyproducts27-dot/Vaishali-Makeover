"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import {
  Menu, X, ChevronRight, Phone, MapPin, Mail, Clock, Calendar,
  Sparkles, Star, Heart, Instagram, Facebook, Twitter, Scissors, Palette, Droplets, ArrowRight
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import aboutImage1 from "@/src/assets/images/regenerated_image_1781459328810.jpg";
import aboutImage2 from "@/src/assets/images/regenerated_image_1781459324158.jpg";
import bridalImageMain from "@/src/assets/images/regenerated_image_1781459602416.jpg";

import bridalImageDetail from "@/src/assets/images/regenerated_image_1781459805428.jpg";
import testImage1 from "@/src/assets/images/regenerated_image_1781460728824.jpg";
import testImage2 from "@/src/assets/images/regenerated_image_1781460644082.jpg";
import testImage3 from "@/src/assets/images/regenerated_image_1781460649194.jpg";
import instaImage1 from "@/src/assets/images/regenerated_image_1781460933999.jpg";
import instaImage2 from "@/src/assets/images/regenerated_image_1781460936169.jpg";
import instaImage3 from "@/src/assets/images/regenerated_image_1781461108316.jpg";
import instaImage4 from "@/src/assets/images/regenerated_image_1781461113949.jpg";
import instaImage5 from "@/src/assets/images/regenerated_image_1781464170003.jpg";
import instaImage6 from "@/src/assets/images/regenerated_image_1781464174823.jpg";

// --- Components ---

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Bridal", href: "#bridal" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/50 backdrop-blur-md py-4 border-b border-beige shadow-sm' : 'bg-transparent py-6 border-b border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-0 mr-0">
          <a href="#home" className="font-serif text-2xl tracking-widest text-primary font-bold -mb-[14px]">
            VAISHALI MAKEOVER<span className="text-rose">.</span>
          </a>
          
          <div className="hidden md:flex space-x-8 text-[#2B2B2B]">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-xs font-semibold tracking-widest text-inherit hover:text-rose transition-colors uppercase">
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a href="#appointment" className="px-6 py-2 bg-primary text-white text-xs font-bold tracking-tighter uppercase hover:bg-rose transition-colors duration-300 flex items-center group">
              <Calendar size={14} className="mr-2 group-hover:scale-110 transition-transform" />
              Book Now
            </a>
          </div>

          <button className="md:hidden text-dark" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 px-4"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-dark hover:text-rose">
                  {link.name}
                </a>
              ))}
              <a href="#appointment" onClick={() => setMobileMenuOpen(false)} className="inline-block mt-4 px-6 py-3 bg-primary text-white text-center font-medium tracking-widest uppercase">
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-ivory">
      <div className="absolute inset-0 z-0">
        {/* Placeholder for uploaded image */}
        <Image
          src="https://picsum.photos/seed/fashion-model/1920/1080"
          alt="Luxury Salon Background"
          fill
          className="object-cover object-center"
          referrerPolicy="no-referrer"
          priority
        />
        <div className="absolute inset-0 bg-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ivory via-transparent to-transparent opacity-80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl sm:text-6xl md:text-7xl font-serif text-white leading-tight mb-0"
          >
            Reveal Your <br/>
            <span className="text-rose-200 italic">Most Beautiful</span> Self.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg text-white/90 max-w-md font-light leading-relaxed h-[59.5px] mb-[11px]"
          >
            Experience luxury makeup, hair styling & premium beauty transformations uniquely crafted for you.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row sm:space-x-4 -mb-[25px] mt-[71px]"
          >
            <a href="#appointment" className="px-8 py-4 bg-primary text-white text-xs font-bold tracking-tighter uppercase hover:bg-rose transition-colors duration-300 text-center flex items-center justify-center mb-[15px] sm:mb-0 h-[50px]">
              Book Appointment <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="px-8 py-4 border border-white text-white text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-dark transition-colors duration-300 text-center flex items-center justify-center h-[49.6px] w-[342.2px]">
              Explore Services
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ title, subtitle, centered = false }: { title: string, subtitle: string, centered?: boolean }) {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      <div className={`inline-flex items-center space-x-4 text-rose mb-4 ${centered ? 'justify-center w-full' : ''}`}>
        {!centered && <div className="h-[1px] w-12 bg-rose" />}
        <span className="uppercase tracking-[0.3em] text-xs font-bold">{subtitle}</span>
        {centered && <div className="h-[1px] w-12 bg-rose" />}
      </div>
      <h2 className="text-5xl md:text-6xl font-serif text-dark leading-tight">{title}</h2>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-24 bg-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <Image src={aboutImage1} alt="About" width={600} height={800} className="object-cover w-full h-[300px] md:h-[450px] shadow-lg mt-8" referrerPolicy="no-referrer" />
              <Image src={aboutImage2} alt="About" width={600} height={800} className="object-cover w-full h-[300px] md:h-[450px] shadow-lg" referrerPolicy="no-referrer" />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeading title="The Art of Elegance & Transformation." subtitle="Our Story" />
            <p className="text-lg text-dark/80 mb-6 leading-relaxed max-w-xl">
              At Vaishali Makeover, we believe that true beauty shines from within. Our philosophy is rooted in enhancing your natural features with premium products and expert techniques, creating a look that is authentically yours.
            </p>
            <p className="text-lg text-dark/80 mb-10 leading-relaxed max-w-xl">
              From the quiet calm of our luxury studio to the final breathtaking reveal, every moment is curated to provide a deeply personalized, client-first experience.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-beige mb-6">
              <div>
                <div className="text-3xl font-serif font-bold text-primary mb-1">1000+</div>
                <div className="text-[10px] uppercase tracking-widest opacity-60">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-bold text-primary mb-1">500+</div>
                <div className="text-[10px] uppercase tracking-widest opacity-60">Bridal Makeovers</div>
              </div>
            </div>

            <div className="bg-white p-6 border-l-4 border-rose shadow-sm mb-10 w-full sm:w-64 relative overflow-hidden inline-block">
              <div className="absolute top-0 right-0 w-32 h-32 bg-ivory rounded-full -mr-16 -mt-16 opacity-50"></div>
              <div className="text-4xl font-serif text-primary mb-2 font-bold relative z-10">05+</div>
              <div className="text-[10px] uppercase tracking-widest text-dark/60 font-semibold relative z-10">Years of<br/>Experience</div>
            </div>

            <br />
            <a href="#services" className="inline-flex items-center text-primary font-medium tracking-widest uppercase hover:text-dark transition-colors group">
              Discover Our Approach <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: Palette,
    title: "Makeup Services",
    desc: "HD Makeup, Airbrush Makeup, Engagement & Party Looks.",
    img: "https://picsum.photos/seed/makeup-svc/800/600"
  },
  {
    icon: Scissors,
    title: "Hair Services",
    desc: "Luxury styling, Spa, Smoothening & Expert Coloring.",
    img: "https://picsum.photos/seed/hair-svc/800/600"
  },
  {
    icon: Droplets,
    title: "Beauty & Skin",
    desc: "Facials, Skin Treatments, Manicure, Pedicure & Waxing.",
    img: "https://picsum.photos/seed/skin-svc/800/600"
  }
];

function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Curated Beauty Experiences" subtitle="Featured Services" centered />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white p-8 border-l-4 border-rose shadow-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-ivory rounded-full -mr-16 -mt-16 opacity-50 transition-transform duration-700 group-hover:scale-110"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-serif mb-6">{service.title}</h3>
                <div className="space-y-4 mb-8">
                   <div className="flex justify-between items-center group/item cursor-pointer border-b border-gray-100 pb-3">
                     <div className="flex items-center gap-4">
                       <div className="w-2 h-2 rounded-full bg-rose"></div>
                       <div>
                         <div className="font-semibold text-sm">Premium Styling</div>
                         <div className="text-[10px] text-gray-400 uppercase tracking-tighter">{service.desc.substring(0, 30)}...</div>
                       </div>
                     </div>
                   </div>
                   <div className="flex justify-between items-center group/item cursor-pointer border-b border-gray-100 pb-3">
                     <div className="flex items-center gap-4">
                       <div className="w-2 h-2 rounded-full bg-beige"></div>
                       <div>
                         <div className="font-semibold text-sm">Signature Touch</div>
                         <div className="text-[10px] text-gray-400 uppercase tracking-tighter">Event Preparation</div>
                       </div>
                     </div>
                   </div>
                </div>
                <button className="w-full mt-2 py-3 bg-dark hover:bg-primary transition-colors text-white text-xs uppercase tracking-[0.2em] font-bold">
                  View All Services
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Bridal() {
  return (
    <section id="bridal" className="py-24 bg-beige relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-ivory transform -skew-x-12 translate-x-20 hidden lg:block" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeading title="Your Perfect Day, Immaculately Crafted." subtitle="Bridal Transformations" />
            <p className="text-lg text-dark/70 mb-6 font-light leading-relaxed">
              We specialize in creating timeless, elegant bridal looks that reflect your unique personality. From traditional to modern aesthetics, our luxury bridal packages ensure you feel confident, radiant, and absolutely flawless.
            </p>
            <ul className="space-y-4 mb-10">
              {['Signature Bridal Makeup', 'Pre-Wedding Consultations', 'Luxury Draping & Styling', 'Premium Touch-up Kit'].map((item, i) => (
                <li key={i} className="flex items-center text-dark/80">
                  <div className="w-1.5 h-1.5 bg-rose rounded-full mr-3" />
                  {item}
                </li>
              ))}
            </ul>
            <a href="#appointment" className="px-8 py-4 bg-dark text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-primary transition-colors duration-300 inline-block">
              Book Bridal Consultation
            </a>
          </motion.div>
          
          <div className="relative">
             <div className="relative h-[600px] w-full bg-white p-4 shadow-xl border border-rose/10">
                <Image 
                  src={bridalImageMain} 
                  alt="Bridal Makeup" 
                  fill 
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
             </div>
             <motion.div 
               animate={{ y: [0, -10, 0] }} 
               transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
               className="absolute -bottom-10 -left-10 bg-white p-4 shadow-xl border border-beige hidden md:block"
             >
               <Image 
                 src={bridalImageDetail} 
                 alt="Bridal Detail" 
                 width={200} 
                 height={250} 
                 className="object-cover h-[250px] w-[200px]"
                 referrerPolicy="no-referrer"
               />
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

const features = [
  "Certified Makeup Artists",
  "Premium Beauty Products",
  "Personalized Consultation",
  "Impeccable Hygiene Standard",
  "Latest Advanced Techniques",
  "Exclusive Bridal Specialists"
];

function Features() {
  return (
    <section className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="The Vaishali Difference" subtitle="Why Choose Us" centered />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 border-l-4 border-rose shadow-xl relative overflow-hidden group transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-ivory rounded-full -mr-16 -mt-16 opacity-50 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <Sparkles className="text-rose mb-6" strokeWidth={1.5} size={32} />
                <h4 className="font-serif text-xl mb-2">{feature}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const packages = [
    {
      name: "Basic Beauty",
      price: "1,999",
      popular: false,
      features: ["Hair Wash & Blow Dry", "Basic Cleanup", "Eyebrow Threading", "Manicure"]
    },
    {
      name: "Bridal Luxury",
      price: "24,999",
      popular: true,
      features: ["HD/Airbrush Makeup", "Advanced Hair Styling", "Pre-bridal Sessions (2)", "Jewelry Draping", "Premium Touch-up Kit"]
    },
    {
      name: "Premium Beauty",
      price: "5,499",
      popular: false,
      features: ["Luxury Facial", "Hair Spa Treatment", "Pedicure & Manicure", "Full Body Waxing"]
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Invest in Your Confidence" subtitle="Luxury Packages" centered />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mt-12">
          {packages.map((pkg, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className={`relative bg-white p-10 flex flex-col h-full border-l-4 ${pkg.popular ? 'border-primary shadow-2xl scale-105 z-10' : 'border-rose shadow-xl'} overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-ivory rounded-full -mr-20 -mt-20 opacity-50"></div>
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-0 bg-primary text-white text-[10px] font-bold tracking-widest uppercase px-4 py-1 rounded-b-md z-10 shadow-sm">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-serif text-dark mb-6 text-center relative z-10">{pkg.name}</h3>
              <div className="text-center mb-8 relative z-10 border-b border-gray-100 pb-8">
                <span className="text-[10px] text-gray-400 uppercase tracking-tighter">Starting at</span>
                <div className="text-4xl font-bold text-primary mt-1">₹{pkg.price}</div>
              </div>
              <div className="flex-1 relative z-10">
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex justify-between items-center group border-b border-gray-100 pb-3">
                      <div className="flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-beige"></div>
                        <span className="text-sm font-semibold">{f}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <a href="#appointment" className={`w-full py-4 text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-300 text-center relative z-10 ${pkg.popular ? 'bg-primary text-white hover:bg-rose' : 'bg-dark text-white hover:bg-primary'}`}>
                Book Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 bg-beige relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="appointment" className="bg-white shadow-2xl p-8 md:p-16 mb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 border-t-4 border-rose">
          <div>
            <SectionHeading title="Reserve Your Time." subtitle="Book Appointment" />
            <p className="text-dark/70 mb-8 font-light">
              We look forward to curating a premium beauty experience for you. Please provide your details, and our team will get back to confirm your appointment.
            </p>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-medium tracking-widest uppercase text-dark/70 mb-2">Full Name</label>
                  <input type="text" className="w-full border-b border-dark/20 py-2 bg-transparent focus:outline-none focus:border-primary transition-colors text-dark" placeholder="Jane Doe" required />
                </div>
                <div>
                  <label className="block text-xs font-medium tracking-widest uppercase text-dark/70 mb-2">Phone Number</label>
                  <input type="tel" className="w-full border-b border-dark/20 py-2 bg-transparent focus:outline-none focus:border-primary transition-colors text-dark" placeholder="+91 98765 43210" required />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-medium tracking-widest uppercase text-dark/70 mb-2">Service Required</label>
                  <select className="w-full border-b border-dark/20 py-2 bg-transparent focus:outline-none focus:border-primary transition-colors text-dark/70">
                    <option>Bridal Makeup</option>
                    <option>Party Makeup</option>
                    <option>Hair Styling</option>
                    <option>Beauty consultation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium tracking-widest uppercase text-dark/70 mb-2">Preferred Date</label>
                  <input type="date" className="w-full border-b border-dark/20 py-2 bg-transparent focus:outline-none focus:border-primary transition-colors text-dark/70" required />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium tracking-widest uppercase text-dark/70 mb-2">Message (Optional)</label>
                <textarea rows={3} className="w-full border-b border-dark/20 py-2 bg-transparent focus:outline-none focus:border-primary transition-colors text-dark resize-none" placeholder="Tell us about your requirements..."></textarea>
              </div>
              <button type="submit" className="px-8 py-4 bg-primary text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-rose transition-colors duration-300 w-full md:w-auto">
                Confirm Request
              </button>
            </form>
          </div>
          
          <div className="flex flex-col justify-center bg-white p-10 border-l-4 border-rose shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-ivory rounded-full -mr-20 -mt-20 opacity-50"></div>
            <h3 className="text-2xl font-serif text-dark mb-8 relative z-10">Salon Information</h3>
            <div className="space-y-6 relative z-10">
              <div className="flex items-start">
                <MapPin className="text-rose mr-4 min-w-[24px] mt-1" size={24} strokeWidth={1.5} />
                <div>
                  <div className="font-medium text-dark uppercase tracking-wider text-sm mb-1">Our Studio</div>
                  <div className="text-dark/70 font-light">123 Luxury Avenue, Elegance Tower<br/>New Delhi, 110001</div>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="text-rose mr-4 min-w-[24px] mt-1" size={24} strokeWidth={1.5} />
                <div>
                  <div className="font-medium text-dark uppercase tracking-wider text-sm mb-1">Call Us</div>
                  <div className="text-dark/70 font-light">+91 98765 43210<br/>+91 11 2345 6789</div>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="text-rose mr-4 min-w-[24px] mt-1" size={24} strokeWidth={1.5} />
                <div>
                  <div className="font-medium text-dark uppercase tracking-wider text-sm mb-1">Business Hours</div>
                  <div className="text-dark/70 font-light">Mon - Sun: 10:00 AM - 8:00 PM<br/>Tuesday: Closed</div>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="text-rose mr-4 min-w-[24px] mt-1" size={24} strokeWidth={1.5} />
                <div>
                  <div className="font-medium text-dark uppercase tracking-wider text-sm mb-1">Email</div>
                  <div className="text-dark/70 font-light">hello@vaishalimakeover.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-dark text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <a href="#home" className="font-serif text-2xl tracking-widest text-white font-medium mb-6 inline-block">
              VAISHALI MAKEOVER<span className="text-rose">.</span>
            </a>
            <p className="text-white/60 font-light mb-6 text-sm leading-relaxed">
              Elevating beauty and confidence through premium makeup, modern styling, and luxurious spa experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-rose hover:border-transparent transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-rose hover:border-transparent transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="uppercase tracking-widest text-sm font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 font-light text-white/60 text-sm">
              <li><a href="#home" className="hover:text-rose transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-rose transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-rose transition-colors">Services</a></li>
              <li><a href="#pricing" className="hover:text-rose transition-colors">Price List</a></li>
              <li><a href="#contact" className="hover:text-rose transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="uppercase tracking-widest text-sm font-semibold mb-6">Services</h4>
            <ul className="space-y-3 font-light text-white/60 text-sm">
              <li><a href="#" className="hover:text-rose transition-colors">Bridal Makeup</a></li>
              <li><a href="#" className="hover:text-rose transition-colors">Party & Event Makeup</a></li>
              <li><a href="#" className="hover:text-rose transition-colors">Hair Styling & Spa</a></li>
              <li><a href="#" className="hover:text-rose transition-colors">Advanced Skin Care</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="uppercase tracking-widest text-sm font-semibold mb-6">Newsletter</h4>
            <p className="text-white/60 font-light mb-4 text-sm">Subscribe to receive exclusive beauty tips and offers.</p>
            <div className="flex">
              <input type="email" placeholder="Email Address" className="bg-transparent border-b border-white/30 text-white w-full py-2 focus:outline-none focus:border-rose text-sm font-light" />
              <button className="border-b border-white/30 hover:border-rose text-rose uppercase text-xs tracking-widest font-medium px-2 pb-2">Join</button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-light text-white/40 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Vaishali Makeover. All Rights Reserved.</p>
          <p className="mt-4 md:mt-0">Designed elegantly</p>
        </div>
      </div>
    </footer>
  );
}


function Testimonials() {
  const testimonials = [
    { id: 1, img: testImage1, name: "Priya Sharma" },
    { id: 2, img: testImage2, name: "Aditi Verma" },
    { id: 3, img: testImage3, name: "Meera Rajput" }
  ];

  return (
    <section id="testimonials" className="py-24 bg-beige relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="Words from Our Brides" subtitle="Testimonials" centered />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-beige/30 p-10 border border-beige flex flex-col items-center justify-center text-center relative">
              <div className="text-rose mb-4 font-serif italic text-lg">Transformation Spotlight</div>
              <div className="w-full aspect-video bg-white flex items-center justify-center relative mb-6">
                <div className="absolute inset-4 border border-rose/30"></div>
                <Image src={item.img} alt="Client" fill className="object-cover opacity-80" referrerPolicy="no-referrer" />
              </div>
              <p className="text-[11px] uppercase tracking-widest leading-loose text-dark mb-4">
                &quot;The attention to detail in my bridal look was beyond expectations. Simply magical.&quot;
              </p>
              <div className="font-bold text-xs">— {item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InstagramGallery() {
  const instaImages = [
    instaImage1,
    instaImage2,
    instaImage3,
    instaImage4,
    instaImage5,
    instaImage6
  ];

  return (
    <section className="py-0 relative flex overflow-hidden w-full bg-dark">
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <a href="#" className="pointer-events-auto px-8 py-4 bg-white/90 backdrop-blur-sm text-dark hover:bg-primary hover:text-white transition-all duration-300 uppercase tracking-widest text-sm font-medium flex items-center shadow-2xl border border-rose/20">
          <Instagram size={18} className="mr-3" /> Follow @VaishaliMakeover
        </a>
      </div>
      <div className="flex w-full overflow-hidden opacity-60 hover:opacity-100 transition-opacity duration-500">
        {instaImages.map((img, idx) => (
          <div key={idx} className="relative w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 aspect-square flex-shrink-0">
            <Image src={img} alt="Instagram" fill className="object-cover" referrerPolicy="no-referrer" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-ivory">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Bridal />
      <Features />
      <Pricing />
      <Testimonials />
      <Contact />
      <InstagramGallery />
      <Footer />
    </main>
  );
}

