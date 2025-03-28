'use client'

import clsx from 'clsx'
import { useParams } from 'next/navigation'
import { ChangeEvent, ReactNode, useTransition } from 'react'
import { Locale } from '@/i18n/routing'
import { usePathname, useRouter } from '@/i18n/navigation'
import { ChevronDown } from 'lucide-react'

type Props = {
  children: ReactNode
  defaultValue: string
  label: string
}

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}: Props) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const pathname = usePathname()
  const params = useParams()

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Locale
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      )
    })
  }

  return (
    <label
      className={clsx(
        'relative text-gray-400',
        isPending && 'transition-opacity [&:disabled]:opacity-30'
      )}
    >
      <p className="sr-only font-bold cursor-pointer">{label}</p>
      <div className="flex items-center">
        <select
          style={{ background: 'transparent' }}
          className="inline-flex appearance-none bg-transparent px-2 font-bold bg-transparent text-asia-2 cursor-pointer"
          defaultValue={defaultValue}
          disabled={isPending}
          onChange={onSelectChange}
        >
          {children}
        </select>
        {/* <ChevronDown /> */}
      </div>
    </label>
  )
}
