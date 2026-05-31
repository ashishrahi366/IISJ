import {
  Badge,
  Box,
  Button,
  Card,
  Container,
  Grid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MotionCard = motion(Card);
import { homeServicesSectionData } from "../../constants/comon";

function ServicesSection() {
  const navigate = useNavigate();

  return (
    <Box
      py={{ base: 80, md: 120 }}
      pos="relative"
      style={{
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #071120 0%, #0d1d36 50%, #13284a 100%)",
      }}
    >
      {/* BACKGROUND BLUR */}

      <Box
        style={{
          position: "absolute",
          top: -120,
          right: -120,
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "rgba(255,123,0,0.22)",
          filter: "blur(120px)",
        }}
      />

      <Box
        style={{
          position: "absolute",
          bottom: -120,
          left: -120,
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "rgba(255,180,0,0.15)",
          filter: "blur(120px)",
        }}
      />

      <Container size="xl" pos="relative">
        {/* HEADING */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Stack align="center" gap="lg" mb={70}>
            <Badge size="lg" radius="xl" color="orange" variant="light">
              What We Do
            </Badge>

            <Title
              order={2}
              ta="center"
              c="white"
              fw={900}
              maw={850}
              style={{
                fontSize: "clamp(2.5rem, 5vw, 5rem)",
                lineHeight: 1.08,
              }}
            >
              Building Social Justice
              <br />
              Through Education,
              <br />
              Leadership & Community
            </Title>

            <Text
              ta="center"
              c="gray.4"
              maw={760}
              size="lg"
              style={{
                lineHeight: 1.9,
              }}
            >
              Our initiatives focus on empowering marginalized communities
              through education, advocacy, leadership development, and
              sustainable social transformation programs.
            </Text>
          </Stack>
        </motion.div>

        {/* CARDS */}

        <Grid gutter={30}>
          {homeServicesSectionData.map((item, index) => (
            <Grid.Col key={index} span={{ base: 12, md: 4 }}>
              <MotionCard
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                }}
                radius={34}
                p="xl"
                h="100%"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  background: "rgba(255,255,255,0.06)",
                  backdropFilter: "blur(18px)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {/* TOP GRADIENT */}

                <Box
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 6,
                    background: item.gradient,
                  }}
                />

                {/* ICON */}

                <ThemeIcon
                  size={74}
                  radius={24}
                  variant="gradient"
                  gradient={{
                    from: "orange",
                    to: "yellow",
                  }}
                  mb="xl"
                >
                  {item.icon}
                </ThemeIcon>

                {/* CONTENT */}

                <Text
                  c="orange.3"
                  fw={700}
                  size="sm"
                  tt="uppercase"
                  mb={10}
                  style={{
                    letterSpacing: 1,
                  }}
                >
                  {item.short}
                </Text>

                <Title
                  order={3}
                  c="white"
                  fw={800}
                  mb="md"
                  style={{
                    lineHeight: 1.3,
                  }}
                >
                  {item.title}
                </Title>

                <Text
                  c="gray.4"
                  mb="xl"
                  style={{
                    lineHeight: 1.9,
                  }}
                >
                  {item.desc}
                </Text>

                {/* BUTTON */}

                <Button
                  component="button"
                  type="button"
                  radius="xl"
                  size="md"
                  rightSection={<FaArrowRight size={14} />}
                  onClick={() => navigate(item.path)}
                  style={{
                    background:
                      "linear-gradient(135deg, #ff7b00 0%, #ff9d3d 100%)",
                    border: "none",
                    cursor: "pointer",
                    transition: "0.3s",
                    boxShadow: "0 10px 25px rgba(255,123,0,0.25)",
                  }}
                  styles={{
                    root: {
                      cursor: "pointer",
                    },
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 18px 40px rgba(255,123,0,0.35)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 25px rgba(255,123,0,0.25)";
                  }}
                >
                  Explore More
                </Button>

                {/* FLOATING GLOW */}

                {/* <Overlay opacity={0.04} color="#fff" /> */}
              </MotionCard>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default ServicesSection;
