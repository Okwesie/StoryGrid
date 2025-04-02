"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import WelcomeScreen from "./screens/welcome-screen"
import ShareScreen from "./screens/share-screen"
import ExploreScreen from "./screens/explore-screen"
import ConnectScreen from "./screens/connect-screen"

const SLIDE_DURATION = 8000 // 8 seconds per slide

export default function OnboardingCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 4

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }, [totalSlides])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }, [totalSlides])

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, SLIDE_DURATION)

    return () => clearInterval(interval)
  }, [nextSlide])

  const screens = [
    <WelcomeScreen key="welcome" />,
    <ShareScreen key="share" />,
    <ExploreScreen key="explore" />,
    <ConnectScreen key="connect" />,
  ]

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {screens.map((screen, index) => (
          <div key={index} className="min-w-full h-full flex-shrink-0">
            {screen}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-transparent text-white p-2 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-transparent text-white p-2 z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "h-2 w-2 rounded-full transition-colors",
              currentSlide === index ? "bg-[#d4a5a5]" : "bg-white",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

