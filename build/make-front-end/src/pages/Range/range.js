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
    const response = await Promise.race([timeout_Promise(ms),request_Promise(url)])
    return response.ok;
}