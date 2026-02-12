import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <Hero />
      
      <main className="container mx-auto px-4 py-12 -mt-10">
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </main>

      <Footer />
    </div>
  );
}