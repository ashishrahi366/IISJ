import React from "react";
import {
  Container,
  Grid,
  Card,
  Image,
  Title,
  Text,
  Button,
  Stack,
} from "@mantine/core";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// 👉 Import your image
import mscImg from "../../../assets/MSC/MSC-About.jpg";

export default function MSCAboutPreview() {
  const navigate = useNavigate();

  return (
    <div style={{ background: "#f8fafc" }}>
      <Container size="lg" py={80}>
        <Grid align="center">
          {/* Content */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card radius="xl" p="xl" shadow="lg">
                <Stack gap="sm">
                  <Title order={2}>
                    Movement for Scavenger Community (MSC)
                  </Title>

                  {/* Short Description */}
                  <Text fw={500}>
                    A grassroots NGO empowering marginalized manual scavenger
                    communities through education, leadership, and economic
                    opportunities.
                  </Text>

                  {/* Main Description */}
                  <Text c="dimmed" size="sm">
                    Founded in 2009 by young social activists from within the
                    scavenger community, MSC works to break the cycle of
                    caste-based exclusion. Through community resource centers
                    across India, the organization provides education, digital
                    literacy, vocational training, and leadership development.
                    MSC also promotes entrepreneurship and advocates for
                    systemic change, helping communities build dignified and
                    self-reliant lives.
                  </Text>

                  <Button
                    mt="md"
                    radius="xl"
                    onClick={() => navigate("/about")}
                  >
                    Learn More
                  </Button>
                </Stack>
              </Card>
            </motion.div>
          </Grid.Col>
          {/* Image */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={mscImg}
                radius="xl"
                alt="MSC NGO"
                style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.15)" }}
              />
            </motion.div>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}
