'use client';

import React from 'react';

export function Footer() {
  const catalogLinks = [
    'Смесители',
    'Душевые системы и души',
    'Ванны',
    'Мебель для ванной',
    'Керамика',
    'Инсталляции',
    'Душевые поддоны и ограждения',
    'Полотенцесушители',
    'Душевые лотки и трапы',
    'Аксессуары',
  ];

  const collectionLinks = [
    'Liberty',
    'Activity',
    'Glority',
    'Eclipse',
    'Fantasy',
    'Infinity',
    'Reality',
    'Priority',
    'Paris',
    'Gravity',
  ];

  const aboutLinks = [
    'Allen Brau',
    'Галерея',
    'Фирменный стиль',
    'Гарантия',
    'Контакты',
    'Дизайнеры',
  ];

  const infoLinks = [
    'Где купить',
    'Сотрудничество',
    'Блог',
    'Дизайн-проект',
    'Документация',
  ];

  return (
    <footer className="bg-[#0a0a0a] text-white pt-24 pb-12 px-6 sm:px-10 lg:px-16 border-t border-white/10 font-suisse">
      <div className="max-w-[1720px] mx-auto">
        
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-20 border-b border-white/10">
          
          {/* Left Column: Brand, Tagline, Contacts */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* SVG Logo */}
            <div className="w-48">
              <svg viewBox="0 0 159 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto text-white">
                <path fillRule="evenodd" clipRule="evenodd" d="M6.18105 15.4854H12.7793L9.40477 7.18718L6.18105 15.4854ZM10.9584 0.000154495H11.9106L19.8125 18.7882C20.5029 20.4482 21.0652 21.5165 21.4996 21.9919C21.9339 22.468 22.4793 22.7113 23.1363 22.7224V23.5854H12.0275V22.7224C12.9186 22.6782 13.5977 22.5837 14.0654 22.4401C14.5446 22.2851 14.7838 21.9587 14.7838 21.461C14.7838 20.8744 14.5225 19.9561 13.9988 18.7058L13.247 16.8466H5.67947L4.54371 19.718C4.2654 20.4597 4.12581 20.9736 4.12581 21.2617C4.12581 22.1248 5.07273 22.6114 6.96606 22.7224V23.5854H0V22.7224C0.879769 22.5672 1.51412 22.2189 1.9039 21.6764C2.29384 21.1235 2.7731 20.1327 3.34081 18.7058L10.9584 0.000154495Z" fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M24.356 0.481569H30.9046V20.6473C30.9046 22.0638 31.4727 22.7718 32.6084 22.7718V23.5854H24.356V22.7718C25.5478 22.7718 26.1434 22.0638 26.1434 20.6473V3.41917C26.1434 2.0032 25.5478 1.29471 24.356 1.29471V0.481569Z" fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M33.8608 0.481569H40.4093V20.6473C40.4093 22.0638 40.9771 22.7718 42.1133 22.7718V23.5854H33.8608V22.7718C35.0527 22.7718 35.6483 22.0638 35.6483 20.6473V3.41917C35.6483 2.0032 35.0527 1.29471 33.8608 1.29471V0.481569Z" fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M48.4951 13.9915H52.9556C52.9556 11.8671 52.8049 10.4289 52.5045 9.67624C52.2038 8.91305 51.6469 8.53103 50.8337 8.53103C49.2748 8.53103 48.4951 10.3517 48.4951 13.9915ZM48.6452 15.2529C48.8018 19.5018 50.1393 21.6268 52.7218 21.6268C54.0581 21.6268 55.3553 20.8243 56.6138 19.2197L57.349 19.6847C56.2572 21.3225 55.205 22.4511 54.1919 23.0707C53.1779 23.69 52.014 24 50.7005 24C48.6623 24 46.9915 23.2531 45.6886 21.7594C44.3856 20.2545 43.7339 18.252 43.7339 15.7512C43.7339 13.2614 44.3856 11.2641 45.6886 9.75938C47.0028 8.25451 48.7178 7.50182 50.8337 7.50182C52.816 7.50182 54.3528 8.19931 55.4446 9.59326C56.5471 10.9877 57.1317 12.8741 57.1988 15.2529H48.6452Z" fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M58.7686 22.7718C59.5256 22.6614 60.0101 22.4401 60.2218 22.108C60.4446 21.7653 60.5562 21.2781 60.5562 20.6473V10.8548C60.5562 10.1026 60.4165 9.59341 60.1383 9.3279C59.8711 9.05154 59.4145 8.85224 58.7686 8.73032V7.91718H65.3167V10.4233C66.1859 9.3389 67.0043 8.58113 67.773 8.1495C68.5411 7.71804 69.3536 7.50197 70.2117 7.50197C71.5702 7.50197 72.6504 7.94512 73.4524 8.83022C74.2654 9.70433 74.6717 10.8548 74.6717 12.2824V20.6473C74.6717 22.0638 75.2173 22.7718 76.3091 22.7718V23.5854H68.2739V22.7718C68.7526 22.7281 69.1426 22.5505 69.443 22.2409C69.7551 21.9202 69.9107 21.3889 69.9107 20.6473V12.5645C69.9107 10.6946 69.3203 9.75953 68.1401 9.75953C67.6613 9.75953 67.1656 9.93665 66.6536 10.2904C66.1409 10.6451 65.6956 11.1039 65.3167 11.6684V20.6473C65.3167 21.8757 65.8626 22.5837 66.954 22.7718V23.5854H58.7686V22.7718Z" fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M94.6516 20.332C94.6516 21.7485 95.3197 22.4565 96.656 22.4565C99.5295 22.4565 100.966 20.7525 100.966 17.3445C100.966 13.7262 99.2677 11.917 95.871 11.917H94.6516V20.332ZM94.6516 10.7886C96.5449 10.7886 97.8976 10.4623 98.7111 9.80931C99.5237 9.15653 99.9305 7.89516 99.9305 6.02504C99.9305 3.08169 98.7942 1.61001 96.5226 1.61001C95.7428 1.61001 95.2361 1.74293 95.0023 2.00845C94.7685 2.27379 94.6516 2.67224 94.6516 3.20361V10.7886ZM86.0483 1.34449V0.481569H96.8232C99.7967 0.481569 102.002 0.935215 103.438 1.84233C104.886 2.73845 105.61 4.08296 105.61 5.87586C105.61 7.29234 105.137 8.42603 104.19 9.27794C103.244 10.13 101.94 10.7386 100.281 11.1039C102.252 11.4136 103.834 12.1221 105.025 13.2285C106.217 14.3237 106.813 15.6462 106.813 17.1951C106.813 19.0653 105.967 20.5979 104.274 21.7925C102.581 22.9879 100.264 23.5854 97.3241 23.5854H86.0483V22.7224C87.1952 22.6451 87.9971 22.4343 88.4542 22.0916C88.9107 21.7485 89.1388 21.1619 89.1388 20.332V3.73447C89.1388 2.88255 88.8992 2.28531 88.4204 1.94224C87.9415 1.588 87.1507 1.38869 86.0483 1.34449Z" fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M109.402 23.5854V22.7718C109.992 22.7056 110.449 22.5342 110.772 22.2572C111.095 21.9812 111.256 21.533 111.256 20.9132V10.8548C111.256 10.1138 111.095 9.58816 110.772 9.27794C110.449 8.9684 109.992 8.78603 109.402 8.73032V7.91718H115.867V10.6556C116.658 9.5272 117.432 8.71931 118.189 8.23265C118.946 7.74581 119.709 7.50197 120.477 7.50197C121.335 7.50197 122.009 7.75699 122.499 8.26567C122.989 8.77502 123.234 9.41104 123.234 10.1747C123.234 10.8605 123.028 11.4083 122.616 11.8178C122.203 12.2272 121.674 12.4316 121.029 12.4316C120.294 12.4316 119.687 12.0999 119.208 11.4356C118.729 10.7613 118.345 10.4233 118.055 10.4233C117.576 10.4233 117.114 10.7281 116.669 11.3362C116.235 11.9339 116.017 12.6971 116.017 13.6268V20.1165C116.017 21.1565 116.207 21.8589 116.585 22.2242C116.964 22.5784 117.615 22.7613 118.54 22.7718V23.5854H109.402Z" fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M133.595 15.2321C132.503 15.4869 131.551 15.9678 130.739 16.6763C129.926 17.3848 129.536 18.2422 129.536 19.2817C129.536 19.9902 129.681 20.56 129.971 20.9915C130.27 21.4231 130.683 21.639 131.206 21.639C131.663 21.639 132.091 21.5003 132.492 21.2238C132.893 20.9364 133.261 20.5822 133.595 20.1616V15.2321ZM133.595 14.0373V11.5975C133.595 9.56127 132.66 8.54324 130.789 8.54324C130.12 8.54324 129.608 8.68192 129.252 8.95845C128.895 9.22379 128.717 9.51708 128.717 9.8378C128.717 10.0264 128.89 10.347 129.235 10.8006C129.58 11.2543 129.753 11.7025 129.753 12.1451C129.753 12.7317 129.542 13.2131 129.118 13.589C128.706 13.9653 128.177 14.1534 127.531 14.1534C126.796 14.1534 126.228 13.9543 125.827 13.5559C125.426 13.1574 125.226 12.5878 125.226 11.8461C125.226 10.6514 125.788 9.63324 126.913 8.79233C128.037 7.94024 129.647 7.51403 131.741 7.51403C133.612 7.51403 135.182 7.91247 136.452 8.70936C137.722 9.49506 138.356 10.6235 138.356 12.0952V20.9253C138.356 21.2238 138.406 21.4509 138.507 21.6055C138.607 21.7606 138.795 21.8378 139.074 21.8378C139.186 21.8378 139.302 21.7878 139.425 21.6884C139.559 21.5892 139.676 21.4841 139.776 21.3731L140.294 22.0869C139.213 23.3704 137.912 24.0122 136.418 24.0122C135.561 24.0122 134.904 23.8073 134.447 23.3979C133.99 22.9888 133.706 22.3969 133.595 21.6222C132.036 23.2153 130.27 24.0122 128.299 24.0122C127.324 24.0122 126.462 23.6912 125.694 23.0497C124.936 22.4081 124.558 21.534 124.558 20.4271C124.558 19.1987 125.109 18.0981 126.211 17.1242C127.314 16.1507 129.775 15.1217 133.595 14.0373Z" fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M141.242 8.73017V7.91703H147.707V19.4688C147.707 20.9852 148.309 21.7426 149.511 21.7426C150.58 21.7426 151.51 21.2063 152.301 20.1326V10.8546C152.301 10.0362 152.123 9.4771 151.766 9.17856C151.421 8.87952 150.881 8.73017 150.146 8.73017V7.91703H157.062V19.917C157.062 20.7696 157.229 21.3389 157.563 21.6268C157.897 21.9033 158.376 22.0417 159 22.0417L159 22.8546C156.382 23.0649 154.15 23.447 152.301 24V21.61C150.742 23.2031 149.119 24 147.44 24C146.003 24 144.895 23.5853 144.115 22.7554C143.336 21.9143 142.946 20.7029 142.946 19.1203V10.8546C142.946 10.0804 142.813 9.55483 142.545 9.2778C142.278 8.99044 141.844 8.80789 141.242 8.73017Z" fill="currentColor"/>
              </svg>
            </div>

            <p className="text-xs uppercase tracking-[0.25em] text-white/40 leading-relaxed max-w-xs">
              THE MOST IMPORTANT. YOUR WISH. GERMANY.
            </p>

            <div className="space-y-2 text-sm text-white/80">
              <p>
                Телефон:{' '}
                <a href="tel:+78314378650" className="hover:text-white transition-colors">
                  8 831 437-86-50
                </a>
              </p>
              <p>
                Email:{' '}
                <a href="mailto:info@allenbrau.ru" className="hover:text-white transition-colors">
                  info@allenbrau.ru
                </a>
              </p>
            </div>

            {/* Social media links */}
            <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-white/50 pt-2">
              <a href="https://vk.com/allenbrau" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">VK</a>
              <span>•</span>
              <a href="https://ru.pinterest.com/allenbrau_russia/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Pinterest</a>
              <span>•</span>
              <a href="https://rutube.ru/channel/25164230/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Rutube</a>
              <span>•</span>
              <a href="https://dzen.ru/allenbrau" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Дзен</a>
            </div>

          </div>

          {/* Right Columns: Nav menus */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            
            {/* Catalog */}
            <div className="space-y-4">
              <h5 className="text-xs uppercase tracking-[0.2em] text-white/40 font-medium">
                Каталог
              </h5>
              <ul className="space-y-2.5 text-sm text-white/70">
                {catalogLinks.map((link, i) => (
                  <li key={i}>
                    <a href={`/catalog/`} className="hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Collections */}
            <div className="space-y-4">
              <h5 className="text-xs uppercase tracking-[0.2em] text-white/40 font-medium">
                Коллекции
              </h5>
              <ul className="space-y-2.5 text-sm text-white/70">
                {collectionLinks.map((link, i) => (
                  <li key={i}>
                    <a href={`/collection/`} className="hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* About */}
            <div className="space-y-4">
              <h5 className="text-xs uppercase tracking-[0.2em] text-white/40 font-medium">
                О компании
              </h5>
              <ul className="space-y-2.5 text-sm text-white/70">
                {aboutLinks.map((link, i) => (
                  <li key={i}>
                    <a href={`/about_company/`} className="hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Information */}
            <div className="space-y-4">
              <h5 className="text-xs uppercase tracking-[0.2em] text-white/40 font-medium">
                Информация
              </h5>
              <ul className="space-y-2.5 text-sm text-white/70">
                {infoLinks.map((link, i) => (
                  <li key={i}>
                    <a href={`/`} className="hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© 2026 Allen Brau. Все права защищены.</p>
          <div className="flex flex-wrap items-center gap-6">
            <a href="https://allenbrau.ru/personal-data/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Согласие на обработку данных
            </a>
            <a href="https://allenbrau.ru/privacy-policy/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Политика конфиденциальности
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
