import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const products = [
  {
    id: 1,
    name: "Baccarat Rouge 540",
    brand: "Maison Francis Kurkdjian",
    price: 28900,
    volume: "70 мл",
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&q=80",
    badge: "Хит",
    notes: "Амбра · Кедр · Жасмин",
  },
  {
    id: 2,
    name: "Black Opium",
    brand: "Yves Saint Laurent",
    price: 9500,
    volume: "90 мл",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683702?w=400&q=80",
    badge: "Новинка",
    notes: "Ваниль · Кофе · Белый чай",
  },
  {
    id: 3,
    name: "Sauvage",
    brand: "Dior",
    price: 12300,
    volume: "100 мл",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&q=80",
    badge: null,
    notes: "Бергамот · Амброксан · Перец",
  },
  {
    id: 4,
    name: "Good Girl",
    brand: "Carolina Herrera",
    price: 10800,
    volume: "80 мл",
    image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&q=80",
    badge: "Популярное",
    notes: "Жасмин · Туберроза · Какао",
  },
  {
    id: 5,
    name: "Oud Wood",
    brand: "Tom Ford",
    price: 31500,
    volume: "50 мл",
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&q=80",
    badge: null,
    notes: "Уд · Сандал · Розовый перец",
  },
  {
    id: 6,
    name: "La Vie Est Belle",
    brand: "Lancôme",
    price: 8900,
    volume: "75 мл",
    image: "https://images.unsplash.com/photo-1605487903301-a1ae4dbc5638?w=400&q=80",
    badge: "Скидка",
    notes: "Ирис · Пачули · Ваниль",
  },
]

const badgeColors: Record<string, string> = {
  "Хит": "bg-amber-500/20 text-amber-400 border-amber-500/30",
  "Новинка": "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  "Популярное": "bg-blue-500/20 text-blue-400 border-blue-500/30",
  "Скидка": "bg-red-500/20 text-red-400 border-red-500/30",
}

export function ProductCatalog() {
  return (
    <section className="bg-background py-16 md:py-24" id="catalog">
      <div className="container mx-auto px-6 flex flex-col gap-12">
        <div className="flex flex-col gap-4 md:gap-5 max-w-xl mx-auto text-center">
          <p className="text-sm md:text-base font-semibold text-muted-foreground">Каталог</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Популярные ароматы</h2>
          <p className="text-base text-muted-foreground">
            Оригинальная парфюмерия с гарантией подлинности и быстрой доставкой
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col rounded-xl border border-border bg-card overflow-hidden transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {product.badge && (
                  <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full border ${badgeColors[product.badge]}`}>
                    {product.badge}
                  </span>
                )}
                <button className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm text-white/70 hover:text-primary transition-colors">
                  <Icon name="Heart" size={15} />
                </button>
              </div>

              <div className="flex flex-col gap-4 p-5 flex-1">
                <div className="flex flex-col gap-1 flex-1">
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{product.brand}</p>
                  <h3 className="text-base font-bold text-foreground">{product.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{product.notes}</p>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-primary">
                      {product.price.toLocaleString("ru-RU")} ₽
                    </span>
                    <span className="text-xs text-muted-foreground">{product.volume}</span>
                  </div>
                  <Button size="sm" className="gap-1.5 shrink-0">
                    <Icon name="ShoppingCart" size={14} />
                    В корзину
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button variant="outline" size="lg" className="gap-2 border-primary/30 text-primary hover:bg-primary/10 hover:text-primary">
            Смотреть весь каталог
            <Icon name="ArrowRight" size={16} />
          </Button>
        </div>
      </div>
    </section>
  )
}
