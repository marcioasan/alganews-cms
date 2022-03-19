import DefaultLayout from "../layouts/Default";
import usePageTitle from "../../core/hooks/usePageTitle";
import PostForm from "../features/PostForm";
import { useParams } from "react-router-dom";

export default function PostEditView() {
  //8.55. Edição do post - 14'
  const params = useParams<{ id: string }>()

  usePageTitle('Editar post')

  return <DefaultLayout>
    <PostForm postId={Number(params.id)} />
  </DefaultLayout>
}