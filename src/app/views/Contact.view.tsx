import usePageTitle from "../../core/hooks/usePageTitle"

export default function Contact() {
  usePageTitle('Contato') //5.14. Alterando o título da página conforme as rotas
  return <div>
    <h1>Contato</h1>
  </div>
}