import React from "react";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Group,
  Image,
  Overlay,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
  Badge,
} from "@mantine/core";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBookOpen,
  FaUsers,
  FaHandsHelping,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaHeart,
  FaPlay,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import {blogsData} from "../constants/blogsData";
/* IMAGES */
import heroImg from "../assets/pages/1wwd1.webp";
import wwdMsc from "../assets/pages/wwdMsc.webp";
import mscImg from "../assets/pages/wwdMsc.webp";
import avarnaImg from "../assets/pages/iisj2.jpeg";
import iisjImg from "../assets/home/homeAbt1.jpeg";
import wwdcom from "../assets/pages/wwdcom.jpeg";

const stats = [
  { number: "70+", label: "Communities" },
  { number: "500+", label: "Youth Leaders" },
  { number: "10+", label: "Resource Centers" },
  { number: "7000+", label: "Lives Impacted" },
];

const initiatives = [
  {
    title: "Movement for Scavenger Community",
    image: wwdMsc,
    desc: "MSC works to eradicate manual scavenging and empower marginalized sanitation worker communities through education, leadership, dignity, and economic empowerment.",
    path: "/MSC-Detail",
  },

  {
    title: "AVARNA Foundation",
    image: avarnaImg,
    desc: "AVARNA supports Dalit, tribal, and marginalized communities through education, entrepreneurship, policy advocacy, and leadership development.",
    path: "/Avarna",
  },

  {
    title: "International Institute for Social Justice",
    image: iisjImg,
    desc: "IISJ nurtures socially conscious leaders through education, research, training, and grassroots social justice initiatives.",
    path: "/IISJ",
  },
];

const centers = [
  {
    title: "Community Resource Centers",
    icon: <FaMapMarkerAlt />,
    desc: "Safe learning spaces with libraries, digital labs, workshops, and mentorship programs.",
  },

  {
    title: "Education Centers",
    icon: <FaGraduationCap />,
    desc: "Providing education access, after-school learning, leadership training, and digital literacy.",
  },
];

const blogs = [
  {
    title: "Empowering Young Leaders Through Fellowship",
    image: mscImg,
  },

  {
    title: "Grassroots Education Creating Real Change",
    image: avarnaImg,
  },

  {
    title: "Community Centers Building New Futures",
    image: iisjImg,
  },
];

