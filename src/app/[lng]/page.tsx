import { useTranslation } from '../i18n'
import { HeroBanner, HeroInfo } from '../components/hero-banner'
import { EventsList, Event } from '../components/events-list'
import { EventLocation, EventInfo } from '../components/event-location'
import { Marquee } from '../components/marquee'

interface PageProps {
  params: {
    lng: string,
  };
}

export default async function Page({ params: { lng } }: PageProps) {
  const { t } = await useTranslation(lng);
  const events = t("events", { returnObjects: true }) as Event[];
  const heroInfo = t("heroInfo", { returnObjects: true }) as HeroInfo;
  const eventInfo = t("eventInfo", { returnObjects: true }) as EventInfo;
  const misc = t("misc", { returnObjects: true }) as any;

  return (
    <main className="flex min-h-screen flex-col">

      <HeroBanner heroInfo={heroInfo} />
      <Marquee />
      <EventsList events={events} misc={misc} />
      <EventLocation eventInfo={eventInfo} />

    </main>
  )
}