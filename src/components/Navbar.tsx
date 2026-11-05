import { useState } from "react";
import { Menu, X, Leaf, UserCircle, ShoppingCart, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { useStore } from "@/context/StoreContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useStore();

  const navigation = [
    { name: "Accueil", href: "/", icon: Leaf },
    { name: "À propos", href: "/about", icon: UserCircle },
    { name: "Services", href: "/services", icon: BarChart3 },
    { name: "Marketplace", href: "/marketplace", icon: ShoppingCart },
    { name: "Réservations", href: "/reservations", icon: BarChart3 },
    { name: "Tableau de bord", href: "/dashboard/user", icon: UserCircle },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center shadow-glow">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary">Smart Agro</h1>
              <p className="text-xs text-muted-foreground">Sénégal</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/cart" className="relative p-2 rounded-md hover:bg-accent" aria-label="Panier">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">{cartCount}</span>}
            </Link>
            <Button variant="ghost" className="hover:bg-accent">
              Connexion
            </Button>
            <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              S'inscrire
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <Link to="/cart" className="relative p-2 rounded-md hover:bg-accent" aria-label="Panier">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">{cartCount}</span>}
            </Link>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "lg:hidden overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 pb-4" : "max-h-0"
        )}>
          <div className="flex flex-col space-y-3 pt-4 border-t border-border">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-3 px-3 py-2 rounded-md text-foreground hover:text-primary hover:bg-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </a>
            ))}
            <div className="flex flex-col space-y-2 pt-3 border-t border-border">
              <Button variant="ghost" className="justify-start">
                Connexion
              </Button>
              <Button className="justify-start bg-gradient-primary">
                S'inscrire
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;