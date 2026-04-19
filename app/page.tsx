"use client";

import { motion } from "framer-motion";

export default function PatriotsForge() {
  return (
    <div style={{ background: "#000", color: "#fff", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>

      {/* NAVBAR */}
      <div style={{ display: "flex", justifyContent: "space-between", padding: "20px 40px", borderBottom: "1px solid #222" }}>
        <h2>PATRIOTS FORGE</h2>
        <div style={{ display: "flex", gap: "20px" }}>
          <span>Shop</span>
          <span>Custom Builds</span>
          <span>Contact</span>
        </div>
      </div>

      {/* HERO */}
      <section style={{
        textAlign: "center",
        padding: "120px 20px",
        backgroundImage: "url('https://images.unsplash.com/photo-1603575448369-3a0f44c7c0d1')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
        <div style={{ background: "rgba(0,0,0,0.7)", padding: "40px" }}>
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: "56px", marginBottom: "20px" }}
          >
            FORGED FOR FREEDOM
          </motion.h1>

          <p style={{ fontSize: "20px", color: "#ccc", marginBottom: "30px" }}>
            Premium AR-15 Builds & Tactical Gear
          </p>

          <button style={{
            padding: "14px 30px",
            fontSize: "16px",
            background: "#b91c1c",
            border: "none",
            color: "#fff",
            cursor: "pointer"
          }}>
            SHOP NOW
          </button>
        </div>
      </section>

      {/* PRODUCTS */}
      <section style={{ padding: "60px 20px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>Our Categories</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px"
        }}>
          {["AR-15 BUILDS", "ACCESSORIES", "TACTICAL GEAR"].map((item) => (
            <div key={item} style={{
              background: "#111",
              padding: "30px",
              borderRadius: "10px",
              textAlign: "center",
              border: "1px solid #222"
            }}>
              <h3>{item}</h3>
              <p style={{ color: "#aaa", margin: "10px 0" }}>
                High-performance equipment built to last.
              </p>
              <button style={{
                padding: "10px 20px",
                background: "#b91c1c",
                border: "none",
                color: "#fff"
              }}>
                Browse
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ textAlign: "center", padding: "60px 20px", background: "#111" }}>
        <h2>Custom Builds</h2>
        <p style={{ color: "#aaa", marginBottom: "20px" }}>
          Get a rifle built exactly how you want it.
        </p>
        <button style={{
          padding: "14px 30px",
          background: "#b91c1c",
          border: "none",
          color: "#fff"
        }}>
          Start Your Build
        </button>
      </section>

      {/* FOOTER */}
      <footer style={{ textAlign: "center", padding: "30px", color: "#666" }}>
        © {new Date().getFullYear()} Patriots Forge
      </footer>
    </div>
  );
}
