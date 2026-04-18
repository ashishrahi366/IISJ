import { Container, Title, Text, Grid, Image, Button, Stack } from "@mantine/core";
import { useNavigate } from "react-router-dom";

import previewImg from "../../../assets/home/about-1.jpg";

export default function IISJPreview() {
  const navigate = useNavigate();

  return (
    <Container size="lg" py={80}>
      <Grid align="center">
      <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack>
            <Title order={2}>International Institute for Social Justice (IISJ)</Title>

            <Text fw={500}>
              Empowering communities through education, leadership, and opportunity.
            </Text>

            <Text c="dimmed">
              IISJ is a nonprofit focused on nurturing socially conscious leaders
              and uplifting marginalized communities through education, training,
              and advocacy programs.
            </Text>

            <Button
              radius="xl"
              onClick={() => navigate("/iisj")}
            >
              Learn More
            </Button>
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Image src={previewImg} radius="xl" />
        </Grid.Col>

        
      </Grid>
    </Container>
  );
}