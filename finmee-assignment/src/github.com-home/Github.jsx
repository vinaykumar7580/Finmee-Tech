import style from "../Style/github.module.css";

function Github() {
  return (
    <div className={style.body}>
      {/* navbar which showing logo, button's and search box */}
      <div className={style.navbar}>
        {/* navbar left side box */}
        <div className={style.navbar_left}>
            {/* github logo */}
          <div style={{width:"10%"}}>
            <img style={{width:"100%"}} src="https://cdn-icons-png.flaticon.com/128/733/733553.png" alt="logo" />
          </div>
          {/* github pages with link */}
          <div className={style.navbar_left_box_pages}>
            <div>
              <p>Product</p>
            </div>
            <div>
              <p>Solutions</p>
            </div>
            <div>
              <p>Open Source</p>
            </div>
            <div>
              <p>Pricing</p>
            </div>
          </div>
        </div>
        {/* navbar right side box */}
        <div className={style.navbar_right}>
          <div>Search</div>
          <div>
            <button>Sign in</button>
          </div>
          <div>
            <button>Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Github;
