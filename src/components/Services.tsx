import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ShoppingCart, Wrench, Network, Settings, Headphones, Laptop } from "lucide-react";
import { motion, Variants, Transition, easeInOut } from "framer-motion";

export function Services() {
  const services = [
    {
      icon: <ShoppingCart className="h-8 w-8 text-blue-600" />,
      title: "Vente de Matériel Informatique",
      description: "Large gamme d'ordinateurs, serveurs, périphériques et accessoires informatiques de marques reconnues.",
      image: "/images/services1.jpg",
      features: ["Ordinateurs portables et de bureau", "Serveurs d'entreprise", "Périphériques et accessoires", "Garantie constructeur"]
    },
    {
      icon: <Wrench className="h-8 w-8 text-green-600" />,
      title: "Maintenance & Réparation",
      description: "Services de maintenance préventive et curative pour tous types d'équipements informatiques.",
      image: "/images/service2.png",
      features: ["Diagnostic complet", "Réparation sur site", "Maintenance préventive", "Remplacement de pièces"]
    },
    {
      icon: <Network className="h-8 w-8 text-purple-600" />,
      title: "Réseaux & Câblage",
      description: "Conception, installation et maintenance de réseaux informatiques et infrastructure de câblage.",
      image: "/images/réseauCablage.png",
      features: ["Câblage structuré", "Configuration de routeurs", "Réseaux Wi-Fi", "Sécurité réseau"]
    },
    {
      icon: <Settings className="h-8 w-8 text-orange-600" />,
      title: "Installation & Configuration",
      description: "Installation et configuration de systèmes d'exploitation, logiciels et applications métier.",
      image: "/images/configInstallation.png",
      features: ["Systèmes d'exploitation", "Logiciels métier", "Configuration sécurisée", "Migration de données"]
    },
    {
      icon: <Headphones className="h-8 w-8 text-red-600" />,
      title: "Support Technique",
      description: "Assistance technique à distance et sur site pour résoudre tous vos problèmes informatiques.",
      image: "/images/service5.jpg",
      features: ["Support 24h/7j", "Assistance à distance", "Formation utilisateurs", "Documentation technique"]
    },
    {
      icon: <Laptop className="h-8 w-8 text-teal-600" />,
      title: "Consulting IT",
      description: "Conseil en stratégie informatique pour optimiser votre infrastructure et vos processus.",
      image: "/images/service6.jpg",
      features: ["Audit informatique", "Stratégie IT", "Optimisation des coûts", "Modernisation"]
    }
  ];

  // Variants pour l'animation des cartes
  const cardVariants = (index: number): Variants => ({
    hidden: {
      opacity: 0,
      x: index % 3 === 0 ? -50 : index % 3 === 1 ? 50 : 0,
      y: index % 3 === 2 ? 50 : 0
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
        ease: easeInOut
      }
    }
  });

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
           Boostez votre croissance avec des solutions informatiques innovantes, fiables et sur mesure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants(index)}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white p-3 rounded-full shadow-lg">
                    {service.icon}
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
