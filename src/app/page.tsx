import Carousel from "@/components/carrousel";
import Reserve from "@/components/reserve";
import Restaurants from "@/components/restaurants";
import Schedule from "@/components/schedule";


export default function HomePage() {
  return (
    <div >
      <header >
        <Carousel />
      </header>
      <section>
        <Reserve />
      </section>
      <section>
        <Restaurants />
      </section>
      <section>
        <Schedule />
      </section>
    </div>
  )
}
