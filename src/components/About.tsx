import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Users, Award, Clock, Globe } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  const stats = [
    { icon: <Users className="h-8 w-8 text-blue-600" />, number: "500+", label: "Clients satisfaits" },
    { icon: <Award className="h-8 w-8 text-green-600" />, number: "20+", label: "Années d'expérience" },
    { icon: <Clock className="h-8 w-8 text-purple-600" />, number: "24h/6j", label: "Support technique" },
    { icon: <Globe className="h-8 w-8 text-orange-600" />, number: "05+", label: "Partenaires de marques" },
  ];

  const values = [
    { title: "Excellence", description: "Nous plaçons l’excellence au cœur de chaque solution, en garantissant une qualité supérieure et une fiabilité irréprochable." },
    { title: "Innovation", description: "Allier créativité et technologie pour offrir des solutions toujours plus efficaces et avant-gardistes" },
    { title: "Proximité", description: "Nous plaçons chaque client au cœur de notre démarche, avec un accompagnement personnalisé et adapté à chaque projet." },
    { title: "Fiabilité", description: "Nous construisons des partenariats solides, en tenant toujours nos promesses et en garantissant la transparence." },
  ];

  const cardVariants = {
    hidden: (direction: "left" | "right" | "bottom") => {
      switch (direction) {
        case "left": return { opacity: 0, x: -50, scale: 0.95 };
        case "right": return { opacity: 0, x: 50, scale: 0.95 };
        case "bottom": return { opacity: 0, y: 50, scale: 0.95 };
      }
    },
    visible: { opacity: 1, x: 0, y: 0, scale: 1 },
  };

  return (
    <section id="apropos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            À Propos d'ESTS Informatique
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chez ESTS Informatique, nous connectons l'Afrique au monde grâce
            à des solutions informatiques sur mesure, performantes et accessibles.
            Notre ambition : faire du numérique un levier de compétitivité et d'excellence pour chaque entreprise.
          </p>
        </div>

        {/* Histoire et Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl text-gray-900 mb-6">Notre Histoire</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Fondée avec la vision de rendre les technologies informatiques accessibles à tous, 
                ESTS Informatique s'est progressivement imposée comme
                un acteur majeur du secteur numérique en Afrique.
              </p>
              <p>
                Depuis plus de vingt ans, nous accompagnons entreprises, institutions et
                particuliers dans leur transformation digitale en leur offrant des solutions
                sur mesure, pensées pour répondre aux réalités du marché africain.
              </p>
              <p>
                Notre expertise s’étend sur l’ensemble de la chaîne de valeur informatique : 
                fourniture d’équipements, installation, configuration, maintenance et support technique.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ImageWithFallback
              src="/images/img.png"
              alt="Équipe ESTS Informatique"
              className="w-full h-[400px] object-contain rounded-2xl shadow-lg bg-gray-100"
            />
          </motion.div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const direction = index % 3 === 0 ? "left" : index % 3 === 1 ? "right" : "bottom";
            return (
              <motion.div
                key={index}
                custom={direction}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
              >
                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex justify-center mb-4">{stat.icon}</div>
                    <h3 className="text-2xl text-gray-900 mb-2">{stat.number}</h3>
                    <p className="text-gray-600">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Values */}
    <div>
  <h3 className="text-2xl text-gray-900 text-center mb-12">Nos Valeurs</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {values.map((value, index) => {
      const direction = index % 3 === 0 ? "left" : index % 3 === 1 ? "right" : "bottom";
      return (
        <motion.div
          key={index}
          custom={direction}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.5, ease: "easeIn" }}
        >
          <Card className="text-center p-6 hover:shadow-lg transition-shadow h-full flex flex-col">
            <CardContent className="p-0 flex flex-col flex-grow">
              <h4 className="text-xl text-gray-900 mb-4">{value.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed mt-auto">{value.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      );
    })}
  </div>
</div>


     <motion.div
  className="bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white mt-20"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.1 }}
  transition={{ duration: 1, ease: "easeIn" }}
>
  <h3 className="text-2xl md:text-3xl mb-6">Notre Mission</h3>
  <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
    Chez ESTS Informatique, notre mission est d'accompagner la transformation numérique
    de l'Afrique en proposant des solutions technologiques fiables, innovantes et accessibles à tous.
    Nous plaçons l'excellence, la confiance et le développement des compétences locales au cœur de
    notre démarche afin de bâtir un écosystème numérique solide, créateur d'opportunités et moteur
    de croissance durable pour le continent africain.
  </p>
</motion.div>

      </div>
    </section>
  );
}
