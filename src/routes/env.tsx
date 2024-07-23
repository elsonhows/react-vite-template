import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/env')({
  component: Env,
})

function Env() {
  console.log('render Env')
  console.log(import.meta.env.APP_TITLE) // "My App"
  console.log(import.meta.env.NOT_VISIBLE_IN_CLIENT)

  return (
    <div>
      <h3>Vite is running in "{import.meta.env.MODE}"</h3>
      <p>APP_TITLE: {import.meta.env.APP_TITLE}</p>
      <p>NOT_VISIBLE_IN_CLIENT: {import.meta.env.NOT_VISIBLE_IN_CLIENT}</p>
    </div>
  )
}
