import { useState } from "react";
import Header from "../Header/Header.jsx";
import Button from "../Button.jsx";
import ButtonCart from "../ButtonCart.jsx";
import ProductLarge from "../ProductLarge/ProductLarge.jsx";
import "./App.css";
import Product from "../Product.jsx";
import Review from "../Review.jsx";
import Slider1 from "../Slider1.jsx";
import Slider2 from "../Slider2.jsx";
import Footer from "../Footer.jsx";

function App() {
  const [name, setCount] = useState(0);
  const slides1 = [
    {
      category: "Trendy house plant",
      name: "Cathalea plant",
      url: "/assets/plant-img/plant4.png",
    },
    {
      category: "Office plants",
      name: "Snake plant",
      url: "/assets/plant-img/plant2.png",
    },
    {
      category: "Bestsellers",
      name: "Lorem ipsum",
      url: "/assets/plant-img/plant3.png",
    },
  ];
  const slides2 = [
    {
      url: "/assets/plant-img/plant5.png",
      name: "We Have Small And Great O2 Plant Collections",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      slideNr: "01",
    },
    {
      url: "/assets/plant-img/plant6.png",
      name: "Rainforest Plants For The Bathrooms",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      slideNr: "02",
    },
  ];
  return (
    <>
      <Header />
      <main>
        <section className="pt-36 w-fit md:flex justify-between">
          <div>
            <h1 id="title-1">Breathe Natural</h1>
            <p className="text-xl w-2/3 font-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex my-6">
              <Button />
              <button
                name="btn-play"
                className="my-auto btn p-3 border-gray mr-2 rounded-full"
              >
                <img src="/assets/play-icon.svg" alt="play" />
              </button>
              <label htmlFor="btn-play" className="my-auto">
                Live Demo ...
              </label>
            </div>
            <Review
              classes="lg:mt-36 md:mt-20 lg:my-24 w-80 hidden md:block"
              name="alena Patel"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt..."
            />
          </div>
          <Slider1 slides={slides1} />
        </section>
        <section id="trendy-plants">
          <h2 className="title-2">Our trendy plants</h2>
          <ProductLarge
            src="/assets/plant-img/plant4.png"
            name="For Small Decs Ai Plat"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, totam sed porro impedit ipsum non corrupti alias maiores hic neque quaerat maxime. Obcaecati, facilis vel!"
          />
          <ProductLarge
            direction="flex-row-reverse"
            src="/assets/plant-img/plant2.png"
            name="For Fresh Decs Ai Plat"
          />
        </section>
        <section id="top-selling">
          <h2 className="title-2">Our Top Selling</h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            <Product
              name="Calathea plant"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              src="/assets/plant-img/plant2.png"
            />
            <Product name="Desk plant" src="/assets/plant-img/plant3.png" />
            <Product></Product>
            <Product name="Cal 378 plant" src="/assets/plant-img/plant4.png" />
            <Product description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab." />
          </div>
        </section>
        <section>
          <h2 className="title-2">Customer Review</h2>
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-8">
            <Review
              name="Maxn Raval"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero quisquam quia deleniti rem. Lasitatibus officia fuga deb?"
            />
            <Review
              name="venely k"
              description="adipisicing elit. Dicta velit reprehenderit aliquam non saepe magni obcaecati!"
            />
            <Review
              name="Lii thakur"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
            />
            <Review />
          </div>
        </section>
        <section>
          <h2 className="title-2">Our Best O2</h2>
          <Slider2 slides={slides2} />
        </section>
      </main>
      <Footer />
    </>
  );
}
export default App;
