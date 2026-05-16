import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export function HeroSection7() {
  return (
    <section className="bg-muted pattern-1 py-16 lg:py-24" aria-labelledby="hero-heading">
      <div className="container px-6 flex flex-col items-center gap-12 lg:gap-16 mx-auto">
        <div className="flex gap-12 lg:gap-16">
          <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8">
            <h1 id="hero-heading" className="text-foreground text-3xl lg:text-5xl font-bold flex-1">
              Мир ароматов у вас дома с <span className="text-primary">Аромат</span>
            </h1>
            <div className="flex-1 w-full flex flex-col gap-8">
              <p className="text-muted-foreground text-base lg:text-lg">
                Откройте для себя тысячи парфюмов от мировых брендов и нишевых домов. Быстрая доставка, гарантия оригинала и помощь в выборе аромата — всё в одном месте.
              </p>

              <div className="flex flex-col lg:flex-row gap-3">
                <Button>Выбрать аромат</Button>
                <Button variant="ghost">
                  Смотреть каталог
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full overflow-hidden rounded-xl border bg-background shadow-xl">
          <AspectRatio ratio={16 / 9}>
            <img
              src="https://images.unsplash.com/photo-1541643600914-78b084683702?w=1280&q=80"
              alt="Коллекция парфюмов Аромат"
              className="object-cover w-full h-full"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  )
}