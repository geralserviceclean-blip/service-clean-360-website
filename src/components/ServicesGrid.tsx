import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ServicesGrid() {
  const services = [
    {
      title: "Limpeza Empresarial",
      description: "Escritórios, corporações e espaços comerciais com padrão executivo de qualidade.",
      features: ["Limpeza diária/semanal", "Carpetes e estofados", "Higienização completa", "Produtos ecológicos"],
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bc55cef6-3dd3-4294-9531-30e588c607d3.png",
      color: "blue"
    },
    {
      title: "Limpeza de Ginásios",
      description: "Academias, centros esportivos e espaços fitness com higienização especializada.",
      features: ["Equipamentos de musculação", "Vestiários e chuveiros", "Pisos emborrachados", "Desinfecção total"],
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8f03aebe-be0c-4466-9504-09b605e10005.png",
      color: "green"
    },
    {
      title: "Limpeza de Lojas",
      description: "Varejo, shopping centers e estabelecimentos comerciais com foco no cliente.",
      features: ["Vitrines e fachadas", "Áreas de atendimento", "Provadores", "Limpeza noturna"],
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b32b6499-3d7b-4da1-9973-569e0cfe391d.png",
      color: "purple"
    },
    {
      title: "Limpeza Industrial",
      description: "Fábricas, galpões e indústrias com limpeza pesada e descontaminação.",
      features: ["Limpeza pesada", "Descontaminação", "Galpões industriais", "Normas de segurança"],
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cfaf15db-d584-4b2a-a306-62a431013efd.png",
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        card: "border-blue-200 hover:border-blue-300",
        title: "text-blue-600",
        button: "bg-blue-600 hover:bg-blue-700"
      },
      green: {
        card: "border-green-200 hover:border-green-300", 
        title: "text-green-600",
        button: "bg-green-600 hover:bg-green-700"
      },
      purple: {
        card: "border-purple-200 hover:border-purple-300",
        title: "text-purple-600", 
        button: "bg-purple-600 hover:bg-purple-700"
      },
      orange: {
        card: "border-orange-200 hover:border-orange-300",
        title: "text-orange-600",
        button: "bg-orange-600 hover:bg-orange-700"
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nossos <span className="text-blue-600">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Soluções completas de limpeza profissional para todos os tipos de ambiente. 
            Cada serviço é personalizado para atender às necessidades específicas do seu negócio.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            return (
              <Card key={index} className={`${colors.card} transition-all duration-300 hover:shadow-xl group`}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                <CardHeader>
                  <CardTitle className={`text-2xl ${colors.title} mb-2`}>
                    {service.title}
                  </CardTitle>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button asChild className={`w-full ${colors.button} text-white font-semibold`}>
                    <Link href="/services">Saiba Mais</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-6">
            Não encontrou o serviço que procura? Temos soluções personalizadas para cada necessidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8">
              <Link href="/contact">Consultar Necessidades Específicas</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold px-8">
              <a href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os serviços de limpeza." target="_blank" rel="noopener noreferrer">
                WhatsApp Direto
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}