import React from "react";
import {
  Card,
  Grid,
  Image,
  Text,
  Title,
  Box,
  Stack,
  Group,
  ThemeIcon,
  Container,
} from "@mantine/core";

import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

import martinImg from "../../assets/home/KMLjpg.jpg";

export default function MartinLutherKingQuote() {
  return (
    <Container size="lg" py={80}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <Card
          radius="32px"
          p={0}
          shadow="xl"
          style={{
            overflow: "hidden",
            background: "linear-gradient(135deg, #111827 0%, #1f2937 100%)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <Grid gutter={0} align="center">
            {/* IMAGE */}
            <Grid.Col span={{ base: 12, md: 5 }}>
              <Box
                style={{
                  position: "relative",
                  height: "100%",
                }}
              >
                <Image src={martinImg} h={520} fit="cover" />

                {/* OVERLAY */}
                <Box
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.5), transparent)",
                  }}
                />

                {/* NAME */}
                <Box
                  style={{
                    position: "absolute",
                    bottom: 25,
                    left: 25,
                    zIndex: 5,
                  }}
                >
                  <Text c="white" fw={800} size="28px">
                    Martin Luther King Jr.
                  </Text>

                  <Text c="rgba(255,255,255,0.75)" size="sm" mt={4}>
                    Civil Rights Leader
                  </Text>
                </Box>
              </Box>
            </Grid.Col>

            {/* CONTENT */}
            <Grid.Col span={{ base: 12, md: 7 }}>
              <Box p={{ base: 30, md: 60 }}>
                <Stack gap="xl">
                  {/* ICON */}
                  <ThemeIcon
                    size={80}
                    radius="xl"
                    variant="light"
                    color="orange"
                  >
                    <FaQuoteLeft size={32} />
                  </ThemeIcon>

                  {/* QUOTE */}
                  <Title
                    c="white"
                    fw={800}
                    style={{
                      fontSize: "clamp(28px, 4vw, 48px)",
                      lineHeight: 1.3,
                    }}
                  >
                    “Injustice anywhere is a threat to justice everywhere.”
                  </Title>

                  <Text c="rgba(255,255,255,0.72)" size="lg" lh={2}>
                    Martin Luther King Jr. dedicated his life to equality,
                    dignity, justice, and nonviolent social transformation. His
                    words continue to inspire movements fighting against
                    discrimination, oppression, and systemic injustice across
                    the world.
                  </Text>

                  {/* SMALL CARDS */}
                  <Group mt="sm">
                    <Card
                      radius="xl"
                      p="md"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      <Text c="orange" fw={800} size="xl">
                        Equality
                      </Text>

                      <Text c="rgba(255,255,255,0.7)" size="sm">
                        Human Rights
                      </Text>
                    </Card>

                    <Card
                      radius="xl"
                      p="md"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      <Text c="orange" fw={800} size="xl">
                        Justice
                      </Text>

                      <Text c="rgba(255,255,255,0.7)" size="sm">
                        Social Change
                      </Text>
                    </Card>
                  </Group>
                </Stack>
              </Box>
            </Grid.Col>
          </Grid>
        </Card>
      </motion.div>
    </Container>
  );
}
