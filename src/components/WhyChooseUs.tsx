export default function WhyChooseUs() {
  const features = [
    {
      title: "Equipe Profissional",
      description: "Funcionários treinados, uniformizados e com experiência comprovada em limpeza empresarial.",
      stats: "100+ profissionais qualificados",
      icon: "👥"
    },
    {
      title: "Produtos Ecológicos",
      description: "Utilizamos produtos biodegradáveis e seguros, respeitando o meio ambiente e a saúde.",
      stats: "100% produtos certificados",
      icon: "🌿"
    },
    {
      title: "Atendimento 24h",
      description: "Disponibilidade total para emergências e horários personalizados conforme sua necessidade.",
      stats: "24/7 disponível",
      icon: "🕒"
    },
    {
      title: "Seguro e Garantia",
      description: "Seguro responsabilidade civil e garantia total de satisfação em todos os serviços prestados.",
      stats: "Cobertura completa",
      icon: "🛡️"
    },
    {
      title: "Equipamentos Modernos",
      description: "Tecnologia de ponta em equipamentos de limpeza para máxima eficiência e qualidade.",
      stats: "Equipamentos profissionais",
      icon: "🔧"
    },
    {
      title: "Orçamento Gratuito",
      description: "Avaliação detalhada sem compromisso e orçamento personalizado para suas necessidades.",
      stats: "Sem custos iniciais",
      icon: "📋"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Por que escolher a <span className="text-green-600">Service Clean 360</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mais de 10 anos de experiência em limpeza profissional, com mais de 500 empresas atendidas 
            e certificação em todos os nossos processos.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-8 h-full transition-all duration-300 hover:shadow-lg hover:scale-105 border border-gray-100">
                {/* Icon */}
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-4">
                  {feature.description}
                </p>
                
                {/* Stats */}
                <p className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full inline-block">
                  {feature.stats}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="bg-gray-900 rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-white">
                Certificações e Garantias
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold text-green-400 mb-1">500+</div>
                  <div className="text-sm text-gray-300">Empresas Atendidas</div>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold text-blue-400 mb-1">10+</div>
                  <div className="text-sm text-gray-300">Anos de Experiência</div>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold text-green-400 mb-1">24h</div>
                  <div className="text-sm text-gray-300">Atendimento</div>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold text-blue-400 mb-1">100%</div>
                  <div className="text-sm text-gray-300">Satisfação</div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/faca3172-5160-47b9-a38c-d38542d0505a.png" 
                alt="Certificados de qualidade, licenças ambientais e seguros da Service Clean 360"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            O que nossos clientes dizem
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                company: "Empresa ABC Ltda",
                text: "Excelente serviço! A equipe é pontual, profissional e deixa nosso escritório impecável todos os dias."
              },
              {
                name: "João Santos", 
                company: "Academia Fitness Pro",
                text: "Limpeza especializada que nosso ginásio precisava. Equipamentos sempre higienizados e vestiários impecáveis."
              },
              {
                name: "Ana Costa",
                company: "Shopping Center XYZ", 
                text: "Parceria de confiança há 3 anos. Limpeza de qualidade que nossos lojistas e clientes merecem."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}