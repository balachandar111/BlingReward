import React from "react";
import { Tv, Trophy, Wallet, Gamepad2, Crown, Gift, Plane, UtensilsCrossed } from "lucide-react";
import Carousel from "./Carousel";
import "./HowItWorks.css";

const featuresData = [
  {
    title: "OTT Subscriptions",
    desc: "Up to 50% Off",
    icon: Tv,
  },
  {
    title: "Cricket Tickets",
    desc: "IPL & International",
    icon: Trophy,
  },
  {
    title: "Cashback",
    desc: "Instant Bank Transfer",
    icon: Wallet,
  },
  {
    title: "Gaming Vouchers",
    desc: "Play More, Win More",
    icon: Gamepad2,
  },
  {
    title: "Membership Plans",
    desc: "Exclusive Access",
    icon: Crown,
  },
  {
    title: "Gift Vouchers",
    desc: "Amazon, Flipkart & More",
    icon: Gift,
  },
  {
    title: "Travel Offers",
    desc: "Flight & Hotel Deals",
    icon: Plane,
  },
  {
    title: "Food Coupons",
    desc: "Zomato & Swiggy",
    icon: UtensilsCrossed,
  },
];

const HowItWorks = () => {
  return (
    <section className="coupons bg-aurora section">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Rewards they love</h2>
        </div>

        <Carousel className="coupons__carousel" label="Reward types" autoplay={3800}>
          {featuresData.map((item) => (
            <article className="coupon" key={item.title}>
              <div className="coupon__body">
                <div className="coupon__top">
                  <span className="coupon__icon">
                    <item.icon size={44} strokeWidth={1.6} />
                  </span>
                </div>

                <div className="coupon__tear" aria-hidden="true" />

                <div className="coupon__bottom">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <span className="coupon__barcode" aria-hidden="true" />
                </div>
              </div>
            </article>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default HowItWorks;
