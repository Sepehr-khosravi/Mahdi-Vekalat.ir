import "./Footer.css";
import logo from "../../assets/images/icon web2.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <a href="#home" className="footer__logo">
            <img
              src={logo}
              alt="مهدی فیروزروستا"
              className="footer__logo-image"
            />

            <div className="footer__logo-info">
              <strong>مهدی فیروزروستا</strong>
              <small>وکیل پایه یک دادگستری</small>
            </div>
          </a>

          <p>
            ارائه خدمات تخصصی حقوقی با تمرکز بر شناخت دقیق
            مسئله و پیگیری حرفه‌ای پرونده.
          </p>
        </div>

        <div className="footer__links">
          <h4>ارتباط و لینک‌ها</h4>

          <a href="#home">خانه</a>
          <a href="#services">خدمات</a>
          <a href="#biography">بیوگرافی</a>
          <a href="#about">درباره من</a>

          <a
            href="https://wa.me/989361449908"
            target="_blank"
            rel="noreferrer"
          >
            واتساپ
          </a>

          <a
            href="https://web.telegram.org/k/#@vkmhdi"
            target="_blank"
            rel="noreferrer"
          >
            تلگرام
          </a>
        </div>

        <div className="footer__contact">
          <span>شروع گفتگو</span>

          <a
            href="https://wa.me/989361449908"
            target="_blank"
            rel="noreferrer"
          >
            واتساپ ↗
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} مهدی فیروزروستا</span>

        <span>
          ساخته شده توسط{" "}
          <strong className="footer__developer">
            سپهر خسروی
          </strong>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
