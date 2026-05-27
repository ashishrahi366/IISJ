import React from "react";
import {
  Container,
  Title,
  Text,
  Badge,
  Group,
  Stack,
  Image,
  Card,
  Divider,
  SimpleGrid,
  Button,
} from "@mantine/core";

import { useParams, Link } from "react-router-dom";

import { motion } from "framer-motion";
import { relatedBlogs } from "../utils/methods";

import { FaArrowLeft, FaCalendarAlt, FaUser, FaClock } from "react-icons/fa";

import { blogsData } from "../constants/blogsData";

export default function BlogDetails() {
  const { slug } = useParams();
  const blog = blogsData.find((item) => item.slug === slug);
  const randomRelatedBlogs = relatedBlogs(blogsData, blog);

  if (!blog) {
    return (
      <Container py={120}>
        <Title order={2}>Blog not found</Title>
      </Container>
    );
  }
  return (
    <div
      style={{
        background: "#f8fafc",
        minHeight: "100vh",
        padding: "120px 0 80px",
      }}
    >
      <Container size="lg">
        {/* BACK BUTTON */}
        <Button
          component={Link}
          to="/blogs"
          variant="light"
          radius="xl"
          leftSection={<FaArrowLeft size={14} />}
          mb={30}
        >
          Back to Blogs
        </Button>

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card
            radius="32px"
            p={0}
            shadow="xl"
            style={{
              overflow: "hidden",
              background: "white",
            }}
          >
            <Image
              src={blog.coverImage}
              alt={blog.coverImageAlt}
              h={420}
              fit="cover"
            />

            <Stack p="xl" gap="lg">
              <Group>
                <Badge size="lg" radius="xl" color="orange">
                  {blog.category}
                </Badge>

                {blog.tags.map((tag, index) => (
                  <Badge key={index} variant="light" radius="xl">
                    {tag}
                  </Badge>
                ))}
              </Group>

              <Title
                order={1}
                style={{
                  lineHeight: 1.2,
                  fontSize: "clamp(32px,5vw,52px)",
                }}
              >
                {blog.title}
              </Title>

              <Text
                size="lg"
                c="dimmed"
                style={{
                  lineHeight: 1.9,
                }}
              >
                {blog.shortDescription}
              </Text>

              <Group gap="xl">
                <Group gap={6}>
                  <FaUser size={13} />
                  <Text size="sm">{blog.author}</Text>
                </Group>

                <Group gap={6}>
                  <FaCalendarAlt size={13} />
                  <Text size="sm">{blog.date}</Text>
                </Group>

                <Group gap={6}>
                  <FaClock size={13} />
                  <Text size="sm">{blog.readTime}</Text>
                </Group>
              </Group>
            </Stack>
          </Card>
        </motion.div>

        {/* BLOG CONTENT */}
        <Card
          mt={40}
          radius="32px"
          p="xl"
          shadow="md"
          style={{
            background: "white",
          }}
        >
          <Stack gap="xl">
            {blog.content.map((section, index) => {
              if (section.type === "heading") {
                return (
                  <Title key={index} order={2}>
                    {section.text}
                  </Title>
                );
              }

              if (section.type === "paragraph") {
                return (
                  <Text
                    key={index}
                    size="lg"
                    style={{
                      lineHeight: 2,
                    }}
                  >
                    {section.text}
                  </Text>
                );
              }

              if (section.type === "quote") {
                return (
                  <Card
                    key={index}
                    radius="24px"
                    p="xl"
                    style={{
                      background:
                        "linear-gradient(135deg,#fff7ed 0%, #ffedd5 100%)",
                    }}
                  >
                    <Text
                      size="xl"
                      fw={700}
                      style={{
                        lineHeight: 1.8,
                      }}
                    >
                      “{section.text}”
                    </Text>

                    <Text mt="md" c="dimmed">
                      — {section.author}
                    </Text>
                  </Card>
                );
              }

              if (section.type === "image") {
                return (
                  <div key={index}>
                    <Image src={section.image} radius="24px" />

                    <Text ta="center" size="sm" c="dimmed" mt="sm">
                      {section.caption}
                    </Text>
                  </div>
                );
              }

              return null;
            })}
          </Stack>
        </Card>

        {/* RELATED BLOGS */}
        <div style={{ marginTop: "70px" }}>
          <Group justify="space-between" mb="xl">
            <Title order={2}>Related Blogs</Title>
          </Group>

          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl">
            {randomRelatedBlogs.map((item) => (
              <motion.div key={item.id} whileHover={{ y: -8 }}>
                <Card
                  component={Link}
                  to={`/blogs/${item.slug}`}
                  radius="28px"
                  p={0}
                  shadow="lg"
                  style={{
                    overflow: "hidden",
                    textDecoration: "none",
                    background: "white",
                  }}
                >
                  <Image src={item.coverImage} h={220} fit="cover" />

                  <Stack p="lg">
                    <Badge
                      radius="xl"
                      color="orange"
                      variant="light"
                      w="fit-content"
                    >
                      {item.category}
                    </Badge>

                    <Title order={4} lineClamp={2}>
                      {item.title}
                    </Title>

                    <Text size="sm" c="dimmed" lineClamp={3}>
                      {item.shortDescription}
                    </Text>

                    <Divider />

                    <Group justify="space-between">
                      <Text size="xs">{item.author}</Text>

                      <Text size="xs" c="dimmed">
                        {item.date}
                      </Text>
                    </Group>
                  </Stack>
                </Card>
              </motion.div>
            ))}
          </SimpleGrid>
        </div>
      </Container>
    </div>
  );
}
