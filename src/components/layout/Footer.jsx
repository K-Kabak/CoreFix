import React from 'react';
import Container from '../ui/Container';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 md:py-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img src="/src/assets/icons/logo.svg" alt="CoreFix Logo" className="w-10 h-10 brightness-0 invert" />
              <span className="text-2xl font-bold tracking-tight text-white">
                Core<span className="text-primary">Fix</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Profesjonalny serwis komputerowy. Naprawiamy laptopy, PC i odzyskujemy dane. Szybko, uczciwie i z gwarancją.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Usługi</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#services" className="hover:text-primary transition-colors">Naprawa laptopów</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Wymiana dysków SSD</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Odzyskiwanie danych</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Czyszczenie i konserwacja</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Firma</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#about" className="hover:text-primary transition-colors">O nas</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">Cennik</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Kontakt</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <span className="text-primary">📍</span>
                ul. Marszałkowska 1, Warszawa
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary">📞</span>
                +48 22 123 45 67
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary">✉️</span>
                kontakt@corefix.pl
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {currentYear} CoreFix. Wszelkie prawa zastrzeżone.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Polityka prywatności</a>
            <a href="#" className="hover:text-white transition-colors">Regulamin</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
