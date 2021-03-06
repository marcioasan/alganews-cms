import React from 'react';
import ReactDOM from 'react-dom';
import './core/imports.css';
import reportWebVitals from './reportWebVitals';

import GlobalStyles from './core/globalStyles'
import App from './app'

//10.5. Configurando a store raiz
import { Provider } from 'react-redux'
import store from './core/store'

ReactDOM.render(
  <React.StrictMode>
    
    {/* //10.5. Configurando a store raiz */}
    <Provider store={store}> 
      <App />
    </Provider>
    
      <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//5.15. Code Splitting - código executado nessa aula e foi retirado porque foi só para explicação do Code Splitting
// import React, { Suspense } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import reportWebVitals from './reportWebVitals';
// import NavBar from './components/NavBar';
// const Home = React.lazy(() => import('./views/Home.view'));
// const Contact = React.lazy(() => import('./views/Contact.view'));
// const NotFound404 = React.lazy(() => import('./views/NotFound404.view'));
// const UserView = React.lazy(() => import('./views/User.view'));
// const CalcView = React.lazy(() => import('./views/Calc.view'));

// ReactDOM.render(
//   <React.StrictMode>
//     <div>      
//       <BrowserRouter>
//       <NavBar />
//       <Suspense fallback={<div>
//         carregando...
//       </div>}>
//         <Switch>
//           <Route path={'/'} exact component={Home}/>
//           <Route path={'/home'} exact component={Home}/>
//           <Route path={'/contato'} exact component={Contact} />
//           <Route path={'/usuario/:userId'} component={UserView} />
//           <Route path={'/calc/:a/:b'} component={CalcView} />
//           <Route component={NotFound404} />
//         </Switch>
//       </Suspense>
//       </BrowserRouter>
//     </div>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// reportWebVitals();
