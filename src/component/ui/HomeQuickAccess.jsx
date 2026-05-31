import React from "react";
import {
  Container,
  Title,
  Text,
  Grid,
  Card,
  Image,
  Button,
  Stack,

  Box,
} from "@mantine/core";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { theme } from "../../theme";
import { homeQuickAccessCard } from "../../constants/comon";

export default function HomeQuickAccess() {
  return (
    <Box
      py={100}
      style={{
        background:
          "linear-gradient(180deg, #071120 0%, #0b1730 50%, #071120 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "rgba(37,99,235,0.15)",
          filter: "blur(120px)",
          top: -120,
          right: -100,
        }}
      />

      <Container size="xl">
        {/* SECTION HEADER */}
        <Stack align="center" mb={60}>
          <Text
            fw={700}
            c={theme.colors.orange[5]}
            tt="uppercase"
            size="sm"
            style={{ letterSpacing: "2px" }}
          >
            Explore More
          </Text>

          <Title
            order={2}
            ta="center"
            style={{
              color: "white",
              fontSize: "clamp(2rem,4vw,3.5rem)",
              fontWeight: 800,
            }}
          >
            Building Change Through Action
          </Title>

          <Text
            ta="center"
            maw={750}
            c="gray.3"
            size="lg"
            style={{ lineHeight: 1.8 }}
          >
            Learn about our movement, explore impactful community projects, and
            become part of a growing network working for dignity, equality, and
            justice.
          </Text>
        </Stack>

        {/* CARDS */}
        <Grid gutter={35}>
          {homeQuickAccessCard.map((item, index) => (
            <Grid.Col key={index} span={{ base: 12, md: 6, lg: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card
                  radius="30px"
                  p={0}
                  shadow="xl"
                  style={{
                    overflow: "hidden",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    backdropFilter: "blur(14px)",
                    height: "100%",
                    position: "relative",
                  }}
                >
                  {/* IMAGE */}
                  <Box style={{ position: "relative" }}>
                    <Image src={item.image} h={260} alt={item.title} />

                    {/* <Overlay
                      gradient="linear-gradient(180deg, rgba(0,0,0,0) 20%, rgba(0,0,0,0.85) 100%)"
                      opacity={1}
                    /> */}

                    {/* ICON */}
                    <Box
                      style={{
                        position: "absolute",
                        top: 20,
                        left: 20,
                        width: 55,
                        height: 55,
                        borderRadius: "16px",
                        background: item.color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        boxShadow: `0 10px 25px ${item.color}55`,
                      }}
                    >
                      {item.icon}
                    </Box>

                    {/* TITLE ON IMAGE */}
                    <Box
                      style={{
                        position: "absolute",
                        bottom: 20,
                        left: 20,
                        right: 20,
                      }}
                    >
                      <Title
                        order={3}
                        style={{
                          // color: "#330cf7",
                          color: "white",
                          fontWeight: 800,
                        }}
                      >
                        {item.title}
                      </Title>
                    </Box>
                  </Box>

                  {/* CONTENT */}
                  <Stack p="xl" gap="lg">
                    <Text
                      c="gray.3"
                      size="md"
                      style={{
                        lineHeight: 1.8,
                        minHeight: 95,
                      }}
                    >
                      {item.description}
                    </Text>

                    {/* BUTTON */}
                    <Button
                      component={Link}
                      to={item.link}
                      radius="xl"
                      size="md"
                      rightSection={<FaArrowRight size={14} />}
                      style={{
                        background: item.color,
                        fontWeight: 700,
                      }}
                    >
                      Learn More
                    </Button>
                  </Stack>

                  {/* Glow Effect */}
                  <div
                    style={{
                      position: "absolute",
                      width: 180,
                      height: 180,
                      background: `${item.color}20`,
                      filter: "blur(90px)",
                      borderRadius: "50%",
                      top: -60,
                      right: -60,
                    }}
                  />
                </Card>
              </motion.div>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
