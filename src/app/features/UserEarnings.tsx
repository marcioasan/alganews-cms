import { User, UserService } from "marcioasan-sdk";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import styled from "styled-components";
import ValueDescriptor from "../components/ValueDescriptor/ValueDescriptor";

export default function UserEarnings() {

  //8.27. Ganhos do usuário - 4'
   const [user, setUser] = useState<User.Datailed>()

  //8.32. Aplicando error boundaries 6'17"
  const [error, setError] = useState<Error>()

   useEffect(() => {
    UserService
      .getDetailedUser(7)
      .then(setUser)
      .catch(error => setError(new Error(error.message)))
   }, [])

   if(error)
   throw error

   //8.27. Ganhos do usuário - 5'30"
   if(!user)
    return <UserEarningsWrapper style={{ height:123 }}>
        <Skeleton width={150} height={40}/>
        <Skeleton width={150} height={40}/>
        <Skeleton width={150} height={40}/>
        <Skeleton width={150} height={40}/>
      </UserEarningsWrapper>

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
