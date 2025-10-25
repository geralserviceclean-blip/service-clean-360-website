import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export const metadata = {
  title: "Serviços de Limpeza Profissional | Service Clean 360",
  description: "Conheça todos os nossos serviços de limpeza: empresarial, ginásios, lojas e indústrias. Soluções completas e personalizadas para cada necessidade.",
};

export default function ServicesPage() {
  const services = [
    {
      category: "Limpeza Empresarial",
      description: "Serviços especializados para escritórios, corporações e ambientes executivos",
      services: [
        "Limpeza diária, semanal ou mensal",
        "Higienização de carpetes e estofados",
        "Limpeza de vidros e janelas",
        "Desinfecção de banheiros e copas",
        "Limpeza de ar-condicionado",
        "Manutenção de áreas comuns"
      ],
      price: "A partir de R$ 15/m²",
      image: "Equipe+profissional+limpando+escritorio+corporativo+moderno+mesa+cadeira+computador",
      color: "blue"
    },
    {
      category: "Limpeza de Ginásios",
      description: "Higienização especializada para academias, centros esportivos e espaços fitness",
      services: [
        "Limpeza de equipamentos de musculação",
        "Higienização de vestiários e chuveiros",
        "Desinfecção de pisos emborrachados",
        "Limpeza de áreas de aeróbicos",
        "Higienização de piscinas (quando aplicável)",
        "Limpeza especializada 24h"
      ],
      price: "A partir de R$ 12/m²",
      image: "Limpeza+especializada+academia+equipamentos+musculacao+vestiarios+higienizacao",
      color: "green"
    },
    {
      category: "Limpeza de Lojas",
      description: "Soluções para varejo, shopping centers e estabelecimentos comerciais",
      services: [
        "Limpeza de vitrines e fachadas",
        "Higienização de áreas de atendimento",
        "Limpeza de provadores",
        "Manutenção de corredores e pisos",
        "Limpeza de estoque e depósitos",
        "Serviços noturnos disponíveis"
      ],
      price: "A partir de R$ 10/m²",
      image: "Limpeza+profissional+loja+comercial+vitrine+balcao+atendimento+cliente",
      color: "purple"
    },
    {
      category: "Limpeza Industrial",
      description: "Limpeza pesada para fábricas, galpões e ambientes industriais",
      services: [
        "Limpeza pesada de galpões",
        "Descontaminação de áreas técnicas",
        "Limpeza de esteiras e maquinários",
        "Remoção de resíduos industriais",
        "Limpeza com equipamentos especializados",
        "Cumprimento de normas de segurança"
      ],
      price: "Orçamento personalizado",
      image: "Limpeza+industrial+fabrica+galpao+maquinarios+esteiras+normas+seguranca",
      color: "orange"
    }
  ];

  const additionalServices = [
    {
      title: "Limpeza Pós-Obra",
      description: "Remoção de detritos e limpeza completa após reformas e construções"
    },
    {
      title: "Higienização de Estofados",
      description: "Limpeza profunda de sofás, poltronas e móveis estofados"
    },
    {
      title: "Limpeza de Carpetes",
      description: "Lavagem e higienização profissional de carpetes e tapetes"
    },
    {
      title: "Enceramento de Pisos",
      description: "Tratamento especializado para conservação e brilho dos pisos"
    },
    {
      title: "Limpeza de Fachadas",
      description: "Limpeza externa de prédios, vidros e estruturas arquitetônicas"
    },
    {
      title: "Dedetização e Desratização",
      description: "Controle de pragas com produtos licenciados e seguros"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "border-blue-200 hover:border-blue-300",
      green: "border-green-200 hover:border-green-300",
      purple: "border-purple-200 hover:border-purple-300",
      orange: "border-orange-200 hover:border-orange-300"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Nossos <span className="text-green-300">Serviços</span>
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Soluções completas de limpeza profissional para todos os tipos de ambiente. 
            Qualidade, confiança e resultados garantidos.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={index} className={`${getColorClasses(service.color)} transition-all duration-300 hover:shadow-xl`}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={`https://placehold.co/600x300?text=${service.image}`}
                    alt={service.category}
                    className="w-full h-48 object-cover"
                  />
                </div>
                
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 mb-2">
                    {service.category}
                  </CardTitle>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.services.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <p className="text-lg font-semibold text-gray-900">
                      {service.price}
                    </p>
                    <p className="text-sm text-gray-600">
                      *Valores podem variar conforme complexidade
                    </p>
                  </div>
                  
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Link href="/contact">Solicitar Orçamento</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Serviços Complementares
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Além dos nossos serviços principais, oferecemos soluções especializadas 
              para necessidades específicas do seu ambiente.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Como Trabalhamos
            </h2>
            <p className="text-lg text-gray-600">
              Processo simples e transparente para garantir a melhor experiência
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Contato Inicial",
                description: "Entre em contato conosco por telefone, WhatsApp ou formulário online"
              },
              {
                step: "2", 
                title: "Visita Técnica",
                description: "Agendamos uma visita gratuita para avaliar suas necessidades"
              },
              {
                step: "3",
                title: "Orçamento",
                description: "Enviamos proposta detalhada com valores e cronograma"
              },
              {
                step: "4",
                title: "Execução",
                description: "Nossa equipe realiza o serviço com qualidade e pontualidade"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Pronto para começar?
          </h2>
          <p className="text-xl mb-8">
            Solicite um orçamento gratuito e sem compromisso
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8">
              <Link href="/contact">Solicitar Orçamento</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8">
              <a href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os serviços de limpeza." target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}