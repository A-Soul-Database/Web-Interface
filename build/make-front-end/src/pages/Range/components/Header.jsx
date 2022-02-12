import React, {useEffect, useState} from 'react';
import {message, Button, Row, Col, Card, Modal, Typography, Switch, Input, Tooltip} from 'antd';
import DownloadList from './DownloadList';
import { Config, Setcookie, save_bilibili_cookie } from '../range';
import { OrderedListOutlined } from '@ant-design/icons';
import "./Header.css"
const { Text, Link, Title } = Typography;
export const StatEnum = {
    UnConnect: 0,
    UnInstall: 1,
    OK:2,
}

class Header extends React.Component {
    constructor(props){
        super(props);
    }

    state = {
        isSettingVisible: false,
        ffmpeg_api:Config.ffmpeg_api,
        Parse_api:Config.Parse_api,
        Thread_Num:Config.Thread_Num,
        BiliBili_Cookie:Config.BiliBili_Cookie,
        Multi_Thread_Switch:Config.Multi_Thread_Switch,
        isDListVisible: false
        
    }

    save_setting_param = () => {
        // let Res_Setting = Config;
        if(!this.state.Multi_Thread_Switch){
            Config.Thread_Num = 1; //如果关闭了多线程,则线程数设置为1
        }else{
            Config.Thread_Num = this.state.Thread_Num;
        }
        Config.ffmpeg_api = this.state.ffmpeg_api;
        Config.Parse_api = this.state.Parse_api;
        Config.BiliBili_Cookie = this.state.BiliBili_Cookie;
        Config.Multi_Thread_Switch = this.state.Multi_Thread_Switch;
        console.log(Config);
        //Save to cookie
        document.cookie = Setcookie("Config",JSON.stringify(Config));
        if(this.state.stat === StatEnum.OK) { //bilibili cookie需要保存到api上，因此只有在网络连接成功时才保存
            save_bilibili_cookie(Config.BiliBili_Cookie);
        }
        
        message.info("保存成功");
    }

    showSettingModal  = () => {
        this.setState({isSettingVisible:true});
    }

    handleSettingSave = ()=> {
        this.save_setting_param();
        this.setState({isSettingVisible:false});
    }

    handleSettingCancel = () => {
        this.setState({isSettingVisible:false});
    }

