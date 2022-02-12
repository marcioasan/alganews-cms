//8.19. Criando FileService

import Service from "../Service";
import { File } from  '../@types'
import { uuid } from "uuidv4";

class FileService extends Service {
  private static getSignedUrl(fileInfo: File.UploadRequestInput) {
    return this.Http
      .post<File.UploadRequest>('/upload-requests', fileInfo)
      .then(this.getData)
      .then(res => res.uploadSignedUrl)
  }

  //8.20. Enviando o arquivo para o Storage
  private static uploadFileToSignedUrl(signedUrl: string, file: File) {
    return this.Http
      .put<{}>(signedUrl, file, {
        headers: { 'Content-Type': file.type }
      })
      .then(this.getData)
  }

  private static getFileExtension(fileName: string) {
    const [extension] = fileName.split('.').slice(-1)
    return extension
  }

  private static generateFileName(extension: string){
    return `${uuid()}.${extension}`
  }

  static async upload(file: File){
    const extention = this.getFileExtension(file.name)
    const fileName = this.generateFileName(extention)

    //8.21. Abstraindo a lógica do upload - 12'
    const singedUrl = await FileService
      .getSignedUrl({ fileName, contentLength: file.size })

    await FileService
      .uploadFileToSignedUrl(singedUrl, file)

      //8.21. Abstraindo a lógica do upload - 14'20"
      return singedUrl.split('?')[0]
  }
}

export default FileService