import React from "react";
import {
  Container,
  Title,
  Text,
  Grid,
  Card,
  Image,
  Button,
  Stack,
  Group,
  Box,
  Badge,
  ThemeIcon,
} from "@mantine/core";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaHandsHelping, FaHeartbeat, FaBook } from "react-icons/fa";

// 👉 Import your local images
import img1 from "../../../assets/pages/about1.webp";
// import img2 from "../../../assets/pages/abtHero1.webp";
import img2 from "../../../assets/pages/ngo1.webp";
import img3 from "../../../assets/pages/about3.JPG";

export default function AboutUs() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Heading Section */}
      <Container size="lg" py={80}>
        <Stack align="center" gap="md">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Title order={1} ta="center">
              About Our NGO
            </Title>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Text size="lg" c="dimmed" ta="center" maw={700}>
              We are dedicated to creating positive change by supporting
              communities, empowering individuals, and building a better future
              for everyone. Our mission is rooted in compassion, transparency,
              and long-term impact.
            </Text>
          </motion.div>
        </Stack>
      </Container>

      {/* Image Section */}
      <Container size="lg" pb={60}>
        <Grid>
          {[img1, img2, img3].map((src, index) => (
            <Grid.Col key={index} span={{ base: 12, sm: 6, md: 4 }}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Image src={src} radius="lg" h={230} fit="cover" />
              </motion.div>
            </Grid.Col>
          ))}
        </Grid>
      </Container>

      {/* MISSION & VISION SECTION */}

      <Box
        py={{ base: 80, md: 120 }}
        style={{
          background:
            "linear-gradient(135deg, #071120 0%, #0d1d36 50%, #13284a 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* BLUR EFFECTS */}

        <Box
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 320,
            height: 320,
            borderRadius: "50%",
            background: "rgba(255,123,0,0.18)",
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
          {/* SECTION HEADING */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Stack align="center" gap="md" mb={60}>
              <Badge size="lg" radius="xl" color="orange" variant="light">
                Mission & Vision
              </Badge>

              <Title
                order={2}
                ta="center"
                c="white"
                fw={900}
                style={{
                  fontSize: "clamp(2.4rem, 5vw, 4.8rem)",
                  lineHeight: 1.08,
                }}
              >
                Building Equality,
                <br />
                Leadership & Dignity
              </Title>

              <Text
                ta="center"
                c="gray.4"
                maw={720}
                size="lg"
                style={{
                  lineHeight: 1.9,
                }}
              >
                We work with marginalized communities to create opportunities
                through education, leadership, social justice initiatives, and
                sustainable community development.
              </Text>
            </Stack>
          </motion.div>

          {/* CARDS */}

          <Grid gutter={30}>
            {/* MISSION */}

            <Grid.Col span={{ base: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card
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
                    size={78}
                    radius={26}
                    variant="gradient"
                    gradient={{
                      from: "orange",
                      to: "yellow",
                    }}
                    mb="xl"
                  >
                    <FaHandsHelping size={34} />
                  </ThemeIcon>

                  <Text
                    c="orange.3"
                    fw={700}
                    tt="uppercase"
                    size="sm"
                    mb={10}
                    style={{
                      letterSpacing: 1,
                    }}
                  >
                    Our Mission
                  </Text>

                  <Title order={2} c="white" fw={800} mb="md">
                    Empower Communities
                    <br />
                    Through Education
                  </Title>

                  <Text
                    c="gray.4"
                    size="md"
                    style={{
                      lineHeight: 1.9,
                    }}
                  >
                    Our mission is to uplift marginalized and historically
                    excluded communities through education, leadership
                    development, fellowships, grassroots organizing, and
                    sustainable opportunities that create dignity, equality, and
                    social justice.
                  </Text>
                </Card>
              </motion.div>
            </Grid.Col>

            {/* VISION */}

            <Grid.Col span={{ base: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card
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
                    size={78}
                    radius={26}
                    variant="gradient"
                    gradient={{
                      from: "orange",
                      to: "yellow",
                    }}
                    mb="xl"
                  >
                    <FaHeartbeat size={34} />
                  </ThemeIcon>

                  <Text
                    c="orange.3"
                    fw={700}
                    tt="uppercase"
                    size="sm"
                    mb={10}
                    style={{
                      letterSpacing: 1,
                    }}
                  >
                    Our Vision
                  </Text>

                  <Title order={2} c="white" fw={800} mb="md">
                    A Society Built
                    <br />
                    On Equality & Justice
                  </Title>

                  <Text
                    c="gray.4"
                    size="md"
                    style={{
                      lineHeight: 1.9,
                    }}
                  >
                    We envision a world where every individual, regardless of
                    caste, gender, or social background, has equal access to
                    education, dignity, leadership opportunities, and the
                    freedom to live with respect and justice.
                  </Text>
                </Card>
              </motion.div>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* What We Do */}
      <Container size="lg" py={80}>
        <Title order={2} ta="center" mb={40}>
          What We Do
        </Title>
        <Grid>
          {[
            {
              title: "Education Support",
              icon: <FaBook size={28} color="#2563eb" />,
            },
            {
              title: "Healthcare Camps",
              icon: <FaHeartbeat size={28} color="#16a34a" />,
            },
            {
              title: "Community Help",
              icon: <FaHandsHelping size={28} color="#7c3aed" />,
            },
          ].map((item, i) => (
            <Grid.Col key={i} span={{ base: 12, sm: 6, md: 4 }}>
              <Card
                radius="xl"
                p="xl"
                shadow="md"
                style={{
                  background: "linear-gradient(135deg, #ffffff, #f9fafb)",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-8px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <Stack align="center">
                  {item.icon}
                  <Title order={4}>{item.title}</Title>
                  <Text size="sm" c="dimmed" ta="center">
                    Making real impact through consistent efforts and community
                    support.
                  </Text>
                </Stack>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Container>

      {/* CTA */}
      <Container size="lg" py={60}>
        <Card radius="lg" p="xl" withBorder style={{ textAlign: "center" }}>
          <Title order={2} mb="sm">
            Join Us in Making a Difference
          </Title>
          <Text c="dimmed" mb="lg">
            Your support can change lives. Become a volunteer or donate today.
          </Text>
          <Button size="md" radius="xl" onClick={() => navigate("/contact")}>
            Get Involved
          </Button>
        </Card>
      </Container>
    </div>
  );
}
