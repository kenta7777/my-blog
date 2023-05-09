import Link from 'next/link'

type Props = {
  children?: React.ReactNode
}

const Header = ({children}: Props) => {
  return (
    <div>
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
        <Link href="/" className="hover:underline">
          Kenta7777
        </Link>
        {children}
      </h2>
    </div>
  )
}

export default Header
