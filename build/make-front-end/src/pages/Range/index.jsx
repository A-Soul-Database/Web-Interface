import React, {useEffect, useState} from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import {message, Button, Row, Col ,Typography, Progress} from 'antd';
import {heartbeat,Config, getCookie, get_bilibili_cookie} from './range';
import { StatEnum } from './components/Header';
import Header from './components/Header';
import Body from './components/Body';
// import DownloadList from './components/DownloadList';
const {Text} = Typography;

export default () => {
    
    if(getCookie("Config")){
        //直接写Config = JSON.parse(getCookie("Config"))会报错:Cannot set property Config of #<Object> which has only a getter
        Config.ffmpeg_api = JSON.parse(getCookie("Config")).ffmpeg_api,
        Config.Parse_api = JSON.parse(getCookie("Config")).Parse_api,
        Config.Thread_Num = JSON.parse(getCookie("Config")).Thread_Num,
        Config.Multi_Thread_Switch = JSON.parse(getCookie("Config")).Multi_Thread_Switch,
        Config.BiliBili_Cookie = JSON.parse(getCookie("Config")).BiliBili_Cookie
    }
    const [inter,setInter] = useState(1000);
    const [stat,setStat] = useState(StatEnum.UnConnect); //stat: 0--未连接上api;1--未下载ffmpeg;2--准备就绪
    const [progress_per,setProgressPer] = useState(0);
    // const [isDListVisible,setIsDlListVisble] = useState(false);
    function Install_FFmpeg(){
        fetch(`${Config.ffmpeg_api}/Install_FFmpeg`).catch((e)=>{
            message.error("下载依赖失败");
            setStat(0);
        });
        let progress = setInterval(function(){
            fetch(`${Config.ffmpeg_api}/Install_Progress`)
            .then(responese=>{
                responese.json().then(function(data){
                    if(data){
                        console.log(data);
                        setProgressPer(Math.ceil(data.Download_Progress));
                        if (data.Install_Stage===2){
                            clearInterval(progress);
                            setStat(2);
                        }
                    }
                });
            },
            error =>{
                message.error("下载依赖失败");
                clearInterval(progress);
                setStat(0);
            })
        },1000)
    }
    useEffect(() =>{
        function Check_And_Download_FFmpeg(){  //在已连接未安装依赖时(stat从0->1)调用一次,检查依赖安装，若未安装则调用安装函数
            fetch (Config.ffmpeg_api+"/Detect").then(function(response){
                //Get Bool Json
                response.json().then(function(data){
                    if(data===false){
                        Install_FFmpeg();
                    }else{
                        setStat(2);
                    }
                    
                    get_bilibili_cookie();
                });
            });
        }
        async function update(){
            let status = await heartbeat();
            if(!status) {
                if(stat !== StatEnum.UnConnect) {
                    setInter(1000);
                }
                setStat(StatEnum.UnConnect);
                
            }else{
                if(stat === StatEnum.UnConnect) {//只需要调用一次，即stat从0->1的这一次
                    setInter(5000);//减少轮询频率
                    setStat(StatEnum.UnInstall);
                    message.info("连接成功");
                    Check_And_Download_FFmpeg();
                }
            }
        }
        const i = setInterval(() => {
            update();
        },inter);
        return () => clearInterval(i);
    });
    switch(stat){
        case StatEnum.UnConnect:
            return (
                <PageContainer>
                    <Header stat={stat}></Header>
                    <Row style={{marginTop:10}}>
                    <Text type='danger'>本地服务未正常启动。若您未下载本地服务，请点击上方“安装”按钮进行下载捏</Text>
                    </Row>
                    {/* <DownloadList isVisible={isDListVisible}/> */}
                </PageContainer>
            );
        case StatEnum.UnInstall:
            return (
                <PageContainer>
                    <Header stat={stat}></Header>
                    <Row style={{marginTop:10}}>
                    <Text type='warning'>本地服务连接成功。正在安装依赖...(约80MB)</Text>
                    </Row>
                    <Row>
                        <Progress percent={progress_per}></Progress>    
                    </Row>
                              
                </PageContainer>
            )
        case StatEnum.OK:
            return (
                <PageContainer>
                    <Header stat={stat}></Header>
                    <Row style={{marginTop:10}}>
                    <Text type='success'>本地服务已就绪。开始切片下载吧</Text>
                    </Row>
                    <Body />
                    {/* <DownloadList isVisible={isDListVisible}/>           */}
                </PageContainer>
            )
        default:
            return (
                <PageContainer>
                    <Header stat={stat}></Header>
                </PageContainer>
            );
    }
    
}