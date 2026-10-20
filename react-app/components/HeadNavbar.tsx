import MainButton from "./MainButton";

export default function HeadNavbar() {
  return (
    <nav>
      <div>Logo</div>
      <div>
        <ul>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Itinerary</a>
          </li>
          <li>
            <a href="/">Included</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>

      <div>
        <MainButton type="button" text="Book Now" />
        <button>Menu</button>
      </div>
    </nav>
  );
}
