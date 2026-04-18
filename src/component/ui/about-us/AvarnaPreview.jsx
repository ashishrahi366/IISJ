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
import { useNavigate } from "react-router-dom";
import avarnaImg from "../../../assets/home/about-1.jpg";

export default function AvarnaPreview() {
  const navigate = useNavigate();

  return (
    <Container size="lg" py={80}>
      <Grid align="center">
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Image src={avarnaImg} radius="xl" />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card radius="xl" p="xl" shadow="lg">
            <Stack>
              <Title order={2}>Avarna Education & Training Foundation</Title>

              <Text fw={500}>
                Building a world beyond caste, discrimination, and exclusion
                through education, leadership, and empowerment.
              </Text>

              <Text c="dimmed">
                AVARNA is an initiative born from grassroots experience to
                expand impact beyond a single community. It focuses on
                empowering Dalit, tribal, and marginalized groups through
                education, leadership development, entrepreneurship, and policy
                advocacy.
              </Text>

              <Button radius="xl" onClick={() => navigate("/avarna")}>
                Learn More
              </Button>
            </Stack>
          </Card>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
