import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Grid,
  Group,
  Image,
  Overlay,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaAward, FaGlobe, FaUsers } from "react-icons/fa";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

import leader2 from "../../../assets/home/leader2.webp";
import leader13 from "../../../assets/home/leader13.webp";
import leader12 from "../../../assets/home/leader12.jpg";

const leadershipPoints = [
  {
    icon: FaUsers,
    title: "Grassroots Leadership",
    desc: "Building leadership from within marginalized communities through education and empowerment.",
  },
  {
    icon: FaGlobe,
    title: "Global Advocacy",
    desc: "Connecting local struggles with global conversations on dignity, equality, and human rights.",
  },
  {
    icon: FaAward,
    title: "Social Impact",
    desc: "Creating long-term community transformation through sustainable initiatives and fellowships.",
  },
];

export default function FounderSpotlightSection() {
  return (
    <Box
      py={{ base: 90, md: 130 }}
      pos="relative"
      style={{
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #f8f9fc 0%, #eef2f8 50%, #f7f9fc 100%)",
      }}
    >
      {/* BACKGROUND ORBS */}
      <Box
        style={{
          position: "absolute",
          top: -120,
          right: -120,
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "rgba(255,123,0,0.15)",
          filter: "blur(120px)",
        }}
      />
      <Box
        style={{
          position: "absolute",
          bottom: -100,
          left: -100,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "rgba(255,170,0,0.12)",
          filter: "blur(120px)",
        }}
      />
      <Container size="xl" pos="relative">
        <Grid align="center" gutter={70}>
          {/* LEFT IMAGES */}
          <Grid.Col span={{ base: 12, lg: 5 }}>
            <MotionBox
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Box
                pos="relative"
                style={{
                  maxWidth: 520,
                  margin: "auto",
                }}
              >
                {/* MAIN IMAGE */}
                <Box
                  style={{
                    overflow: "hidden",
                    borderRadius: 38,
                    boxShadow: "0 30px 80px rgba(0,0,0,0.12)",
                  }}
                >
                  <Image src={leader13} h={650} fit="cover" />
                </Box>
                {/* FLOATING IMAGE */}
                <MotionBox
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                  style={{
                    position: "absolute",
                    bottom: -35,
                    right: -35,
                    width: "42%",
                  }}
                >
                  <Box
                    style={{
                      overflow: "hidden",
                      borderRadius: 28,
                      border: "6px solid white",
                      boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
                    }}
                  >
                    <Image src={leader2} h={240} fit="cover" />
                  </Box>
                </MotionBox>
                {/* FLOATING GLASS CARD */}
                <MotionCard
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                  radius={28}
                  p="lg"
                  bg="rgba(255,255,255,0.75)"
                  style={{
                    position: "absolute",
                    top: 35,
                    left: -35,
                    width: 240,
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(255,255,255,0.3)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                  }}
                >
                  <Text c="orange.6" fw={700} size="sm">
                    Founder & Visionary
                  </Text>

                  <Title order={3} fw={900} mt={5}>
                    Vimal Kumar
                  </Title>

                  <Text c="dimmed" size="sm" mt={8} lh={1.7}>
                    Leading a movement for dignity, equality, and leadership
                    within marginalized communities.
                  </Text>
                </MotionCard>
              </Box>
            </MotionBox>
          </Grid.Col>

          {/* RIGHT CONTENT */}

          <Grid.Col span={{ base: 12, lg: 7 }}>
            <MotionBox
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Text
                c="orange.6"
                fw={700}
                tt="uppercase"
                mb="md"
                style={{ letterSpacing: 1 }}
              >
                Founder / Leadership Spotlight
              </Text>

              <Title
                order={2}
                fw={900}
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 5rem)",
                  lineHeight: 1.08,
                }}
              >
                A Leader Turning
                <br />
                Experience Into
                <br />
                Social Change
              </Title>

              <Text
                size="lg"
                c="dimmed"
                mt="xl"
                style={{
                  lineHeight: 1.9,
                }}
              >
                Vimal Kumar, founder of MSC and IISJ initiatives, has dedicated
                his life to challenging caste discrimination and empowering
                marginalized communities through leadership and education.
              </Text>

              <Text
                size="lg"
                c="dimmed"
                mt="lg"
                style={{
                  lineHeight: 1.9,
                }}
              >
                Coming from the scavenger community himself, Vimal transformed
                personal struggles into a larger movement for dignity, equality,
                and systemic change across India.
              </Text>

              {/* QUOTE SECTION */}

              <Card radius={30} p="xl" mt={40} bg="#fff" shadow="xl">
                <Group align="flex-start" wrap="nowrap">
                  <Avatar src={leader12} size={70} radius="xl" />

                  <Box>
                    <Text
                      fw={700}
                      size="lg"
                      style={{
                        lineHeight: 1.8,
                      }}
                    >
                      “Leadership begins when communities believe they deserve
                      dignity, equality, and the power to shape their own
                      future.”
                    </Text>

                    <Text mt="md" c="orange.6" fw={700}>
                      — Vimal Kumar
                    </Text>
                  </Box>
                </Group>
              </Card>

              {/* LEADERSHIP POINTS */}

              <Stack mt={45} gap="lg">
                {leadershipPoints.map((item, index) => (
                  <MotionCard
                    key={index}
                    radius={28}
                    p="lg"
                    bg="white"
                    shadow="md"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.15,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <Group align="flex-start" wrap="nowrap">
                      <ThemeIcon
                        size={60}
                        radius="xl"
                        color="orange"
                        variant="light"
                      >
                        <item.icon size={22} />
                      </ThemeIcon>

                      <Box>
                        <Title order={4} fw={800}>
                          {item.title}
                        </Title>

                        <Text c="dimmed" mt={8} lh={1.8}>
                          {item.desc}
                        </Text>
                      </Box>
                    </Group>
                  </MotionCard>
                ))}
              </Stack>

              {/* CTA */}

              <Group mt={45}>
                <Button
                  component={Link}
                  to="/MSC-Detail"
                  size="lg"
                  radius="xl"
                  color="orange"
                  rightSection={<FaArrowRight size={14} />}
                >
                  Learn More About MSC
                </Button>

                <Button
                  component={Link}
                  to="/Avarna"
                  size="lg"
                  radius="xl"
                  variant="light"
                  color="orange"
                >
                  Learn More About AVRNA
                </Button>
              </Group>
            </MotionBox>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
