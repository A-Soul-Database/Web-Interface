import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Typography,Avatar,Row,Col,Checkbox,Collapse,Table,Input, Button,Modal, ConfigProvider,message } from 'antd';
import { InfoCircleOutlined, UndoOutlined, ClearOutlined, SearchOutlined,CaretUpFilled,CaretDownFilled } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import {reverseArray,getJsonData,getData,postJsonData} from "../../../public/js/basic.js";
import {config} from "../../../config/custom_config.js";
import ProTable from '@ant-design/pro-table';
const {Title,Text} = Typography;

// const sourceUrl = config.sourceUrl;
const highlightColor = "yellow";

// function PurifyYear(a){return "20"+a;} // 文件目录是2022 , main.json 是22

function getSubtitles(bv){
  //TODO:加强鲁棒性
  let data = getJsonData(config.SubtitlesAPI+"?bv="+bv).data;
  console.log(data);
  for(let n=0;n < data.sources.length;n++){
    let source = data["sources"][n];
    console.log("try source:"+source);
    try{
      let subtitles = Array(data.url.length);
      for(let i=0;i<data.url.length;i++) subtitles[i] = [];
      for(let clip =0;clip < data.url.length;clip++){
        let partUrl = data.url[clip];
        let url = source + partUrl;
        
        let srt = "";
        try{
          srt = getData(url);
        }catch(error){
          console.error("getSubtitles fail, status:"+error.toString());
          throw(source);
        }
        let srtArr = srt.split("\n");
        for(let j=0;j<srtArr.length-2;j+=4){
          let subtitle = srtArr[j]+"|"+srtArr[j+1]+"|"+srtArr[j+2];
          subtitles[clip].push(subtitle);
        }
      }
      return subtitles;
    }catch(error){
      console.warn("source: "+source+" cannnot be used, try next source");
      continue;
    }
  }
  console.error("All sources cannot be used!");
  let subtitles = Array(data.url.length);
  for(let i=0;i<data.url.length;i++) subtitles[i] = [];
  return subtitles;
}

const columns = [
  {
    title: '日期',
    width: 80,
    dataIndex: 'date',
  },
  {
    title: '时间',
    width: 80,
    dataIndex: 'hour',
  },
  {
    title: 'BV号',
    width: 80,
    dataIndex: 'bv',
    render:(bv)=>{
      return (<a href={"https://www.bilibili.com/"+bv} target="_blank" onClick={(e)=>{e.stopPropagation()}}>{bv}</a>)
    }
  },
  {
    title: '标题',
    dataIndex: 'title',
    // width:200,
    render:(title)=>{
      return (<Row><Col md={12}>{title}</Col></Row>)
    }
  },
  
]

class ToolKits extends React.Component{
  constructor(props){
    super(props);
  }
  state = {
    input:"",
  }
  handleSearch = (e) =>{
    this.props.parent.handleSearch(this.state.input);
  }
  handleClear = (e) =>{
    this.setState({input:""});
    const initDatasrc = this.props.parent.props.initDatasrc;
    this.props.parent.setState({
      dataSource: initDatasrc,
      searchWords: "",
      currentID: 0
    })
  }

  handleReverse = (e) =>{
    this.props.parent.handleReverse();
  }
  render(){
    return (
      <Card
        onKeyDown={(e)=>{
          if(e.keyCode === 13){
            this.handleSearch(e);
          }
        }}
        actions={
          [
            <UndoOutlined 
              title="逆序"
              onClick ={this.handleReverse}
            ></UndoOutlined>,
            <ClearOutlined
              title="清除选择"
              onClick = {this.handleClear}
            ></ClearOutlined>,
            <SearchOutlined
              title="搜索"
              onClick = {this.handleSearch}
            ></SearchOutlined>
          ]
        }
        ><Row>
          <Col xs={24} md={24} align="middle">
            <Title level={2}>字幕库检索</Title>
          </Col>
        </Row>
        <Row style={{"height":"50px"}}>
        <Col xs={0} md={6}></Col>
        <Col xs={24} md={12} align="middle">
          <Input style={{"borderRadius":"50px"}}
          placeholder="单条字幕检索🔍" 
          onChange={(e)=>{this.setState({input:e.target.value})}}
          value={this.state.input}
        ></Input>
        </Col>
        <Col md={6} align="middle">
        </Col>
        </Row>
      </Card>
      
    );
  }
}

