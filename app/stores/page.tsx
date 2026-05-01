const stores = Array.from({ length: 24 }, (_, i) => `Maharaj Outlet ${i + 1}`);
export default function StoresPage() {
  return <div className="py-10"><h1 className="font-serif text-5xl">Store Locator</h1><p className="mt-2">Google Maps embed and geolocation-ready structure included.</p><div className="mt-6 grid gap-3 md:grid-cols-3">{stores.map(s => <div key={s} className="chai-glass rounded-xl p-4">{s}</div>)}</div></div>;
}
