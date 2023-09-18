import { useTranslation } from '../i18n'
import { EventsList } from '../components/events-list'

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng)
  return (
    <main className="flex min-h-screen flex-col">

      <h1>{t('title')}</h1>
      <h1># ReImagine</h1>
      <h2>Mozilla ReImagine Rise 25 website project</h2>

      <EventsList />

    </main>
  )
}