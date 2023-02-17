import { useRouter } from "next/router"
import Link from "next/link"

const style={
    color: '0070f3',
    TextDecoderation:'underline'
}

export const ActiveLink = ({text, href}) => {
    const {asPath} = useRouter();

    console.log("asPath", asPath)
    console.log("href", href)

  return (
    <Link href={href} style={asPath === href ? style : null}>
        { text } 
    </Link>
  )
}
