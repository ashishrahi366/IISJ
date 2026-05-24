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
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import avarnaImg from "../../../assets/home/homeHero6.jpeg";
const MotionBox = motion(Box);
const MotionCard = motion(Card);

export default function AvarnaPreview() {
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
      {/* BACKGROUND ORBS */}

      <Box
        style={{
          position: "absolute",
          top: -120,
          left: -120,
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
          right: -120,
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "rgba(255,180,0,0.18)",
          filter: "blur(120px)",
        }}
      />

      <Container size="xl" pos="relative">
        <Grid align="center" gutter={60}>
          {/* LEFT IMAGE */}

          <Grid.Col span={{ base: 12, md: 6 }}>
            <MotionBox
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Box
                pos="relative"
                style={{
                  overflow: "hidden",
                  borderRadius: 38,
                  boxShadow: "0 30px 80px rgba(0,0,0,0.35)",
                }}
              >
                <Image src={avarnaImg} h={620} fit="cover" />

                {/* OVERLAY */}

                <Overlay
                  gradient="linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.8) 100%)"
                  opacity={1}
                />

                {/* FLOATING CONTENT */}

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
                    size="sm"
                    tt="uppercase"
                    mb={8}
                    style={{ letterSpacing: 1 }}
                  >
                    Inclusive Education & Leadership
                  </Text>

                  <Title order={3} c="white" fw={900}>
                    Beyond Barriers,
                    <br />
                    Towards Equality
                  </Title>

                  <Text
                    c="gray.2"
                    mt="sm"
                    style={{
                      lineHeight: 1.8,
                    }}
                  >
                    Empowering marginalized communities through leadership,
                    entrepreneurship, and opportunity.
                  </Text>
                </MotionCard>
              </Box>
            </MotionBox>
          </Grid.Col>

          {/* RIGHT CONTENT */}

          <Grid.Col span={{ base: 12, md: 6 }}>
            <MotionBox
              initial={{ opacity: 0, x: 40 }}
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
                  Avarna Education & Training Foundation
                </Badge>

                <Title
                  order={2}
                  c="white"
                  fw={900}
                  style={{
                    fontSize: "clamp(2.4rem, 5vw, 4.8rem)",
                    lineHeight: 1.08,
                  }}
                >
                  Building A
                  <br />
                  Future Beyond
                  <br />
                  Discrimination
                </Title>

                <Text size="lg" fw={500} c="orange.3">
                  Creating opportunities through education, leadership, and
                  social empowerment.
                </Text>

                <Text
                  c="gray.4"
                  size="md"
                  style={{
                    lineHeight: 1.9,
                  }}
                >
                  AVARNA is a grassroots initiative focused on uplifting Dalit,
                  tribal, and marginalized communities through leadership
                  development, entrepreneurship, education, and policy advocacy.
                </Text>

                <Text
                  c="gray.4"
                  size="md"
                  style={{
                    lineHeight: 1.9,
                  }}
                >
                  The foundation works to create sustainable systems that
                  encourage equality, dignity, innovation, and inclusive social
                  change across communities.
                </Text>

                {/* STATS */}

                <Group mt="md" gap="xl">
                  <Box>
                    <Title order={2} c="orange.4" fw={900}>
                      100+
                    </Title>

                    <Text c="gray.5" size="sm">
                      Youth Leaders
                    </Text>
                  </Box>

                  <Box>
                    <Title order={2} c="orange.4" fw={900}>
                      15+
                    </Title>

                    <Text c="gray.5" size="sm">
                      Community Programs
                    </Text>
                  </Box>

                  <Box>
                    <Title order={2} c="orange.4" fw={900}>
                      10+
                    </Title>

                    <Text c="gray.5" size="sm">
                      Social Initiatives
                    </Text>
                  </Box>
                </Group>

                {/* BUTTONS */}

                <Group mt="xl">
                  <Button
                    component={Link}
                    to="/Avarna"
                    size="lg"
                    radius="xl"
                    color="orange"
                    rightSection={<FaArrowRight size={14} />}
                    onClick={() => navigate("/Avarna")}
                    style={{
                      boxShadow: "0 10px 30px rgba(255,123,0,0.25)",
                    }}
                  >
                    Explore AVARNA
                  </Button>

                  <Button
                    component={Link}
                    to="/Fellowship-Equality"
                    size="lg"
                    radius="xl"
                    variant="white"
                    color="dark"
                  >
                    View Initiatives
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
