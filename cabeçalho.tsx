import { Button } from "@/components/ui/button"
import { Car, Phone, MapPin, User } from "lucide-react"

export function Header() {
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
      <div className="container flex h-16 max-w-screen-xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Car className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-primary">AutoMax</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#carros" className="text-sm font-medium hover:text-primary transition-colors">
            Carros
          </a>
          <a href="#financiamento" className="text-sm font-medium hover:text-primary transition-colors">
            Financiamento
          </a>
          <a href="#sobre" className="text-sm font-medium hover:text-primary transition-colors">
            Sobre
          </a>
          <a href="#contato" className="text-sm font-medium hover:text-primary transition-colors">
            Contato
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              <span>(11) 9999-9999</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>São Paulo, SP</span>
            </div>
          </div>
          <Button variant="outline" size="sm" className="hidden sm:flex bg-transparent">
            <User className="h-4 w-4 mr-2" />
            Login
          </Button>
          <Button size="sm">Vender Carro</Button>
        </div>
      </div>
    </header>
  )
}
