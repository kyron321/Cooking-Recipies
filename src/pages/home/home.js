import "./Home.css"
import { useFetch } from "../../hooks/useFetch"

export default function Home() {
const {data, isPending, error} = useFetch('http://localhost:3000/recipes')

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && data.map(recipe =>(
        <h2 key={recipe.title}>{recipe.title}</h2>
      ))}
    </div>
  )
}