export default function WhatWeDoPage() {
  const storyBlogIds = [1, 4, 6];
  const storiesBlogs = blogsData.filter((blog) =>
    storyBlogIds.includes(blog.id)
  );
  return (
    <Box bg="#071120">
      {/* HERO SECTION */}

      <Box
        style={{
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Image
          src={heroImg}
          h="100%"
          w="100%"
          fit="cover"
          style={{
            position: "absolute",
            inset: 0,
          }}
        />

        <Overlay color="#071120" opacity={0.72} zIndex={1} />

        <Container
          size="xl"
          style={{
            position: "relative",
            zIndex: 5,
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid align="center">
            <Grid.Col span={{ base: 12, md: 7 }}>
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <Badge
                  size="lg"
                  radius="xl"
                  variant="light"
                  color="orange"
                  mb={25}
                >
                  What We Do
                </Badge>

                <Title
                  c="white"
                  fw={900}
                  style={{
                    fontSize: "clamp(42px,7vw,88px)",
                    lineHeight: 1,
                  }}
                >
                  Building Justice
                  <br />
                  Through
                  <span
                    style={{
                      background:
                        "linear-gradient(135deg,#ff7b00 0%,#ffb067 100%)",

                      WebkitBackgroundClip: "text",

                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {" "}
                    Education
                  </span>
                </Title>

                <Text
                  c="rgba(255,255,255,0.75)"
                  size="lg"
                  mt={30}
                  maw={650}
                  lh={1.9}
                >
                  IISJ, MSC, and AVARNA work together to empower marginalized
                  communities through education, leadership development,
                  advocacy, entrepreneurship, and grassroots transformation.
                </Text>

                <Group mt={40}>
                  <Button
                    size="lg"
                    radius="xl"
                    component={Link}
                    to="/Fellowship-Program-app"
                    rightSection={<FaArrowRight />}
                    style={{
                      background:
                        "linear-gradient(135deg,#ff7b00 0%,#ff9d3d 100%)",

                      boxShadow: "0 15px 40px rgba(255,123,0,0.35)",
                    }}
                  >
                    Apply Fellowship
                  </Button>

                  <Button
                    size="lg"
                    radius="xl"
                    variant="white"
                    component={Link}
                    to="/Support-MSC"
                  >
                    Support MSC
                  </Button>
                </Group>
              </motion.div>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* STATS */}

      <Container size="xl" py={80}>
        <SimpleGrid cols={{ base: 2, md: 4 }} spacing="xl">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Paper
                radius="30px"
                p="xl"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  textAlign: "center",
                }}
              >
                <Title c="white" fw={900} style={{ fontSize: "42px" }}>
                  {item.number}
                </Title>

                <Text c="rgba(255,255,255,0.7)">{item.label}</Text>
              </Paper>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>

      {/* INITIATIVES */}

      <Container size="xl" py={100}>
        <Stack align="center" mb={60}>
          <Badge size="lg" radius="xl" color="orange" variant="light">
            Core Initiatives
          </Badge>

          <Title
            c="white"
            ta="center"
            style={{
              fontSize: "clamp(32px,5vw,56px)",
            }}
          >
            Organizations Driving Change
          </Title>
        </Stack>

        <Grid gutter={40}>
          {initiatives.map((item, index) => (
            <Grid.Col key={index} span={{ base: 12, md: 4 }}>
              <motion.div whileHover={{ y: -10 }}>
                <Card
                  radius="32px"
                  p={0}
                  style={{
                    overflow: "hidden",
                    background: "#0f172a",
                    border: "1px solid rgba(255,255,255,0.08)",
                    height: "100%",
                  }}
                >
                  <Image src={item.image} h={260} fit="cover" />

                  <Box p="xl">
                    <Title order={3} c="white" mb="md">
                      {item.title}
                    </Title>

                    <Text c="rgba(255,255,255,0.7)" lh={1.8}>
                      {item.desc}
                    </Text>

                    <Button
                      mt="xl"
                      radius="xl"
                      component={Link}
                      to={item.path}
                      rightSection={<FaArrowRight />}
                      style={{
                        background:
                          "linear-gradient(135deg,#ff7b00 0%,#ff9d3d 100%)",
                      }}
                    >
                      Learn More
                    </Button>
                  </Box>
                </Card>
              </motion.div>
            </Grid.Col>
          ))}
        </Grid>
      </Container>

      {/* RESOURCE CENTERS */}

      <Container size="xl" py={100}>
        <Grid align="center">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image src={wwdcom} radius="32px" />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Badge size="lg" radius="xl" color="orange" variant="light" mb={20}>
              Community Impact
            </Badge>

            <Title
              c="white"
              style={{
                fontSize: "clamp(32px,5vw,54px)",
              }}
            >
              Community & Education Centers
            </Title>

            <Text c="rgba(255,255,255,0.7)" mt={25} lh={1.9}>
              Our Dr. B.R. Ambedkar Community Resource Centers provide safe
              spaces for education, digital literacy, leadership training,
              mentorship, and grassroots organizing.
            </Text>

            <Stack mt={35}>
              {centers.map((item, index) => (
                <Paper
                  key={index}
                  radius="24px"
                  p="lg"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <Group align="flex-start">
                    <ThemeIcon
                      size={55}
                      radius="xl"
                      variant="light"
                      color="orange"
                    >
                      {item.icon}
                    </ThemeIcon>

                    <Box>
                      <Title order={4} c="white">
                        {item.title}
                      </Title>

                      <Text c="rgba(255,255,255,0.7)" mt={5}>
                        {item.desc}
                      </Text>
                    </Box>
                  </Group>
                </Paper>
              ))}
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>

      {/* FELLOWSHIP */}

      <Box
        py={120}
        style={{
          background: "linear-gradient(135deg,#ff7b00 0%,#ff9d3d 100%)",
        }}
      >
        <Container size="lg">
          <Stack align="center">
            <Badge size="lg" radius="xl" color="dark">
              Fellowship Program
            </Badge>

            <Title
              ta="center"
              c="white"
              style={{
                fontSize: "clamp(34px,5vw,64px)",
              }}
            >
              Become A Fellow.
              <br />
              Lead Change From Your Community.
            </Title>

            <Text
              ta="center"
              c="rgba(255,255,255,0.85)"
              maw={700}
              size="lg"
              lh={1.9}
            >
              Fellows For Equality empowers young leaders through mentorship,
              workshops, grassroots organizing, and social justice leadership
              programs.
            </Text>

            <Group mt={20}>
              <Button
                size="lg"
                radius="xl"
                color="dark"
                component={Link}
                to="/Fellowship-Program-app"
              >
                Apply Now
              </Button>

              <Button
                size="lg"
                radius="xl"
                variant="white"
                component={Link}
                to="/Fellowship-Equality"
              >
                Explore Fellowship
              </Button>
            </Group>
          </Stack>
        </Container>
      </Box>

      {/* BLOGS */}
      <Container size="xl" py={100}>
        <Stack align="center" mb={60}>
          <Badge size="lg" radius="xl" color="orange" variant="light">
            News & Stories
          </Badge>

          <Title
            c="white"
            ta="center"
            style={{
              fontSize: "clamp(32px,5vw,54px)",
            }}
          >
            Stories From The Ground
          </Title>
        </Stack>

        <Grid gutter={40}>
          {storiesBlogs.map((blog) => (
            <Grid.Col key={blog.id} span={{ base: 12, md: 4 }}>
              <motion.div whileHover={{ y: -8 }}>
                <Card
                  component={Link}
                  to={`/blogs/${blog.slug}`}
                  radius="30px"
                  p={0}
                  style={{
                    overflow: "hidden",
                    background: "#0f172a",
                    border: "1px solid rgba(255,255,255,0.08)",
                    textDecoration: "none",
                    height: "100%",
                  }}
                >
                  <Box
                    style={{
                      position: "relative",
                    }}
                  >
                    <Image src={blog.coverImage} h={250} fit="cover" />

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

                  <Box p="xl">
                    <Title order={3} c="white" lineClamp={2}>
                      {blog.title}
                    </Title>

                    <Text c="rgba(255,255,255,0.65)" mt="md" lineClamp={3}>
                      {blog.shortDescription}
                    </Text>

                    <Group justify="space-between" mt="xl">
                      <Text size="sm" c="dimmed">
                        {blog.readTime}
                      </Text>

                      <Button
                        variant="subtle"
                        color="orange"
                        rightSection={<FaArrowRight />}
                      >
                        Read More
                      </Button>
                    </Group>
                  </Box>
                </Card>
              </motion.div>
            </Grid.Col>
          ))}
        </Grid>
      </Container>

      {/* DONATION CTA */}

      <Container size="lg" py={120}>
        <Paper
          radius="40px"
          p={{
            base: "xl",
            md: "60px",
          }}
          style={{
            background: "linear-gradient(135deg,#0f172a 0%,#111827 100%)",

            border: "1px solid rgba(255,255,255,0.08)",

            position: "relative",

            overflow: "hidden",
          }}
        >
          <Group justify="space-between">
            <Box maw={650}>
              <Badge
                size="lg"
                radius="xl"
                color="orange"
                variant="light"
                mb={25}
              >
                Support The Movement
              </Badge>

              <Title
                c="white"
                style={{
                  fontSize: "clamp(34px,5vw,58px)",
                }}
              >
                Your Support Creates
                <br />
                Real Community Change
              </Title>

              <Text c="rgba(255,255,255,0.7)" mt={25} lh={1.9} size="lg">
                Help us build leadership opportunities, maintain community
                centers, provide fellowships, and strengthen grassroots
                movements for equality and justice.
              </Text>

              <Group mt={35}>
                <Button
                  size="lg"
                  radius="xl"
                  component={Link}
                  to="/Support-MSC"
                  leftSection={<FaHeart />}
                  style={{
                    background:
                      "linear-gradient(135deg,#ff7b00 0%,#ff9d3d 100%)",
                  }}
                >
                  Donate Now
                </Button>

                <Button
                  size="lg"
                  radius="xl"
                  variant="white"
                  component={Link}
                  to="/contact"
                >
                  Volunteer
                </Button>
              </Group>
            </Box>
          </Group>
        </Paper>
      </Container>

      {/* VIDEO SECTION */}

      <Container size="xl" py={120}>
        <Card
          radius="40px"
          p={0}
          style={{
            overflow: "hidden",
            position: "relative",
            background: "#000",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 30px 80px rgba(0,0,0,0.35)",
          }}
        >
          {/* TOP BADGE */}

          <Box
            style={{
              position: "absolute",
              top: 25,
              left: 25,
              zIndex: 20,
              background: "rgba(255,255,255,0.12)",
              backdropFilter: "blur(12px)",
              padding: "10px 18px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <Text
              c="white"
              fw={600}
              size="sm"
              style={{
                letterSpacing: "0.5px",
              }}
            >
              🎥 Featured Documentary
            </Text>
          </Box>

          {/* VIDEO WRAPPER */}

          <Box
            style={{
              position: "relative",
              paddingTop: "56.25%",
              overflow: "hidden",
            }}
          >
            {/* VIDEO */}

            <iframe
              src="https://www.youtube.com/embed/szoHB8dpaMs"
              title="National Conference on End Manual Scavenging"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
            />

            {/* DARK OVERLAY */}

            <Box
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.25) 45%, rgba(0,0,0,0.1) 100%)",
                zIndex: 2,
                pointerEvents: "none",
              }}
            />
          </Box>

          {/* CONTENT */}

          <Box
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 5,
              padding: "clamp(20px,4vw,50px)",
            }}
          >
            <Grid align="flex-end">
              {/* LEFT */}

              <Grid.Col span={{ base: 12, md: 8 }}>
                <Text
                  c="#ff9d3d"
                  fw={700}
                  mb={10}
                  tt="uppercase"
                  size="sm"
                  style={{
                    letterSpacing: "1px",
                  }}
                >
                  Voices of Equality
                </Text>

                <Title
                  c="white"
                  style={{
                    fontSize: "clamp(28px,5vw,58px)",
                    lineHeight: 1.1,
                    maxWidth: "850px",
                  }}
                >
                  Stories From The Ground
                </Title>

                <Text
                  c="rgba(255,255,255,0.75)"
                  mt={18}
                  maw={700}
                  style={{
                    lineHeight: 1.8,
                    fontSize: "clamp(14px,2vw,18px)",
                  }}
                >
                  Watch documentaries, leadership journeys, and powerful
                  community stories from IISJ, MSC, and grassroots social
                  justice movements across India.
                </Text>
              </Grid.Col>

              {/* RIGHT */}

              <Grid.Col span={{ base: 12, md: 4 }}>
                <Group justify="flex-end">
                  <Button
                    size="lg"
                    radius="xl"
                    component="a"
                    href="https://www.youtube.com/watch?v=szoHB8dpaMs"
                    target="_blank"
                    rightSection={<FaArrowRight size={14} />}
                    style={{
                      background:
                        "linear-gradient(135deg, #ff7b00 0%, #ff9d3d 100%)",

                      boxShadow: "0 12px 30px rgba(255,123,0,0.35)",
                    }}
                  >
                    Watch on YouTube
                  </Button>
                </Group>
              </Grid.Col>
            </Grid>
          </Box>
        </Card>
      </Container>
    </Box>
  );
}
