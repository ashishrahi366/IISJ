import {
  Box,
  Button,
  Container,
  Grid,
  Group,
  Image,
  Overlay,
  Text,
  Title,
} from "@mantine/core";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/Logomark_Digital.png";
import mainHero1 from "../../assets/home/mainHero1.avif";
import mainHero2 from "../../assets/home/heroTest.avif";

const MotionBox = motion(Box);

export default function HomeHeroSection() {
  return (
    <Box
      pos="relative"
      py={{ base: 80, md: 110 }}
      mb={100}
      style={{
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #071120 0%, #0d1d36 50%, #13284a 100%)",
      }}
    >
      {/* Background Image */}

      <Box
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${mainHero2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
        }}
      />

      <Overlay
        gradient="linear-gradient(180deg, rgba(5,10,25,0.75) 0%, rgba(5,10,25,0.95) 100%)"
        opacity={1}
        zIndex={1}
      />

      {/* Blur Orbs */}

      <Box
        style={{
          position: "absolute",
          top: -80,
          right: -80,
          width: 260,
          height: 260,
          borderRadius: "50%",
          background: "rgba(255,123,0,0.35)",
          filter: "blur(120px)",
          zIndex: 1,
        }}
      />

      <Container size="xl" pos="relative" style={{ zIndex: 2 }}>
        <Grid align="center" gutter={50}>
          {/* LEFT CONTENT */}

          <Grid.Col span={{ base: 12, md: 7 }}>
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* LOGO */}

              <Group mb="xl">
                <Image src={logo} alt="IISJ Logo" w={65} h={65} fit="contain" />

                <Box>
                  <Text
                    c="orange.4"
                    fw={700}
                    size="sm"
                    tt="uppercase"
                    style={{ letterSpacing: 1 }}
                  >
                    Indian Institute for Social Justice
                  </Text>

                  <Text c="gray.4" size="sm">
                    Equality • Dignity • Leadership
                  </Text>
                </Box>
              </Group>

              {/* HEADING */}

              <Title
                order={1}
                c="white"
                fw={900}
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 4.8rem)",
                  lineHeight: 1.08,
                }}
              >
                Building Hope
                <br />
                Through Social
                <br />
                Justice & Action
              </Title>

              {/* CONTENT */}

              <Text
                c="gray.3"
                size="lg"
                mt="xl"
                maw={650}
                style={{
                  lineHeight: 1.9,
                }}
              >
                IISJ, Based in the United States, This institue focuses on global dialogue,
                academic bridge-building, policy research and training around systemic inequality and social justice
                {/* IISJ works alongside marginalized communities to create access
                to education, leadership opportunities, community development,
                and sustainable social transformation across India. */}
              </Text>

              <Text
                c="gray.5"
                mt="md"
                maw={620}
                style={{
                  lineHeight: 1.8,
                }}
              >
                Through grassroots initiatives, youth leadership programs, and
                community resource centers, we empower people to challenge
                inequality and build a future rooted in dignity and inclusion.
              </Text>

              {/* BUTTONS */}

              <Group mt={35}>
                <Button
                  component={Link}
                  to="/IISJ"
                  size="lg"
                  radius="xl"
                  color="orange"
                  px={30}
                  rightSection={<FaArrowRight size={14} />}
                  style={{
                    boxShadow: "0 10px 30px rgba(255,123,0,0.3)",
                  }}
                >
                  Explore IISJ
                </Button>

                <Button
                  component={Link}
                  to="/contact"
                  size="lg"
                  radius="xl"
                  variant="white"
                  color="dark"
                  px={30}
                >
                  Join Our Mission
                </Button>
              </Group>
            </MotionBox>
          </Grid.Col>

          {/* RIGHT IMAGE */}

          <Grid.Col span={{ base: 12, md: 5 }}>
            <MotionBox
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <Box
                pos="relative"
                style={{
                  maxWidth: 460,
                  margin: "auto",
                }}
              >
                {/* MAIN IMAGE */}

                <Box
                  style={{
                    overflow: "hidden",
                    borderRadius: 32,
                    border: "1px solid rgba(255,255,255,0.08)",
                    backdropFilter: "blur(20px)",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
                  }}
                >
                  <Image
                    // src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop"
                    src={mainHero1}
                    h={520}
                    fit="cover"
                  />
                </Box>

                {/* FLOATING CARD */}

                <Box
                  p="lg"
                  style={{
                    position: "absolute",
                    bottom: -25,
                    left: -25,
                    width: 240,
                    borderRadius: 24,
                    background: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(18px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <Text c="orange.3" fw={700} size="sm">
                    Community Impact
                  </Text>

                  <Title order={3} c="white" mt={5}>
                    20K+
                  </Title>

                  <Text c="gray.3" size="sm" mt={4}>
                    Lives impacted through education, leadership, and community
                    initiatives.
                  </Text>
                </Box>
              </Box>
            </MotionBox>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
