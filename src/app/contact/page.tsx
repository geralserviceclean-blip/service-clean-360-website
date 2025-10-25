"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    area: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Olá! Gostaria de solicitar um orçamento:
    
Nome: ${formData.name}
Empresa: ${formData.company}
Email: ${formData.email}
Telefone: ${formData.phone}
Serviço: ${formData.service}
Área aproximada: ${formData.area}m²
Mensagem: ${formData.message}`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5511999999999?text=${encodedMessage}`, '_blank');
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Entre em <span className="text-green-300">Contato</span>
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Solicite um orçamento gratuito ou tire suas dúvidas. 
            Estamos prontos para atender você 24 horas por dia.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">
                    Solicitar Orçamento Gratuito
                  </CardTitle>
                  <p className="text-gray-600">
                    Preencha o formulário abaixo e receba uma proposta personalizada em até 30 minutos.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nome Completo *
                        </label>
                        <Input
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          placeholder="Seu nome completo"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nome da Empresa
                        </label>
                        <Input
                          type="text"
                          value={formData.company}
                          onChange={(e) => handleChange('company', e.target.value)}
                          placeholder="Nome da sua empresa"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          placeholder="seu@email.com"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Telefone/WhatsApp *
                        </label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          placeholder="(11) 99999-9999"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Tipo de Serviço *
                        </label>
                        <Select value={formData.service} onValueChange={(value) => handleChange('service', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o serviço" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="empresarial">Limpeza Empresarial</SelectItem>
                            <SelectItem value="ginasio">Limpeza de Ginásios</SelectItem>
                            <SelectItem value="loja">Limpeza de Lojas</SelectItem>
                            <SelectItem value="industrial">Limpeza Industrial</SelectItem>
                            <SelectItem value="pos-obra">Limpeza Pós-Obra</SelectItem>
                            <SelectItem value="outros">Outros Serviços</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Área Aproximada (m²)
                        </label>
                        <Input
                          type="text"
                          value={formData.area}
                          onChange={(e) => handleChange('area', e.target.value)}
                          placeholder="Ex: 500m²"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mensagem Adicional
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        placeholder="Descreva detalhes específicos do seu projeto..."
                        rows={4}
                      />
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-blue-800 mb-2">
                        <strong>✅ Garantimos:</strong>
                      </p>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• Resposta em até 30 minutos</li>
                        <li>• Visita técnica gratuita</li>
                        <li>• Orçamento sem compromisso</li>
                        <li>• Atendimento profissional</li>
                      </ul>
                    </div>

                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold text-lg py-3">
                      Solicitar Orçamento Gratuito
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-xl text-green-600">
                    Contato Direto
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      📞
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Telefone</p>
                      <a href="tel:+5511999999999" className="text-blue-600 hover:text-blue-700">
                        (11) 99999-9999
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      💬
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">WhatsApp</p>
                      <a 
                        href="https://wa.me/5511999999999?text=Olá! Gostaria de solicitar um orçamento." 
                        className="text-green-600 hover:text-green-700"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        (11) 99999-9999
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      📧
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a href="mailto:contato@serviceclean360.com.br" className="text-blue-600 hover:text-blue-700">
                        contato@serviceclean360.com.br
                      </a>
                    </div>
                  </div>

                  <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
                    <a 
                      href="https://wa.me/5511999999999?text=Olá! Gostaria de falar sobre serviços de limpeza." 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      WhatsApp Direto
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">
                    Horário de Atendimento
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Segunda a Sexta</span>
                    <span className="font-medium">07:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sábados</span>
                    <span className="font-medium">08:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Domingos</span>
                    <span className="font-medium">08:00 - 16:00</span>
                  </div>
                  <div className="border-t pt-3 mt-3">
                    <div className="flex items-center justify-between">
                      <span className="text-green-600 font-medium">Emergências 24h</span>
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      Atendimento de emergência disponível 24 horas
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Service Areas */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">
                    Áreas de Atendimento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-medium text-gray-900">Grande São Paulo:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• São Paulo (Capital)</li>
                      <li>• ABC Paulista</li>
                      <li>• Zona Norte</li>
                      <li>• Zona Sul</li>
                      <li>• Zona Leste</li>
                      <li>• Zona Oeste</li>
                      <li>• Osasco e região</li>
                      <li>• Guarulhos e região</li>
                    </ul>
                    <p className="text-xs text-gray-500 mt-3">
                      Consulte disponibilidade para outras regiões
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-gray-600">
              Respostas para as dúvidas mais comuns sobre nossos serviços
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Vocês atendem finais de semana?",
                answer: "Sim! Trabalhamos todos os dias da semana, incluindo finais de semana e feriados. Para emergências, temos atendimento 24 horas."
              },
              {
                question: "O orçamento é realmente gratuito?",
                answer: "Sim, o orçamento é 100% gratuito e sem compromisso. Fazemos uma visita técnica para avaliar suas necessidades e apresentar a melhor proposta."
              },
              {
                question: "Vocês têm seguro?",
                answer: "Sim, possuímos seguro de responsabilidade civil e todas as licenças necessárias para operar com segurança e tranquilidade."
              },
              {
                question: "Que produtos utilizam?",
                answer: "Utilizamos apenas produtos profissionais, biodegradáveis e certificados. Priorizamos a sustentabilidade e a segurança de funcionários e clientes."
              },
              {
                question: "Como é feito o pagamento?",
                answer: "Aceitamos diversas formas de pagamento: dinheiro, cartão, PIX, transferência bancária e boleto. Condições especiais para contratos mensais."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}