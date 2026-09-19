import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-black border-t border-white/10 py-16 text-brand-gray relative overflow-hidden font-suisse">
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-red/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-baseline gap-1">
              <span className="font-suisse font-bold text-2xl uppercase tracking-tight text-white">
                AZHUR
              </span>
              <span className="font-serif-italic italic text-brand-red text-xl font-normal">
                Studio
              </span>
            </div>
            <p className="text-xs text-brand-gray leading-relaxed max-w-sm">
              Чистый монтаж натяжных потолков от производителя и современного трекового освещения в Москве и Московской области. Смета без сюрпризов, гарантия 10 лет по договору.
            </p>
            <div className="pt-2 text-xs text-gray-400">
              Ежедневно с 9:00 до 21:00 • Выезд инженера на замер бесплатно
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-white border-b border-white/10 pb-2 font-medium">Разделы</h4>
            <ul className="space-y-2 text-xs uppercase tracking-wide">
              <li>
                <a href="#hero" className="hover:text-brand-red transition-colors">Главная</a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-brand-red transition-colors">Каталог решений</a>
              </li>
              <li>
                <a href="#reasons" className="hover:text-brand-red transition-colors">Преимущества</a>
              </li>
              <li>
                <a href="#works" className="hover:text-brand-red transition-colors">Кейсы с ценами</a>
              </li>
              <li>
                <a href="#catalog-download" className="hover:text-brand-red transition-colors">Скачать прайс-лист</a>
              </li>
              <li>
                <a href="#process" className="hover:text-brand-red transition-colors">Этапы монтажа</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-brand-red transition-colors">Отзывы клиентов</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-white border-b border-white/10 pb-2 font-medium">Контакты</h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-brand-red shrink-0" />
                <a href="tel:+74959713123" className="hover:text-brand-red transition-colors text-white font-medium">+7 (495) 971-31-23</a>
              </li>
              <li className="flex items-center gap-2 text-xs">
                <Mail size={14} className="text-brand-red shrink-0" />
                <a href="mailto:info@azhur-studio.ru" className="hover:text-white transition-colors">info@azhur-studio.ru</a>
              </li>
              <li className="flex items-start gap-2 text-xs leading-relaxed text-gray-400">
                <MapPin size={14} className="text-brand-red mt-0.5 shrink-0" />
                <span>Москва и Московская область (выезд во все районы)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-brand-gray">
          <div>
            © {currentYear} Azhur Studio. Все права защищены.
          </div>
          <div className="flex gap-6">
            <Link to="/privacy/" className="hover:text-white transition-colors">Политика конфиденциальности</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
