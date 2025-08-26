import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export default function NotFound() {
  return (
    <div className="min-h-dvh flex flex-col bg-background">
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center px-4">
          <Reveal>
            <h1 className="text-6xl md:text-8xl font-bold text-red-600 mb-4">404</h1>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Страница не найдена
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto">
              К сожалению, запрашиваемая страница не существует. Возможно, она была удалена или перемещена.
            </p>
            <div className="space-y-4">
              <Link href="/">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl">
                  Вернуться на главную
                </Button>
              </Link>
              <div className="text-sm text-slate-500">
                Или перейдите к другим разделам:
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/about">
                  <Button variant="outline" className="border-slate-300 hover:border-red-500 hover:text-red-600">
                    О компании
                  </Button>
                </Link>
                <Link href="/vacancies">
                  <Button variant="outline" className="border-slate-300 hover:border-red-500 hover:text-red-600">
                    Вакансии
                  </Button>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </main>
    </div>
  );
}
