import { Header } from './components/Header'
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import {GlobalStyle} from './styles/global'
import { Container, Title, Column, TitleLogin, SubtitleLogin, AvisoText, Row, Wrapper, JaTenhoConta, FazerLogin } from './styles';
import { Button } from './components/Button'
import { Input } from './components/Input'
function App() {
  return (
    <>
      <GlobalStyle/>
      <Header/>
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                  <TitleLogin>Comece agora grátis</TitleLogin>
                  <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                    <form>
                      <Input type="text" placeholder="Nome Completo" leftIcon={<MdPerson />} name="password" />
                      <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email" />
                      <Input type="password" placeholder="Senha" leftIcon={<MdLock />} name="password" />
                      <Button title="Criar minha conta" variant="secondary" type="submit"/>
                    </form>
                  <Row>
                      <AvisoText>Ao clicar em "criar conta gratis", declaro que aceito as Politicas de Privacidade e os Termos de Uso da DIO.</AvisoText>
                      <JaTenhoConta> Ja tenho conta. 
                        <FazerLogin>Fazer Login</FazerLogin>
                      </JaTenhoConta>
                  </Row>
                  
                </Wrapper>
            </Column>
        </Container>
    </>
  );
}

export default App;
