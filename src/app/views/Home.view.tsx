import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import usePageTitle from "../../core/hooks/usePageTitle"
import selectPaginatedPosts from "../../core/selectors/selectPaginatedPosts"
import selectPostsCounter from "../../core/selectors/selectPostsCounter"
import { RootState } from "../../core/store"
import { fetchPosts, increment } from "../../core/store/Post.slice"
import ErrorBoundary from "../components/ErrorBoundary"
import PostList from "../features/PostsList"
import UserEarnings from "../features/UserEarnings"
import UserPerformance from "../features/UserPerformance"
import UserTopTags from "../features/UserTopTags"
import DefaultLayout from "../layouts/Default"


export default function Home() {
  usePageTitle('Home') //5.14. Alterando o título da página conforme as rotas
  
  //10.10. Disparando uma ação
  const dispatch = useDispatch()
  
  //10.11. Acessando a store dentro de um componente, 10.16. Reduzindo boilerplate com createReducer
  const counter = useSelector(selectPostsCounter);

  //10.10. Disparando uma ação
  // useEffect(() => {
  //   dispatch(addPost(fakePost))
  // }, [dispatch])


  return <DefaultLayout>
    <button onClick={() => {
      dispatch(increment())
    }}>
      disparar ação
      </button>
      {counter}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: '32px'}}>
      <ErrorBoundary component={'top tags'}>
        <UserTopTags />
      </ErrorBoundary>  
      <ErrorBoundary component={'ganhos do usuário'}>
        <UserEarnings />
      </ErrorBoundary>  
      </div>
      
        <UserPerformance />
      
      <ErrorBoundary component={'lista de posts'}>
        <PostList />
      </ErrorBoundary>
  </DefaultLayout>
}