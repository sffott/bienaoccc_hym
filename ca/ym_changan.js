const $ = new Env('长安汽车');
var request = require("request");
var crypto = require("crypto");
//var rrsa = require("./changanjm");
let status;
status = (status = ($.getval("changanstatus") || "1") ) > 1 ? `${status}` : ""; // 账号扩展字符
let changanhdArr = [],changancount = ''
let changanhd= $.isNode() ? (process.env.changanhd ? process.env.changanhd : "") : ($.getdata('changanhd') ? $.getdata('changanhd') : "")

let changanhds = ""

let allMessage = '';

const notify = $.isNode() ? require('./sendNotify') : '';
const logs =0;
const host='https://scrm.changan.com.cn/'
var hours = new Date().getHours();
var s = new Date().getMinutes();
var timestamp = Math.round(new Date().getTime()).toString();
!(async () => {
  if (typeof $request !== "undefined") {
        await changanck()
  } else {
      if(!$.isNode()){
          changanhdArr.push($.getdata('changanhd'))
          let changancount = ($.getval('changancount') || '1');
          for (let i = 2; i <= changancount; i++) {
            changanhdArr.push($.getdata(`changanhd${i}`))
            }
    console.log(`------------- 共${changanhdArr.length}个账号-------------\n`)
      for (let i = 0; i < changanhdArr.length; i++) {
        if (changanhdArr[i]) {
          changanhd = changanhdArr[i];
          $.index = i + 1;
        
          console.log(`\n开始【长安汽车${$.index}】`)

  }
}
      }else  {
          if (process.env.changanhd && process.env.changanhd.indexOf('@') > -1) {
            changanhdArr = process.env.changanhd.split('@');
            console.log(`您选择的是用"@"隔开\n`)
        } else {
            changanhds = [process.env.changanhd]
        };
        Object.keys(changanhds).forEach((item) => {
        if (changanhds[item]) {
            changanhdArr.push(changanhds[item])
        }
    })
          console.log(`共${changanhdArr.length}个cookie`)
	        for (let k = 0; k < changanhdArr.length; k++) {
                $.message = ""
                changanhd = changanhdArr[k]
                $.index = k + 1;
 console.log(`【跑不了的叼毛 第一次下载长安汽车的叼毛 自己先打开APP完善资料再来】`)
          console.log(`\n=====开始【长安汽车${$.index}】====`)
          
          allMessage += `\n====开始【长安汽车${$.index}】====\n`

console.log(`【--签到--】`)
allMessage += `【--签到--】`
         await sign()
	            
	            
	            
	        }




if ($.isNode() && allMessage) {
       await notify.sendNotify(`长安汽车`, `${allMessage}` )
    }
      }
  }
})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())


function changanck() {
   if ($request.url.indexOf("getTodayDetail") > -1) {
  const changanhd = $request.url

if(changanhd)    $.setdata(changanhd,`changanhd${status}`)


$.log(changanhd)
//changanhd = changanhd.match(/loginToken=(.*?)&/)[1] 
//$.log(changanhd)
   $.msg($.name,"",'长安汽车'+`${status}` +'数据获取成功！')
 
}
}

