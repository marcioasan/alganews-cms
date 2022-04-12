import withBoundary from "../../core/hoc/withBoundary";
import styled from 'styled-components'
import MarkdownEditor from '../components/MarkdownEditor/MarkdownEditor';
import Button from "../components/Button/Button";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import confirm from "../../core/utils/confirm";
import info from "../../core/utils/info";
import modal from "../../core/utils/modal";
import { Post, PostService } from "marcioasan-sdk";

//8.44. Desafio - Criar modal de Preview de Post
interface PostPreviewProps {
  postId: number
}

function PostPreview (props: PostPreviewProps) {
  
  //8.54. O problema do BrowserRouter - 2'40"
  //const history = useHistory()
  
  //8.52. Publicando um post - 3'40", 7'30"
  async function publishPost() {
    await PostService.publishExistingPost(props.postId)
    info({
      title: 'Post publicado',
      description: 'Você publicou o post com sucesso'
    })
  }

  function reopenModal() {
    modal({
      children: <PostPreview postId={props.postId}/>
    })
  }

  //8.47. Recuperando post da API
  const [post, setPost] = useState<Post.Datailed>()
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true)
    PostService
      .getExistingPost(props.postId)
      .then(setPost)
      .finally(() => setLoading(false))
  }, [props.postId])

  if(loading)
    return <Loading show/>

  if(!post)
    return null

  //8.46. Desafio - Layout do Post
  return <PostPreviewWrapper>
      <PostPreviewHeading>
        <PostPreviewTitle>
          {post.title}
        </PostPreviewTitle>
        <PostPreviewActions>
          <Button
            variant={'danger'}
            label={'Publicar'}
            disabled={post.published}
            onClick={() => {
              confirm({
                title: 'Publicar o post?',
                onConfirm: publishPost,
                onCancel: reopenModal,
              })
            }}
          />
          <Button
            variant={'primary'}
            label={'Editar'}
            disabled={post.published}
            onClick={() => window.location.pathname = `/posts/editar/${props.postId}`} //8.54. O problema do BrowserRouter - 2'40"
          />          
        </PostPreviewActions>
      </PostPreviewHeading>
      <PostPreviewImage
        src={post.imageUrls.medium}
      />
      <PostPreviewContent>
        <MarkdownEditor
          readOnly
          value={post.body} 
        />
      </PostPreviewContent>
  </PostPreviewWrapper>
}

const PostPreviewWrapper = styled.div`
  background-color: #f3f8fa;
  padding: 24px;
  border: 1px solid #ccc;
  width: 655px;
  display: flex;
  gap: 24px;
  flex-direction: column;
  max-height: 70vh;
  overflow-y: auto;
  box-shadow: 0 6px 6px rgba(0,0,0,.05);
`

const PostPreviewHeading = styled.div`
  display: flex;
  justify-content: space-between;
`
const PostPreviewTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
`
const PostPreviewActions = styled.div`
  display: flex;
  gap: 8px;
`
const PostPreviewImage = styled.img`
  height: 240px;
  width: 100%;
  object-fit: cover;
`
const PostPreviewContent = styled.div`
`
export default withBoundary(PostPreview)