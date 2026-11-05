import { useState } from "react";
import { Search, Filter, MapPin, Calendar, Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useStore } from "@/context/StoreContext";
import { toast } from "sonner";
import marketplaceImage from "@/assets/marketplace-image.jpg";

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { addToCart } = useStore();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "Tous les produits", count: 47 },
    { id: "cereals", label: "Céréales", count: 12 },
    { id: "vegetables", label: "Légumes", count: 18 },
    { id: "fruits", label: "Fruits", count: 9 },
    { id: "legumes", label: "Légumineuses", count: 8 }
  ];

  const products = [
    {
      id: 1,
      title: "Tomates Fraîches - Qualité Premium",
      description: "Tomates cultivées avec irrigation intelligente, récoltées à maturité optimale",
      price: 750,
      unit: "kg",
      quantity: 500,
      category: "vegetables",
      location: "Niayes, Thiès",
      farmer: "Fatou Diop",
      rating: 4.8,
      harvestDate: "2025-09-15",
      image: "/placeholder.svg",
      certified: true,
      discount: 10
    },
    {
      id: 2,
      title: "Riz Local Bio - Variété Sahel",
      description: "Riz cultivé sans pesticides, système de riziculture améliorée",
      price: 650,
      unit: "kg",
      quantity: 2000,
      category: "cereals",
      location: "Vallée du Fleuve",
      farmer: "Mamadou Kane",
      rating: 4.9,
      harvestDate: "2025-09-20",
      image: "/placeholder.svg",
      certified: true
    },
    {
      id: 3,
      title: "Mangues Kent - Export Quality",
      description: "Mangues de première qualité, calibrage export, conservation optimale",
      price: 1200,
      unit: "kg",
      quantity: 800,
      category: "fruits",
      location: "Casamance",
      farmer: "Aminata Sarr",
      rating: 4.7,
      harvestDate: "2025-09-10",
      image: "/placeholder.svg",
      certified: false
    },
    {
      id: 4,
      title: "Oignons Violet de Galmi",
      description: "Oignons de conservation, variété adaptée au climat sahélien",
      price: 450,
      unit: "kg",
      quantity: 1500,
      category: "vegetables",
      location: "Bassin Arachidier",
      farmer: "Ibrahim Sow",
      rating: 4.6,
      harvestDate: "2025-09-25",
      image: "/placeholder.svg",
      certified: true,
      discount: 5
    },
    {
      id: 5,
      title: "Niébé (Haricot) Local",
      description: "Légumineuse traditionnelle, riche en protéines, séchage optimal",
      price: 800,
      unit: "kg",
      quantity: 1200,
      category: "legumes",
      location: "Kaffrine",
      farmer: "Aïssatou Ba",
      rating: 4.5,
      harvestDate: "2025-09-18",
      image: "/placeholder.svg",
      certified: true
    },
    {
      id: 6,
      title: "Mil Rouge Traditionnel",
      description: "Céréale résistante à la sécheresse, production certifiée bio",
      price: 550,
      unit: "kg",
      quantity: 3000,
      category: "cereals",
      location: "Louga",
      farmer: "Ousmane Diallo",
      rating: 4.8,
      harvestDate: "2025-09-30",
      image: "/placeholder.svg",
      certified: true
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.farmer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatPrice = (price: number, unit: string) => {
    return `${price.toLocaleString()} FCFA/${unit}`;
  };

  const calculateDiscountedPrice = (price: number, discount?: number) => {
    if (!discount) return price;
    return price * (1 - discount / 100);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="bg-gradient-hero bg-clip-text text-transparent">Marketplace</span>
                  <br />
                  <span className="text-primary">Agricole</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Achetez directement auprès des producteurs sénégalais. Produits frais, 
                  prix transparents, livraison garantie et traçabilité complète.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                    <Input
                      placeholder="Rechercher des produits, agriculteurs, régions..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 h-12"
                    />
                  </div>
                  <Button variant="outline" className="h-12 px-6">
                    <Filter className="w-5 h-5 mr-2" />
                    Filtres
                  </Button>
                </div>

                <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-success rounded-full" />
                    <span>Livraison sous 48h</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-success rounded-full" />
                    <span>Produits certifiés</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-success rounded-full" />
                    <span>Prix direct producteur</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img
                  src={marketplaceImage}
                  alt="Marketplace Agricole"
                  className="rounded-2xl shadow-strong"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Categories & Products */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 mb-8">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id ? "bg-gradient-primary" : ""}
                >
                  {category.label} ({category.count})
                </Button>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="group hover:shadow-strong transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <div className="w-full h-48 bg-gradient-subtle flex items-center justify-center">
                      <ShoppingCart className="w-12 h-12 text-muted-foreground" />
                    </div>
                    
                    {product.certified && (
                      <Badge className="absolute top-3 left-3 bg-success text-success-foreground">
                        Certifié Bio
                      </Badge>
                    )}
                    
                    {product.discount && (
                      <Badge className="absolute top-3 right-3 bg-destructive text-destructive-foreground">
                        -{product.discount}%
                      </Badge>
                    )}
                  </div>

                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg text-primary group-hover:text-primary-light transition-colors line-clamp-2">
                        {product.title}
                      </CardTitle>
                      <div className="flex items-center space-x-1 text-sm">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-muted-foreground">{product.rating}</span>
                      </div>
                    </div>
                    
                    <CardDescription className="text-muted-foreground line-clamp-2">
                      {product.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        {product.discount ? (
                          <div>
                            <span className="text-lg font-bold text-primary">
                              {formatPrice(calculateDiscountedPrice(product.price, product.discount), product.unit)}
                            </span>
                            <span className="text-sm text-muted-foreground line-through ml-2">
                              {formatPrice(product.price, product.unit)}
                            </span>
                          </div>
                        ) : (
                          <span className="text-lg font-bold text-primary">
                            {formatPrice(product.price, product.unit)}
                          </span>
                        )}
                        <p className="text-sm text-muted-foreground">
                          Stock: {product.quantity.toLocaleString()} {product.unit}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{product.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>Récolte: {new Date(product.harvestDate).toLocaleDateString('fr-FR')}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">Producteur:</span>
                        <span>{product.farmer}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1 hover:bg-primary/5">
                        Voir détails
                      </Button>
                      <Button onClick={() => { addToCart({ id: "p-" + product.id, title: product.title, price: calculateDiscountedPrice(product.price, product.discount), unit: product.unit, kind: "produit" }); toast.success("Ajouté au panier"); }} className="flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Ajouter au panier
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <ShoppingCart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-muted-foreground mb-2">
                  Aucun produit trouvé
                </h3>
                <p className="text-muted-foreground">
                  Essayez de modifier vos critères de recherche ou explorez d'autres catégories.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Marketplace;