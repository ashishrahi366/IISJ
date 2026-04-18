import { Box, Container, Title, Text, Overlay } from "@mantine/core";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { theme } from "../../../theme";
import heroImg from "../../../assets/home/about-1.jpg";

function AboutHero() {
  return (
    <Box
      style={{
        position: "relative",
        height: "60vh",
        minHeight: "350px",
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* 🔥 Dark Gradient Overlay */}
      <Overlay
        gradient="linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.7))"
        opacity={1}
        zIndex={1}
      />

      <Container size="lg" style={{ position: "relative", zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center" }}
        >
          {/* 🏷 Title */}
          <Title
            order={1}
            style={{
              color: "white",
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 700,
            }}
          >
            About Us
          </Title>

          {/* 📍 Breadcrumb / Subtext */}
          <Text
            mt="sm"
            size="md"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            <Link
              to="/"
              style={{
                color: theme.colors.orange[5],
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              Home
            </Link>{" "}
            / About
          </Text>

          {/* ✨ Optional Description */}
          <Text
            mt="md"
            size="sm"
            style={{
              maxWidth: 500,
              margin: "0 auto",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            Learn more about our mission, vision, and the impact we are creating
            to empower communities and bring positive change.
          </Text>
        </motion.div>
      </Container>
    </Box>
  );
}

export default AboutHero;