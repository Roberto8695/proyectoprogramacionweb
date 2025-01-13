import React from 'react';
import { BiBeer, BiMap } from 'react-icons/bi';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import { GiHops } from 'react-icons/gi';

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-amber-100">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-amber-800">
          <div className="max-w-2xl mx-auto text-center">
            <GiHops className="w-12 h-12 mx-auto mb-4 text-amber-500" />
            <h3 className="text-2xl font-bold text-amber-200 mb-4">
              ¡Únete al Club Cervecero!
            </h3>
            <p className="mb-6 text-amber-200/80">
              Recibe noticias sobre nuevas cervezas y ofertas exclusivas
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-1 px-4 py-3 rounded-lg bg-amber-800/50 border border-amber-700 focus:outline-none focus:border-amber-500 text-amber-100 placeholder-amber-400"
              />
              <button className="px-6 py-3 bg-amber-500 text-amber-900 rounded-lg hover:bg-amber-400 transition duration-300 font-semibold">
                Suscribirse
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BiBeer className="w-8 h-8 text-amber-500" />
              <h4 className="text-xl font-bold text-amber-200">Beer Shop</h4>
            </div>
            <p className="text-amber-200/80 mb-4">
              Tu destino para las mejores cervezas artesanales, con una selección cuidadosamente elegida para los verdaderos amantes de la cerveza.
            </p>
            <div className="flex space-x-4">
              {[FaFacebookF, FaTwitter, FaInstagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#s"
                  className="w-10 h-10 rounded-full bg-amber-800/50 flex items-center justify-center hover:bg-amber-500 transition duration-300 text-amber-200 hover:text-amber-900"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-amber-200 mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {[
                'Nuestras Cervezas',
                'Cervezas Artesanales',
                'Ofertas Especiales',
                'Club Cervecero',
                'Blog'
              ].map((item, index) => (
                <li key={index}>
                  <a href="#s" className="text-amber-200/80 hover:text-amber-500 transition duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold text-amber-200 mb-4">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <BiMap className="w-5 h-5 mr-3 text-amber-500" />
                <span className="text-amber-200/80">Av. Principal 123, Ciudad</span>
              </li>
              <li className="flex items-center">
                <MdPhone className="w-5 h-5 mr-3 text-amber-500" />
                <span className="text-amber-200/80">+1 234 567 890</span>
              </li>
              <li className="flex items-center">
                <MdEmail className="w-5 h-5 mr-3 text-amber-500" />
                <span className="text-amber-200/80">info@beershop.com</span>
              </li>
            </ul>
          </div>

          {/* Horario */}
          <div>
            <h4 className="text-xl font-bold text-amber-200 mb-4">Horario</h4>
            <ul className="space-y-3">
              <li className="text-amber-200/80">Lun - Vie: 10:00 - 22:00</li>
              <li className="text-amber-200/80">Sábado: 11:00 - 23:00</li>
              <li className="text-amber-200/80">Domingo: 12:00 - 21:00</li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-amber-800 text-center md:flex md:justify-between text-amber-200/60 text-sm">
          <p>© 2024 Beer Shop. Todos los derechos reservados.</p>
          <div className="mt-4 md:mt-0">
            <a href="#s" className="mx-3 hover:text-amber-500 transition duration-300">
              Términos
            </a>
            <a href="#s" className="mx-3 hover:text-amber-500 transition duration-300">
              Privacidad
            </a>
            <a href="#s" className="mx-3 hover:text-amber-500 transition duration-300">
              Aviso Legal
            </a>
          </div>
        </div>

        {/* Legal Notice */}
        <div className="py-4 text-center text-amber-200/60 text-xs bg-amber-950/30 rounded-lg mt-6">
          El consumo de bebidas alcohólicas es solo para mayores de 18 años. Bebe con moderación.
        </div>
      </div>
    </footer>
  );
};

export default Footer;