import React from 'react'
import styled from 'styled-components'
import vector1 from '../images/vector1.png'
import vector2 from '../images/vector2.png'
import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import project from '../images/project.png'
import marketing from '../images/marketing.png'
import analytics from '../images/analytics.png'
import images from '../images/images.png'
import section from '../images/section.png'
import blueTick from '../images/blueTick.png'
import FeaturesImage from '../images/FeaturesImage.png'
import knowImage from '../images/knowImage.png'
import stampImage from '../images/stampImage.png'
import stamps from '../images/stamps.png'
import previousSlide from '../images/previousSlide.png'
import nextSlide from '../images/nextSlide.png'
import R1 from '../images/R1.png'
import R2 from '../images/R2.png'
import R3 from '../images/R3.png'

const Container=styled.div`
display:flex;
flex-direction:column;
position: absolute;
align-items:center;
width: 1512px;
height: 6723px;
top: 1290px;`

const Data=styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
margin:50px;
gap: 40px;
`
const DataBlock=styled.div`
width: 256px;
height: 160px;
display: flex;
flex-direction:column;
gap:10px;
align-items: center;
text-align: center;
letter-spacing: -1.2px;`

const Num=styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 37px;
line-height: 48px;
color: #061237;
`
const Head=styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 32px;
letter-spacing: -0.16px;
color: #061237;
`
const Disc=styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 32px;
letter-spacing: -0.16px;
color: #67718E;
`
const VideoDiv=styled.div`
position: absolute;
width: 992px;
height: 908px;
top: 300px;
`

const VideoTitle=styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
isolation: isolate;
width: 992px;
height: 64px;
left: 0px;
top: 0px;`

const GreyDiv=styled.div`
position: absolute;
width: 64px;
height: 64px;
left: 0px;
top: 0px;
background: #F7F9FC;`

const Title=styled.p`
position:absolute;
top:20px;
left:20px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 24px;
letter-spacing: 1.5px;
color: #67718E;
z-index: 1;
`

const VideoHead=styled.div`
position: absolute;
width: 721px;
height: 56px;
left: 0px;
top: 95px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 56px;
letter-spacing: -1.44px;
color: #061237;`

const Video=styled.div`
position: absolute;
width: 992px;
height: 550px;
left: 0px;
top: 208px;
`

const Div1=styled.div`
position: absolute;
width: 92px;
height: 92px;
left: -92px;
bottom: -92px;
background: #F2F3F8;`

const Vector1=styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
position: absolute;
left: -148.8px;
right: 822.8px;
top: 404.5px;
z-index:-1;
`
const VideoDesc=styled.div`
position: absolute;
width: 525.87px;
height: 108px;
right: 18.13px;
top: 789px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 200%;
display: flex;
align-items: center;
letter-spacing: -0.18px;
color: #37456C;
`
const Explore=styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 42px;
position: absolute;
width: 1120px;
height: 600px;
left: 196px;
top: 85em;`

const Left=styled.div`
position:absolute
width: 588px;
height: 600px;
`
const Div2=styled.div`position: absolute;
width: 64px;
height: 64px;
left: 0px;
top: 0px;
background: #F7F9FC;`

const ExHead=styled.div`
position: absolute;
width: 400px;
height: 115px;
left: 0px;
top: 94px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 56px;
display: flex;
align-items: center;
letter-spacing: -1.44px;
color: #061237;
`
const ExDesc=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 34px;
position: absolute;
width: 700px;
height: 210px;
left: 64px;
top: 216px;`

const ExText=styled.p`
width: 498.33px;
height: 128px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 200%;
display: flex;
align-items: center;
letter-spacing: -0.16px;
color: #37456C;`

const Button=styled.button`
position:absolute;
display: flex;
flex-direction: row;
align-items: flex-start;
text-align: center;
font-family: 'Inter';
font-weight: 500;
font-size: 14px;
line-height: 24px;
padding: 11px 30px 13px 45px;
width: 157.08px;
height: 48px;
color: #FFFFFF;
background: #1355FF;
border:0px`

const Right=styled.div`
width: 588px;
height: 600px;
`
const Line1=styled.div`
position:absolute;
width:350px;
height: 184px;
right: 40px;
top: 0px;
left:650px;
background: #FFFFFF;
bottom:600px;
`
const Line2=styled.div`
position:absolute;
width:350px;
height: 184px;
right: 40px;
top: 235px;
left:650px;
background: #FFFFFF;
`
const Icon=styled.div`
width: 40px;
height: 0px;
`

const Point=styled.p`
position:absolute;
left:50px
width: 240.51px;
height: 62px;
top: 50px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 133%;
letter-spacing: -0.28px;`

