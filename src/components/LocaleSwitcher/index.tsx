import { useLocale, useTranslations } from 'next-intl'
import { routing } from '@/i18n/routing'
import LocaleSwitcherSelect from './LocaleSwitcherSelect'

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher')
  const locale = useLocale()
  // const x = {
  //   label: 'Change language',
  //   locale: "{locale, select, fr {'French} en {English} other {Unbekannt}}",
  // }

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
      {routing.locales.map(cur => (
        <option key={cur} value={cur}>
          {cur.toUpperCase()}
        </option>
      ))}
    </LocaleSwitcherSelect>
  )
}
