import confirm from '../../../core/utils/confirm'
import Logo from '../../components/Logo'
import NavBar from '../../components/NavBar'
import SessionController from '../../components/SessionController'
import * as DL from './Default.layout.styles'

interface DefaultLayoutProps {
  children: React.ReactNode
}

function DefaultLayout (props: DefaultLayoutProps) {
  return <DL.Wrapper>
    <DL.Header>
      <Logo />
    </DL.Header>
    <DL.Main>
       <DL.Navigation>
          <NavBar />
       </DL.Navigation>
       <DL.FeaturedContent>
          { props.children }
       </DL.FeaturedContent>
       <DL.Aside>
        <SessionController 
          name='Marcio Antonio'
          description='Dev há 10 anos'
          onLogout={() => {
            confirm({
                title: 'Você quer deslogar?',
                onConfirm: () => window.alert('Confirmou'),
                onCancel: () => window.alert('Cancelou'),
            })
          }}
        />
       </DL.Aside>
    </DL.Main>
  </DL.Wrapper>
}

export default DefaultLayout