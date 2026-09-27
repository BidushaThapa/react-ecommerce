//services
import {
  Search,
  ShoppingCart,
  Grid2X2,
  Info,
  Sparkles,
  Headset,
} from "lucide-react";

const services = [
  {
    icon: Grid2X2,
    title: "Easy Product Browsing",
    text: "Explore neatly organized categories and find what you need without any hassle.",
  },
  {
    icon: Search,
    title: "Product Search",
    text: "Search across the whole catalog instantly to jump straight to the items you want.",
  },
  {
    icon: ShoppingCart,
    title: "Shopping Cart",
    text: "Add products with one click and manage quantities before you check out.",
  },
  {
    icon: Info,
    title: "Detailed Product Information",
    text: "Photos, descriptions, pricing, shipping, and reviews — everything before you decide.",
  },
  {
    icon: Sparkles,
    title: "Smooth Shopping Experience",
    text: "A lightweight, responsive store that stays fast and simple on every device.",
  },
  {
    icon: Headset,
    title: "Customer Support",
    text: "Reach out any time through our contact page — we're happy to help.",
  },
];

export const Services = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        {/* Hero */}
        <div className="text-center">
          <h1 className="inline-block border-b-4 border-amber-500 pb-2 text-3xl font-extrabold text-gray-900 md:text-5xl">
            Our Services
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-600 md:text-base">
            Everything we offer to make your shopping fast, easy, and enjoyable.
          </p>
        </div>

        {/* Service cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-xl border border-[#dedbd2] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="inline-flex rounded-xl bg-amber-100 p-3 text-amber-600">
                <service.icon size={24} />
              </span>
              <h2 className="mt-4 text-base font-bold text-gray-900 md:text-lg">
                {service.title}
              </h2>
              <p className="mt-2 text-sm text-gray-600">{service.text}</p>
            </article>
          ))}
        </div>

        {/* Closing */}
        <section className="mt-14 rounded-2xl bg-gray-50 p-8 text-center shadow-sm md:p-10">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Designed With You In Mind
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-700 md:text-base">
            Every feature you see here exists for one reason — to make online
            shopping simple, clear, and a little more enjoyable.
          </p>
          <span className="mt-5 inline-block h-1 w-16 rounded-full bg-amber-500" />
        </section>
      </div>
    </div>
  );
};