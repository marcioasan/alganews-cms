import { useEffect } from "react"
import { useParams } from "react-router-dom"
import usePageTitle from "../hooks/usePageTitle"

export default function UserView() {
  usePageTitle('Usuário') //5.14. Alterando o título da página conforme as rotas
  const params = useParams<{ userId: string }>()

  useEffect(() => {
    console.log(params)
  }, [])

  return <div>
    <h1>Usuário - { params.userId }</h1>
  </div>
}