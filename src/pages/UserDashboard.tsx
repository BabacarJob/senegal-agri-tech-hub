import { Link } from "react-router-dom";
import DashboardLayout, { Stat } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useStore, fcfa } from "@/context/StoreContext";

const UserDashboard = () => {
  const { orders, reservations, cartCount, setReservationStatus } = useStore();
  const spent = orders.reduce((s, o) => s + o.total, 0);
  return (
    <DashboardLayout title="Mon espace" subtitle="Vos commandes, réservations et capteurs">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Stat label="Commandes" value={String(orders.length)} />
        <Stat label="Total dépensé" value={fcfa(spent)} />
        <Stat label="Réservations" value={String(reservations.length)} />
        <Stat label="Articles au panier" value={String(cartCount)} />
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="flex-row items-center justify-between"><CardTitle>Mes commandes</CardTitle>
            <Button asChild size="sm" variant="outline"><Link to="/marketplace">Acheter</Link></Button></CardHeader>
          <CardContent className="space-y-3">
            {!orders.length && <p className="text-sm text-muted-foreground">Aucune commande pour l'instant.</p>}
            {orders.map((o) => (
              <div key={o.id} className="flex justify-between items-center p-3 rounded-lg border border-border">
                <div><p className="font-medium">{o.id}</p><p className="text-xs text-muted-foreground">{new Date(o.date).toLocaleDateString("fr-FR")} · {o.items.length} article(s)</p></div>
                <div className="text-right"><p className="font-semibold">{fcfa(o.total)}</p><Badge variant="secondary">{o.status}</Badge></div>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex-row items-center justify-between"><CardTitle>Mes réservations</CardTitle>
            <Button asChild size="sm" variant="outline"><Link to="/reservations">Réserver</Link></Button></CardHeader>
          <CardContent className="space-y-3">
            {!reservations.length && <p className="text-sm text-muted-foreground">Aucune réservation.</p>}
            {reservations.map((r) => (
              <div key={r.id} className="flex justify-between items-center p-3 rounded-lg border border-border">
                <div><p className="font-medium">{r.service}</p><p className="text-xs text-muted-foreground">{r.date} à {r.time}</p></div>
                <div className="flex items-center gap-2"><Badge variant={r.status === "annulée" ? "destructive" : "secondary"}>{r.status}</Badge>
                  {r.status === "en attente" && <Button size="sm" variant="ghost" onClick={() => setReservationStatus(r.id, "annulée")}>Annuler</Button>}</div>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card className="lg:col-span-2">
          <CardHeader><CardTitle>Mes parcelles (capteurs)</CardTitle></CardHeader>
          <CardContent className="grid sm:grid-cols-4 gap-4">
            <Stat label="Humidité sol" value="67%" /><Stat label="Température" value="28°C" />
            <Stat label="pH" value="6.8" /><Stat label="Prochaine irrigation" value="14:30" />
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};
export default UserDashboard;
