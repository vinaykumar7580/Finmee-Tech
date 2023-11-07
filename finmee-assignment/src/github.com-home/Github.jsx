import style from "../Style/github.module.css";
import { FaAngleDown, FaSearch } from "react-icons/fa";
import poster from "../Components/galaxy.png";
import planet from "../Components/planet.png";
import star from "../Components/star.png";

function Github() {
  return (
    <div className={style.body}>
      {/* navbar which showing logo, button's and search box */}
      <div className={style.navbar}>
        {/* navbar left side box */}
        <div className={style.navbar_left}>
          {/* github logo */}
          <div style={{ width: "7%" }}>
            <img
              style={{ width: "100%" }}
              src="https://cdn-icons-png.flaticon.com/128/733/733553.png"
              alt="logo"
            />
          </div>
          {/* github pages with link */}
          <div className={style.navbar_left_box_pages}>
            <div className={style.navbar_left_box_pages_link}>
              <p>Product</p>
              <p>
                <FaAngleDown />
              </p>
            </div>
            <div className={style.navbar_left_box_pages_link}>
              <p>Solutions</p>
              <p>
                <FaAngleDown />
              </p>
            </div>
            <div className={style.navbar_left_box_pages_link}>
              <p>Open Source</p>
              <p>
                <FaAngleDown />
              </p>
            </div>
            <div>
              <p>Pricing</p>
            </div>
          </div>
        </div>
        {/* navbar right side box */}
        <div className={style.navbar_right}>
          {/* search box for searching anything */}
          <div className={style.navbar_right_search}>
            <div className={style.navbar_right_search_box}>
              <p style={{ color: "#697795" }}>
                <FaSearch />
              </p>
              <p>Search or jump to...</p>
            </div>
            <div className={style.navbar_right_search_box_right}>/</div>
          </div>
          {/* sign in button */}
          <div className={style.button_signin}>
            <p>Sign in</p>
          </div>
          {/* signup button */}
          <div className={style.button_signup}>
            <p>Sign up</p>
          </div>
        </div>
      </div>

      {/* this is main box which showing images for box placed after navbar */}
      <div className={style.main}>
        {/* left box of class main which shows poster image */}
        <div className={style.main_poster_box}>
          <img src={poster} alt="poster" />
          {/* vertical connect line connected to the moon */}
          <div className={style.connect_line}>
            <img
              src="https://github.githubassets.com/assets/lines-hero-6c09abf3dd42.svg"
              alt="connect-line"
            />
          </div>
          {/* line arrow placed after vertical connect line */}
          <div className={style.line_arrow}>
            <svg>
              <path d="M15.22 4.97a.75.75 0 0 1 1.06 0l6.5 6.5a.75.75 0 0 1 0 1.06l-6.5 6.5a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L21.19 12l-5.97-5.97a.75.75 0 0 1 0-1.06Zm-6.44 0a.75.75 0 0 1 0 1.06L2.81 12l5.97 5.97a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.5-6.5a.75.75 0 0 1 0-1.06l6.5-6.5a.75.75 0 0 1 1.06 0Z"></path>
            </svg>
          </div>
          {/* this is a vertically plain line placed after line arrow */}
          <div className={style.plain_line_middle}></div>
        </div>
        {/* right side box which shows star image */}
        <div className={style.main_image_box}>
          <img src={star} alt="image" />
          {/* right side box which shows planet image */}
          <div className={style.planet}>
            <img src={planet} alt="planet" />
          </div>
        </div>
      </div>

      {/* container which placed in center in page */}
      <div className={style.container}>
        <div className={style.container_box}>
          {/* first circle box placed in container box */}
          <div className={style.container_circle}>
            {/* football image of circle box */}
            <div>
              <img
                src="https://github.githubassets.com/assets/eyebrow-23@2x-563f292d9e30.png?width=44&format=webpll"
                alt=""
              />
            </div>
            <div>
              <h5>GitHub Universe: Dive in to AI, security, and DevEx</h5>
              <p>Get your tickets now to join us on Nov. 8-9.</p>
            </div>
            <div>{`->`}</div>
          </div>
          <div></div>
        </div>

        {/* class heading shows heading, paragraph text, input and button in the container box */}
        <div className={style.heading}>
          <h1>Let’s build from here</h1>
          <p>
            The AI-powered developer platform to build, scale, and deliver
            secure software.
          </p>
          <div className={style.input_box}>
            <div>
              <input type="text" placeholder="Email address" />
              <button>Sign up for Github</button>
            </div>
            <div>
              <h4>Start a free enterprise trial {`->`}</h4>
            </div>
          </div>
        </div>

        <p>
          Trusted by the world’s leading organizations <span>↘︎</span>
        </p>

        {/* this is last box in container class which shows multiple images in horizontally */}
        <div className={style.multi_images}>
          <div>
            <img
              src="https://github.githubassets.com/assets/stripe-e33f3c583b14.svg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://github.githubassets.com/assets/pinterest-20e7451b691f.svg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://github.githubassets.com/assets/kpmg-c249f20c5173.svg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://github.githubassets.com/assets/mercedes-fcf97d2d6ec4.svg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://github.githubassets.com/assets/pg-f1f19955c4e4.svg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://github.githubassets.com/assets/telus-df0c2109df99.svg"
              alt=""
            />
          </div>
        </div>
        <div></div>
      </div>

      {/* class section added height and background color after main class box */}
      <div className={style.section}></div>
    </div>
  );
}
export default Github;
