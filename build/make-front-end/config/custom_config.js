const sourceUrls = 
    [
    "https://maindata.a-soul-database.vercel.app",
    "https://cdn.jsdelivr.net/gh/A-Soul-Database/A-Soul-Data@latest"
    ]

const queryPort = "8001";
const queryAPI = "https://apihk.asdb.live/Api/Subtitle_Search/sub_search";
const urlChoice = 0;
const APIHost = "https://apihk.asdb.live/Api/List_Json/V1";// https://github.com/A-Soul-Database/API/tree/master/Main-Api 的API，用于获取json文件
export const config =  {
    RunOnLocal:urlChoice !== 0,//当urlChoice不为0时，说明工程在本地跑
    sourceUrl:sourceUrls[urlChoice],
    queryAPI: queryAPI,
    FliterApi:APIHost+"/Main_Fliter",
    MainJsonAPI: APIHost + "/Main_Data",
    IndexerAPI: APIHost + "/Indexer_Data",
    SubtitlesAPI: APIHost + "/Srt_Data",
}