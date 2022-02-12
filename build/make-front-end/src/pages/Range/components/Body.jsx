import React, {useEffect, useState} from 'react';
import {message, Button, Row, Col, Card, Modal, Typography, Switch, Input, Tooltip} from 'antd';
import { Config, to_second_time } from '../range';
import { SearchOutlined, DownloadOutlined } from '@ant-design/icons';

const {Text, Title} = Typography
class Body extends React.Component {
    constructor(props){
        super(props);
    }
    state = {
        input_url : "",
        download_url : "",
        save_name:"",
        video_title:"",
        args:"",
        start_time : "",
        end_time : "",
        parse_success: false
    }
    apply_parse(){
        let url = encodeURI(this.state.input_url);
        if(url.indexOf("bilibili")>0){message.info("Tips:如果你是大会员,可以设置Cookie以获得4K视频支持捏")};
        let body_obj = this;
        fetch(`${Config.Parse_api}/Parse`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "url": url
            })
        }).then(function(response){
            response.json().then(function(data){
                body_obj.setState({
                    download_url: data.Download_Url,
                    save_name: data.Save_Name,
                    video_title: data.Web_Title,
                    args: data.Args,
                    parse_success: data.Download_Url !== ""
                });
            });
        },
        function(error){
            console.error(error);
            message.error(error);
        } );  
    }

    get_start_cur_time(){
        let this_time = parseInt(document.getElementsByTagName("video")[0].currentTime);
        this.setState({start_time:this_time.toString()});
    }

    get_end_cur_time(){
        let this_time = parseInt(document.getElementsByTagName("video")[0].currentTime);
        this.setState({end_time:this_time.toString()});
    }

    apply_download(){
        const {start_time, end_time, download_url, save_name, args} = this.state;
        if(start_time === "" || end_time === ""){
            message.error("别急,还没输入时间段");
            return;
        }
        let start_second_time = to_second_time(start_time);
        let end_second_time = to_second_time(end_time);
        if (end_second_time < start_second_time){
            message.error("结束时间不能小于开始时间");
            return;
        }
        if (start_second_time < 0 || end_second_time < 0){
            message.error("时间不能小于0");
            return;
        }
        let thread_num;
        if(end_second_time-start_second_time<120){
            thread_num = 1;
        }else{
            thread_num = Config.Thread_Num;
        }
        fetch(`${Config.ffmpeg_api}/Seek`,{
            method : "POST",
            headers :{
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                "Url": download_url,
                "Start_Time": start_second_time,
                "End_Time": end_second_time,
                "Save_Name": `${save_name}_${start_second_time}_${end_second_time}`,
                "Threads":thread_num,
                "Args":args,
                "Seek_type":"Input"
            })
        }).catch((error)=>{
            message.error("视频下载失败，请检查输入格式");
        });
        message.info('已添加至下载队列中');
    }

    render() {
        const {input_url, download_url, start_time, end_time, parse_success, video_title} = this.state;
        return (
            <>
            <Row style={{ "marginTop":10 }}>
                <Col span={24} align='middle'>
                <Title level={2}>输入视频网址</Title>
                </Col>
            </Row>
            <Row style={{"height":"50px", "marginTop":10}}>
            <Col offset={6} span={12} align='middle'>
                <Input style={{"borderRadius":"50px"}}
                    placeholder="E.g. https://www.bilibili.com/video/BV1GZ4y1S7uV" 
                    onChange={(e)=>{
                        this.setState({input_url:e.target.value})}}
                    value={input_url}
                ></Input>
            </Col>
            <Col offset={1}>
                <Tooltip title={"解析"}>
                <Button
                    type='primary'
                    onClick={(e)=>{
                        this.apply_parse();
                    }}
                ><SearchOutlined></SearchOutlined></Button>
                </Tooltip>
            </Col>
            </Row>
            <Row>
                <Col md={10}>
                <Row style={{"height":"100px"}}>
                    <Card style={{"width":"100%"}}>
                    <Title level={4}>{video_title}</Title>
                    </Card>
                </Row>
                <video
                    style={{
                       "height":"300px",
                       "width":"100%" 
                    }}
                    title={video_title}
                    controls
                    src={download_url}
                    playsInline
                ></video>
                </Col>
                <Col offset={1} md={12}>
                    <Card
                        style={{"height":"400px"}}
                    >
                        <Title level={4}>开始时间</Title>
                        <Input.Group compact>
                            <Input style={{ width: 'calc(100% - 200px)'}} placeholder='例:00:00:30/00:30/30' 
                                onChange={(e)=>{
                                    this.setState({start_time:e.target.value});
                                }}
                                value={start_time}
                            />
                            <Tooltip title={"选取视频当前时间"}>
                            <Button
                                onClick={(e)=>{
                                    this.get_start_cur_time();
                                }}
                            >当前时间</Button>
                            </Tooltip>

                        </Input.Group>
                        

                        <Title level={4} style={{"marginTop":"60px"}}>结束时间</Title>
                        <Input.Group compact>
                            <Input style={{ width: 'calc(100% - 200px)' }} placeholder='例:00:00:30/00:30/30' 
                                onChange={(e)=>{
                                    this.setState({end_time:e.target.value});
                                }}
                                value={end_time}
                            />
                            <Tooltip title={"选取视频当前时间"}>
                            <Button
                                onClick={(e)=>{
                                    this.get_end_cur_time();
                                }}
                            >当前时间</Button>
                            </Tooltip>
                        </Input.Group>
                        <Row style={{"marginTop":"100px"}}>
                            <Col span={24} align={"middle"}>
                                <Tooltip title={parse_success?"将切片时间段下载到本地":"别急，先解析视频捏"}>
                                <Button
                                    style={{ background: "orange", borderColor: "orange" }}
                                    type='primary'
                                    onClick={(e)=>{
                                        this.apply_download();
                                    }}
                                    disabled={!parse_success}
                                >   <DownloadOutlined/>
                                    下载切片
                                    </Button>
                                    </Tooltip>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
            </>
            
        );
    }
}

export default Body;