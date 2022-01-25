import { useEffect } from "react"
import { useParams } from "react-router-dom"
import usePageTitle from "../../core/hooks/usePageTitle"
import DefaultLayout from "../layouts/Default/Default.layout"

export default function UserView() {
  usePageTitle('Usuário') //5.14. Alterando o título da página conforme as rotas
  const params = useParams<{ userId: string }>()

  useEffect(() => {
    console.log(params)
  }, [])

  return <DefaultLayout>
    <h1>Usuário - { params.userId }</h1>
  </DefaultLayout>
}