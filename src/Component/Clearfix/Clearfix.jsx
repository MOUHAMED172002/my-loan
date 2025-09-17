import React, { useState, useEffect } from "react";
import Title from "../Utilitaires/Title";
import Step from "../Utilitaires/Step";
import MiniTitle from "../Utilitaires/MiniTitle";
import main1 from "../../assets/images/main1.webp";
import main2 from "../../assets/images/main2.webp";
import main3 from "../../assets/images/main3.webp";
import { useTranslation } from "react-i18next";

const Clearfix = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);

  const cards = t("clearfix.cards", { returnObjects: true });

  // Carrousel automatique
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % cards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <div>
      <div>
        <Title
          Title1={t("clearfix.title.part1")}
          ColorTitle={t("clearfix.title.highlight")}
          Title2={t("clearfix.title.part2")}
          paragraph={t("clearfix.title.paragraph")}
        />
        <Step />
      </div>

      {/* Carrousel mobile/tablette */}
      {cards && cards.length > 0 && (
        <div className="block md:hidden w-full max-w-md mx-auto py-2">
          <div className="relative flex flex-col items-center bg-gradient-to-b from-teal-200 to-white rounded-xl shadow-lg p-8 cursor-pointer transition hover:shadow-2xl overflow-hidden min-h-[320px]">
            <img
              src={[main1, main2, main3][current]}
              alt={cards[current]?.title || ""}
              className="w-full h-full object-contain inset-0"
            />
            <div className="relative z-10 flex flex-col items-center rounded-xl p-6 mt-5 w-full">
              <MiniTitle
                title={cards[current]?.title || ""}
                paragraphe={cards[current]?.paragraph || ""}
              />
            </div>
          </div>
        </div>
      )}

      {/* Grille desktop */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto py-2">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="relative flex flex-col items-center bg-gradient-to-b from-teal-200 to-white rounded-xl shadow-lg p-8 cursor-pointer transition hover:shadow-2xl overflow-hidden min-h-[200px]"
          >
            <img
              src={[main1, main2, main3][idx]}
              alt={card.title}
              className="w-full h-full object-contain inset-0"
            />
            <div className="relative z-10 flex flex-col items-center rounded-xl p-6 mt-5 w-full">
              <MiniTitle title={card.title} paragraphe={card.paragraph} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clearfix;
