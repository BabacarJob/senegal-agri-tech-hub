import { 
  Smartphone, 
  CloudRain, 
  BarChart3, 
  ShoppingCart, 
  Users, 
  Zap,
  Settings,
  Headphones,
  BookOpen,
  TrendingUp
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Services = () => {
  const mainServices = [
    {
      icon: Smartphone,
      title: "Capteurs IoT Intelligents",
      description: "Installation et maintenance de capteurs de surveillance des cultures",
      features: ["Capteurs d'humidité du sol", "Mesure de température", "Analyse du pH", "Transmission temps réel"],
      price: "À partir de 75 000 FCFA",
      duration: "Installation en 2-3 jours",
      gradient: "from-blue-500/10 to-cyan-500/10",
      iconBg: "bg-blue-500"
    },
    {
      icon: CloudRain,
      title: "Irrigation Automatisée",
      description: "Système d'arrosage programmable avec gestion intelligente de l'eau",
      features: ["Pompes solaires", "Vannes automatiques", "Programmation à distance", "Économie d'eau 30%"],
      price: "À partir de 450 000 FCFA",
      duration: "Installation en 1 semaine",
      gradient: "from-blue-400/10 to-blue-600/10",
      iconBg: "bg-blue-600"
    },
    {
      icon: BarChart3,
      title: "Plateforme Analytics",
      description: "Tableau de bord pour analyser et optimiser vos cultures",
      features: ["Dashboard personnalisé", "Rapports détaillés", "Prévisions IA", "Alertes mobiles"],
      price: "15 000 FCFA/mois",
      duration: "Activation immédiate",
      gradient: "from-success/10 to-primary/10",
      iconBg: "bg-gradient-primary"
    },
    {
      icon: ShoppingCart,
      title: "Marketplace Pro",
      description: "Accès privilégié à notre place de marché agricole",
      features: ["Vente avant récolte", "Prix garantis", "Logistique incluse", "Commission réduite"],
      price: "Commission 5-8%",
      duration: "Inscription gratuite",
      gradient: "from-earth/10 to-earth-light/10",
      iconBg: "bg-earth"
    }
  ];

  const supportServices = [
    {
      icon: Users,
      title: "Formation & Accompagnement",
      description: "Programme complet de formation aux technologies agricoles modernes",
      details: ["Formation sur site", "Support technique", "Suivi personnalisé", "Certification"]
    },
    {
      icon: Zap,
      title: "Énergie Renouvelable",
      description: "Installation de panneaux solaires pour alimentation autonome",
      details: ["Panneaux haute efficacité", "Batteries de stockage", "Maintenance incluse", "Garantie 10 ans"]
    },
    {
      icon: Settings,
      title: "Maintenance Technique",
      description: "Service de maintenance préventive et curative",
      details: ["Contrôles réguliers", "Réparations urgentes", "Pièces de rechange", "Mise à jour logicielle"]
    },
    {
      icon: Headphones,
      title: "Support Client 24/7",
      description: "Assistance technique continue par téléphone et WhatsApp",
      details: ["Hotline dédiée", "Support WhatsApp", "Intervention rapide", "Documentation complète"]
    },
    {
      icon: BookOpen,
      title: "Conseil Agronomique",
      description: "Expertise agronomique personnalisée pour optimiser vos cultures",
      details: ["Analyse de sol", "Recommandations", "Calendrier cultural", "Suivi de croissance"]
    },
    {
      icon: TrendingUp,
      title: "Études de Faisabilité",
      description: "Analyse complète pour votre projet d'agriculture intelligente",
      details: ["Étude technique", "Analyse financière", "Plan d'implémentation", "ROI prévisionnel"]
    }
  ];

  const packages = [
    {
      name: "Starter",
      price: "250 000 FCFA",
      description: "Idéal pour débuter avec l'agriculture intelligente",
      features: [
        "5 capteurs IoT basiques",
        "Irrigation goutte-à-goutte (0.5 ha)",
        "Dashboard web standard",
        "Formation initiale 2 jours",
        "Support téléphonique"
      ],
      popular: false
    },
    {
      name: "Professional", 
      price: "750 000 FCFA",
      description: "Solution complète pour exploitations moyennes",
      features: [
        "15 capteurs IoT avancés",
        "Système irrigation automatisé (2 ha)",
        "Dashboard analytics complet",
        "Accès marketplace premium",
        "Formation 5 jours + suivi 6 mois",
        "Maintenance incluse 1 an"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Sur devis",
      description: "Solution sur mesure pour grandes exploitations",
      features: [
        "Capteurs illimités",
        "Irrigation multi-parcelles",
        "IA prédictive avancée",
        "Intégration ERP",
        "Formation équipe complète",
        "Support dédié 24/7",
        "Garantie étendue"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-primary">Nos</span>{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Des solutions technologiques complètes pour transformer votre agriculture. 
                De l'installation à la formation, nous vous accompagnons à chaque étape.
              </p>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Services Technologiques
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Technologies de pointe pour une agriculture moderne et rentable
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {mainServices.map((service, index) => (
                <Card key={index} className={`group hover:shadow-strong transition-all duration-300 border-border/50 bg-gradient-to-br ${service.gradient}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-14 h-14 ${service.iconBg} rounded-2xl flex items-center justify-center shadow-soft group-hover:shadow-glow transition-all duration-300`}>
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {service.duration}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-primary mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-success rounded-full" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="border-t border-border/50 pt-4">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-lg font-bold text-primary">{service.price}</span>
                      </div>
                      <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300">
                        Demander un devis
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Support Services */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Services d'Accompagnement
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Un écosystème complet pour votre réussite
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {supportServices.map((service, index) => (
                <Card key={index} className="group hover:shadow-medium transition-all duration-300 text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-soft group-hover:shadow-glow transition-all duration-300">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg text-primary">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-left">
                          <div className="w-1.5 h-1.5 bg-success rounded-full flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Packages */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Forfaits Intégrés
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Choisissez la solution qui correspond à vos besoins et votre budget
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <Card key={index} className={`relative group hover:shadow-strong transition-all duration-300 ${pkg.popular ? 'border-primary shadow-medium' : ''}`}>
                  {pkg.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-primary text-white">
                      Plus Populaire
                    </Badge>
                  )}
                  
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl text-primary mb-2">
                      {pkg.name}
                    </CardTitle>
                    <div className="text-3xl font-bold text-primary mb-2">
                      {pkg.price}
                    </div>
                    <CardDescription className="text-muted-foreground">
                      {pkg.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      className={`w-full ${pkg.popular ? 'bg-gradient-primary hover:shadow-glow' : ''} transition-all duration-300`}
                      variant={pkg.popular ? "default" : "outline"}
                    >
                      {pkg.name === "Enterprise" ? "Nous contacter" : "Choisir ce forfait"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;