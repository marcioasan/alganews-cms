import usePageTitle from "../../core/hooks/usePageTitle"
import DefaultLayout from "../layouts/Default/Default.layout"

export default function Contact() {
  usePageTitle('Contato') //5.14. Alterando o título da página conforme as rotas
  return <DefaultLayout>
    <h1>Contato</h1>
  </DefaultLayout>
}