import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from "reactstrap";
import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import customizationImg from '../assets/images/customization.png';

const ServicesData = [
    {
        imgUrl: weatherImg,
        title: "Calculate weather",
        desc: "lorem yuiuiyug ikbjhv tftftf u yg  o yfyfguy  ygygihiuib"
    },
    {
        imgUrl: guideImg,
        title: "best tour guide",
        desc: "lorem yuiuiyug ikbjhv tftftf u yg  o yfyfguy  ygygihiuib"
    },
    {
        imgUrl: customizationImg,
        title: "custom",
        desc: "lorem yuiuiyug ikbjhv tftftf u yg  o yfyfguy  ygygihiuib"
    }
]

const ServiceList = () => {
  return<>
  {
    ServicesData.map((item,index)=> <Col lg='3' key={index}>
        <ServiceCard item={item}/>
    </Col>)
  }
  </>
}

export default ServiceList
