import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { motion } from "framer-motion";
import {Link} from "react-router-dom"
import { FaArrowRight, FaHandsHelping } from "react-icons/fa";

import fp1 from "../../../assets/pages/fp1.jpg";
import about1 from "../../../assets/pages/about1.webp";

const MotionBox = motion(Box);

export default function VolunteerSupportCTA() {
  return (
    <Box
      py={{ base: 80, md: 110 }}
      pos="relative"
      style={{
        overflow: "hidden",
      }}
    >
      <Container size="xl">
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Card
            radius={40}
            p={0}
            style={{
              overflow: "hidden",
              position: "relative",
              background:
                "linear-gradient(135deg, #071120 0%, #0d1d36 50%, #13284a 100%)",
            }}
          >
            {/* BACKGROUND IMAGE */}

            <Box
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url(${fp1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.1,
              }}
            />
            {/* ORANGE BLUR */}

            <Box
              style={{
                position: "absolute",
                top: -100,
                right: -100,
                width: 300,
                height: 300,
                borderRadius: "50%",
                background: "rgba(255,123,0,0.28)",
                filter: "blur(120px)",
              }}
            />

            <Grid
              align="center"
              gutter={0}
              pos="relative"
              style={{ zIndex: 2 }}
            >
              {/* LEFT CONTENT */}

              <Grid.Col span={{ base: 12, md: 7 }}>
                <Stack p={{ base: "xl", md: 60 }} gap="lg">
                  <Group gap="sm">
                    <FaHandsHelping size={20} color="#ff8c42" />

                    <Text
                      c="orange.4"
                      fw={700}
                      tt="uppercase"
                      style={{ letterSpacing: 1 }}
                    >
                      Volunteer & Support
                    </Text>
                  </Group>

                  <Title
                    order={2}
                    c="white"
                    fw={900}
                    style={{
                      fontSize: "clamp(2rem, 5vw, 4rem)",
                      lineHeight: 1.1,
                    }}
                  >
                    Be Part Of
                    <br />
                    A Movement
                    <br />
                    For Equality
                  </Title>

                  <Text
                    c="gray.3"
                    size="lg"
                    maw={620}
                    style={{
                      lineHeight: 1.9,
                    }}
                  >
                    Your support helps communities access education, leadership
                    opportunities, and safe spaces for growth. Join us as a
                    volunteer, donor, or partner in building lasting social
                    change.
                  </Text>

                  {/* BUTTONS */}

                  <Group mt="md">
                    <Button
                    component={Link}
                    to="/Fellowship-Program-app"
                      size="lg"
                      radius="xl"
                      color="orange"
                      rightSection={<FaArrowRight size={14} />}
                    >
                      Become A Volunteer
                    </Button>

                    <Button
                      component={Link}
                      to="/Support-MSC"
                      size="lg"
                      radius="xl"
                      variant="white"
                      color="dark"
                    >
                      Support MSC
                    </Button>
                  </Group>
                </Stack>
              </Grid.Col>

              {/* RIGHT IMAGE */}

              <Grid.Col span={{ base: 12, md: 5 }}>
                <Box
                  style={{
                    height: "100%",
                    minHeight: 500,
                    overflow: "hidden",
                  }}
                >
                  <Image src={about1} h={500} fit="cover" />
                </Box>
              </Grid.Col>
            </Grid>
          </Card>
        </MotionBox>
      </Container>
    </Box>
  );
}
