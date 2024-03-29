import React from "react";
import styled from "styled-components";
import play from "assets/play.png";
import Title from "./Title";
import { useScroll } from "components/useScroll";
import { motion } from "framer-motion";
import { servicesAnimations } from "animation";

function Services() {
  const [element, controls] = useScroll();

  const data = [
    {
      type: "Scuba Diving",
      text: "Scuba diving is mainly done for the attraction of the unattainable undersea world. Hence, scuba diving allows us to be in that underwater world, even......",
      image:
        "https://i.ibb.co/XW6qxpR/will-truettner-b-BF9-V6qkj-D4-unsplash.jpg",
    },
    {
      type: "Paragliding",
      text: "Paragliding is a recreational and competitive flying sport. A paraglider is a free-flying, foot-launched aircraft.",
      image: "https://i.ibb.co/b7FQb61/billy-cox-SWYg-Ij6-CHq-U-unsplash.jpg",
    },
    {
      type: "Travelling",
      text: "If you're going from one place to another, you're travelling. People love to go travelling to see new places and experience different cultures. When people are travelling.....",
      image: "https://i.ibb.co/gr0ZwcG/marc-kleen-e-Rwm-Bvhfv-G8-unsplash.jpg",
    },
  ];
  return (
    <Section id="services" ref={element}>
      <Title value="Activities" />
      <div className="services">
        {data.map(({ type, text, image }, index) => {
          return (
            <motion.div
              className="services__service"
              variants={servicesAnimations}
              animate={controls}
              transition={{
                delay: 0.03,
                type: "tween",
                duration: 0.8,
              }}
            >
              <div className="services__service__image">
                <img src={image} alt="Service" />
              </div>
              <div className="services__service__title">
                <span>0{index + 1}</span>
                <h2>{type}</h2>
              </div>
              <p className="services__service__description">{text}</p>
              <img src={play} alt="Readmore" />
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  .services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    height: 100%;
    margin: 0 14rem;
    margin-top: 10rem;
    gap: 5rem;
    &__service {
      padding: 1rem;
      &:nth-of-type(2) {
        background-color: var(--primary-color);
        .services__service__title {
          span {
            color: #fff;
          }
        }
        .services__service__description {
          color: #fff;
        }
      }
      &__image {
        margin-bottom: 3rem;
        img {
          width: 19rem;
          height: 9em;
        }
      }
      &__title {
        span {
          color: var(--primary-color);
          font-weight: bolder;
        }
        h2 {
          font-size: 3rem;
          line-height: 2.5rem;
          margin-bottom: 5rem;
          color: var(--secondary-color);
        }
      }
      &__description {
        color: var(--primary-color);
        margin-bottom: 2rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .services {
      margin: 2rem 0;
      grid-template-columns: 1fr;
      gap: 2rem;
      padding: 0 2rem;
      &__service {
        padding: 1rem;
        &__image {
          img {
            width: 77vw;
            height: 13em;
          }
        }
      }
    }
  }
`;

export default Services;
