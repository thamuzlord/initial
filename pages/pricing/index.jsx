import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'

export default function Pricing() {
  return (
    <MainLayout>
     Pricing Page - Ir a <Link href="about">
            <h2>
              About
            </h2>
          </Link>
    </MainLayout>
  )
}
