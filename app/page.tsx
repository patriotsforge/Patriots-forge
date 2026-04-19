import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function PatriotsForge() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* AGE VERIFICATION */}
      <div className="bg-red-900 text-center py-2 text-sm">
        You must be 18+ to access this site. Firearms ship to licensed FFL dealers only.
      </div>

      {/* HERO */}
      <section className="text-center py-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-4"
        >
          PATRIOTS FORGE
        </motion.h1>
        <p className="text-xl mb-6 text-gray-300">
          Forged for Freedom. Built for Battle.
        </p>
        <div className="flex justify-center gap-4">
          <Button className="text-lg px-6 py-3">Shop Now</Button>
          <Button variant="outline" className="text-lg px-6 py-3">
            Custom Build
          </Button>
        </div>
      </section>

      {/* SHOP */}
      <section className="px-6 py-16 grid md:grid-cols-3 gap-6">
        {["AR-15 Builds", "Accessories", "Gear"].map((item) => (
          <Card key={item} className="bg-gray-900 border-none rounded-2xl">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{item}</h2>
              <p className="text-gray-400 mb-4">
                High-performance {item.toLowerCase()} built for reliability.
              </p>
              <Button>Browse</Button>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* CUSTOM BUILDS FORM */}
      <section className="px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Custom Builds</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-6">
          Design your firearm your way. Submit your build request and we’ll quote and build it to spec.
        </p>
        <form className="max-w-xl mx-auto grid gap-4">
          <input placeholder="Name" className="p-3 rounded bg-gray-800" />
          <input placeholder="Email" className="p-3 rounded bg-gray-800" />
          <input placeholder="Phone" className="p-3 rounded bg-gray-800" />
          <textarea placeholder="Describe your build" className="p-3 rounded bg-gray-800" />
          <Button>Request Quote</Button>
        </form>
      </section>

      {/* GALLERY */}
      <section className="px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Build Gallery</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-gray-800 h-40 rounded-xl"></div>
          ))}
        </div>
      </section>

      {/* FFL NOTICE */}
      <section className="px-6 py-10 text-center bg-gray-900">
        <p className="text-gray-400 max-w-2xl mx-auto">
          All firearms purchases must be shipped to a Federal Firearms Licensed (FFL) dealer. Customers will be required to complete all legal background checks and paperwork upon pickup.
        </p>
        <p className="text-gray-500 mt-2 text-sm">
          Firearm purchases require a non-refundable deposit to begin the build process. Remaining balance is due before transfer.
        </p>
      </section>

      {/* ABOUT */}
      <section className="px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Patriots Forge is built on precision craftsmanship, reliability, and American grit. Every firearm is forged with purpose and built to perform under pressure.
        </p>
      </section>

      {/* CONTACT */}
      <section className="px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-gray-400 mb-2">Email: patriotsforge@gmail.com</p>
        <p className="text-gray-400 mb-2">Phone: 662-825-2604</p>
        <p className="text-gray-400 mb-4">30145 Hwy 371, Amory, MS</p>
        <Button>Contact Us</Button>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-500 border-t border-gray-800">
        © {new Date().getFullYear()} Patriots Forge. All rights reserved.
      </footer>
    </div>
  );
}
