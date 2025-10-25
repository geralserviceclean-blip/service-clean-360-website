"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Pronto para transformar seu ambiente?
          </h2>
          
          {/* Subheading */}
          <p className="text-xl lg:text-2xl mb-8 text-green-100 max-w-3xl mx-auto leading-relaxed">
            Solicite um orçamento gratuito e descubra como a Service Clean 360 
            pode elevar o padrão de limpeza da sua empresa.
          </p>

          {/* Benefits List */}
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8 mb-10 text-lg">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-300 rounded-full"></div>
              <span>Orçamento gratuito em 30 minutos</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-300 rounded-full"></div>
              <span>Sem compromisso inicial</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-300 rounded-full"></div>
              <span>Visita técnica gratuita</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100 font-bold text-lg px-10 py-4 min-w-[200px]">
              <Link href="/contact">Solicitar Orçamento</Link>
            </Button>
            
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 font-bold text-lg px-10 py-4 min-w-[200px]">
              <a href="https://wa.me/5511999999999?text=Olá! Gostaria de solicitar um orçamento para serviços de limpeza." target="_blank" rel="noopener noreferrer">
                WhatsApp Agora
              </a>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="border-t border-white/20 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="font-semibold text-lg mb-2">Ligue Agora</h3>
                <a href="tel:+5511999999999" className="text-2xl font-bold hover:text-green-300 transition-colors">
                  (11) 99999-9999
                </a>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <a href="mailto:contato@serviceclean360.com.br" className="text-xl hover:text-green-300 transition-colors">
                  contato@serviceclean360.com.br
                </a>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">Atendimento</h3>
                <p className="text-xl font-semibold">24 horas por dia</p>
                <p className="text-green-200">Incluindo finais de semana</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-green-400/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-5 w-12 h-12 bg-blue-400/15 rounded-full animate-pulse delay-500"></div>
    </section>
  );
}