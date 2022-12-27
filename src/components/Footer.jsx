import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.png'

const Container=styled.div`
position: absolute;
width: 1120px;
height: 689px;
left: calc(50% - 1120px/2);
top: 7700px;
`
const Content=styled.div`
display: flex;
flex-direction: row;
align-items: flex-end;
padding: 0px;
gap: 10px;
position: absolute;
width: 1120px;
height: 513px;
left: 0px;
top:300px;
`
const Col=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px 89.6562px 209px 0px;
gap: 16px;
width: 178.66px;
height: 513px;`

const Footer = () => {
  return (
    <Container>
      <img src={logo}/>
      <Content>
        <Col>
          <p style={{color:"#B6BCCE",fontWeight:"700",fontSize:"17px"}}>OVERVIEW</p>
          <br></br>
          <p>Overview</p>
          <p>Landings</p><p>Company</p>
          <p>Pricing</p>
          <p>CMS Pages</p>
          <p>Accounts</p>
          <p>Buy for figma</p>
        </Col>
        <Col>
          <p style={{color:"#B6BCCE",fontWeight:"700",fontSize:"17px"}}>PAGES</p>
          <br></br>
          <p>Landing 1</p><p>Landing 2</p><p>Landing 3</p>
          <p>Comapany 1</p><p>Comapany 2</p><p>Comapany 3</p>
          <p>Blog 1</p><p>Blog 2</p><p>Blog 3</p>
          <p>Contact 1</p><p>Contact 2</p><p>Contact 3</p>
        </Col>
        <Col>
          <p style={{color:"#B6BCCE",fontWeight:"700",fontSize:"17px"}}>PAGES</p>
          <br></br>
          <p>Case Studies</p>
          <p>Careers</p>
          <p>Pricing 1</p><p>Pricing 2</p><p>Pricing 3</p>
          <p>Login</p><p>Register</p><p>Forgot Password</p>
          <p>Blog Post</p><p>Team Member</p><p>Case Study</p>
          <p>Job Post</p>
        </Col>
      </Content>
    </Container>
  )
}

export default Footer
