import { Card, CardContent} from "./ui/card";
import { Button } from "./ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      title: "Adresse",
      content: "25 Avenue C.A.Bamba Colobane en face du lycée Kennedy", 
      description: "Bureaux"
    },
    {
      icon: <Phone className="h-6 w-6 text-green-600" />,
      title: "Téléphone",
      content: "+221 77 268 41 88\n +221 33 822 20 50\n" +
          "+221 77 578 92 36\n +221 77 541 00 39`\n +221 78 147 12 85",
      description: "Numéros d'urgence",
    },
    {
      icon: <Mail className="h-6 w-6 text-purple-600" />,
      title: "Email",
      content: "estssarl2021@gmail.com",
      description: "Réponse sous 24h"
    },
    {
      icon: <Clock className="h-6 w-6 text-orange-600" />,
      title: "Horaires",
      content: "Lun - Ven: 10h00 - 18h00\nSam: 12h00 - 17h00",
      description: "Fermé les dimanches et jours fériés"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            Contactez-Nous
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
           Vous avez un projet informatique ? Notre équipe d’experts vous accompagne avec des solutions sur mesure, performantes et adaptées à vos besoins.
          </p>
        </div>

        <div className="">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Informations de Contact</h3>

            {/* Cartes d'informations */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-3 rounded-xl group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
                        <div className="text-blue-600">
                          {info.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h4>
                        <p className="text-gray-700 whitespace-pre-line mb-2 leading-relaxed">
                          {info.content}
                        </p>
                        <p className="text-sm text-gray-500 font-medium">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Actions rapides */}
<div className="mt-12 text-center">
  <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-6">
    Discuter avec nous
  </h4>

  <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6">
    {/* Bouton Appeler */}
    <Button
      onClick={() => window.open('tel:+221773870030', '_self')}
      className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
    >
      <div className="bg-white/20 p-2 rounded-lg">
        <Phone className="h-5 w-5" />
      </div>
      <span className="text-base font-medium">Appeler</span>
    </Button>

    {/* Bouton Email */}
    <Button
      onClick={() => window.open('estssarl2021@gmail.com', '_self')}
      variant="outline"
      className="flex items-center justify-center gap-2 border-2 border-blue-300 hover:border-blue-500 hover:bg-blue-50 text-blue-700 hover:text-blue-800 font-semibold px-6 py-3 rounded-xl shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-300"
    >
      <div className="bg-blue-100 p-2 rounded-lg">
        <Mail className="h-5 w-5 text-blue-600" />
      </div>
      <span className="text-base font-medium">Email</span>
    </Button>
  </div>
</div>


          </div>
        </div>

        {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white mt-20">
  <h3 className="text-2xl md:text-3xl mb-4">
    Urgence Informatique ?
  </h3>
  <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
    Ne manquez rien ! Recevez nos nouveautés, offres spéciales et astuces techniques directement dans votre boîte.
  </p>
  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
    <Button size="lg" variant="secondary" className="bg-white text-lg text-blue-600 hover:bg-gray-100 w-[20px]"
            onClick={() => window.open('tel:+221772684188', '_self')}>
      Assistance d'urgence
    </Button>
  </div>
</div>
      </div>
    </section>
  );
}