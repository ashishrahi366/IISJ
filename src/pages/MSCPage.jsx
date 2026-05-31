import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Title,
  Text,
  Grid,
  Card,
  Image,
  Stack,
  Group,
  Badge,
  Box,
  ThemeIcon,
  Button,
} from "@mantine/core";
import {
  FaUsers,
  FaArrowRight,
  FaExclamationTriangle,
  FaBookOpen,
  FaBook,
  FaLightbulb,
  FaGavel,
  FaAward,
  FaTrophy,
} from "react-icons/fa";

import { motion } from "framer-motion";
import {statsData} from "../constants/comon";

import awardImg from "../assets/home/award.webp";
import HomeRecentNews from "../component/ui/HomeRecentNews";
import heroImg from "../assets/MSC/MSC_Back.jpg";
import MSCoverview from "../assets/MSC/MSCoverview.jpg";
import HowrahImg from "../assets/MSC/Howrah-2.jpg";
import BoyatGarbage from "../assets/MSC/BoyatGarbage.jpg";
import MSCChart from "../assets/MSC/MSCChart.png";
import InheritedImg from "../assets/home/Inherited-Biographies.jpg";
import problemImg from "../assets/MSC/mscCenterProb.webp";
import projectImg from "../assets/MSC/mscCenter1.webp";


import g1 from "../assets/home/homeHero1.webp";
import g2 from "../assets/home/homeHero1.webp";
import g3 from "../assets/home/homeHero1.webp";
import g4 from "../assets/home/homeHero1.webp";

