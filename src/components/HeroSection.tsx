import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Navbar = () => (
  <motion.nav
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
    className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md bg-background/70 border-b border-border/50"
  >
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <a href="#" className="font-display text-2xl font-bold gradient-gold-text">
        Café & Bar
      </a>
      <div className="hidden md:flex items-center gap-8">
        {["About", "Menu", "Gallery", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-gold transition-colors duration-300"
          >
            {item}
          </a>
        ))}
      </div>
      <a
        href="#contact"
        className="hidden md:inline-block px-5 py-2 text-sm font-body tracking-wider uppercase border border-gold/40 text-gold hover:bg-gold/10 transition-all duration-300 rounded-sm"
      >
        Reserve
      </a>
    </div>
  </motion.nav>
);

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroBg} alt="Premium cafe bar interior" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
    </div>
    <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="font-elegant text-lg md:text-xl tracking-[0.3em] uppercase text-gold-light mb-6"
      >
        New Delhi's Finest
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
      >
        Where Coffee Meets{" "}
        <span className="gradient-gold-text">Nightlife Elegance</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="font-elegant text-xl md:text-2xl text-muted-foreground mb-10 italic"
      >
        Premium coffee by day, vibrant bar by night
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a
          href="#menu"
          className="px-8 py-3.5 gradient-gold text-primary-foreground font-body text-sm tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity"
        >
          Explore Menu
        </a>
        <a
          href="#contact"
          className="px-8 py-3.5 border border-gold/40 text-gold font-body text-sm tracking-widest uppercase rounded-sm hover:bg-gold/10 transition-all duration-300"
        >
          Reserve a Table
        </a>
      </motion.div>
    </div>
  </section>
);

export { Navbar, HeroSection };
