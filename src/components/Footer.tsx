import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">SC</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-blue-400">Service Clean</span>
                <span className="text-green-400 text-sm font-medium -mt-1">360°</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Limpeza profissional 360° para empresas, ginásios, lojas e fábricas. 
              Equipe especializada, produtos ecológicos e atendimento 24 horas.
            </p>
            <div className="space-y-2">
              <p className="text-gray-300">
                <span className="font-medium text-white">Telefone:</span>{" "}
                <a href="tel:+5511999999999" className="text-blue-400 hover:text-blue-300">
                  (11) 99999-9999
                </a>
              </p>
              <p className="text-gray-300">
                <span className="font-medium text-white">WhatsApp:</span>{" "}
                <a 
                  href="https://wa.me/5511999999999" 
                  className="text-green-400 hover:text-green-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (11) 99999-9999
                </a>
              </p>
              <p className="text-gray-300">
                <span className="font-medium text-white">Email:</span>{" "}
                <a href="mailto:contato@serviceclean360.com.br" className="text-blue-400 hover:text-blue-300">
                  contato@serviceclean360.com.br
                </a>
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Nossos Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Limpeza Empresarial
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Limpeza de Ginásios
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Limpeza de Lojas
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Limpeza Industrial
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Limpeza de Carpetes
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Higienização de Ar
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Orçamento Grátis
                </Link>
              </li>
            </ul>

            {/* Certifications */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2 text-white">Certificações</h4>
              <div className="space-y-1 text-xs text-gray-400">
                <p>✓ Empresa Licenciada</p>
                <p>✓ Seguro Responsabilidade Civil</p>
                <p>✓ Produtos Ecológicos</p>
                <p>✓ Atendimento 24h</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Service Clean 360. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-6">
              <p className="text-xs text-gray-500">
                Atendemos toda a Grande São Paulo
              </p>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-xs text-green-400">Online 24h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}