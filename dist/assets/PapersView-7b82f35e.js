import{_ as qe,b as p,H,u as Te,I as J,l as y,s as w,x as L,e as s,o as u,c as _,a as C,n as Se,k as G,f as l,w as n,g,t as V,F as S,r as U,i as k,h as W,M as D,p as Ue,m as Ie}from"./index-a5253b46.js";const ze=q=>(Ue("data-v-98ad606b"),q=q(),Ie(),q),Ee={style:{position:"relative",height:"102vh"}},Oe={style:{display:"inline-block",float:"right",width:"200px","margin-left":"10px"}},Be={style:{padding:"2px"},theme:"success",variant:"light"},De=ze(()=>C("span",{style:{float:"left","user-select":"none","margin-right":"8px"}},"创建试卷 ",-1)),Ke={style:{"min-height":"100px"},slot:"body"},Me={key:1,class:"tdesign-demo__select-empty-multiple"},Ye={key:1},Ne={key:0},$e={__name:"PapersView",setup(q){const K=p(null),I=p(0),i=H({page:1,search:"",time:[]}),Q={papername:[{required:!0,message:"试卷名称不能为空"}],classid:[{required:!0,message:"参考班级不能为空"}],starttime:[{required:!0,message:"开始时间不能为空"}],duration:[{required:!0,message:"时长不能为空"}]},T=p(!1),X=Te();p(1);const M=p(""),f=p([{label:"全选",checkAll:!0},{label:"T35",value:1},{label:"T36",value:2},{label:"T37",value:3},{label:"T38",value:4},{label:"T39",value:5},{label:"T40",value:6}]),c=p([]),Y=J(()=>{const t=[],e=c.value;for(let r=0,d=e.length;r<d;r++)e[r].value&&t.push(e[r].value);return t}),N=J(()=>{let t=0;return Object.keys(o.questions).forEach(e=>{t+=o.questions[e]}),t}),Z=(t,{current:e,type:r})=>{if(console.log(e),!e){c.value=r==="check"?f.value.slice(1):[];return}if(r==="check"){const d=f.value.find(x=>x.value===e);c.value.push(d)}else c.value=c.value.filter(d=>d.value!==e)},ee=(t,e)=>{console.log(t,e);const{trigger:r,index:d,item:x}=e;r==="clear"&&(c.value=[]),["tag-remove","backspace"].includes(r)&&c.value.splice(d,1)},te=(t,e)=>{console.log(t,e)},m=p(0),z=p([{paperid:1,papername:"第一条测试试卷",questions:`[\r
  "1697182447.215191",\r
  "1697182455.7710226",\r
  "1697182460.4997933",\r
  "1697182466.5208726",\r
  "1697182472.274864",\r
  "1697182478.4024422",\r
  "1697182484.2858622",\r
  "1697182491.1385913",\r
  "1697182502.916686",\r
  "1697182513.1574242",\r
  "1697182523.9296796",\r
  "1697182536.179753",\r
  "1697182548.0525",\r
  "1697182556.697243",\r
  "1697182565.346125",\r
  "1697182572.125598",\r
  "1697182584.0691957",\r
  "1697182592.7712471",\r
  "1697182602.657546",\r
  "1697182612.7260299",\r
  "1697182625.055601",\r
  "1697182639.1223602",\r
  "1697182651.017039",\r
  "1697182662.9913886",\r
  "1697182675.3650398",\r
  "1697182690.1543",\r
  "1697182701.2358558",\r
  "1697182715.3210168",\r
  "1697182729.3673716",\r
  "1697182742.6456878",\r
  "1697182753.112941",\r
  "1697182764.8161106",\r
  "1697182781.5966773",\r
  "1697182792.5887868",\r
  "1697182807.3700113",\r
  "1697182824.35289",\r
  "1697182834.4852557",\r
  "1697182844.3831558",\r
  "1697182858.3031824",\r
  "1697182869.1886208",\r
  "1697182880.4490285",\r
  "1697182909.0475578",\r
  "1697182923.2650566",\r
  "1697182933.1916134",\r
  "1697182944.2247226",\r
  "1697182956.553987",\r
  "1697182962.9953659",\r
  "1697182977.1483552",\r
  "1697182989.2608874",\r
  "1697183009.544582",\r
  "1697183021.0839071"\r
]`,creatorusername:"汤凯旋",totalscore:100,starttime:"2023-12-26T20:42:58.000+00:00",duration:1,classid:null}]);function E(){let t="";i.search!==""&&i.search!==void 0&&(t+="&search="+i.search),typeof i.time=="object"&&i.time.length>0&&(t+="&starttime="+i.time[0]+"&endtime="+i.time[1]),w.post("/paper/get?page="+i.page+t).then(e=>{console.log(e.data),I.value=e.data.total,z.value=e.data.list,z.value.forEach(r=>{r.starttime=y(r.starttime).format("YY年MM月DD日 HH:mm"),r.classid=[],r.paperClasses.forEach(d=>{r.classid.push(d.name)})})}).catch(e=>{console.error("There was an error!",e)})}E();const o=H({specia:1,papername:"",starttime:y().valueOf(),totalscore:100,duration:60,classid:Y,questions:{}}),O=p(!1);function $(){O.value=!0,f.value=[],c.value=[],w.get("/classInfo/getBySpeciaid?id="+o.specia).then(t=>{console.log(t.data),f.value=[{label:"全选",checkAll:!0}],t.data.forEach(e=>{f.value.push({label:e.name,value:e.id})})}).catch(t=>{console.error("There was an error!",t)}).finally(()=>{O.value=!1})}const A=p([]);w.get("/specia/getAll").then(t=>{console.log(t.data),A.value=t.data,o.specia=t.data[0].id,$()}).catch(t=>{console.error("There was an error!",t)});const P=p([]),ae=p({最近7天:y().add(7,"day"),最近3天:y().add(3,"day"),今天:y()});L(m,async(t,e)=>{t===1&&(typeof await K.value.validate()=="boolean"?w.get("/questionCourse/getCourseAndGroupBySpeciaid?id="+o.specia).then(r=>{console.log(r.data),P.value=r.data}).catch(r=>{console.error("There was an error!",r)}):(D.warning("请完整填写信息"),m.value=e))});function le(){if(Object.keys(o.questions).forEach(t=>{o.questions[t]<=0&&delete o.questions[t]}),Object.keys(o.questions).length===0)D.error("至少选择一个题目");else{let t={...o};t.questions=JSON.stringify(t.questions),t.classid=JSON.stringify(t.classid),w.post("/paper/add",t).then(e=>{console.log(e.data),E(),T.value=!1,D.success("创建成功"),m.value=0,o.questions={},o.papername=""}).catch(e=>{console.error("There was an error!",e)})}}L(i,()=>{E()});function ne(t){window.open("","","width=600 ,height=2000,top=100,left=600,location=no,menubar=no,status=no,titlebar=no,toolbar=no").document.write(`<img style="width: 100%" src='//pic.sherry.games/assets/paperImg/${t.paperid}.png'/>`)}return(t,e)=>{const r=s("t-icon"),d=s("t-button"),x=s("t-tag"),oe=s("t-pagination"),se=s("t-date-range-picker"),j=s("t-input"),re=s("t-link"),ie=s("t-base-table"),ue=s("t-card"),R=s("t-step-item"),de=s("t-steps"),h=s("t-form-item"),pe=s("t-date-picker"),B=s("t-input-number"),ce=s("t-radio"),me=s("t-radio-group"),_e=s("t-checkbox-group"),ge=s("chevron-down-icon"),fe=s("t-select-input"),he=s("t-form"),ve=s("t-list-item"),be=s("t-list"),ye=s("t-collapse-panel"),Ve=s("t-collapse"),ke=s("t-dialog");return u(),_("div",Ee,[C("div",{style:Se(`background-image: url('${G(X).darkT,"http://hbimg.huaban.com/8e149140bd05698de8174d7d575ef065263e42d818388b-4YqBxT"}');background-repeat: no-repeat;background-size: cover;min-height: 46vh;background-position-y: 44%;margin-top: -20px`)},null,4),l(ue,{bordered:!1,hoverShadow:"",style:{width:"96%",margin:"0 auto","margin-top":"-30px","min-height":"58vh"}},{default:n(()=>[C("div",null,[l(d,{size:"small",onClick:e[0]||(e[0]=a=>T.value=!0),theme:"primary"},{icon:n(()=>[l(r,{name:"add"})]),default:n(()=>[g(" 新建 ")]),_:1}),l(x,{variant:"light-outline",theme:"primary",style:{"margin-left":"6px"},shape:"round",size:"small"},{default:n(()=>[g("共有"+V(I.value)+"条记录",1)]),_:1}),C("div",Oe,[l(oe,{totalContent:!1,modelValue:i.page,"onUpdate:modelValue":e[1]||(e[1]=a=>i.page=a),theme:"simple",showPageSize:!1,size:"small",total:I.value},null,8,["modelValue","total"])]),l(se,{modelValue:i.time,"onUpdate:modelValue":e[2]||(e[2]=a=>i.time=a),presetsPlacement:"left",size:"small",style:{float:"right",width:"208px","margin-left":"10px"},clearable:""},null,8,["modelValue"]),l(j,{modelValue:i.search,"onUpdate:modelValue":e[3]||(e[3]=a=>i.search=a),modelModifiers:{lazy:!0},size:"small",style:{width:"20%",float:"right"},placeholder:"输入试卷名称",clearable:""},{suffixIcon:n(()=>[l(r,{style:{cursor:"pointer"},name:"search"})]),_:1},8,["modelValue"])]),l(ie,{size:"small","row-key":"index",data:z.value,columns:[{colKey:"paperid",title:"ID"},{colKey:"papername",title:"试卷名",ellipsis:!0},{colKey:"creatorusername",title:"创建者"},{colKey:"totalscore",title:"总分"},{colKey:"classid",title:"参考班级"},{colKey:"starttime",title:"开始时间",width:"150px"},{colKey:"duration",title:"考试时长"},{title:"操作",colKey:"operation"}]},{classid:n(({row:a})=>[(u(!0),_(S,null,U(a.classid,v=>(u(),_("span",Be,V(v),1))),256))]),operation:n(({row:a})=>[l(re,{theme:"primary",hover:"color",onClick:v=>ne(a)},{default:n(()=>[g(" 预览 ")]),_:2},1032,["onClick"])]),_:1},8,["data"])]),_:1}),l(ke,{visible:T.value,"onUpdate:visible":e[12]||(e[12]=a=>T.value=a),header:"创建试卷","destroy-on-close":"","confirm-btn":{content:"下一步",variant:"outline"},width:"640px","show-in-attached-element":!0,placement:"center",onConfirm:e[13]||(e[13]=()=>{m.value++})},{header:n(()=>[De,N.value>0?(u(),k(x,{key:0,style:{"margin-left":"10px","margin-right":"-60px"}},{default:n(()=>[g("已选:"+V(N.value),1)]),_:1})):W("",!0),l(de,{id:"setpicon",style:{"text-decoration":"none",width:"320px",margin:"0 auto","letter-spacing":"1px","user-select":"none"},class:"bbb",modelValue:m.value,"onUpdate:modelValue":e[4]||(e[4]=a=>m.value=a)},{default:n(()=>[l(R,{title:"基本信息"}),l(R,{title:"选择试题"})]),_:1},8,["modelValue"])]),footer:n(()=>[m.value>0?(u(),_("div",Ne,[l(d,{ghost:"",onClick:e[11]||(e[11]=a=>m.value--),theme:"primary"},{default:n(()=>[g(" 上一步 ")]),_:1}),l(d,{onClick:le,theme:"primary"},{default:n(()=>[g(" 完成 ")]),_:1})])):W("",!0)]),default:n(()=>[C("div",Ke,[m.value===0?(u(),k(he,{key:0,layout:"inline",ref_key:"form",ref:K,rules:Q,data:o,colon:!0,onReset:t.onReset,onSubmit:t.onSubmit},{default:n(()=>[l(h,{style:{width:"96%",margin:"8px 0"},label:"试卷名称",name:"papername"},{default:n(()=>[l(j,{modelValue:o.papername,"onUpdate:modelValue":e[5]||(e[5]=a=>o.papername=a),placeholder:"请输入内容",onEnter:t.onEnter},null,8,["modelValue","onEnter"])]),_:1}),l(h,{label:"开始时间",name:"starttime"},{default:n(()=>[l(pe,{style:{width:"216px","margin-right":"-16px"},"enable-time-picker":"","allow-input":"","disable-date":{before:G(y)().subtract(1,"day").format()},"value-type":"time-stamp",format:"YYYY-MM-DD a hh:mm:ss",modelValue:o.starttime,"onUpdate:modelValue":e[6]||(e[6]=a=>o.starttime=a),presets:ae.value},null,8,["disable-date","modelValue","presets"])]),_:1}),l(h,{style:{width:"10px"},label:"考试时长",name:"duration"},{default:n(()=>[l(B,{min:"1",style:{"margin-left":"-16px"},format:a=>`${a} 分钟`,modelValue:o.duration,"onUpdate:modelValue":e[7]||(e[7]=a=>o.duration=a)},null,8,["format","modelValue"])]),_:1}),l(h,{label:"专业",name:"specia"},{default:n(()=>[l(me,{onChange:$,modelValue:o.specia,"onUpdate:modelValue":e[8]||(e[8]=a=>o.specia=a)},{default:n(()=>[(u(!0),_(S,null,U(A.value,({id:a,name:v})=>(u(),k(ce,{value:a},{default:n(()=>[g(V(v),1)]),_:2},1032,["value"]))),256))]),_:1},8,["modelValue"])]),_:1}),l(h,{style:{width:"10px"},label:"总分",name:"totalscore"},{default:n(()=>[l(B,{min:"1",style:{"margin-left":"-16px"},format:a=>`${a} 分`,modelValue:o.totalscore,"onUpdate:modelValue":e[9]||(e[9]=a=>o.totalscore=a)},null,8,["format","modelValue"])]),_:1}),l(h,{style:{width:"100%"},label:"参考班级",name:"classid"},{default:n(()=>[l(fe,{inputValue:M.value,"onUpdate:inputValue":e[10]||(e[10]=a=>M.value=a),loading:O.value,value:c.value,clearable:"",multiple:"",onTagChange:ee,onInputChange:te},{panel:n(()=>[f.value.length?(u(),k(_e,{key:0,value:Y.value,options:f.value,class:"tdesign-demo__panel-options-multiple",onChange:Z},null,8,["value","options"])):(u(),_("div",Me,"暂无数据"))]),suffixIcon:n(()=>[l(ge)]),_:1},8,["inputValue","loading","value"])]),_:1})]),_:1},8,["data","onReset","onSubmit"])):(u(),_("div",Ye,[l(Ve,{"expand-mutex":"",borderless:""},{default:n(()=>[(u(!0),_(S,null,U(P.value,({id:a,name:v,questionGroups:xe})=>(u(),k(ye,{header:v},{default:n(()=>[l(be,{style:{"margin-top":"-20px"},split:"",size:"small"},{default:n(()=>[(u(!0),_(S,null,U(xe,({id:F,name:we,courseid:b})=>(u(),k(ve,null,{action:n(()=>[l(B,{min:"0",max:b??(b=0),modelValue:o.questions[F],"onUpdate:modelValue":Ce=>o.questions[F]=Ce,size:"small",autoWidth:""},null,8,["max","modelValue","onUpdate:modelValue"])]),default:n(()=>[g(V(we)+"("+V(b??(b=0))+") ",1)]),_:2},1024))),256))]),_:2},1024)]),_:2},1032,["header"]))),256))]),_:1})]))])]),_:1},8,["visible"])])}}},Pe=qe($e,[["__scopeId","data-v-98ad606b"]]);export{Pe as default};