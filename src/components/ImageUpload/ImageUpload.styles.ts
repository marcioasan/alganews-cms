import styled from 'styled-components'
import { Wrapper as Button } from '../Button/Button.styles'

export const Wrapper = styled.div`

`
export const ImagePreview = styled.div<{ preview: string }>`
  height: 100%;
  background-image: url(${p => p.preview});
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ImagePreviewWrapper = styled.div`
  background-color: #274060;
  height: 240px;

  .imageUploadButton {
    display: flex;
    align-self: center;
    justify-content: center;
  }

  //4.46. Componente Image Upload - 15'40"
  ${Button} {
    display: none;
  }

    &:hover {
      ${ImagePreview} {
        opacity: 0.7;
      }
      ${Button} {
        display: block;
        background-color: #FFFFFF;
        color: #274060;
        font-size: 18px;
        border: none;
        width: 203px;
        height: 56;
    } 
  }

`

export const Input = styled.input`
  display: none;
`

export const Label = styled.label`
  background-color: #09f;
  color: #fff;
  padding: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
`

export const ContentLabel = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
`