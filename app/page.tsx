import { motion } from "framer-motion";

export default function PatriotsForge() {
  return (
    <div style={{ background: "#000", color: "#fff", minHeight: "100vh", fontFamily: "sans-serif" }}>
      {/* AGE NOTICE */}
      <div style={{ background: "#7f1d1d", textAlign: "center", padding: "8px", fontSize: "14px" }}>
        You must be 18+ to access this site. Firearms ship to licensed FFL dealers only.
      </div>

      {/* HERO */}
      <section style={{ textAlign: "center", padding: "80px 20px" }}>
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ fontSize: "48px", marginBottom: "10px" }}>
          PATRIOTS FORGE
        </motion.h1>
        <p style={{ color: "#aaa", fontSize: "20px", marginBottom: "20px" }}>
          Forged for Freedom. Built for Battle.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <button style={{ padding: "12px 20px", fontSize: "16px" }}>Shop Now</button>
          <button style={{ padding: "12px 20px", fontSize: "16px" }}>Custom Build</button>
        </div>
      </section>

      {/* SHOP */}
      <section style={{ padding: "40px 20px", display: "grid", gap: "20px" }}>
        {["AR-15 Builds", "Accessories", "Gear"].map((item) => (
          <div key={item} style={{ background: "#111", padding: "20px", borderRadius: "10px" }}>
            <h2>{item}</h2>
            <p style={{ color: "#aaa" }}>
              High-performance {item.toLowerCase()} built for reliability.
            </p>
            <button>Browse</button>
          </div>
        ))}
      </section>

      {/* CUSTOM BUILDS */}
      <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2>Custom Builds</h2>
        <p style={{ color: "#aaa" }}>
          Submit your build request and we’ll quote and build it to spec.
        </p>
        <form style={{ maxWidth: "400px", margin: "auto", display: "grid", gap: "10px" }}>
          <input placeholder="Name" />
          <input placeholder="Email" />
          <input placeholder="Phone" />
          <textarea placeholder="Describe your build" />
          <button>Request Quote</button>
        </form>
      </section>

      {/* FFL NOTICE */}
      <section style={{ padding: "30px", textAlign: "center", background: "#111" }}>
        <p style={{ color: "#aaa" }}>
          All firearms purchases must be shipped to a licensed FFL dealer. Background checks required.
        </p>
        <p style={{ color: "#777" }}>
          A non-refundable deposit is required to begin all builds.
        </p>
      </section>

      {/* CONTACT */}
      <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2>Contact</h2>
        <p>Email: patriotsforge@gmail.com</p>
        <p>Phone: 662-825-2604</p>
        <p>30145 Hwy 371, Amory, MS</p>
      </section>

      {/* FOOTER */}
      <footer style={{ textAlign: "center", padding: "20px", color: "#666" }}>
        © {new Date().getFullYear()} Patriots Forge
      </footer>
    </div>
  );
}
