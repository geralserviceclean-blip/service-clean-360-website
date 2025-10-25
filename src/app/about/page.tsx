import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export const metadata = {
  title: "Sobre a Service Clean 360 | Empresa de Limpeza Profissional",
  description: "Conheça a história, missão e valores da Service Clean 360. Mais de 10 anos de experiência em limpeza profissional com +500 empresas atendidas.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Qualidade",
      description: "Padrão de excelência em todos os nossos serviços, sempre superando expectativas.",
      icon: "⭐"
    },
    {
      title: "Confiabilidade", 
      description: "Pontualidade, compromisso e responsabilidade em cada projeto realizado.",
      icon: "🤝"
    },
    {
      title: "Sustentabilidade",
      description: "Produtos ecológicos e práticas sustentáveis para preservar o meio ambiente.",
      icon: "🌱"
    },
    {
      title: "Inovação",
      description: "Equipamentos modernos e técnicas atualizadas para melhores resultados.",
      icon: "🚀"
    }
  ];

  const certifications = [
    "Licença de Funcionamento Municipal",
    "Seguro Responsabilidade Civil",
    "Certificação Ambiental ISO 14001",
    "Treinamento NR-35 (Trabalho em Altura)",
    "Certificação em Produtos Químicos",
    "Licença Sanitária ANVISA"
  ];

  const timeline = [
    {
      year: "2014",
      title: "Fundação",
      description: "Início das atividades com foco em limpeza residencial"
    },
    {
      year: "2016", 
      title: "Expansão Comercial",
      description: "Primeiro contrato com empresa de grande porte"
    },
    {
      year: "2018",
      title: "Certificações",
      description: "Conquista das principais certificações do setor"
    },
    {
      year: "2020",
      title: "Crescimento",
      description: "Marca de 200 empresas atendidas alcançada"
    },
    {
      year: "2022",
      title: "Tecnologia",
      description: "Investimento em equipamentos de última geração"
    },
    {
      year: "2024",
      title: "Liderança",
      description: "Mais de 500 empresas atendidas em toda Grande SP"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Sobre a <span className="text-green-300">Service Clean 360</span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 mb-6 leading-relaxed">
                10 anos transformando ambientes com limpeza profissional de excelência
              </p>
              <p className="text-lg text-blue-200 leading-relaxed">
                Somos especialistas em limpeza empresarial, oferecendo soluções completas 
                e personalizadas para empresas, ginásios, lojas e indústrias em toda a Grande São Paulo.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://placehold.co/600x400?text=Equipe+Service+Clean+360+posando+profissionalmente+com+uniformes+e+equipamentos+de+limpeza+modernos"
                alt="Equipe Service Clean 360 com uniformes profissionais e equipamentos modernos"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-blue-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Missão</h3>
                <p className="text-gray-600 leading-relaxed">
                  Proporcionar ambientes limpos, saudáveis e acolhedores através de 
                  serviços de limpeza profissional de alta qualidade, contribuindo 
                  para o bem-estar e produtividade de nossos clientes.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">👁️</div>
                <h3 className="text-2xl font-bold text-green-600 mb-4">Visão</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ser reconhecida como a empresa líder em limpeza profissional na 
                  Grande São Paulo, referência em qualidade, sustentabilidade e 
                  inovação no setor.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-purple-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">💎</div>
                <h3 className="text-2xl font-bold text-purple-600 mb-4">Valores</h3>
                <p className="text-gray-600 leading-relaxed">
                  Qualidade, confiabilidade, sustentabilidade e inovação são os 
                  pilares que guiam todas as nossas ações e decisões no 
                  atendimento aos clientes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Detail */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nossos Valores em Ação
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cada valor representa um compromisso real com a excelência 
              e satisfação dos nossos clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{value.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nossa Trajetória
            </h2>
            <p className="text-lg text-gray-600">
              10 anos de crescimento, inovação e conquistas
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
                      <div className="text-2xl font-bold text-blue-600 mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Certificações e Licenças
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Nossa empresa possui todas as certificações necessárias para 
                operar com segurança e qualidade no mercado de limpeza profissional.
              </p>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-4 flex-shrink-0"></div>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://placehold.co/600x500?text=Certificados+licencas+ambientais+seguros+e+documentacoes+profissionais+da+Service+Clean+360"
                alt="Certificados, licenças ambientais e documentações profissionais da Service Clean 360"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-gray-300">Empresas Atendidas</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-blue-400 mb-2">10+</div>
              <div className="text-gray-300">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-gray-300">Funcionários Qualificados</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-blue-400 mb-2">24h</div>
              <div className="text-gray-300">Atendimento Disponível</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Quer fazer parte da nossa história?
          </h2>
          <p className="text-xl mb-8">
            Junte-se aos mais de 500 clientes satisfeitos e descubra a diferença 
            da limpeza profissional Service Clean 360.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-8">
              <Link href="/contact">Fale Conosco</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 font-semibold px-8">
              <Link href="/services">Ver Serviços</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}