async function sign() {
 return new Promise((resolve) => {

 body = `{"a":"1.0","b":"1","c":"4.1.1","d":"${timestamp}","e":"d4bbc1e7-85d0-479b-8ffd-${randomString(12)}","f":"${randomString(32).toUpperCase()}","source":"2"}`,

$.post(changan('app-m/prod-api/scrm/marketing/signUsersign',body), async (err, resp, data) => {

      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (safeGet(data)) {
            data = JSON.parse(data);
             if(data.code==200){
  
          console.log(`\n签到：${data.data.reward}`)
          allMessage +=`\n\n签到：${data.data.reward}`   

console.log(`\n【--评论--】`)
allMessage +=`\n【--评论--】`
await save(`{"pid":0,"replyUserId":0,"replyId":0,"userId":1467410244909830146,"e":"d4bbc1e7-85d0-479b-8ffd-${randomString(12)}","content":"长安niubi","a":"1.0","b":"1","c":"4.1.1","tid":999999970972102,"d":"${timestamp}","f":"${randomString(32)}}","commId":0,"type":1}`)

await save(`{"pid":0,"replyUserId":0,"replyId":0,"userId":1467410244909830146,"e":"d4bbc1e7-85d0-479b-8ffd-${randomString(12)}","content":"长安niubi","a":"1.0","b":"1","c":"4.1.1","tid":999999970940186,"d":"${timestamp}","f":"${randomString(32)}}","commId":0,"type":1}`)
await save(`{"pid":0,"replyUserId":0,"replyId":0,"userId":1467410244909830146,"e":"d4bbc1e7-85d0-479b-8ffd-${randomString(12)}","content":"长安niubi","a":"1.0","b":"1","c":"4.1.1","tid":999999970958373,"d":"${timestamp}","f":"${randomString(32)}}","commId":0,"type":1}`)
await save(`{"pid":0,"replyUserId":0,"replyId":0,"userId":1467410244909830146,"e":"d4bbc1e7-85d0-479b-8ffd-${randomString(12)}","content":"长安niubi","a":"1.0","b":"1","c":"4.1.1","tid":999999970902964,"d":"${timestamp}","f":"${randomString(32)}}","commId":0,"type":1}`)
await save(`{"pid":0,"replyUserId":0,"replyId":0,"userId":1467410244909830146,"e":"d4bbc1e7-85d0-479b-8ffd-${randomString(12)}","content":"长安niubi","a":"1.0","b":"1","c":"4.1.1","tid":999999970903444,"d":"${timestamp}","f":"${randomString(32)}}","commId":0,"type":1}`)
await save(`{"pid":0,"replyUserId":0,"replyId":0,"userId":1467410244909830146,"e":"d4bbc1e7-85d0-479b-8ffd-${randomString(12)}","content":"长安niubi","a":"1.0","b":"1","c":"4.1.1","tid":999999970986252,"d":"${timestamp}","f":"${randomString(32)}}","commId":0,"type":1}`)




console.log(`\n【--点赞--】`)
allMessage +=`\n【--点赞--】`

await like(`{"a":"1.0","b":"1","c":"4.1.1","likeType":1,"e":"d4bbc1e7-85d0-479b-8ffd-${randomString(12)}","d":"${timestamp}","f":"${randomString(32)}}","entityId":999999970951410}`)
await like(`{"a":"1.0","b":"1","c":"4.1.1","likeType":1,"e":"d4bbc1e7-85d0-479b-8ffd-${randomString(12)}","d":"${timestamp}","f":"${randomString(32)}}","entityId":999999970917192}`)
await like(`{"a":"1.0","b":"1","c":"4.1.1","likeType":1,"e":"d4bbc1e7-85d0-479b-8ffd-${randomString(12)}","d":"${timestamp}","f":"${randomString(32)}}","entityId":999999970902417}`)
await like(`{"a":"1.0","b":"1","c":"4.1.1","likeType":1,"e":"d4bbc1e7-85d0-479b-8ffd-${randomString(12)}","d":"${timestamp}","f":"${randomString(32)}}","entityId":999999970920932}`)
await like(`{"a":"1.0","b":"1","c":"4.1.1","likeType":1,"e":"d4bbc1e7-85d0-479b-8ffd-${randomString(12)}","d":"${timestamp}","f":"${randomString(32)}}","entityId":999999970967873}`)

console.log(`\n【--分享--】`)
allMessage +=`\n【--分享--】`

await share(`{"a":"1.0","b":"1","c":"4.1.1","id":999999970932843,"e":"d4bbc1e7-85d0-479b-${randomString(12)}","d":"${timestamp}","f":"${randomString(32)}"}`)
await share(`{"a":"1.0","b":"1","c":"4.1.1","id":999999970989939,"e":"d4bbc1e7-85d0-479b-${randomString(12)}","d":"${timestamp}","f":"${randomString(32)}"}`)
await share(`{"a":"1.0","b":"1","c":"4.1.1","id":999999970910810,"e":"d4bbc1e7-85d0-479b-${randomString(12)}","d":"${timestamp}","f":"${randomString(32)}"}`)
await share(`{"a":"1.0","b":"1","c":"4.1.1","id":999999970908974,"e":"d4bbc1e7-85d0-479b-${randomString(12)}","d":"${timestamp}","f":"${randomString(32)}"}`)
await share(`{"a":"1.0","b":"1","c":"4.1.1","id":999999970913662,"e":"d4bbc1e7-85d0-479b-${randomString(12)}","d":"${timestamp}","f":"${randomString(32)}"}`)

            
console.log(`\n【--查询--】`)
allMessage +=`\n【--查询--】`
await info()
             }
            
             else if(data.code == 1410){
            allMessage +=`\n【叼毛 今天已经签到过了】`
             console.log(`\n叼毛 今天已经签到过了`)   

             
console.log(`\n【--评论--】`)
allMessage +=`\n【--评论--】`
await save(`{"pid":0,"replyUserId":0,"replyId":0,"userId":1467410244909830146,"e":"d4bbc1e7-85d0-479b-8ffd-${randomString(12)}","content":"长安niubi","a":"1.0","b":"1","c":"4.1.1","tid":999999970972102,"d":"${timestamp}","f":"${randomString(32)}}","commId":0,"type":1}`)
await save(`{"pid":0,"replyUserId":0,"replyId":0,"userId":1467410244909830146,"e":"d4bbc1e7-85d0-479b-8ffd-${randomString(12)}","content":"长安niubi","a":"1.0","b":"1","c":"4.1.1","tid":999999970940186,"d":"${timestamp}","f":"${randomString(32)}}","commId":0,"type":1}`)
await save(`{"pid":0,"replyUserId":0,"replyId":0,"userId":1467410244909830146,"e":"d4bbc1e7-85d0-479b-8ffd-${randomString(12)}","content":"长安niubi","a":"1.0","b":"1","c":"4.1.1","tid":999999970958373,"d":"${timestamp}","f":"${randomString(32)}}","commId":0,"type":1}`)
await save(`{"pid":0,"replyUserId":0,"replyId":0,"userId":1467410244909830146,"e":"d4bbc1e7-85d0-479b-8ffd-${randomString(12)}","content":"长安niubi","a":"1.0","b":"1","c":"4.1.1","tid":999999970902964,"d":"${timestamp}","f":"${randomString(32)}}","commId":0,"type":1}`)
await save(`{"pid":0,"replyUserId":0,"replyId":0,"userId":1467410244909830146,"e":"d4bbc1e7-85d0-479b-8ffd-${randomString(12)}","content":"长安niubi","a":"1.0","b":"1","c":"4.1.1","tid":999999970903444,"d":"${timestamp}","f":"${randomString(32)}}","commId":0,"type":1}`)
await save(`{"pid":0,"replyUserId":0,"replyId":0,"userId":1467410244909830146,"e":"d4bbc1e7-85d0-479b-8ffd-${randomString(12)}","content":"长安niubi","a":"1.0","b":"1","c":"4.1.1","tid":999999970986252,"d":"${timestamp}","f":"${randomString(32)}}","commId":0,"type":1}`)




console.log(`\n【--点赞--】`)
allMessage +=`\n【--点赞--】`

await like(`{"a":"1.0","b":"1","c":"4.1.1","likeType":1,"e":"d4bbc1e7-85d0-479b-8ffd-${randomString(12)}","d":"${timestamp}","f":"${randomString(32)}}","entityId":999999970951410}`)
await like(`{"a":"1.0","b":"1","c":"4.1.1","likeType":1,"e":"d4bbc1e7-85d0-479b-8ffd-${randomString(12)}","d":"${timestamp}","f":"${randomString(32)}}","entityId":999999970917192}`)
await like(`{"a":"1.0","b":"1","c":"4.1.1","likeType":1,"e":"d4bbc1e7-85d0-479b-8ffd-${randomString(12)}","d":"${timestamp}","f":"${randomString(32)}}","entityId":999999970902417}`)
await like(`{"a":"1.0","b":"1","c":"4.1.1","likeType":1,"e":"d4bbc1e7-85d0-479b-8ffd-${randomString(12)}","d":"${timestamp}","f":"${randomString(32)}}","entityId":999999970920932}`)
await like(`{"a":"1.0","b":"1","c":"4.1.1","likeType":1,"e":"d4bbc1e7-85d0-479b-8ffd-${randomString(12)}","d":"${timestamp}","f":"${randomString(32)}}","entityId":999999970967873}`)

console.log(`\n【--分享--】`)
allMessage +=`\n【--分享--】`


await share(`{"a":"1.0","b":"1","c":"4.1.1","id":999999970932843,"e":"d4bbc1e7-85d0-479b-${randomString(12)}","d":"${timestamp}","f":"${randomString(32)}"}`)
await share(`{"a":"1.0","b":"1","c":"4.1.1","id":999999970989939,"e":"d4bbc1e7-85d0-479b-${randomString(12)}","d":"${timestamp}","f":"${randomString(32)}"}`)
await share(`{"a":"1.0","b":"1","c":"4.1.1","id":999999970910810,"e":"d4bbc1e7-85d0-479b-${randomString(12)}","d":"${timestamp}","f":"${randomString(32)}"}`)
await share(`{"a":"1.0","b":"1","c":"4.1.1","id":999999970908974,"e":"d4bbc1e7-85d0-479b-${randomString(12)}","d":"${timestamp}","f":"${randomString(32)}"}`)
await share(`{"a":"1.0","b":"1","c":"4.1.1","id":999999970913662,"e":"d4bbc1e7-85d0-479b-${randomString(12)}","d":"${timestamp}","f":"${randomString(32)}"}`)

            
console.log(`\n【--查询--】`)
allMessage +=`\n【--查询--】`
await info()	
             }
             else 
             if(data.code === 401){
             allMessage += `\n叼毛 Token失效了啊`
             console.log(`\n叼毛 Token失效了啊`)  
            
             }
          }
        
      } 
      }catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    })
  })
}

