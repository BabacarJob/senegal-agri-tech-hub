import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { User, Briefcase, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { to: "/dashboard/user", label: "Utilisateur", icon: User },
  { to: "/dashboard/manager", label: "Manager", icon: Briefcase },
  { to: "/dashboard/admin", label: "Administrateur", icon: ShieldCheck },
];

export const Stat = ({ label, value, sub }: { label: string; value: string; sub?: string }) => (
  <div className="rounded-xl border border-border bg-card p-5 shadow-soft">
    <p className="text-sm text-muted-foreground">{label}</p>
    <p className="text-2xl font-bold text-primary mt-1">{value}</p>
    {sub && <p className="text-xs text-success mt-1">{sub}</p>}
  </div>
);

const DashboardLayout = ({ title, subtitle, children }: { title: string; subtitle: string; children: ReactNode }) => (
  <div className="min-h-screen bg-muted/30">
    <Navbar />
    <main className="container mx-auto px-4 pt-24 pb-12">
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map((t) => (
          <NavLink key={t.to} to={t.to} className={({ isActive }) => cn(
            "flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-colors",
            isActive ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border hover:bg-accent")}>
            <t.icon className="w-4 h-4" />{t.label}
          </NavLink>
        ))}
      </div>
      <h1 className="text-3xl font-bold text-primary">{title}</h1>
      <p className="text-muted-foreground mb-8">{subtitle}</p>
      {children}
    </main>
  </div>
);

export default DashboardLayout;
