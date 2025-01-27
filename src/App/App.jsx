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

function App() {
  const [name, setCount] = useState(0);
  const slides1 = [
    {
      category: "Trendy house plant",
      name: "Cathalea plant",
      url: "public/src/assets/plant-img/plant4.png",
    },
    {
      category: "Office plants",
      name: "Snake plant",
      url: "public/src/assets/plant-img/plant2.png",
    },
    {
      category: "Bestsellers",
      name: "Lorem ipsum",
      url: "public/src/assets/plant-img/plant3.png",
    },
  ];
  const slides2 = [
    {
      url: "public/src/assets/plant-img/plant5.png",
      name: "We Have Small And Great O2 Plant Collections",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      slideNr: "01",
    },
    {
      url: "public/src/assets/plant-img/plant6.png",
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
            <h1 id="title-1">Breath Natureal</h1>
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
                <img src="public/src/assets/play-icon.svg" alt="play" />
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
            src="https://s3-alpha-sig.figma.com/img/b483/12db/ddc890f7f35ef3964ae1e7900b89782c?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iw9u3feV6MgmwuYAJHI9q9E9eySYsqZLMi4bFEf0kJX6tkm3hhSN35J6aJfpdCLRYKZE1XPVKkUm6zRSR8khUwFBsYat2g5KTwnVT~4gAMdo224Zmbo26nZuZc69zyMgVS4-qtf~9hknbeR~cnrYB28a7KZY8u9DgPbt9s4-KExZA17K-jxA10V3aNsMq4Ff-j618Svb5t-T6CXb5aOmRSdL6TWRqDuivsaxkednJbsIP08TXRT5VP8jbT8D0guLMZXgH9Rde28EbBCElwaNyv5XlGaCgFikwblOw~9X8vrA~WO155-9IJd1qBgtK23SkROEKQH9qrePgBJexbfk6w__"
            name="For Small Decs Ai Plat"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, totam sed porro impedit ipsum non corrupti alias maiores hic neque quaerat maxime. Obcaecati, facilis vel!"
          />
          <ProductLarge
            direction="flex-row-reverse"
            src="https://s3-alpha-sig.figma.com/img/95e7/2828/2f4fb901ee2edc80783c2fbd7df490c2?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eQInvG0Ob2ORKGM4-OLRhD~3KamBQSY8pOhsfKdJrlQEQVitVjBZ6QWG7WObrGH-6HY0xF9JPMzjxDc0Pbe~gI6--v7yv5W-W-xa9pJKToKgJ4rgOOrYDS5kxOoJgFMjQ7-lVcaOt2rgMAqjipKt1YpqlJC~qk~IfvBBhXOZn2IRHeuzkkizj0FSZMnIX4J2znV0nS12F95mTyJeGJr2R~yJw8XWWpFHdJ4dEWR3kXqRMN9DsOW4-KXNAhqOqcRNfXlNV~TQN5NxH798JRu9WRct96KbupFEQK8nJdfQYUMxinFOYcmqIiIQKxLUF9PLmhHJd-XLD5djHNs81WdUMg__"
            name="For Fresh Decs Ai Plat"
          />
        </section>
        <section id="top-selling">
          <h2 className="title-2">Our Top Selling</h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            <Product
              name="Calathea plant"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              src="public/src/assets/plant-img/plant2.png"
            />
            <Product
              name="Desk plant"
              src="public/src/assets/plant-img/plant3.png"
            />
            <Product></Product>
            <Product
              name="Cal 378 plant"
              src="public/src/assets/plant-img/plant4.png"
            />
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
          <h2 className="title-2">Our Best o2</h2>
          <Slider2 slides={slides2} />
        </section>
      </main>
      <footer className="py-16 mt-20 bg-stone-400 bg-opacity-10">
        <div className="md:flex justify-between gap-8">
          <div className="md:w-2/5">
            <div id="logo" className="flex gap-3 w-fit">
              <img src="public/src/assets/plant-logo.svg" alt="plant-logo" />
              <h2 id="logo-name" className="font-black text-3xl m-auto">
                Planto.
              </h2>
            </div>
            <p className="font-text mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="">
            <h4 className="font-semibold my-5 text-2xl">Quick Links</h4>
            <li className="list-none font-text flex flex-col gap-2">
              <ul>Home</ul>
              <ul>Types of plants</ul>
              <ul>Contact</ul>
              <ul>Privacy</ul>
            </li>
          </div>
          <div className="lg:w-2/6 md:w-2/5">
            <h4 className="font-semibold my-5 text-2xl">For every update.</h4>
            <form
              action=""
              className="border border-2 p-1 border-gray-200 rounded-md flex justify-between"
            >
              <input
                type="text"
                placeholder="Enter Email"
                className="border-none bg-transparent p-2 outline-none text-lg"
              />
              <input
                type="submit"
                value="SUBSCRIBE"
                name="subscribe"
                className="font-text font-bold rounded-sm p-2 bg-gray-200 font text-zinc-900"
              />
            </form>
          </div>
        </div>
        <div className="flex justify-between mt-10">
          <div className="flex gap-6">
            <a href="#" className="font-semibold cursor-pointer">
              FB
            </a>
            <a href="#" className="font-semibold cursor-pointer">
              TW
            </a>
            <a href="#" className="font-semibold cursor-pointer">
              LI
            </a>
          </div>
          <p>
            planto <span>&copy;</span> all rights reserve
          </p>
        </div>
      </footer>
    </>
  );
}
export default App;
