import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Headliner from '../components/headliner'

export default function Home() {
  return (
    <main>
      <header className='text-zinc-200'>
        <Navbar />
        <Hero />
        <Headliner />
      </header>
    </main>
  );
}
