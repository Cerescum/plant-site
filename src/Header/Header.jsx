import "./Header.css";
import logo from "/assets/plant-logo.svg";
function Header() {
  return (
    <header className="z-10 fixed w-full py-4 flex justify-between align-middle bg-dark bg-opacity-40 backdrop-blur-md">
      <div id="logo" className="flex gap-3">
        <img src={logo} alt="planto-logo" />
        <h2 id="logo-name" className="font-black text-3xl m-auto">
          Planto.
        </h2>
      </div>
      <ul
        id="menu"
        className="lg:flex hidden gap-x-12 text-lg list-none px-24 mx-0 my-auto"
      >
        <li>Home</li>
        <li>
          <label htmlFor="burger-menu" className="flex align-middle gap-1">
            Plants Type
            <img src="public\assets\arrow-small.svg" alt="arrow" />
          </label>
          {/* <select name="burger-menu">
            <option value="house-plants">House plants</option>
            <option value="hanging-plants">Hanging plants</option>
            <option value="garden-plants">Garden plants</option>
          </select> */}
        </li>
        <li>More</li>
        <li>Contact</li>
      </ul>
      <div className="flex gap-14">
        <img
          className="icon-header"
          src="public/assets/search-icon.svg"
          alt="search"
        />
        <img
          className="icon-header"
          src="public/assets/cart-icon.svg"
          alt="cart"
        />
        <img
          className="icon-header lg:hidden"
          src="public/assets/menu-icon.svg"
          alt="menu"
        />
      </div>
    </header>
  );
}
export default Header;
