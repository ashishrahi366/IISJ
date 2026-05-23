import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Group,
  Image,
  Overlay,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { motion } from "framer-motion";
import { FaArrowRight, FaPlay, FaYoutube } from "react-icons/fa";

import thumbnail1 from "../../../assets/pages/thumbnail1.avif";
import hqdefault from "../../../assets/pages/hqdefault.avif";

const MotionBox = motion(Box);

const videos = [
  {
    title: "Community Leadership & Social Justice",
    desc: "Discover how MSC empowers marginalized communities through education and leadership initiatives.",
    thumbnail: thumbnail1,
    videoUrl: "https://youtu.be/szoHB8dpaMs",
  },
  {
    title: "Inside Community Resource Centers",
    desc: "Explore the impact of Dr. B. R. Ambedkar Community Resource Centres across India.",
    thumbnail:hqdefault,
    videoUrl: "https://youtu.be/2dGWoLHtSAk",
  },
];

export default function VideoSection() {
  return (
    <Box
      py={{ base: 90, md: 130 }}
      pos="relative"
      style={{
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #071120 0%, #0c1b33 50%, #13284a 100%)",
      }}
    >
      <Box
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=1800&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.08,
        }}
      />

      <Overlay
        gradient="linear-gradient(180deg, rgba(5,10,20,0.9) 0%, rgba(5,10,20,0.98) 100%)"
        opacity={1}
        zIndex={1}
      />

      {/* BLUR ORBS */}

      <Box
        style={{
          position: "absolute",
          top: -120,
          right: -120,
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "rgba(255,123,0,0.3)",
          filter: "blur(120px)",
          zIndex: 1,
        }}
      />

      <Container size="xl" pos="relative" style={{ zIndex: 2 }}>
        {/* TOP CONTENT */}

        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          ta="center"
          mb={70}
        >
          <Text
            c="orange.4"
            fw={700}
            tt="uppercase"
            mb="md"
            style={{ letterSpacing: 1 }}
          >
            Stories & Documentary Videos
          </Text>

          <Title
            order={2}
            c="white"
            fw={900}
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              lineHeight: 1.08,
            }}
          >
            Voices From
            <br />
            The Community
          </Title>

          <Text
            c="gray.3"
            size="lg"
            maw={760}
            mx="auto"
            mt="xl"
            style={{
              lineHeight: 1.9,
            }}
          >
            Watch stories, workshops, leadership journeys, and community
            initiatives that highlight the mission and impact of MSC across
            India.
          </Text>

          {/* YOUTUBE CHANNEL BUTTON */}

          <Button
            component="a"
            href="https://www.youtube.com/@mscindia2530"
            target="_blank"
            mt={35}
            size="lg"
            radius="xl"
            color="red"
            leftSection={<FaYoutube size={18} />}
            rightSection={<FaArrowRight size={14} />}
            style={{
              boxShadow: "0 10px 30px rgba(255,0,0,0.25)",
            }}
          >
            Visit Our YouTube Channel
          </Button>
        </MotionBox>

        {/* VIDEO GRID */}

        <Grid gutter={35}>
          {videos.map((video, index) => (
            <Grid.Col key={index} span={{ base: 12, md: 6 }}>
              <MotionBox
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
              >
                <Card
                  radius={34}
                  p={0}
                  bg="rgba(255,255,255,0.06)"
                  style={{
                    overflow: "hidden",
                    backdropFilter: "blur(18px)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {/* VIDEO THUMBNAIL */}

                  <Box pos="relative">
                    <Image src={video.thumbnail} h={360} fit="cover" />

                    {/* PLAY BUTTON */}

                    <Box
                      component="a"
                      href={video.videoUrl}
                      target="_blank"
                      style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textDecoration: "none",
                      }}
                    >
                      <Box
                        style={{
                          width: 90,
                          height: 90,
                          borderRadius: "50%",
                          background: "rgba(255,255,255,0.18)",
                          backdropFilter: "blur(14px)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          border: "1px solid rgba(255,255,255,0.18)",
                          transition: "0.3s",
                        }}
                      >
                        <FaPlay
                          size={28}
                          color="white"
                          style={{ marginLeft: 5 }}
                        />
                      </Box>
                    </Box>
                  </Box>

                  {/* CONTENT */}

                  <Stack p="xl">
                    <Title order={3} c="white" fw={800}>
                      {video.title}
                    </Title>

                    <Text c="gray.4" lh={1.9}>
                      {video.desc}
                    </Text>

                    <Group mt="md">
                      <Button
                        component="a"
                        href={video.videoUrl}
                        target="_blank"
                        radius="xl"
                        color="orange"
                        rightSection={<FaArrowRight size={14} />}
                      >
                        Watch Video
                      </Button>

                      <Button
                        component="a"
                        href="https://www.youtube.com/@mscindia2530"
                        target="_blank"
                        radius="xl"
                        variant="light"
                        color="red"
                        leftSection={<FaYoutube size={16} />}
                      >
                        Channel
                      </Button>
                    </Group>
                  </Stack>
                </Card>
              </MotionBox>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
