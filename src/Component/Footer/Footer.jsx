import React, { useState } from "react";
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CountryFlag from "react-country-flag";

const LANGUAGES = [
  { code: "fr", label: "Français", country: "FR" },
  { code: "en", label: "English", country: "GB" },
  { code: "pt", label: "Português", country: "PT" },
  { code: "de", label: "Deutsch", country: "DE" },
  { code: "es", label: "Español", country: "ES" },
  { code: "it", label: "Italiano", country: "IT" }
];

const Footer = () => {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(t("footer.newsletter.success"));
    setEmail("");
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <footer className="bg-gray-900 text-white pt-10 pb-4 px-4 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & réseaux */}
        <div>
          <h2 className="text-2xl font-bold mb-2">{t("footer.company.name")}</h2>
          <p className="text-gray-400 mb-4">{t("footer.company.slogan")}</p>
          <div className="flex gap-3 text-2xl mb-4">
            <a href="#" aria-label="Facebook" className="hover:text-teal-400"><AiFillFacebook /></a>
            <a href="#" aria-label="Instagram" className="hover:text-teal-400"><AiFillInstagram /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-teal-400"><AiFillLinkedin /></a>
            <a href="#" aria-label="Twitter" className="hover:text-teal-400"><AiFillTwitterCircle /></a>
          </div>
          <a href="#simulateur" className="inline-block bg-amber-300 text-black font-bold rounded-full px-6 py-2 mt-2 hover:bg-amber-400 transition">
            {t("footer.cta")}
          </a>
        </div>

        {/* Navbar links */}
        <div>
          <h3 className="font-bold mb-2">{t("footer.navbar.title")}</h3>
          <ul className="space-y-1 text-gray-300">
            <li><Link to="/credit-express" className="hover:text-teal-400">{t("footer.navbar.links.creditExpress")}</Link></li>
            <li><Link to="/pret-personnel" className="hover:text-teal-400">{t("footer.navbar.links.personalLoan")}</Link></li>
            <li><Link to="/vos-projet" className="hover:text-teal-400">{t("footer.navbar.links.projects")}</Link></li>
            <li><Link to="/credit-express/rachat-credit" className="hover:text-teal-400">{t("footer.navbar.links.creditBuyback")}</Link></li>
            <li><Link to="/pret-personnel/credit-auto" className="hover:text-teal-400">{t("footer.navbar.links.carLoan")}</Link></li>
          </ul>
        </div>

        {/* À propos */}
        <div>
          <h3 className="font-bold mb-2">{t("footer.company.name")}</h3>
          <ul className="space-y-1 text-gray-300">
            {t("footer.company.about", { returnObjects: true }).map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Langue & Newsletter */}
        <div>
          <h3 className="font-bold mb-2">{t("footer.language")}</h3>
          <div className="flex items-center gap-2 mb-4">
            <select
              value={i18n.language}
              onChange={e => i18n.changeLanguage(e.target.value)}
              className="rounded px-2 py-1 border border-gray-300 bg-white text-black"
            >
              {LANGUAGES.map(lang => (
                <option key={lang.code} value={lang.code}>{lang.label}</option>
              ))}
            </select>
            <CountryFlag
              countryCode={LANGUAGES.find(l => l.code === i18n.language)?.country || "FR"}
              svg
              style={{ width: "2em", height: "2em", borderRadius: "50%" }}
            />
          </div>

          <h3 className="font-bold mb-2">{t("footer.newsletter.title")}</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input
              type="email"
              required
              placeholder={t("footer.newsletter.placeholder")}
              className="rounded px-3 py-2 text-black"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <button type="submit" className="bg-teal-500 hover:bg-teal-400 text-white font-bold rounded py-2 transition">
              {t("footer.newsletter.button")}
            </button>
            {message && <span className="text-green-400 text-sm">{message}</span>}
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} MyLoan. {t("footer.copyright")}
      </div>
    </footer>
  );
};

export default Footer;
