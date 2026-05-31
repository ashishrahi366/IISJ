import React, { useMemo } from "react";
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
  Badge,
  Button,
  Box,
  Overlay,
  ActionIcon,
  ThemeIcon,
} from "@mantine/core";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaUser,
  FaClock,
  FaNewspaper,
} from "react-icons/fa";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { blogsData } from "../../constants/blogsData";

export default function HomeRecentNews() {
  const featuredBlog = blogsData.find((blog) => blog.featured) || blogsData[0];

  const recentBlogs = useMemo(() => {
    return [...blogsData]
      .filter((blog) => blog.id !== featuredBlog.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 4);
  }, []);

  return (
    <Box
      py={100}
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #fff7ed 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container size="xl">
        {/* 🔥 SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            textAlign: "center",
            marginBottom: "70px",
          }}
        >
          <Badge size="lg" radius="xl" color="orange" variant="light" mb={18}>
            Latest Updates
          </Badge>

          <Title
            order={2}
            fw={900}
            style={{
              fontSize: "clamp(34px, 5vw, 60px)",
              lineHeight: 1.1,
            }}
          >
            Stories, News &
            <br />
            Community Impact
          </Title>

          <Text c="dimmed" size="lg" maw={760} mx="auto" mt="xl" lh={2}>
            Explore inspiring stories, leadership journeys, grassroots
            initiatives, and transformative community movements.
          </Text>
        </motion.div>

        <Grid gutter={40}>
          {/* 🔥 FEATURED BLOG */}
          <Grid.Col span={{ base: 12, lg: 7 }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <Card
                radius="34px"
                p={0}
                shadow="xl"
                component={Link}
                to={`/blogs/${featuredBlog.slug}`}
                style={{
                  overflow: "hidden",
                  background: "#111827",
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {/* IMAGE */}
                <Box
                  style={{
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={featuredBlog.coverImage}
                      h={{ base: 300, md: 480 }}
                      fit="cover"
                    />
                  </motion.div>

                  <Overlay
                    gradient="linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.75) 100%)"
                    opacity={1}
                  />

                  {/* CATEGORY */}
                  <Badge
                    size="lg"
                    radius="xl"
                    color="orange"
                    variant="filled"
                    style={{
                      position: "absolute",
                      top: 25,
                      left: 25,
                      zIndex: 5,
                    }}
                  >
                    {featuredBlog.category}
                  </Badge>
                </Box>

                {/* CONTENT */}
                <Box p={{ base: 25, md: 40 }}>
                  <Stack gap="lg">
                    {/* META */}
                    <Group gap="lg">
                      <Group gap={6}>
                        <FaCalendarAlt color="#f97316" size={13} />

                        <Text size="sm" c="rgba(255,255,255,0.7)">
                          {featuredBlog.date}
                        </Text>
                      </Group>

                      <Group gap={6}>
                        <FaUser color="#f97316" size={13} />

                        <Text size="sm" c="rgba(255,255,255,0.7)">
                          {featuredBlog.author}
                        </Text>
                      </Group>

                      <Group gap={6}>
                        <FaClock color="#f97316" size={13} />

                        <Text size="sm" c="rgba(255,255,255,0.7)">
                          {featuredBlog.readTime}
                        </Text>
                      </Group>
                    </Group>

                    {/* TITLE */}
                    <Title
                      order={2}
                      c="white"
                      fw={900}
                      style={{
                        lineHeight: 1.2,
                        fontSize: "clamp(30px, 4vw, 48px)",
                      }}
                    >
                      {featuredBlog.title}
                    </Title>

                    {/* DESC */}
                    <Text c="rgba(255,255,255,0.72)" size="lg" lh={2}>
                      {featuredBlog.desc}
                    </Text>

                    {/* CTA */}
                    <Button
                      component={Link}
                      to={`/blogs/${featuredBlog.slug}`}
                      radius="xl"
                      size="md"
                      color="orange"
                      rightSection={<FaArrowRight size={14} />}
                    >
                      Read Full Article
                    </Button>
                  </Stack>
                </Box>
              </Card>
            </motion.div>
          </Grid.Col>

          {/* 🔥 RECENT NEWS SIDEBAR */}
          <Grid.Col span={{ base: 12, lg: 5 }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Card
                radius="34px"
                p="xl"
                shadow="xl"
                style={{
                  height: "100%",
                  background: "#ffffff",
                  border: "1px solid rgba(0,0,0,0.06)",
                }}
              >
                {/* HEADER */}
                <Group justify="space-between" mb={30}>
                  <Group>
                    <ThemeIcon
                      size={52}
                      radius="xl"
                      color="orange"
                      variant="light"
                    >
                      <FaNewspaper size={22} />
                    </ThemeIcon>

                    <div>
                      <Title order={3}>Recent News</Title>

                      <Text size="sm" c="dimmed">
                        Latest updates & stories
                      </Text>
                    </div>
                  </Group>

                  <Anchor
                    component={Link}
                    to="/blogs"
                    underline="never"
                    fw={700}
                    c="orange"
                  >
                    <Group gap={6}>
                      <Text size="sm">View All</Text>

                      <FaArrowRight size={12} />
                    </Group>
                  </Anchor>
                </Group>

                {/* BLOG LIST */}
                <Stack gap="md">
                  {recentBlogs.map((blog, index) => (
                    <div key={blog.id}>
                      <motion.div
                        whileHover={{
                          x: 8,
                        }}
                        transition={{
                          duration: 0.25,
                        }}
                      >
                        <Card
                          component={Link}
                          to={`/blogs/${blog.slug}`}
                          radius="24px"
                          p="lg"
                          shadow="sm"
                          style={{
                            textDecoration: "none",
                            border: "1px solid rgba(0,0,0,0.05)",
                            background:
                              "linear-gradient(135deg, #fff7ed 0%, #ffffff 100%)",
                          }}
                        >
                          <Stack gap="sm">
                            {/* CATEGORY */}
                            <Badge
                              radius="xl"
                              color="orange"
                              variant="light"
                              style={{
                                width: "fit-content",
                              }}
                            >
                              {blog.category}
                            </Badge>

                            {/* TITLE */}
                            <Title
                              order={5}
                              fw={800}
                              style={{
                                lineHeight: 1.5,
                              }}
                            >
                              {blog.title}
                            </Title>

                            {/* DESC */}
                            <Text size="sm" c="dimmed" lh={1.8} lineClamp={2}>
                              {blog.shortDescription}
                            </Text>

                            {/* FOOTER */}
                            <Group justify="space-between" mt="xs">
                              <Group gap={5}>
                                <FaCalendarAlt size={11} color="#f97316" />

                                <Text size="xs" c="dimmed">
                                  {blog.date}
                                </Text>
                              </Group>

                              <Group gap={6}>
                                <Text size="xs" fw={700} c="orange">
                                  Read More
                                </Text>

                                <ActionIcon
                                  size={28}
                                  radius="xl"
                                  color="orange"
                                  variant="light"
                                >
                                  <FaArrowRight size={10} />
                                </ActionIcon>
                              </Group>
                            </Group>
                          </Stack>
                        </Card>
                      </motion.div>

                      {index !== recentBlogs.length - 1 && (
                        <Divider my="md" color="#f1f5f9" />
                      )}
                    </div>
                  ))}
                </Stack>
              </Card>
            </motion.div>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
