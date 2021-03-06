//This is the javascript file containing the fileter functions
//queryJson举例:
/*
    {
    "staff": [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F"
    ],
    "scene": [
        "show",
        "domroom",
        "spaceship",
        "ktv",
        "sky",
        "Eroom",
        "Aroom",
        "Droom",
        "rooftop",
        "beach",
        "classroom",
        "singroom",
        "danceroom",
        "filmstudio"
    ],
    "type": [
        "song",
        "chat",
        "game",
        "birthday",
        "theater",
        "dance",
        "vertical"
    ],
    "skin": [
        "swim",
        "official",
        "sport",
        "jk",
        "chinese",
        "group",
        "birthday",
        "sleep",
        "christmas",
        "year"
    ],
    "platform": [
        "B",
        "D"
    ],
    "tags": [],
    "typename": [],
    "title": []
}
*/
const insertionJustable = ["scene","staff","type","platform"]//可以用相交法判断的关键字数组
//2022-1-2:平台格式变化，由原来的单字符“B”变为字符串数组

export function match(queryJson,json){
    
        // keyword = "skin"
        {
            let skinSet = new Set();//存储所有衣服，去重
            for(let s of json["staff"]){
                if(s === "F") continue;//可怜的阿草，没有衣服，我真的，哭死
                for(let cloth of json["skin"][s]){
                    skinSet.add(cloth);
                }
            }
            let skinArr = Array.from(skinSet);
            
            if(skinArr.length !== 0&&!isInsertion(queryJson["skin"],skinArr)){
                // console.log("skin not match");
                return false;
            }
        }

        // keyword = "platform"
        // {
        //     if(queryJson["platform"].indexOf(json["platform"])===-1){
                
        //         // console.log("platform not match");
        //         return false;
        //     }//json里的platform是一个字符串数组["B","D"],"B"代表b站,"D"代表抖音
        // }
        for(let keyword of insertionJustable){
            if(!isInsertion(queryJson[keyword],json[keyword])){
                // console.log("insert not match");
                return false;
            }
        }
        if(queryJson["titlestr"] === ""&&queryJson["tagstr"]===""&&queryJson["typestr"] === "") return true;
        // keyword = "titlestr"
        {
            if(json["title"].toLowerCase().indexOf(queryJson["titlestr"].toLowerCase()) !== -1){
                return true;
            }
        }
        // keyword = "tagstr"
        {
            
            for(let tag of json["tags"]){
                if(tag.toLowerCase().indexOf(queryJson["tagstr"].toLowerCase()) !== -1){
                    return true;
                }
            }
        }
        // keyword = "typestr"
        {
            for(let arr of json["items"]){
                for(let i of arr["item"]){
                    if(i[0].toLowerCase().indexOf(queryJson["typestr"].toLowerCase()) !== -1){
                        return true;
                    }
                }
            }
        }
    
    return false;
}


export function getJsonData(url){
    //通过XMLHttpRequest获取cdn中的版本,同步阻塞式
    var xhr = new XMLHttpRequest();
    xhr.open("GET",url,false);
    xhr.send(null);
    let r;
    try{r = JSON.parse(xhr.responseText);}catch(e){r = {"title":"error"}}finally{return r}
  }

export function postJsonData(url,para){ //para是一个dict
    //通过XMLHttpRequest与api通信,同步阻塞式
    var xhr = new XMLHttpRequest();
    xhr.open("POST",url,false);
    xhr.setRequestHeader("Content-Type", "application/json");
    let data = JSON.stringify(para)
    xhr.send(data);
    let r;
    try{r = JSON.parse(xhr.responseText);}catch(e){r = {"title":"error"}}finally{return r}
}

export function getData(url){
    //通过XMLHttpRequest发送http请求,同步阻塞式
    var xhr = new XMLHttpRequest();
    xhr.open("GET",url,false);
    xhr.send(null);
    
    let r;
    
    if(xhr.status !== 200){
        throw xhr.status;
    };
    try{r = xhr.responseText;}catch(e){
        r = "error http";
        throw r;
    }finally{
        return r
    }
}
export function reverseArray(array){
    let res = [];
    for(let i=array.length-1;i>=0;i--){
      res.push(array[i]);
    }
    return res;
}

function isInsertion(arr1,arr2){//判断两个数组是否有交集，若有则返回true
    return (arr1.length + arr2.length) !== Array.from(new Set([...arr1,...arr2])).length;
}//这里利用的是set的去重功能，若一个数组长度为m，另一个为n，其时间复杂度应该为O(m+n)。但存在一个问题，要确保两个数组都没有重复元素捏，不然会爆掉。
