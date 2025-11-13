"use client"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Categories from "@/components/categories"
import FeaturedProducts from "@/components/featured-products"
import NewCollection from "@/components/new-collection"
import WhyChooseUs from "@/components/why-choose-us"
import HowToBuy from "@/components/how-to-buy"
import Testimonials from "@/components/testimonials"
import Promos from "@/components/promos"
import FAQ from "@/components/faq"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-background">
      <Header />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <NewCollection />
      <WhyChooseUs />
      <HowToBuy />
      <Testimonials />
      <Promos />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
