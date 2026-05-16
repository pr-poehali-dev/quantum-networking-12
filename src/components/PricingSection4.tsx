import * as React from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip"

const pricingData = {
  plans: [
    {
      name: "Базовый",
      description: "Для тех, кто только знакомится с миром ароматов.",
      features: [
        {
          name: "Доступ к каталогу",
          tooltip: "Полный каталог с тысячами ароматов",
        },
        {
          name: "Бесплатная доставка от 3 000 ₽",
          tooltip: "Доставка курьером при заказе от 3 000 рублей",
        },
        {
          name: "1 пробник в подарок",
          tooltip: "Один пробник на выбор к каждому заказу",
        },
      ],
      pricing: {
        monthly: 0,
        annually: 0,
      },
      variant: "secondary",
    },
    {
      name: "Клуб",
      description: "Для ценителей с привилегиями постоянного покупателя.",
      badge: "Популярный",
      features: [
        {
          name: "Бесплатная доставка на все заказы",
          tooltip: "Курьерская доставка без минимальной суммы заказа",
        },
        {
          name: "Скидка 10% на все покупки",
          tooltip: "Постоянная скидка на весь ассортимент",
        },
        {
          name: "3 пробника в подарок",
          tooltip: "Три пробника на выбор к каждому заказу",
        },
        {
          name: "Ранний доступ к новинкам",
          tooltip: "Первыми узнавайте о новых поступлениях",
        },
      ],
      pricing: {
        monthly: 490,
        annually: 4900,
      },
      variant: "default",
    },
    {
      name: "Премиум",
      description: "Для истинных ценителей роскошной парфюмерии.",
      features: [
        {
          name: "Персональный консультант",
          tooltip: "Личный эксперт-парфюмер только для вас",
        },
        {
          name: "Скидка 20% на все покупки",
          tooltip: "Максимальная скидка на весь ассортимент",
        },
        {
          name: "5 пробников в подарок",
          tooltip: "Пять пробников на выбор к каждому заказу",
        },
        {
          name: "Приоритетная доставка за 1 день",
          tooltip: "Гарантированная доставка на следующий день",
        },
      ],
      pricing: {
        monthly: 990,
        annually: 9900,
      },
      variant: "secondary",
    },
  ],
}

export function PricingSection4() {
  const [billingPeriod, setBillingPeriod] = React.useState("monthly")

  return (
    <section className="py-16 md:py-24 pattern-1 bg-muted" aria-labelledby="pricing-section-title-4">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-4 md:gap-5 max-w-xl text-center">
            <p className="text-base font-semibold text-muted-foreground">Подписка</p>
            <h2 id="pricing-section-title-4" className="text-3xl md:text-4xl font-bold">
              Выгодная подписка для постоянных покупателей
            </h2>
            <p className="text-base text-muted-foreground">Выберите план и экономьте на каждой покупке.</p>
          </div>

          <Tabs value={billingPeriod} onValueChange={setBillingPeriod} className="w-fit">
            <TabsList className="bg-black/30 h-10 p-1 rounded-[40px]">
              <TabsTrigger
                value="monthly"
                className="rounded-full px-3 py-1.5 data-[state=active]:bg-background data-[state=active]:shadow-sm"
              >
                Ежемесячно
              </TabsTrigger>
              <TabsTrigger
                value="annually"
                className="rounded-full px-3 py-1.5 data-[state=active]:bg-background data-[state=active]:shadow-sm"
              >
                Ежегодно
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex flex-col lg:flex-row gap-6 lg:max-w-5xl w-full mx-auto">
            {pricingData.plans.map((plan, index) => (
              <Card key={plan.name} className={`p-8 space-y-8 ${index === 2 ? "bg-foreground text-background" : ""}`}>
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold leading-7">{plan.name}</h3>
                    <p className={`text-sm leading-5 ${index === 2 ? "opacity-70" : "text-muted-foreground"}`}>
                      {plan.description}
                    </p>
                  </div>

                  <div className="flex items-end gap-0.5">
                    <span className="text-4xl font-semibold leading-10">
                      {billingPeriod === "monthly" ? plan.pricing.monthly : plan.pricing.annually}
                    </span>
                    <span className={`text-base leading-6 ${index === 2 ? "opacity-70" : "text-muted-foreground"}`}>
                      {plan.pricing.monthly === 0 ? "" : ` ₽/${billingPeriod === "monthly" ? "мес" : "год"}`}
                    </span>
                  </div>

                  <Button variant={index === 2 ? "secondary" : "default"} className="w-full">
                    {plan.pricing.monthly === 0 ? "Начать без подписки" : "Подключить"}
                  </Button>
                </div>

                <div className="space-y-4">
                  <p className="text-sm font-medium">
                    {index === 0 ? "Что включено:" : `Всё из «${pricingData.plans[index - 1].name}», плюс:`}
                  </p>
                  <div className="flex flex-col gap-4">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Check className={`h-5 w-5 ${index === 2 ? "" : "text-primary"}`} />
                        <span className={`text-sm flex-1 ${index === 2 ? "opacity-70" : "text-muted-foreground"}`}>
                          {feature.name}
                        </span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info
                                className={`h-4 w-4 ${index === 2 ? "opacity-40" : "text-muted-foreground opacity-70"}`}
                              />
                            </TooltipTrigger>
                            <TooltipContent className="max-w-xs">
                              <p>{feature.tooltip}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
