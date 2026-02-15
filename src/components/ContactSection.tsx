import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-24 px-6 bg-secondary/30">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="font-elegant text-sm tracking-[0.3em] uppercase text-gold mb-4">
          Get In Touch
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold">
          Find <span className="gradient-gold-text">Us</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {[
            { icon: Phone, label: "Phone", value: "+91-9990055405", href: "tel:+919990055405" },
            { icon: Mail, label: "Email", value: "devtechbi19@gmail.com", href: "mailto:devtechbi19@gmail.com" },
            { icon: MapPin, label: "Location", value: "New Delhi, Delhi 110096, India", href: "#" },
          ].map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center border border-gold/30 rounded-sm text-gold shrink-0">
                <Icon size={20} />
              </div>
              <div>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">
                  {label}
                </p>
                <a
                  href={href}
                  className="font-body text-foreground hover:text-gold transition-colors"
                >
                  {value}
                </a>
              </div>
            </div>
          ))}

          <div className="pt-4">
            <p className="font-elegant text-sm tracking-wider text-muted-foreground mb-2">
              Opening Hours
            </p>
            <div className="space-y-1 font-body text-sm text-foreground">
              <p>Mon – Fri: 8:00 AM – 1:00 AM</p>
              <p>Sat – Sun: 9:00 AM – 2:00 AM</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-sm overflow-hidden gold-border-glow h-80 md:h-full min-h-[320px]"
        >
          <iframe
            title="Café & Bar Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923421!2d77.06889754725782!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.9)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactSection;
