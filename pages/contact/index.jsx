import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'

export default function Contact() {
  return (
    <MainLayout>
      Ir a <Link href="/">
            <h2>
              Home
            </h2>
          </Link>
    </MainLayout>
  )
}
