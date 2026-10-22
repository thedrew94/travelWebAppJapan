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

      <section className="travel_destinations">
        <div className="travel_destinations_left">
          <h3>THE JOURNEY</h3>
          <h2>
            TAILORED TOURS <br />
            INCREDIBLE DESTINATIONS
          </h2>
          <p>
            From bustling cities to serene landscapes, our tailored tours offer authentic experiences that showcase the best of Japan. Whether you're seeking cultural immersion,
            culinary delights, or breathtaking scenery, our tours are crafted to create unforgettable memories.
          </p>

          <button className="btn_main">
            View Detailed Itinerary
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path d="M18,12h0a2,2,0,0,0-.59-1.4l-4.29-4.3a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42L15,11H5a1,1,0,0,0,0,2H15l-3.29,3.29a1,1,0,0,0,1.41,1.42l4.29-4.3A2,2,0,0,0,18,12Z" />
            </svg>
          </button>
        </div>
        <div className="travel_destinations_right">
          <ul className="travel_destinations_list">
            <li className="travel_destinations_item">
              <span className="travel_destinations_marker"></span>
              <div>
                <h4>Destination Name</h4>
                <p>Brief description of the destination.</p>
              </div>
              <div className="travel_destinations_image">
                <img src="/japan_kyoto_2k.jpg" alt="Travel Destination" />
              </div>
            </li>

            <li className="travel_destinations_item">
              <span className="travel_destinations_marker"></span>
              <div>
                <h4>Destination Name</h4>
                <p>Brief description of the destination.</p>
              </div>
              <div className="travel_destinations_image">
                <img src="/japan_tokyo_2k.jpg" alt="Travel Destination" />
              </div>
            </li>

            <li className="travel_destinations_item">
              <span className="travel_destinations_marker"></span>
              <div>
                <h4>Destination Name</h4>
                <p>Brief description of the destination.</p>
              </div>
              <div className="travel_destinations_image">
                <img src="/japan_kyoto_2k.jpg" alt="Travel Destination" />
              </div>
            </li>

            <li className="travel_destinations_item">
              <span className="travel_destinations_marker"></span>
              <div>
                <h4>Destination Name</h4>
                <p>Brief description of the destination.</p>
              </div>
              <div className="travel_destinations_image">
                <img src="/japan_tokyo_2k.jpg" alt="Travel Destination" />
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="travel_services">
        <div className="travel_services_left">
          <h3>TRAVEL SERVICES</h3>
          <h2>PRIVATE GUIDE</h2>
        </div>

        <div className="travel_services_right">
          <p>
            Enjoy a personalized journey with a private guide who accompanies you around the city, sharing local insights and cultural highlights. From tailored itinerary and
            transportation planning to restaurant recommendations, museum visits, and authentic local experiences, every detail is designed to make your trip seamless and
            memorable.
          </p>
        </div>

        <ul className="travel_services_list">
          <li>
            <svg viewBox="0 0 24 24" width="36" height="36">
              <path d="m21 10c0 2.143-.857 3-3 3s-3-.857-3-3 .857-3 3-3 3 .857 3 3zm-9-9c-2.143 0-3 .857-3 3s.857 3 3 3 3-.857 3-3-.857-3-3-3zm10.996 17.786c-.066-2.222-.78-3.771-2.233-4.542-.305-.162-.686-.085-.903.184-.644.796-1.267 1.487-1.872 2.072-.613-.59-1.236-1.282-1.866-2.061-.218-.27-.6-.347-.906-.183-1.438.775-2.144 2.318-2.211 4.535l-.004 3.188c-.005.269.098.529.286.721s.445.3.714.3h8c.269 0 .526-.108.714-.3s.291-.452.286-.721l-.004-3.193zm-16.996-11.765c-2.143 0-3 .857-3 3s.857 3 3 3 3-.857 3-3-.857-3-3-3zm4.996 11.786c-.066-2.222-.78-3.771-2.233-4.542-.305-.162-.686-.085-.903.184-.644.796-1.267 1.487-1.872 2.072-.613-.59-1.236-1.282-1.866-2.061-.218-.27-.6-.347-.906-.183-1.438.775-2.144 2.318-2.211 4.535l-.004 3.188c-.005.269.098.529.286.721s.445.3.714.3h7.999c.269 0 .526-.108.714-.3s.291-.452.286-.721z" />
            </svg>
            <h6>Expert Guides</h6>
            <p>Personalized city tours with a private guide</p>
          </li>

          <li>
            <svg viewBox="0 0 24 24" width="36" height="36">
              <path d="M0,13V5c0-1.654,1.346-3,3-3H21c1.654,0,3,1.346,3,3V13h-3v-2c0-1.654-1.346-3-3-3h-4c-.771,0-1.468,.301-2,.78-.532-.48-1.229-.78-2-.78H6c-1.654,0-3,1.346-3,3v2H0Zm14-3c-.552,0-1,.449-1,1v2h6v-2c0-.551-.448-1-1-1h-4ZM0,15v7H2v-3H22v3h2v-7H0Zm6-5c-.551,0-1,.449-1,1v2h6v-2c0-.551-.449-1-1-1H6Z" />
            </svg>
            <h6>Accomodation</h6>
            <p>Accomodation arrangements for your stay</p>
          </li>

          <li>
            <svg viewBox="0 0 24 24" width="36" height="36">
              <path d="M22,10V4.229a2.987,2.987,0,0,0-1.821-2.76c-3.673-1.9-12.695-1.893-16.358,0A2.986,2.986,0,0,0,2,4.229V10H0v3a2,2,0,0,0,2,2v7H4v2H9V22h6v2h5V22h2V15a2,2,0,0,0,2-2V10ZM4,13V7H20v6Zm.6-9.688A19.013,19.013,0,0,1,12,2a19.018,19.018,0,0,1,7.4,1.311.99.99,0,0,1,.6.918V5H15V4H9V5H4V4.229A.989.989,0,0,1,4.6,3.312ZM4,20V15H6v1a1,1,0,0,0,2,0V15h8v1a1,1,0,0,0,2,0V15h2v5Z" />
            </svg>
            <h6>Transportation</h6>
            <p>Transportation arrangements for your trip</p>
          </li>

          <li>
            <svg viewBox="0 0 24 24" width="36" height="36">
              <path d="m23.173,2.968l.827-1.754-1.339-.928-.314.262c-1.124.937-2.55,1.453-4.013,1.453H5.666c-1.463,0-2.889-.516-4.013-1.453l-.316-.263-1.337.93.827,1.754c.655,1.528,1.776,2.718,3.173,3.398v2.634h-2v2h2v13h2v-13h12v13h2v-13h2v-2h-2v-2.634c1.397-.68,2.518-1.87,3.173-3.398ZM6,6.941c.259.031.519.059.787.059h4.213v2h-5v-2.059Zm12,2.059h-5v-2h4.213c.268,0,.528-.027.787-.059v2.059Z" />
            </svg>
            <h6>Authentic Experiences</h6>
            <p>Immersive local experiences and cultural activities</p>
          </li>

          <li>
            <svg viewBox="0 0 24 24" width="36px" height="36px">
              <path d="M18.581,2.14,12.316.051a1,1,0,0,0-.632,0L5.419,2.14A4.993,4.993,0,0,0,2,6.883V12c0,7.563,9.2,11.74,9.594,11.914a1,1,0,0,0,.812,0C12.8,23.74,22,19.563,22,12V6.883A4.993,4.993,0,0,0,18.581,2.14ZM20,12c0,5.455-6.319,9.033-8,9.889-1.683-.853-8-4.42-8-9.889V6.883A3,3,0,0,1,6.052,4.037L12,2.054l5.948,1.983A3,3,0,0,1,20,6.883Z" />
              <path d="M15.3,8.3,11.112,12.5,8.868,10.16a1,1,0,1,0-1.441,1.386l2.306,2.4a1.872,1.872,0,0,0,1.345.6h.033a1.873,1.873,0,0,0,1.335-.553l4.272-4.272A1,1,0,0,0,15.3,8.3Z" />
            </svg>
            <h6>Safe & Hassle-Free</h6>
            <p>Ensuring a safe and hassle-free travel experience</p>
          </li>
        </ul>
      </section>

      <section className="travel_services">
        <div className="travel_services_left">
          <h3>TRAVEL SERVICES</h3>
          <h2>CUSTOM ITINERARY</h2>
        </div>

        <div className="travel_services_right">
          <p>
            Plan your perfect trip with a custom itinerary that suits your preferences and schedule. We take care of all the details, from activities and sightseeing to dining and
            accommodations, ensuring a seamless and enjoyable travel experience.
          </p>
        </div>

        <ul className="travel_services_list">
          <li>
            <svg viewBox="0 0 24 24" width="36" height="36">
              <path d="M12.5,2.025V.5c0-.276-.224-.5-.5-.5s-.5,.224-.5,.5v1.525C5.667,2.289,1,7.103,1,13c0,6.065,4.935,11,11,11s11-4.935,11-11c0-5.897-4.667-10.711-10.5-10.975Zm0,20.949v-1.475c0-.276-.224-.5-.5-.5s-.5,.224-.5,.5v1.475c-5.114-.255-9.22-4.361-9.475-9.475h1.475c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5h-1.475C2.28,7.385,6.386,3.28,11.5,3.025v1.475c0,.276,.224,.5,.5,.5s.5-.224,.5-.5v-1.475c5.114,.255,9.22,4.36,9.475,9.475h-1.475c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h1.475c-.255,5.114-4.361,9.22-9.475,9.475Zm.5-9.975c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Zm2.191-1.266c-.339-.884-1.041-1.585-1.882-1.906l-5.519-2.741c-.486-.185-1.036-.068-1.404,.299-.368,.368-.485,.92-.28,1.448l2.702,5.432c.34,.884,1.041,1.586,1.882,1.907l5.517,2.738c.151,.06,.312,.089,.475,.089,.353,0,.683-.137,.932-.386,.368-.368,.485-.921,.279-1.449l-2.701-5.431Zm1.715,6.173c-.08,.08-.255,.09-.293,.089-.003,0-.005,0-.003,0l-5.518-2.739c-.62-.238-1.112-.73-1.369-1.395l-2.702-5.432c-.045-.117-.017-.25,.072-.338,.088-.088,.223-.115,.296-.091l5.518,2.741c.621,.238,1.113,.73,1.37,1.394l2.701,5.431c.045,.117,.017,.251-.072,.34Z" />
            </svg>
            <h6>Detailed Itinerary</h6>
            <p>Custom travel itinerary tailored to your preferences</p>
          </li>

          <li>
            <svg viewBox="0 0 24 24" width="36" height="36">
              <path d="M0,13V5c0-1.654,1.346-3,3-3H21c1.654,0,3,1.346,3,3V13h-3v-2c0-1.654-1.346-3-3-3h-4c-.771,0-1.468,.301-2,.78-.532-.48-1.229-.78-2-.78H6c-1.654,0-3,1.346-3,3v2H0Zm14-3c-.552,0-1,.449-1,1v2h6v-2c0-.551-.448-1-1-1h-4ZM0,15v7H2v-3H22v3h2v-7H0Zm6-5c-.551,0-1,.449-1,1v2h6v-2c0-.551-.449-1-1-1H6Z" />
            </svg>
            <h6>Accomodation</h6>
            <p>Accomodation arrangements for your stay</p>
          </li>

          <li>
            <svg viewBox="0 0 24 24" width="36" height="36">
              <path d="M22,10V4.229a2.987,2.987,0,0,0-1.821-2.76c-3.673-1.9-12.695-1.893-16.358,0A2.986,2.986,0,0,0,2,4.229V10H0v3a2,2,0,0,0,2,2v7H4v2H9V22h6v2h5V22h2V15a2,2,0,0,0,2-2V10ZM4,13V7H20v6Zm.6-9.688A19.013,19.013,0,0,1,12,2a19.018,19.018,0,0,1,7.4,1.311.99.99,0,0,1,.6.918V5H15V4H9V5H4V4.229A.989.989,0,0,1,4.6,3.312ZM4,20V15H6v1a1,1,0,0,0,2,0V15h8v1a1,1,0,0,0,2,0V15h2v5Z" />
            </svg>
            <h6>Transportation</h6>
            <p>Transportation arrangements for your trip</p>
          </li>

          <li>
            <svg viewBox="0 0 24 24" width="36" height="36">
              <path d="m23.173,2.968l.827-1.754-1.339-.928-.314.262c-1.124.937-2.55,1.453-4.013,1.453H5.666c-1.463,0-2.889-.516-4.013-1.453l-.316-.263-1.337.93.827,1.754c.655,1.528,1.776,2.718,3.173,3.398v2.634h-2v2h2v13h2v-13h12v13h2v-13h2v-2h-2v-2.634c1.397-.68,2.518-1.87,3.173-3.398ZM6,6.941c.259.031.519.059.787.059h4.213v2h-5v-2.059Zm12,2.059h-5v-2h4.213c.268,0,.528-.027.787-.059v2.059Z" />
            </svg>
            <h6>Authentic Experiences</h6>
            <p>Immersive local experiences and cultural activities</p>
          </li>

          <li>
            <svg viewBox="0 0 24 24" width="36px" height="36px">
              <path d="M18.581,2.14,12.316.051a1,1,0,0,0-.632,0L5.419,2.14A4.993,4.993,0,0,0,2,6.883V12c0,7.563,9.2,11.74,9.594,11.914a1,1,0,0,0,.812,0C12.8,23.74,22,19.563,22,12V6.883A4.993,4.993,0,0,0,18.581,2.14ZM20,12c0,5.455-6.319,9.033-8,9.889-1.683-.853-8-4.42-8-9.889V6.883A3,3,0,0,1,6.052,4.037L12,2.054l5.948,1.983A3,3,0,0,1,20,6.883Z" />
              <path d="M15.3,8.3,11.112,12.5,8.868,10.16a1,1,0,1,0-1.441,1.386l2.306,2.4a1.872,1.872,0,0,0,1.345.6h.033a1.873,1.873,0,0,0,1.335-.553l4.272-4.272A1,1,0,0,0,15.3,8.3Z" />
            </svg>
            <h6>Safe & Hassle-Free</h6>
            <p>Ensuring a safe and hassle-free travel experience</p>
          </li>
        </ul>
      </section>

      <section className="inquiry">
        <div className="inquiry_inner">
          <div className="inquiry_text">
            <h3>Let's Plan Your Journey</h3>
            <h2>
              Ready to <br />
              Explore Japan?
            </h2>
            <p>Tell us a little about your travel plans and we will get back to you with a personalized itinerary.</p>
          </div>

          <div className="inquiry_form_wrapper">
            <form className="inquiry_form">
              <fieldset>
                <legend>Contact Information</legend>

                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input type="text" id="name" name="name" placeholder="Your full name" autoComplete="name" />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input type="email" id="email" name="email" placeholder="you@example.com" autoComplete="email" required />
                </div>

                <div className="form-group">
                  <label htmlFor="origin">Country or Region of Origin *</label>
                  <select id="origin" name="origin" autoComplete="country-name" required>
                    <option value="">Select your country or region</option>
                    <option value="usa">United States</option>
                    <option value="canada">Canada</option>
                    <option value="australia">Australia</option>
                    <option value="eu">European Union (EU)</option>
                    <option value="non-eu-europe">Non-EU European country</option>
                    <option value="asia">Asia</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </fieldset>

              <fieldset>
                <legend>Travel Details</legend>

                <div className="form-group">
                  <label htmlFor="travel-date">Travel Days *</label>
                  <input type="number" id="travel-date" name="travel_date" min="1" required />
                </div>

                <div className="form-group">
                  <label htmlFor="travelers">Number of Travelers *</label>
                  <input type="number" id="travelers" name="travelers" min="1" max="50" step="1" value="1" required />
                </div>

                <div className="form-group">
                  <label htmlFor="guide">Would you prefer a personal guide? *</label>
                  <select id="guide" name="guide" required>
                    <option value="">Choose an option</option>
                    <option value="yes">Yes, I prefer a personal guide.</option>
                    <option value="no">No, I prefer to explore independently.</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="plans">Tell Us About Your Travel Plans</label>
                  <textarea id="plans" name="plans" rows={5} placeholder="Destinations, interests, activities, special requests..." maxLength={2000}></textarea>
                </div>
              </fieldset>

              <button type="submit" className="btn_main">
                Submit Travel Enquiry
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <path d="M18,12h0a2,2,0,0,0-.59-1.4l-4.29-4.3a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42L15,11H5a1,1,0,0,0,0,2H15l-3.29,3.29a1,1,0,0,0,1.41,1.42l4.29-4.3A2,2,0,0,0,18,12Z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* <footer>
        <small>&copy; 2024 Travel Web App Japan. All rights reserved.</small>
      </footer> */}
    </>
  );
}
