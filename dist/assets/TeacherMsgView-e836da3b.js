import{_ as Y,u as F,b as h,H as G,s as g,e as s,o as m,c as U,f as a,w as l,a as y,n as H,k as O,M as p,i as v,g as i,F as W,r as J,t as b,G as Q}from"./index-a5253b46.js";const X={style:{position:"relative",height:"102vh"}},Z={style:{display:"inline-block",float:"right",width:"200px","margin-left":"10px"}},ee={__name:"TeacherMsgView",setup(te){const C=F(),w=h(),c=h({records:[{id:1,title:"这是一条通知",details:"这是通知详情",addtime:"2024-01-10T11:15:42.000+00:00"}],total:1,size:10,current:1,pages:1}),e=G({isUpdate:!1,selectedRowKeys:[],visible:!1,page:1,search:"",pojo:{userEmail:"",username:"",password:"$2a$10$YENaMAtoqC7WcVh0SAjcPOSM8kzCeklbYAYS3gDGHw/kzPDL9jRM6",grade:null,userImg:"no",defaultAddress:null,identity:2,classid:null}});function u(){g.get(`/user/selectLimit?page=${e.page}&identity=2&search=${e.search}`).then(n=>{c.value=n.data,console.log(n)})}const f=h([]);g.get("classInfo/getBySpeciaid").then(n=>{f.value=n.data}),u();async function K(){typeof await w.value.validate()=="boolean"&&g.post(`/user/${e.isUpdate?"update":"insert"}`,e.pojo).then(n=>{console.log(11121),console.log(n),u(),n.data>0?p.success((e.isUpdate?"修改":"新增")+"成功"):p.error((e.isUpdate?"修改":"新增")+"失败"),e.visible=!1})}function z(){if(e.selectedRowKeys.length>0){const n=Q({header:"提示",body:"您确认删除所选 "+e.selectedRowKeys.length+" 项数据吗？",confirmBtn:{content:"删除",theme:"danger"},cancelBtn:{content:"取消",variant:"outline"},onConfirm:({e:o})=>{V(e.selectedRowKeys),n.hide()}})}else p.error("请选择要删除的项")}function V(n){g.post("/user/deletes?ids="+n.toString()).then(o=>{console.log(o),u(),o.data>0?p.success("删除成功"):p.error("删除失败")})}function $(n){let o=f.value.find(r=>r.id==n);if(o!=null)return o.name}return(n,o)=>{const r=s("t-input"),d=s("t-form-item"),M=s("t-alert"),k=s("t-radio"),S=s("t-radio-group"),B=s("t-option"),I=s("t-select"),A=s("t-form"),E=s("t-dialog"),_=s("t-icon"),j=s("t-button"),D=s("t-tag"),R=s("t-space"),q=s("t-pagination"),x=s("t-link"),T=s("t-popconfirm"),P=s("t-table"),L=s("t-card");return m(),U("div",X,[a(E,{placement:"center",header:e.isUpdate?"编辑教师信息":"新增教师",visible:e.visible,"on-confirm":()=>K(),"on-close":()=>e.visible=!1},{default:l(()=>[a(A,{layout:"inline",ref_key:"form",ref:w,rules:{userEmail:[{required:!0,message:"邮箱不能为空"}],username:[{required:!0,message:"用户名不能为空"}],password:[{required:!0,message:"密码不能为空"}],grade:[{required:!0,message:"性别不能为空"}],defaultAddress:[{required:!0,message:"地址不能为空"}],classid:[{required:!0,message:"班级不能为空"}]},data:e.pojo,colon:!0},{default:l(()=>[a(d,{style:{width:"96%",margin:"8px 0"},label:"邮箱",name:"userEmail"},{default:l(()=>[a(r,{modelValue:e.pojo.userEmail,"onUpdate:modelValue":o[0]||(o[0]=t=>e.pojo.userEmail=t),placeholder:"请输入邮箱"},null,8,["modelValue"])]),_:1}),a(d,{style:{width:"96%",margin:"8px 0"},label:"用户名",name:"username"},{default:l(()=>[a(r,{modelValue:e.pojo.username,"onUpdate:modelValue":o[1]||(o[1]=t=>e.pojo.username=t),placeholder:"请输入用户名"},null,8,["modelValue"])]),_:1}),a(d,{style:{width:"96%",margin:"8px 0"},label:"密码",name:"password"},{default:l(()=>[e.isUpdate?(m(),v(M,{key:1,STYLE:"width: 100%;height: 40px;padding-top: 10px",theme:"warning",message:"你没有权限修改密码"})):(m(),v(r,{key:0,modelValue:e.pojo.password,"onUpdate:modelValue":o[2]||(o[2]=t=>e.pojo.password=t),placeholder:"请输入密码"},null,8,["modelValue"]))]),_:1}),a(d,{style:{width:"96%",margin:"8px 0"},label:"性别",name:"grade"},{default:l(()=>[a(S,{modelValue:e.pojo.grade,"onUpdate:modelValue":o[3]||(o[3]=t=>e.pojo.grade=t)},{default:l(()=>[a(k,{value:0},{default:l(()=>[i("男")]),_:1}),a(k,{value:1},{default:l(()=>[i("女")]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(d,{style:{width:"96%",margin:"8px 0"},label:"地址",name:"defaultAddress"},{default:l(()=>[a(r,{modelValue:e.pojo.defaultAddress,"onUpdate:modelValue":o[4]||(o[4]=t=>e.pojo.defaultAddress=t),placeholder:"请输入地址"},null,8,["modelValue"])]),_:1}),a(d,{style:{width:"96%",margin:"8px 0"},label:"班级",name:"classid"},{default:l(()=>[a(I,{modelValue:e.pojo.classid,"onUpdate:modelValue":o[5]||(o[5]=t=>e.pojo.classid=t)},{default:l(()=>[(m(!0),U(W,null,J(f.value,t=>(m(),v(B,{label:t.name,value:t.id,key:t.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["data"])]),_:1},8,["header","visible","on-confirm","on-close"]),y("div",{style:H([{"background-position":"center"},`background-image: url('${O(C).darkT?`//pic.sherry.games/assets/image/mobileback/th (${Math.round(Math.random()*30)}).jpg`:`//pic.sherry.games/assets/image/mobileback/th (${Math.round(Math.random()*30)}).jpg`}');background-repeat: no-repeat;background-size: cover;min-height: 46vh ;margin-top: -20px`])},null,4),a(L,{bordered:!1,hoverShadow:"",style:{width:"96%",margin:"0 auto","margin-top":"-30px","min-height":"58vh"}},{default:l(()=>[y("div",null,[a(R,{size:6},{default:l(()=>[a(j,{size:"small",onClick:o[6]||(o[6]=t=>{e.visible=!0,e.isUpdate=!1,n.$refs.form.reset()}),theme:"primary"},{icon:l(()=>[a(_,{name:"add"})]),default:l(()=>[i(" 新建 ")]),_:1}),a(j,{size:"small",onClick:z,theme:"danger"},{icon:l(()=>[a(_,{name:"delete"})]),default:l(()=>[i(" 删除 ")]),_:1}),a(D,{variant:"light-outline",theme:"primary",shape:"round",size:"small"},{default:l(()=>[i(" 共有"+b(c.value.total)+"条记录 ",1)]),_:1})]),_:1}),y("div",Z,[a(q,{totalContent:!1,onChange:u,modelValue:e.page,"onUpdate:modelValue":o[7]||(o[7]=t=>e.page=t),theme:"simple",showPageSize:!1,size:"small",total:c.value.total},null,8,["modelValue","total"])]),a(r,{onInput:o[8]||(o[8]=t=>{e.page=1,u()}),modelValue:e.search,"onUpdate:modelValue":o[9]||(o[9]=t=>e.search=t),modelModifiers:{lazy:!0},size:"small",style:{width:"20%",float:"right"},placeholder:"输入内容",clearable:""},{suffixIcon:l(()=>[a(_,{style:{cursor:"pointer"},name:"search"})]),_:1},8,["modelValue"])]),a(P,{size:"small","row-key":"userId","selected-row-keys":e.selectedRowKeys,"onUpdate:selectedRowKeys":o[10]||(o[10]=t=>e.selectedRowKeys=t),data:c.value.list,columns:[{colKey:"row-select",type:"multiple",width:60},{colKey:"userId",title:"ID"},{colKey:"userEmail",title:"邮箱",ellipsis:!0},{colKey:"username",title:"用户名"},{colKey:"grade",title:"性别"},{colKey:"defaultAddress",title:"地址"},{colKey:"classid",title:"班级"},{title:"操作",colKey:"operation"}]},{grade:l(({row:t})=>[i(b(t.grade==0?"男":"女"),1)]),classid:l(({row:t})=>[i(b($(t.classid)),1)]),operation:l(({row:t})=>[a(x,{onClick:N=>{e.visible=!0,e.isUpdate=!0,e.pojo={...t}},theme:"primary",hover:"color"},{default:l(()=>[i(" 修改 ")]),_:2},1032,["onClick"]),i("  "),a(T,{theme:"danger",confirmBtn:{theme:"danger"},onConfirm:N=>V(t.userId),cancelBtn:{variant:"outline"},content:"确认删除吗"},{default:l(()=>[a(x,{theme:"danger",hover:"color"},{default:l(()=>[i(" 删除 ")]),_:1})]),_:2},1032,["onConfirm"])]),_:1},8,["selected-row-keys","data"])]),_:1})])}}},ae=Y(ee,[["__scopeId","data-v-6945aa25"]]);export{ae as default};
