import { Users, Target, Award, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation Agricole",
      description: "Nous développons des solutions technologiques avancées pour moderniser l'agriculture sénégalaise et améliorer les rendements des producteurs."
    },
    {
      icon: Users,
      title: "Accompagnement Local",
      description: "Notre équipe d'experts accompagne les agriculteurs dans leur transition vers des pratiques durables et rentables."
    },
    {
      icon: Award,
      title: "Excellence Technique",
      description: "Nous utilisons les dernières technologies IoT, IA et énergies renouvelables pour créer des solutions robustes et efficaces."
    },
    {
      icon: Globe,
      title: "Impact Durable",
      description: "Nos projets visent à créer un impact positif sur l'environnement, l'économie locale et la sécurité alimentaire."
    }
  ];

  const team = [
    {
      name: "Dr. Aminata Diallo",
      role: "Directrice Technique",
      expertise: "Ingénieure Agronome, PhD en Agriculture de Précision"
    },
    {
      name: "Mamadou Seck",
      role: "Chef de Projet IoT",
      expertise: "Ingénieur Systèmes, Spécialiste Technologies Agricoles"
    },
    {
      name: "Fatou Ba",
      role: "Responsable Formation",
      expertise: "Expert en Développement Rural et Coopératives"
    },
    {
      name: "Ibrahim Ndiaye",
      role: "Analyste Data",
      expertise: "Data Scientist, Modélisation Prédictive Agricole"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-primary">À Propos de</span>{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">Smart Agro</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Smart Agro Sénégal est une initiative pionnière qui révolutionne l'agriculture sénégalaise 
                en combinant technologies avancées, formation locale et développement durable.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Notre Mission
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Transformer l'agriculture sénégalaise en créant un écosystème technologique complet qui permet aux agriculteurs 
                  d'augmenter leurs rendements, de réduire leurs coûts et d'accéder à de nouveaux marchés tout en préservant l'environnement.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Notre approche intégrée combine capteurs IoT, irrigation intelligente, marketplace numérique et formation continue 
                  pour créer une solution complète adaptée aux défis locaux.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gradient-to-r from-success/10 to-transparent rounded-lg border border-success/20">
                    <div className="text-2xl font-bold text-success mb-1">2019</div>
                    <div className="text-sm text-muted-foreground">Création du projet</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-r from-primary/10 to-transparent rounded-lg border border-primary/20">
                    <div className="text-2xl font-bold text-primary mb-1">500+</div>
                    <div className="text-sm text-muted-foreground">Agriculteurs formés</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-hero rounded-2xl p-8 text-white shadow-strong">
                  <h3 className="text-2xl font-bold mb-6">Nos Objectifs 2025</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                      <span>Former 2,000 agriculteurs aux technologies intelligentes</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                      <span>Déployer 10,000 capteurs IoT dans les fermes pilotes</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                      <span>Créer une marketplace connectant 5,000 producteurs</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                      <span>Réduire de 40% le gaspillage d'eau agricole</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Nos Valeurs
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Les principes qui guident notre approche et notre engagement envers les agriculteurs sénégalais.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="group hover:shadow-strong transition-all duration-300 text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-soft group-hover:shadow-glow transition-all duration-300">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-primary">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Notre Équipe
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Des experts passionnés par l'innovation agricole et le développement rural au Sénégal.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <Card key={index} className="group hover:shadow-medium transition-all duration-300 text-center">
                  <CardHeader>
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-lg text-primary">
                      {member.name}
                    </CardTitle>
                    <p className="text-earth font-medium">{member.role}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {member.expertise}
                    </p>
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

export default About;