import { Container, Title, Text, Button } from "@mantine/core";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import slide1 from "../../assets/home/homeHero1.JPG";
import slide2 from "../../assets/home/heroHome2.jpeg";
import slide3 from "../../assets/home/heroHome3.JPG";
import slide4 from "../../assets/home/heroHome4.JPG";
import slide5 from "../../assets/home/heroHome5.JPG";
import slide6 from "../../assets/home/homeHero6.jpeg";

const slides = [
  {
    image: slide1,
    title: "Let's Change The World With Humanity",
    text: "Aliqu diam amet diam et eos. Clita erat ipsum et lorem sed stet lorem sit clita duo justo erat amet",
  },
  {
    image: slide2,
    title: "Let's Save More Lifes With Our Helping Hand",
    text: "Aliqu diam amet diam et eos. Clita erat ipsum et lorem sed stet lorem sit clita duo justo erat amet",
  },
  {
    image: slide3,
    title: "Let's Change The World With Humanity",
    text: "Aliqu diam amet diam et eos. Clita erat ipsum et lorem sed stet lorem sit clita duo justo erat amet",
  },
  {
    image: slide4,
    title: "Let's Save More Lifes With Our Helping Hand",
    text: "Aliqu diam amet diam et eos. Clita erat ipsum et lorem sed stet lorem sit clita duo justo erat amet",
  },
  {
    image: slide5,
    title: "Let's Change The World With Humanity",
    text: "Aliqu diam amet diam et eos. Clita erat ipsum et lorem sed stet lorem sit clita duo justo erat amet",
  },
  {
    image: slide6,
    title: "Let's Save More Lifes With Our Helping Hand",
    text: "Aliqu diam amet diam et eos. Clita erat ipsum et lorem sed stet lorem sit clita duo justo erat amet",
  },
];

function HeroCarousel() {
  return (
    <div style={{ marginBottom: "40px" }}>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 4000 }}
        loop
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                position: "relative",
                height: "90vh",
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Dark Overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(0, 29, 35, 0.8)",
                }}
              />

              {/* Content */}
              <Container
                size="lg"
                style={{
                  position: "relative",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <div style={{ maxWidth: "700px" }}>
                  
                  <motion.div
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Title order={1} c="white" mb="md">
                      {slide.title}
                    </Title>
                  </motion.div>

                  <motion.div
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    <Text c="gray.3" mb="xl">
                      {slide.text}
                    </Text>
                  </motion.div>

                  <motion.div
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <Button
                      size="lg"
                      color="orange"
                      rightSection={<FaArrowRight />}
                    >
                      Learn More
                    </Button>
                  </motion.div>

                </div>
              </Container>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeroCarousel;