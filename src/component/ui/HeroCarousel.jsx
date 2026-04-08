import { Container, Title, Text, Button } from "@mantine/core";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Images (adjust path if needed)
import slide1 from "../../assets/home/carousel-1.jpg";
import slide2 from "../../assets/home/carousel-2.jpg";

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
];

function HeroCarousel() {
  return (
    <div style={{ marginBottom: "50px" }}>
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
                height: "80vh",
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