const Vector2=styled.div`
position: absolute;
width: 490px;
height: 594.85px;
z-index:-1;
left:600px;
`
const Div3=styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
position: absolute;
width: 100%;
height: 818px;
left: 0px;
top: 2040px;
background: #061237;`

const Ways=styled.div`
position:absolute;
left:13em;
top:5em;
right:13em;
bottom:5em;
width: 1120px;
height: 658px;
`
const HeadDiv=styled.div`
position: absolute;
width: 1120px;
height: 68px;
left: 0px;
top: 0px;`

const HeadText=styled.div`
position: absolute;
width: 471px;
height: 56px;
left: 92px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 56px;
display: flex;
align-items: center;
letter-spacing: -1.44px;
color: #FFFFFF;`

const Cards=styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
gap: 32px;
position: absolute;
width: 1120px;
height: 550px;
left: 0px;
top: 108px;`

const Card1=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 24px;
gap: 32px;
width: 352px;
height: 550px;`

const CardDiv1=styled.div`
position: absolute;
width: 64px;
height: 64px;
left:265px;
top: 24.2px;
background: #1355FF;`

const CardDiv2=styled.div`
position: absolute;
width: 32px;
height: 32px;
left:330px;
top: -8px;
background: #18264E;`

const Img=styled.div`
height: 320px;
left: 0px;
right: 0px;
top: calc(50% - 320px/2);`

const Way=styled.p`
width: 240px;
height: 32px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 32px;
display: flex;
align-items: center;
letter-spacing: -0.28px;
color: #FFFFFF;`

const WayDesc=styled.div`
width: 298.9px;
height: 96px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 32px;
display: flex;
align-items: center;
letter-spacing: -0.16px;
color: #B6BCCE;
`

const Components=styled.div`
padding: 0px;
gap: 100px;
position: absolute;
width: 1120px;
height: 376px;
left: 196px;
top: 2960px;`

const LeftComp=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px 104px 0px 0px;
gap: 60px;
width: 544px;
height: 376px;
position:absolute`

const Comp=styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 32px;
width: 440px;
height: 158px;`

const IconDiv=styled.div`
width: 64px;
height: 64px;
background: #1355FF;
`
const CompDesc=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 11px;
width: 344px;
height: 158px;
`
const CompHead=styled.p`
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 32px;
display: flex;
flex-direction: column;
letter-spacing: -0.28px;
color: #061237;
`
const CompCon=styled.p`
width: 330.89px;
height: 72px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
display: flex;
align-items: center;
letter-spacing: -0.14px;
color: #061237;
`
const List=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 16px;

position: absolute;
width: 552px;
height: 128px;
left: 0px;
top: 340px;`

const Features=styled.div`
position: absolute;
width: 1120px;
height: 614px;
left: 196px;
top: 3470px;
`
const Feature=styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px 315px 0px 0px;
gap: 20px;
width: 552px;
height: 32px;
`
const BlueDiv=styled.div`
width: 32px;
height: 32px;
background: #F5F9FF;
border-radius: 32px;
`
const Fea=styled.p`
width: 185px;
height: 32px;
font-weight: 500;
font-size: 16px;
line-height: 32px;
display: flex;
align-items: center;
letter-spacing: -0.28px;
color: #061237;
`
const Knowledge=styled.div`
display:flex;
flex-direction:row;
position: absolute;
width: 1120px;
height: 540px;
left: 196px;
top: 4150px;
`
const KnowLeft=styled.div`
width: 576.52px;
height: 540px;
`
const KnowImage=styled.div`
position: absolute;
height: 412px;
left: 60px;
right: 0px;
top: calc(50% - 412px/2);
background: url(.png);`

const LeftDiv=styled.div`
position: absolute;
left: 0px;
right: 172.97px;
top: 0px;
bottom: 0px;
width:403.55px;
height:540px;
background: #F5FCFF;`

const KnowRight=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 500px;
height: 540px;
position:absolute;
left:570px;
`
const Stamps=styled.div`
position: absolute;
width: 1512px;
height: 645px;
left: 0px;
top: 4990px;`

const Carousel=styled.div`
display: flex;
flex-direction: column;
align-items: center;
position: absolute;
width: 330px;
height: 336px;
left:250px;
top:-90px;
gap:30px;
`
const CaHead=styled.p`
width: 325.84px;
height: 128px;
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 32px;
text-align: center;
letter-spacing: -0.48px;
color: #333333;`

const Resources=styled.div`
position: absolute;
width: 1120px;
height: 762px;
left: calc(50% - 1120px/2);
top: 5500px;
`

