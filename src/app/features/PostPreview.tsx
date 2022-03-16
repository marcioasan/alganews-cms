import withBoundary from "../../core/hoc/withBoundary";
import styled from 'styled-components'
import MarkdownEditor from '../components/MarkdownEditor/MarkdownEditor';

//8.44. Desafio - Criar modal de Preview de Post
interface PostPreviewProps {
  postId: number
}

function PostPreview (props: PostPreviewProps) {
  return <Wrapper>
    features/PostPreview
    <MarkdownEditor
      readOnly
      value={'ola mundo\n- esta é\n- uma lista'} 
    />
  </Wrapper>
}

  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 655px;
    background-color: #F3F8FA;
    border: 1px solid #ccc;
    padding: 24px;
  `
export default withBoundary(PostPreview)