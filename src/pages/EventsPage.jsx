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
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
  Badge,
} from "@mantine/core";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

import { getBlogsByIds } from "../utils/methods";
import heroImg from "../assets/home/heroHome4.webp";
const upcomingEvents = [
  //   {
  //     title: "National Leadership Workshop 2026",
  //     date: "12 June 2026",
  //     location: "New Delhi, India",
  //     image: event1,
  //     desc: "A national gathering empowering youth leaders, grassroots activists, and community organizers through leadership training and social justice dialogue.",
  //   },
];

const pastEvents = getBlogsByIds([1, 2, 3]);

function EventsPage() {
  return (
    <Box
      style={{
        background: "#f8fafc",
        overflow: "hidden",
      }}
    >
      {/* HERO SECTION */}
      <Box
        style={{
          position: "relative",
          height: "85vh",
          minHeight: "650px",
          overflow: "hidden",
        }}
      >
        {/* BG IMAGE */}
        <Image src={heroImg} h="100%" fit="cover" />
        {/* OVERLAY */}
        <Overlay color="#000" opacity={0.65} zIndex={1} />
        {/* GLOW */}
        <Box
          style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            borderRadius: "100%",
            background: "rgba(255,123,0,0.18)",
            filter: "blur(120px)",
            top: "-120px",
            right: "-120px",
            zIndex: 2,
          }}
        />

        {/* CONTENT */}

        <Container
          size="xl"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 5,
            display: "flex",
            alignItems: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Badge size="lg" radius="xl" color="orange" variant="light" mb={20}>
              Events & Gatherings
            </Badge>

            <Title
              c="white"
              style={{
                fontSize: "clamp(42px,7vw,82px)",
                lineHeight: 1.05,
                maxWidth: "900px",
              }}
            >
              Bringing Communities
              <br />
              Together Through Action
            </Title>

            <Text
              c="rgba(255,255,255,0.8)"
              mt={25}
              maw={760}
              style={{
                lineHeight: 1.9,
                fontSize: "clamp(15px,2vw,19px)",
              }}
            >
              Discover our upcoming leadership programs, workshops, fellowship
              events, grassroots conferences, and social justice gatherings
              happening across India.
            </Text>

            <Group mt={35}>
              <Button
                size="lg"
                radius="xl"
                component={Link}
                to="/contact"
                rightSection={<FaArrowRight size={14} />}
                style={{
                  background:
                    "linear-gradient(135deg, #ff7b00 0%, #ff9d3d 100%)",

                  boxShadow: "0 15px 40px rgba(255,123,0,0.35)",
                }}
              >
                Join Upcoming Events
              </Button>

              <Button
                size="lg"
                radius="xl"
                variant="white"
                color="dark"
                component={Link}
                to="/blogs"
              >
                View Stories
              </Button>
            </Group>
          </motion.div>
        </Container>
      </Box>

      {/* UPCOMING EVENTS */}
      <Container size="xl" py={120}>
        <Box ta="center" mb={60}>
          <Text c="orange" fw={700} tt="uppercase" size="sm" mb={10}>
            Upcoming Events
          </Text>

          <Title
            style={{
              fontSize: "clamp(32px,5vw,60px)",
            }}
          >
            Join Our Next
            <br />
            Community Gathering
          </Title>
        </Box>

        {/* IF NO EVENT */}

        {upcomingEvents.length === 0 ? (
          <Card
            radius="32px"
            p={60}
            ta="center"
            style={{
              background: "white",
              border: "1px solid #eee",
            }}
          >
            <ThemeIcon size={80} radius="100%" color="orange" mx="auto" mb="lg">
              <FaCalendarAlt size={30} />
            </ThemeIcon>

            <Title order={2}>No Upcoming Events Yet</Title>

            <Text c="dimmed" mt={15} maw={600} mx="auto">
              We are preparing exciting leadership programs, workshops, and
              community events. Please check back soon.
            </Text>
          </Card>
        ) : (
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            style={{
              paddingBottom: "60px",
            }}
          >
            {upcomingEvents.map((event, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                  }}
                >
                  <Card
                    radius="36px"
                    p={0}
                    style={{
                      overflow: "hidden",
                      background: "white",
                      border: "1px solid #eee",
                      height: "100%",
                    }}
                  >
                    {/* IMAGE */}

                    <Box
                      style={{
                        position: "relative",
                      }}
                    >
                      <Image src={event.image} h={320} fit="cover" />

                      <Overlay color="#000" opacity={0.35} />

                      <Badge
                        size="lg"
                        radius="xl"
                        color="orange"
                        style={{
                          position: "absolute",
                          top: 20,
                          left: 20,
                          zIndex: 5,
                        }}
                      >
                        Upcoming
                      </Badge>
                    </Box>

                    {/* CONTENT */}

                    <Stack p="xl" gap="md">
                      <Group gap="lg">
                        <Group gap={8}>
                          <FaCalendarAlt color="#ff7b00" />

                          <Text size="sm">{event.date}</Text>
                        </Group>

                        <Group gap={8}>
                          <FaMapMarkerAlt color="#ff7b00" />

                          <Text size="sm">{event.location}</Text>
                        </Group>
                      </Group>

                      <Title order={2}>{event.title}</Title>

                      <Text
                        c="dimmed"
                        style={{
                          lineHeight: 1.8,
                        }}
                      >
                        {event.desc}
                      </Text>

                      <Button
                        radius="xl"
                        mt="sm"
                        rightSection={<FaArrowRight size={14} />}
                        style={{
                          width: "fit-content",

                          background:
                            "linear-gradient(135deg, #ff7b00 0%, #ff9d3d 100%)",
                        }}
                      >
                        Register Event
                      </Button>
                    </Stack>
                  </Card>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Container>

      {/* PAST EVENTS / BLOGS */}
      <Container size="xl" pb={120}>
        <Box ta="center" mb={60}>
          <Text c="orange" fw={700} tt="uppercase" size="sm" mb={10}>
            Past Events
          </Text>

          <Title
            style={{
              fontSize: "clamp(32px,5vw,60px)",
            }}
          >
            Stories From
            <br />
            Our Journey
          </Title>
        </Box>

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl">
          {pastEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >
              <Card
                radius="32px"
                p={0}
                style={{
                  overflow: "hidden",
                  background: "white",
                  border: "1px solid #eee",
                  height: "100%",
                }}
              >
                <Image src={event.coverImage} h={250} fit="cover" />

                <Stack p="xl" gap="sm">
                  <Badge
                    color="orange"
                    variant="light"
                    radius="xl"
                    w="fit-content"
                  >
                    {event.date}
                  </Badge>

                  <Title order={3}>{event.title}</Title>

                  <Text
                    c="dimmed"
                    style={{
                      lineHeight: 1.8,
                    }}
                  >
                    {event.shortDescription}
                  </Text>

                  <Button
                    component={Link}
                    to={`/blogs/${event.slug}`}
                    mt="sm"
                    variant="light"
                    color="orange"
                    radius="xl"
                    rightSection={<FaArrowRight size={14} />}
                  >
                    Read More
                  </Button>
                </Stack>
              </Card>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>

      {/* CTA SECTION */}
      <Container size="xl" pb={120}>
        <Card
          radius="40px"
          p="clamp(30px,5vw,70px)"
          style={{
            background: "linear-gradient(135deg, #071120 0%, #0f172a 100%)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* GLOW */}

          <Box
            style={{
              position: "absolute",
              width: "400px",
              height: "400px",
              background: "rgba(255,123,0,0.18)",
              filter: "blur(120px)",
              borderRadius: "100%",
              top: "-150px",
              right: "-100px",
            }}
          />

          <Grid align="center">
            <Grid.Col span={{ base: 12, md: 8 }}>
              <Text c="#ff9d3d" fw={700} tt="uppercase" mb={15} size="sm">
                Participate With Us
              </Text>

              <Title
                c="white"
                style={{
                  fontSize: "clamp(32px,5vw,60px)",
                  lineHeight: 1.1,
                }}
              >
                Be Part Of
                <br />
                The Next Movement
              </Title>

              <Text
                c="rgba(255,255,255,0.75)"
                mt={20}
                maw={700}
                style={{
                  lineHeight: 1.9,
                }}
              >
                Join workshops, fellowships, leadership programs, community
                events, and social justice initiatives happening across India.
              </Text>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 4 }}>
              <Stack align="flex-end">
                <Button
                  size="xl"
                  radius="xl"
                  component={Link}
                  to="/contact"
                  rightSection={<FaArrowRight size={15} />}
                  style={{
                    background:
                      "linear-gradient(135deg, #ff7b00 0%, #ff9d3d 100%)",

                    boxShadow: "0 15px 40px rgba(255,123,0,0.35)",
                  }}
                >
                  Join Upcoming Event
                </Button>

                <Button
                  size="xl"
                  radius="xl"
                  variant="white"
                  color="dark"
                  component={Link}
                  to="/Support-MSC"
                >
                  Support Our Mission
                </Button>
              </Stack>
            </Grid.Col>
          </Grid>
        </Card>
      </Container>
    </Box>
  );
}

export default EventsPage;
