"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Hero() {
  const [phone, setPhone] = useState("");

  const handleQuickContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone) {
      window.open(`https://wa.me/5511999999999?text=Olá! Gostaria de solicitar um orçamento. Meu telefone: ${phone}`, '_blank');
    }
  };

  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Limpeza <span className="text-green-400">360°</span> para sua{" "}
              <span className="text-blue-300">Empresa</span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-6 leading-relaxed">
              Serviços profissionais de limpeza para empresas, ginásios, lojas e fábricas
            </p>
            <p className="text-lg text-blue-200 mb-8 max-w-2xl">
              Equipe especializada, produtos ecológicos e atendimento 24 horas. 
              Transformamos seu ambiente com limpeza de qualidade superior.
            </p>

            {/* Quick Contact Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 max-w-md mx-auto lg:mx-0">
              <h3 className="text-lg font-semibold mb-4 text-center">Orçamento Rápido</h3>
              <form onSubmit={handleQuickContact} className="space-y-4">
                <Input
                  type="tel"
                  placeholder="Seu telefone/WhatsApp"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-white text-gray-900 placeholder-gray-500"
                  required
                />
                <Button 
                  type="submit" 
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold"
                >
                  Solicitar Orçamento Gratuito
                </Button>
              </form>
              <p className="text-xs text-blue-200 text-center mt-2">
                Resposta em até 30 minutos!
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3">
                <Link href="/services">Ver Nossos Serviços</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-3">
                <a href="tel:+5511999999999">(11) 99999-9999</a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-blue-200">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>+500 Empresas Atendidas</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Atendimento 24h</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Produtos Ecológicos</span>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/20f3dfa9-4427-4cc5-b3a8-ca14e0873a32.png" 
                alt="Equipe profissional da Service Clean 360 realizando limpeza em escritório moderno com equipamentos especializados"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg transform rotate-6">
              <p className="font-bold text-sm">100% Garantido</p>
              <p className="text-xs">Satisfação Total</p>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white p-4 rounded-lg shadow-lg transform -rotate-6">
              <p className="font-bold text-sm">24 Horas</p>
              <p className="text-xs">Atendimento</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,64L1440,32L1440,120L0,120Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}