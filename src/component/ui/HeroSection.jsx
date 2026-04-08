import {
  Container,
  Grid,
  Image,
  Text,
  Title,
  Button,
  Paper,
  Badge,
  Group,
} from "@mantine/core";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { theme } from "../../theme";
import about1 from "../../assets/home/about-1.jpg";
import about2 from "../../assets/home/about-2.jpg";
import { useRef } from "react";

function HeroSection() {
  const ref = useRef(null);

  // 🔥 Parallax effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yImage = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <Container size="lg" py={{ base: 50, md: 80 }}>
      <Grid align="center" gutter={{ base: "lg", md: "xl" }}>
        {/* 🖼 LEFT IMAGE */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ position: "relative" }}
          >
            {/* Main Image */}
            <motion.div
              style={{
                position: "relative",
                height: "350px",
                borderRadius: "16px",
                overflow: "hidden",
                y: yImage,
              }}
            >
              <Image
                src={about1}
                style={{
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              {/* Gradient */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.1))",
                }}
              />
            </motion.div>

            {/* Floating Image */}
            <Image
              src={about2}
              radius="md"
              style={{
                position: "absolute",
                top: "-15px",
                right: "-10px",
                width: "140px",
                height: "140px",
                objectFit: "cover",
                border: "5px solid white",
                boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
              }}
            />
          </motion.div>
        </Grid.Col>

        {/* 📝 RIGHT CONTENT */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              paddingLeft: "10px", // ✅ works on all screens
            }}
          >
            <Badge size="lg" radius="xl" color="orange" variant="light" mb="md">
              About Us
            </Badge>

            <Title
              order={1}
              mb="md"
              style={{
                fontSize: "clamp(26px, 4vw, 40px)", // ✅ responsive text
                lineHeight: 1.2,
              }}
            >
              We Help People In Need Around The World
            </Title>

            {/* Quote */}
            <Paper
              withBorder
              radius="md"
              p="md"
              mb="md"
              style={{
                borderLeft: `5px solid ${theme.colors.orange[5]}`,
                background: "#f8f9fa",
              }}
            >
              <Text mb={5} size="sm">
                “For a successful revolution it is not enough that there is
                discontent. What is required is a profound and thorough
                conviction of the justice, necessity and importance of political
                and social rights.”
              </Text>
              <Text c={theme.colors.orange[6]} fw={600} size="sm">
                Dr. B R Ambedkar
              </Text>
            </Paper>

            <Text mb="xl" c="dimmed" size="sm">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos.
            </Text>

            {/* Buttons */}
            <Group gap="sm" wrap="wrap">
              <Button
                color="orange"
                rightSection={<FaArrowRight size={14} />}
                fullWidth={false}
              >
                Learn More
              </Button>

              <Button
                variant="outline"
                color="orange"
                rightSection={<FaArrowRight size={14} />}
              >
                Contact Us
              </Button>
            </Group>
          </motion.div>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default HeroSection;
