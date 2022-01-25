import usePageTitle from "../../core/hooks/usePageTitle"
import DefaultLayout from "../layouts/Default"

export default function Home() {
  usePageTitle('Home') //5.14. Alterando o título da página conforme as rotas
  return <DefaultLayout>
    <h1>Home</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis at accusamus facilis inventore cupiditate earum aliquam mollitia dolor corporis pariatur.
    </p>
  </DefaultLayout>
}