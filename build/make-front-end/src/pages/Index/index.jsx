import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography,Row,Col, Button } from 'antd';
import {createFromIconfontCN, ProfileOutlined, PlayCircleOutlined, RightCircleFilled} from '@ant-design/icons';
import {config} from "../../../config/custom_config.js";
const {Text,Title}  = Typography;
const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2756813_9ml228rpprq.js",
});
const RunOnLocal = config.RunOnLocal;
let basicHref="";
if(!RunOnLocal){
  basicHref="";
}


export default () => {
  const [colorOne,setColorOne] = React.useState("#737373");
  const [colorTwo,setColorTwo] = React.useState("#737373");
  const [colorThree,setColorThree] = React.useState("#737373");
  return (
    <PageContainer>
      <Title align="middle" >Asoul二创切片的有力助手，免费且开源</Title>
      <Row><Col xs={8} md={16}></Col><Col><Title level={3} type="secondary">--把字刻在石头上</Title></Col></Row>
      <Row 
        style={{
          "height":"300px",
          "marginTop":"40px"
        }}
        gutter={[16,32]}
      >
        <Col  xs={24} md={12} align="middle">
          <Button
            onMouseEnter={(e)=>{setColorOne("#D9D9D9")}}
            onMouseLeave={(e)=>{setColorOne("#737373")}}
            href={basicHref+"#/./list"}
            style={{
              "borderRadius":"20px",
              "width":"300px",
              "height":"300px",
              "backgroundColor":"#1F1F1F"
            }}
            
          >
            <Row style={{"marginTop":"50px"}}>
              <Col span={24} align="middle">
                <IconFont 
                  type="icon-table"
                   
                  style={{
                    fontSize:"200px",
                    color:colorOne, 
                  }}/>
              </Col>
            </Row>
            <Row><Col align="middle" span={24}>进入视频库</Col></Row>
          </Button>
        </Col>
        <Col xs={24} md={12} align="middle">
          <Button
            onMouseEnter={(e)=>{setColorTwo("#D9D9D9")}}
            onMouseLeave={(e)=>{setColorTwo("#737373")}}
            href={basicHref+"#/./subtitle"}
            style={{
              "borderRadius":"20px",
              "width":"300px",
              "height":"300px",
              "backgroundColor":"#1F1F1F"
            }}
            
            
          >
            <Row style={{"marginTop":"50px"}}>
              <Col span={24} align="middle">
                <ProfileOutlined 
                  style={{
                    fontSize:"200px",
                    color:colorTwo, 
                  }}/>
              </Col>
            </Row>
            <Row><Col align="middle" span={24}>进入字幕库</Col></Row>
          </Button>
        </Col>
        { <Col xs={24} md={12} align="middle">
          <Button
            onMouseEnter={(e)=>{setColorTwo("#D9D9D9")}}
            onMouseLeave={(e)=>{setColorTwo("#737373")}}
            href={"https://rd.asdb.live"}
            style={{
              "borderRadius":"20px",
              "width":"300px",
              "height":"300px",
              "backgroundColor":"#1F1F1F"
            }}
            
            
          >
            <Row style={{"marginTop":"50px"}}>
              <Col span={24} align="middle">
                <ProfileOutlined 
                  style={{
                    fontSize:"200px",
                    color:colorTwo, 
                  }}/>
              </Col>
            </Row>
            <Row><Col align="middle" span={24}>旧版分段下载</Col></Row>
          </Button>
        </Col> }

      </Row>
      <Row 
        style={{
          "height":"300px",
          "marginTop":"40px"
        }}
        gutter={[16,32]}
      >
      <Col xs={24} md={12} align="middle">
          <Button
            onMouseEnter={(e)=>{setColorThree("#D9D9D9")}}
            onMouseLeave={(e)=>{setColorThree("#737373")}}
            href={basicHref+"#/./range"}
            style={{
              "borderRadius":"20px",
              "width":"300px",
              "height":"300px",
              "backgroundColor":"#1F1F1F"
            }}
          >
            <Row style={{"marginTop":"50px"}}>
              <Col span={24} align="middle">
                <PlayCircleOutlined 
                  style={{
                    fontSize:"200px",
                    color:colorThree, 
                  }}/>
              </Col>
            </Row>
            <Row><Col align="middle" span={24}>视频分段下载</Col></Row>
          </Button>
        </Col>
        </Row>
    </PageContainer>
  );
};
