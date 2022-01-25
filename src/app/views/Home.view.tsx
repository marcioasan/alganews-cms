import usePageTitle from "../../core/hooks/usePageTitle"
import PostList from "../features/PostsList"
import UserMetrics from "../features/UserMetrics"
import DefaultLayout from "../layouts/Default"

export default function Home() {
  usePageTitle('Home') //5.14. Alterando o título da página conforme as rotas

  return <DefaultLayout>
      <UserMetrics />
      <PostList />
  </DefaultLayout>
}