"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dog, Cat, Fish, Bird, ShoppingCart, MapPin, Phone, Mail, ChevronRight } from "lucide-react"
import { ComingSoonDialog } from "@/components/coming-soon-dialog"

export default function Home() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [featureText, setFeatureText] = useState("This feature")

  const handleFeatureClick = (feature: string) => {
    setFeatureText(feature)
    setDialogOpen(true)
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Dog className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Pet Haven</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Inicio
            </Link>
            <Link href="#products" className="text-sm font-medium hover:text-primary">
              Productos
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-primary">
              Servicios
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              Acerca de
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contacto
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => handleFeatureClick("Shopping cart")}>
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button onClick={() => handleFeatureClick("Shop Now")}>Comprar ahora</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="container flex flex-col items-center justify-center py-20 md:py-32 text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Todo lo que tu mascota <span className="text-primary">necesita</span> y{" "}
              <span className="text-primary">ama</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mb-8">
              Descubra artículos para mascotas de primera calidad, comida nutritiva, juguetes divertidos y servicios profesionales de peluquería, todo en un mismo lugar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => handleFeatureClick("Shop Products")}>
                Comprar productos
              </Button>
              <Button size="lg" variant="outline" onClick={() => handleFeatureClick("Booking Services")}>
                Reservar servicios
              </Button>
            </div>
          </div>
          <div className="absolute inset-0 -z-10 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-10" />
        </section>

        {/* Pet Categories */}
        <section className="bg-muted py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Compra por tipo de mascota</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <CategoryCard
                icon={<Dog className="h-10 w-10" />}
                title="Perros"
              />
              <CategoryCard
                icon={<Cat className="h-10 w-10" />}
                title="Gatos"
              />
              <CategoryCard
                icon={<Fish className="h-10 w-10" />}
                title="Peces"
              />
              <CategoryCard
                icon={<Bird className="h-10 w-10" />}
                title="Pájaros"
              />
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section id="products" className="py-16">
          <div className="container">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Productos Destacados</h2>
              <Button variant="ghost" className="gap-1" onClick={() => handleFeatureClick("View all products")}>
                Ver todos <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <ProductCard
                image="/dog-food.webp"
                title="Alimento Premium para Perros"
                price={29.99}
                rating={4.8}
                onAddToCart={() => handleFeatureClick("Add to cart")}
              />
              <ProductCard
                image="/cat.webp"
                title="Rascador para gatos"
                price={49.99}
                rating={4.6}
                onAddToCart={() => handleFeatureClick("Add to cart")}
              />
              <ProductCard
                image="/bird.webp"
                title="Jaula de pájaros Deluxe"
                price={89.99}
                rating={4.9}
                onAddToCart={() => handleFeatureClick("Add to cart")}
              />
              <ProductCard
                image="/fish tank.webp"
                title="Kit de iniciación para peceras"
                price={69.99}
                rating={4.7}
                onAddToCart={() => handleFeatureClick("Add to cart")}
              />
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-muted py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard
                title="Peluquería"
                description="Servicios de peluquería profesional para que su mascota luzca y se sienta lo mejor posible."
                image="/peluqueria.webp"
                onLearnMore={() => handleFeatureClick("Grooming services")}
              />
              <ServiceCard
                title="Atención Veterinaria"
                description="Revisiones periódicas y atención médica para garantizar la salud y el bienestar de su mascota."
                image="salud.webp"
                onLearnMore={() => handleFeatureClick("Veterinary services")}
              />
              <ServiceCard
                title="Clases de Entrenamiento"
                description="Sesiones de adiestramiento dirigidas por expertos para ayudar a su mascota a desarrollar un buen comportamiento y habilidades."
                image="/fun.webp"
                onLearnMore={() => handleFeatureClick("Training classes")}
              />
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Lo Que Dicen Nuestros Clientes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TestimonialCard
                quote="¡El servicio de peluquería fue excelente! Mi perro luce increíble y el personal fue muy amable."
                author="Sarah Johnson"
                pet="Dueña de perro"
              />
              <TestimonialCard
                quote="He estado comprando todos los suministros para mi gato aquí durante años. Gran variedad y precios razonables."
                author="Michael Chen"
                pet="Dueño de gato"
              />
              <TestimonialCard
                quote="El personal me ayudó a configurar mi primer acuario y me brindó consejos expertos. ¡Mis peces están prosperando!"
                author="Emma Rodriguez"
                pet="Amante de los peces"
              />
            </div>
          </div>
        </section>


        {/* Acerca de */}
        <section id="about" className="bg-muted py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Sobre Pet Haven</h2>
                <p className="text-muted-foreground mb-4">
                  Fundada en 2010, Pet Haven se ha dedicado a ofrecer productos y servicios de la más alta calidad
                  para mascotas de todo tipo.
                </p>
                <p className="text-muted-foreground mb-4">
                  Nuestro equipo de amantes de los animales y expertos está comprometido en ayudarte a brindar el
                  mejor cuidado posible a tus amigos peludos, emplumados o con escamas.
                </p>
                <p className="text-muted-foreground mb-6">
                  Creemos que las mascotas son parte de la familia y merecen lo mejor en nutrición, comodidad,
                  salud y amor.
                </p>
                <Button onClick={() => handleFeatureClick("Sobre Nosotros")}>Conoce Más Sobre Nosotros</Button>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <img
                  src="/store.webp"
                  alt="Interior de la tienda Pet Haven"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>


        {/* Boletín de Noticias */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Únete a Nuestro Boletín</h2>
              <p className="mb-6">Suscríbete para recibir actualizaciones sobre nuevos productos, ofertas especiales y consejos para el cuidado de mascotas.</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Ingresa tu correo electrónico"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button variant="secondary" onClick={() => handleFeatureClick("Suscripción al boletín")}>
                  Suscribirse
                </Button>
              </div>
            </div>
          </div>
        </section>


        {/* Contacto */}
        <section id="contact" className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Visítanos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Información de Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Ave Francisco Gavidia, San Salvador</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>info@pethaven.com</span>
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="font-medium mb-2">Horario de Atención:</h4>
                  <p>Lunes - Viernes: 9am - 7pm</p>
                  <p>Sábado: 10am - 6pm</p>
                  <p>Domingo: 11am - 5pm</p>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden h-[300px]">
                <div className="w-full h-full">
                  <iframe
                    title="Google Maps location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d407.4473394989591!2d-89.22075398308014!3d13.69941044768832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6330439d7bb9c9%3A0x15c92c75a219c371!2sEdificio%20de%20Bibliotecas%20y%20Laboratorios%20Especializados!5e0!3m2!1ses-419!2ssv!4v1741558021793!5m2!1ses-419!2ssv"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-muted py-12 border-t">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Dog className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">Pet Haven</span>
              </div>
              <p className="text-sm text-muted-foreground">Su ventanilla única para todas las necesidades de su mascota.</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Secciones</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="#products" className="text-sm text-muted-foreground hover:text-primary">
                    Productos
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-sm text-muted-foreground hover:text-primary">
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-sm text-muted-foreground hover:text-primary">
                    Acerca de
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Categorías</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => handleFeatureClick("Dog category")}
                    className="text-sm text-muted-foreground hover:text-primary text-left"
                  >
                    Perros
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleFeatureClick("Cat category")}
                    className="text-sm text-muted-foreground hover:text-primary text-left"
                  >
                    Gatos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleFeatureClick("Fish category")}
                    className="text-sm text-muted-foreground hover:text-primary text-left"
                  >
                    Peces
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleFeatureClick("Bird category")}
                    className="text-sm text-muted-foreground hover:text-primary text-left"
                  >
                    Pájaros
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleFeatureClick("Small pets category")}
                    className="text-sm text-muted-foreground hover:text-primary text-left"
                  >
                    Mascotas pequeñas
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Siguenos</h3>
              <div className="flex gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 Pet Haven. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Coming Soon Dialog */}
      <ComingSoonDialog open={dialogOpen} onOpenChange={setDialogOpen} feature={featureText} />
    </div>
  )
}

