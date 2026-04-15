import {
  Container,
  Grid,
  Text,
  Title,
  Button,
  Box,
  Stack,
} from "@mantine/core";
import { motion } from "framer-motion";
import { FaPlay, FaArrowRight } from "react-icons/fa";
import { theme } from "../../theme";

function VideoSection() {
  return (
    <Box
      py={{ base: 50, md: 80 }}
      style={{
        width: "100%",
        background: `linear-gradient(135deg, ${
          theme.colors.darkBlue?.[9] || "#0b1c2c"
        }, #1e3a5f)`,
      }}
    >
      <Container size="lg">
        <Grid align="center" gutter="xl">
          {/* 🎥 VIDEO */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
              }}
            >
              {/* Responsive iframe */}
              <div
                style={{
                  position: "relative",
                  paddingBottom: "56.25%", // 16:9
                  height: 0,
                }}
              >
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/g6xcJEIukhE?si=bm8Wx2oJvv9_j7uE"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </motion.div>
          </Grid.Col>

          {/* 📝 TEXT CONTENT */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Stack>
                <Text c={theme.colors.orange[5]} fw={600} tt="uppercase">
                  Watch Our Impact
                </Text>

                <Title
                  order={2}
                  style={{
                    color: "white",
                    fontSize: "clamp(24px, 4vw, 34px)",
                    lineHeight: 1.3,
                  }}
                >
                  See How We’re Making a Difference
                </Title>

                <Text
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: 1.7,
                  }}
                >
                  Discover how your support helps transform lives. From
                  education to healthcare, we are committed to building a better
                  future for communities in need.
                </Text>

                {/* CTA */}
                <Button
                  color="orange"
                  rightSection={<FaArrowRight size={14} />}
                  size="md"
                >
                  Learn More
                </Button>
              </Stack>
            </motion.div>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}

export default VideoSection;
