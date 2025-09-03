import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, Search, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-subtle">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-8xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
            404
          </h1>
          <h2 className="text-2xl font-bold text-primary mb-4">
            Page non trouvée
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée. 
            Retournez à l'accueil pour découvrir nos solutions agricoles intelligentes.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
            <Link to="/">
              <Home className="w-4 h-4 mr-2" />
              Retour à l'accueil
            </Link>
          </Button>
          
          <Button variant="outline" asChild className="border-primary/30 hover:bg-primary/5">
            <Link to="/marketplace">
              <Search className="w-4 h-4 mr-2" />
              Voir la marketplace
            </Link>
          </Button>
        </div>

        <div className="mt-8 text-sm text-muted-foreground">
          <p>Vous cherchez quelque chose de spécifique ?</p>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <Link to="/about" className="hover:text-primary transition-colors">
              À propos
            </Link>
            <Link to="/marketplace" className="hover:text-primary transition-colors">
              Marketplace
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
