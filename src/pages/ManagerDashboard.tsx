import DashboardLayout, { Stat } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useStore, fcfa } from "@/context/StoreContext";

const stock = [
  { name: "Tomates", qty: 500, unit: "kg", min: 100 },
  { name: "Oignons", qty: 80, unit: "kg", min: 100 },
  { name: "Riz paddy", qty: 1200, unit: "kg", min: 300 },
  { name: "Mil", qty: 220, unit: "kg", min: 150 },
];

const ManagerDashboard = () => {
  const { orders, reservations, setReservationStatus } = useStore();
  const pending = reservations.filter((r) => r.status === "en attente");
  return (
    <DashboardLayout title="Espace manager" subtitle="Production, stocks, commandes et réservations">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Stat label="Chiffre d'affaires" value={fcfa(orders.reduce((s, o) => s + o.total, 0))} />
        <Stat label="Commandes" value={String(orders.length)} />
        <Stat label="Réservations à valider" value={String(pending.length)} />
        <Stat label="Parcelles actives" value="12" sub="3 en irrigation" />
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader><CardTitle>Réservations à traiter</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            {!pending.length && <p className="text-sm text-muted-foreground">Rien à valider.</p>}
            {pending.map((r) => (
              <div key={r.id} className="p-3 rounded-lg border border-border">
                <div className="flex justify-between"><p className="font-medium">{r.service}</p><span className="text-xs text-muted-foreground">{r.date} {r.time}</span></div>
                <p className="text-xs text-muted-foreground">{r.customer}{r.notes && ` · ${r.notes}`}</p>
                <div className="flex gap-2 mt-2">
                  <Button size="sm" onClick={() => setReservationStatus(r.id, "confirmée")}>Confirmer</Button>
                  <Button size="sm" variant="outline" onClick={() => setReservationStatus(r.id, "annulée")}>Refuser</Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Stocks</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            {stock.map((s) => (
              <div key={s.name} className="flex justify-between items-center p-3 rounded-lg border border-border">
                <span className="font-medium">{s.name}</span>
                <div className="flex items-center gap-2"><span>{s.qty} {s.unit}</span>
                  {s.qty < s.min ? <Badge variant="destructive">Stock bas</Badge> : <Badge variant="secondary">OK</Badge>}</div>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card className="lg:col-span-2">
          <CardHeader><CardTitle>Dernières commandes</CardTitle></CardHeader>
          <CardContent className="space-y-2">
            {!orders.length && <p className="text-sm text-muted-foreground">Aucune commande.</p>}
            {orders.map((o) => (
              <div key={o.id} className="flex justify-between p-3 rounded-lg border border-border text-sm">
                <span className="font-medium">{o.id}</span><span>{o.items.map((i) => `${i.title} ×${i.qty}`).join(", ")}</span><span className="font-semibold">{fcfa(o.total)}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};
export default ManagerDashboard;
