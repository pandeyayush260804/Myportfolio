import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Certificates data (added URLs for View button)
const CERTS = {
  tech: [
    {
      title: "IBM SkillBuild Frontend Course",
      org: "IBM",
      date: "2025",
      img: "/certs/flipkart.png",
      link: "/certs/flipkart.png",
    },
    {
      title: "IBM Project Based Learning",
      org: "IBM ",
      date: "2025",
      img: "/certs/prol.png",
      link: "/certs/prol.png",
    },
    {
      title: "Full Stack Web Developer",
      org: "Brain Mentors",
      date: "2025",
      img: "/certs/MERN.jpg",
      link: "/certs/MERN.jpg",
    },
    {
      title: "Smart India Hackathon 2025",
      org: "SIH",
      date: "2025",
      img: "/certs/sih.png",
      link: "/certs/sih.png",
    },
  ],
  other: [
    {
  title: "Innoquest ESYA'25",
  org: "IIITD",
  date: "2025",
  img: "/certs/1.png",
  link: "/certs/1.png",
},
{
  title: "HackGrounds India 2K25",
  org: "Techverse Nexus Community",
  date: "2025",
  img: "/certs/2.png",
  link: "/certs/2.png",
},
{
  title: "Certificate 3",
  org: "",
  date: "2025",
  img: "/certs/3.png",
  link: "/certs/3.png",
},
{
  title: "Certificate 4",
  org: "",
  date: "2025",
  img: "/certs/4.png",
  link: "/certs/4.png",
},
{
  title: "Certificate 5",
  org: "",
  date: "2025",
  img: "/certs/5.png",
  link: "/certs/5.png",
},
{
  title: "Certificate 6",
  org: "",
  date: "2025",
  img: "/certs/6.png",
  link: "/certs/6.png",
},
{
  title: "Certificate 7",
  org: "",
  date: "2025",
  img: "/certs/7.png",
  link: "/certs/7.png",
},
{
  title: "Certificate 8",
  org: "",
  date: "2025",
  img: "/certs/8.png",
  link: "/certs/8.png",
},
{
  title: "Certificate 9",
  org: "",
  date: "2025",
  img: "/certs/9.png",
  link: "/certs/9.png",
},
{
  title: "Certificate 10",
  org: "",
  date: "2025",
  img: "/certs/10.png",
  link: "/certs/10.png",
},
{
  title: "Certificate 11",
  org: "",
  date: "2025",
  img: "/certs/11.png",
  link: "/certs/11.png",
},
{
  title: "Certificate 12",
  org: "",
  date: "2025",
  img: "/certs/12.png",
  link: "/certs/12.png",
},
{
  title: "Certificate 13",
  org: "",
  date: "2025",
  img: "/certs/13.png",
  link: "/certs/13.png",
},


  ],
};

export default function Certificates() {
  const [tab, setTab] = useState("tech");
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="container" style={{ padding: "40px 0" }}>
      <div className="card" style={{ background: "#111", borderRadius: 12, padding: 24 }}>
        <h2 style={{ fontSize: "1.8rem", color: "#fff", marginBottom: 4 }}>Certificates 🏅</h2>
        <p className="lead" style={{ color: "#aaa" }}>
          Explore my certifications — technical & others.
        </p>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
          {["tech", "other"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={tab === t ? "tab active" : "tab"}
              style={{
                padding: "8px 18px",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
                background: tab === t ? "#007bff" : "#333",
                color: "#fff",
                fontWeight: 500,
                transition: "0.3s",
              }}
            >
              {t === "tech" ? "Tech" : "Others"}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div
          className="certs-grid"
          style={{
            marginTop: 28,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          <AnimatePresence mode="wait">
            {CERTS[tab].map((c, idx) => (
              <motion.div
                key={c.title}
                className="cert card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 15px rgba(0, 123, 255, 0.4)",
                }}
                style={{
                  background: "#1a1a1a",
                  borderRadius: 12,
                  padding: 16,
                  color: "#fff",
                }}
              >
                <img
                  src={c.img}
                  alt={c.title}
                  style={{
                    width: "100%",
                    height: 160,
                    borderRadius: 10,
                    objectFit: "cover",
                    marginBottom: 12,
                  }}
                />
                <strong style={{ fontSize: 16 }}>{c.title}</strong>
                <div className="muted" style={{ fontSize: 13, color: "#bbb" }}>
                  {c.org} • {c.date}
                </div>

                <div style={{ marginTop: 12 }}>
                  <button
                    className="btn"
                    onClick={() => setSelectedCert(c)}
                    style={{
                      background: "#007bff",
                      border: "none",
                      color: "white",
                      borderRadius: 6,
                      padding: "6px 14px",
                      cursor: "pointer",
                    }}
                  >
                    View
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.8)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.img
              src={selectedCert.img}
              alt={selectedCert.title}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              style={{
                maxWidth: "90%",
                maxHeight: "85%",
                borderRadius: 10,
                boxShadow: "0 0 25px rgba(255,255,255,0.2)",
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
