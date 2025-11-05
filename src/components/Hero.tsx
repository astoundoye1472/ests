import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Zap, Shield, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// ✅ Nouveau Hero Section moderne, premium & animé
export function Hero() {
  const title = "La Maîtrise Technologique";
  const subtitle = "Au Service de Vos Ambitions";
  const tagline =
    "Avec ESTS, l’excellence sénégalaise est au service de vos projets : travaux, services et solutions sur mesure pour bâtir l’avenir."
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [text, setText] = useState("");
  const timersRef = useRef<number[]>([]);

  const images = [
    "/images/imagebanniere.jpg",
    "/images/banniere5.png",
    "/images/banniere2.jpeg",
     "/images/banniere3.jfif",
    "/images/banniere2.jpeg",
    "/images/banniere4.JFIF"

  ];
  const [currentImage, setCurrentImage] = useState(images[0]);

  function typeText(
    setter: React.Dispatch<React.SetStateAction<string>>,
    text: string,
    delayBetween = 40,
    startDelay = 0
  ) {
    for (let i = 0; i < text.length; i++) {
      const t = window.setTimeout(() => {
        setter((prev: string) => prev + text[i]);
      }, startDelay + i * delayBetween);
      timersRef.current.push(t);
    }
    return startDelay + text.length * delayBetween;
  }

  useEffect(() => {
    setLine1("");
    setLine2("");
    setText("");

    const d1 = typeText(setLine1, title);
    const d2 = typeText(setLine2, subtitle, 40, d1 + 300);
    typeText(setText, tagline, 20, d2 + 400);

    return () => {
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => {
        let next;
        do {
          next = images[Math.floor(Math.random() * images.length)];
        } while (next === prev);
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white overflow-hidden py-24">
      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center px-6">
        {/* ✅ Text Zone */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4"
          >
            {line1}
            <br />
            <span className="text-blue-600">{line2}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-lg text-gray-600 mb-8 max-w-lg"
          >
            {text}
          </motion.p>

          <div className="grid center gap-6 mb-10">
            <div
              style={{
                display: "flex",
                justifyContent: "center", // centre horizontalement
                gap: "4rem", // espace entre chaque icône
                marginTop: "2rem",
              }}
            >
              {/* Rapidité */}
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    backgroundColor: "#1E40AF", // bleu foncé
                    padding: "1rem",
                    borderRadius: "50%",
                    width: "56px",
                    height: "56px",
                    margin: "0 auto 0.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    animation: "bounce 1s infinite alternate",
                  }}
                >
                  <Zap
                    style={{ color: "#fff", width: "28px", height: "28px" }}
                  />
                </div>
                <h3 style={{ fontWeight: 600 }}>Rapidité</h3>
                <p style={{ fontSize: "0.875rem", color: "#6B7280" }}>
                  Intervention express
                </p>
              </div>

              {/* Fiabilité */}
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    backgroundColor: "#047857", // vert foncé
                    padding: "1rem",
                    borderRadius: "50%",
                    width: "56px",
                    height: "56px",
                    margin: "0 auto 0.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    animation: "pulse 1.5s infinite alternate",
                  }}
                >
                  <Shield
                    style={{ color: "#fff", width: "28px", height: "28px" }}
                  />
                </div>
                <h3 style={{ fontWeight: 600 }}>Fiabilité</h3>
                <p style={{ fontSize: "0.875rem", color: "#6B7280" }}>
                  Solutions durables
                </p>
              </div>

              {/* Expertise */}
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    backgroundColor: "#6D28D9", // violet foncé
                    padding: "1rem",
                    borderRadius: "50%",
                    width: "56px",
                    height: "56px",
                    margin: "0 auto 0.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    animation: "bounce 1s infinite alternate",
                  }}
                >
                  <Users
                    style={{ color: "#fff", width: "28px", height: "28px" }}
                  />
                </div>
                <h3 style={{ fontWeight: 600 }}>Expertise</h3>
                <p style={{ fontSize: "0.875rem", color: "#6B7280" }}>
                  Techniciens certifiés
                </p>
              </div>
            </div>

            {/* CSS pour animations */}
            <style>
              {`
  @keyframes bounce {
    0% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0); }
  }
  
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }
`}
            </style>
          </div>
        </div>

        {/* ✅ Slideshow Side */}
<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
  <div className="relative">
    <ImageWithFallback
      src={currentImage}
      alt="ESTS Informatique – Solutions informatiques"
      className="rounded-3xl shadow-2xl object-cover w-full h-[500px]"
    />

    {/* Badge en haut à droite – sur la marge */}
    <div
      style={{
        position: "absolute",
        top: "-0.5rem",   // moins collé en haut
        right: "-0.5rem", // moins collé à droite
        backgroundColor: "#ffffff",
        padding: "0.75rem 1rem",
        borderRadius: "0.75rem",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      <div style={{ width: "0.75rem", height: "0.75rem", backgroundColor: "#10B981", borderRadius: "50%" }}></div>
      <span style={{ fontSize: "0.875rem" }}>✅ +500 clients satisfaits</span>
    </div>

    {/* Badge en bas à gauche – sur la marge */}
    <div
      style={{
        position: "absolute",
        bottom: "-0.5rem", // moins collé en bas
        left: "-0.5rem",   // moins collé à gauche
        backgroundColor: "#ffffff",
        padding: "0.75rem 1rem",
        borderRadius: "0.75rem",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      <div style={{ width: "0.75rem", height: "0.75rem", backgroundColor: "#10B981", borderRadius: "50%" }}></div>
      <span style={{ fontSize: "0.875rem" }}>📞 Assistance 24/7</span>
    </div>
  </div>
</motion.div>
      </div>
    </section>
  
  );
}
