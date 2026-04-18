import React from "react";
import { Container, Grid, Card, Image, Title, Text, Group } from "@mantine/core";
import { motion } from "framer-motion";
import { FaTrophy } from "react-icons/fa";

// 👉 Import your local image
import awardImg from "../../../assets/home/award.webp";

export default function AboutusAward() {
  return (
    <div style={{ background: "linear-gradient(135deg, #fef3c7, #fff7ed)" }}>
      <Container size="lg" py={80}>
        <Grid align="center">
          {/* Image Section */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={awardImg}
                radius="xl"
                alt="Award"
                style={{ boxShadow: "0 10px 40px rgba(245, 158, 11, 0.25)" }}
              />
            </motion.div>
          </Grid.Col>

          {/* Content Section */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card radius="xl" p="xl" shadow="lg">
                <Group mb="md">
                  <FaTrophy size={34} color="#f59e0b" />
                  <Title order={3}>Award & Recognition</Title>
                </Group>

                <Text size="lg" fw={600} mb="sm">
                  Recipient of 1st Prize, ISC-FICCI 2023
                </Text>

                <Text c="dimmed">
                  Recognized for our impactful work in uplifting sanitation workers
                  and improving their living and working conditions through
                  sustainable initiatives.
                </Text>
              </Card>
            </motion.div>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}
