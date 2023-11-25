import{_ as h,a as p,b as g}from"./bd_share_test-L8ty9AKF.js";import{_,a as m,b}from"./motrix-ua-G29RqvO6.js";import{_ as f,r as a,o as x,c as q,b as t,e,a as l,w as o,f as i}from"./app-0gd-jGPW.js";const y={},A=i('<h1 id="百度网盘分享链接" tabindex="-1"><a class="header-anchor" href="#百度网盘分享链接" aria-hidden="true">#</a> 百度网盘分享链接</h1><p>挂载百度网盘分享链接，可供下载，无上传编辑等功能，api非官方。</p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> <strong>配置</strong></h2><p>百度网盘分享链接：surl，百度网盘分享密码：pwd</p><ol><li><p>浏览目录需设置<strong>百度网盘分享链接</strong>和<strong>百度网盘分享密码</strong>，下载还需设置BDUSS。</p></li><li><p><strong>百度网盘分享链接</strong>即为分享地址<code>pan.baidu.com/s/</code>后<code>?</code>前部分，<strong>百度网盘分享密码</strong>填4位提取码，无提取码留空。</p></li><li><p><strong>百度网盘分享链接</strong>和<strong>百度网盘分享密码</strong>可以随意账号填写，但是 <strong><code>BDUSS</code></strong> 参数的账号 必须使用 <mark><strong>百度超级SVIP会员</strong></mark> 才可以</p></li></ol><p><img src="'+h+'" alt=""></p><p>BDUSS由cookie中提取</p>',7),k={href:"http://pandownload.net/faq/cookie.html",target:"_blank",rel:"noopener noreferrer"},U=t("code",null,"BDUSS=",-1),v=t("li",null,[t("p",null,[e("方法2"),t("sup",null,"荐"),e("：")]),t("ul",null,[t("li",null,[t("img",{src:p,alt:"1",style:{zoom:"30%"}})])])],-1),S=i('<h2 id="根文件夹路径" tabindex="-1"><a class="header-anchor" href="#根文件夹路径" aria-hidden="true">#</a> <strong>根文件夹路径</strong></h2><p>要挂载的根文件夹，默认为<code>/</code></p><p>如果要写文件夹內其他的 请看下方的例子</p><p><img src="'+g+'" alt=""></p><h2 id="qa" tabindex="-1"><a class="header-anchor" href="#qa" aria-hidden="true">#</a> <strong>QA</strong></h2><table><thead><tr><th style="text-align:center;">出错配置</th><th style="text-align:left;">典型报错</th><th style="text-align:left;">修复说明</th></tr></thead><tbody><tr><td style="text-align:center;">surl</td><td style="text-align:left;"><code>{&quot;errno&quot;:2,&quot;errtype&quot;:0}</code></td><td style="text-align:left;">分享链接可能失效, 检查链接状态</td></tr><tr><td style="text-align:center;">pwd</td><td style="text-align:left;"><code>{&quot;errno&quot;:-130,&quot;errtype&quot;:&quot;mispwd-9&quot;}</code></td><td style="text-align:left;">分享密码错误</td></tr><tr><td style="text-align:center;">BDUSS</td><td style="text-align:left;"><code>{&quot;errno&quot;:9019,&quot;errmsg&quot;:&quot;need verify&quot;}</code></td><td style="text-align:left;">BDUSS无效</td></tr><tr><td style="text-align:center;">UA</td><td style="text-align:left;"><code>{&quot;error_code&quot;:31326,&quot;error_msg&quot;:&quot;user is not authorized, hitcode:119&quot;}</code></td><td style="text-align:left;">user-agent违反百度限制, 访问端需设置非浏览器UA(如netdisk)或开启Web代理</td></tr><tr><td style="text-align:center;">下载</td><td style="text-align:left;">Failed init storage: 200 OK; {&quot;errno&quot;:-130,&quot;</td><td style="text-align:left;">此链接分享内容可能因为涉及侵权、色情、低俗等信息，无法访问！</td></tr></tbody></table><h2 id="开发" tabindex="-1"><a class="header-anchor" href="#开发" aria-hidden="true">#</a> <strong>开发</strong></h2>',7),M={href:"https://github.com/yuantuo666/baiduwp-php",target:"_blank",rel:"noopener noreferrer"},w=t("p",null,"当前仅移植目录浏览和普通下载功能，欢迎继续开发。",-1),K=t("p",null,"因缺失官方文档，不排除存在一些兼容问题，可至github反馈，建议提供复现链接以供调试。",-1),B=t("p",null,"不能突破速度限制，请合理使用。",-1),C=t("h2",{id:"添加-user-agent-使用示例",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#添加-user-agent-使用示例","aria-hidden":"true"},"#"),e(),t("strong",null,'添加 "User-Agent" 使用示例')],-1),z={class:"hint-container danger"},W=i('<p class="hint-container-title">如果你不会设置 &quot;User-Agent&quot; 请看这里</p><p><mark>以下方法仅限于有百度超级会员用户使用</mark></p><p><mark>再次提示 以下方法仅限于有百度超级会员用户使用</mark></p><p>有会员改完 <strong><code>&quot;User-Agent&quot;</code></strong> 才会有用（选择官方和302）</p><p>如果不改 <strong><code>&quot;User-Agent&quot;</code></strong>，可以开启 <mark>Web代理</mark>，缺点是需要你搭建Alist的机器中转，也就是说你需要大宽带帮你中转</p>',5),F=t("ul",null,[t("li",null,"使用浏览器插件修改的好处是 可以直接在线播放，当然了下载也是可以的。")],-1),P={href:"https://www.bilibili.com/video/BV1UA4y1X7J8",target:"_blank",rel:"noopener noreferrer"},D={href:"https://youtu.be/PP6b0WSzYMc",target:"_blank",rel:"noopener noreferrer"},R=t("p",null,[t("img",{src:_,alt:"alist"})],-1),V=t("ol",null,[t("li",null,[t("p",null,[e("先照着下图设置好 "),t("strong",null,[t("code",null,'"User-Agent"')]),e("，然后在"),t("strong",null,"右下角"),e("的按钮选项，点击"),t("strong",null,"齿轮"),e("(本地设置)，配置好参数")])]),t("li",null,[t("p",null,[e("然后在右下角打开第三个按钮选项（"),t("strong",null,"打开复选框"),e("），打开后去列表选择我们要下载的文件，")])]),t("li",null,[t("p",null,[e("把我们需要下载的文件"),t("strong",null,"进行勾选"),e("，勾选好后下方会出现"),t("strong",null,"一排按钮"),e("，选择右侧第二个选项下载里面有一个"),t("strong",null,"发送到Aria2")])])],-1),J=t("p",null,[e("如果你使用了网页修改 "),t("strong",null,[t("code",null,'"User-Agent"')]),e("，可以不配置 "),t("mark",null,[t("strong",null,"Aria2")]),e(" 的"),t("code",null,"UA"),e("，直接推送到Aria2也能下载")],-1),N=t("p",null,[t("img",{src:m,alt:"alist"})],-1),Q=t("ol",null,[t("li",null,[t("p",null,[e("先照着下图设置好 "),t("strong",null,[t("code",null,'"User-Agent"')]),e("，然后在"),t("strong",null,"右下角"),e("的按钮选项，点击"),t("strong",null,"齿轮"),e("(本地设置)，配置好参数")])]),t("li",null,[t("p",null,[e("然后在右下角打开第三个按钮选项（"),t("strong",null,"打开复选框"),e("），打开后去列表选择我们要下载的文件，")])]),t("li",null,[t("p",null,[e("把我们需要下载的文件"),t("strong",null,"进行勾选"),e("，勾选好后下方会出现"),t("strong",null,"一排按钮"),e("，选择右侧第二个选项下载里面有一个"),t("strong",null,"发送到Aria2")])])],-1),E=t("p",null,[e("如果你使用了网页修改 "),t("strong",null,[t("code",null,'"User-Agent"')]),e("，可以不配置 "),t("mark",null,[t("strong",null,"Motrix")]),e(" 的"),t("code",null,"UA"),e("，直接推送到Aria2也能下载")],-1),G={href:"https://motrix.app/",target:"_blank",rel:"noopener noreferrer"},T={href:"https://github.com/agalwood/Motrix",target:"_blank",rel:"noopener noreferrer"},X=t("p",null,[t("img",{src:b,alt:"alist"})],-1),Y=t("h3",{id:"默认使用的下载方式",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#默认使用的下载方式","aria-hidden":"true"},"#"),e(),t("strong",null,"默认使用的下载方式")],-1);function Z(L,O){const n=a("ExternalLinkIcon"),d=a("Badge"),u=a("Tabs"),c=a("Mermaid");return x(),q("div",null,[A,t("ul",null,[t("li",null,[t("p",null,[e("方法1："),t("a",k,[e("参考教程"),l(n)]),e("(本项目中无需前缀"),U,e(")。")])]),v]),S,t("p",null,[e("接口来自"),t("a",M,[e("github.com/yuantuo666/baiduwp-php"),l(n)]),e("项目，非官方api。")]),w,K,B,C,t("div",z,[W,l(u,{id:"171",data:[{id:"网页插件"},{id:"Aria2"},{id:"Motrix"}],"tab-id":"ua"},{title0:o(({value:r,isActive:s})=>[e("网页插件")]),title1:o(({value:r,isActive:s})=>[e("Aria2")]),title2:o(({value:r,isActive:s})=>[e("Motrix")]),tab0:o(({value:r,isActive:s})=>[F,t("p",null,[e("例"),l(d,{text:"1",type:"info",vertical:"middle"}),e("：实在不会的可以看看一个Web网页端的例子： "),t("strong",null,[t("a",P,[e("https://www.bilibili.com/video/BV1UA4y1X7J8"),l(n)])])]),t("p",null,[e("例"),l(d,{text:"2",type:"info",vertical:"middle"}),e("：另一款插件方法涵盖360，Chrome，Edge： "),t("strong",null,[t("a",D,[e("https://youtu.be/PP6b0WSzYMc"),l(n)])])]),R]),tab1:o(({value:r,isActive:s})=>[V,J,N]),tab2:o(({value:r,isActive:s})=>[Q,E,t("ul",null,[t("li",null,[e("Motrix下载链接："),t("a",G,[e("Motrix官网"),l(n)]),e("，"),t("a",T,[e("Motrix-GitHub"),l(n)])])]),X]),_:1})]),Y,l(c,{id:"mermaid-253",code:"eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFREOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqzdCKo9Lc3c1NwUboKxsTGqCSYFFRBtpUnpRYkFGQqZKamGCtEKsWDRREMwlZqXAuVGGxsYxVpZWRXn56Ym5yQWF9sCQQ3EszWJRtFA3z7r2P5i3b6nS9ohRoBVuaSmKcC1wFxmaQZRYBj9bM6aZ3N2Pdm9+PmEtlhdPaDelw2derp2WA1MMoyGqAwN8iGoODknMzkbFJhKenr6KUWZZalFxfrJ+bm5+Xl6GSW5OcrlqUkpiWW6z9dOez51qRKSniQy9CQTrQcAkHnb9A=="})])}const $=f(y,[["render",Z],["__file","baidu_share.html.vue"]]);export{$ as default};
