import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { motion } from "framer-motion";

// ✅ Définition du type des repères
interface RepereItem {
  type: "image" | "video";
  src: string;
  title: string;
  link?: string;
}

export function Footer() {
  // ✅ État pour gérer la modale
  const [selectedItem, setSelectedItem] = useState<RepereItem | null>(null);

  const reperes: RepereItem[] = [
    { type: "image", src: "/images/ests1.jpg", title: "Notre siège" },
     { type: "image", src: "/images/ests2.jpg", title: "Notre siège" },
    { type: "video", src: "/images/ests3.mp4", title: "Tour du quartier" },
  ];

  return (
    <>
      {/* --- Map avant le footer --- */}
      <motion.section
        className="w-full mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-2xl overflow-hidden shadow-xl mx-auto">
          <iframe
            title="Localisation  ESTS"
            src="google.com/maps?q=14.6963214874268,-17.4472522735596"
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </motion.section>

      {/* --- Repères autour --- */}
      <motion.section
        className="container mx-auto px-4 mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h3 className="text-2xl text-gray-900 mb-8 text-center">
          Repères autour de notre localisation
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-center place-items-center">
          {reperes.map((item, index) => (
            <motion.div
              key={index}
              onClick={() => setSelectedItem(item)} // ✅ clic = ouvrir modale
              className="rounded-2xl overflow-hidden shadow-lg bg-white cursor-pointer hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <video
                  src={item.src}
                  controls
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h4 className="text-gray-900 font-semibold text-center">
                  {item.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ✅ Modale d’affichage intégral */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden relative shadow-2xl">
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 text-gray-800 hover:text-red-500 text-2xl font-bold bg-gray"
              >
                 X
              </button>

              {selectedItem.type === "image" ? (
                <img
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  className="w-full h-auto"
                />
              ) : (
                <video
                  src={selectedItem.src}
                  controls
                  autoPlay
                  className="w-full h-auto"
                />
              )}

              <div className="p-4 text-center">
                <h4 className="text-gray-900 text-lg font-semibold">
                  {selectedItem.title}
                </h4>
              </div>
            </div>
          </div>
        )}
      </motion.section>

      {/* --- Footer --- */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-16">
          {/* Newsletter */}
          <div className="bg-blue-600 rounded-2xl p-8 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl mb-2">Restez informé</h3>
                <p className="text-blue-100">
                  Recevez nos dernières actualités, offres spéciales et conseils
                  techniques.
                </p>
              </div>
              <div className="flex gap-4">
                <Input
                  placeholder="Votre adresse email"
                  className="bg-white text-gray-900 border-none"
                />
                <Button
                  variant="secondary"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  S'abonner
                </Button>
              </div>
            </div>
          </div>

          <Separator className="bg-gray-700 mb-8" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-400 text-sm">
              © 2025 Entreprise Sénégalaise de Travaux et Services.
              <br /> Tous droits réservés. Fournisseur de solutions numériques.
            </div>

            <div className="flex gap-6 text-sm text-gray-400">
              <a
                href="https://web.facebook.com/profile"
                target="_blank"
                className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors"
                style={{ backgroundColor: "#0866FF" }}
              >
                <img
                  src="/images/facebook.svg"
                  alt="Facebook"
                  className="h-5 w-5"
                />
              </a>
              <a
                href="https://www.instagram.com/agsinformatique/"
                target="_blank"
                className="bg-gray-800 p-2 rounded-lg hover:bg-blue-400 transition-colors"
                style={{ backgroundColor: "#FF0069" }}
              >
                <img
                  src="/images/instagram.svg"
                  alt="Instagram"
                  className="h-5 w-5"
                />
              </a>
              <a
                href="https://www.tiktok.com/@ags.informatique"
                target="_blank"
                className="bg-gray-800 p-2 rounded-lg hover:bg-blue-700 transition-colors"
                style={{ backgroundColor: "#fff" }}
              >
                <img src="/images/tiktok.svg" alt="Tiktok" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
