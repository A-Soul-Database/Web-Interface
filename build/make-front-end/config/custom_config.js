const sourceUrls = 
    [
    "https://livedb.asoulfan.com",
    "https://raw.githubusercontent.com/A-Soul-Database/A-Soul-Data/main",
    "https://cdn.jsdelivr.net/gh/A-Soul-Database/A-Soul-Data@latest",
    "https://gitee.com/lairq/A-Soul-Data/raw/main"
    ]

const queryPort = "8001";
const queryAPI = "https://apihk.asdb.live/Api/Subtitle_Search/sub_search";
const urlChoice = 1;
const APIHost = "https://apihk.asdb.live/Api/List_Json/V1";// https://github.com/A-Soul-Database/API/tree/master/Main-Api 的API，用于获取json文件
export const config =  {
    RunOnLocal:urlChoice !== 3,//当urlChoice不为0时，说明工程在本地跑
    sourceUrl:sourceUrls[urlChoice],
    queryAPI: queryAPI,
    FliterApi:APIHost+"/Main_Fliter",
    MainJsonAPI: APIHost + "/Main_Data",
    IndexerAPI: APIHost + "/Indexer_Data",
    SubtitlesAPI: APIHost + "/Srt_Data",
}