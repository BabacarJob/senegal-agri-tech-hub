import { Link, useNavigate } from "react-router-dom";
import { Minus, Plus, Trash2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useStore, fcfa } from "@/context/StoreContext";
import { toast } from "sonner";

const Cart = () => {
  const { cart, updateQty, removeFromCart, cartTotal, checkout } = useStore();
  const nav = useNavigate();
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-3xl font-bold text-primary mb-6">Mon panier</h1>
        {!cart.length ? (
          <div className="text-center py-16"><p className="text-muted-foreground mb-4">Votre panier est vide.</p>
            <div className="flex gap-2 justify-center"><Button asChild><Link to="/marketplace">Marketplace</Link></Button>
              <Button asChild variant="outline"><Link to="/services">Services</Link></Button></div></div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-3">
              {cart.map((i) => (
                <Card key={i.id}><CardContent className="p-4 flex items-center justify-between gap-4">
                  <div><p className="font-medium">{i.title}</p><p className="text-sm text-muted-foreground">{i.kind} · {fcfa(i.price)}/{i.unit}</p></div>
                  <div className="flex items-center gap-2">
                    <Button size="icon" variant="outline" onClick={() => updateQty(i.id, i.qty - 1)}><Minus className="w-4 h-4" /></Button>
                    <span className="w-8 text-center">{i.qty}</span>
                    <Button size="icon" variant="outline" onClick={() => updateQty(i.id, i.qty + 1)}><Plus className="w-4 h-4" /></Button>
                    <span className="w-28 text-right font-semibold">{fcfa(i.price * i.qty)}</span>
                    <Button size="icon" variant="ghost" onClick={() => removeFromCart(i.id)}><Trash2 className="w-4 h-4" /></Button>
                  </div>
                </CardContent></Card>
              ))}
            </div>
            <Card className="h-fit"><CardHeader><CardTitle>Récapitulatif</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between font-bold text-lg"><span>Total</span><span>{fcfa(cartTotal)}</span></div>
                <p className="text-xs text-muted-foreground">Paiement à la livraison (Wave / Orange Money bientôt).</p>
                <Button className="w-full bg-gradient-primary" onClick={() => { checkout(); toast.success("Commande validée !"); nav("/dashboard/user"); }}>Valider la commande</Button>
              </CardContent></Card>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};
export default Cart;
