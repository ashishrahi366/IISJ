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
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import previewImg from "../../../assets/pages/iisj2.jpeg";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

export default function IISJPreview() {
  const navigate = useNavigate();

  return (
    <Box
      py={{ base: 80, md: 120 }}
      pos="relative"
      style={{
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #f8fafc 0%, #eef3f9 50%, #f8fafc 100%)",
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
        <MotionCard
          radius={40}
          p={0}
          shadow="xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{
            overflow: "hidden",
            background: "#fff",
            border: "1px solid rgba(0,0,0,0.04)",
          }}
        >
          <Grid gutter={0} align="center">
            {/* LEFT CONTENT */}

            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack p={{ base: "xl", md: 60 }} gap="lg">
                <Badge
                  color="orange"
                  variant="light"
                  radius="xl"
                  size="lg"
                  w="fit-content"
                >
                  Social Justice & Leadership
                </Badge>

                <Title
                  order={2}
                  fw={900}
                  style={{
                    fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
                    lineHeight: 1.08,
                  }}
                >
                  International
                  <br />
                  Institute for
                  <br />
                  Social Justice
                </Title>

                <Text size="lg" fw={500} c="orange.7">
                  Empowering communities through education, leadership, and
                  opportunity.
                </Text>

                <Text
                  c="dimmed"
                  size="md"
                  style={{
                    lineHeight: 1.9,
                    maxWidth: 580,
                  }}
                >
                  IISJ is dedicated to building socially conscious leaders and
                  strengthening marginalized communities through education,
                  fellowship programs, advocacy, and grassroots leadership
                  initiatives.
                </Text>

                {/* STATS */}

                <Group mt="md" gap="xl">
                  <Box>
                    <Title order={2} c="orange.6" fw={900}>
                      500+
                    </Title>

                    <Text c="dimmed" size="sm">
                      Community Leaders
                    </Text>
                  </Box>

                  <Box>
                    <Title order={2} c="orange.6" fw={900}>
                      20+
                    </Title>

                    <Text c="dimmed" size="sm">
                      Programs & Workshops
                    </Text>
                  </Box>

                  <Box>
                    <Title order={2} c="orange.6" fw={900}>
                      10+
                    </Title>

                    <Text c="dimmed" size="sm">
                      Resource Centers
                    </Text>
                  </Box>
                </Group>

                {/* BUTTONS */}

                <Group mt="xl">
                  <Button
                    component={Link}
                    to="/IISJ"
                    size="lg"
                    radius="xl"
                    color="orange"
                    rightSection={<FaArrowRight size={14} />}
                    onClick={() => navigate("/IISJ")}
                    style={{
                      boxShadow: "0 10px 30px rgba(255,123,0,0.25)",
                    }}
                  >
                    Explore IISJ
                  </Button>

                  <Button
                    component={Link}
                    to="/Community-Resource-Centers"
                    size="lg"
                    radius="xl"
                    variant="light"
                    color="orange"
                  >
                    Our Programs
                  </Button>
                </Group>
              </Stack>
            </Grid.Col>

            {/* RIGHT IMAGE SECTION */}

            <Grid.Col span={{ base: 12, md: 6 }}>
              <MotionBox
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                style={{
                  position: "relative",
                  height: "100%",
                  minHeight: 620,
                  overflow: "hidden",
                }}
              >
                <Image src={previewImg} h={620} fit="cover" />

                {/* OVERLAY */}

                <Overlay
                  gradient="linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.75) 100%)"
                  opacity={1}
                />

                {/* FLOATING GLASS CARD */}

                <MotionCard
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                  radius={28}
                  p="xl"
                  bg="rgba(255,255,255,0.12)"
                  style={{
                    position: "absolute",
                    bottom: 30,
                    left: 30,
                    right: 30,
                    backdropFilter: "blur(18px)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    zIndex: 2,
                  }}
                >
                  <Text c="orange.3" fw={700} tt="uppercase" size="sm" mb={8}>
                    Building Futures
                  </Text>

                  <Title order={3} c="white" fw={800}>
                    Education & Leadership For Social Transformation
                  </Title>

                  <Text
                    c="gray.2"
                    mt="sm"
                    style={{
                      lineHeight: 1.8,
                    }}
                  >
                    Supporting communities with sustainable opportunities,
                    learning spaces, and leadership development.
                  </Text>
                </MotionCard>
              </MotionBox>
            </Grid.Col>
          </Grid>
        </MotionCard>
      </Container>
    </Box>
  );
}
