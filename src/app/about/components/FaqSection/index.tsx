import React, { useState } from "react";

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(0);
    } else {
      setActiveIndex(index);
    }
  };

  const faqData = [
    {
      question: "Apa Goals King Expert ",
      answer: [
        "Menjadi lembaga bimbingan dan pelatihan terdepan di Indonesia dalam mengembangkan potensi dan bakat individu, kelompok, dan masyarakat untuk meraih keunggulan dalam berbagai bidang ilmu.",
        "#BelajarApaAjaBersamaAhlinya",
      ],
    },
    {
      question: "Apa itu King Expert?",
      answer: [
        "King Expert adalah lembaga profesional dan berpengalaman di bidang pengembangan talenta siswa yang memberikan program pelatihan dan kompetisi kepada siswa.",
      ],
    },
    {
      question: "Kenapa King Expert hadir?",
      answer: [
        "1. Menggali minat dan bakat siswa dalam berbagai macam talenta siswa",
        "2. Mengasah potensi talenta siswa dengan mempertemukan langsung siswa bersama tutor yang berpengalaman",
        "3. Membantu menyusun strategi belajar dan target siswa kedepannya",
      ],
    },
  ];

  return (
    <div className="flex flex-col space-y-4 px-20 mb-20">
      <h2 className="font-bold text-4xl font-serif text-center mb-10">
        <span className="text-mainOrange">FAQ</span>
      </h2>

      {faqData.map((item, index) => (
        <div key={index} className="border rounded-lg">
          <button
            className="flex justify-between w-full px-4 py-2 font-semibold text-left focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            <span>{item.question}</span>
            <span>{activeIndex === index ? "-" : "+"}</span>
          </button>
          {activeIndex === index &&
            item.answer.map((ans) => <div className="p-4">{ans}</div>)}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
