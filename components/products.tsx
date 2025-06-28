"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react"

const products = [
  { id: 1, name: "Vitamina C Natural", price: "R$ 45,90", image: "/placeholder.svg?height=200&width=200" },
  { id: 2, name: "Ômega 3 Premium", price: "R$ 89,90", image: "/placeholder.svg?height=200&width=200" },
  { id: 3, name: "Colágeno Hidrolisado", price: "R$ 67,90", image: "/placeholder.svg?height=200&width=200" },
  { id: 4, name: "Magnésio Dimalato", price: "R$ 52,90", image: "/placeholder.svg?height=200&width=200" },
  { id: 5, name: "Probióticos Multi", price: "R$ 78,90", image: "/placeholder.svg?height=200&width=200" },
  { id: 6, name: "Cúrcuma + Piperina", price: "R$ 39,90", image: "/placeholder.svg?height=200&width=200" },
  { id: 7, name: "Spirulina Orgânica", price: "R$ 56,90", image: "/placeholder.svg?height=200&width=200" },
  { id: 8, name: "Ashwagandha", price: "R$ 64,90", image: "/placeholder.svg?height=200&width=200" },
  { id: 9, name: "Zinco Quelato", price: "R$ 34,90", image: "/placeholder.svg?height=200&width=200" },
  { id: 10, name: "Melatonina Natural", price: "R$ 42,90", image: "/placeholder.svg?height=200&width=200" },
  { id: 11, name: "Coenzima Q10", price: "R$ 95,90", image: "/placeholder.svg?height=200&width=200" },
  { id: 12, name: "Rhodiola Rosea", price: "R$ 71,90", image: "/placeholder.svg?height=200&width=200" },
  { id: 13, name: "Ginkgo Biloba", price: "R$ 48,90", image: "/placeholder.svg?height=200&width=200" },
  { id: 14, name: "Maca Peruana", price: "R$ 58,90", image: "/placeholder.svg?height=200&width=200" },
  { id: 15, name: "Extrato Chá Verde", price: "R$ 36,90", image: "/placeholder.svg?height=200&width=200" },
]

export function Products() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(3)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1)
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2)
      } else {
        setCardsPerView(3)
      }
    }

    updateCardsPerView()
    window.addEventListener("resize", updateCardsPerView)
    return () => window.removeEventListener("resize", updateCardsPerView)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = products.length - cardsPerView
        return prevIndex >= maxIndex ? 0 : prevIndex + 1
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [cardsPerView])

  const nextSlide = () => {
    const maxIndex = products.length - cardsPerView
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    const maxIndex = products.length - cardsPerView
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1))
  }

  return (
    <section
      id="products"
      className="py-20 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Nossos Produtos</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Descubra nossa linha completa de produtos naturais cuidadosamente selecionados
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-xl">
            <div
              ref={carouselRef}
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
                width: `${(products.length / cardsPerView) * 100}%`,
              }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                  style={{ width: `${100 / products.length}%` }}
                >
                  <div className="relative mb-4">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900 rounded-full flex items-center justify-center overflow-hidden">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-20 h-20 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 text-center">
                    {product.name}
                  </h3>
                  <p className="text-2xl font-bold text-green-600 text-center mb-4">{product.price}</p>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white transition-all duration-300 hover:scale-105">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Comprar
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 border-green-200 dark:border-green-700 hover:bg-green-50 dark:hover:bg-green-900 z-10"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6 text-green-600" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 border-green-200 dark:border-green-700 hover:bg-green-50 dark:hover:bg-green-900 z-10"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6 text-green-600" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: products.length - cardsPerView + 1 }).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-green-600 scale-125" : "bg-gray-300 dark:bg-gray-600 hover:bg-green-400"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
