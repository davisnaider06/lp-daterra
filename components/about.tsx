"use client"

import { useEffect, useRef } from "react"
import { Leaf, Award, Truck, Users } from "lucide-react"

export function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll(".about-card")
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add("animate-fade-in-up")
            }, index * 200)
          })
        }
      })
    }, observerOptions)

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Sobre a Daterra</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Há mais de 10 anos, a Daterra se dedica a oferecer produtos naturais de alta qualidade, promovendo saúde e
            bem-estar através da natureza. Nossa missão é conectar você aos melhores recursos que a terra oferece.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="about-card opacity-0 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">100% Natural</h3>
            <p className="text-gray-600 dark:text-gray-300">Produtos livres de químicos e aditivos artificiais</p>
          </div>

          <div className="about-card opacity-0 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Certificado</h3>
            <p className="text-gray-600 dark:text-gray-300">Qualidade garantida com certificações internacionais</p>
          </div>

          <div className="about-card opacity-0 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Entrega Rápida</h3>
            <p className="text-gray-600 dark:text-gray-300">Entregamos em todo o Brasil com rapidez e segurança</p>
          </div>

          <div className="about-card opacity-0 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Suporte</h3>
            <p className="text-gray-600 dark:text-gray-300">Equipe especializada para orientar sua jornada</p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">10+</div>
            <div className="text-gray-600 dark:text-gray-300">Anos de Experiência</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">50k+</div>
            <div className="text-gray-600 dark:text-gray-300">Clientes Satisfeitos</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">200+</div>
            <div className="text-gray-600 dark:text-gray-300">Produtos Disponíveis</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">99%</div>
            <div className="text-gray-600 dark:text-gray-300">Satisfação</div>
          </div>
        </div>
      </div>
    </section>
  )
}
