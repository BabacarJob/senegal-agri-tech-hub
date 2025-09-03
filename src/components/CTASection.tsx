import { ArrowRight, UserPlus, Calendar, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CTASection = () => {
  const ctaOptions = [
    {
      icon: UserPlus,
      title: "Rejoindre la Plateforme",
      description: "Inscrivez-vous gratuitement pour accéder aux outils numériques",
      action: "S'inscrire maintenant",
      variant: "default" as const,
      gradient: "bg-gradient-primary"
    },
    {
      icon: Calendar,
      title: "Programmer une Visite",
      description: "Visitez notre ferme pilote dans les Niayes",
      action: "Réserver une visite",
      variant: "outline" as const,
      gradient: "border-primary hover:bg-primary/5"
    },
    {
      icon: FileText,
      title: "Documentation Complète",
      description: "Téléchargez notre guide d'implémentation",
      action: "Télécharger le guide",
      variant: "outline" as const,
      gradient: "border-earth hover:bg-earth/5"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Main CTA Hero */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Prêt à <span className="bg-gradient-hero bg-clip-text text-transparent">Transformer</span>
            <br />
            Votre Agriculture ?
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Rejoignez dès aujourd'hui la révolution agricole intelligente au Sénégal. 
            Nos experts vous accompagnent dans votre transition vers une agriculture moderne et rentable.
          </p>
          
          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group text-lg px-8 py-6"
            >
              Commencer maintenant
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/30 hover:bg-primary/5 group text-lg px-8 py-6"
            >
              Parler à un expert
            </Button>
          </div>
        </div>

        {/* CTA Options Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {ctaOptions.map((cta, index) => (
            <Card key={index} className="group hover:shadow-strong transition-all duration-300 border-border/50 text-center">
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 ${cta.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-soft group-hover:shadow-glow transition-all duration-300`}>
                  <cta.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-primary">
                  {cta.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {cta.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant={cta.variant}
                  className={`w-full ${cta.variant === 'default' ? 'bg-gradient-primary hover:shadow-glow' : cta.gradient} transition-all duration-300`}
                >
                  {cta.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-primary/10 to-earth/10 rounded-2xl p-8 border border-border/50 text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Besoin d'Informations Personnalisées ?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Notre équipe d'experts est disponible pour répondre à vos questions 
            et vous accompagner dans votre projet d'agriculture intelligente.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-success rounded-full" />
              <span className="text-muted-foreground">Consultation gratuite</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-success rounded-full" />
              <span className="text-muted-foreground">Réponse sous 24h</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-success rounded-full" />
              <span className="text-muted-foreground">Expert local dédié</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;