import withBoundary from "../../core/hoc/withBoundary";
import styled from 'styled-components'
import MarkdownEditor from '../components/MarkdownEditor/MarkdownEditor';
import Button from "../components/Button/Button";

//8.44. Desafio - Criar modal de Preview de Post
interface PostPreviewProps {
  postId: number
}

function PostPreview (props: PostPreviewProps) {

  //8.46. Desafio - Layout do Post
  return <PostPreviewWrapper>
      <PostPreviewHeading>
        <PostPreviewTitle>
          {'Como fiquei rico aprendendo React'}
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
        src={'https://images.unsplash.com/photo-1499343628900-545067aef5a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'}
      />
      <PostPreviewContent>
        <MarkdownEditor
          readOnly
          value={'ola mundo\n- esta é\n- uma lista'} 
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