const Info = () => {
  return (
    <Container>
        <Data>
          <DataBlock>
            <Num>99.95%</Num>
            <Head>Accuracy rate</Head>
            <Disc>in fulfilling orders</Disc>
          </DataBlock>
          <DataBlock>
            <Num>5,000+</Num>
            <Head>Ecommerce businesses</Head>
            <Disc>partner with Opus</Disc>
          </DataBlock>
          <DataBlock>
            <Num>99.96%</Num>
            <Head>Of orders ship on time</Head>
            <Disc>within SLA</Disc>
          </DataBlock>
          <DataBlock>
            <Num><span style={{color:"#DADDE7"}}>#</span>1</Num>
            <Head>Best Fulfillment Technology</Head>
            <Disc>by AdWeek’s Retail Awards</Disc>
          </DataBlock>
        </Data>
        <VideoDiv>
          <VideoTitle>
            <GreyDiv></GreyDiv>
            <Title>VIDEO TITLE</Title>
          </VideoTitle>
          <VideoHead>Inform users with video sections</VideoHead>
          <Video>
            <video width="992px" height="550px" controls="controls" autoplay="true"/>
            <Div1></Div1>
            <Vector1><img src={vector1}/></Vector1>
          </Video>
          <VideoDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat. Praesent pulvinar arcu non lectus dapibus, a pulvinar mauris aliquam.</VideoDesc>
        </VideoDiv>
        <Explore>
          <Left>
            <Div2></Div2>
            <ExHead>Make your site better with Opus</ExHead>
            <ExDesc>
              <ExText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat. Praesent pulvinar arcu non lectus dapibus, a pulvinar mauris aliquam.</ExText>
              <Button style={{top:"150px"}}>Learn More</Button>
            </ExDesc>
          </Left>
          <Right>
            <Line1>
              <Icon><img src={icon1}/></Icon>
              <Point>Build or Customize a Website in Minutes
</Point>
            </Line1>
            <Line2>
              <Icon><img src={icon2}/></Icon>
              <Point>Our UI Kit was made for creativity.</Point>
            </Line2>
          </Right>
          <Vector2><img src={vector2}/></Vector2>
        </Explore>
        <Div3> 
          <Ways>
            <HeadDiv>
              <HeadText>Ways to work with us</HeadText>
              <Button style={{left:"860px"}}>Get Started</Button>
            </HeadDiv>
            <Cards>
              <Card1>
                <Img><img src={project}/></Img>
                <CardDiv1></CardDiv1>
                <CardDiv2></CardDiv2>
                <Way>Project Management</Way>
                <WayDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.</WayDesc>
              </Card1>
              <Card1>
                <Img><img src={analytics}/></Img>
                <CardDiv1 style={{background: "#B9ECFF",left:"390px",top:"300px"}}></CardDiv1>
                <Way>Advanced Analytics</Way>
                <WayDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.</WayDesc>
              </Card1>
              <Card1>
                <Img><img src={marketing}/></Img>
                <CardDiv1 style={{background: "#B9ECFF",left:"1032px",top:"50px"}}></CardDiv1>
                <CardDiv2 style={{background: "#1355FF",left:"1096px",top:"115px"}}></CardDiv2>
                <Way>Marketing & Dashboard</Way>
                <WayDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.</WayDesc>
              </Card1>
            </Cards>
          </Ways>
        </Div3>
        <Components>
          <LeftComp>
            <Comp>
              <IconDiv><img src={section} style={{width:"30px", height:"30px",margin:"18px"}}/></IconDiv>
              <CompDesc>
                <CompHead style={{width:"150px"}}><CompHead>Choose</CompHead> your sections</CompHead>
                <CompCon>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</CompCon>
              </CompDesc>
            </Comp>
            <Comp>
              <IconDiv><img src={images} style={{width:"30px", height:"30px",margin:"18px"}}/></IconDiv>
              <CompDesc>
                <CompHead style={{width:"180px"}}>Add the images and text you need</CompHead>
                <CompCon>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</CompCon>
              </CompDesc>
            </Comp>
          </LeftComp>
          <LeftComp style={{left:"550px", top:"-120px"}}>
          <ExHead style={{width:"500px"}}>Create pages using beautiful components.</ExHead>
            <ExDesc>
              <ExText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat. Praesent pulvinar arcu non lectus dapibus, a pulvinar mauris aliquam.
</ExText>
              <Button style={{background: "#F7F9FC", color:"#061237",top:"150px"}}>Learn More</Button>
            </ExDesc>
          </LeftComp>
        </Components>
        <Features>
          <VideoTitle>
            <GreyDiv></GreyDiv>
            <Title>FEATURES</Title>
          </VideoTitle>
          <ExHead style={{width:"500px", top:"140px"}}>You’re not just doing business. You’re doing life.</ExHead>
          <List>
            <Feature>
              <BlueDiv><img src={blueTick} style={{position:"absolute", left:"9px", top:"10px"}}/></BlueDiv>
              <Fea>Responsive Components</Fea>
            </Feature>
            <Feature>
              <BlueDiv><img src={blueTick} style={{position:"absolute", left:"9px", top:"60px"}}/></BlueDiv>
              <Fea>Over 50 Sections</Fea>
            </Feature>
            <Feature>
              <BlueDiv><img src={blueTick} style={{position:"absolute", left:"9px", top:"105px"}}/></BlueDiv>
              <Fea>Handcrafted Pages</Fea>
            </Feature>
          </List>
          <img src={FeaturesImage} style={{position:"relative", top:"-150px",left:"550px"}}/>
        </Features>
        <Knowledge>
          <CardDiv2 style={{background: "#B9ECFF", top:"-32px", left:"405px"}}></CardDiv2>
          <KnowLeft>
            <LeftDiv></LeftDiv>
            <CardDiv1 style={{background: "#B9ECFF", top:"475px", left:"508px"}}></CardDiv1>
            <KnowImage><img src={knowImage}/></KnowImage>
          </KnowLeft>
          <KnowRight>
            <VideoTitle style={{width:"5px"}}>
              <GreyDiv></GreyDiv>
              <Title>OUR KNOWLEDGE</Title>
            </VideoTitle>
            <ExHead>A UI Kit that's Modern & Elegant</ExHead>
            <ExDesc style={{width:"500px", left:"5px", top:"260px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat. Praesent pulvinar arcu non lectus dapibus, a pulvinar mauris aliquam.</ExDesc>
          </KnowRight>
        </Knowledge>
        <Stamps>
          <CardDiv1 style={{left:"600px",top:"-85px"}}></CardDiv1>
          <CardDiv2 style={{background:"#B9ECFF",left:"568px",top:"-22px"}}></CardDiv2>
          <Carousel>
          <img src={stamps} style={{position:"absollute", top:"50px",left:"1000px",width:"200px",height:"100px"}}/>
          <CaHead>The Opus UI Kit lets you showcase your work in style. It's helped take our business online</CaHead>
          <div style={{textAlign:"center"}}>
            <p style={{color:"#061237",fontWeight:"700"}}>ALEXA F.</p>
            <br></br>
            <p style={{color:"#67718E",fontSize:"12px"}}>DESIGNER <span style={{color:"#1355FF"}}>@STAMPS</span></p>
          </div>
          <div style={{display:"flex",flexDirection:"row",gap:"30px"}}>
          <img src={previousSlide}/>
          <img src={nextSlide}/>
          </div>
          </Carousel>
          <img src={stampImage} style={{position:"relative", top:"-150px",left:"800px"}}/>
        </Stamps>
        <Resources>
          <HeadDiv>
            <HeadText style={{color:"#061237"}}>Resources</HeadText>
            <Button style={{left:"860px"}}>Get Started</Button>
          </HeadDiv>
          <Cards style={{gap:"20px"}}>
              <Card1>
                <Img><img src={R1}/></Img>
                <Way style={{color:"#061237",width:"250px"}}>A high-converting, high-performing template</Way>
                <WayDesc style={{width:"240px"}}>Turpis senectus amet tortor in sodates odio tettus. Pretium id amet, euismod sceteriscue vetit.</WayDesc>
                <Button style={{background: "#F7F9FC", color:"#061237",top:"580px",}}>Read Article</Button>
              </Card1>
              <Card1>
                <Img><img src={R2}/></Img>
                <Way style={{color:"#061237",width:"250px"}}>With a clean, minimal and professional look</Way>
                <WayDesc style={{width:"240px"}}>Turpis senectus amet tortor in sodates odio tettus. Pretium id amet, euismod sceteriscue vetit.</WayDesc>
                <Button style={{background: "#F7F9FC", color:"#061237",top:"580px",}}>Read Article</Button>
              </Card1>
              <Card1>
                <Img><img src={R3}/></Img>
                <Way style={{color:"#061237",width:"250px"}}>Opus made our journey possible</Way>
                <WayDesc style={{width:"240px"}}>Turpis senectus amet tortor in sodates odio tettus. Pretium id amet, euismod sceteriscue vetit.</WayDesc>
                <Button style={{background: "#F7F9FC", color:"#061237",top:"580px",}}>Read Article</Button>
              </Card1>
            </Cards>
        </Resources>
    </Container>
  )
}

export default Info
