import { getEditorDescription, User, UserService } from "marcioasan-sdk";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import styled from "styled-components";

import Profile from "../components/Profile";

export default function EditorsList() {

  const[editors, setEditors] = useState<User.EditorSummary[]>([])

  useEffect(() => {
    UserService
      .getAllEditors()
      .then(setEditors)
  }, [])

  if(!editors.length)
    return <EditorsListWrapper>
      <Skeleton height={82}/>
      <Skeleton height={82}/>
      <Skeleton height={82}/>
    </EditorsListWrapper>

  return <EditorsListWrapper>
    {
      editors.map(editor => {
        return <Profile
          key={editor.id} //8.31. Resolvendo pequenos erros de depreciação - 2'15"
          editorId={ editor.id }
          name={ editor.name }
          description={ getEditorDescription(new Date(editor.createdAt)) }
          avatarUrl={ editor.avatarUrls.small }
        />
      })
    }
  </EditorsListWrapper>
}

const EditorsListWrapper = styled.div`
  display: grid; 
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`
