import { Post } from "../@types";
import Service from "../Service";
import generateQueryString from "../utils/generateQueryString";

class PostService extends Service {
  static getAllPosts(search: Post.Query) { //8.17. A Developer Experience do SDK - 7'
    const queryString = generateQueryString(search)
    
    //8.14. Criando o primeiro serviço - 2'30"
    return this.Http
      .get<Post.Paginated>('/posts'.concat(queryString))
      .then(this.getData)
      //.then(res => res.data) o método then recebe como parâmetro a resposta do get "res" e devolve os dados da resposta "res.data"
      //Para não ter sempre que escrever "res => res.data", esse retorno foi colocado em um método "getData" no Service.ts.
  }

  static getExistingPost(id: number) {    
    return this.Http
      .get<Post.Datailed>(`/posts/${id}`)
      .then(this.getData) 
  }

  //8.15. Enviando dados (método POST) com axios
  static insertNewPost(post: Post.Input) {
    return this.Http
      .post<Post.Datailed>('/posts', post)
      .then(this.getData)
  }

  //8.52. Publicando um post - 2'
  static publishExistingPost(postId: number) {
    return this.Http
      .put<{}>(`/posts/${postId}/publishing`)
      .then(this.getData)
  }

  //8.55. Edição do post - 3'
  static updateExistingPost(postId: number, post: Post.Input) {
    return this.Http
      .put<Post.Datailed>(`/posts/${postId}`, post)
      .then(this.getData)
  }

}

export default PostService