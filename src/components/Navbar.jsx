import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.png'

const Container=styled.div`
position: absolute;
height: 120px;
left: 0px;
right: 0px;
top: 0px;
background: rgba(255, 255, 255, 0.96);
`
const Wrapper=styled.div`
position: absolute;
width: 1120px;
height: 50px;
left: calc(50% - 1120px/2);
top: calc(50% - 50px/2);
display:flex;
justify-content: space-between;
`
const Left=styled.div`
position: absolute;
width: 97px;
height: 32px;
`
const Center=styled.div`
position: absolute;
width: 323.06px;
height: 32px;
left: 398.47px;
top: calc(50% - 32px/2);
display:flex;
justify-content: space-between;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 24px;
`
const Right=styled.div`
box-sizing: border-box;
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 9px 17.6719px 11px 18px;
position: absolute;
width: 108.67px;
height: 44px;
right: 0px;
top: calc(50% - 44px/2);
background: #1355FF;
border: 2px solid #1355FF;
`
const Overview=styled.div`
position: absolute;
width: 63px;
height: 24px;
left: 24px;
top: calc(50% - 24px/2 - 1px);
display: flex;
align-items: center;
letter-spacing: -0.14px;
color: #37456C;
`
const Pages=styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 3px 28.8281px 5px 12px;
isolation: isolate;
position: absolute;
width: 81.83px;
left: calc(50% - 81.83px/2 + 1.7px);
top: 0px;
bottom: 0px;
`
const Template=styled.div`
position: absolute;
width: 62px;
height: 24px;
left: 238.14px;
top: calc(50% - 24px/2 - 1px);
display: flex;
align-items: center;
letter-spacing: -0.14px;
color: #37456C;
`
const Button=styled.div`
width: 73px;
height: 24px;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 24px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.28px;
color: #FFFFFF;
flex: none;
order: 0;
flex-grow: 0;
`
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left><img src={logo}/></Left>
        <Center>
            <Overview>Overview</Overview>
            <Pages>Pages</Pages>
            <Template>Template</Template>
        </Center>
        <Right><Button>Contact Us</Button></Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
