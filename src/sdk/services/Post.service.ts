import { Post } from "../@types";
import Service from "../Service";

class PostService extends Service {
  static getAllPosts() {
    //8.14. Criando o primeiro serviço - 2'30"
    return this.Http
      .get<Post.Paginated>('/posts')
      .then(this.getData)
      //.then(res => res.data) o método then recebe como parâmetro a resposta do get "res" e devolve os dados da resposta "res.data"
      //Para não ter sempre que escrever "res => res.data", esse retorno foi colocado em um método "getData" no Service.ts.
  }

  static getExistingPost(id: number) {    
    return this.Http
      .get<Post.Paginated>(`/posts/${id}`)
      .then(this.getData) 
  }

  //8.15. Enviando dados (método POST) com axios
  static insertNewPost(post: Post.Input) {
    return this.Http
      .post<Post.Datailed>('/post', post)
      .then(this.getData)
  }
}

export default PostService