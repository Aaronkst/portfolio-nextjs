import SectionTitle from "@/components/SectionTitle";
import {
  Box,
  Button,
  Container,
  Group,
  TextInput,
  Textarea,
  useMantineTheme,
} from "@mantine/core";
import { IconAt, IconMessage, IconSend, IconUser } from "@tabler/icons-react";

export default function EmailForm() {
  const theme = useMantineTheme();
  return (
    <Container my={32}>
      <SectionTitle title="send me a message" />
      <Box p={64} bg={theme.colorScheme === "dark" ? "dark" : "gray.0"}>
        {/* @ts-ignore */}
        <form name="inquiries" netlify>
          <TextInput
            icon={<IconUser size="0.8rem" />}
            mb={16}
            label="Name"
            required
          />
          <TextInput
            icon={<IconAt size="0.8rem" />}
            mb={16}
            label="Email"
            required
          />
          <Textarea
            icon={<IconMessage size="0.8rem" />}
            rows={4}
            mb={16}
            label="Message"
            required
          />
          <Group position="right">
            <Button rightIcon={<IconSend size={16} />} type="submit">
              Send
            </Button>
          </Group>
        </form>
      </Box>
    </Container>
  );
}