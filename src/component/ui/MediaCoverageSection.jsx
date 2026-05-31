import React from "react";
import {
  Container,
  Title,
  Text,
  Card,
  Image,
  SimpleGrid,
  Box,
  Overlay,
  ActionIcon,
  Stack,
} from "@mantine/core";

import { motion } from "framer-motion";

import { homeMediaData } from "../../constants/comon";

import { theme } from "../../theme";

function MediaCoverageSection() {
  return (
    <Box
      py={100}
      style={{
        background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)",
      }}
    >
      <Container size="xl">
        {/* 🔥 HEADER */}
        <Stack align="center" mb={60}>
          <Text
            fw={700}
            c={theme.colors.orange[6]}
            tt="uppercase"
            size="sm"
            style={{
              letterSpacing: "1px",
            }}
          >
            Media Coverage
          </Text>

          <Title
            ta="center"
            fw={900}
            style={{
              fontSize: "clamp(32px, 5vw, 56px)",
              lineHeight: 1.1,
            }}
          >
            Featured Across Leading Platforms
          </Title>

          <Text ta="center" c="dimmed" maw={620} size="lg">
            Stories, documentaries, and publications highlighting our work and
            community impact.
          </Text>
        </Stack>

        {/* 🔥 IMAGE FOCUSED CARDS */}
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl">
          {homeMediaData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
            >
              <Card
                component="a"
                href={item.link}
                target="_blank"
                radius="30px"
                p={0}
                shadow="xl"
                style={{
                  overflow: "hidden",
                  position: "relative",
                  textDecoration: "none",
                  height: "420px",
                  display: "block",
                  border: "1px solid rgba(0,0,0,0.06)",
                }}
              >
                {/* IMAGE */}
                <Image src={item.image} h="100%" fit="cover" />
                {/* CONTENT */}
                <Box
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    padding: "28px",
                    zIndex: 2,
                  }}
                >
                  {/* ICON */}
                  <ActionIcon
                    size={52}
                    radius="xl"
                    mb={18}
                    style={{
                      background: item.color,
                      color: "white",
                      boxShadow: "0 12px 25px rgba(0,0,0,0.3)",
                    }}
                  >
                    {item.icon}
                  </ActionIcon>

                  {/* TITLE */}
                  <Title
                    order={2}
                    c={item.textColor}
                    fw={900}
                    style={{
                      fontSize: "30px",
                    }}
                  >
                    {item.title}
                  </Title>

                  {/* SUBTITLE */}
                  <Text c={item.textColor} mt={1} size="md">
                    {item.subtitle}
                  </Text>
                </Box>
              </Card>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default MediaCoverageSection;
