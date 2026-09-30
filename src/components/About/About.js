import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about__inner">
        <div className="about__heading">
          <div className="section-heading__label">
            ارتباط با من
          </div>

          <h2>
            برای مسئله حقوقی
            <span> خود، قدم اول را بردارید.</span>
          </h2>
        </div>

        <div className="about__content">
          <p>
            اگر برای پرونده یا مسئله حقوقی خود نیاز به بررسی و
            مشاوره دارید، می‌توانید برای شروع گفتگو و دریافت
            اطلاعات بیشتر از طریق واتساپ در ارتباط باشید.
          </p>

          <a
            href="https://wa.me/989361449908"
            target="_blank"
            rel="noreferrer"
            className="about__contact"
          >
            <span>ارتباط از طریق واتساپ</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;