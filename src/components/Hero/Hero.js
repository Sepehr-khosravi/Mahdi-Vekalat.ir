import "./Hero.css";
import profileImage from "../../assets/images/my profouls 1 (3).png";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__glow" />

      <div className="hero__inner">
        <div className="hero__content">
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-dot" />
            وکیل پایه یک دادگستری
          </div>

          <h1 className="hero__title">
            دفاع از حقوق شما،
            <span> با تجربه و تعهد.</span>
          </h1>

          <p className="hero__description">
            ارائه خدمات تخصصی حقوقی در حوزه‌های مدنی و کیفری،
            با تمرکز بر شناخت دقیق مسئله و ارائه راهکارهای حقوقی
            متناسب با شرایط شما.
          </p>

          <div className="hero__actions">
            <a
              href="https://wa.me/989361449908"
              target="_blank"
              rel="noreferrer"
              className="hero__primary"
            >
              <span>مشاوره و شروع همکاری</span>
              <span>↗</span>
            </a>

            <a href="#biography" className="hero__secondary">
              آشنایی بیشتر
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__visual-frame hero__image-skeleton">
            <img
              src={profileImage}
              alt="مهدی فیروزروستا، وکیل پایه یک دادگستری"
              onLoad={(event) => {
                event.currentTarget.classList.add("is-loaded");
              }}
            />
          </div>
        
          <div className="hero__experience">
            <strong>10+</strong>
            <span>سال تجربه حرفه‌ای</span>
          </div>
        </div>
      </div>

      <div className="hero__scroll">
        <span>اسکرول کنید</span>
        <span className="hero__scroll-line" />
      </div>
    </section>
  );
}

export default Hero;