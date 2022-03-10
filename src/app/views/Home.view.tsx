import usePageTitle from "../../core/hooks/usePageTitle"
import ErrorBoundary from "../components/ErrorBoundary"
import PostList from "../features/PostsList"
import UserEarnings from "../features/UserEarnings"
import UserPerformance from "../features/UserPerformance"
import UserTopTags from "../features/UserTopTags"
import DefaultLayout from "../layouts/Default"

export default function Home() {
  usePageTitle('Home') //5.14. Alterando o título da página conforme as rotas

  return <DefaultLayout>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: '32px'}}>
      <ErrorBoundary component={'top tags'}>
        <UserTopTags />
      </ErrorBoundary>  
      <ErrorBoundary component={'ganhos do usuário'}>
        <UserEarnings />
      </ErrorBoundary>  
      </div>
      <ErrorBoundary component={'performance'}>
        <UserPerformance />
      </ErrorBoundary>
      <ErrorBoundary component={'lista de posts'}>
        <PostList />
      </ErrorBoundary>
  </DefaultLayout>
}