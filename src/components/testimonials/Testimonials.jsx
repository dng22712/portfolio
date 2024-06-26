import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const data = [
  {
    avatar: AVTR1,
    name: " Reading Non-Fictional books ",

    review:
      "Books have the remarkable ability to reshape our perspectives and broaden our understanding of life in profound ways. ",
  },
  {
    avatar: AVTR2,
    name: "Sports",

    review:
      "My passion for sports extends beyond mere fandom; it's a driving force that influences both my personal and professional pursuits. Being drawn to cricket often stems from a deep passion for the sport itself. ",
  },
  {
    avatar: AVTR3,
    name: "Latest Technologies",

    review:
      " I actively seek out emerging trends, advancements, and innovations across various domains.",
  },
  {
    avatar: AVTR4,
    name: "Travelling",
    review:
      "Travelling is not just a hobby for me; it's a passion that fuels my sense of adventure and connection with the natural world.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5> How do I spend my spare time? </h5>
      <h2>Hobbies & Interests</h2>
      <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
        className="container testimonials__container"
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__name">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
