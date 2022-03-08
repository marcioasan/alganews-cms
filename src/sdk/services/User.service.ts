import { User } from "../@types";
import Service from "../Service";

class UserService extends Service {
  static getAllEditors() {
    return this.Http
      .get<User.EditorSummary[]>('/users/editors')
      .then(this.getData)
  }

  static getExistingEditor(editorId: number) {
    return this.Http
      .get<User.EditorDetailed>(`/users/editors/${editorId}`)
      .then(this.getData)
  }
  
  //8.27. Ganhos do usuário - 2'30"
  static getDetailedUser(userId: number){
    return this.Http
      .get<User.Datailed>(`/users/${userId}`)
      .then(this.getData)
  }
}

export default UserService