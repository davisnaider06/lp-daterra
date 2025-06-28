"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Leaf, Heart, Shield } from "lucide-react"

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up")
        }
      })
    }, observerOptions)

    const elements = [titleRef.current, descRef.current, buttonsRef.current, imageRef.current]
    elements.forEach((el, index) => {
      if (el) {
        el.style.animationDelay = `${index * 0.2}s`
        observer.observe(el)
      }
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section
      id="home"
      ref={heroRef}
      className="pt-20 pb-16 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800 min-h-screen flex items-center"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h1
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight opacity-0"
            >
              Produtos{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Naturais
              </span>
              <br />
              Para Sua{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Saúde
              </span>
            </h1>

            <p
              ref={descRef}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl opacity-0"
            >
              Descubra nossa seleção premium de suplementos e produtos naturais, cuidadosamente escolhidos para promover
              seu bem-estar e vitalidade.
            </p>

            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 opacity-0">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                onClick={() => scrollToSection("products")}
              >
                Ver Produtos
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105 bg-transparent"
                onClick={() => scrollToSection("about")}
              >
                Saiba Mais
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">100% Natural</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Produtos orgânicos</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Certificado</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Qualidade garantida</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                  <Heart className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Bem-estar</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Saúde em primeiro lugar</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div ref={imageRef} className="relative opacity-0">
            <div className="relative w-full h-96 lg:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse-slow"></div>
              <div className="absolute inset-4 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Produtos Naturais Daterra"
                  className="w-64 h-64 object-cover rounded-full"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-200 dark:bg-green-800 rounded-full animate-bounce-slow"></div>
              <div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-emerald-200 dark:bg-emerald-800 rounded-full animate-bounce-slow"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
