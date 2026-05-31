import React from "react";
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
  Title,
} from "@mantine/core";
import { motion } from "framer-motion";
import { FaArrowRight, FaHandsHelping } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";

// import { } from "react-router-dom";

import mscImg from "../../../assets/MSC/MSC-About.webp";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

export default function MSCAboutPreview() {
  const navigate = useNavigate();

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
      {/* BACKGROUND BLUR */}

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
          {/* LEFT CONTENT */}

          <Grid.Col span={{ base: 12, md: 6 }}>
            <MotionBox
              initial={{ opacity: 0, x: -40 }}
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
                  Movement for Scavenger Community
                </Badge>

                <Title
                  order={2}
                  fw={900}
                  style={{
                    fontSize: "clamp(2.4rem, 5vw, 4.8rem)",
                    lineHeight: 1.08,
                  }}
                >
                  Creating
                  <br />
                  Dignity Through
                  <br />
                  Education &
                  <br />
                  Leadership
                </Title>

                <Text size="lg" fw={500} c="orange.7">
                  A grassroots movement empowering marginalized scavenger
                  communities across India.
                </Text>

                <Text
                  c="dimmed"
                  size="md"
                  style={{
                    lineHeight: 1.9,
                  }}
                >
                  Founded in 2009 by young social activists from within the
                  scavenger community, MSC works to challenge caste-based
                  exclusion through education, leadership development, and
                  sustainable community initiatives.
                </Text>

                <Text
                  c="dimmed"
                  size="md"
                  style={{
                    lineHeight: 1.9,
                  }}
                >
                  Through community resource centers, vocational training,
                  digital literacy, and advocacy programs, MSC supports
                  communities in building dignified, independent, and empowered
                  futures.
                </Text>

                {/* MINI STATS */}

                <Group mt="md" gap="xl">
                  <Box>
                    <Title order={2} c="orange.6" fw={900}>
                      2009
                    </Title>

                    <Text c="dimmed" size="sm">
                      Founded
                    </Text>
                  </Box>

                  <Box>
                    <Title order={2} c="orange.6" fw={900}>
                      20+
                    </Title>

                    <Text c="dimmed" size="sm">
                      Community Programs
                    </Text>
                  </Box>

                  <Box>
                    <Title order={2} c="orange.6" fw={900}>
                      1000+
                    </Title>

                    <Text c="dimmed" size="sm">
                      Lives Impacted
                    </Text>
                  </Box>
                </Group>

                {/* BUTTONS */}

                <Group mt="xl">
                  <Button
                    component={Link}
                    to="/MSC-Detail"
                    size="lg"
                    radius="xl"
                    color="orange"
                    rightSection={<FaArrowRight size={14} />}
                    onClick={() => navigate("/MSC-Detail")}
                    style={{
                      boxShadow: "0 10px 30px rgba(255,123,0,0.25)",
                    }}
                  >
                    Explore MSC
                  </Button>

                  <Button
                  component={Link}
                    to="/Support-MSC"
                    size="lg"
                    radius="xl"
                    variant="light"
                    color="orange"
                    leftSection={<FaHandsHelping size={16} />}
                  >
                    Support The Movement
                  </Button>
                </Group>
              </Stack>
            </MotionBox>
          </Grid.Col>

          {/* RIGHT IMAGE */}

          <Grid.Col span={{ base: 12, md: 6 }}>
            <MotionBox
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Box
                pos="relative"
                style={{
                  overflow: "hidden",
                  borderRadius: 38,
                  boxShadow: "0 30px 80px rgba(0,0,0,0.15)",
                }}
              >
                <Image src={mscImg} h={640} fit="cover" alt="MSC NGO" />

                {/* OVERLAY */}

                <Overlay
                  gradient="linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.82) 100%)"
                  opacity={1}
                />

                {/* FLOATING GLASS CARD */}

                <MotionCard
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
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
                    border: "1px solid rgba(255,255,255,0.12)",
                    zIndex: 2,
                  }}
                >
                  <Text
                    c="orange.3"
                    fw={700}
                    tt="uppercase"
                    size="sm"
                    mb={8}
                    style={{ letterSpacing: 1 }}
                  >
                    Grassroots Social Change
                  </Text>

                  <Title order={3} c="white" fw={900}>
                    Building Communities
                    <br />
                    With Equality &
                    <br />
                    Opportunity
                  </Title>

                  <Text
                    c="gray.2"
                    mt="sm"
                    style={{
                      lineHeight: 1.8,
                    }}
                  >
                    Empowering local communities with education, leadership,
                    dignity, and sustainable growth.
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
