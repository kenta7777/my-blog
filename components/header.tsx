import Link from 'next/link'

type Props = {
  children?: React.ReactNode
}

const Header = ({children}: Props) => {
  return (
    <div className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <h2>
        <Link href="/" className="hover:underline">
          Kenta7777
        </Link>
      </h2>
      {children}
    </div>
  )
}

export default Header
