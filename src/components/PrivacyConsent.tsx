import { Link } from 'react-router-dom';

interface PrivacyConsentProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export function PrivacyConsent({ checked, onChange }: PrivacyConsentProps) {
  return (
    <label className="flex cursor-pointer items-start gap-3 text-left text-[11px] leading-relaxed text-brand-gray select-none">
      {onChange ? (
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 accent-brand-red cursor-pointer"
        />
      ) : (
        <input
          type="checkbox"
          required
          defaultChecked={true}
          className="mt-0.5 h-4 w-4 shrink-0 accent-brand-red cursor-pointer"
        />
      )}
      <span>
        Я согласен на обработку персональных данных и принимаю{' '}
        <Link to="/privacy/" target="_blank" className="text-brand-light underline underline-offset-2 hover:text-brand-red">
          Политику конфиденциальности
        </Link>.
      </span>
    </label>
  );
}
