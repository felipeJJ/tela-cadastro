import React from 'react'

import logo from '../../assets/logo-dio.png'
import { Container, Wrapper, Row, MenuRight } from './styles'
import { Button } from '../Button'

const Header = () => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt="logo Dio" />
            </Row>
            <Row>
                <>
                    <MenuRight href="#">Home</MenuRight>
                    <Button title ="Entrar" />
                    <Button title ="Cadastrar" />
                </>
            </Row>
        </Container>
    </Wrapper>
  )
}
 export { Header } 