    render() {
    const {stat} = this.props;
    const {isSettingVisible,
        ffmpeg_api,Parse_api, BiliBili_Cookie, Multi_Thread_Switch, Thread_Num,
        isDListVisible
    } = this.state;
    
    const thread_num_input =
        Multi_Thread_Switch ? 
        <>
        <Row style={{marginTop: 24}}>
                    <Title level={5}>线程数</Title>
                    <Input
                        defaultValue={Thread_Num}
                        onChange={(e)=>this.setState({Thread_Num:e.target.value})}
                    ></Input>
                    <Text type='secondary'>默认4线程</Text>
        </Row>
        </>
        :
        <>
        <Row style={{marginTop: 24}}>
                    <Title level={5}>线程数</Title>
                    <Input
                        value={1}
                        defaultValue={Thread_Num}
                        // onChange={(e)=>this.setState({Thread_Num:e.target.value})}
                        disabled={true}
                    ></Input>
                    <Text type='secondary'>默认4线程</Text>
        </Row>
        </>
    
    let statText = "";
    switch(stat){
        case StatEnum.UnConnect:
            
            statText = 
            <> 
            <div class="led-box">
                <div class="led-red" style={{height:12,width:12, margin:10}}></div></div>
                <p style={{margin:10}}>未连接</p>
            </>
            break;
        case StatEnum.UnInstall:
            statText = <> 
            <div class="led-box">
                <div class="led-yellow" style={{height:12,width:12, margin:10}}></div></div>
                <p style={{margin:10}}>依赖安装中...</p>
            </>
            break;
        case StatEnum.OK:
            statText = <> 
            <div class="led-box">
                <div class="led-green" style={{height:12,width:12, margin:10}}></div></div>
                <p style={{margin:10}}>服务正常</p>
            </>
            break;
        default:
            break;
    }
    const buttonText = stat === StatEnum.UnConnect ? "安装":"设置"
        return (
            <>
            <Card>
            <Row 
            >
                <div style={{margin:10}}>服务状态:</div>
                <Col md={8} xs={12}>{statText}</Col>
                <Col md={1} offset={11} style={{marginTop:5}}>
                    <Tooltip title="下载本地服务">
                    <Button 
                        onClick={this.showSettingModal}
                        disabled={stat === StatEnum.UnInstall}
                    >{buttonText}</Button>
                    </Tooltip>
                </Col>
                <Col md={1} offset={1} style={{marginTop:5}}>
                    <Tooltip title="下载列表">
                    <Button
                        onClick={(e)=>{
                            this.setState({isDListVisible:true});
                        }}
                    ><OrderedListOutlined/></Button>
                    </Tooltip>
                </Col>
            </Row>
            </Card>
            <Modal
                visible = {isSettingVisible}
                onOk={this.handleSettingSave}
                onCancel={this.handleSettingCancel}
                okText = "保存"
                cancelText = "取消"
                width={800}
            >
                <Row>
                <Button type="primary"
                style={{ background: "orange", borderColor: "orange" }} 
                href='https://ghproxy.com/https://github.com/A-Soul-Database/RangeDownloader/releases/download/V1.4/app.exe'>本地服务下载</Button>
                </Row>
                <Row>
                <Text type="secondary">片段下载需要依托本地端口服务,若您没有下载,可以点击上方按钮下载,对于Mac/Linux用户可以自行编译或源码运行</Text>
                </Row>
                <Row style={{ marginTop: 24 }}>
                    <Title level={5}>多线程加载</Title>
                    <Col offset={1}>
                    <Switch
                        checked = {Multi_Thread_Switch}
                        onChange={(checked)=>{
                            this.setState({Multi_Thread_Switch:checked})
                        }}
                        checkedChildren="多线程"
                        unCheckedChildren="单线程"
                    />
                    </Col>
                    <Text type='secondary'>ffmpeg的下载方式与其他下载软件不同,属于流式+Seek模式加载.但是由于Mp4的格式原因,Stco不能通过秒数完全分割,<b>会导致在开始前几秒和线程连接处出现花屏等情况</b></Text>
                    <Text type='secondary'>建议对于小时间段视频可以不用启用该功能</Text>
                </Row>
                {thread_num_input}

                <Row style={{marginTop: 24}}>
                    <Title level={5}>本地ffmpeg地址</Title>
                    <Input
                        defaultValue={ffmpeg_api}
                        onChange={(e)=>this.setState({ffmpeg_api:e.target.value})}
                    ></Input>
                    <Text type='secondary'>默认http://localhost:4399</Text>
                </Row>

                <Row style={{marginTop: 24}}>
                    <Title level={5}>本地解析地址</Title>
                    <Input
                        defaultValue={Parse_api}
                        onChange={(e)=>this.setState({Parse_api:e.target.value})}
                    ></Input>
                    <Text type='secondary'>默认http://localhost:4400</Text>
                </Row>

                <Row style={{marginTop: 24}}>
                    <Title level={5}>BiliBili_Cookie</Title>
                    <Input
                        defaultValue={BiliBili_Cookie}
                        onChange={(e)=>this.setState({BiliBili_Cookie:e.target.value})}
                    ></Input>
                    <Text type='secondary'>如果你是大会员,并且希望下载更高清的源(例如4K/1080P高码率),则需要绑定你的B站Cookie.
                    你的Cookie将会保存在本地,Asdb保证不会上传任何信息.并开放源代码接受监督.</Text>
                    <Text type="secondary">Copyright 2022. Asdb.live</Text>
                    
                </Row>
                <Row><Link href='https://www.bilibili.com/read/cv12349604' target={'_blank'}>点此查看如何获取BiliBili Cookie</Link></Row>
                
            </Modal>
            <DownloadList isVisible={isDListVisible} onClose={()=>{this.setState({isDListVisible:false})}}/>
            </>
        );
    }
}

export default Header;