//10.22. Desafio - Migrar features para os Hooks
import { Post, PostService } from "marcioasan-sdk";
import { useCallback, useState } from "react";
import info from "../utils/info";

export default function useSinglePost() {
  const [post, setPost] = useState<Post.Detailed>();
  const [loading, setLoading] = useState(false);

  const publishPost = useCallback(async (postId: number) => {
    await PostService.publishExistingPost(postId);
    info({
      title: "Post publicado",
      description: "Você publicou o post com sucesso",
    });
  }, []);

  const fetchPost = useCallback((postId: number) => {
    setLoading(true);
    PostService.getExistingPost(postId)
      .then(setPost)
      .finally(() => setLoading(false));
  }, []);

  return {
    post,
    loading,
    publishPost,
    fetchPost,
  };
}