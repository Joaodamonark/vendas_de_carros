import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Eye, Fuel, Calendar, Gauge } from "lucide-react"

const cars = [
  {
    id: 1,
    name: "Toyota Corolla XEI",
    year: 2023,
    price: "R$ 89.900",
    mileage: "15.000 km",
    fuel: "Flex",
    image: "/toyota-corolla-silver-sedan.jpg",
    isNew: false,
  },
  {
    id: 2,
    name: "Honda Civic Touring",
    year: 2024,
    price: "R$ 145.900",
    mileage: "0 km",
    fuel: "Flex",
    image: "/black-honda-civic-sedan.png",
    isNew: true,
  },
  {
    id: 3,
    name: "Volkswagen T-Cross",
    year: 2023,
    price: "R$ 95.900",
    mileage: "22.000 km",
    fuel: "Flex",
    image: "/volkswagen-t-cross-white-suv.jpg",
    isNew: false,
  },
  {
    id: 4,
    name: "Chevrolet Onix Plus",
    year: 2024,
    price: "R$ 78.900",
    mileage: "0 km",
    fuel: "Flex",
    image: "/chevrolet-onix-plus-red-sedan.jpg",
    isNew: true,
  },
  {
    id: 5,
    name: "Ford EcoSport Titanium",
    year: 2022,
    price: "R$ 82.900",
    mileage: "35.000 km",
    fuel: "Flex",
    image: "/ford-ecosport-blue-suv.jpg",
    isNew: false,
  },
  {
    id: 6,
    name: "Hyundai HB20S",
    year: 2023,
    price: "R$ 72.900",
    mileage: "18.000 km",
    fuel: "Flex",
    image: "/hyundai-hb20s-gray-sedan.jpg",
    isNew: false,
  },
]

export function CarsGrid() {
  return (
    <section id="carros" className="py-20">
      <div className="container max-w-screen-xl px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Carros em Destaque</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Confira nossa seleção de veículos com as melhores ofertas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <Card key={car.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative">
                <img
                  src={car.image || "/placeholder.svg"}
                  alt={car.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  {car.isNew && <Badge className="bg-green-500 hover:bg-green-600">Novo</Badge>}
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button size="icon" variant="secondary" className="h-8 w-8 bg-white/90 hover:bg-white">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="h-8 w-8 bg-white/90 hover:bg-white">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <CardContent className="p-4 space-y-3">
                <div>
                  <h3 className="font-semibold text-lg">{car.name}</h3>
                  <p className="text-2xl font-bold text-primary">{car.price}</p>
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{car.year}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Gauge className="h-4 w-4" />
                    <span>{car.mileage}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Fuel className="h-4 w-4" />
                    <span>{car.fuel}</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-4 pt-0 gap-2">
                <Button variant="outline" className="flex-1 bg-transparent">
                  Ver Detalhes
                </Button>
                <Button className="flex-1">Entrar em Contato</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Ver Todos os Carros
          </Button>
        </div>
      </div>
    </section>
  )
}
