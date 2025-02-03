function Footer() {
  return (
    <footer className="py-16 mt-20 bg-stone-400 bg-opacity-10">
      <div className="md:flex justify-between gap-8">
        <div className="md:w-2/5">
          <div id="logo" className="flex gap-3 w-fit">
            <img src="/assets/plant-logo.svg" alt="plant-logo" />
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
            <ul>
              <a href="">Home</a>
            </ul>
            <ul>
              <a href="">Types of plants</a>
            </ul>
            <ul>
              <a href="">Contact</a>
            </ul>
            <ul>
              <a href="">Privacy</a>
            </ul>
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
              className="font-text font-bold cursor-pointer rounded-sm p-2 bg-gray-200 font text-zinc-900 hover:bg-gray-300"
            />
          </form>
        </div>
      </div>
      <div className="flex justify-between mt-10">
        <div className="flex gap-6">
          <a href="#" className="font-semibold]">
            FB
          </a>
          <a href="#" className="font-semibold">
            TW
          </a>
          <a href="#" className="font-semibold">
            LI
          </a>
        </div>
        <p>
          planto <span>&copy;</span> all rights reserve
        </p>
      </div>
    </footer>
  );
}
export default Footer;
