import usePageTitle from "../hooks/usePageTitle"

export default function Home() {
  usePageTitle('Home') //5.14. Alterando o título da página conforme as rotas
  return <div>
    <h1>Home</h1>
  </div>
}