class SubtitlePage extends React.Component{
  constructor(props){
    super(props);
  }
  state={
    dataSource: this.props.initDatasrc,
    isModalVisible: false,
    displayBV:"",
    searchWords:"",
    currentID:0
  }
  componentDidUpdate(){
    const {reRender, parent, initDatasrc} = this.props;
    if(reRender){
      this.setState({dataSource:initDatasrc});
      parent.setState({reRender:false});
    }
  }
  handleCancel = ()=>{
    this.scrollTop();
    this.setState({isModalVisible:false,currentID:0});
  }
  handleSearch = (searchWords)=>{
    this.setState({searchWords:searchWords});
    fetch(`${config.queryAPI}`,{
      method : "POST",
      headers : {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "words":searchWords
      })
    }).then(
      (response)=>{
        response.json().then((data)=>{
          this.setState({dataSource:data});
          let len = data.length;
          message.info("共"+len.toString()+"条搜索结果已展示");
        });
      }
      ,(error)=>{
        console.error(error);
        message.error("字幕库搜索失败");
      }
      );
  }
  handleReverse(){
    let newDatasrc = reverseArray(this.state.dataSource);
    this.setState({dataSource:newDatasrc});
  }
  scrollTop = () => {
        let anchorElement = document.getElementById("Table-top");
        anchorElement.scrollIntoView({behavior:'auto'});
  }
  scrollNext = (className) =>{
    let anchorElements = document.getElementsByClassName(className);
    
    if(anchorElements.length === 0) return;
    const i = this.state.currentID;
    anchorElements[i].scrollIntoView({behavior:'smooth'});
    if(i >= anchorElements.length-1){
      this.setState({currentID:0})
    }else{
      this.setState({currentID:i+1});
    }
  }
  scrollPre = (className)=>{
    let anchorElements = document.getElementsByClassName(className);
    
    if(anchorElements.length == 0) return;
    const i = this.state.currentID;
    anchorElements[i].scrollIntoView({behavior:'smooth'});
    if(i <= 0){
      this.setState({currentID:anchorElements.length-1});
    }else{
      this.setState({currentID:i-1});
    }
  }
  render(){
    const {isModalVisible,displayBV,searchWords} = this.state;
    
    let subtitles = [];
    if(displayBV !== ""){
      subtitles = getSubtitles(displayBV);
    }
    return(
      <PageContainer>
        <ToolKits parent={this}/>
        <Row style={{"marginTop":"20px"}}>
          <Col xs={24} md={24}>
          <ProTable
            columns={this.props.initColumns}
            rowKey="key"
            dataSource={this.state.dataSource}
            search={false}
            onRow={(record)=>{
              return {
                onClick: (e)=>{
                  
                  this.setState({
                    isModalVisible:true,
                    displayBV: record["bv"]
                  });
                },
                style:{"cursor":"pointer"},
              }
            }}
          ></ProTable>
          </Col>
        </Row>
        
        <Modal id="modal"
          visible={isModalVisible} 
          maskClosable={true} 
          onCancel={this.handleCancel} 
          footer={null}
          
        >
          
          <Row><Col xs={24} md={24} align="middle"><Title>字幕表</Title></Col></Row>
          <Row><Col><a onClick={()=>this.scrollPre("active-highlight")} 
            
          ><CaretUpFilled/>上一条搜索结果</a></Col></Row>
          <Row><Col><a onClick={()=>this.scrollNext("active-highlight")}><CaretDownFilled/>下一条搜索结果</a></Col></Row>
          <Row>
            <Col xs={3} md={3}>序号</Col>
            <Col xs={10} md={10}>时间</Col>
            <Col xs={11} md={11}>字幕</Col>
          </Row>
          <Row style={{"borderBottom":"2px solid"}}><Text type="secondary">字幕搜索结果会以高亮展示，用按键上下移动吧💃💃💃</Text></Row>
          
          <Row>
          <Col span={24} style={{"height":"500px","overflowY":"scroll"}}>
          {subtitles.map((clipSubtitles,clip)=>{ 
            return (
            <>
            <Row><Col
                  style={{"color":"#9AC8E2","borderBottom":"1px solid"}} id="Table-top"
                ><a target="_blank" href={"https://www.bilibili.com/"+displayBV+"?p="+(clip+1)}>{"切片"+(clip+1)}</a></Col></Row>
            <>{
            clipSubtitles.map((s)=>{
              let srtArr = s.split("|");
              let index = srtArr[0];
              let time = srtArr[1];
              let text = srtArr[2];
              
              const hour = parseInt(time.split("-->")[0].split(":")[0]);
              const min = parseInt(time.split("-->")[0].split(":")[1]);
              const sec = parseInt(time.split("-->")[0].split(":")[2].split(",")[0]);
              const totalMinSec = (hour*3600+60*min+sec)*1000;
              const href = "https://www.bilibili.com/"+displayBV+"?p="+(clip+1)+"&start_progress="+totalMinSec;
              let className='';
              if(text.toLowerCase().indexOf(searchWords.toLowerCase())!== -1)  className='active-highlight';
              return (
              <>
              <Row style={{"borderBottom":"1px dashed"}} className={className}>
                <Col xs={3} md={3} style={{"color":"#B8A6D9"}}>{index}</Col>
                <Col xs={10} md={10}><a target="_blank" href={href}>{time}</a></Col>
                <Col xs={11} md={11} style={{"color":"#E799B0"}}>
                  <Highlighter
                    highlightStyle={{ backgroundColor: highlightColor, padding: 0 }}
                    searchWords={[searchWords]}
                    autoEscape
                    textToHighlight= {text}
                    ></Highlighter>
                  </Col>
                  </Row>
                </>
                  );
              })
            }
            </>
            </>

  )})}
  </Col>
  </Row>
        </Modal>
      </PageContainer>
    );
  }
}

