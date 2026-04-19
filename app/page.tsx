"use client";

import { motion } from "framer-motion";

export default function PatriotsForge() {
  return (
    <div
      style={{
        background: "#050505",
        color: "#fff",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* TOP BAR */}
      <div
        style={{
          background: "#7a0f0f",
          textAlign: "center",
          padding: "10px",
          fontSize: "14px",
          fontWeight: "bold",
          letterSpacing: "1px",
        }}
      >
        YOU MUST BE 18+ TO ACCESS THIS SITE. FIREARMS SHIP TO LICENSED FFL DEALERS ONLY.
      </div>

      {/* NAVBAR */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 24px",
          borderBottom: "1px solid #1f1f1f",
          background: "#0a0a0a",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <div>
          <h2 style={{ margin: 0, fontSize: "28px", letterSpacing: "2px" }}>PATRIOTS FORGE</h2>
          <p style={{ margin: 0, color: "#9f9f9f", fontSize: "12px", letterSpacing: "1px" }}>
            CUSTOM FIREARMS & GEAR
          </p>
        </div>

        <div style={{ display: "flex", gap: "18px", fontSize: "14px", color: "#ddd" }}>
          <a href="#categories" style={{ color: "#ddd", textDecoration: "none" }}>
            Shop
          </a>
          <a href="#build-form" style={{ color: "#ddd", textDecoration: "none" }}>
            Custom Builds
          </a>
          <a href="#contact" style={{ color: "#ddd", textDecoration: "none" }}>
            Contact
          </a>
        </div>
      </div>

      {/* HERO */}
      <section
        style={{
          padding: "90px 20px 70px",
          textAlign: "center",
          background:
            "linear-gradient(rgba(0,0,0,0.78), rgba(0,0,0,0.9)), url('https://images.unsplash.com/photo-1511884642898-4c92249e20b6?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat",
          borderBottom: "1px solid #1a1a1a",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: "56px",
            marginBottom: "14px",
            letterSpacing: "2px",
            lineHeight: 1.05,
            textShadow: "0 0 18px rgba(0,0,0,0.6)",
          }}
        >
          FORGED FOR FREEDOM
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            maxWidth: "760px",
            margin: "0 auto 28px",
            color: "#cfcfcf",
            fontSize: "20px",
            lineHeight: 1.6,
          }}
        >
          Custom AR-platform builds, tactical gear, and hard-use equipment built for performance,
          reliability, and American grit.
        </motion.p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "14px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#build-form"
            style={{
              background: "#b31212",
              color: "#fff",
              padding: "14px 28px",
              textDecoration: "none",
              fontWeight: "bold",
              borderRadius: "6px",
              border: "1px solid #d42a2a",
              boxShadow: "0 0 18px rgba(179,18,18,0.25)",
            }}
          >
            START YOUR BUILD
          </a>

          <a
            href="#categories"
            style={{
              background: "transparent",
              color: "#fff",
              padding: "14px 28px",
              textDecoration: "none",
              fontWeight: "bold",
              borderRadius: "6px",
              border: "1px solid #555",
            }}
          >
            VIEW CATEGORIES
          </a>
        </div>
      </section>

      {/* BRAND STRIP */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "14px",
          padding: "22px 20px",
          background: "#090909",
          borderBottom: "1px solid #181818",
        }}
      >
        {[
          "PRECISION BUILDS",
          "FFL COMPLIANT SHIPPING",
          "HARD-USE COMPONENTS",
          "AMERICAN-MADE ATTITUDE",
        ].map((item) => (
          <div
            key={item}
            style={{
              textAlign: "center",
              padding: "14px",
              background: "#101010",
              border: "1px solid #1d1d1d",
              borderRadius: "8px",
              color: "#d8d8d8",
              fontWeight: "bold",
              letterSpacing: "1px",
            }}
          >
            {item}
          </div>
        ))}
      </section>

      {/* CATEGORIES */}
      <section id="categories" style={{ padding: "70px 20px" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "36px",
            marginBottom: "16px",
            letterSpacing: "1px",
          }}
        >
          OUR CATEGORIES
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "#aaaaaa",
            maxWidth: "760px",
            margin: "0 auto 40px",
            fontSize: "18px",
          }}
        >
          Built for shooters who want performance, dependability, and a setup that stands out.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "22px",
          }}
        >
          {[
            {
              title: "AR-15 BUILDS",
              text: "Custom rifle packages built around reliability, fit, finish, and mission-specific performance.",
            },
            {
              title: "ACCESSORIES",
              text: "Optics-ready upgrades, furniture, controls, sling options, and add-ons that matter.",
            },
            {
              title: "TACTICAL GEAR",
              text: "Loadout-ready gear and supporting equipment for the range, field, and everyday preparedness.",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                background: "linear-gradient(180deg, #151515, #0c0c0c)",
                padding: "28px",
                borderRadius: "12px",
                border: "1px solid #262626",
                boxShadow: "0 0 20px rgba(0,0,0,0.35)",
              }}
            >
              <h3 style={{ marginTop: 0, fontSize: "24px", letterSpacing: "1px" }}>{item.title}</h3>
              <p style={{ color: "#b3b3b3", lineHeight: 1.7 }}>{item.text}</p>
              <button
                style={{
                  marginTop: "12px",
                  padding: "12px 22px",
                  background: "#b31212",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                BROWSE
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CUSTOM BUILD FORM */}
      <section
        id="build-form"
        style={{
          padding: "75px 20px",
          background: "linear-gradient(180deg, #0b0b0b, #111)",
          borderTop: "1px solid #181818",
          borderBottom: "1px solid #181818",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "38px",
              marginBottom: "12px",
              letterSpacing: "1px",
            }}
          >
            CUSTOM BUILD REQUEST
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "#b1b1b1",
              maxWidth: "760px",
              margin: "0 auto 34px",
              fontSize: "18px",
              lineHeight: 1.6,
            }}
          >
            Tell us what you want built. Submit your specs and we’ll review your request and contact you
            with next steps.
          </p>

          <form
            style={{
              display: "grid",
              gap: "16px",
              background: "#0b0b0b",
              border: "1px solid #262626",
              borderRadius: "14px",
              padding: "26px",
              boxShadow: "0 0 24px rgba(0,0,0,0.35)",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "16px",
              }}
            >
              <input placeholder="Full Name" style={inputStyle} />
              <input placeholder="Email Address" style={inputStyle} />
              <input placeholder="Phone Number" style={inputStyle} />
              <input placeholder="City / State" style={inputStyle} />
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "16px",
              }}
            >
              <input placeholder="Preferred Platform" style={inputStyle} />
              <input placeholder="Caliber" style={inputStyle} />
              <input placeholder="Barrel Length" style={inputStyle} />
              <input placeholder="Budget Range" style={inputStyle} />
            </div>

            <textarea
              placeholder="Describe your build: intended use, color, attachments, optic setup, preferred parts, suppressor ready, etc."
              style={{
                ...inputStyle,
                minHeight: "160px",
                resize: "vertical",
              }}
            />

            <div
              style={{
                color: "#9f9f9f",
                fontSize: "14px",
                lineHeight: 1.6,
              }}
            >
              All firearm purchases must ship to a licensed FFL dealer where required by law. A
              non-refundable deposit may be required to begin custom builds.
            </div>

            <button
              type="submit"
              style={{
                padding: "16px 24px",
                background: "#b31212",
                color: "#fff",
                border: "1px solid #d42a2a",
                borderRadius: "8px",
                fontWeight: "bold",
                fontSize: "16px",
                cursor: "pointer",
                boxShadow: "0 0 20px rgba(179,18,18,0.25)",
              }}
            >
              SUBMIT BUILD REQUEST
            </button>
          </form>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "70px 20px" }}>
        <h2 style={{ textAlign: "center", fontSize: "34px", marginBottom: "30px" }}>CONTACT PATRIOTS FORGE</h2>

        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
          }}
        >
          {[
            { title: "EMAIL", value: "patriotsforge@gmail.com" },
            { title: "PHONE", value: "662-825-2604" },
            { title: "LOCATION", value: "30145 Hwy 371, Amory, MS" },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                background: "#111",
                border: "1px solid #242424",
                borderRadius: "10px",
                padding: "24px",
                textAlign: "center",
              }}
            >
              <h3 style={{ marginTop: 0, color: "#d5d5d5", letterSpacing: "1px" }}>{item.title}</h3>
              <p style={{ color: "#a9a9a9", marginBottom: 0 }}>{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          textAlign: "center",
          padding: "30px 20px",
          color: "#6f6f6f",
          borderTop: "1px solid #161616",
          background: "#080808",
        }}
      >
        © {new Date().getFullYear()} Patriots Forge — Forged for Freedom. Built for Battle.
      </footer>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: "8px",
  border: "1px solid #2c2c2c",
  background: "#121212",
  color: "#fff",
  fontSize: "16px",
  boxSizing: "border-box",
};
