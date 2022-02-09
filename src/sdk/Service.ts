import axios, { AxiosResponse } from "axios"

const Http = axios.create()

class Service {
  protected static Http = Http
  protected static getData = getData
}

//8.14. Criando o primeiro serviço - 2'30" - 7'20"
function getData<T>(res: AxiosResponse<T>) {
  return res.data
}

Http.defaults.baseURL = 'http://localhost:8080'

export default Service