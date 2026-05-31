import { Container, Title, Text, Button } from "@mantine/core";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";

import slide1 from "../../assets/home/homeHero1.webp";
import slide2 from "../../assets/home/heroHome2.jpeg";
import slide3 from "../../assets/home/heroHome3.JPG";
import slide4 from "../../assets/home/heroHome4.webp";
import slide5 from "../../assets/home/heroHome5.JPG";
import slide6 from "../../assets/home/homeHero6.jpeg";

const slides = [
  {
    image: slide1,
    title: "Empowering Leaders From The Scavenger Community",
    text: "Through fellowship, mentorship, and collective action, AVRNA is nurturing a new generation of leaders dedicated to equality, dignity, and social transformation.",
  },

  {
    image: slide2,
    title: "Building Futures Through Fellows For Equality",
    text: "Our fellowship program equips young changemakers with leadership skills, community organizing experience, and the confidence to create lasting impact.",
  },

  {
    image: slide3,
    title: "Voices Of Change, Stories Of Resilience",
    text: "From grassroots communities to national platforms, young leaders are raising their voices and challenging barriers through education and advocacy.",
  },

  {
    image: slide4,
    title: "Strengthening Communities Through Collective Leadership",
    text: "AVRNA supports community-driven initiatives that foster education, social justice, and opportunities for future generations.",
  },

  {
    image: slide5,
    title: "Creating Opportunities Beyond Generational Barriers",
    text: "By connecting youth with mentorship, networks, and resources, we help unlock pathways to leadership and sustainable development.",
  },

  {
    image: slide6,
    title: "Together Towards Equality And Human Dignity",
    text: "Every fellowship journey contributes to a stronger movement working towards inclusion, dignity, and equal opportunities for all.",
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
