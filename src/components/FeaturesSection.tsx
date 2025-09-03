import { 
  Smartphone, 
  CloudRain, 
  BarChart3, 
  ShoppingCart, 
  Users, 
  Zap, 
  Leaf, 
  TrendingUp,
  Shield,
  Clock
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const FeaturesSection = () => {
  const mainFeatures = [
    {
      icon: Smartphone,
      title: "Capteurs IoT Intelligents",
      description: "Surveillance en temps réel de l'humidité du sol, température, pH et nutriments avec transmission des données via réseau sans fil.",
      benefits: ["Réduction 30% gaspillage d'eau", "Optimisation fertilisation", "Alertes préventives"],
      gradient: "from-blue-500/10 to-cyan-500/10",
      iconBg: "bg-blue-500"
    },
    {
      icon: CloudRain,
      title: "Irrigation Automatisée",
      description: "Système d'arrosage programmable pilotée par capteurs d'humidité avec pompes solaires et vannes télécommandées.",
      benefits: ["Irrigation précise", "Économie d'énergie", "Gestion à distance"],
      gradient: "from-blue-400/10 to-blue-600/10",
      iconBg: "bg-blue-600"
    },
    {
      icon: BarChart3,
      title: "Plateforme Analytics",
      description: "Tableau de bord centralisé pour analyser les données agronomiques, prévoir les rendements et optimiser les pratiques.",
      benefits: ["Prévision rendements", "Recommandations IA", "Rapports détaillés"],
      gradient: "from-success/10 to-primary/10",
      iconBg: "bg-gradient-primary"
    },
    {
      icon: ShoppingCart,
      title: "Marketplace Numérique",
      description: "Place de marché en ligne connectant directement agriculteurs et acheteurs avec vente anticipée et contrats garantis.",
      benefits: ["Vente avant récolte", "Prix garantis", "Réduction pertes"],
      gradient: "from-earth/10 to-earth-light/10",
      iconBg: "bg-earth"
    }
  ];

  const additionalFeatures = [
    {
      icon: Users,
      title: "Formation & Accompagnement",
      description: "Programme de formation aux technologies agricoles modernes"
    },
    {
      icon: Zap,
      title: "Énergie Solaire",
      description: "Alimentation autonome par panneaux photovoltaïques"
    },
    {
      icon: Leaf,
      title: "Agriculture Durable",
      description: "Pratiques respectueuses de l'environnement"
    },
    {
      icon: TrendingUp,
      title: "ROI Garanti",
      description: "Retour sur investissement en 2-4 ans"
    },
    {
      icon: Shield,
      title: "Données Sécurisées",
      description: "Chiffrement et protection de vos informations"
    },
    {
      icon: Clock,
      title: "Support 24/7",
      description: "Assistance technique continue"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-primary">Technologies</span>{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">Innovantes</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Notre ferme intelligente intègre les dernières innovations technologiques 
            pour révolutionner l'agriculture sénégalaise et maximiser les rendements.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {mainFeatures.map((feature, index) => (
            <Card key={index} className={`group hover:shadow-strong transition-all duration-300 border-border/50 bg-gradient-to-br ${feature.gradient}`}>
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className={`w-14 h-14 ${feature.iconBg} rounded-2xl flex items-center justify-center shadow-soft group-hover:shadow-glow transition-all duration-300`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl text-primary group-hover:text-primary-light transition-colors">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-medium text-foreground text-sm mb-2">Bénéfices clés :</p>
                  <div className="grid gap-1">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-success rounded-full" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalFeatures.map((feature, index) => (
            <div key={index} className="group">
              <Card className="h-full hover:shadow-medium transition-all duration-300 border-border/50 hover:border-primary/20">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-soft group-hover:shadow-glow transition-all duration-300 mb-3">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg text-primary group-hover:text-primary-light transition-colors">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;