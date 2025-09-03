import { BarChart3, TrendingUp, Droplets, Thermometer, Activity, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import dashboardImage from "@/assets/dashboard-preview.jpg";

const DashboardPreview = () => {
  const metrics = [
    {
      icon: Droplets,
      title: "Humidité Sol",
      value: "67%",
      trend: "+5%",
      status: "optimal",
      color: "text-blue-600"
    },
    {
      icon: Thermometer,
      title: "Température",
      value: "28°C",
      trend: "-2°C",
      status: "normal",
      color: "text-orange-600"
    },
    {
      icon: Activity,
      title: "pH Sol",
      value: "6.8",
      trend: "stable",
      status: "bon",
      color: "text-success"
    },
    {
      icon: Zap,
      title: "Énergie Solaire",
      value: "92%",
      trend: "+12%",
      status: "excellent",
      color: "text-yellow-600"
    }
  ];

  const alerts = [
    {
      type: "info",
      title: "Irrigation programmée",
      message: "Arrosage automatique dans 2h",
      time: "14:30"
    },
    {
      type: "warning", 
      title: "Météo à surveiller",
      message: "Risque de pluie demain",
      time: "12:15"
    },
    {
      type: "success",
      title: "Récolte optimale",
      message: "Tomates prêtes pour la vente",
      time: "10:00"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-primary">Tableau de Bord</span>{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">Intelligent</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Surveillez et contrôlez vos cultures en temps réel grâce à notre plateforme 
            de monitoring avancée connectée à vos capteurs IoT.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Dashboard Preview */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src={dashboardImage}
                alt="Dashboard IoT Agricole"
                className="rounded-2xl shadow-strong"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/20 rounded-2xl" />
              
              {/* Floating metric cards */}
              <div className="absolute top-4 left-4 right-4 grid grid-cols-2 gap-2">
                <div className="bg-background/90 backdrop-blur-sm rounded-lg p-3 shadow-medium border border-border/50">
                  <div className="flex items-center space-x-2">
                    <Droplets className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-xs text-muted-foreground">Humidité</p>
                      <p className="font-bold text-primary">67%</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-background/90 backdrop-blur-sm rounded-lg p-3 shadow-medium border border-border/50">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-success" />
                    <div>
                      <p className="text-xs text-muted-foreground">Rendement</p>
                      <p className="font-bold text-success">+24%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Metrics Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {metrics.map((metric, index) => (
                <Card key={index} className="hover:shadow-medium transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center`}>
                          <metric.icon className="w-4 h-4 text-white" />
                        </div>
                        <CardTitle className="text-sm text-muted-foreground">
                          {metric.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <span className={`text-2xl font-bold ${metric.color}`}>
                        {metric.value}
                      </span>
                      <span className="text-sm text-success font-medium">
                        {metric.trend}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      État: {metric.status}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Alerts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="w-5 h-5" />
                  <span>Alertes & Notifications</span>
                </CardTitle>
                <CardDescription>
                  Suivi en temps réel de votre exploitation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {alerts.map((alert, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-gradient-to-r from-accent/10 to-transparent border border-accent/20">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        alert.type === 'success' ? 'bg-success' : 
                        alert.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                      }`} />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-foreground text-sm">
                          {alert.title}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {alert.message}
                        </p>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {alert.time}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="text-center lg:text-left">
              <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                <BarChart3 className="w-4 h-4 mr-2" />
                Accéder au dashboard
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;