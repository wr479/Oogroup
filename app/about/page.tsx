import { Reveal } from "@/components/ui/reveal";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16">
      <Reveal>
        <h1 className="text-3xl md:text-4xl font-semibold mb-6">О компании</h1>
      </Reveal>
      <div className="grid gap-10 md:grid-cols-2">
        <Reveal className="prose prose-neutral dark:prose-invert max-w-none">
          <p>
            Мы — команда инженеров, архитекторов и менеджеров проектов. Реализуем проекты разной сложности, соблюдая сроки и бюджет.
          </p>
          <p>
            Подход основан на прозрачности, бережливом производстве и постоянном улучшении процессов.
          </p>
        </Reveal>
        <Reveal delay={0.08} className="rounded-xl border border-black/10 dark:border-white/10 p-6">
          <div className="grid grid-cols-2 gap-6 text-center">
            <div>
              <div className="text-3xl font-semibold">14+</div>
              <div className="text-sm text-foreground/70">лет опыта</div>
            </div>
            <div>
              <div className="text-3xl font-semibold">120+</div>
              <div className="text-sm text-foreground/70">проектов</div>
            </div>
            <div>
              <div className="text-3xl font-semibold">98%</div>
              <div className="text-sm text-foreground/70">сроков соблюдено</div>
            </div>
            <div>
              <div className="text-3xl font-semibold">24/7</div>
              <div className="text-sm text-foreground/70">поддержка</div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}


