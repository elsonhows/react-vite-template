import { AppShellAside } from '@mantine/core';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout/aside')({
  component: () => (
    <>
      <div>A layout with Aside</div>
      <AppShellAside w="300">Hello from the aside</AppShellAside>
    </>
  ),
});
