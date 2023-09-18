import { useTranslation } from '../i18n'
import { HeroBanner } from '../components/hero-banner'
import { EventsList } from '../components/events-list'
import { EventLocation } from '../components/event-location'
import { Marquee } from '../components/marquee'

interface PageProps {
  params: {
    lng: string,
  };
}

export default async function Page({ params: { lng } }: PageProps) {
  const { t } = await useTranslation(lng);

  console.log(t("title"));

  return (
    <main className="flex min-h-screen flex-col">

      <HeroBanner />
      <Marquee />
      <EventsList />
      <EventLocation />

    </main>
  )
}