import Hero from "../sections/index/Hero";
import Featured from "../sections/index/Featured";
import Skills from "@/sections/index/Skills";
import { Container, Stack } from "@mantine/core";

export default function Page() {
  return (
    <Stack spacing={64}>
      <Hero />
      <Skills />
      <Featured />
    </Stack>
  );
}
