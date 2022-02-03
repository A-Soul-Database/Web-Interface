import React, {useEffect} from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import {message} from 'antd';
import {heartbeat,Config} from './range';



export default () => {
    useEffect(() =>{
        async function update(){
            let status = await heartbeat();
            if(!status) {
                message.error("本地服务连接失败，请检查服务是否正常启动或是否正确配置");
            }
        }
        update();
    })
    return(
        <PageContainer
            
        >
            
        </PageContainer>
    )
}