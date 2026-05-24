import {
  Badge,
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
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaArrowRight,
  FaHandsHelping,
  FaUsers,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

import about1 from "../../assets/home/MSC-Organisation.jpg";
import about2 from "../../assets/home/homeAbt1.jpeg";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

function HeroSection() {
  const navigate = useNavigate();
  const ref = useRef(null);

  // PARALLAX EFFECT

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yImage = useTransform(
    scrollYProgress,
    [0, 1],
    [40, -40]
  );

  return (
    <Box
      py={{ base: 80, md: 120 }}
      pos="relative"
      style={{
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #f8fafc 0%, #eef3f8 50%, #ffffff 100%)",
      }}
    >
      {/* BLUR ORBS */}

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
          bottom: -120,
          left: -120,
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "rgba(255,180,0,0.12)",
          filter: "blur(120px)",
        }}
      />

      <Container size="xl" pos="relative">
        <Grid align="center" gutter={60}>
          {/* LEFT IMAGE SECTION */}

          <Grid.Col span={{ base: 12, md: 6 }}>
            <MotionBox
              ref={ref}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              style={{
                position: "relative",
              }}
            >
              {/* MAIN IMAGE */}

              <motion.div
                style={{
                  y: yImage,
                }}
              >
                <Box
                  pos="relative"
                  style={{
                    overflow: "hidden",
                    borderRadius: 40,
                    boxShadow:
                      "0 30px 80px rgba(0,0,0,0.15)",
                  }}
                >
                  <Image
                    src={about1}
                    h={620}
                    fit="cover"
                  />

                  {/* OVERLAY */}

                  <Overlay
                    gradient="linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.82) 100%)"
                    opacity={1}
                  />

                  {/* FLOATING GLASS CARD */}

                  <MotionCard
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.4,
                      duration: 0.6,
                    }}
                    viewport={{ once: true }}
                    radius={30}
                    p="xl"
                    bg="rgba(255,255,255,0.12)"
                    style={{
                      position: "absolute",
                      bottom: 30,
                      left: 30,
                      right: 30,
                      backdropFilter: "blur(18px)",
                      border:
                        "1px solid rgba(255,255,255,0.12)",
                      zIndex: 2,
                    }}
                  >
                    <Text
                      c="orange.3"
                      fw={700}
                      size="sm"
                      tt="uppercase"
                      mb={8}
                      style={{
                        letterSpacing: 1,
                      }}
                    >
                      Community Driven Movement
                    </Text>

                    <Title
                      order={3}
                      c="white"
                      fw={900}
                    >
                      Building Equality
                      <br />
                      Through Education
                      <br />
                      & Leadership
                    </Title>

                    <Text
                      c="gray.2"
                      mt="sm"
                      style={{
                        lineHeight: 1.8,
                      }}
                    >
                      Empowering marginalized communities
                      with dignity, opportunity, and social
                      transformation.
                    </Text>
                  </MotionCard>
                </Box>
              </motion.div>

              {/* FLOATING SMALL IMAGE */}

              <MotionBox
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.5,
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                style={{
                  position: "absolute",
                  top: -25,
                  right: -15,
                  width: "180px",
                  borderRadius: "30px",
                  overflow: "hidden",
                  border: "6px solid white",
                  boxShadow:
                    "0 20px 50px rgba(0,0,0,0.18)",
                }}
              >
                <Image
                  src={about2}
                  h={220}
                  fit="cover"
                />
              </MotionBox>
            </MotionBox>
          </Grid.Col>

          {/* RIGHT CONTENT */}

          <Grid.Col span={{ base: 12, md: 6 }}>
            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Stack gap="lg">
                <Badge
                  color="orange"
                  variant="light"
                  radius="xl"
                  size="lg"
                  w="fit-content"
                >
                  About IISJ & MSC
                </Badge>

                <Title
                  order={1}
                  fw={900}
                  style={{
                    fontSize:
                      "clamp(2.5rem, 5vw, 5rem)",
                    lineHeight: 1.05,
                  }}
                >
                  Creating
                  <br />
                  Social Justice
                  <br />
                  Through
                  <br />
                  Collective Action
                </Title>

                <Text
                  size="lg"
                  fw={500}
                  c="orange.7"
                >
                  Empowering communities through
                  education, leadership, and sustainable
                  social transformation.
                </Text>

                <Text
                  c="dimmed"
                  size="md"
                  style={{
                    lineHeight: 1.9,
                  }}
                >
                  The International Institute for Social
                  Justice (IISJ) and Movement for
                  Scavenger Community (MSC) work together
                  to strengthen marginalized communities
                  through education, leadership
                  development, fellowships, and grassroots
                  initiatives.
                </Text>

                <Text
                  c="dimmed"
                  size="md"
                  style={{
                    lineHeight: 1.9,
                  }}
                >
                  Founded by activists from within the
                  community, MSC focuses on eliminating
                  caste-based discrimination and creating
                  opportunities for dignity, equality, and
                  self-reliance through sustainable
                  community-driven programs.
                </Text>

                {/* QUOTE CARD */}

                <Card
                  radius={28}
                  p="xl"
                  bg="rgba(255,123,0,0.06)"
                  style={{
                    border:
                      "1px solid rgba(255,123,0,0.08)",
                  }}
                >
                  <Group
                    align="flex-start"
                    wrap="nowrap"
                  >
                    <ThemeIcon
                      size={56}
                      radius="xl"
                      color="orange"
                      variant="light"
                    >
                      <FaHandsHelping size={22} />
                    </ThemeIcon>

                    <Box>
                      <Text
                        fw={600}
                        size="md"
                        style={{
                          lineHeight: 1.8,
                        }}
                      >
                        “For a successful revolution it is
                        not enough that there is
                        discontent. What is required is a
                        profound and thorough conviction
                        of the justice, necessity and
                        importance of political and social
                        rights.”
                      </Text>

                      <Text
                        mt="sm"
                        fw={700}
                        c="orange.7"
                      >
                        — Dr. B. R. Ambedkar
                      </Text>
                    </Box>
                  </Group>
                </Card>

                {/* STATS */}

                <Group mt="sm" gap="xl">
                  <Box>
                    <Title
                      order={2}
                      c="orange.6"
                      fw={900}
                    >
                      2009
                    </Title>

                    <Text
                      c="dimmed"
                      size="sm"
                    >
                      Founded
                    </Text>
                  </Box>

                  <Box>
                    <Title
                      order={2}
                      c="orange.6"
                      fw={900}
                    >
                      20+
                    </Title>

                    <Text
                      c="dimmed"
                      size="sm"
                    >
                      Programs
                    </Text>
                  </Box>

                  <Box>
                    <Title
                      order={2}
                      c="orange.6"
                      fw={900}
                    >
                      1000+
                    </Title>

                    <Text
                      c="dimmed"
                      size="sm"
                    >
                      Lives Impacted
                    </Text>
                  </Box>
                </Group>

                {/* BUTTONS */}

                <Group mt="xl">
                  <Button
                    size="lg"
                    radius="xl"
                    color="orange"
                    rightSection={
                      <FaArrowRight size={14} />
                    }
                    onClick={() =>
                      navigate("/MSC-Detail")
                    }
                    style={{
                      boxShadow:
                        "0 10px 30px rgba(255,123,0,0.25)",
                    }}
                  >
                    Explore Our Work
                  </Button>

                  <Button
                    size="lg"
                    radius="xl"
                    variant="outline"
                    color="orange"
                    leftSection={<FaUsers size={16} />}
                    onClick={() =>
                      navigate("/Support-MSC")
                    }
                  >
                    Join The Movement
                  </Button>
                </Group>
              </Stack>
            </MotionBox>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}

export default HeroSection;