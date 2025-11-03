import { Button } from "./ui/button";
import { Menu, Phone, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        {/* Contact info bar */}
        <div className="hidden md:flex items-center justify-end py-2 border-b border-gray-100">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-blue-600" />
              <span className="text-sm text-gray-600">+221 78 864 42 39</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-blue-600" />
              <span className="text-sm text-gray-600">estssarl2021@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center" aria-label="Accueil">
            <div className="bg-blue-600 rounded-lg mr-3">
                <img src="/images/ESTS 192X192.jpg" alt="Logo AGS"/>
            </div>
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <style>
{`
@keyframes wiggle {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}
.wiggle {
  animation: wiggle 1s ease-in-out infinite;
}
`}
</style>
          <Button asChild>
  <a
    href="https://wa.me/221773870030"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contactez-nous sur WhatsApp"
    style={{
      backgroundColor: "#25D366",
      color: "#fff",
      display: "inline-flex",
      alignItems: "center",
      gap: "0.5rem",
      padding: "0.5rem 1rem",
      borderRadius: "0.375rem",
    }}
    className="text-white wiggle"
  >
    <FaWhatsapp size={16} />
    <span>WhatsApp</span>
  </a>
</Button>
          </nav>
          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4 pt-4">
              <Button asChild>
                <a
                  href="https://wa.me/221773870030"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contactez-nous sur WhatsApp"
                  style={{
                    backgroundColor: "#25D366",
                    color: "#fff",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.375rem",
                  }}
                  className="text-white w-fit"
                >
                  <FaWhatsapp size={16} />
                  <span>WhatsApp</span>
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}