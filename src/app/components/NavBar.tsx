import { Link } from "react-router-dom";

export default function NavBar() {

  return <>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/contato">Contato</Link></li>
      <li><Link to="/usuario/1">Usuário</Link></li>
      <li><Link to="/calc/4/1">Soma</Link></li>
    </ul>
  </>
}

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