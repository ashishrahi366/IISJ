import {
  Container,
  Grid,
  Card,
  Image,
  Text,
  Title,
  Group,
  Stack,
  Box,
  Badge,
  Button,
  Overlay,
  ActionIcon,
} from "@mantine/core";

import { motion } from "framer-motion";
import { FaUser, FaCalendarAlt, FaArrowRight, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { blogsData } from "../../constants/blogsData";

const featuredBlog = blogsData.find((blog) => blog.featured) || blogsData[0];

const otherBlogs = blogsData.filter((blog) => blog.id !== featuredBlog.id);

function BlogSection() {
  return (
    <Box
      py={100}
      style={{
        background: "linear-gradient(180deg, #fff7ed 0%, #ffffff 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container size="xl">
        {/* 🔥 HEADER */}
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
            Latest Stories
          </Badge>

          <Title
            order={2}
            fw={900}
            style={{
              fontSize: "clamp(34px, 5vw, 60px)",
              lineHeight: 1.1,
            }}
          >
            Insights, Stories &
            <br />
            Community Voices
          </Title>

          <Text c="dimmed" size="lg" maw={760} mx="auto" mt="xl" lh={2}>
            Explore inspiring stories, grassroots impact, leadership journeys,
            and transformative initiatives shaping communities across India.
          </Text>
        </motion.div>

        {/* 🔥 FEATURED BLOG */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Card
            radius="36px"
            p={0}
            mb={60}
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
            <Grid gutter={0} align="center">
              {/* IMAGE */}
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Box
                  style={{
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Image src={featuredBlog.coverImage} h={520} fit="cover" />

                  <Overlay
                    gradient="linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.65) 100%)"
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
              </Grid.Col>

              {/* CONTENT */}
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Box p={{ base: 30, md: 55 }}>
                  <Stack gap="lg">
                    <Title
                      c="white"
                      fw={900}
                      style={{
                        fontSize: "clamp(32px, 4vw, 52px)",
                        lineHeight: 1.15,
                      }}
                    >
                      {featuredBlog.title}
                    </Title>

                    <Text c="rgba(255,255,255,0.72)" size="lg" lh={2}>
                      {featuredBlog.shortDescription}
                    </Text>

                    {/* META */}
                    <Group mt="sm">
                      <Group gap={6}>
                        <FaUser size={13} color="rgba(255,255,255,0.7)" />

                        <Text c="rgba(255,255,255,0.7)" size="sm">
                          {featuredBlog.author}
                        </Text>
                      </Group>

                      <Group gap={6}>
                        <FaCalendarAlt
                          size={13}
                          color="rgba(255,255,255,0.7)"
                        />

                        <Text c="rgba(255,255,255,0.7)" size="sm">
                          {featuredBlog.date}
                        </Text>
                      </Group>

                      <Group gap={6}>
                        <FaClock size={13} color="rgba(255,255,255,0.7)" />

                        <Text c="rgba(255,255,255,0.7)" size="sm">
                          {featuredBlog.readTime}
                        </Text>
                      </Group>
                    </Group>

                    {/* CTA */}
                    <Button
                      mt="md"
                      radius="xl"
                      size="md"
                      color="orange"
                      rightSection={<FaArrowRight size={14} />}
                      style={{
                        width: "fit-content",
                        boxShadow: "0 10px 30px rgba(249,115,22,0.25)",
                      }}
                    >
                      Read Full Story
                    </Button>
                  </Stack>
                </Box>
              </Grid.Col>
            </Grid>
          </Card>
        </motion.div>

        {/* 🔥 BLOG GRID */}
        <Grid gutter="xl">
          {otherBlogs.slice(0, 3).map((blog, index) => (
            <Grid.Col key={blog.id} span={{ base: 12, md: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                }}
                style={{ height: "100%" }}
              >
                <Card
                  radius="30px"
                  p={0}
                  shadow="xl"
                  component={Link}
                  to={`/blogs/${blog.slug}`}
                  style={{
                    height: "100%",
                    overflow: "hidden",
                    background: "#fff",
                    textDecoration: "none",
                    border: "1px solid rgba(0,0,0,0.06)",
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
                      whileHover={{
                        scale: 1.05,
                      }}
                      transition={{
                        duration: 0.4,
                      }}
                    >
                      <Image src={blog.coverImage} h={260} fit="cover" />
                    </motion.div>

                    {/* CATEGORY */}
                    <Badge
                      radius="xl"
                      color="orange"
                      variant="filled"
                      style={{
                        position: "absolute",
                        top: 18,
                        left: 18,
                        zIndex: 5,
                      }}
                    >
                      {blog.category}
                    </Badge>
                  </Box>

                  {/* CONTENT */}
                  <Box p="xl">
                    <Stack gap="md">
                      <Title
                        order={3}
                        fw={800}
                        lineClamp={2}
                        style={{
                          lineHeight: 1.3,
                        }}
                      >
                        {blog.title}
                      </Title>

                      <Text c="dimmed" size="sm" lineClamp={3} lh={1.8}>
                        {blog.shortDescription}
                      </Text>

                      {/* META */}
                      <Group justify="space-between" mt="sm">
                        <Group gap={6}>
                          <FaUser size={12} color="#f97316" />

                          <Text size="xs" fw={600}>
                            {blog.author}
                          </Text>
                        </Group>

                        <Group gap={6}>
                          <FaCalendarAlt size={12} color="#f97316" />

                          <Text size="xs">{blog.date}</Text>
                        </Group>
                      </Group>

                      {/* READ MORE */}
                      <Group justify="space-between" mt="sm">
                        <Text fw={700} c="orange" size="sm">
                          Read More
                        </Text>

                        <ActionIcon radius="xl" color="orange" variant="light">
                          <FaArrowRight size={13} />
                        </ActionIcon>
                      </Group>
                    </Stack>
                  </Box>
                </Card>
              </motion.div>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default BlogSection;