export default function MSCPage() {
  return (
    <div>
      {/* HERO */}
      <div style={{ position: "relative", height: "60vh" }}>
        <Image src={heroImg} h="100%" fit="cover" />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            padding: "20px",
          }}
        >
          <Stack align="center">
            <Title order={1} ta="center">
              Movement for Scavenger Community (MSC)
            </Title>
            <Text size="lg" ta="center">
              Empowering marginalized communities through dignity, education,
              and leadership
            </Text>
          </Stack>
        </div>
      </div>

      {/* ABOUT */}
      <Container size="lg" py={80}>
        <Title order={2}>About MSC</Title>

        <Text c="dimmed" mt="sm">
          Movement for Scavenger Community (MSC) is a grassroots NGO founded in
          2009 by young social activists from within the scavenger community.
          Registered under the Societies Act, MSC focuses on uplifting
          marginalized communities through education, leadership development,
          economic diversification, and policy advocacy.
        </Text>

        <Text c="dimmed" mt="sm">
          Over the years, MSC has grown into a powerful movement operating
          community resource centres across multiple states in India. These
          centres act as hubs for transformation—providing access to knowledge,
          skills, and opportunities that enable individuals to break free from
          generational cycles of discrimination and poverty.
        </Text>

        {/* 🔥 BUTTON */}
        <Button
          component="a"
          href="https://scavenger-movement.org/"
          target="_blank"
          mt={30}
          radius="xl"
          size="md"
          color="orange"
          rightSection={<FaArrowRight size={14} />}
          style={{
            boxShadow: "0 10px 25px rgba(249,115,22,0.25)",
          }}
        >
          Visit Old MSC Website
        </Button>
      </Container>

      {/* IMPACT STATS */}
      <Container size="xl" py={80}>
        <Stack align="center" mb={50}>
          <Title
            order={2}
            fw={900}
            ta="center"
            style={{
              fontSize: "clamp(30px, 4vw, 50px)",
            }}
          >
            Our Impact in Numbers
          </Title>

          <Text c="dimmed" ta="center" maw={700} size="lg">
            Transforming communities through leadership, education, and
            grassroots empowerment.
          </Text>
        </Stack>

        <Grid gutter="xl">
          {statsData.map((item, i) => (
            <Grid.Col key={i} span={{ base: 12, sm: 6, md: 3 }}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                }}
              >
                <Card
                  radius="30px"
                  p={0}
                  shadow="xl"
                  style={{
                    overflow: "hidden",
                    height: "100%",
                    border: "1px solid rgba(0,0,0,0.06)",
                    background: "#fff",
                  }}
                >
                  {/* 🔥 TOP IMAGE */}
                  <Box
                    style={{
                      position: "relative",
                    }}
                  >
                    <Image src={item.image} height={180} />

                    {/* ICON */}
                    <ThemeIcon
                      size={60}
                      radius="xl"
                      style={{
                        background: item.color,
                        color: "white",
                        position: "absolute",
                        bottom: -30,
                        left: 25,
                        boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                      }}
                    >
                      {item.icon}
                    </ThemeIcon>
                  </Box>

                  {/* CONTENT */}
                  <Box p="xl" pt={45}>
                    <Group justify="space-between" align="flex-start">
                      <div>
                        <Title
                          order={2}
                          fw={900}
                          style={{
                            color: item.color,
                          }}
                        >
                          {item.number}
                        </Title>

                        <Text fw={700} mt={4} size="lg">
                          {item.label}
                        </Text>
                      </div>
                    </Group>

                    {/* <Text c="dimmed" mt="md" size="sm" lh={1.8}>
                      {item.desc}
                    </Text> */}
                  </Box>
                </Card>
              </motion.div>
            </Grid.Col>
          ))}
        </Grid>
      </Container>

      {/* 🔥 WHO IS A SCAVENGER SECTION */}
      <Container size="lg" py={100}>
        <Grid gutter={50} align="center">
          {/* 🖼 IMAGE SIDE */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Box
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "28px",
                }}
              >
                <Image src={HowrahImg} radius="28px" h={500} fit="cover" />

                {/* OPTIONAL OVERLAY */}
                <Box
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.45), transparent)",
                  }}
                />
              </Box>

              {/* IMAGE CAPTION */}
              <Text ta="center" mt="md" size="sm" c="dimmed" fs="italic">
                A garbage collector in Kolkata, West Bengal. © Nils Heininger
              </Text>
            </motion.div>
          </Grid.Col>

          {/* 📝 CONTENT SIDE */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Text
                c="orange"
                fw={700}
                tt="uppercase"
                mb={10}
                size="sm"
                style={{ letterSpacing: "1px" }}
              >
                Understanding the Community
              </Text>

              <Title
                order={2}
                fw={800}
                style={{
                  fontSize: "clamp(32px, 4vw, 48px)",
                  lineHeight: 1.2,
                }}
              >
                Who Is a Scavenger?
              </Title>

              <Text mt="xl" c="dimmed" size="lg" lh={2}>
                Scavenger is a common term for people who are involved in
                different kinds of infamous work which is perceived as “unclean”
                by society. Despite their essential contribution to public
                health and sanitation, these communities continue to face
                discrimination, exclusion, and social stigma.
              </Text>

              <Text mt="md" c="dimmed" size="lg" lh={2}>
                By sweeping streets, cleaning sewage systems, managing waste,
                and recycling garbage, scavenger communities play a crucial role
                in keeping cities and villages functional and healthy. Our daily
                lives would be impossible without their labor, especially in a
                rapidly growing world facing pollution and environmental
                challenges.
              </Text>

              <Text mt="md" c="dimmed" size="lg" lh={2}>
                Yet, many sanitation workers continue to work in unsafe
                conditions with limited access to education, healthcare,
                dignity, and equal opportunities. Recognizing their humanity,
                rights, and contribution is the first step toward building a
                more just and inclusive society.
              </Text>
            </motion.div>
          </Grid.Col>
        </Grid>
      </Container>

      {/* 🔥 SCAVENGER COMMUNITIES IN INDIA */}
      <Container size="lg" py={100}>
        <Grid gutter={60} align="center">
          {/* 📝 CONTENT */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Text
                c="orange"
                fw={700}
                tt="uppercase"
                mb={10}
                size="sm"
                style={{ letterSpacing: "1px" }}
              >
                Social Reality in India
              </Text>

              <Title
                order={2}
                fw={800}
                style={{
                  fontSize: "clamp(32px, 4vw, 48px)",
                  lineHeight: 1.2,
                }}
              >
                Scavenger Communities in India
              </Title>

              <Text mt="xl" size="lg" c="dimmed" lh={2}>
                Even though scavenger communities can be found across the world,
                their condition in South Asia remains especially severe. India
                has one of the world’s largest scavenging populations, where
                generations of families continue to face discrimination,
                exclusion, and unsafe working conditions.
              </Text>

              <Text mt="md" size="lg" c="dimmed" lh={2}>
                Across different regions, these communities are known by names
                such as Bhangi, Thotti, Mehtar, Dhanuk, Valmiki (Balmiki), or
                Chuhra. Despite regional differences, they all share a common
                struggle against caste-based marginalization and hereditary
                labor systems.
              </Text>

              <Text mt="md" size="lg" c="dimmed" lh={2}>
                Historically labeled as “untouchable” within the caste
                hierarchy, many individuals are still pushed into sanitation and
                waste-related work passed down from one generation to the next.
                Lack of education, economic opportunity, and social acceptance
                continues to reinforce this cycle of exclusion.
              </Text>

              {/* HIGHLIGHT BOX */}
              <Box
                mt={35}
                p="lg"
                style={{
                  borderLeft: "4px solid #f97316",
                  background: "#fff7ed",
                  borderRadius: "14px",
                }}
              >
                <Text fw={600} size="lg">
                  Breaking the cycle requires dignity, education, equal
                  opportunity, and social justice.
                </Text>
              </Box>
            </motion.div>
          </Grid.Col>

          {/* 🖼 IMAGE */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Box
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "30px",
                }}
              >
                <Image src={InheritedImg} radius="30px" h={540} fit="cover" />

                {/* DARK OVERLAY */}
                <Box
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.55), transparent)",
                  }}
                />

                {/* FLOATING INFO CARD */}
                <Box
                  style={{
                    position: "absolute",
                    bottom: 25,
                    left: 25,
                    right: 25,
                    background: "rgba(255,255,255,0.12)",
                    backdropFilter: "blur(14px)",
                    padding: "18px",
                    borderRadius: "20px",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  <Text c="white" fw={700} size="lg">
                    Generations fighting for dignity & equality
                  </Text>

                  <Text c="rgba(255,255,255,0.8)" size="sm" mt={5} fs="italic">
                    A member of the scavenger community holding his grandchild.
                    © Nils Heininger
                  </Text>
                </Box>
              </Box>
            </motion.div>
          </Grid.Col>
        </Grid>
      </Container>

      {/* 🔥 WORKING CONDITIONS SECTION */}
      <Box
        py={100}
        style={{
          background: "linear-gradient(180deg, #0f172a 0%, #111827 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container size="lg">
          {/* SECTION TITLE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: "70px" }}
          >
            <Text
              c="orange"
              fw={700}
              tt="uppercase"
              size="sm"
              mb={10}
              style={{ letterSpacing: "1px" }}
            >
              Ground Reality
            </Text>

            <Title
              c="white"
              fw={800}
              style={{
                fontSize: "clamp(34px, 5vw, 58px)",
                lineHeight: 1.1,
              }}
            >
              Still Working Under Worst Conditions
            </Title>

            <Text
              c="rgba(255,255,255,0.72)"
              size="lg"
              maw={850}
              mx="auto"
              mt="xl"
              lh={2}
            >
              Thousands of sanitation workers continue to work in unsafe and
              degrading environments without proper safety equipment, healthcare
              protection, or social dignity.
            </Text>
          </motion.div>

          {/* 🔥 FIRST ROW */}
          <Grid gutter={60} align="center" mb={100}>
            {/* IMAGE */}
            <Grid.Col span={{ base: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <Box
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "30px",
                  }}
                >
                  <Image src={BoyatGarbage} radius="30px" h={500} fit="cover" />

                  <Box
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.55), transparent)",
                    }}
                  />
                </Box>

                {/* CAPTION */}
                <Text
                  ta="center"
                  mt="md"
                  size="sm"
                  c="rgba(255,255,255,0.6)"
                  fs="italic"
                >
                  Even children often work under worst conditions, because they
                  have to support their family. © Nils Heininger
                </Text>
              </motion.div>
            </Grid.Col>

            {/* CONTENT */}
            <Grid.Col span={{ base: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <Title order={2} c="white" fw={800} mb="lg">
                  Unsafe & Inhumane Conditions
                </Title>

                <Text c="rgba(255,255,255,0.72)" size="lg" lh={2}>
                  The working conditions faced by members of scavenger
                  communities remain extremely poor. Every day, the absence of
                  proper safety gear, sanitation standards, and healthcare
                  support exposes workers to severe illnesses, toxic gases,
                  infections, and life-threatening accidents.
                </Text>

                <Text mt="md" c="rgba(255,255,255,0.72)" size="lg" lh={2}>
                  Despite performing work that is essential for public hygiene
                  and environmental health, these workers are frequently denied
                  dignity, social respect, and basic labor protections.
                </Text>

                {/* STAT BOX */}
                <Box
                  mt={35}
                  p="lg"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "20px",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <Text c="orange" fw={800} size="38px">
                    377+
                  </Text>

                  <Text c="rgba(255,255,255,0.7)" mt={5}>
                    Reported sewer & septic tank deaths between 2019–2023 in
                    India.
                  </Text>
                </Box>
              </motion.div>
            </Grid.Col>
          </Grid>

          {/* 🔥 SECOND ROW */}
          <Grid gutter={60} align="center">
            {/* CONTENT */}
            <Grid.Col span={{ base: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <Text
                  c="orange"
                  fw={700}
                  tt="uppercase"
                  size="sm"
                  mb={10}
                  style={{ letterSpacing: "1px" }}
                >
                  Manual Scavenging
                </Text>

                <Title order={2} c="white" fw={800}>
                  The Most Dangerous Form of Sanitation Work
                </Title>

                <Text mt="xl" c="rgba(255,255,255,0.72)" size="lg" lh={2}>
                  At the bottom of this system lies manual scavenging — the
                  caste-based practice of removing human waste from dry
                  latrines, sewers, and septic tanks.
                </Text>

                <Text mt="md" c="rgba(255,255,255,0.72)" size="lg" lh={2}>
                  Using only basic tools such as brooms, tin plates, buckets,
                  and baskets, workers are forced to risk their health and lives
                  while ensuring the cleanliness and sanitation of towns and
                  cities across India.
                </Text>

                <Text mt="md" c="rgba(255,255,255,0.72)" size="lg" lh={2}>
                  Though legally banned, this practice continues to exist
                  because of systemic inequality, poverty, and caste
                  discrimination.
                </Text>
              </motion.div>
            </Grid.Col>

            {/* IMAGE */}
            <Grid.Col span={{ base: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <Box
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "30px",
                  }}
                >
                  <Image src={MSCChart} radius="30px" h={520} fit="cover" />

                  <Box
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
                    }}
                  />
                </Box>

                {/* CAPTION */}
                {/* <Text
                  ta="center"
                  mt="md"
                  size="sm"
                  c="rgba(255,255,255,0.6)"
                  fs="italic"
                >
                  Manual scavenging continues despite legal bans and human
                  rights protections.
                </Text> */}
              </motion.div>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* AWARD */}
      <Container size="xl" py={80}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card
            radius="32px"
            p={0}
            shadow="xl"
            style={{
              overflow: "hidden",
              border: "1px solid rgba(0,0,0,0.06)",
              background: "linear-gradient(135deg, #fff7ed 0%, #ffffff 100%)",
            }}
          >
            <Grid gutter={0} align="center">
              {/* 🔥 LEFT IMAGE */}
              <Grid.Col span={{ base: 12, md: 5 }}>
                <Box
                  style={{
                    position: "relative",
                    height: "100%",
                  }}
                >
                  <Image src={awardImg} h={420} fit="cover" />

                  {/* OVERLAY BADGE */}
                  <Box
                    style={{
                      position: "absolute",
                      top: 25,
                      left: 25,
                    }}
                  >
                    <Badge
                      size="xl"
                      radius="xl"
                      color="orange"
                      variant="filled"
                      leftSection={<FaTrophy size={12} />}
                    >
                      National Recognition
                    </Badge>
                  </Box>
                </Box>
              </Grid.Col>

              {/* 🔥 RIGHT CONTENT */}
              <Grid.Col span={{ base: 12, md: 7 }}>
                <Box p={{ base: 30, md: 50 }}>
                  <Stack gap="lg">
                    {/* ICON */}
                    <ThemeIcon
                      size={75}
                      radius="xl"
                      variant="light"
                      color="orange"
                    >
                      <FaAward size={34} />
                    </ThemeIcon>

                    {/* TITLE */}
                    <div>
                      <Text
                        fw={700}
                        c="orange"
                        tt="uppercase"
                        size="sm"
                        mb={8}
                        style={{
                          letterSpacing: "1px",
                        }}
                      >
                        Recognition & Achievement
                      </Text>

                      <Title
                        order={2}
                        fw={900}
                        style={{
                          fontSize: "clamp(30px, 4vw, 48px)",
                          lineHeight: 1.15,
                        }}
                      >
                        Recipient of 1st Prize,
                        <br />
                        ISC-FICCI 2023
                      </Title>
                    </div>

                    {/* DESCRIPTION */}
                    <Text c="dimmed" size="lg" lh={1.9}>
                      This prestigious national recognition celebrates MSC’s
                      relentless efforts to restore dignity, create
                      opportunities, and improve the lives of sanitation workers
                      and marginalized communities across India.
                    </Text>

                    {/* EXTRA HIGHLIGHT */}
                    <Group gap="md" mt="sm">
                      <Card
                        radius="xl"
                        p="md"
                        style={{
                          background: "#fff",
                          border: "1px solid rgba(0,0,0,0.06)",
                        }}
                      >
                        <Text fw={800} size="xl">
                          2023
                        </Text>

                        <Text size="sm" c="dimmed">
                          Award Year
                        </Text>
                      </Card>

                      <Card
                        radius="xl"
                        p="md"
                        style={{
                          background: "#fff",
                          border: "1px solid rgba(0,0,0,0.06)",
                        }}
                      >
                        <Text fw={800} size="xl">
                          National
                        </Text>

                        <Text size="sm" c="dimmed">
                          Recognition
                        </Text>
                      </Card>
                    </Group>

                    {/* BUTTON */}
                    <Button
                      mt="md"
                      radius="xl"
                      color="orange"
                      size="md"
                      rightSection={<FaArrowRight size={14} />}
                      style={{
                        width: "fit-content",
                        boxShadow: "0 12px 25px rgba(249,115,22,0.25)",
                      }}
                    >
                      Learn More
                    </Button>
                  </Stack>
                </Box>
              </Grid.Col>
            </Grid>
          </Card>
        </motion.div>
      </Container>

      {/* 🔥 PROBLEM SECTION  */}
      <Container size="xl" py={100}>
        <Grid gutter={60} align="center">
          {/* IMAGE */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Box
                style={{
                  position: "relative",
                }}
              >
                <Image
                  src={problemImg}
                  radius="32px"
                  h={520}
                  fit="cover"
                  style={{
                    boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
                  }}
                />

                {/* FLOATING CARD */}
                <Card
                  radius="24px"
                  p="lg"
                  shadow="xl"
                  style={{
                    position: "absolute",
                    bottom: 25,
                    left: 25,
                    background: "rgba(255,255,255,0.95)",
                    backdropFilter: "blur(10px)",
                    maxWidth: 260,
                  }}
                >
                  <Group wrap="nowrap" align="flex-start">
                    <ThemeIcon
                      size={50}
                      radius="xl"
                      color="red"
                      variant="light"
                    >
                      <FaExclamationTriangle size={20} />
                    </ThemeIcon>

                    <div>
                      <Title order={3} c="red">
                        377+
                      </Title>

                      <Text size="sm" fw={600}>
                        Lives Lost
                      </Text>

                      <Text size="xs" c="dimmed" mt={4}>
                        Sewer & septic tank deaths between 2019–2023.
                      </Text>
                    </div>
                  </Group>
                </Card>
              </Box>
            </motion.div>
          </Grid.Col>

          {/* CONTENT */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Badge size="lg" radius="xl" color="red" variant="light" mb={18}>
                The Reality
              </Badge>

              <Title
                order={2}
                fw={900}
                style={{
                  fontSize: "clamp(32px, 4vw, 52px)",
                  lineHeight: 1.15,
                }}
              >
                Ending Generational
                <br />
                Injustice & Exclusion
              </Title>

              <Text c="dimmed" mt="xl" size="lg" lh={1.9}>
                Despite being legally banned, manual scavenging continues to
                persist across India, exposing thousands of sanitation workers
                to unsafe and degrading conditions.
              </Text>

              <Text c="dimmed" mt="md" size="lg" lh={1.9}>
                Deep-rooted caste discrimination, poverty, and lack of
                educational opportunities continue to force generations into
                hazardous occupations with limited pathways for social mobility.
              </Text>

              {/* FEATURE POINTS */}
              <Stack mt={35} gap="lg">
                {[
                  {
                    icon: <FaUsers />,
                    title: "Social Exclusion",
                  },
                  {
                    icon: <FaBookOpen />,
                    title: "Lack of Education Access",
                  },
                  {
                    icon: <FaLightbulb />,
                    title: "Limited Economic Opportunities",
                  },
                ].map((item, i) => (
                  <Group key={i} wrap="nowrap">
                    <ThemeIcon
                      size={52}
                      radius="xl"
                      color="red"
                      variant="light"
                    >
                      {item.icon}
                    </ThemeIcon>

                    <Text fw={600} size="md">
                      {item.title}
                    </Text>
                  </Group>
                ))}
              </Stack>
            </motion.div>
          </Grid.Col>
        </Grid>
      </Container>

      {/* 🔥 PROJECT SECTION */}
      <Container size="xl" py={100}>
        <Card
          radius="36px"
          p={0}
          shadow="xl"
          style={{
            overflow: "hidden",
            border: "1px solid rgba(0,0,0,0.06)",
            background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
          }}
        >
          <Grid gutter={0} align="center">
            {/* CONTENT */}
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Box p={{ base: 30, md: 60 }}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Badge
                    size="lg"
                    radius="xl"
                    color="orange"
                    variant="light"
                    mb={18}
                  >
                    Our Initiative
                  </Badge>

                  <Title
                    order={2}
                    fw={900}
                    style={{
                      fontSize: "clamp(30px, 4vw, 50px)",
                      lineHeight: 1.15,
                    }}
                  >
                    Dr. B.R. Ambedkar
                    <br />
                    Community Resource Centres
                  </Title>

                  <Text c="dimmed" mt="xl" size="lg" lh={1.9}>
                    MSC has established community resource centres across Bihar,
                    Uttar Pradesh, Rajasthan, Haryana, and Madhya Pradesh.
                  </Text>

                  <Text c="dimmed" mt="md" size="lg" lh={1.9}>
                    These centres provide education, digital literacy,
                    leadership training, career guidance, and entrepreneurship
                    support to build long-term community empowerment.
                  </Text>

                  {/* MINI STATS */}
                  <Group mt={35}>
                    <Card radius="xl" p="md" shadow="sm">
                      <Title order={3} c="orange">
                        6+
                      </Title>

                      <Text size="sm" c="dimmed">
                        Centers
                      </Text>
                    </Card>

                    <Card radius="xl" p="md" shadow="sm">
                      <Title order={3} c="orange">
                        5000+
                      </Title>

                      <Text size="sm" c="dimmed">
                        Lives Impacted
                      </Text>
                    </Card>
                  </Group>
                </motion.div>
              </Box>
            </Grid.Col>

            {/* IMAGE */}
            <Grid.Col span={{ base: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Image src={projectImg} h={620} fit="cover" />
              </motion.div>
            </Grid.Col>
          </Grid>
        </Card>
      </Container>

      {/* 🔥 ABOUT MSC IMPACT SECTION */}
      <Box
        py={100}
        style={{
          background: "linear-gradient(180deg, #fff7ed 0%, #ffffff 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container size="lg">
          <Grid gutter={60} align="center">
            {/* 🖼 IMAGE */}
            <Grid.Col span={{ base: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <Box
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "30px",
                  }}
                >
                  <Image src={MSCoverview} radius="30px" h={650} fit="cover" />

                  {/* OVERLAY */}
                  <Box
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.45), transparent)",
                    }}
                  />
                </Box>

                {/* IMAGE CAPTION */}
                <Text ta="center" mt="md" size="sm" c="dimmed" fs="italic">
                  Building leadership, dignity, and opportunities within
                  scavenger communities across India.
                </Text>
              </motion.div>
            </Grid.Col>

            {/* 📝 CONTENT */}
            <Grid.Col span={{ base: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <Text
                  c="orange"
                  fw={700}
                  tt="uppercase"
                  size="sm"
                  mb={10}
                  style={{ letterSpacing: "1px" }}
                >
                  About Our Movement
                </Text>

                <Title
                  order={2}
                  fw={800}
                  style={{
                    fontSize: "clamp(32px, 4vw, 50px)",
                    lineHeight: 1.2,
                  }}
                >
                  Movement for Scavenger Community (MSC)
                </Title>

                <Text mt="xl" size="lg" c="dimmed" lh={2}>
                  Movement for Scavenger Community (MSC) is committed to
                  improving the lives and dignity of members of scavenger
                  communities across India.
                </Text>

                <Text mt="md" size="lg" c="dimmed" lh={2}>
                  Through access to education, leadership development,
                  alternative career opportunities, and community support, MSC
                  works to break generational cycles of exclusion and
                  discrimination.
                </Text>

                <Text mt="md" size="lg" c="dimmed" lh={2}>
                  By connecting grassroots leaders, youth activists, educators,
                  and local organizations, we are building a people-powered
                  movement rooted in dignity, equality, justice, and social
                  transformation.
                </Text>

                {/* HIGHLIGHT BOX */}
                <Box
                  mt={35}
                  p="lg"
                  style={{
                    background: "#fff",
                    borderRadius: "20px",
                    border: "1px solid rgba(249,115,22,0.15)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                  }}
                >
                  <Text fw={700} size="lg">
                    “From the people, for the people — creating pathways toward
                    justice and empowerment.”
                  </Text>
                </Box>

                {/* CTA BUTTON */}
                <Group mt={35}>
                  <Button
                    component={Link}
                    to="/https://scavenger-movement.org/thoughts/about-scavenger-communities"
                    size="md"
                    radius="xl"
                    color="orange"
                    rightSection={<FaArrowRight size={14} />}
                  >
                    Find Out More About Our Organization
                  </Button>
                </Group>
              </motion.div>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* OBJECTIVES */}
      <Container size="lg" py={80}>
        <Title order={2} ta="center" mb={40}>
          Objectives & Outcomes
        </Title>
        <Grid>
          {[
            {
              icon: <FaBook />,
              title: "Education & Skills",
              desc: "Enhancing access to quality education and employability skills",
            },
            {
              icon: <FaUsers />,
              title: "Leadership",
              desc: "Building a strong network of grassroots leaders",
            },
            {
              icon: <FaLightbulb />,

              title: "Fellowship",
              desc: "Empowering young changemakers by mentorship.",
            },
            {
              icon: <FaGavel />,
              title: "Advocacy",
              desc: "Influencing policies for inclusive and equitable development",
            },
          ].map((item, i) => (
            <Grid.Col key={i} span={{ base: 12, sm: 6, md: 3 }}>
              <Card
                radius="xl"
                p="lg"
                shadow="md"
                style={{ textAlign: "center" }}
              >
                <Stack align="center">
                  {item.icon}
                  <Text fw={600}>{item.title}</Text>
                  <Text size="sm" c="dimmed">
                    {item.desc}
                  </Text>
                </Stack>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Container>

      {/* GALLERY */}
      <Container size="lg" py={80}>
        <Title order={2} ta="center" mb={40}>
          Gallery
        </Title>
        <Grid>
          {[g1, g2, g3, g4].map((img, i) => (
            <Grid.Col key={i} span={{ base: 12, sm: 6, md: 3 }}>
              <Image src={img} radius="lg" />
            </Grid.Col>
          ))}
        </Grid>
        <Stack align="center" mt={30}>
          <Button component={Link} to="/gallery" radius="xl">
            View Full Gallery
          </Button>
        </Stack>
      </Container>

      {/* VIDEO SECTION */}
      <Container size="lg" py={80}>
        <Grid align="center">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Title order={2}>Our Work in Action</Title>
            <Text fw={500} mt="sm">
              Transforming lives through community-driven initiatives
            </Text>
            <Text c="dimmed" mt="sm">
              Watch how MSC is empowering individuals and communities by
              providing education, leadership opportunities, and sustainable
              livelihoods. This video highlights real stories, challenges, and
              the impact created on the ground.
            </Text>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <div style={{ position: "relative", paddingTop: "56.25%" }}>
              <iframe
                // src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                src="https://www.youtube.com/embed/g6xcJEIukhE?si=bm8Wx2oJvv9_j7uE"
                title="MSC Video"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  borderRadius: "12px",
                }}
                allowFullScreen
              />
            </div>
          </Grid.Col>
        </Grid>
      </Container>

      {/* 🔥 QUOTE / FOUNDER MESSAGE SECTION */}
      <Box
        py={120}
        style={{
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #111827 0%, #0f172a 50%, #1e293b 100%)",
        }}
      >
        {/* BACKGROUND GLOW */}
        <Box
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(249,115,22,0.12)",
            filter: "blur(120px)",
            top: -200,
            right: -100,
          }}
        />

        <Container size="md" style={{ position: "relative", zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Card
              radius="36px"
              p={{ base: "xl", md: 60 }}
              shadow="xl"
              style={{
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(18px)",
                border: "1px solid rgba(255,255,255,0.08)",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* QUOTE ICON */}
              <Text
                style={{
                  fontSize: "120px",
                  lineHeight: 1,
                  position: "absolute",
                  top: -20,
                  left: 30,
                  color: "rgba(249,115,22,0.12)",
                  fontWeight: 900,
                }}
              >
                “
              </Text>

              {/* BADGE */}
              <Badge
                size="lg"
                radius="xl"
                color="orange"
                variant="light"
                mb={30}
              >
                Founder’s Message
              </Badge>

              {/* MAIN QUOTE */}
              <Title
                order={2}
                c="white"
                fw={800}
                style={{
                  fontSize: "clamp(28px, 4vw, 48px)",
                  lineHeight: 1.4,
                  maxWidth: 850,
                  margin: "0 auto",
                }}
              >
                We are not just ending
                <span style={{ color: "#fb923c" }}> manual scavenging</span> —
                <br />
                we are building a
                <span style={{ color: "#fb923c" }}> movement of leaders.</span>
              </Title>

              {/* SMALL DESCRIPTION */}
              <Text
                c="rgba(255,255,255,0.68)"
                size="lg"
                mt={30}
                maw={700}
                mx="auto"
                lh={1.9}
              >
                Our mission is not only to fight injustice, but to create
                pathways for dignity, education, leadership, and lasting
                transformation within marginalized communities.
              </Text>

              {/* AUTHOR */}
              <Group justify="center" mt={45}>
                <Box
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, #f97316 0%, #fb923c 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "28px",
                    fontWeight: 800,
                    boxShadow: "0 10px 30px rgba(249,115,22,0.35)",
                  }}
                >
                  VK
                </Box>

                <div style={{ textAlign: "left" }}>
                  <Text c="white" fw={700} size="lg">
                    Vimal Kumar
                  </Text>

                  <Text c="rgba(255,255,255,0.55)" size="sm">
                    Founder, Movement for Scavenger Community
                  </Text>
                </div>
              </Group>
            </Card>
          </motion.div>
        </Container>
      </Box>
      <HomeRecentNews />
    </div>
  );
}
