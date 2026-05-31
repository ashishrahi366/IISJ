import React from "react";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Group,
  Image,
  List,
  Overlay,
  Stack,
  Badge,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { currentFellows } from "../constants/fellows";
import { blogsData } from "../constants/blogsData";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { FaArrowRight, FaUsers, FaCheckCircle } from "react-icons/fa";

// import heroImg from "../assets/pages/wwd4.webp";
import heroImg from "../assets/pages/FS1.webp";
import ChildBanner from "../assets/pages/FS4.webp";
import wwd4 from "../assets/pages/wwd4.webp";
import FF2 from "../assets/pages/mvv2.webp";

import FS3 from "../assets/pages/FS3.jpg";

function FellowsForEqualityPage() {
  const successStoryIds = [1, 3, 5];
  const successStories = blogsData.filter((blog) =>
    successStoryIds.includes(blog.id)
  );

  const workAreas = [
    "Improving educational outcomes within the community",
    "Supporting employability through partnerships and training",
    "Strengthening community-based organizations and micro enterprises",
    "Fundraising and sustainability for Community Resource Centres",
    "Encouraging grassroots leadership and community development",
    "Building collaborations for entrepreneurship and livelihoods",
    "Connecting communities with larger social justice movements",
  ];

  return (
    <div>
      {/* 🔥 HERO SECTION */}
      <Box
        style={{
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden",
          background: "#071120",
        }}
      >
        {/* BACKGROUND IMAGE */}

        <Image
          src={wwd4}
          h="100%"
          w="100%"
          fit="cover"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            transform: "scale(1.05)",
          }}
        />

        {/* OVERLAY */}

        <Box
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            background:
              "linear-gradient(135deg, rgba(7,17,32,0.92) 0%, rgba(7,17,32,0.75) 45%, rgba(255,123,0,0.15) 100%)",
          }}
        />

        {/* BLUR CIRCLES */}

        <Box
          style={{
            position: "absolute",
            top: "-120px",
            right: "-120px",
            width: "320px",
            height: "320px",
            borderRadius: "50%",
            background: "rgba(255,123,0,0.18)",
            filter: "blur(80px)",
            zIndex: 2,
          }}
        />

        <Box
          style={{
            position: "absolute",
            bottom: "-140px",
            left: "-120px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.08)",
            filter: "blur(100px)",
            zIndex: 2,
          }}
        />

        {/* CONTENT */}

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
          <Grid align="center" gutter={50}>
            {/* LEFT CONTENT */}

            <Grid.Col span={{ base: 12, md: 7 }}>
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                {/* TOP BADGE */}

                <Box
                  mb={25}
                  px={18}
                  py={10}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    borderRadius: "999px",
                    background: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <Box
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "#ff7b00",
                    }}
                  />

                  <Text
                    c="white"
                    fw={600}
                    size="sm"
                    tt="uppercase"
                    style={{
                      letterSpacing: "1px",
                    }}
                  >
                    Leadership • Equality • Community
                  </Text>
                </Box>

                {/* HEADING */}

                <Title
                  c="white"
                  fw={900}
                  style={{
                    fontSize: "clamp(42px, 7vw, 86px)",
                    lineHeight: 1,
                    maxWidth: "900px",
                    letterSpacing: "-2px",
                  }}
                >
                  Building The Next
                  <br />
                  <span
                    style={{
                      background:
                        "linear-gradient(135deg, #ff7b00 0%, #ffb067 100%)",

                      WebkitBackgroundClip: "text",

                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Generation of
                  </span>
                  <br />
                  Social Leaders
                </Title>

                {/* DESCRIPTION */}

                <Text
                  c="rgba(255,255,255,0.78)"
                  size="lg"
                  mt={30}
                  maw={680}
                  lh={1.9}
                  style={{
                    fontSize: "clamp(16px,2vw,20px)",
                  }}
                >
                  Fellows For Equality empowers young leaders from marginalized
                  communities through mentorship, education, grassroots
                  organizing, and social justice leadership programs across
                  India.
                </Text>

                {/* BUTTONS */}

                <Group mt={40} gap="md">
                  <Button
                    component={Link}
                    to="/Fellowship-Program-app"
                    size="lg"
                    radius="xl"
                    rightSection={<FaArrowRight size={14} />}
                    style={{
                      background:
                        "linear-gradient(135deg, #ff7b00 0%, #ff9d3d 100%)",

                      border: "none",

                      paddingInline: "28px",

                      height: "56px",

                      fontWeight: 700,

                      boxShadow: "0 15px 40px rgba(255,123,0,0.35)",
                    }}
                  >
                    Apply for Fellowship
                  </Button>

                  <Button
                    component={Link}
                    to="/contact"
                    variant="white"
                    size="lg"
                    radius="xl"
                    style={{
                      height: "56px",
                      paddingInline: "26px",
                      fontWeight: 700,
                    }}
                  >
                    Support the Program
                  </Button>
                </Group>

                {/* STATS */}

                <Group mt={55} gap={35}>
                  {[
                    {
                      number: "500+",
                      label: "Youth Empowered",
                    },

                    {
                      number: "70+",
                      label: "Communities",
                    },

                    {
                      number: "10+",
                      label: "Leadership Programs",
                    },
                  ].map((item, index) => (
                    <Box key={index}>
                      <Text
                        c="white"
                        fw={900}
                        style={{
                          fontSize: "32px",
                          lineHeight: 1,
                        }}
                      >
                        {item.number}
                      </Text>

                      <Text c="rgba(255,255,255,0.65)" size="sm" mt={5}>
                        {item.label}
                      </Text>
                    </Box>
                  ))}
                </Group>
              </motion.div>
            </Grid.Col>

            {/* RIGHT SIDE CARD */}

            <Grid.Col span={{ base: 12, md: 5 }}>
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Box
                  style={{
                    position: "relative",
                    borderRadius: "32px",
                    overflow: "hidden",
                    background: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(18px)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    padding: "22px",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
                  }}
                >
                  <Image src={heroImg} radius="24px" h={500} fit="cover" />

                  {/* FLOATING CARD */}

                  <Box
                    style={{
                      position: "absolute",
                      bottom: "25px",
                      left: "25px",
                      right: "25px",
                      borderRadius: "24px",
                      padding: "20px",
                      background: "rgba(7,17,32,0.82)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <Text c="orange" fw={700} size="sm" mb={8}>
                      Fellowship Program
                    </Text>

                    <Title order={3} c="white" fw={800}>
                      Empowering Voices.
                      <br />
                      Creating Change.
                    </Title>

                    <Text c="rgba(255,255,255,0.7)" size="sm" mt={10}>
                      Join a growing movement of young changemakers driving
                      equality and justice.
                    </Text>
                  </Box>
                </Box>
              </motion.div>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* 🔥 SUPPORT SECTION */}
      <Container size="lg" py={100}>
        <Grid gutter={60} align="center">
          {/* IMAGE */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Image src={FS3} radius="30px" h={500} fit="cover" />

              <Text ta="center" mt="md" c="dimmed" fs="italic" size="sm">
                Young community leaders participating in grassroots fellowship
                and leadership training programs.
              </Text>
            </motion.div>
          </Grid.Col>

          {/* CONTENT */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Text c="orange" fw={700} tt="uppercase" size="sm" mb={10}>
                Community Leadership
              </Text>

              <Title
                order={2}
                fw={800}
                style={{
                  fontSize: "clamp(32px, 5vw, 52px)",
                  lineHeight: 1.2,
                }}
              >
                MSC Supports Local Community Members
              </Title>

              <Text mt="xl" size="lg" c="dimmed" lh={2}>
                MSC supports the development of scavenger communities by
                identifying young leaders and supporting them through a one-year
                fellowship journey.
              </Text>

              <Text mt="md" size="lg" c="dimmed" lh={2}>
                Fellows work closely with local Dr. B. R. Ambedkar Community
                Resource Centres while implementing projects focused on
                education, leadership, livelihood, and community empowerment.
              </Text>

              <Text mt="md" size="lg" c="dimmed" lh={2}>
                Through workshops and mentorship programs, fellows gain
                practical skills in resource mobilization, development planning,
                communication, and grassroots leadership.
              </Text>
            </motion.div>
          </Grid.Col>
        </Grid>
      </Container>

      {/* 🔥 MENTORSHIP SECTION */}
      <Box
        py={100}
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #111827 100%)",
        }}
      >
        <Container size="lg">
          <Grid gutter={60} align="center">
            {/* CONTENT */}
            <Grid.Col span={{ base: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <Text c="orange" fw={700} tt="uppercase" size="sm" mb={10}>
                  Mentorship & Growth
                </Text>

                <Title
                  c="white"
                  fw={800}
                  style={{
                    fontSize: "clamp(32px, 5vw, 52px)",
                    lineHeight: 1.2,
                  }}
                >
                  Guiding Future Community Leaders
                </Title>

                <Text mt="xl" c="rgba(255,255,255,0.75)" size="lg" lh={2}>
                  Every Fellow For Equality is assigned a mentor who provides
                  continuous guidance, goal setting support, and leadership
                  development throughout the fellowship year.
                </Text>

                <Text mt="md" c="rgba(255,255,255,0.75)" size="lg" lh={2}>
                  After completing the fellowship, fellows continue their
                  journey as senior fellows, helping mentor the next generation
                  of young leaders within their communities.
                </Text>
              </motion.div>
            </Grid.Col>

            {/* IMAGE */}
            <Grid.Col span={{ base: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <Image src={FF2} radius="30px" h={500} fit="cover" />

                <Text
                  ta="center"
                  mt="md"
                  c="rgba(255,255,255,0.65)"
                  fs="italic"
                  size="sm"
                >
                  One of our Fellows For Equality at a function of his
                  community.
                </Text>
              </motion.div>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* 🔥 HOW FELLOWS WORK */}
      <Container size="lg" py={100}>
        <Stack align="center" mb={60}>
          <Text c="orange" fw={700} tt="uppercase" size="sm">
            Fellowship Areas
          </Text>

          <Title
            order={2}
            ta="center"
            fw={800}
            style={{
              fontSize: "clamp(32px, 5vw, 52px)",
            }}
          >
            How Fellows For Equality Work
          </Title>

          <Text ta="center" c="dimmed" size="lg" maw={760}>
            Fellows take responsibility for community-based projects focused on
            education, livelihoods, grassroots organizing, and empowerment.
          </Text>
        </Stack>

        <Grid gutter="xl">
          {workAreas.map((item, index) => (
            <Grid.Col key={index} span={{ base: 12, sm: 6, md: 4 }}>
              <motion.div whileHover={{ y: -8 }}>
                <Card
                  radius="28px"
                  p="xl"
                  h="100%"
                  shadow="md"
                  style={{
                    border: "1px solid rgba(0,0,0,0.05)",
                  }}
                >
                  <ThemeIcon
                    size={60}
                    radius="xl"
                    color="orange"
                    variant="light"
                  >
                    <FaCheckCircle size={24} />
                  </ThemeIcon>

                  <Text fw={700} size="lg" mt="lg">
                    {item}
                  </Text>
                </Card>
              </motion.div>
            </Grid.Col>
          ))}
        </Grid>
      </Container>

      {/* 🔥 CTA SECTION */}
      <Box
        py={110}
        style={{
          backgroundImage: `url(${ChildBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <Container
          size="md"
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Title
              c="white"
              fw={900}
              style={{
                fontSize: "clamp(34px, 6vw, 64px)",
                lineHeight: 1.1,
              }}
            >
              Are You Interested?
            </Title>

            <Text c="rgba(255,255,255,0.8)" size="lg" mt="xl" lh={2}>
              Support our fellowship program through donations, partnerships,
              volunteering, or by applying to become a Fellow For Equality.
            </Text>

            <Text c="rgba(255,255,255,0.8)" size="lg" mt="md" lh={2}>
              Together, we can nurture the next generation of community leaders
              and social changemakers.
            </Text>

            <Group justify="center" mt={40}>
              <Button
                component={Link}
                to="/Fellowship-Program-app"
                size="lg"
                radius="xl"
                color="orange"
                rightSection={<FaArrowRight size={14} />}
              >
                Apply Now
              </Button>
            </Group>
          </motion.div>
        </Container>
      </Box>

      {/* 🔥 CURRENT FELLOWS */}
      <Box
        py={100}
        style={{
          background:
            "linear-gradient(135deg, #0f172a 0%, #111827 50%, #1e293b 100%)",
        }}
      >
        <Container size="xl">
          {/* TOP */}
          <Stack align="center" mb={60}>
            <Text
              c="orange"
              fw={700}
              tt="uppercase"
              size="sm"
              style={{ letterSpacing: "2px" }}
            >
              Leadership In Action
            </Text>

            <Title
              order={2}
              c="white"
              ta="center"
              style={{
                fontSize: "clamp(32px, 5vw, 54px)",
                lineHeight: 1.2,
              }}
            >
              Meet Our Current Fellows
            </Title>

            <Text ta="center" c="rgba(255,255,255,0.75)" maw={760} size="lg">
              Young changemakers leading community transformation through
              education, advocacy, leadership, and grassroots action.
            </Text>
          </Stack>

          {/* FELLOWS ARRAY */}
          <Grid gutter="xl">
            {currentFellows.map((item, index) => (
              <Grid.Col key={index} span={{ base: 12, sm: 6, md: 4 }}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  <Card
                    radius="28px"
                    p={0}
                    style={{
                      overflow: "hidden",
                      background: "rgba(255,255,255,0.05)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {/* IMAGE */}
                    <Box
                      style={{
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        src={item.image}
                        height={340}
                        style={{
                          transition: "0.5s",
                        }}
                      />

                      <Box
                        style={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.75), transparent)",
                        }}
                      />
                    </Box>

                    {/* CONTENT */}
                    <Box p="xl">
                      <Text c="orange" fw={700} size="sm" tt="uppercase">
                        {item.role}
                      </Text>

                      <Title order={3} c="white" mt={8}>
                        {item.name}
                      </Title>

                      <Text
                        c="rgba(255,255,255,0.72)"
                        mt="md"
                        lh={1.8}
                        size="sm"
                      >
                        {item.desc}
                      </Text>
                    </Box>
                  </Card>
                </motion.div>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 🔥 ALUMNI SUCCESS STORIES */}
      <Box py={100}>
        <Container size="xl">
          {/* TOP */}
          <Stack align="center" mb={60}>
            <Text
              c="orange"
              fw={700}
              tt="uppercase"
              size="sm"
              style={{ letterSpacing: "2px" }}
            >
              Success Stories
            </Text>

            <Title
              order={2}
              ta="center"
              style={{
                fontSize: "clamp(32px, 5vw, 54px)",
              }}
            >
              Alumni Impact Stories
            </Title>

            <Text ta="center" c="dimmed" maw={720} size="lg">
              Discover how former Fellows For Equality are creating lasting
              impact within their communities.
            </Text>
          </Stack>

          <Grid gutter="xl">
            {successStories.map((blog, index) => (
              <Grid.Col key={blog.id} span={{ base: 12, md: 4 }}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    component={Link}
                    to={`/blogs/${blog.slug}`}
                    radius="28px"
                    p={0}
                    shadow="xl"
                    style={{
                      overflow: "hidden",
                      textDecoration: "none",
                      cursor: "pointer",
                      height: "100%",
                    }}
                  >
                    {/* IMAGE */}
                    <Box style={{ position: "relative" }}>
                      <Image src={blog.coverImage} height={280} fit="cover" />

                      <Box
                        style={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.75), transparent)",
                        }}
                      />

                      <Badge
                        color="orange"
                        radius="xl"
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
                      <Title order={4} lineClamp={2}>
                        {blog.title}
                      </Title>

                      <Text c="dimmed" mt="sm" size="sm" lh={1.7} lineClamp={3}>
                        {blog.shortDescription}
                      </Text>

                      <Group mt="lg" justify="space-between">
                        <Text fw={700} c="orange" size="sm">
                          Read Story
                        </Text>

                        <Text size="xs" c="dimmed">
                          {blog.readTime}
                        </Text>
                      </Group>
                    </Box>
                  </Card>
                </motion.div>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 🔥 STICKY APPLY CTA */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 999,
          width: "calc(100% - 40px)",
          maxWidth: "340px",
        }}
      >
        <Card
          radius="24px"
          p="md"
          shadow="xl"
          style={{
            background: "rgba(15, 23, 42, 0.92)",
            backdropFilter: "blur(14px)",
            border: "1px solid rgba(255,255,255,0.08)",
            maxWidth: "320px",
          }}
          animate={{
            boxShadow: [
              "0 0 0 rgba(249,115,22,0)",
              "0 0 25px rgba(249,115,22,0.35)",
              "0 0 0 rgba(249,115,22,0)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <Group align="flex-start" wrap="nowrap">
            <ThemeIcon size={54} radius="xl" color="orange" variant="light">
              <FaUsers size={24} />
            </ThemeIcon>

            <Box>
              <Text c="white" fw={700} size="md">
                Become a Fellow
              </Text>

              <Text c="rgba(255,255,255,0.7)" size="sm" mt={4} lh={1.6}>
                Applications are now open for the Fellows For Equality
                leadership program.
              </Text>

              <Button
                component={Link}
                to="/Fellowship-Program-app"
                color="orange"
                radius="xl"
                fullWidth
                mt="md"
                rightSection={<FaArrowRight size={14} />}
              >
                Apply Now
              </Button>
            </Box>
          </Group>
        </Card>
      </motion.div>
    </div>
  );
}

export default FellowsForEqualityPage;
