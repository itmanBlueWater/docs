import{d as C,h as w,u as e,o as r,F as s,w as _,e as c,I as n,b as a,au as x,a as d,b4 as P,N as m,aw as S,b5 as I,b6 as V,_ as N,r as B,c as T}from"./app-66272fcb.js";import{N as b}from"./Alert-423996c2.js";import{N as z}from"./Input-add561fc.js";import"./browser-e37b3450.js";const p=o=>(I("data-v-3b026d87"),o=o(),V(),o),F=p(()=>a("b",null,"client_id: ",-1)),G=p(()=>a("b",null,"client_secret: ",-1)),K=p(()=>a("b",null,"redirect_uri: ",-1)),$=p(()=>a("b",null,"refresh_token:",-1)),j="iYCeC9g08h5vuP9UqvPHKKSVrKFXGa1v",E="jXiFMOPVPCWlO2M5CwWQzffpNPaGTRBG",M="https://alist.nn.ci/tool/baidu/callback",O=C({__name:"Callback",setup(o){const i=new URL(window.location.href),u=i.searchParams.get("code"),l=i.searchParams.get("error"),y=i.searchParams.get("error_description"),t=w();return u&&!l&&(async()=>{const f=await(await fetch(`${S()}/alist/baidu/get_refresh_token?code=${u}`)).json();t.value=f})(),(g,f)=>!e(u)||e(l)?(r(),s(e(b),{key:0,title:e(l)||"Error",type:"error"},{default:_(()=>[c(n(e(y)),1)]),_:1},8,["title"])):(r(),s(e(m),{key:1,vertical:"",size:"large"},{default:_(()=>{var v,h,k;return[a("p",null,[F,c(n(j))]),a("p",null,[G,c(n(E))]),a("p",null,[K,c(n(M))]),(v=t.value)!=null&&v.error||(h=t.value)!=null&&h.error_description?(r(),s(e(b),{key:0,title:(k=t.value)==null?void 0:k.error,type:"error"},{default:_(()=>[c(n(t.value.error_description),1)]),_:1},8,["title"])):x("v-if",!0),d(e(m),{vertical:""},{default:_(()=>[$,t.value?(r(),s(e(z),{key:1,type:"textarea",autosize:"",readonly:"",value:t.value.refresh_token},null,8,["value"])):(r(),s(e(P),{key:0}))]),_:1})]}),_:1}))}});const R=N(O,[["__scopeId","data-v-3b026d87"],["__file","Callback.vue"]]),U=C({__name:"callback.html",setup(o){return(i,u)=>{const l=B("NaiveClient");return r(),T("div",null,[d(l,null,{default:_(()=>[d(e(R))]),_:1})])}}}),H=N(U,[["__file","callback.html.vue"]]);export{H as default};