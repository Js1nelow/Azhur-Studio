import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, ArrowRight, ShieldCheck } from 'lucide-react';

interface ReasonsBlockProps {
  onOpenCalculator: (service?: string) => void;
}

export function ReasonsBlock({ onOpenCalculator }: ReasonsBlockProps) {
  const [activeReason, setActiveReason] = useState<string | null>("01");

  const reasons = [
    {
      num: "01",
      title: "Чистый монтаж без строительной пыли",
      tag: "Технология Clean-Work",
      description: "Мы сверлим стены перфораторами с прямым подключением к строительным пылесосам. Мелкая пыль не оседает на стенах, мебели и в воздухе. После монтажа в комнате сразу можно жить."
    },
    {
      num: "02",
      title: "Взрывобезопасные полимерные баллоны",
      tag: "100% безопасность",
      description: "Мы принципиально не используем устаревшие стальные газовые баллоны. У нас на объектах только современные полимерно-композитные баллоны взрывобезопасного исполнения по европейским стандартам."
    },
    {
      num: "03",
      title: "Фиксированная смета в официальном договоре",
      tag: "Честная цена",
      description: "Никаких 'непредвиденных расходов' и скрытых наценок в процессе монтажа. Сумма, согласованная при замере, фиксируется в договоре и остается окончательной."
    },
    {
      num: "04",
      title: "Сертифицированные эко-полотна без запаха",
      tag: "Класс экологичности А+",
      description: "Используем оригинальные полотна Bauf (Германия) и MSD Premium. Они не имеют токсичного запаха, не желтеют от ультрафиолета и безопасны для детей и аллергиков."
    },
    {
      num: "05",
      title: "Монтаж комнаты за 3-5 часов, квартиры за 1 день",
      tag: "Точные сроки",
      description: "Слаженные бригады славян с опытом от 7 лет. Приезжаем точно к назначенному часу с полным комплектом оборудования и сдаем объект в этот же день."
    },
    {
      num: "06",
      title: "10 лет официальной гарантии по договору",
      tag: "Личная ответственность",
      description: "Ведущий инженер Олег лично курирует технологию монтажа на каждом объекте. Если потолок провиснет или вас затопят соседи — мы оперативно приедем и решим вопрос по гарантии."
    }
  ];

  return (
    <section id="reasons" className="relative bg-brand-black text-white py-24 md:py-32 border-t border-white/5 overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/3 left-10 w-[350px] h-[350px] rounded-full bg-brand-red/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[250px] h-[250px] rounded-full bg-white/5 blur-[100px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Header styled like Allen Brau main-reasons */}
        <div className="mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-brand-red" />
            <span className="font-suisse text-xs text-brand-red uppercase tracking-[0.2em] font-medium">
              Стандарты качества
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-serif-italic italic text-brand-red leading-none mb-2">
                6 причин
              </h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-suisse font-normal text-white tracking-tight">
                доверить монтаж Azhur Studio
              </h3>
            </div>

            <p className="text-sm md:text-base text-brand-gray max-w-md font-suisse leading-relaxed border-l border-white/20 pl-4 py-1">
              Мы объединили европейскую культуру монтажа с доступной ценой для семейного бюджета.
            </p>
          </div>
        </div>

        {/* Reasons Accordion with big numbers */}
        <div className="divide-y divide-white/10 border-y border-white/10">
          {reasons.map((item, idx) => {
            const isOpen = activeReason === item.num;
            return (
              <div key={item.num} className="group transition-colors">
                <button
                  onClick={() => setActiveReason(isOpen ? null : item.num)}
                  className="w-full py-6 md:py-8 flex items-start justify-between gap-4 sm:gap-8 text-left cursor-pointer transition-all"
                >
                  <div className="flex items-start gap-4 sm:gap-8 flex-1">
                    {/* Big Italic Number like Allen Brau */}
                    <span className={`font-serif-italic text-2xl sm:text-3xl md:text-4xl italic transition-all duration-300 w-12 shrink-0 ${
                      isOpen ? 'text-brand-red font-bold' : 'text-brand-gray group-hover:text-white'
                    }`}>
                      {item.num}
                    </span>

                    <div className="space-y-1 pr-4 flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <h4 className={`text-base sm:text-lg md:text-xl font-suisse font-medium transition-colors ${
                          isOpen ? 'text-white' : 'text-white/85 group-hover:text-white'
                        }`}>
                          {item.title}
                        </h4>
                        <span className="inline-block text-[11px] font-suisse uppercase tracking-wider text-brand-red px-2 py-0.5 rounded bg-brand-red/10 border border-brand-red/20 w-max">
                          {item.tag}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-2 rounded-full border border-white/10 group-hover:border-white/30 text-white transition-all shrink-0">
                    {isOpen ? <Minus size={16} className="text-brand-red" /> : <Plus size={16} />}
                  </div>
                </button>

                {/* Animated content dropdown */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pl-16 sm:pl-20 max-w-3xl">
                        <p className="text-sm sm:text-base text-brand-gray font-suisse leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom trust banner */}
        <div className="mt-12 p-6 sm:p-8 bg-brand-card border border-white/10 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red shrink-0">
              <ShieldCheck size={24} />
            </div>
            <div>
              <div className="text-sm sm:text-base font-suisse font-medium text-white">
                Замерщик бесплатно приедет с образцами материалов
              </div>
              <div className="text-xs sm:text-sm text-brand-gray mt-0.5">
                Поможет подобрать оптимальное решение под ваш бюджет и составит точную смету на месте
              </div>
            </div>
          </div>

          <button
            onClick={() => onOpenCalculator('Вызов замерщика')}
            className="w-full md:w-auto bg-brand-red hover:bg-brand-red-hover text-white font-suisse text-xs sm:text-sm font-medium tracking-wide px-8 py-4 rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0 shadow-lg shadow-brand-red/20"
          >
            <span>Записаться на бесплатный замер</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
