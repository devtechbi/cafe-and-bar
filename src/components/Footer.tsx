import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/50 py-12 px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="text-center md:text-left">
        <p className="font-display text-xl font-bold gradient-gold-text mb-1">Café & Bar</p>
        <p className="font-body text-xs text-muted-foreground">
          New Delhi, Delhi 110096 · +91-9990055405 · devtechbi19@gmail.com
        </p>
      </div>
      <div className="flex gap-4">
        {[Instagram, Facebook, Twitter].map((Icon, i) => (
          <a
            key={i}
            href="#"
            aria-label="Social media"
            className="w-10 h-10 flex items-center justify-center border border-border rounded-full text-muted-foreground hover:text-gold hover:border-gold/40 transition-all duration-300"
          >
            <Icon size={16} />
          </a>
        ))}
      </div>
      <p className="font-body text-xs text-muted-foreground">
        © {new Date().getFullYear()} Café & Bar. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
