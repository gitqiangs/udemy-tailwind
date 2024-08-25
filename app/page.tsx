import Navbar from '../components/navbar'
import Hero from '../components/hero'

export default function Home() {
  return (
    <main>
      <header className='text-zinc-200'>
        <Navbar />
        <Hero />
      </header>
    </main>
  );
}
