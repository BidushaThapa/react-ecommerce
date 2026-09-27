//About
import { ShoppingBag, LayoutGrid, Smile, Users } from "lucide-react";

const reasons = [
  {
    icon: ShoppingBag,
    title: "Easy Shopping",
    text: "Browse, add to cart, and check out in just a few clicks.",
  },
  {
    icon: LayoutGrid,
    title: "Wide Selection",
    text: "From daily essentials to curated finds, we carry it all.",
  },
  {
    icon: Smile,
    title: "Simple Experience",
    text: "A clean, intuitive store designed around how you shop.",
  },
  {
    icon: Users,
    title: "Customer Focused",
    text: "Your satisfaction drives every decision we make.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        {/* Hero */}
        <div className="text-center">
          <h1 className="inline-block border-b-4 border-amber-500 pb-2 text-3xl font-extrabold text-gray-900 md:text-5xl">
            About Us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-600 md:text-base">
            Your friendly online store for a simple, convenient shopping
            experience.
          </p>
        </div>

        {/* Who We Are / Mission */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <section className="rounded-xl bg-gray-50 p-6 shadow-sm md:p-8">
            <h2 className="text-xl font-bold text-gray-900 md:text-2xl">
              Who We Are
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base">
              Ohho is a student-built e-commerce platform created to make
              online shopping simple and convenient. We focus on giving you a
              straightforward way to discover great products without the noise —
              just clear listings, honest prices, and a smooth checkout.
            </p>
          </section>

          <section className="rounded-xl bg-gray-50 p-6 shadow-sm md:p-8">
            <h2 className="text-xl font-bold text-gray-900 md:text-2xl">
              Our Mission
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base">
              Our mission is to make product discovery and shopping easy for
              everyone. Whether you are exploring categories, comparing
              details, or checking out in a minute, we want every step to feel
              effortless, fast, and enjoyable.
            </p>
          </section>
        </div>

        {/* Why Choose Us */}
        <section className="mt-14">
          <h2 className="text-center text-2xl font-bold text-gray-900 md:text-3xl">
            Why Choose Us
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => (
              <article
                key={reason.title}
                className="rounded-xl border border-[#dedbd2] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="inline-flex rounded-xl bg-amber-100 p-3 text-amber-600">
                  <reason.icon size={24} />
                </span>
                <h3 className="mt-4 text-base font-bold text-gray-900">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{reason.text}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;