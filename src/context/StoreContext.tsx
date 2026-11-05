import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type CartItem = { id: string; title: string; price: number; unit: string; qty: number; kind: "produit" | "service" | "equipement" };
export type Reservation = {
  id: string; service: string; date: string; time: string; notes: string;
  status: "en attente" | "confirmée" | "annulée"; createdAt: string; customer: string;
};

type Store = {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "qty">, qty?: number) => void;
  updateQty: (id: string, qty: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
  reservations: Reservation[];
  addReservation: (r: Omit<Reservation, "id" | "status" | "createdAt">) => void;
  setReservationStatus: (id: string, status: Reservation["status"]) => void;
  orders: { id: string; items: CartItem[]; total: number; date: string; status: string }[];
  checkout: () => void;
};

const Ctx = createContext<Store | null>(null);

function usePersisted<T>(key: string, initial: T) {
  const [v, setV] = useState<T>(() => {
    try { const s = localStorage.getItem(key); return s ? JSON.parse(s) : initial; } catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(v)); }, [key, v]);
  return [v, setV] as const;
}

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = usePersisted<CartItem[]>("sa_cart", []);
  const [reservations, setReservations] = usePersisted<Reservation[]>("sa_resa", []);
  const [orders, setOrders] = usePersisted<Store["orders"]>("sa_orders", []);

  const addToCart: Store["addToCart"] = (item, qty = 1) =>
    setCart((c) => {
      const ex = c.find((i) => i.id === item.id);
      return ex ? c.map((i) => (i.id === item.id ? { ...i, qty: i.qty + qty } : i)) : [...c, { ...item, qty }];
    });
  const updateQty = (id: string, qty: number) =>
    setCart((c) => (qty <= 0 ? c.filter((i) => i.id !== id) : c.map((i) => (i.id === id ? { ...i, qty } : i))));
  const removeFromCart = (id: string) => setCart((c) => c.filter((i) => i.id !== id));
  const clearCart = () => setCart([]);
  const cartTotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  const addReservation: Store["addReservation"] = (r) =>
    setReservations((rs) => [{ ...r, id: crypto.randomUUID(), status: "en attente", createdAt: new Date().toISOString() }, ...rs]);
  const setReservationStatus = (id: string, status: Reservation["status"]) =>
    setReservations((rs) => rs.map((r) => (r.id === id ? { ...r, status } : r)));

  const checkout = () => {
    if (!cart.length) return;
    setOrders((o) => [{ id: "CMD-" + Date.now().toString().slice(-6), items: cart, total: cartTotal, date: new Date().toISOString(), status: "en préparation" }, ...o]);
    setCart([]);
  };

  return (
    <Ctx.Provider value={{ cart, addToCart, updateQty, removeFromCart, clearCart, cartTotal, cartCount, reservations, addReservation, setReservationStatus, orders, checkout }}>
      {children}
    </Ctx.Provider>
  );
};

export const useStore = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("useStore must be inside StoreProvider");
  return c;
};

export const fcfa = (n: number) => `${Math.round(n).toLocaleString("fr-FR")} FCFA`;
