import { Card, CardContent } from "@/components/ui/card"
import { Shield, Clock, CreditCard, Users } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Carros Verificados",
    description: "Todos os veículos passam por inspeção rigorosa de qualidade e procedência",
  },
  {
    icon: Clock,
    title: "Processo Rápido",
    description: "Compare e reserve seu carro em minutos, sem burocracia desnecessária",
  },
  {
    icon: CreditCard,
    title: "Financiamento Fácil",
    description: "Ofertas competitivas de financiamento com as melhores taxas do mercado",
  },
  {
    icon: Users,
    title: "Atendimento Premium",
    description: "Equipe especializada para te ajudar em todo o processo de compra",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container max-w-screen-xl px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Por que escolher a AutoMax?</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Oferecemos a melhor experiência em compra de carros com qualidade garantida
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4 p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground text-pretty">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
