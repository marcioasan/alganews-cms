import styled from "styled-components";
import Profile from "../components/Profile";

export default function EditorsList() {
  return <EditorsListWrapper>
    <Profile name="Márcio Antonio dos Santos" description="Dev há mais de 10 anos" />
    <Profile name="Tospericajerja" description="Dev há 3 anos" />
    <Profile name="Jacinto Leite Aquino Rego" description="Dev há mais de 30 anos" />
    <Profile name="Krahenbul Losk Vron" description="Dev há 5 anos" />
    <Profile name="Javiolandia da Silva" description="Dev há 8 anos" />
  </EditorsListWrapper>
}

const EditorsListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`
