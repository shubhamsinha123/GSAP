import React from "react";
import styled from "styled-components";
import play from "assets/play.png";
import Title from "./Title";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { blogsAnimation } from "animation";

function Blog() {
  const [element, controls] = useScroll();
  const blogsData = [
    {
      title: "PARLOUR JOURNAL",
      type: "SPA",
      image: `https://i.ibb.co/gr0ZwcG/marc-kleen-e-Rwm-Bvhfv-G8-unsplash.jpg`,
      description:
        "Our blog is intended to help answer your hair related questions and provide information about healthy hair choices and products.",
    },
    {
      title: "REFELXOLOGY SKY",
      type: "Relax",
      image: `https://i.ibb.co/XW6qxpR/will-truettner-b-BF9-V6qkj-D4-unsplash.jpg`,
      description:
        "Reflexologists believe that these reflex points, pressing them creates real benefits for the person's health. If you have any questions, please email",
    },
    {
      title: "MEDITATION SUN",
      type: "Yoga",
      image: "https://i.ibb.co/b7FQb61/billy-cox-SWYg-Ij6-CHq-U-unsplash.jpg",
      description:
        "Keep your body and mind it pure and clean for the soul to reside in. Our Spa Offer yoga classes in areas. creates real benefits for the person's health.",
    },
  ];
  return (
    <Style id="blog" ref={element}>
      <Title value="Blog" />
      <div className="blogs">
        {blogsData.map(({ title, type, description, image }) => {
          return (
            <motion.div
              className="blog"
              variants={blogsAnimation}
              animate={controls}
              transition={{
                delay: 0.03,
                type: "tween",
                duration: 0.5,
              }}
            >
              <div className="image">
                <img alt="images" src={image}></img>
              </div>
              <div className="title">
                <h3>{title}</h3>
              </div>
              <span className="type">{type}</span>
              <div className="description">
                <p>{description}</p>
              </div>
              <div className="more">
                <img src={play} alt="Play" />
                {/* <span>Read More</span> */}
                <Link to="/demo">Read More</Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Style>
  );
}

const Style = styled.section`
  min-height: 100vh;
  position: relative;
  .blogs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    margin: 5rem 15rem;
    .blog {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .image {
        height: 15rem;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 20em;
          height: 15rem;
        }
      }
      .title {
        h3 {
          color: var(--secondary-color);
          font-size: 1.5rem;
        }
      }
      .type {
        color: var(--primary-color);
        font-weight: bolder;
        text-transform: uppercase;
      }
      .description {
        height: 10rem;
        color: var(--primary-color);
      }
      .more {
        display: flex;
        align-items: center;
        gap: 1rem;
        cursor: pointer;
        a {
          letter-spacing: 0.1rem;
          text-transform: uppercase;
          text-decoration: none;
          color: var(--primary-color);
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem 0;
    .blogs {
      padding: 0 2rem;
      grid-template-columns: 1fr;
      margin: 0 1rem;
    }
  }
`;

export default Blog;
