import { useTranslation } from '../i18n'
import { HeroBanner } from '../components/hero-banner'
import { EventsList } from '../components/events-list'
import { EventLocation } from '../components/event-location'

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng)

  return (
    <main className="flex min-h-screen flex-col">

      <HeroBanner />
      <EventsList />
      <EventLocation />

    </main>
  )
}