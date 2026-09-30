import "./Biography.css";
import profileImage from "../../assets/images/profile-secondary.webp";

function Biography() {
  return (
    <section id="biography" className="biography">
      <div className="biography__inner">
        <div className="biography__visual">
          <div className="biography__image-frame biography__image-skeleton">
            <img
              src={profileImage}
              alt="مهدی فیروزروستا"
              onLoad={(event) => {
                event.currentTarget.classList.add("is-loaded");
              }}
            />
          </div>

          <div className="biography__year">
            <span>تجربه</span>
            <strong>10+</strong>
            <span>سال فعالیت حرفه‌ای</span>
          </div>
        </div>

        <div className="biography__content">
          <div className="section-heading__label">
            درباره وکیل
          </div>

          <h2>
            تجربه حقوقی،
            <span> در کنار نگاه دقیق به پرونده.</span>
          </h2>

          <p className="biography__lead">
            مهدی فیروزروستا، وکیل پایه یک دادگستری، با بیش از
            ۱۰ سال تجربه حرفه‌ای در زمینه ارائه خدمات حقوقی و
            پیگیری پرونده‌های موکلان فعالیت می‌کند.
          </p>

          <p>
            در هر پرونده، شناخت دقیق مسئله و بررسی همه جوانب
            حقوقی اهمیت زیادی دارد. رویکرد من بر پایه بررسی
            جزئیات، ارتباط شفاف با موکل و انتخاب مسیر مناسب
            برای پیگیری پرونده است.
          </p>

          <div className="biography__points">
            <div>
              <span>01</span>
              <p>بررسی دقیق و همه‌جانبه پرونده</p>
            </div>

            <div>
              <span>02</span>
              <p>ارائه راهکار متناسب با شرایط موکل</p>
            </div>

            <div>
              <span>03</span>
              <p>پیگیری منظم مراحل پرونده</p>
            </div>
          </div>

          <a href="#about" className="biography__link">
            آشنایی بیشتر با من
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Biography;