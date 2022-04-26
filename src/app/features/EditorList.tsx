import { getEditorDescription, User, UserService } from "marcioasan-sdk";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import styled from "styled-components";
import useEditors from "../../core/hooks/useEditors";

import Profile from "../components/Profile";

export default function EditorsList() {

  //10.19. Migrando uma feature para o Redux - 11'20"
  const { editorsList, loading, fetchAllEditors } = useEditors()

  //10.19. Migrando uma feature para o Redux - removido nessa aula 11'40"
 //const[editors, setEditors] = useState<User.EditorSummary[]>([])

  useEffect(() => {
    fetchAllEditors()
    //UserService.getAllEditors().then(setEditors) //10.19. Migrando uma feature para o Redux - removido nessa aula 11'50"
  }, [fetchAllEditors])

  if(!editorsList.length)
    return <EditorsListWrapper>
      <Skeleton height={82}/>
      <Skeleton height={82}/>
      <Skeleton height={82}/>
    </EditorsListWrapper>

  return <EditorsListWrapper>
    {
      editorsList.map(editor => {
        return <Profile
          key={editor.id} //8.31. Resolvendo pequenos erros de depreciação - 2'15"
          editorId={ editor.id }
          name={ editor.name }
          description={ getEditorDescription(new Date(editor.createdAt)) }
          avatarUrl={ editor.avatarUrls.small }
        />
      })
    }
    {
      loading ? 'buscando mais informações' : null
    }
  </EditorsListWrapper>
}

const EditorsListWrapper = styled.div`
  display: grid; 
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`
