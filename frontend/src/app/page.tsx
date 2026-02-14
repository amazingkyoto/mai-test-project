import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Header />
      <Hero />
      
      <main className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Contact Information */}
          <div>
            <h2 className="text-4xl font-normal mb-6 tracking-tight">Contact Information</h2>
            <p className="text-gray-500 mb-12 text-lg font-light leading-relaxed">
              Vivamus ac arcu eget lacus cursus condimentum sit amet sed nunc. Donec sit amet nulla eros. Ut at placerat justo.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">Emails</h3>
                <a href="mailto:example@loremtempor.co.id" className="text-gray-500 hover:text-blue-900 border-b border-gray-300 pb-0.5 transition-colors">
                  example@loremtempor.co.id
                </a>
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">Phone</h3>
                <a href="tel:0386029289" className="text-gray-500 hover:text-blue-900 border-b border-gray-300 pb-0.5 transition-colors">
                  03-8602 9289
                </a>
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">Whatsapp</h3>
                <a href="tel:0162078978" className="text-gray-500 hover:text-blue-900 border-b border-gray-300 pb-0.5 transition-colors">
                  016-207 8978
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div>
            <ContactForm />
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}