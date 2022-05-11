import MyForm from './Form'
import {StyleSubTitle,StyleSubTitle2,StyleSpan,Banner,Img,StyleSubTitle3} from './StyleBody'

export default function Body() {
  return (
    <>
        <Banner>
            <StyleSubTitle2 as='h2'><StyleSpan>Everything</StyleSpan> in one click.</StyleSubTitle2>
            <Img src='/img/illustration.png' alt=''/>
        </Banner>
        <StyleSubTitle3 as='h3'>Find your <StyleSpan>plin</StyleSpan>!</StyleSubTitle3>
        <MyForm/>
    </>
  )
}
