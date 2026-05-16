import { AspectRatio } from "@/components/ui/aspect-ratio"
import Icon from "@/components/ui/icon"

const steps = [
  {
    icon: "Search",
    title: "Выберите аромат",
    description: "Воспользуйтесь фильтрами по бренду, ноткам и поводу или получите рекомендацию от эксперта.",
  },
  {
    icon: "ShoppingCart",
    title: "Оформите заказ",
    description: "Добавьте в корзину и оформите за пару минут. Принимаем карты, СБП и наличные при получении.",
  },
  {
    icon: "PackageCheck",
    title: "Получите и наслаждайтесь",
    description: "Курьер доставит заказ прямо к вашей двери в фирменной упаковке с пробниками в подарок.",
  },
]

export function FeatureSection3() {
  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-12 md:gap-16 items-center">
        <div className="flex flex-col gap-8 flex-1">
          <div className="flex flex-col gap-4 md:gap-5">
            <p className="text-sm md:text-base font-semibold text-muted-foreground">Как сделать заказ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Три шага до вашего аромата</h2>
            <p className="text-base text-muted-foreground">Просто, быстро и приятно — от выбора до доставки:</p>
          </div>
          <div className="flex flex-col gap-6">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                <div className="flex justify-center items-center w-10 h-10 shrink-0 rounded-md bg-background border shadow-sm">
                  <Icon name={step.icon} size={20} className="text-primary" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 w-full">
          <div className="overflow-hidden rounded-xl border bg-background shadow-xl">
            <AspectRatio ratio={1 / 1}>
              <img
                src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&q=80"
                alt="Парфюмерный магазин Аромат"
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  )
}