async function like(bizId) {
 return new Promise((resolve) => {
 body = `${bizId}`,

$.post(changan('app-m/prod-api/cms/like/like',body), async (err, resp, data) => {

      
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (safeGet(data)) {
            data = JSON.parse(data);
             if(data.code==200){

             console.log(`\n${data.msg}`)
             allMessage += `\n${data.msg}`
             }
            
             else if(data.code == 500){
            
             console.log(`\n${data.msg}`)   
             allMessage += `\n${data.msg}`
             }
             else if(data.code == 401){
            //allMessage += `\n${data.msg}`
             console.log(`\n${data.msg}`)    
             }
          }
        
      } 
      }catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    })
  })
}

async function save(bizId) {
 return new Promise((resolve) => {
 body = `${bizId}`,

$.post(changan('app-m/prod-api/cms/comment/save',body), async (err, resp, data) => {

      
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (safeGet(data)) {
            data = JSON.parse(data);
             if(data.code==200){

             console.log(`\n${data.msg}`)
              allMessage += `\n${data.msg}`
             }
            
             else if(data.code == 500){
            
             console.log(`\n${data.msg}`)   
             //allMessage += `\n${data.msg}`
             }
             else if(data.code == 401){
            //allMessage += `\n${data.msg}`
             console.log(`\n${data.msg}`)    
             }
          }
        
      } 
      }catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    })
  })
}

