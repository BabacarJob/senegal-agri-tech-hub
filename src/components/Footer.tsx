import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: "À propos", href: "/about" },
    { name: "Notre équipe", href: "/team" },
    { name: "Investisseurs", href: "/investors" },
    { name: "Carrières", href: "/careers" },
  ];

  const serviceLinks = [
    { name: "IoT Agricole", href: "/services/iot" },
    { name: "Marketplace", href: "/marketplace" },
    { name: "Formation", href: "/services/training" },
    { name: "Conseil", href: "/services/consulting" },
  ];

  const supportLinks = [
    { name: "Centre d'aide", href: "/help" },
    { name: "Contact", href: "/contact" },
    { name: "Documentation", href: "/docs" },
    { name: "API", href: "/api" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="bg-gradient-subtle border-t border-border">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center shadow-glow">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-primary">Smart Agro Sénégal</h2>
                <p className="text-sm text-muted-foreground">Ferme intelligente connectée</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Révolutionnons l'agriculture sénégalaise avec des technologies intelligentes : IoT, irrigation automatisée, marketplace numérique et formation des agriculteurs.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Dakar, Sénégal</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+221 77 123 45 67</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>contact@smartagro.sn</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="font-semibold text-primary mb-4">Entreprise</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-primary mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-primary mb-4">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="max-w-md">
            <h3 className="font-semibold text-primary mb-2">Newsletter</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Recevez les dernières actualités sur l'agriculture intelligente au Sénégal.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Votre email"
                className="flex-1"
              />
              <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                S'abonner
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {currentYear} Smart Agro Sénégal. Tous droits réservés.
          </p>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;