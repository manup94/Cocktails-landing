import Carousel from "@/components/carrousel";
import Reserve from "@/components/reserve";
import Restaurants from "@/components/restaurants";
import Schedule from "@/components/schedule";
import Slogan from "@/components/slogan";
import NewsLetter from "@/components/newsLetter";
import Footer from "@/components/footer";


export default function HomePage() {
  return (
    < >
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
      <section>
        <Slogan />
      </section>
      <section>
        <NewsLetter />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
