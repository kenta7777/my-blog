import Link from 'next/link'
import './index.css';

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Kenta7777
      </h1>
      <div className="link-box">
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/links" className="hover:underline">
          Links
        </Link>
      </div>
    </section>
  )
}

export default Intro
