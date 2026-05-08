import React from "react";
import {
  Container,
  Grid,
  Card,
  Image,
  Text,
  Title,
  Stack,
  Group,
  Anchor,
  Divider,
} from "@mantine/core";
import { motion } from "framer-motion";
import { FaArrowRight, FaCalendarAlt, FaUser } from "react-icons/fa";
import blogMain from "../../assets/home/about-1.jpg";

export default function HomeRecentNews() {
  const blogs = [
    {
      title: "Empowering Communities Through Education",
      desc: "How grassroots education programs are transforming lives in underserved regions.",
    },
    {
      title: "Women Leadership & Social Change",
      desc: "Creating opportunities for women to lead community transformation initiatives.",
    },
    {
      title: "Youth Fellowship Program Launch",
      desc: "Supporting young changemakers through mentorship and leadership training.",
    },
    {
      title: "Building Inclusive Rural Development",
      desc: "A sustainable model focused on equality, dignity, and local participation.",
    },
  ];

  return (
    <div
      style={{
        background: "#f8fafc",
        padding: "80px 0",
      }}
    >
      <Container size="xl">
        <Grid gutter={40}>
          <Grid.Col span={{ base: 12, lg: 7 }}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card
                radius="24px"
                p={0}
                shadow="lg"
                style={{
                  overflow: "hidden",
                  background: "white",
                }}
              >
                <div style={{ overflow: "hidden" }}>
                  <motion.div whileHover={{ scale: 1.03 }}>
                    <Image
                      src={blogMain}
                      h={{ base: 260, sm: 350, md: 420 }}
                      fit="cover"
                    />
                  </motion.div>
                </div>

                <Stack p="xl" gap="md">
                  <Group gap="lg">
                    <Group gap={6}>
                      <FaCalendarAlt color="orange" size={14} />
                      <Text size="sm" c="dimmed">
                        May 08, 2026
                      </Text>
                    </Group>

                    <Group gap={6}>
                      <FaUser color="orange" size={14} />
                      <Text size="sm" c="dimmed">
                        Admin
                      </Text>
                    </Group>
                  </Group>
                  <Title
                    order={2}
                    style={{
                      lineHeight: 1.3,
                    }}
                  >
                    Empowering Marginalized Communities Through Education &
                    Leadership
                  </Title>
                  <Text
                    c="dimmed"
                    size="md"
                    style={{
                      lineHeight: 1.8,
                    }}
                  >
                    Discover how community-driven initiatives are creating
                    sustainable opportunities for youth, women, and underserved
                    populations through education, leadership training, and
                    grassroots empowerment programs.
                  </Text>
                </Stack>
              </Card>
            </motion.div>
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 5 }}>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card
                radius="24px"
                p="xl"
                shadow="md"
                style={{
                  height: "100%",
                  background: "white",
                  border: "1px solid #eef2ff",
                }}
              >
                <Group justify="space-between" mb="lg">
                  <Title order={3}>Recent News</Title>

                  <Anchor href="/blogs" underline="never" fw={600} c="#4f46e5">
                    <Group gap={6}>
                      <Text size="sm" color="orange">
                        View All
                      </Text>
                      <FaArrowRight size={12} />
                    </Group>
                  </Anchor>
                </Group>

                <Stack gap="md">
                  {blogs.map((blog, index) => (
                    <div key={index}>
                      <motion.div whileHover={{ x: 5 }}>
                        <div
                          style={{
                            cursor: "pointer",
                          }}
                        >
                          <Title
                            order={5}
                            style={{
                              lineHeight: 1.5,
                              marginBottom: "8px",
                            }}
                          >
                            {blog.title}
                          </Title>

                          <Text
                            size="sm"
                            c="dimmed"
                            style={{
                              lineHeight: 1.7,
                            }}
                          >
                            {blog.desc}
                          </Text>
                        </div>
                      </motion.div>

                      {index !== blogs.length - 1 && (
                        <Divider my="lg" color="#e2e8f0" />
                      )}
                    </div>
                  ))}
                </Stack>
              </Card>
            </motion.div>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}
