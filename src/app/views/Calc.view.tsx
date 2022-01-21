import { useEffect } from "react"
import { useLocation, useParams } from "react-router-dom"
import usePageTitle from "../../core/hooks/usePageTitle"

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

export default function CalcView() {
  usePageTitle('Calc') //5.14. Alterando o título da página conforme as rotas
  const params = useParams<{ a: string, b: string }>()
  const query = useQuery()

  useEffect(() => {
    console.log(query.get('operation'))
  }, [])

  return <div>
    <h1>Soma - { Number(params.a) + Number(params.b) }</h1>
  </div>
}