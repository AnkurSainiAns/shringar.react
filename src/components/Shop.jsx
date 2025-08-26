import { Link, Outlet } from "react-router-dom";

function Shop() {
  return (
    <div>
      <h1>Shop Page</h1>
      <nav>
        <ul>
          <li>
            <Link to="bangles">Bangles</Link>
          </li>
          <li>
            <Link to="earrings">Earrings</Link>
          </li>
          <li>
            <Link to="kaleera">Kaleera</Link>
          </li>
          <li>
            <Link to="manngtikka">Manng Tikka</Link>
          </li>
          <li>
            <Link to="necklaces">Necklaces</Link>
          </li>
          <li>
            <Link to="rings">Rings</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}

export default Shop;
