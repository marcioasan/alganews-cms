import { mdiDelete, mdiUpload } from '@mdi/js'
import Icon from '@mdi/react'
import { FileService } from 'marcioasan-sdk'
//import FileService from '../../../sdk/services/File.service'
import { ChangeEvent, useEffect, useState } from 'react'
import Button from '../Button/Button'
import Loading from '../Loading'
import *  as IU from './ImageUpload.styles'

export interface ImageUploadProps {
  label: string
  onImageUpload: (imageUrl: string) => any
  preview?: string //8.55. Edição do post - 16'30"
}

function ImageUpload (props: ImageUploadProps) {

  const [filePreview, setFilePreview] = useState<string | undefined>(undefined)
  const [pushing, setPushing] = useState(false)

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files![0]

    if(file){
      const reader = new FileReader()
      reader.addEventListener('load', async e => {
        try {
          setPushing(true)
          setFilePreview(String(e.target?.result))
          //8.21. Abstraindo a lógica do upload - 4'
          //8.21. Abstraindo a lógica do upload - 12'
          const imageUrl = await FileService.upload(file) //9.8. Implementando os primeiros serviços - 11'
          props.onImageUpload(imageUrl)
        } finally {
          setPushing(false)
        }
      })
      reader.readAsDataURL(file)
    }
  }

  //8.55. Edição do post - 17'
  useEffect(() => {
    setFilePreview(props.preview)
  }, [props.preview])

  if(filePreview)
    return <IU.ImagePreviewWrapper>
      <Loading show={pushing} />
      <IU.ImagePreview preview={ filePreview }>
        <Button 
          variant={'primary'} 
          /* label={<div className="imageUploadButton">Remover imagem <Icon size={ '24px' } path={ mdiDelete } /></div>} */
          label={<IU.ContentLabel>Remover imagem <Icon size={ '24px' } path={ mdiDelete } /></IU.ContentLabel>}
          onClick={() => setFilePreview(undefined)}
          />
      </IU.ImagePreview>
    </IU.ImagePreviewWrapper>

  return <IU.Wrapper>
    <Loading show={pushing} />
    <IU.Label>
      <Icon 
        size={ '24px' }
        path={ mdiUpload }
      />
      { props.label }
      <IU.Input 
        type="file"
        onChange={ handleChange }
      />
    </IU.Label>
  </IU.Wrapper>
}

export default ImageUpload