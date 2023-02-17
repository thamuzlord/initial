import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'
import { DarkLayout } from '@/components/layouts/DarkLayout'

export default function About() {
  return (
    <>
      Ir a <Link href="/">
            <h2>
              Home
            </h2>
      </Link>
    </>
  )
}

About.getLayout = function getLayout(page){
  return(
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}
