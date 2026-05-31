import React, { useRef } from "react";
import { Link } from "react-router-dom";
import MediaCoverageSection from "../component/ui/MediaCoverageSection";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
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

import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
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
  // FaArrowRight,
  // FaCalendarAlt,
} from "react-icons/fa";
import { useMemo } from "react";
import { blogsData } from "../constants/blogsData";

import "swiper/css";
import "swiper/css/pagination";
import heroImg from "../assets/pages/blogHero1.webp";

export default function BlogsPage() {
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
  const featuredBlogs = useMemo(() => {
    return blogsData.filter((blog) => blog.featured);
  }, []);

  const latestBlogs = useMemo(() => {
    return [...blogsData].slice(0, 4);
  }, []);

  const editorPicks = useMemo(() => {
    return [...blogsData].sort(() => Math.random() - 0.5).slice(0, 10);
  }, []);

  const autoplay = useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
    })
  );

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

              <Button radius="xl" size="lg" variant="white">
                Watch Stories
              </Button>
            </Group>
          </Box>
        </Container>
      </Box>

      {/* FEATURED SLIDER */}

      <Container size="xl" py={100}>
        <Group justify="space-between" mb={50}>
          <Box>
            <Text c="orange" fw={700} tt="uppercase" size="sm">
              Featured Articles
            </Text>

            <Title
              order={2}
              fw={900}
              mt={5}
              style={{
                fontSize: "clamp(32px, 4vw, 52px)",
              }}
            >
              Stories That Inspire Change
            </Title>

            <Text c="dimmed" mt="sm" maw={650}>
              Discover leadership journeys, community transformation stories,
              grassroots action, and voices shaping a more equal future.
            </Text>
          </Box>

          <Button
            component={Link}
            to="/blogs"
            radius="xl"
            color="orange"
            variant="light"
            rightSection={<FaArrowRight />}
          >
            View All Blogs
          </Button>
        </Group>

        <Carousel
          withIndicators
          loop
          align="start"
          slideGap="xl"
          plugins={[autoplay.current]}
          styles={{
            indicator: {
              width: 10,
              height: 10,
              transition: "all 300ms ease",
            },
          }}
          breakpoints={[
            {
              maxWidth: "sm",
              slideSize: "100%",
            },
            {
              maxWidth: "md",
              slideSize: "50%",
            },
          ]}
          slideSize="33.333333%"
        >
          {blogsData.map((blog) => (
            <Carousel.Slide key={blog.id}>
              <Card
                component={Link}
                to={`/blogs/${blog.slug}`}
                radius="32px"
                shadow="xl"
                p={0}
                h="100%"
                style={{
                  overflow: "hidden",
                  textDecoration: "none",
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.06)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                {/* IMAGE */}

                <Box
                  style={{
                    position: "relative",
                  }}
                >
                  <Image src={blog.coverImage} h={260} fit="cover" />

                  <Badge
                    color="orange"
                    radius="xl"
                    variant="filled"
                    style={{
                      position: "absolute",
                      top: 16,
                      left: 16,
                    }}
                  >
                    {blog.category}
                  </Badge>
                </Box>

                {/* CONTENT */}

                <Box p="xl">
                  <Stack gap="md">
                    <Title
                      order={4}
                      fw={800}
                      lineClamp={2}
                      style={{
                        lineHeight: 1.4,
                        minHeight: 65,
                      }}
                    >
                      {blog.title}
                    </Title>

                    <Text
                      c="dimmed"
                      size="sm"
                      lh={1.8}
                      lineClamp={3}
                      style={{
                        minHeight: 70,
                      }}
                    >
                      {blog.shortDescription}
                    </Text>

                    <Group justify="space-between" mt="auto">
                      <Group gap="sm">
                        <Avatar radius="xl" color="orange">
                          {blog.author?.charAt(0)}
                        </Avatar>

                        <Box>
                          <Text size="sm" fw={700}>
                            {blog.author}
                          </Text>

                          <Group gap={5}>
                            <FaCalendarAlt size={10} color="#f97316" />

                            <Text size="xs" c="dimmed">
                              {blog.date}
                            </Text>
                          </Group>
                        </Box>
                      </Group>

                      <ActionIcon
                        size={42}
                        radius="xl"
                        color="orange"
                        variant="light"
                      >
                        <FaArrowRight />
                      </ActionIcon>
                    </Group>
                  </Stack>
                </Box>
              </Card>
            </Carousel.Slide>
          ))}
        </Carousel>
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
                to={`/blogs/${blog.slug}`}
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
                <Image src={blog.coverImage} height={280} radius="xl" />

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
                    {blog.shortDescription}
                  </Text>

                  <Divider />

                  <Group justify="space-between">
                    <Group gap={10}>
                      <Avatar src={blog.coverImage} radius="xl" />

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
                  to={`/blogs/${blog.slug}`}
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
                    <Image src={blog.coverImage} h={420} fit="cover" />

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

              <Text c="rgba(255,255,255,0.75)" mt="xl" size="lg" lh={1.9}>
                Real stories from grassroots leaders, youth changemakers,
                educators, and communities driving social transformation.
              </Text>

              <Group mt={35}>
                <Button
                  size="lg"
                  radius="xl"
                  target="_blank"
                  color="orange"
                  leftSection={<FaPlay />}
                  component={Link}
                  to="https://www.youtube.com/@mscindia2530"
                >
                  Watch Videos
                </Button>

                <Button
                  component={Link}
                  target="_blank"
                  to="https://www.youtube.com/@mscindia2530"
                  size="lg"
                  radius="xl"
                  variant="white"
                >
                  Subscribe Channel
                </Button>
              </Group>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <Box
                style={{
                  position: "relative",
                  borderRadius: "32px",
                  overflow: "hidden",
                  background:
                    "linear-gradient(135deg, rgba(249,115,22,0.2), rgba(249,115,22,0.05))",
                  padding: "8px",
                  boxShadow: "0 30px 80px rgba(0,0,0,0.35)",
                }}
              >
                <Box
                  style={{
                    position: "relative",
                    borderRadius: "28px",
                    overflow: "hidden",
                    background: "#000",
                  }}
                >
                  {/* Video Label */}
                  <Box
                    style={{
                      position: "absolute",
                      top: 20,
                      left: 20,
                      zIndex: 5,
                    }}
                  ></Box>

                  {/* Video Title */}
                  <Box
                    style={{
                      position: "absolute",
                      bottom: 20,
                      left: 20,
                      right: 20,
                      zIndex: 5,
                    }}
                  >
                    <Title order={3} c="white" fw={800}>
                      Son of a Sweeper
                    </Title>

                    <Text c="rgba(255,255,255,0.75)" size="sm">
                      Film Screening & Discussion
                    </Text>
                  </Box>

                  {/* Responsive Video */}
                  <Box
                    style={{
                      position: "relative",
                      paddingTop: "56.25%",
                    }}
                  >
                    <iframe
                      src="https://www.youtube.com/embed/lRB45SsHqDY"
                      title="Son of a Sweeper Film Screening and Discussion"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        border: 0,
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      <MediaCoverageSection />

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

          <Text mt="xl" size="lg" style={{ opacity: 0.9 }}>
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
                component={Link}
                to="/contact"
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
            background: "linear-gradient(135deg, #111827 0%, #1e293b 100%)",
            color: "white",
            textAlign: "center",
          }}
        >
          <ThemeIcon size={90} radius="xl" color="orange" mx="auto">
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
              component={Link}
              to="/contact"
            >
              Submit Blog
            </Button>

            <Button
              size="lg"
              radius="xl"
              variant="white"
              component={Link}
              to="/contact"
            >
              Contact Editorial Team
            </Button>
          </Group>
        </Card>
      </Container>
    </div>
  );
}
