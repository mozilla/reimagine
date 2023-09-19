import { useTranslation } from '../i18n'
import { HeroBanner } from '../components/hero-banner'
import { EventsList, Event } from '../components/events-list'
import { EventLocation } from '../components/event-location'
import { Marquee } from '../components/marquee'

interface PageProps {
  params: {
    lng: string,
  };
}

export default async function Page({ params: { lng } }: PageProps) {
  const { t } = await useTranslation(lng);
  const events = t("events", { returnObjects: true }) as Event[];
  const hero = t("hero", { returnObjects: true }) as any;
  const eventInfo = t("eventInfo", { returnObjects: true }) as any;
  const misc = t("misc", { returnObjects: true }) as any;

  return (
    <main className="flex min-h-screen flex-col">

      <HeroBanner heroInfo={hero} />
      <Marquee />
      <EventsList events={events} misc={misc} />
      <EventLocation eventInfo={eventInfo} />

    </main>
  )
}