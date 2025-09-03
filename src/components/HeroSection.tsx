import { ArrowRight, Play, Users, TrendingUp, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-farm.jpg";

const HeroSection = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Agriculteurs" },
    { icon: TrendingUp, value: "+40%", label: "Rendements" },
    { icon: Smartphone, value: "24/7", label: "Monitoring" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Smart Farm Sénégal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-accent/80 backdrop-blur-sm text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-success rounded-full animate-pulse-glow" />
                <span>Innovation Agricole 2025</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-primary">Agriculture</span>
                <br />
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Intelligente
                </span>
                <br />
                <span className="text-foreground">au Sénégal</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                Révolutionnez vos cultures avec notre ferme connectée : IoT, irrigation intelligente, 
                marketplace numérique et accompagnement personnalisé pour maximiser vos rendements.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
              >
                Découvrir la plateforme
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/30 hover:bg-primary/5 group"
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Voir la démo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center shadow-soft group-hover:shadow-glow transition-all duration-300">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Features highlight */}
          <div className="lg:ml-8">
            <div className="bg-card/80 backdrop-blur-md rounded-2xl p-8 shadow-strong border border-border/50">
              <h3 className="text-2xl font-bold text-primary mb-6">Technologie Avancée</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 rounded-lg bg-gradient-to-r from-success/10 to-transparent border border-success/20">
                  <div className="w-10 h-10 bg-success rounded-full flex items-center justify-center flex-shrink-0">
                    <Smartphone className="w-5 h-5 text-success-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Capteurs IoT</h4>
                    <p className="text-muted-foreground text-sm">Surveillance en temps réel de l'humidité, température et nutriments</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-lg bg-gradient-to-r from-earth/10 to-transparent border border-earth/20">
                  <div className="w-10 h-10 bg-earth rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Irrigation Automatisée</h4>
                    <p className="text-muted-foreground text-sm">Système d'arrosage intelligent basé sur les données météo</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-lg bg-gradient-to-r from-primary/10 to-transparent border border-primary/20">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Marketplace Connecté</h4>
                    <p className="text-muted-foreground text-sm">Vente directe aux acheteurs avec prix garantis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-float" />
      <div className="absolute bottom-32 left-20 w-16 h-16 bg-gradient-earth rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default HeroSection;