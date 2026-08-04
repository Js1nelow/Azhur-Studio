import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const COUNTER_ID = 111296243;

declare global {
  interface Window {
    ym?: (...args: unknown[]) => void;
    __yandexMetrikaInitialized?: boolean;
    __yandexMetrikaLastUrl?: string;
  }
}

export function reachMetrikaGoal(goal: string) {
  window.ym?.(COUNTER_ID, 'reachGoal', goal);
}

export function YandexMetrika() {
  const location = useLocation();

  useEffect(() => {
    if (!window.ym) {
      window.ym = function (...args: unknown[]) {
        (window.ym as typeof window.ym & { a?: unknown[] }).a ||= [];
        (window.ym as typeof window.ym & { a: unknown[] }).a.push(args);
      };

      const script = document.createElement('script');
      script.async = true;
      script.src = `https://mc.yandex.ru/metrika/tag.js?id=${COUNTER_ID}`;
      document.head.appendChild(script);
    }

    if (!window.__yandexMetrikaInitialized) {
      window.ym?.(COUNTER_ID, 'init', {
        defer: true,
        ssr: true,
        webvisor: true,
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        ecommerce: 'dataLayer',
      });
      window.__yandexMetrikaInitialized = true;
    }
  }, []);

  useEffect(() => {
    const url = window.location.href;
    if (window.__yandexMetrikaLastUrl === url) return;

    window.ym?.(COUNTER_ID, 'hit', url, {
      title: document.title,
      referer: window.__yandexMetrikaLastUrl || document.referrer,
    });
    window.__yandexMetrikaLastUrl = url;
  }, [location.pathname, location.search, location.hash]);

  return null;
}
