import React from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

SwiperCore.use([Navigation, Pagination]);

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    image: "https://placehold.it/100x100",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis mi egestas, varius ipsum eget, faucibus sapien.",
  },
  {
    id: 2,
    name: "Jane Doe",
    image: "https://placehold.it/100x100",
    text: "Pellentesque eu ex vel dolor laoreet viverra. Fusce sed leo eget nisl euismod tincidunt. Sed euismod augue sed.",
  },
  {
    id: 3,
    name: "Bob Smith",
    image: "https://placehold.it/100x100",
    text: "Vivamus ut ipsum a velit mollis molestie vel vel mauris. Nulla facilisi. Cras ut ultricies lorem, non eleifend orci.",
  },
];

const TestimonialCarousel = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial.id}>
          <div className="testimonial">
            <img src={testimonial.image} alt={testimonial.name} />
            <h3>{testimonial.name}</h3>
            <p>{testimonial.text}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialCarousel;
