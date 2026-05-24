import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Title,
  Text,
  Grid,
  Card,
  Image,
  Stack,
  Group,
  Badge,
  Box,
  Button,
  Avatar,
  Overlay,
  ActionIcon,
  Divider,
  ThemeIcon,
  SimpleGrid,
} from "@mantine/core";

import {
  FaArrowRight,
  FaPlay,
  FaCalendarAlt,
  FaBookOpen,
  FaUsers,
  FaLightbulb,
  FaGlobe,
  FaQuoteLeft,
  FaNewspaper,
  FaClock,
  FaUserEdit,
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import heroImg from "../assets/home/about-1.jpg";
import g1 from "../assets/home/about-1.jpg";
import g2 from "../assets/home/about-1.jpg";
import g3 from "../assets/home/about-1.jpg";
import g4 from "../assets/home/about-1.jpg";

export default function BlogsPage() {
  const featuredBlogs = [
    {
      id: "education-reform-2026",
      title: "Education Reform for Marginalized Communities",
      desc: "Grassroots education programs are transforming lives across underserved communities.",
      image: g1,
      category: "Education",
      author: "Vimal Kumar",
      authorImage: g1,
      date: "May 25, 2026",
      readTime: "5 min read",
    },

    {
      id: "community-leadership",
      title: "Building Community Leadership Through Action",
      desc: "Training future changemakers to create sustainable social impact.",
      image: g2,
      category: "Leadership",
      author: "Anjali Devi",
      authorImage: g2,
      date: "May 22, 2026",
      readTime: "6 min read",
    },

    {
      id: "social-justice-movement",
      title: "The Future of Social Justice Movements",
      desc: "Building inclusive systems rooted in equality, dignity, and community power.",
      image: g3,
      category: "Advocacy",
      author: "Ravi Kumar",
      authorImage: g3,
      date: "May 18, 2026",
      readTime: "8 min read",
    },
  ];

  const latestBlogs = [
    {
      id: "future-education",
      title: "Future of Inclusive Education",
      desc: "Creating equal learning opportunities for every child.",
      image: g1,
      category: "Education",
      author: "Admin",
      authorImage: g1,
      date: "May 11, 2026",
      readTime: "4 min read",
    },

    {
      id: "health-awareness",
      title: "Health Awareness in Rural Communities",
      desc: "Improving healthcare accessibility through local action.",
      image: g2,
      category: "Health",
      author: "Priya Sharma",
      authorImage: g2,
      date: "May 9, 2026",
      readTime: "6 min read",
    },

    {
      id: "economic-growth",
      title: "Economic Empowerment Initiatives",
      desc: "Helping communities build sustainable livelihoods.",
      image: g3,
      category: "Development",
      author: "Ravi Kumar",
      authorImage: g3,
      date: "May 7, 2026",
      readTime: "5 min read",
    },

    {
      id: "social-awareness",
      title: "Creating Awareness About Social Equality",
      desc: "Community-driven campaigns creating measurable impact.",
      image: g4,
      category: "Awareness",
      author: "Avarna Team",
      authorImage: g4,
      date: "May 3, 2026",
      readTime: "8 min read",
    },
  ];

  const categoryCards = [
    {
      title: "Education",
      icon: <FaBookOpen size={22} />,
      desc: "Learning, scholarships & youth development",
    },

    {
      title: "Leadership",
      icon: <FaUsers size={22} />,
      desc: "Grassroots leaders & changemakers",
    },

    {
      title: "Innovation",
      icon: <FaLightbulb size={22} />,
      desc: "Creative ideas shaping communities",
    },

    {
      title: "Global Stories",
      icon: <FaGlobe size={22} />,
      desc: "Voices and stories from around the world",
    },
  ];

  const editorPicks = [
    {
      id: "editor-pick-1",
      title: "Education Beyond Barriers",
      image: g1,
    },

    {
      id: "editor-pick-2",
      title: "Youth Voices Creating Change",
      image: g2,
    },

    {
      id: "editor-pick-3",
      title: "Women Leading Communities",
      image: g3,
    },
  ];

  return (
    <div style={{ background: "#f8fafc" }}>
      {/* HERO */}

      <Box
        style={{
          position: "relative",
          height: "85vh",
          overflow: "hidden",
        }}
      >
        <Image src={heroImg} h="100%" fit="cover" />

        <Overlay color="#000" opacity={0.65} zIndex={1} />

        <Container
          size="xl"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box maw={750}>
            <Badge radius="xl" size="lg" color="orange">
              Stories • Research • Community Voices
            </Badge>

            <Title
              c="white"
              fw={900}
              mt="lg"
              style={{
                fontSize: "clamp(42px, 8vw, 92px)",
                lineHeight: 1.05,
              }}
            >
              Ideas That
              <br />
              Inspire Change
            </Title>

            <Text
              c="rgba(255,255,255,0.82)"
              mt="xl"
              size="xl"
              maw={650}
              lh={1.8}
            >
              Explore powerful stories, grassroots impact, leadership journeys,
              and social transformation through our latest blogs and articles.
            </Text>

            <Group mt={40}>
              <Button
                radius="xl"
                size="lg"
                color="orange"
                rightSection={<FaArrowRight />}
              >
                Explore Blogs
              </Button>

              <Button
                radius="xl"
                size="lg"
                variant="white"
              >
                Watch Stories
              </Button>
            </Group>
          </Box>
        </Container>
      </Box>

      {/* FEATURED SLIDER */}

      <Container size="xl" py={100}>
        <Group justify="space-between" mb={40}>
          <div>
            <Text c="orange" fw={700}>
              FEATURED ARTICLES
            </Text>

            <Title order={2} fw={900}>
              Top Stories & Insights
            </Title>
          </div>
        </Group>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          spaceBetween={30}
        >
          {featuredBlogs.map((blog) => (
            <SwiperSlide key={blog.id}>
              <Card
                component={Link}
                to={`/blog/${blog.id}`}
                radius="36px"
                shadow="xl"
                p={0}
                style={{
                  overflow: "hidden",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                <Grid gutter={0}>
                  <Grid.Col span={{ base: 12, md: 6 }}>
                    <Image src={blog.image} h={550} fit="cover" />
                  </Grid.Col>

                  <Grid.Col span={{ base: 12, md: 6 }}>
                    <Box p={{ base: 30, md: 60 }}>
                      <Badge color="orange">{blog.category}</Badge>

                      <Title
                        order={1}
                        mt="lg"
                        fw={900}
                        style={{ lineHeight: 1.15 }}
                      >
                        {blog.title}
                      </Title>

                      <Text mt="xl" size="lg" c="dimmed" lh={1.9}>
                        {blog.desc}
                      </Text>

                      <Group mt={40}>
                        <Avatar src={blog.authorImage} radius="xl" />

                        <div>
                          <Text fw={700}>{blog.author}</Text>

                          <Text size="sm" c="dimmed">
                            {blog.date} • {blog.readTime}
                          </Text>
                        </div>
                      </Group>

                      <Button
                        mt={40}
                        radius="xl"
                        color="orange"
                        rightSection={<FaArrowRight />}
                      >
                        Read Full Article
                      </Button>
                    </Box>
                  </Grid.Col>
                </Grid>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>

      {/* BLOG CATEGORIES */}

      <Container size="lg" py={20}>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="xl">
          {categoryCards.map((item, index) => (
            <Card
              key={index}
              radius="28px"
              shadow="md"
              p="xl"
              style={{
                textAlign: "center",
                background: "white",
                border: "1px solid rgba(0,0,0,0.05)",
              }}
            >
              <ThemeIcon
                size={70}
                radius="xl"
                color="orange"
                variant="light"
                mx="auto"
              >
                {item.icon}
              </ThemeIcon>

              <Title order={4} mt="lg">
                {item.title}
              </Title>

              <Text c="dimmed" mt="sm" size="sm">
                {item.desc}
              </Text>
            </Card>
          ))}
        </SimpleGrid>
      </Container>

      {/* LATEST BLOGS */}

      <Container size="xl" py={100}>
        <Group justify="space-between" mb={40}>
          <div>
            <Text c="orange" fw={700}>
              LATEST ARTICLES
            </Text>

            <Title order={2} fw={900}>
              Explore Recent Stories
            </Title>
          </div>

          <Button radius="xl" variant="light" color="orange">
            View All
          </Button>
        </Group>

        <Grid>
          {latestBlogs.map((blog) => (
            <Grid.Col key={blog.id} span={{ base: 12, md: 6 }}>
              <Card
                component={Link}
                to={`/blog/${blog.id}`}
                radius="32px"
                shadow="lg"
                padding="lg"
                style={{
                  textDecoration: "none",
                  height: "100%",
                  cursor: "pointer",
                  overflow: "hidden",
                }}
              >
                <Image src={blog.image} height={280} radius="xl" />

                <Stack mt="lg">
                  <Group justify="space-between">
                    <Badge color="orange">{blog.category}</Badge>

                    <Group gap={6}>
                      <FaCalendarAlt size={12} />

                      <Text size="xs" c="dimmed">
                        {blog.date}
                      </Text>
                    </Group>
                  </Group>

                  <Title order={3}>{blog.title}</Title>

                  <Text c="dimmed" size="sm" lineClamp={3}>
                    {blog.desc}
                  </Text>

                  <Divider />

                  <Group justify="space-between">
                    <Group gap={10}>
                      <Avatar src={blog.authorImage} radius="xl" />

                      <div>
                        <Text fw={700} size="sm">
                          {blog.author}
                        </Text>

                        <Text size="xs" c="dimmed">
                          {blog.readTime}
                        </Text>
                      </div>
                    </Group>

                    <ActionIcon
                      size="lg"
                      radius="xl"
                      color="orange"
                      variant="light"
                    >
                      <FaArrowRight />
                    </ActionIcon>
                  </Group>
                </Stack>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Container>

      {/* EDITOR PICKS */}

      <Box
        py={100}
        style={{
          background: "linear-gradient(180deg, #fff7ed 0%, #ffffff 100%)",
        }}
      >
        <Container size="xl">
          <Text c="orange" fw={700} ta="center">
            EDITOR'S PICKS
          </Text>

          <Title order={2} fw={900} ta="center" mt={10} mb={50}>
            Handpicked Stories For You
          </Title>

          <Grid>
            {editorPicks.map((blog) => (
              <Grid.Col key={blog.id} span={{ base: 12, md: 4 }}>
                <Card
                  component={Link}
                  to={`/blog/${blog.id}`}
                  radius="30px"
                  p={0}
                  shadow="xl"
                  style={{
                    overflow: "hidden",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  <Box style={{ position: "relative" }}>
                    <Image src={blog.image} h={420} fit="cover" />

                    <Overlay color="#000" opacity={0.45} />

                    <Box
                      style={{
                        position: "absolute",
                        bottom: 30,
                        left: 30,
                        right: 30,
                        zIndex: 2,
                      }}
                    >
                      <Badge color="orange">Editor's Pick</Badge>

                      <Title c="white" order={3} mt="md">
                        {blog.title}
                      </Title>
                    </Box>
                  </Box>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* VIDEO SECTION */}

      <Box
        py={110}
        style={{
          background: "linear-gradient(135deg, #111827 0%, #1e293b 100%)",
        }}
      >
        <Container size="lg">
          <Grid align="center" gutter={60}>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Badge color="orange" size="lg">
                VIDEO STORIES
              </Badge>

              <Title
                c="white"
                mt="lg"
                fw={900}
                style={{
                  fontSize: "clamp(36px, 5vw, 60px)",
                }}
              >
                Watch Stories
                <br />
                That Matter
              </Title>

              <Text
                c="rgba(255,255,255,0.75)"
                mt="xl"
                size="lg"
                lh={1.9}
              >
                Real stories from grassroots leaders, youth changemakers,
                educators, and communities driving social transformation.
              </Text>

              <Group mt={35}>
                <Button
                  size="lg"
                  radius="xl"
                  color="orange"
                  leftSection={<FaPlay />}
                >
                  Watch Videos
                </Button>

                <Button size="lg" radius="xl" variant="white">
                  Subscribe Channel
                </Button>
              </Group>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <Box
                style={{
                  position: "relative",
                  paddingTop: "56.25%",
                }}
              >
                <iframe
                  src="https://www.youtube.com/embed/g6xcJEIukhE"
                  title="YouTube Video"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    border: 0,
                    borderRadius: "24px",
                  }}
                  allowFullScreen
                />
              </Box>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* QUOTE SECTION */}

      <Container size="md" py={100}>
        <Card
          radius="40px"
          p={60}
          shadow="xl"
          style={{
            background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
            color: "white",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <ThemeIcon
            size={90}
            radius="xl"
            variant="white"
            color="orange"
            mx="auto"
          >
            <FaQuoteLeft size={34} />
          </ThemeIcon>

          <Title
            mt={35}
            fw={800}
            style={{
              fontSize: "clamp(28px, 4vw, 46px)",
              lineHeight: 1.4,
            }}
          >
            “Stories create awareness,
            <br />
            awareness creates change.”
          </Title>

          <Text
            mt="xl"
            size="lg"
            style={{ opacity: 0.9 }}
          >
            Through storytelling, we amplify unheard voices and inspire action.
          </Text>

          <Text mt={25} fw={700}>
            — Editorial Team
          </Text>
        </Card>
      </Container>

      {/* NEWSLETTER CTA */}

      <Container size="lg" py={20}>
        <Card
          radius="36px"
          p={50}
          shadow="lg"
          style={{
            background: "white",
            border: "1px solid rgba(0,0,0,0.06)",
          }}
        >
          <Grid align="center">
            <Grid.Col span={{ base: 12, md: 8 }}>
              <Badge color="orange" size="lg">
                JOIN OUR NEWSLETTER
              </Badge>

              <Title order={2} fw={900} mt="lg">
                Stay Updated With Our Latest Articles & Stories
              </Title>

              <Text c="dimmed" mt="md" size="lg">
                Get updates on new blogs, leadership stories, social impact
                initiatives, and grassroots community work.
              </Text>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 4 }}>
              <Button
                fullWidth
                size="xl"
                radius="xl"
                color="orange"
                rightSection={<FaArrowRight />}
              >
                Subscribe Now
              </Button>
            </Grid.Col>
          </Grid>
        </Card>
      </Container>

      {/* FINAL CTA */}

      <Container size="lg" py={100}>
        <Card
          radius="40px"
          p={70}
          style={{
            background:
              "linear-gradient(135deg, #111827 0%, #1e293b 100%)",
            color: "white",
            textAlign: "center",
          }}
        >
          <ThemeIcon
            size={90}
            radius="xl"
            color="orange"
            mx="auto"
          >
            <FaNewspaper size={34} />
          </ThemeIcon>

          <Title
            mt={35}
            fw={900}
            style={{
              fontSize: "clamp(34px, 5vw, 62px)",
            }}
          >
            Share Your Story
          </Title>

          <Text
            mt="xl"
            size="lg"
            maw={700}
            mx="auto"
            c="rgba(255,255,255,0.75)"
            lh={1.9}
          >
            Have a story, research, or experience that can inspire change?
            Become part of our growing knowledge movement.
          </Text>

          <Group justify="center" mt={45}>
            <Button
              size="lg"
              radius="xl"
              color="orange"
              leftSection={<FaUserEdit />}
            >
              Submit Blog
            </Button>

            <Button
              size="lg"
              radius="xl"
              variant="white"
            >
              Contact Editorial Team
            </Button>
          </Group>
        </Card>
      </Container>
    </div>
  );
}
