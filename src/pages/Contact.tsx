//contact
import { useState } from "react";
import { Mail, Phone, CalendarClock, HelpCircle } from "lucide-react";
import { InputText } from "../components/Molecules/TextComponent";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@ohho.example.com",
    hint: "We reply within a day",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+977 980-000-0000",
    hint: "Mon–Sat, 9 AM – 6 PM",
  },
  {
    icon: CalendarClock,
    title: "Availability",
    value: "Open all week",
    hint: "Support & order queries",
  },
];

const emptyForm = { name: "", email: "", subject: "", message: "" };

export const Contact = () => {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState<Partial<typeof emptyForm>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    field: keyof typeof emptyForm,
    value: string,
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const validate = (): boolean => {
    const nextErrors: Partial<typeof emptyForm> = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!form.email.trim()) nextErrors.email = "Please enter your email.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email.trim()))
      nextErrors.email = "Please enter a valid email address.";
    if (!form.subject.trim()) nextErrors.subject = "Please add a subject.";
    if (!form.message.trim())
      nextErrors.message = "Please write a message.";
    else if (form.message.trim().length < 10)
      nextErrors.message = "Message should be at least 10 characters.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setForm(emptyForm);
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        {/* Hero */}
        <div className="text-center">
          <h1 className="inline-block border-b-4 border-amber-500 pb-2 text-3xl font-extrabold text-gray-900 md:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-600 md:text-base">
            Questions, feedback, or just want to say hi? We would love to hear
            from you.
          </p>
        </div>

        {/* Contact info cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {contactInfo.map((info) => (
            <article
              key={info.title}
              className="rounded-xl border border-[#dedbd2] bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="mx-auto inline-flex rounded-xl bg-amber-100 p-3 text-amber-600">
                <info.icon size={24} />
              </span>
              <h2 className="mt-4 text-base font-bold text-gray-900">
                {info.title}
              </h2>
              <p className="mt-1 text-sm font-medium text-gray-800">
                {info.value}
              </p>
              <p className="mt-1 text-xs text-gray-500">{info.hint}</p>
            </article>
          ))}
        </div>

        {/* Form + help */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <section className="rounded-xl bg-gray-50 p-6 shadow-sm md:p-8">
            <h2 className="text-xl font-bold text-gray-900 md:text-2xl">
              Send us a message
            </h2>
            {submitted ? (
              <div className="mt-5 rounded-lg border border-amber-500 bg-amber-50 p-5 text-center">
                <p className="text-base font-bold text-amber-700">
                  Message sent successfully!
                </p>
                <p className="mt-1 text-sm text-gray-700">
                  Thanks for reaching out — we will get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-4">
                <div>
                  <InputText
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Your name"
                    aria-label="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-600">{errors.name}</p>
                  )}
                </div>
                <div>
                  <InputText
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="Your email"
                    type="email"
                    aria-label="Your email"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                  )}
                </div>
                <div>
                  <InputText
                    value={form.subject}
                    onChange={(e) => handleChange("subject", e.target.value)}
                    placeholder="Subject"
                    aria-label="Subject"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-red-600">{errors.subject}</p>
                  )}
                </div>
                <div>
                  <textarea
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Your message"
                    aria-label="Your message"
                    rows={5}
                    className="w-full rounded-lg border border-[#dedbd2] bg-white p-2.5 text-sm text-black placeholder:text-[#8b8982] focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-600">{errors.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-amber-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-amber-600"
                >
                  Send Message
                </button>
              </form>
            )}
          </section>

          <section className="flex flex-col justify-center rounded-xl border border-[#dedbd2] bg-gray-50 p-6 shadow-sm md:p-8">
            <HelpCircle className="text-amber-600" size={32} />
            <h2 className="mt-3 text-xl font-bold text-gray-900 md:text-2xl">
              How Can We Help?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base">
              Whether you need help with an order, want to know more about a
              product, or just have a suggestion, our team is here for you.
              Drop a message and we will make sure to get back to you as soon
              as possible.
            </p>
            <p className="mt-4 text-sm text-gray-600">
              Average response time:{" "}
              <span className="font-semibold text-amber-700">within 24 hours</span>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};