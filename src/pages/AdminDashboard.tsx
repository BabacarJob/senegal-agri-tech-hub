import DashboardLayout, { Stat } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useStore, fcfa } from "@/context/StoreContext";

const users = [
  { name: "Fatou Diop", email: "fatou@exemple.sn", role: "producteur", status: "actif" },
  { name: "Mamadou Ba", email: "mamadou@exemple.sn", role: "manager", status: "actif" },
  { name: "Awa Ndiaye", email: "awa@exemple.sn", role: "client", status: "actif" },
  { name: "Ibrahima Sarr", email: "ibrahima@exemple.sn", role: "client", status: "suspendu" },
];

const AdminDashboard = () => {
  const { orders, reservations } = useStore();
  return (
    <DashboardLayout title="Administration" subtitle="Vue globale de la plateforme">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Stat label="Utilisateurs" value={String(users.length)} />
        <Stat label="Revenus plateforme" value={fcfa(orders.reduce((s, o) => s + o.total, 0))} />
        <Stat label="Réservations" value={String(reservations.length)} sub={`${reservations.filter(r => r.status === "confirmée").length} confirmées`} />
        <Stat label="Capteurs IoT en ligne" value="48/50" />
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader><CardTitle>Utilisateurs</CardTitle></CardHeader>
          <CardContent className="space-y-2">
            {users.map((u) => (
              <div key={u.email} className="flex justify-between items-center p-3 rounded-lg border border-border">
                <div><p className="font-medium">{u.name}</p><p className="text-xs text-muted-foreground">{u.email}</p></div>
                <div className="flex gap-2"><Badge variant="outline">{u.role}</Badge>
                  <Badge variant={u.status === "actif" ? "secondary" : "destructive"}>{u.status}</Badge></div>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Toutes les réservations</CardTitle></CardHeader>
          <CardContent className="space-y-2">
            {!reservations.length && <p className="text-sm text-muted-foreground">Aucune réservation.</p>}
            {reservations.map((r) => (
              <div key={r.id} className="flex justify-between items-center p-3 rounded-lg border border-border text-sm">
                <span>{r.customer} · {r.service}</span><Badge variant="secondary">{r.status}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};
export default AdminDashboard;