class Subtitle extends React.Component{

  state = {
    mainJson: [],
    indexerList: [],
    reRender:false,
  }

  cancelRerender(){
    this.setState({reRender:false});
    console.log("已取消");
  }

  componentDidMount(){
    fetch(config.MainJsonAPI+"?brief=true").then((response)=>
      response.json().then(
        (data)=>{
          this.setState({
            mainJson:data.data,
            reRender:true
          });
          console.log("mainJson获取成功");
        }
      )
      ,(error)=>{
        console.error(error);
      });
  };
  
  
  render(){
    const {mainJson,reRender} = this.state;
    let tableListDataSource = [];

    for(let n in mainJson){
      let title;
      let bv;
      let date;
      let hour;
      try{
        title = mainJson[n]["title"];
        bv = mainJson[n]["bv"];
        date = mainJson[n]["date"];
        hour = mainJson[n]["time"];
      }catch{
        console.error("mainJson parse fault for n: "+n);
      }
      tableListDataSource.push({key:n,date:date,hour:hour,bv:bv,title:title});
    }
    tableListDataSource = reverseArray(tableListDataSource);
    const subPageProps = {
      initColumns:columns,
      initDatasrc:tableListDataSource,
      reRender:reRender,
      parent:this,
    }
    
    return (<SubtitlePage {...subPageProps} /> );
  }
}

export default Subtitle;
