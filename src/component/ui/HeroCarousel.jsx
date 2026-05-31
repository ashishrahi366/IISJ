import { Container, Title, Text, Button } from "@mantine/core";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";

import { homeHeroSlides } from "../../constants/comon";

function HeroCarousel() {
  return (
    <div style={{ marginBottom: "40px" }}>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 4000 }}
        loop
      >
        {homeHeroSlides.map((slide, index) => (
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
                      component={Link}
                      to="/about"
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
