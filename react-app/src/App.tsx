export default function App() {
  return (
    <>
      <div className="hero">
        <div className="hero_bg"></div>

        <nav className="hero_nav">
          <div className="hero_nav_logo">
            <h1>
              JAPAN ESCAPES <br />
              <span>JOURNEYS BEYOND ORDINARY</span>
            </h1>
          </div>
          <div className="hero_nav_links">
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
            <button className="btn_main">
              Book Now
              <svg viewBox="0 0 24 24" width="18" height="18">
                <path d="M18,12h0a2,2,0,0,0-.59-1.4l-4.29-4.3a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42L15,11H5a1,1,0,0,0,0,2H15l-3.29,3.29a1,1,0,0,0,1.41,1.42l4.29-4.3A2,2,0,0,0,18,12Z" />
              </svg>
            </button>
          </div>
        </nav>

        <div className="hero_overlay">
          <div className="hero_overlay_content">
            <div className="grid_el_1">
              <h3>TIMELESS PLACES. MEANINGFUL JOURNEYS.</h3>
            </div>

            <div className="grid_el_2">
              <h2>
                EXPLORE <br />
                JAPAN
              </h2>
            </div>

            <div className="grid_el_3">
              <p>CULTURE</p>
              <p>PEOPLE</p>
              <p>PLACES</p>
              <p>A DEEPER YOU</p>
            </div>
          </div>
        </div>

        <div className="hero_content">
          <div className="hero_slider">
            <ul className="hero_slider_ul">
              <li className="hero_slide">
                <img src="/bamboo_forest_4k.jpg" alt="Slide 1" />
                <div className="hero_slide_content">
                  <h2>Kyoto Bamboo Forest</h2>
                  <p>Experience the serene beauty of Japan's iconic bamboo groves.</p>
                </div>
              </li>

              <li className="hero_slide">
                <img src="/mount_fuji_4k.jpg" alt="Slide 2" />
                <div className="hero_slide_content">
                  <h2>Shizuoka Mount Fuji</h2>
                  <p>Marvel at the majestic beauty of Japan's iconic mountain.</p>
                </div>
              </li>

              <li className="hero_slide">
                <img src="/kinkakuji_4k.jpg" alt="Slide 3" />
                <div className="hero_slide_content">
                  <h2>Kyoto Kinkaku-ji</h2>
                  <p>Discover the golden splendor of Kyoto's famous Zen temple.</p>
                </div>
              </li>

              <li className="hero_slide">
                <img src="/fushimi_inari_4k.jpg" alt="Slide 4" />
                <div className="hero_slide_content">
                  <h2>Kyoto Fushimi Inari Taisha</h2>
                  <p>Explore the iconic torii gates of Kyoto's famous Shinto shrine.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="hero_cta">
            <h4>A JOURNEY THROUGH A BILLION STORIES</h4>
            <button className="btn_main">
              Plan Your Trip
              <svg viewBox="0 0 24 24" width="18" height="18">
                <path d="M18,12h0a2,2,0,0,0-.59-1.4l-4.29-4.3a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42L15,11H5a1,1,0,0,0,0,2H15l-3.29,3.29a1,1,0,0,0,1.41,1.42l4.29-4.3A2,2,0,0,0,18,12Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="about_section">
        <div className="about_section_left">
          <h3>OUR STORY</h3>
          <h2>
            ABOUT <br />
            THE TOUR
          </h2>
          <p>
            Join us on an unforgettable journey through Japan, exploring its rich culture, stunning landscapes, and vibrant cities. Our tour is designed to provide an immersive
            experience, allowing you to connect with the essence of this beautiful country.
          </p>
          <ul className="about_features">
            <li>
              <svg viewBox="0 0 24 24" width="32px" height="32px">
                <path d="M12.5,2.025V.5c0-.276-.224-.5-.5-.5s-.5,.224-.5,.5v1.525C5.667,2.289,1,7.103,1,13c0,6.065,4.935,11,11,11s11-4.935,11-11c0-5.897-4.667-10.711-10.5-10.975Zm0,20.949v-1.475c0-.276-.224-.5-.5-.5s-.5,.224-.5,.5v1.475c-5.114-.255-9.22-4.361-9.475-9.475h1.475c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5h-1.475C2.28,7.385,6.386,3.28,11.5,3.025v1.475c0,.276,.224,.5,.5,.5s.5-.224,.5-.5v-1.475c5.114,.255,9.22,4.36,9.475,9.475h-1.475c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h1.475c-.255,5.114-4.361,9.22-9.475,9.475Zm.5-9.975c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Zm2.191-1.266c-.339-.884-1.041-1.585-1.882-1.906l-5.519-2.741c-.486-.185-1.036-.068-1.404,.299-.368,.368-.485,.92-.28,1.448l2.702,5.432c.34,.884,1.041,1.586,1.882,1.907l5.517,2.738c.151,.06,.312,.089,.475,.089,.353,0,.683-.137,.932-.386,.368-.368,.485-.921,.279-1.449l-2.701-5.431Zm1.715,6.173c-.08,.08-.255,.09-.293,.089-.003,0-.005,0-.003,0l-5.518-2.739c-.62-.238-1.112-.73-1.369-1.395l-2.702-5.432c-.045-.117-.017-.25,.072-.338,.088-.088,.223-.115,.296-.091l5.518,2.741c.621,.238,1.113,.73,1.37,1.394l2.701,5.431c.045,.117,.017,.251-.072,.34Z" />
              </svg>
              <p>
                Curated
                <br />
                Itineraries
              </p>
            </li>
            <li>
              <svg viewBox="0 0 24 24" width="32px" height="32px">
                <path d="m21 10c0 2.143-.857 3-3 3s-3-.857-3-3 .857-3 3-3 3 .857 3 3zm-9-9c-2.143 0-3 .857-3 3s.857 3 3 3 3-.857 3-3-.857-3-3-3zm10.996 17.786c-.066-2.222-.78-3.771-2.233-4.542-.305-.162-.686-.085-.903.184-.644.796-1.267 1.487-1.872 2.072-.613-.59-1.236-1.282-1.866-2.061-.218-.27-.6-.347-.906-.183-1.438.775-2.144 2.318-2.211 4.535l-.004 3.188c-.005.269.098.529.286.721s.445.3.714.3h8c.269 0 .526-.108.714-.3s.291-.452.286-.721l-.004-3.193zm-16.996-11.765c-2.143 0-3 .857-3 3s.857 3 3 3 3-.857 3-3-.857-3-3-3zm4.996 11.786c-.066-2.222-.78-3.771-2.233-4.542-.305-.162-.686-.085-.903.184-.644.796-1.267 1.487-1.872 2.072-.613-.59-1.236-1.282-1.866-2.061-.218-.27-.6-.347-.906-.183-1.438.775-2.144 2.318-2.211 4.535l-.004 3.188c-.005.269.098.529.286.721s.445.3.714.3h7.999c.269 0 .526-.108.714-.3s.291-.452.286-.721z" />
              </svg>
              <p>
                Expert
                <br />
                Guides
              </p>
            </li>
            <li>
              <svg viewBox="0 0 24 24" width="32px" height="32px">
                <path d="M18.581,2.14,12.316.051a1,1,0,0,0-.632,0L5.419,2.14A4.993,4.993,0,0,0,2,6.883V12c0,7.563,9.2,11.74,9.594,11.914a1,1,0,0,0,.812,0C12.8,23.74,22,19.563,22,12V6.883A4.993,4.993,0,0,0,18.581,2.14ZM20,12c0,5.455-6.319,9.033-8,9.889-1.683-.853-8-4.42-8-9.889V6.883A3,3,0,0,1,6.052,4.037L12,2.054l5.948,1.983A3,3,0,0,1,20,6.883Z" />
                <path d="M15.3,8.3,11.112,12.5,8.868,10.16a1,1,0,1,0-1.441,1.386l2.306,2.4a1.872,1.872,0,0,0,1.345.6h.033a1.873,1.873,0,0,0,1.335-.553l4.272-4.272A1,1,0,0,0,15.3,8.3Z" />
              </svg>
              <p>
                Safe &<br />
                Hassle-Free
              </p>
            </li>
            <li>
              <svg viewBox="0 0 24 24" width="32px" height="32px">
                <g>
                  <path d="M17.5.917a6.4,6.4,0,0,0-5.5,3.3A6.4,6.4,0,0,0,6.5.917,6.8,6.8,0,0,0,0,7.967c0,6.775,10.956,14.6,11.422,14.932l.578.409.578-.409C13.044,22.569,24,14.742,24,7.967A6.8,6.8,0,0,0,17.5.917ZM12,20.846c-3.253-2.43-10-8.4-10-12.879a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,7.967h2a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,7.967C22,12.448,15.253,18.416,12,20.846Z" />
                </g>
              </svg>
              <p>
                Authentic
                <br />
                Experiences
              </p>
            </li>
          </ul>
        </div>

        <div className="about_section_right">
          <blockquote>
            “Different landscapes.
            <br />
            One incredible Japan.”
          </blockquote>
        </div>
      </div>

      <section className="travel_destinations"></section>
    </>
  );
}
