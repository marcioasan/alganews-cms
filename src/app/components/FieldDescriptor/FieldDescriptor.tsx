import * as FD from "./FieldDescriptor.styles"

export interface FieldDescriptorProps {
  label: string
  value: React.ReactNode
  
}

export default function FieldDescriptor({...props}: FieldDescriptorProps) {

  return <FD.Wrapper >
    
    <span className="Label">{ props.label }</span>
    <div>
      <span className="Valor">{ props.value }</span>
    </div>

  </FD.Wrapper>
}