import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useStore, fcfa } from "@/context/StoreContext";
import { toast } from "sonner";

export const bookableServices = [
  { id: "svc-sol", title: "Analyse de sol", price: 25000, unit: "analyse" },
  { id: "svc-irrig", title: "Installation irrigation goutte-à-goutte", price: 150000, unit: "ha" },
  { id: "svc-iot", title: "Kit capteurs IoT", price: 85000, unit: "kit" },
  { id: "svc-formation", title: "Formation agriculture intelligente", price: 15000, unit: "session" },
  { id: "svc-tracteur", title: "Location tracteur", price: 40000, unit: "jour" },
  { id: "svc-visite", title: "Visite de la ferme", price: 5000, unit: "personne" },
];

const Reservations = () => {
  const { addReservation, addToCart } = useStore();
  const nav = useNavigate();
  const [form, setForm] = useState({ service: bookableServices[0].title, date: "", time: "09:00", customer: "", notes: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.date || !form.customer.trim()) return toast.error("Nom et date requis");
    addReservation(form);
    toast.success("Réservation envoyée !");
    nav("/dashboard/user");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-3xl font-bold text-primary">Réservations & services</h1>
        <p className="text-muted-foreground mb-8">Réservez un service ou ajoutez-le à votre panier.</p>
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {bookableServices.map((s) => (
              <Card key={s.id}><CardHeader><CardTitle className="text-lg">{s.title}</CardTitle>
                <CardDescription>{fcfa(s.price)} / {s.unit}</CardDescription></CardHeader>
                <CardContent className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => setForm({ ...form, service: s.title })}>Réserver</Button>
                  <Button size="sm" onClick={() => { addToCart({ ...s, kind: "service" }); toast.success("Ajouté au panier"); }}>Ajouter au panier</Button>
                </CardContent></Card>
            ))}
          </div>
          <Card className="h-fit"><CardHeader><CardTitle>Nouvelle réservation</CardTitle></CardHeader>
            <CardContent>
              <form onSubmit={submit} className="space-y-4">
                <div><Label>Service</Label>
                  <select className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm" value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
                    {bookableServices.map((s) => <option key={s.id}>{s.title}</option>)}
                  </select></div>
                <div><Label>Nom complet</Label><Input maxLength={100} value={form.customer} onChange={(e) => setForm({ ...form, customer: e.target.value })} /></div>
                <div className="grid grid-cols-2 gap-2">
                  <div><Label>Date</Label><Input type="date" min={new Date().toISOString().slice(0, 10)} value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} /></div>
                  <div><Label>Heure</Label><Input type="time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} /></div>
                </div>
                <div><Label>Notes</Label><Textarea maxLength={500} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} /></div>
                <Button type="submit" className="w-full bg-gradient-primary">Confirmer la réservation</Button>
              </form>
            </CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default Reservations;
