import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-background via-secondary/20 to-accent/10 py-20 lg:py-32">
      <div className="container max-w-screen-xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                Encontre o carro
                <span className="text-primary"> perfeito</span> para você
              </h1>
              <p className="text-lg text-muted-foreground text-pretty max-w-md">
                Compare preços e encontre as melhores ofertas de carros seminovos e novos em São Paulo
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-lg border">
              <div className="grid gap-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Localização</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="São Paulo, SP" className="pl-10" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Marca</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Todas as marcas" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="toyota">Toyota</SelectItem>
                        <SelectItem value="honda">Honda</SelectItem>
                        <SelectItem value="volkswagen">Volkswagen</SelectItem>
                        <SelectItem value="chevrolet">Chevrolet</SelectItem>
                        <SelectItem value="ford">Ford</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Ano</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Qualquer ano" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                        <SelectItem value="2021">2021</SelectItem>
                        <SelectItem value="2020">2020</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button size="lg" className="w-full">
                  <Search className="h-4 w-4 mr-2" />
                  Buscar Carros
                </Button>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-accent/20 to-primary/20">
              <img
                src="/modern-car-showroom-with-luxury-cars.jpg"
                alt="Showroom de carros modernos"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
