import{_ as R,u as I,b,H as Y,e as n,o as q,c as H,f as t,w as l,a as u,n as N,k as w,s as f,M as d,g as i,t as k,l as P,G as T}from"./index-a5253b46.js";const E={style:{position:"relative",height:"102vh"}},G={style:{display:"inline-block",float:"right",width:"200px","margin-left":"10px"}},A={__name:"SoftMsgView",setup(F){const V=I(),g=b(),c=b({records:[{id:1,title:"这是一条通知",details:"这是通知详情",addtime:"2024-01-10T11:15:42.000+00:00"}],total:1,size:10,current:1,pages:1}),e=Y({isUpdate:!1,selectedRowKeys:[],visible:!1,page:1,search:"",pojo:{title:"",details:""}});function r(){f.get(`/public/soft/page?page=${e.page}&size=10&search=${e.search}`).then(s=>{c.value=s.data,console.log(s)})}r();async function K(){typeof await g.value.validate()=="boolean"&&f.post(`/message/${e.isUpdate?"update":"insert"}`,e.pojo).then(s=>{console.log(11121),console.log(s),r(),s.data>0?d.success((e.isUpdate?"修改":"新增")+"成功"):d.error((e.isUpdate?"修改":"新增")+"失败"),e.visible=!1})}function z(){if(e.selectedRowKeys.length>0){const s=T({header:"提示",body:"您确认删除所选 "+e.selectedRowKeys.length+" 项数据吗？",confirmBtn:{content:"删除",theme:"danger"},cancelBtn:{content:"取消",variant:"outline"},onConfirm:({e:o})=>{_(e.selectedRowKeys),s.hide()}})}else d.error("请选择要删除的项")}function _(s){f.post("/message/delete",typeof s=="object"?s:[s]).then(o=>{console.log(o),r(),o.data>0?d.success("删除成功"):d.error("删除失败")})}return(s,o)=>{const m=n("t-input"),h=n("t-form-item"),x=n("t-form"),C=n("t-dialog"),p=n("t-icon"),y=n("t-button"),j=n("t-tag"),M=n("t-space"),U=n("t-pagination"),v=n("t-link"),$=n("t-popconfirm"),S=n("t-table"),B=n("t-card");return q(),H("div",E,[t(C,{placement:"center",header:e.isUpdate?"编辑通知":"新增通知",visible:e.visible,"on-confirm":()=>K(),"on-close":()=>e.visible=!1},{default:l(()=>[t(x,{layout:"inline",ref_key:"form",ref:g,rules:{title:[{required:!0,message:"标题不能为空"}],details:[{required:!0,message:"内容不能为空"}]},data:e.pojo,colon:!0},{default:l(()=>[t(h,{style:{width:"96%",margin:"8px 0"},label:"通知标题",name:"title"},{default:l(()=>[t(m,{modelValue:e.pojo.title,"onUpdate:modelValue":o[0]||(o[0]=a=>e.pojo.title=a),placeholder:"请输入内容"},null,8,["modelValue"])]),_:1}),t(h,{style:{width:"96%",margin:"8px 0"},label:"通知内容",name:"details"},{default:l(()=>[t(m,{modelValue:e.pojo.details,"onUpdate:modelValue":o[1]||(o[1]=a=>e.pojo.details=a),placeholder:"请输入内容"},null,8,["modelValue"])]),_:1})]),_:1},8,["data"])]),_:1},8,["header","visible","on-confirm","on-close"]),u("div",{style:N([{"background-position":"center"},`background-image: url('${w(V).darkT?`//pic.sherry.games/assets/image/mobileback/th (${Math.round(Math.random()*30)}).jpg`:`//pic.sherry.games/assets/image/mobileback/th (${Math.round(Math.random()*30)}).jpg`}');background-repeat: no-repeat;background-size: cover;min-height: 46vh ;margin-top: -20px`])},null,4),t(B,{bordered:!1,hoverShadow:"",style:{width:"96%",margin:"0 auto","margin-top":"-30px","min-height":"58vh"}},{default:l(()=>[u("div",null,[t(M,{size:6},{default:l(()=>[t(y,{size:"small",onClick:o[2]||(o[2]=a=>{e.visible=!0,e.isUpdate=!1,s.$refs.form.reset()}),theme:"primary"},{icon:l(()=>[t(p,{name:"add"})]),default:l(()=>[i(" 新建 ")]),_:1}),t(y,{size:"small",onClick:z,theme:"danger"},{icon:l(()=>[t(p,{name:"delete"})]),default:l(()=>[i(" 删除 ")]),_:1}),t(j,{variant:"light-outline",theme:"primary",shape:"round",size:"small"},{default:l(()=>[i(" 共有"+k(c.value.total)+"条记录 ",1)]),_:1})]),_:1}),u("div",G,[t(U,{totalContent:!1,onChange:r,modelValue:e.page,"onUpdate:modelValue":o[3]||(o[3]=a=>e.page=a),theme:"simple",showPageSize:!1,size:"small",total:c.value.total},null,8,["modelValue","total"])]),t(m,{onInput:o[4]||(o[4]=a=>{e.page=1,r()}),modelValue:e.search,"onUpdate:modelValue":o[5]||(o[5]=a=>e.search=a),modelModifiers:{lazy:!0},size:"small",style:{width:"20%",float:"right"},placeholder:"输入内容",clearable:""},{suffixIcon:l(()=>[t(p,{style:{cursor:"pointer"},name:"search"})]),_:1},8,["modelValue"])]),t(S,{size:"small","row-key":"id","selected-row-keys":e.selectedRowKeys,"onUpdate:selectedRowKeys":o[6]||(o[6]=a=>e.selectedRowKeys=a),data:c.value.records,columns:[{colKey:"row-select",type:"multiple",width:60},{colKey:"id",title:"ID"},{colKey:"name",title:"名称",ellipsis:!0},{colKey:"particulars",title:"详细介绍",ellipsis:!0},{colKey:"images",title:"图片",ellipsis:!0},{colKey:"icon",title:"图标",ellipsis:!0},{colKey:"size",title:"大小",ellipsis:!0},{colKey:"quantity",title:"下载量",ellipsis:!0},{colKey:"addtime",title:"创建时间"},{title:"操作",colKey:"operation"}]},{addtime:l(({row:a})=>[i(k(w(P)(a.addtime).format("YYYY-MM-DD HH:mm:ss")),1)]),operation:l(({row:a})=>[t(v,{onClick:D=>{e.visible=!0,e.isUpdate=!0,e.pojo={...a}},theme:"primary",hover:"color"},{default:l(()=>[i(" 修改 ")]),_:2},1032,["onClick"]),i("  "),t($,{theme:"danger",confirmBtn:{theme:"danger"},onConfirm:D=>_(a.id),cancelBtn:{variant:"outline"},content:"确认删除吗"},{default:l(()=>[t(v,{theme:"danger",hover:"color"},{default:l(()=>[i(" 删除 ")]),_:1})]),_:2},1032,["onConfirm"])]),_:1},8,["selected-row-keys","data"])]),_:1})])}}},L=R(A,[["__scopeId","data-v-88f093ee"]]);export{L as default};
