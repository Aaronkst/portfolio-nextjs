import EmailForm from "@/sections/contact/EmailForm";
import Hero from "../sections/contact/Hero";
import { Stack } from "@mantine/core";

export default function Page() {
  return (
    <Stack spacing={64}>
      <Hero />
      <EmailForm />
    </Stack>
  );
}
