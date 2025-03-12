import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContentSection from './components/ContentSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="bg-dark min-h-screen">
      <Navbar />
      <Hero />
      
      <div className="mt-[-200px] relative z-10">
        <ContentSection
          number="01"
          subtitle="GET STARTED"
          title="What level of hiker are you?"
          description="Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to your experience and current physical condition."
          image="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1000&auto=format&fit=crop"
        />
        
        <ContentSection
          number="02"
          subtitle="HIKING ESSENTIALS"
          title="Picking the right Hiking Gear!"
          description="The nice thing about beginning hiking is that you don't really need any special gear, you can probably get away with things you already have. Let's start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes."
          image="https://images.unsplash.com/photo-1501554728187-ce583db33af7?q=80&w=1000&auto=format&fit=crop"
          isReversed
        />
        
        <ContentSection
          number="03"
          subtitle="WHERE YOU GO IS THE KEY"
          title="Understand Your Map & Timing"
          description="To start, print out the hiking guide and map. If it's raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I'll read the guide and know that say, in a mile, I make a right turn at the junction."
          image="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=1000&auto=format&fit=crop"
        />
      </div>

      <Footer />
    </main>
  );
}
