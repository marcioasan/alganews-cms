import { useEffect } from "react";
import styled from "styled-components";
import PostService from "../../sdk/services/Post.service";
import Profile from "../components/Profile";

export default function EditorsList() {

  useEffect(() => {
    const post = PostService.getAllPosts()
    console.log('===> ', post)
  }, [])

  useEffect(() => {
    const posts = PostService.getExistingPost(1)
    console.log('1 post ===> ', posts)
  }, [])

  return <EditorsListWrapper>
    <Profile editorId={1} name="Márcio Antonio dos Santos" description="Dev há mais de 10 anos" />
    <Profile editorId={2}  name="Tospericajerja" description="Dev há 3 anos" />
    <Profile editorId={3}  name="Jacinto Leite Aquino Rego" description="Dev há mais de 30 anos" />
    <Profile editorId={4}  name="Krahenbul Losk Vron" description="Dev há 5 anos" />
    <Profile editorId={5}  name="Javiolandia da Silva" description="Dev há 8 anos" />
  </EditorsListWrapper>
}

const EditorsListWrapper = styled.div`
  display: grid; 
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`
