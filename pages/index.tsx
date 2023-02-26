import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'

export default function Home() {
  return (
    <MainLayout>
      Ir a <Link href="about">
            <h2>
              About
            </h2>
          </Link>
    </MainLayout>
  )
}