function CategoryCard({
  icon,
  title,
  onClick,
}: {
  icon: React.ReactNode
  title: string
  onClick?: () => void
}) {
  return (
    <div
      className="bg-background rounded-lg p-6 text-center hover:shadow-md transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-center mb-4 text-primary">{icon}</div>
      <h3 className="font-medium">{title}</h3>
    </div>
  )
}

function ProductCard({
  image,
  title,
  price,
  rating,
  onAddToCart,
}: {
  image: string
  title: string
  price: number
  rating: number
  onAddToCart?: () => void
}) {
  return (
    <div className="bg-background rounded-lg overflow-hidden border hover:shadow-md transition-shadow">
      <div className="aspect-square relative">
        <img src={image || "/images/product-placeholder.jpg"} alt={title} className="object-cover w-full h-full" />
      </div>
      <div className="p-4">
        <h3 className="font-medium mb-1">{title}</h3>
        <div className="flex items-center justify-between">
          <span className="font-bold text-primary">${price.toFixed(2)}</span>
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-yellow-500"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span className="text-sm text-muted-foreground">{rating}</span>
          </div>
        </div>
        <Button className="w-full mt-3" onClick={onAddToCart}>
          Añadir al carrito
        </Button>
      </div>
    </div>
  )
}

function ServiceCard({
  title,
  description,
  image,
  onLearnMore,
}: {
  title: string
  description: string
  image: string
  onLearnMore?: () => void
}) {
  return (
    <div className="bg-background rounded-lg overflow-hidden border hover:shadow-md transition-shadow">
      <div className="h-40 relative">
        <img src={image || "/images/product-placeholder.jpg"} alt={title} className="object-cover w-full h-full" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Button variant="outline" onClick={onLearnMore}>
          Saber más
        </Button>
      </div>
    </div>
  )
}

function TestimonialCard({ quote, author, pet }: { quote: string; author: string; pet: string }) {
  return (
    <div className="bg-background rounded-lg p-6 border">
      <div className="mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="inline-block text-yellow-500"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>
      <p className="italic mb-4">"{quote}"</p>
      <div>
        <p className="font-medium">{author}</p>
        <p className="text-sm text-muted-foreground">{pet}</p>
      </div>
    </div>
  )
}

