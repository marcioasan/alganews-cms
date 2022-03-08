import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'

//8.24. O primeiro contato com manipulação de datas
export default function getEditorDescription(editorCreationDate: Date) {
  const distance = formatDistance(editorCreationDate, new Date(), { locale: ptBR })
  return `Editor há ${distance}`
}