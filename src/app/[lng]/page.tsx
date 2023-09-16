import Link from 'next/link'
import { useTranslation } from '../i18n'

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng)

  console.log("🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶");
  console.log("🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶");
  console.log("LANGUAGE: ", lng);
  console.log("🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶");
  console.log("🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div>
        <h1>{t('title')}</h1>
        <h1># ReImagine</h1>
        <h2>Mozilla ReImagine Rise 25 website project</h2>
      </div>
    </main>
  )
}