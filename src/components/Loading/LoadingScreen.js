import "./LoadingScreen.css";
import logo from "../../assets/images/icon web2.png";

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="loading-screen__content">
        <div className="loading-screen__logo">
          <img
            src={logo}
            alt="مهدی فیروزروستا"
          />
        </div>

        <div className="loading-screen__name">
          <strong>مهدی فیروزروستا</strong>
          <span>وکیل پایه یک دادگستری</span>
        </div>

        <div className="loading-screen__line">
          <span />
        </div>

        <span className="loading-screen__text">
          در حال بارگذاری
        </span>
      </div>
    </div>
  );
}

export default LoadingScreen;