async function share(bizId) {
 return new Promise((resolve) => {
 body = `${bizId}`,

$.post(changan('app-m/prod-api/cms/article/app/share',body), async (err, resp, data) => {

      
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (safeGet(data)) {
            data = JSON.parse(data);
             if(data.code==200){

             console.log(`\n${data.msg}`)
             allMessage += `\n${data.msg}`
             }
            
             else if(data.code == 500){
            
             console.log(`\n${data.msg}`)   
             //allMessage += `\n${data.msg}`
             }
             else if(data.code == 401){
            //allMessage += `\n${data.msg}`
             console.log(`\n${data.msg}`)    
             }
          }
        
      } 
      }catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    })
  })
}





async function info() {
 return new Promise((resolve) => {

$.get(changanget('app-m/prod-api/scrm/user/info'), async (err, resp, data) => {

      
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (safeGet(data)) {
            data = JSON.parse(data);
             if(data.code==200){
          console.log(`\n积分：${data.data.point}`)
             allMessage += `\n积分：${data.data.point}`
             }
            
             else if(data.code == 500){
            
             console.log(`\n${data.msg}`)   
             //allMessage += `\n${data.msg}`
             }
             else if(data.code == 401){
            //allMessage += `\n${data.msg}`
             console.log(`\n${data.msg}`)    
             }
          }
        
      } 
      }catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    })
  })
}








