import React from "react";
import "./Industries.css";

const brands = [
  { name: "Digisol", logo: "/digisol.png" },
  { name: "GBR TMT", logo: "/gbr.png" },
  { name: "Essel", logo: "/essel.avif" },
  { name: "DreamWall", logo: "/dreamwall.png" },
  { name: "Taralac", logo: "/taralac.png" },
  { name: "Valli Paints", logo: "/valli.jpeg" },
  { name: "Kolors", logo: "/kolors.svg" },
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
