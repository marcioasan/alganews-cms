import { useEffect, useState } from "react";
import styled from "styled-components";
import { User } from "../../sdk/@types";
import UserService from "../../sdk/services/User.service";
import ValueDescriptor from "../components/ValueDescriptor/ValueDescriptor";

export default function UserEarnings() {

  //8.27. Ganhos do usuário - 4'
   const [user, setUser] = useState<User.Datailed>()

   useEffect(() => {
    UserService
      .getDetailedUser(7)
      .then(setUser)
   }, [])

   //8.27. Ganhos do usuário - 5'30"
   if(!user)
    return null

  return <UserEarningsWrapper>
    <ValueDescriptor color="primary" description="Ganhos no mês" value={ user?.metrics.monthlyEarnings } isCurrency />
    <ValueDescriptor color="primary" description="Ganhos na semana" value={ user.metrics.weeklyEarnings } isCurrency />
    <ValueDescriptor color="default" description="Ganhos de sempre" value={ user.metrics.lifetimeEarnings } isCurrency />
    <ValueDescriptor color="default" description="Total de palavras" value={ user.metrics.lifetimeWords } />
  </UserEarningsWrapper>
}

const UserEarningsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`
