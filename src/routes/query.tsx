import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/query')({
  component: Query,
})

function random_number(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function Query() {
  console.log('render Query')

  const { data, status } = useQuery({
    queryKey: ['fetchPokemon'],
    queryFn: async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${random_number(1, 800)}/`)
      return await res.json()
    },
  })
  return (
    <div className="p-2">
      <p> Gotta Catch 'Em All...</p>
      {status === 'success' ? (
        <div className="overflow-hidden">
          <img
            height="256px"
            width="256px"
            src={data.sprites.other.dream_world.front_default}
            alt="pokemon"
            className="w-full"
          />
          <h3>{data.name}</h3>
        </div>
      ) : (
        <p>Working...</p>
      )}
    </div>
  )
}
