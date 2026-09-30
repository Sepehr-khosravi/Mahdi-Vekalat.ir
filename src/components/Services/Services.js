import { services } from "../../data";
import ServiceCard from "./ServiceCard";
import "./Services.css";

function Services() {
  return (
    <section id="services" className="services">
      <div className="services__inner">
        <div className="section-heading">
          <div className="section-heading__label">
            خدمات حقوقی
          </div>

          <h2>
            راهکار حقوقی،
            <span> متناسب با مسئله شما.</span>
          </h2>

          <p>
            هر پرونده شرایط خاص خود را دارد. هدف، بررسی دقیق مسئله
            و انتخاب مسیر مناسب برای پیگیری حقوق شماست.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service) => (
            <ServiceCard
              key={service.number}
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;