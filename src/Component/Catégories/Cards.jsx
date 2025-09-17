import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import card1 from "../../assets/images/card1.png"; // adapte tes imports
import card2 from "../../assets/images/card2.png";
import card3 from "../../assets/images/cardd3.png";
import card4 from "../../assets/images/card4.png";
import card5 from "../../assets/images/card5.png";
import card6 from "../../assets/images/card6.png";
import Button from "../Utilitaires/Button";

const Cards = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);

  const cardData = [
    { id: 1, img: card1, title: t("cards.express.title"), content: t("cards.express.content"), color: "bg-gradient-to-r from-sky-600 to-blue-800" },
    { id: 2, img: card2, title: t("cards.auto.title"), content: t("cards.auto.content"), color: "bg-gradient-to-r from-orange-300 to-yellow-400" },
    { id: 3, img: card3, title: t("cards.personal.title"), content: t("cards.personal.content"), color: "bg-gradient-to-r from-teal-500 to-emerald-600" },
    { id: 4, img: card4, title: t("cards.works.title"), content: t("cards.works.content"), color: "bg-gradient-to-r from-red-400 to-orange-300" },
    { id: 5, img: card5, title: t("cards.revolving.title"), content: t("cards.revolving.content"), color: "bg-gradient-to-r from-green-400 to-emerald-600" },
    { id: 6, img: card6, title: t("cards.consolidation.title"), content: t("cards.consolidation.content"), color: "bg-gradient-to-r from-purple-600 to-indigo-700" }
  ];

  // Carrousel automatique
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % cardData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [cardData.length]);

  return (
    <div className="bg-gray-200">
      {/* Carrousel mobile */}
      <div className="sm:block md:hidden lg:hidden px-4 py-10 max-w-md mx-auto relative">
        <div className="flex justify-center">
          <div className={`${cardData[current].color} rounded-4xl shadow-md p-6 flex flex-col items-center w-full`}>
            <img src={cardData[current].img} alt={cardData[current].title} className="w-60 h-auto mb-4" />
            <h2 className="text-2xl text-white font-bold font-sans mb-2">{cardData[current].title}</h2>
            <p className="text-white text-center mb-4">{cardData[current].content}</p>
            <Button label={t("cards.button")} />
          </div>
        </div>
        {/* Indicateurs */}
        <div className="flex justify-center mt-4 gap-2">
          {cardData.map((_, idx) => (
            <span key={idx} className={`w-2 h-2 rounded-full ${idx === current ? "bg-blue-600" : "bg-gray-400"}`} />
          ))}
        </div>
      </div>

      {/* Grille desktop */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 px-20 py-10 max-w-7xl mx-auto">
        {cardData.map((card) => (
          <div key={card.id} className={`${card.color} rounded-4xl shadow-md p-6 flex flex-col items-center`}>
            <img src={card.img} alt={card.title} className="w-60 h-auto mb-4" />
            <h2 className="text-2xl text-white font-bold font-sans mb-2">{card.title}</h2>
            <p className="text-white text-center mb-4">{card.content}</p>
            <Button label={t("cards.button")} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
