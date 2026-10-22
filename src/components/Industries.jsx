import React from "react";
import "./Industries.css";

const brands = [
  { name: "Savitri Group", logo: "/sps.jpeg" },
  { name: "Kamaladevi Rice Industry", logo: "/kamaladevi.jpeg" },
  { name: "Surya Teja", logo: "/suriyaa.jpg" },
  { name: "PSA Krishna", logo: "/psa.jpeg" },
  { name: "Maharishi", logo: "/maharishi.jpeg" },
  { name: "Valluvar Brand", logo: "/valluvar.jpeg" },
  { name: "Sree MK Nawaab", logo: "/nawaab.jpeg" },
  { name: "Muthu SS Kangayam", logo: "/winss.jpeg" },
  { name: "Suriya Brand Rice", logo: "/suriya.jpeg" },
];

/* Two identical groups scroll left; the second is hidden from assistive tech. */
const Group = ({ hidden = false }) => (
  <ul className="brands__group" aria-hidden={hidden || undefined}>
    {brands.map((brand) => (
      <li className="brands__tile" key={brand.name}>
        <img src={brand.logo} alt={hidden ? "" : brand.name} loading="lazy" />
      </li>
    ))}
  </ul>
);

const Industries = () => {
  return (
    <section className="brands" aria-label="Brands that trust Bling Reward">
      <p className="brands__title">Trusted by leading brands</p>

      <div className="brands__marquee">
        <div className="brands__track">
          <Group />
          <Group hidden />
        </div>
      </div>
    </section>
  );
};

export default Industries;
