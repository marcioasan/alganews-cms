import withBoundary from "../../core/hoc/withBoundary";

//8.44. Desafio - Criar modal de Preview de Post
interface PostPreviewProps {
  postId: number
}

function PostPreview (props: PostPreviewProps) {
  return <div style={{
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    padding: 24
  }}>
    features/PostPreview
    { props.postId }
  </div>
}

export default withBoundary(PostPreview)