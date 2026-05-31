import React from "react";
import {
  Container,
  Title,
  Text,
  Grid,
  Card,
  Button,
  Stack,
  Overlay,
} from "@mantine/core";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { homeGalleryData } from "../../constants/gallery";

export default function HomeGallery() {
  return (
    <div
      style={{
        background: "#f8fafc",
        padding: "90px 0",
      }}
    >
      <Container size="xl">
        {/* TOP HEADER */}
        <Stack align="center" mb={50}>
          <Title
            order={2}
            ta="center"
            style={{
              fontSize: "42px",
              fontWeight: 800,
            }}
          >
            Our Gallery
          </Title>

          <Text
            ta="center"
            c="dimmed"
            maw={700}
            style={{
              lineHeight: 1.8,
            }}
          >
            Explore moments of impact, empowerment, leadership, and
            transformation through our community initiatives and grassroots
            programs.
          </Text>
        </Stack>

        {/* GALLERY GRID */}
        <Grid gutter="xl">
          {homeGalleryData.map((item, index) => (
            <Grid.Col key={index} span={{ base: 12, sm: 6, md: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <Card
                  radius="24px"
                  p={0}
                  shadow="lg"
                  style={{
                    overflow: "hidden",
                    position: "relative",
                    cursor: "pointer",
                  }}
                >
                  {/* IMAGE */}
                  <div
                    style={{
                      position: "relative",
                      height: "320px",
                      overflow: "hidden",
                    }}
                  >
                    <motion.img
                      src={`${item.image}?auto=format&fit=crop&w=800&q=80`}
                      alt={item.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.4 }}
                    />

                    {/* DARK OVERLAY */}
                    <Overlay
                      gradient="linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.75) 100%)"
                      opacity={1}
                    />

                    {/* TITLE */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: 20,
                        left: 20,
                        right: 20,
                        zIndex: 2,
                        color: "white",
                      }}
                    >
                      <Title
                        order={4}
                        style={{
                          lineHeight: 1.4,
                        }}
                      >
                        {item.title}
                      </Title>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </Grid.Col>
          ))}
        </Grid>

        {/* BUTTON */}
        <Stack align="center" mt={50}>
          <Button
            component={Link}
            to="/gallery"
            size="md"
            radius="xl"
            rightSection={<FaArrowRight size={14} />}
            variant="filled"
            color="orange"
            px={30}
          >
            View Full Gallery
          </Button>
        </Stack>
      </Container>
    </div>
  );
}
