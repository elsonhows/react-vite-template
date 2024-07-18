import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/env")({
  component: About,
});

function About() {
  console.log(import.meta.env.VITE_APP_TITLE); // "My App"
  console.log(import.meta.env.SOME_PASSWORD); // undefined

  return (
    <div className="p-2">
      <h3>Vite is running in "{import.meta.env.MODE}"</h3>
      <p>VITE_APP_TITLE: {import.meta.env.VITE_APP_TITLE}</p>
      <p>SOME_PASSWORD: {import.meta.env.SOME_PASSWORD ?? "undefined"}</p>
    </div>
  );
}
