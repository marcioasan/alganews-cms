import { mdiDelete, mdiUpload } from '@mdi/js'
import Icon from '@mdi/react'
import { ChangeEvent, useState } from 'react'
import FileService from '../../../sdk/services/File.service'
import Button from '../Button/Button'
import *  as IU from './ImageUpload.styles'

export interface ImageUploadProps {
  label: string
  onImageUpload: (imageUrl: string) => any
}

function ImageUpload (props: ImageUploadProps) {

  const [filePreview, setFilePreview] = useState<string | null>(null)

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files![0]

    if(file){
      const reader = new FileReader()
      reader.addEventListener('load', async e => {
        setFilePreview(String(e.target?.result))
        
        //8.21. Abstraindo a lógica do upload - 4'
        //8.21. Abstraindo a lógica do upload - 12'
        const imageUrl = await FileService.upload(file)
        props.onImageUpload(imageUrl)
      })
      reader.readAsDataURL(file)
    }
  }

  if(filePreview)
    return <IU.ImagePreviewWrapper>
      <IU.ImagePreview preview={ filePreview }>
        <Button 
          variant={'primary'} 
          /* label={<div className="imageUploadButton">Remover imagem <Icon size={ '24px' } path={ mdiDelete } /></div>} */
          label={<IU.ContentLabel>Remover imagem <Icon size={ '24px' } path={ mdiDelete } /></IU.ContentLabel>}
          onClick={() => setFilePreview(null)}
          />
      </IU.ImagePreview>
    </IU.ImagePreviewWrapper>

  return <IU.Wrapper>
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