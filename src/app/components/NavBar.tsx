import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function NavBar() {

  return <>
    <List>
      <Item><NavLink exact to="/">Home</NavLink></Item>
      <Item><NavLink exact to="/contato">Contato</NavLink></Item>
      <Item><NavLink exact to="/usuario/1">Usuário</NavLink></Item>
      <Item><NavLink exact to="/calc/4/1">Soma</NavLink></Item>
    </List>
  </>
}

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style: none;
`
const Item = styled.li`
   text-transform: lowercase;
   font-size: 18px;

   a {
     text-decoration: none;
     color: #274060;

     &.active {
       color: #09f
     }
   }
`

//OBS: Todo esse código abaixo é substituído pelo componente Link
// import { MouseEvent } from "react";
// import { useHistory } from "react-router-dom";

// export default function NavBar() {

//   const history = useHistory();

//   function handleAnchorClick (e: MouseEvent<HTMLAnchorElement>){
//     e.preventDefault()
//     const newRoute = e.currentTarget.getAttribute('href')
    
//     //se a rota existe, faz o push, pois pode ser que o getAttribute acima receba nulo
//     if(newRoute)
//       history.push(newRoute)
//   }

//   return <nav>
//     <ul>
//       <li><a onClick={ handleAnchorClick } href="/">Home</a></li>
//       <li><a onClick={ handleAnchorClick } href="/contato">Contato</a></li>
//       <li><a onClick={ handleAnchorClick } href="/usuario/1">Usuário</a></li>
//       <li><a onClick={ handleAnchorClick } href="/calc/4/1">Soma</a></li>
//     </ul>
//   </nav>
// }