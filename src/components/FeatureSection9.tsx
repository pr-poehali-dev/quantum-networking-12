import Icon from "@/components/ui/icon"

const features = [
  {
    icon: "Sparkles",
    title: "Оригинальная парфюмерия",
    description: "Только сертифицированные оригиналы от официальных дистрибьюторов. Гарантия подлинности на каждый флакон.",
  },
  {
    icon: "Truck",
    title: "Быстрая доставка",
    description: "Доставка по всей России от 1 дня. Надёжная упаковка, чтобы аромат дошёл в идеальном состоянии.",
  },
  {
    icon: "Gift",
    title: "Пробники в подарок",
    description: "К каждому заказу прилагаются пробники новых ароматов — открывайте что-то новое с каждой покупкой.",
  },
  {
    icon: "MessageCircle",
    title: "Помощь в выборе",
    description: "Наши эксперты помогут подобрать аромат под ваш характер, повод или пожелания близких.",
  },
]

export function FeatureSection9() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-6 flex flex-col gap-12 md:gap-16">
        <div className="flex flex-col gap-4 md:gap-5 max-w-xl mx-auto text-center">
          <p className="text-sm md:text-base font-semibold text-muted-foreground">Наши преимущества</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Почему выбирают Аромат?</h2>
          <p className="text-base text-muted-foreground">
            Мы делаем покупку парфюмерии простой, надёжной и приятной:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col gap-5 items-center text-center">
              <div className="flex justify-center items-center w-10 h-10 shrink-0 rounded-md bg-background border shadow-sm">
                <Icon name={feature.icon} size={20} className="text-primary" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
