import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "Как убедиться, что парфюм оригинальный?",
    answer: "Мы работаем только с официальными дистрибьюторами и крупными оптовиками. Каждый флакон имеет оригинальную упаковку, голограмму и штрихкод производителя. По запросу предоставляем сертификаты.",
  },
  {
    question: "Можно ли вернуть парфюм, если не подошёл?",
    answer: "Да, принимаем возврат в течение 14 дней с момента получения, если флакон не был открыт и упаковка не нарушена. Возврат средств — в течение 3 рабочих дней.",
  },
  {
    question: "Как быстро доставляется заказ?",
    answer: "По Москве — в день заказа или на следующий день. По России — от 1 до 5 дней в зависимости от региона. Для подписчиков «Премиум» — гарантированная доставка за 1 день.",
  },
  {
    question: "Есть ли возможность получить пробник перед покупкой?",
    answer: "К каждому заказу мы прикладываем пробники на выбор. Также можно заказать набор пробников отдельно, чтобы познакомиться с ароматами перед покупкой полного флакона.",
  },
]

export function FaqSection1() {
  return (
    <section className="bg-background py-16 md:py-24" aria-labelledby="faq-heading">
      <div className="max-w-2xl gap-12 mx-auto px-6 flex flex-col">
        <div className="flex flex-col text-center gap-5">
          <p className="text-sm md:text-base text-muted-foreground font-semibold">Вопросы</p>
          <h1 id="faq-heading" className="text-3xl md:text-4xl font-bold text-foreground">
            Есть вопросы? У нас есть ответы.
          </h1>
          <p className="text-muted-foreground">
            Собрали самые популярные вопросы покупателей. Не нашли ответ?{" "}
            <a href="#" className="text-primary underline">
              Напишите нам.
            </a>
          </p>
        </div>

        <Accordion type="single" collapsible defaultValue="item-1" aria-label="Часто задаваемые вопросы">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="text-base font-medium text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="bg-muted/60 w-full rounded-xl p-6 md:p-8 flex flex-col items-center gap-6">
          <div className="flex flex-col text-center gap-2">
            <h2 className="text-2xl font-bold text-foreground">Нужна помощь с выбором?</h2>
            <p className="text-base text-muted-foreground">
              Наши эксперты-парфюмеры подберут идеальный аромат именно для вас!
            </p>
          </div>
          <Button aria-label="Связаться с консультантом">Получить консультацию</Button>
        </div>
      </div>
    </section>
  )
}
