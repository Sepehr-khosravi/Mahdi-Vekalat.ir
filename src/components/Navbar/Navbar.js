import { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/icon web2.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar__inner">
          <a href="#home" className="navbar__logo" onClick={closeMenu}>
            <img
              src={logo}
              alt="مهدی فیروزروستا"
              className="navbar__logo-image"
            />
          </a>

          {/* Desktop navigation */}
          <div className="navbar__links">
            <a href="#home">خانه</a>
            <a href="#services">خدمات</a>
            <a href="#biography">بیوگرافی</a>
            <a href="#about">درباره من</a>
          </div>

          <div className="navbar__actions">
            <a
              href="https://wa.me/989361449908"
              target="_blank"
              rel="noreferrer"
              className="navbar__cta"
            >
              <span>شروع همکاری</span>
              <span className="navbar__cta-arrow">↗</span>
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              className={`navbar__menu-button ${
                isMenuOpen ? "is-open" : ""
              }`}
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label={isMenuOpen ? "بستن منو" : "باز کردن منو"}
              aria-expanded={isMenuOpen}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`mobile-menu-overlay ${
          isMenuOpen ? "is-open" : ""
        }`}
        onClick={closeMenu}
        aria-hidden={!isMenuOpen}
      />

      <aside
        className={`mobile-drawer ${
          isMenuOpen ? "is-open" : ""
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="mobile-drawer__header">
          <span className="mobile-drawer__label">
            MENU
          </span>

          <button
            type="button"
            className="mobile-drawer__close"
            onClick={closeMenu}
            aria-label="بستن منو"
          >
            ×
          </button>
        </div>

        <nav className="mobile-drawer__nav">
          <a href="#home" onClick={closeMenu}>
            <span>01</span>
            خانه
          </a>

          <a href="#services" onClick={closeMenu}>
            <span>02</span>
            خدمات
          </a>

          <a href="#biography" onClick={closeMenu}>
            <span>03</span>
            بیوگرافی
          </a>

          <a href="#about" onClick={closeMenu}>
            <span>04</span>
            درباره من
          </a>
        </nav>

        <div className="mobile-drawer__footer">
          <span>برای شروع گفتگو</span>

          <a
            href="https://wa.me/989361449908"
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            ارتباط از طریق واتساپ
            <span>↗</span>
          </a>
        </div>
      </aside>
    </>
  );
}

export default Navbar;