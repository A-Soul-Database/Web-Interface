export const Config = {
    ffmpeg_api:"http://localhost:4399",
    Parse_api:"http://localhost:4400",
    Thread_Num:4,
    BiliBili_Cookie:"",
    Multi_Thread_Switch:true,
};

export async function heartbeat(){
    const ffmpeg = await Advanced_Fetch(Config.ffmpeg_api+"/ping");
    const parse = await Advanced_Fetch(Config.Parse_api+"/ping");
    return (ffmpeg && parse);
}

async function Advanced_Fetch(url){
    let ms=1000;
    let controller = new AbortController();
    let signal = controller.signal;
    let timeout_Promise = (timeout)=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(new Response(false,{status:408}));
                controller.abort();
            },timeout)
        })
    }
    let request_Promise = (target) => {
        return fetch(target,{
            signal:signal
        });
    };
    let response;
    try{
        response = await Promise.race([timeout_Promise(ms),request_Promise(url)]);
    }catch(e){
        return false;
    }
    
    return response.ok;
}

export function Setcookie (name, value){ 
    var expdate = new Date();
    expdate.setTime(expdate.getTime() + 1296000 * 1000);
    document.cookie = name+"="+value+";expires="+expdate.toGMTString()+";path=/";
}

export function getCookie(c_name){
    if (document.cookie.length>0){
      let c_start=document.cookie.indexOf(c_name + "=")
      if (c_start!=-1){ 
        c_start=c_start + c_name.length+1 
        let c_end=document.cookie.indexOf(";",c_start)
        if (c_end==-1) c_end=document.cookie.length
        return decodeURI(document.cookie.substring(c_start,c_end))
        } 
      }
    return ""
}

export function save_bilibili_cookie(cookie){
    
    fetch(`${Config.Parse_api}/Save_BiliBili_Cookie?Cookie=${cookie}`).then(
        (res)=>{console.log("b站cookie读取成功")},
        (e)=>{console.warn("b站cookie保存失败");}
    )
    
}

export function get_bilibili_cookie(){
    fetch(`${Config.Parse_api}/Get_BiliBili_Cookie`)
    .then(responese=>responese.json())
    .then(function(data){
        if(data!=""){
            Config.BiliBili_Cookie = data;
        }
    })
}

export function to_second_time(time){
    time.replace(/：/g, ":");
    let a = time.split(":");
    switch(a.length-1){
        case 0:
            return parseInt(time);
        case 1:
            return parseInt(a[0])*60 + parseInt(a[1]);
        case 2:
            return parseInt(a[0])*3600 + parseInt(a[1])*60 + parseInt(a[2]);
    }
}