import { TrendingUp, Users, MapPin, Banknote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const StatsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "+40%",
      label: "Augmentation des Rendements",
      description: "Amélioration moyenne observée sur les cultures pilotes",
      color: "text-success",
      bgColor: "bg-success/10",
      borderColor: "border-success/20"
    },
    {
      icon: Users,
      value: "500+",
      label: "Agriculteurs Formés",
      description: "Bénéficiaires du programme d'accompagnement",
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20"
    },
    {
      icon: MapPin,
      value: "50 ha",
      label: "Superficie Pilote",
      description: "Zone de démonstration dans les Niayes",
      color: "text-earth",
      bgColor: "bg-earth/10",
      borderColor: "border-earth/20"
    },
    {
      icon: Banknote,
      value: "3-4 ans",
      label: "Retour sur Investissement",
      description: "Durée d'amortissement des équipements",
      color: "text-primary-light",
      bgColor: "bg-primary-light/10",
      borderColor: "border-primary-light/20"
    }
  ];

  const impactStats = [
    { label: "Réduction gaspillage d'eau", value: "30%" },
    { label: "Augmentation production rizicole", value: "25%" },
    { label: "Emplois créés localement", value: "120+" },
    { label: "Tonnes CO₂ économisées/an", value: "450" }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-primary">Impact</span>{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">Mesurable</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Les résultats de notre ferme pilote démontrent l'efficacité de l'agriculture intelligente 
            pour transformer le secteur agricole sénégalais.
          </p>
        </div>

        {/* Main Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className={`group hover:shadow-strong transition-all duration-300 ${stat.bgColor} border ${stat.borderColor}`}>
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 ${stat.bgColor} border ${stat.borderColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                
                <h3 className="font-semibold text-foreground mb-2">
                  {stat.label}
                </h3>
                
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Impact Details */}
        <div className="bg-gradient-to-r from-primary/5 to-earth/5 rounded-2xl p-8 border border-border/50">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Bénéfices Environnementaux & Sociaux
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Notre approche durable génère des impacts positifs mesurables sur l'environnement 
                et les communautés rurales, créant un cercle vertueux de développement.
              </p>
              
              <div className="space-y-3">
                {impactStats.map((impact, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-background/50 rounded-lg border border-border/30">
                    <span className="text-foreground font-medium">{impact.label}</span>
                    <span className="text-primary font-bold text-lg">{impact.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-hero rounded-2xl p-8 text-white text-center shadow-strong">
                <h4 className="text-xl font-bold mb-4">Vision 2030</h4>
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold">10,000+</div>
                    <div className="text-sm opacity-90">Agriculteurs connectés</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">50,000 ha</div>
                    <div className="text-sm opacity-90">Terres intelligentes</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">+60%</div>
                    <div className="text-sm opacity-90">Productivité nationale</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-earth rounded-full opacity-60 animate-float" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-success rounded-full opacity-70 animate-float" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;