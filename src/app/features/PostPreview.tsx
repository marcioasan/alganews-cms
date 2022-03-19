import withBoundary from "../../core/hoc/withBoundary";
import styled from 'styled-components'
import MarkdownEditor from '../components/MarkdownEditor/MarkdownEditor';
import Button from "../components/Button/Button";
import { useEffect, useState } from "react";
import { Post } from "../../sdk/@types";
import PostService from "../../sdk/services/Post.service";
import Loading from "../components/Loading";

//8.44. Desafio - Criar modal de Preview de Post
interface PostPreviewProps {
  postId: number
}

function PostPreview (props: PostPreviewProps) {
  
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
          />
          <Button
            variant={'primary'}
            label={'Editar'}
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