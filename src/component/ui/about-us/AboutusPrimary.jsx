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
} from "@mantine/core";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaHandsHelping, FaHeartbeat, FaBook } from "react-icons/fa";

// 👉 Import your local images
import img1 from "../../../assets/home/about-1.jpg";
import img2 from "../../../assets/home/about-2.jpg";
import img3 from "../../../assets/home/about-2.jpg";

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

      {/* Mission & Vision */}
      <div style={{ background: "linear-gradient(135deg, #eef2ff, #f0fdf4)" }}>
        <Container size="lg" py={80}>
          <Grid>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card
                  radius="xl"
                  p="xl"
                  shadow="lg"
                  style={{ background: "#ffffff" }}
                >
                  <Group mb="md">
                    <FaHandsHelping size={30} color="#4f46e5" />
                    <Title order={3}>Our Mission</Title>
                  </Group>
                  <Text c="dimmed">
                    To uplift underprivileged communities through education,
                    healthcare, and sustainable development initiatives. We aim
                    to provide equal opportunities and empower people to build
                    better lives.
                  </Text>
                </Card>
              </motion.div>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card
                  radius="xl"
                  p="xl"
                  shadow="lg"
                  style={{ background: "#ffffff" }}
                >
                  <Group mb="md">
                    <FaHeartbeat size={30} color="#16a34a" />
                    <Title order={3}>Our Vision</Title>
                  </Group>
                  <Text c="dimmed">
                    A world where every individual has access to basic needs,
                    education, and opportunities to thrive, regardless of their
                    background.
                  </Text>
                </Card>
              </motion.div>
            </Grid.Col>
          </Grid>
        </Container>
      </div>

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