function changanget(url) {
  return {

    url: `${host}${url}`,

    headers: {
'Connection':' Keep-Alive',
'Content-Type': 'application/json; charset=UTF-8',
'Accept': '*/*',
'Accept-Language':' zh-cn',
'Authorization': changanhd,
'Host': 'scrm.changan.com.cn',
'User-Agent': 'okhttp/4.9.1',
    }
  }
}


function changan(url,body) {
  return {

    url: `${host}${url}`,
    body:`${body}`,
    headers: {
'Connection':' Keep-Alive',
'Content-Type': 'application/json; charset=UTF-8',
'Accept': '*/*',
'Accept-Language':' zh-cn',
'Authorization': changanhd,
'Host': 'scrm.changan.com.cn',
'User-Agent': 'okhttp/4.9.1',
    }
  }
}
var randomRangeNumber = function(minNumber, maxNumber) {

var range = maxNumber - minNumber; //取值范围的差

var random = Math.random(); //小于1的随机数

return minNumber + Math.round(random * range); //最小数与随机数和取值范围求和，返回想要的随机数字

}

function randomString(e) {  
  e = e || 32;
  var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
  a = t.length,
  n = "";
  for (i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
  return n
}

function md5(s) {
        
         return crypto.createHash('md5').update(String(s)).digest('hex').toUpperCase();
    }
function singjiami(data,a,b) {
  let key = a;
  let iv = b;

 
  var cipherChunks = [];
  var cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
  cipher.setAutoPadding(true);
  cipherChunks.push(cipher.update(data, 'utf8', 'base64'));
  cipherChunks.push(cipher.final('base64'));
  return cipherChunks.join('');
}
function singjiemi(data,a,b){
 
 let key = a;
  let iv = b;

 
  var cipherChunks = [];
  var decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
  decipher.setAutoPadding(true);
  cipherChunks.push(decipher.update(data, 'base64', 'utf8'));
  cipherChunks.push(decipher.final('utf8'));
  return cipherChunks.join('');
}
function safeGet(data) {
  try {
    if (typeof JSON.parse(data) == "object") {
      return true;
    }
  } catch (e) {
    console.log(e);
    console.log(`京东服务器访问数据为空，请检查自身设备网络情况`);
    return false;
  }
}
function jsonParse(str) {
  if (typeof str == "string") {
    try {
      return JSON.parse(str);
    } catch (e) {
      console.log(e);
      $.msg($.name, '', '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie')
      return [];
    }
  }
}
//rsa



function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}


