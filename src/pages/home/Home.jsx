import "./home.scss"
import Intro from "../../components/intro/Intro";
import Portfolio from "../../components/portfolio/Portfolio";
import Testimonials from "../../components/testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Intro />
      <Portfolio />
      <Testimonials />
    </>
  )
}
