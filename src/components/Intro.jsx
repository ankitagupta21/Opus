import React from 'react'
import styled from 'styled-components'
import l from '../images/l.png'
import arrow from '../images/arrow.png'
import image from '../images/image.png'
import quote from '../images/quote.png'
import wetransfer from '../images/wetransfer.png'
import stamps from '../images/stamps.png'
import manter from '../images/manter.png'
import sugarcane from '../images/sugarcane.png'
import scroll from '../images/scroll.png'
import vector from '../images/vector.png'

const Container=styled.div`
display:flex;
flex-direction:column;
position: absolute;
width: 1512px;
height: 1167.5px;
top: 120px;
gap:80px;
`
const Top=styled.div`
width: 1512px;
height: 795.5px;
background: #061237;
z-index:-3;
`

const Bottom=styled.div`
display:flex;
flex-direction:column;
align-items: center;
text-align: center;
`
const Main=styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
gap: 40px;
position: absolute;
width: 980px;
height: 587.5px;
left: 180px;
top: 144px;
`
const Left=styled.div`
width: 470px;
height: 587.5px;
flex: none;
order: 0;
flex-grow: 0;
z-index:1`

const Head=styled.div`
position: absolute;
width: 470px;
height: 209px;
top: 0px;
`
const HeadText=styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 64px;
line-height: 68px;
display: flex;
align-items: center;
letter-spacing: -1px;
color: #FFFFFF;
`
const HeadImg=styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;

position: absolute;
width: 54px;
height: 73px;
left: 300px;`

const Disc=styled.div`
position: absolute;
width: 420.98px;
height: 108px;
left: 0px;
top: 224px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 36px;
display: flex;
align-items: center;
letter-spacing: -0.36px;
color: #FFFFFF;
`
const Explore=styled.div`
position: absolute;
width: 470px;
height: 52px;
left: 0px;
top: 373px;`

const Button=styled.button`
position: absolute;
width: 155.08px;
height: 52px;
left: 0px;
background: #1355FF;
`
const ExploreText1=styled.p`
position: absolute;
width: 74px;
height: 24px;
left: calc(50% - 74px/2 - 23.54px);
top: calc(50% - 24px/2 - 1px);
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
`
const ExploreText2=styled.p`
position: absolute;
width: 91px;
height: 24px;
left: 187.08px;
top: calc(50% - 24px/2 - 1px);
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
display: flex;
align-items: center;
letter-spacing: -0.28px;
color: #FFFFFF;
`

const ExploreImg=styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
position: absolute;
width: 24px;
height: 24px;
left: calc(50% - 24px/2 + 51.54px);
top: calc(50% - 24px/2);
`

const Right=styled.div`
width: 470px;
height: 587.5px;
display: flex;
flex-direction: column;
align-items: flex-start;
`

const RightDiv1=styled.div`
position: absolute;
width: 48px;
height: 48px;
right: -48px;
top: -48px;
background: #0133B7;`

const RightDiv2=styled.div`
position: absolute;
left: 75%;
top: 60%;
bottom: 0px;
z-index:1;
background: #FFFFFF;
padding:10px 30px;
`

const RightImg=styled.div`
position: absolute;
width: 470px;
height: 587.5px;
right: -8px;
background: url(.png);
z-index:0;
`
const CEOText=styled.div`
width: 230px;
height: 128px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 200%;
display: flex;
align-items: center;
letter-spacing: -0.16px;
`
const CEODiv=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 9px;
isolation: isolate;
width: 240px;
height: 65px;
z-index:2;
`
const Quote=styled.div`display: flex;
flex-direction: row;
align-items: flex-start;
position: absolute;
left: 200px;
top: 60%;
bottom: 23px;

`
const Name=styled.div`
width: 143px;
height: 32px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 32px;
display: flex;
align-items: center;
letter-spacing: -0.48px;
color: #333333;
;`
const Sub=styled.div`
width: 117px;
height: 24px;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
display: flex;
align-items: center;
letter-spacing: -0.28px;
text-transform: uppercase;
color: #67718E;`

const GreyDiv=styled.div`
position:absolute;
left:260px;
width: 392px;
height: 65px;
background: #F7F9FC;
display:flex;
flex-direction:row;
align-items:center;
gap:12px;
color:#B6BCCE;
padding-left:70px;
`
const WhiteDiv=styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px 196px;
position: absolute;
width:39.1%;
height: 64px;
background: #FFFFFF;
z-index:-1;`

const BlueDiv=styled.div`position: absolute;
left: 982.81px;
right: 0px;
top: 0px;
bottom: 159.11px;
background: #1355FF;
width:529.19px;
height:636.39px;
z-index:-2;`

const Vector=styled.div`
position: absolute;
width: 273px;
height: 228px;
left: 123.9px;
top: calc(50% - 228px/2);
`

const Text=styled.p`
position: absolute;
width: 665.08px;
height: 40px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 40px;
color: #061237;
`
const Company=styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
margin:50px;
gap: 32px;
position: absolute;
width: 1120px;
height: 138px;
`
const BottomImg=styled.div`
width: 256px;
height: 138px;
flex: none;
order: 0;
flex-grow: 0;`

const Intro = () => {
  return (
    <Container>
      <Top>
        <Main>
            <Left>
                <Head>
                    <HeadText>Built for</HeadText>
                    <HeadText>enterprise</HeadText><HeadImg><img src={l}></img></HeadImg>
                    <HeadText>businesses.</HeadText>
                </Head>
                <Disc>Opus includes everything you need to build a beautiful website for your business. Built to perform and look good doing so.</Disc>
                <Explore><Button><ExploreText1>Learn more</ExploreText1><ExploreImg><img src={arrow}></img></ExploreImg></Button><ExploreText2>Explore Pages</ExploreText2></Explore>
            </Left>
            <Right>
                <RightDiv1></RightDiv1>
                <RightDiv2>
                    <CEOText>I felt like I couldn’t grow until I moved to Opus. Now I am encouraged to sell more with them.</CEOText>
                    <CEODiv>
                        <Name>Frank Dublin</Name>
                        <Sub>CEO @stamps</Sub>
                        <Quote><img src={quote}/></Quote>
                    </CEODiv>
                </RightDiv2>
                <RightImg><img src={image}/></RightImg>
            </Right>
        </Main>
        <BlueDiv></BlueDiv>
        <BlueDiv style={{zIndex:"1",left:"123px",top:"9px",height:"55px",width:"55px"}}></BlueDiv>
        <BlueDiv style={{zIndex:"1",left:"180px",top:"65px",height:"20px",width:"20px"}}></BlueDiv>
        <WhiteDiv></WhiteDiv>
        <BlueDiv style={{left:"610px",top:"731px",height:"64px",width:"510px",zIndex:"1"}}></BlueDiv>
        <WhiteDiv style={{left:"0px",top:"731px",height:"65px",width:"510px"}}><GreyDiv><img src={scroll}></img><p>SCROLL FOR MORE</p></GreyDiv></WhiteDiv>
        <WhiteDiv style={{left:"1118px",top:"600px",height:"224px",width:"0px"}}></WhiteDiv>
        <Vector><img src={vector}/></Vector>
      </Top>
      <Bottom>
        <Text>Trusted and loved by the world’s best teams</Text>
        <Company>
            <BottomImg><img src={wetransfer} /></BottomImg>
            <BottomImg><img src={stamps} /></BottomImg>
            <BottomImg><img src={manter} /></BottomImg>
            <BottomImg><img src={sugarcane} /></BottomImg>
        </Company>
      </Bottom>
    </Container>
  )
}

export default Intro
