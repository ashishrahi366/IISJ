import {
  Box,
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
import { motion } from "framer-motion";
import { FaBookOpen, FaHandsHelping, FaLightbulb } from "react-icons/fa";

import about1 from "../../../assets/pages/about1-msc.webp";
import about2 from "../../../assets/home/homeHero1.webp";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const storyPoints = [
  {
    icon: FaLightbulb,
    title: "A Vision For Equality",
    desc: "MSC and IISJ were born from the belief that every individual deserves dignity, opportunity, and equal access to education and leadership.",
  },
  {
    icon: FaHandsHelping,
    title: "Community-Led Change",
    desc: "The movement focuses on empowering communities to create sustainable solutions from within rather than depending entirely on outside systems.",
  },
  {
    icon: FaBookOpen,
    title: "Education As Resistance",
    desc: "Leadership education, awareness, and community centers became the foundation for long-term social transformation.",
  },
];

export default function OurStorySection() {
  return (
    <Box
      py={{ base: 90, md: 130 }}
      pos="relative"
      style={{
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #071120 0%, #0c1b33 50%, #13284a 100%)",
      }}
    >
      {/* BACKGROUND IMAGE */}

      <Box
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1800&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.08,
        }}
      />

      <Overlay
        gradient="linear-gradient(180deg, rgba(5,10,25,0.92) 0%, rgba(5,10,25,0.98) 100%)"
        opacity={1}
        zIndex={1}
      />

      {/* BLUR ORBS */}

      <Box
        style={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "rgba(255,123,0,0.3)",
          filter: "blur(120px)",
          zIndex: 1,
        }}
      />

      <Box
        style={{
          position: "absolute",
          bottom: -120,
          left: -100,
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "rgba(255,170,0,0.2)",
          filter: "blur(120px)",
          zIndex: 1,
        }}
      />

      <Container size="xl" pos="relative" style={{ zIndex: 2 }}>
        <Grid align="center" gutter={70}>
          {/* LEFT CONTENT */}

          <Grid.Col span={{ base: 12, lg: 6 }}>
            <MotionBox
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Text
                c="orange.4"
                fw={700}
                tt="uppercase"
                mb="md"
                style={{ letterSpacing: 1 }}
              >
                Our Story
              </Text>

              <Title
                order={2}
                c="white"
                fw={900}
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 4.8rem)",
                  lineHeight: 1.08,
                }}
              >
                How A Movement
                <br />
                For Justice
                <br />
                Began
              </Title>

              <Text
                c="gray.3"
                size="lg"
                mt="xl"
                style={{
                  lineHeight: 1.9,
                }}
              >
                IISJ and MSC emerged from the lived realities of marginalized
                communities facing caste discrimination, social exclusion, and
                lack of access to opportunities.
              </Text>

              <Text
                c="gray.4"
                mt="lg"
                style={{
                  lineHeight: 1.9,
                }}
              >
                What started as a mission to support the scavenger community
                gradually transformed into a larger movement focused on
                leadership, education, dignity, and sustainable community-led
                change across India.
              </Text>

              {/* STORY CARDS */}

              <Stack mt={45} gap="lg">
                {storyPoints.map((item, index) => (
                  <MotionCard
                    key={index}
                    radius={28}
                    p="lg"
                    bg="rgba(255,255,255,0.06)"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.15,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    style={{
                      backdropFilter: "blur(16px)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <Group align="flex-start" wrap="nowrap">
                      <ThemeIcon
                        size={62}
                        radius="xl"
                        color="orange"
                        variant="light"
                      >
                        <item.icon size={24} />
                      </ThemeIcon>

                      <Box>
                        <Title order={4} c="white" fw={800}>
                          {item.title}
                        </Title>

                        <Text c="gray.4" mt={8} lh={1.8}>
                          {item.desc}
                        </Text>
                      </Box>
                    </Group>
                  </MotionCard>
                ))}
              </Stack>
            </MotionBox>
          </Grid.Col>

          {/* RIGHT VISUAL SECTION */}

          <Grid.Col span={{ base: 12, lg: 6 }}>
            <MotionBox
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Box
                pos="relative"
                style={{
                  maxWidth: 580,
                  margin: "auto",
                }}
              >
                {/* MAIN IMAGE */}

                <Box
                  style={{
                    overflow: "hidden",
                    borderRadius: 36,
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "0 30px 80px rgba(0,0,0,0.4)",
                  }}
                >
                  <Image
                    src={about1}
                    h={620}
                    fit="cover"
                  />
                </Box>

                {/* FLOATING IMAGE */}

                <MotionBox
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                  style={{
                    position: "absolute",
                    bottom: -40,
                    left: -40,
                    width: "42%",
                  }}
                >
                  <Box
                    style={{
                      overflow: "hidden",
                      borderRadius: 28,
                      border: "6px solid rgba(255,255,255,0.12)",
                      backdropFilter: "blur(20px)",
                      boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
                    }}
                  >
                    <Image
                      src={about2}
                      h={240}
                      fit="cover"
                    />
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
                  bg="rgba(255,255,255,0.1)"
                  style={{
                    position: "absolute",
                    top: 40,
                    right: -30,
                    width: 240,
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <Text c="orange.3" fw={700} size="sm">
                    Since The Beginning
                  </Text>

                  <Title order={3} c="white" mt={5}>
                    Community First
                  </Title>

                  <Text c="gray.3" size="sm" mt={8} lh={1.7}>
                    Every initiative started with listening to the voices and
                    needs of the community itself.
                  </Text>
                </MotionCard>
              </Box>
            </MotionBox>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
