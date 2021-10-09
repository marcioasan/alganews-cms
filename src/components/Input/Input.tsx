import { InputHTMLAttributes } from 'react'
import * as I from './Input.styles'

//4.10. Criando a API do Input - 6'
export interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  label?: string 
}

export default function Input({ label, ...props }: InputProps) {
  return <I.Wrapper>
    {
      label &&
        <span className="Label">
          { label }:
        </span>
    }
    <input
      {...props} 
      type="text" 
    />
  </I.Wrapper>
}