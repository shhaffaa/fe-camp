import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type CartItem = {
  id: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  qty: number;
};

type CartCtx = {
  items: CartItem[];
  count: number;
  total: number;
  add: (item: Omit<CartItem, "qty">, qty?: number) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
  clear: () => void;
};

const Ctx = createContext<CartCtx | null>(null);
const KEY = "cart-v1";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? (JSON.parse(raw) as CartItem[]) : [];
    } catch { return []; }
  });

  useEffect(() => { localStorage.setItem(KEY, JSON.stringify(items)); }, [items]);

  const add: CartCtx["add"] = (item, qty = 1) => {
    setItems(prev => {
      const i = prev.findIndex(x => x.id === item.id);
      if (i >= 0) {
        const copy = [...prev];
        copy[i] = { ...copy[i], qty: copy[i].qty + qty };
        return copy;
      }
      return [...prev, { ...item, qty }];
    });
  };

  const setQty: CartCtx["setQty"] = (id, qty) => {
    setItems(prev => prev.map(x => x.id === id ? { ...x, qty: Math.max(1, qty) } : x));
  };

  const remove: CartCtx["remove"] = (id) => setItems(prev => prev.filter(x => x.id !== id));
  const clear = () => setItems([]);

  const { count, total } = useMemo(() => ({
    count: items.reduce((s, x) => s + x.qty, 0),
    total: items.reduce((s, x) => s + x.qty * x.price, 0),
  }), [items]);

  const value: CartCtx = { items, count, total, add, setQty, remove, clear };
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
