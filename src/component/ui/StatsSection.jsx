import { useEffect, useState } from "react";
import {
  Badge,
  Box,
  Button,
  Card,
  Container,
  Grid,
  Group,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { motion } from "framer-motion";
import { FaHandsHelping, FaPeopleCarry, FaCheckCircle } from "react-icons/fa";
import {
  FaArrowRight,
  FaLocationDot,
  FaUsers,
} from "react-icons/fa6";

import { useNavigate } from "react-router-dom";

const MotionCard = motion(Card);
const MotionBox = motion(Box);

/* COUNTER HOOK */

function useCounter(end, duration = 2) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
}

const stats = [
  {
    icon: FaUsers,
    value: 500,
    label: "Volunteers",
  },

  {
    icon: FaLocationDot,
    value: 70,
    label: "Communities Reached",
  },

  {
    icon: FaPeopleCarry,
    value: 25,
    label: "Programs & Initiatives",
  },

  {
    icon: FaHandsHelping,
    value: 7000,
    label: "Lives Impacted",
  },
];

function StatsSection() {
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
      {/* BACKGROUND GLOW */}

      <Box
        style={{
          position: "absolute",
          top: -120,
          right: -120,
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "rgba(255,123,0,0.2)",
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
        <Grid align="center" gutter={60}>
          {/* LEFT CONTENT */}

          <Grid.Col span={{ base: 12, md: 5 }}>
            <MotionBox
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Stack gap="lg">
                <Badge
                  size="lg"
                  radius="xl"
                  color="orange"
                  variant="light"
                  w="fit-content"
                >
                  Why Choose Us
                </Badge>

                <Title
                  order={2}
                  c="white"
                  fw={900}
                  style={{
                    fontSize: "clamp(2.5rem, 5vw, 5rem)",
                    lineHeight: 1.05,
                  }}
                >
                  Creating
                  <br />
                  Real Impact
                  <br />
                  Through
                  <br />
                  Community Action
                </Title>

                <Text
                  c="gray.4"
                  size="lg"
                  style={{
                    lineHeight: 1.9,
                  }}
                >
                  We believe sustainable social change begins within
                  communities. Through education, leadership development,
                  resource centers, and grassroots collaboration, we empower
                  people to create dignified and independent futures.
                </Text>

                {/* FEATURES */}

                <Stack gap="md" mt="sm">
                  {[
                    "Grassroots community leadership programs",
                    "Inclusive education & fellowship initiatives",
                    "Safe spaces for learning and empowerment",
                    "Long-term sustainable social transformation",
                  ].map((item, index) => (
                    <Group key={index} align="center" wrap="nowrap">
                      <ThemeIcon
                        size={34}
                        radius="xl"
                        color="orange"
                        variant="light"
                      >
                        <FaCheckCircle size={16} />
                      </ThemeIcon>

                      <Text c="gray.2" size="md">
                        {item}
                      </Text>
                    </Group>
                  ))}
                </Stack>

                {/* BUTTONS */}

                <Group mt="xl">
                  <Button
                    radius="xl"
                    size="lg"
                    rightSection={<FaArrowRight size={14} />}
                    onClick={() => navigate("/support-msc")}
                    style={{
                      background:
                        "linear-gradient(135deg, #ff7b00 0%, #ff9d3d 100%)",
                      border: "none",
                      cursor: "pointer",
                      boxShadow: "0 12px 30px rgba(255,123,0,0.28)",
                    }}
                  >
                    Donate Now
                  </Button>

                  <Button
                    radius="xl"
                    size="lg"
                    variant="white"
                    color="dark"
                    onClick={() => navigate("/about")}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    Learn More
                  </Button>
                </Group>
              </Stack>
            </MotionBox>
          </Grid.Col>

          {/* RIGHT STATS */}

          <Grid.Col span={{ base: 12, md: 7 }}>
            <Grid gutter={28}>
              {stats.map((item, index) => {
                const Icon = item.icon;
                const count = useCounter(item.value, 2);

                return (
                  <Grid.Col key={index} span={{ base: 12, sm: 6 }}>
                    <MotionCard
                      initial={{
                        opacity: 0,
                        y: 40,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
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
                      {/* TOP BORDER */}

                      <Box
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: 5,
                          background:
                            "linear-gradient(135deg, #ff7b00 0%, #ff9d3d 100%)",
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
                        <Icon size={30} />
                      </ThemeIcon>

                      {/* NUMBER */}

                      <Title
                        order={2}
                        c="white"
                        fw={900}
                        style={{
                          fontSize: "clamp(2.5rem, 5vw, 4rem)",
                        }}
                      >
                        {count}+
                      </Title>

                      {/* LABEL */}

                      <Text c="gray.4" size="lg" mt={6}>
                        {item.label}
                      </Text>
                    </MotionCard>
                  </Grid.Col>
                );
              })}
            </Grid>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}

export default StatsSection;
