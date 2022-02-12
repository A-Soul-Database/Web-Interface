import React, {useEffect, useState} from 'react';
import {message, Button, Row, Col, Card, Modal, Typography, Input, Tooltip,Drawer,Progress} from 'antd';
import { Config, to_second_time } from '../range';
import { CaretRightOutlined, PauseOutlined, FolderOpenOutlined, DeleteOutlined } from '@ant-design/icons';

const {Text, Title} = Typography;
let download_progress;
class DownloadList extends React.Component {
    constructor(props){
        super(props);
    }
    state = {
        dItems : [],
    }
    get_download_info(){
        let list_obj = this;
        fetch(`${Config.ffmpeg_api}/Progress`).then(function(response){
            response.json().then(function(data){
                //遍历json对象
                // list_obj.setState({download_progress:data});
                download_progress = data;
                let dItems = [];
                for(let uid in download_progress){
                    let ditem = download_progress[uid];
                    let thread_num = ditem.Threads;
                    let title = ditem.Save_Name;
                    let thread_list = []; 
                    for(let n=0;n<thread_num;n++){
                        let thread = ditem[n];
                        thread_list.push(
                            {
                                progress: parseInt(thread.progress * 100),
                                running: thread.Running,
                            }
                        )
                    }
                    dItems.push ({
                            uid: uid,
                            thread_num : thread_num,
                            title : title,
                            thread_list : thread_list,
                    });
                    list_obj.setState({dItems:dItems});
                }
            },
            
            )
        },
        function(error){console.error("获取下载信息失败");})
    }
    update(){
        if(!this.props) return;
        const {isVisible} = this.props;
        if(isVisible){
            this.get_download_info();
            console.log(this.state.dItems);
        }
    }
    componentDidMount(){
        setInterval(()=>{this.update()},1000);
    }


    render() {
        const {isVisible, onClose} = this.props;
        const {dItems} = this.state;
        
        let DListComponents = dItems.map((ditem)=>{
            return (
                // <Row style={{"marginTop":"10px","height":"120px"}}>
                // <Col span={24} style={{"height":"100%"}}>
                <DownloadItem
                    uid = {ditem.uid}
                    thread_num={ditem.thread_num}
                    title={ditem.title}
                    thread_list={ditem.thread_list}
                />
                // </Col>
                // </Row>
            );
        });
        return (
            <>
            <Drawer 
            placement='right' 
            visible={isVisible}
            onClose={onClose}
            >
                {DListComponents}
            </Drawer>
            </>
        )
    }
}


function Download_Actions(Uniq_Id,Signal,Thread_Num){
    for(var n=0;n<Thread_Num;n++){
        fetch(`${Config.ffmpeg_api}/thread_operation?Uniq_ID=${Uniq_Id}&Running=${Signal}&Instance_id=${n}`)
        .catch((error)=>{
            console.error("操作失败");
            message.error("操作失败");
        })
    }
}
function open_folder(){
    fetch(`${Config.ffmpeg_api}/Open_Folder`)
    .catch((error)=>{
        console.error("打开文件夹失败");
        message.error("打开文件夹失败");
    });
}

class DownloadItem extends React.Component {
    constructor(props){
        super(props);
    }
    state = {
        display:"block"
    }

    render(){
        const {
            uid,
            thread_num,
            title,
            thread_list
        } = this.props;
        const {display} = this.state;
        let stat = 1; // stat of the whole downloading task
        let finished_threads = 0;
        for(let thread of thread_list) {
            if(thread.running === 0){ // hang
                stat = 0;
                break;
            } else if(thread.running === 1){ // Normally run
                continue;
            } else if(thread.running === 3){ // Finished
                finished_threads += 1;
            } else if(thread.running === 4){ // Terminated
                stat = 4;
                break;
            } else {
                // console.warn("Unknown type of thread status");
                
                break;
            }
        }
        if(stat === 4) {
            return <></>;
        }
        // console.log(finished_threads);
        if(finished_threads >= thread_num) {
            stat = 3; //全部的线程完成下载，状态置为finished
        }
        let actionButton = <></>;
        let borderColor = "green";
        let progressStat = "active";
        switch(stat){
            case 0: // hang
                borderColor = "orangered";
                actionButton = 
                <Tooltip title={"开始"}>
                <Button
                    onClick = {(e)=>{Download_Actions(uid,1,thread_num)}}
                >
                    <CaretRightOutlined/>
                </Button>
                </Tooltip>
                progressStat = "exception";
                break;
            case 1: // Normally run
                borderColor = "orange";
                actionButton = 
                <Tooltip title={"暂停"}>
                <Button
                    onClick = {(e)=>{Download_Actions(uid,0,thread_num)}}
                >
                    <PauseOutlined/>
                </Button>
                </Tooltip>
                progressStat="active";
                break;
            case 3: // Finished
                borderColor = "green";
                actionButton = 
                <Tooltip title={"打开保存文件夹"}>
                <Button
                    onClick = {()=>{open_folder();}}
                    
                >
                    <FolderOpenOutlined/>
                </Button>
                </Tooltip>
                progressStat="success"
                break;
            case 4: // Terminated
                break;
        }
        const width = 100 / thread_num;
        const width_str = width.toString() + "%";

        const progress_list = thread_list.map((thread)=>{
            return(
                <Progress 
                    percent={thread.progress}
                    style={{"width":width_str}}
                    showInfo={false}
                    status={progressStat}
                />
            )
        });
        return (
            <Row style={{"marginTop":"10px","height":"120px","display":display}}>
            <Col span={24} style={{"height":"100%"}}>
            <Card
                span={24}
                // hoverable
                style={{
                    "borderWidth":"2px",
                    "borderColor":borderColor,
                    "height":"100%",
                }}
            >
                <Row style={{"marginTop":"0px"}}>
                    <Col span={16}><Text>标题: {title}</Text></Col>
                    <Col offset={2} span={4}><Text>线程: {thread_num}</Text></Col>
                </Row>
                <Row>{progress_list}</Row>
                <Row style={{"marginTop":"5px"}}>
                    <Col offset={15}>
                        <Tooltip title={"删除任务"}>
                        <Button
                            onClick={()=>{
                                this.setState({display:"none"});
                                Download_Actions(uid,4,thread_num);
                            }}
                        >
                            <DeleteOutlined />
                        </Button>
                        </Tooltip>
                    </Col>
                    <Col offset={1}>{actionButton}</Col>
                </Row>
            </Card>
            </Col>
            </Row>
        )
    }
}

export default DownloadList;