import Banner from "components/Banner"
import Footer from "components/Footer"
import Gallery from "components/Gallery"
import Header from "components/Header"
import Navbar from "components/Nabar"
import style from "./home.module.scss"
import MostPopular from "components/MostPopular"


function HomePage() {
    return (
        <main>
            <Header />
            <section className={style.container}>
                <Navbar />
                <Banner />
            </section>
            <section className={style.gallery}>
                <Gallery />
                <MostPopular />
            </section>
            <Footer />
        </main>
    )
}

export default HomePage