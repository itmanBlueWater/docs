import{_ as u,a as _,b as g,c as f}from"./error-SR2GrdB0.js";import{_ as b}from"./aliyundrive-RM0_7Jqe.js";import{d as m,h as a,r as d,o as E,c as k,b as e,e as o,a as t,I as c,f as i,aw as v,_ as A}from"./app-0gd-jGPW.js";const x=e("h1",{id:"阿里云盘-open",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#阿里云盘-open","aria-hidden":"true"},"#"),o(" 阿里云盘 Open")],-1),w=e("div",{class:"hint-container tip"},[e("p",{class:"hint-container-title"},"提示"),e("p",null,"阿里云盘 open，使用的是官方授权 API 开发。")],-1),y={class:"hint-container info"},C=e("p",{class:"hint-container-title"},"阿里云盘会员",-1),B=e("strong",null,"阿里云盘会员：",-1),q={href:"https://www.aliyundrive.com/cpx/member?userCode=MzAwMDM1&disableNav=YES",target:"_blank",rel:"noopener noreferrer"},M=e("i",{class:"fa-solid fa-lightbulb fa-bounce",style:{color:"orange"}},null,-1),P={href:"https://www.aliyundrive.com/cpx/member?userCode=MzAwMDM1&disableNav=YES",target:"_blank",rel:"noopener noreferrer"},S=e("strong",null,"优惠券",-1),D={href:"https://www.aliyundrive.com/cpx/member?userCode=MzAwMDM1&disableNav=YES",target:"_blank",rel:"noopener noreferrer"},z=e("strong",null,"立即抢购",-1),F=e("mark",null,"仅 1 万份",-1),L=e("img",{src:u,alt:"vip2",style:{zoom:"30%"}},null,-1),I={class:"hint-container danger"},K=e("p",{class:"hint-container-title"},"请仔细阅读注意事项",-1),Q=e("li",null,[e("mark",null,[o("此工具获取的刷新令牌仅可以用于 "),e("strong",null,"阿里云盘开放平台"),o(" 存储挂载方式")])],-1),O=e("li",null,"AList 挂载时填写的 token 也应该是这个工具提供的，之前方式获取的不可以",-1),N=e("li",null,"暂不适用于其他，同时也仅限用于 Alist 使用",-1),R=e("strong",null,"Too Many Requests",-1),V=i('<ul><li>查看文件看视频下载不算，上述的分钟和次数是动态的</li><li>新增优化：<strong>只会在请求发现令牌过期时去刷新令牌，更新 重启 编辑如果令牌仍然有效则不会去刷新。</strong></li></ul><ol start="5"><li>在线播放视频提示：<strong><code>ExceedCapacityForbidden</code></strong> 错误，容量超限限制播放，需要扩容或者删除不必要的文件释放空间,<a href="#%E5%9B%9B%E3%80%81">查看详情</a></li><li><i class="fa-solid fa-seal-exclamation fa-beat" style="color:#ff0000;"></i> <strong><mark>请勿将阿里云盘进行公开分享，禁止帐号被多IP访问，若进行分享后帐号被冻结后果自负</mark> <i class="fa-solid fa-seal-exclamation fa-beat" style="color:#ff0000;"></i> 添加存储后请及时设置元信息等措施防止被{其他人/爬虫}恶意[访问/分享]导致帐号被冻结，其他云盘也一样防止被冻结/封号</strong></li><li>禁止使用阿里云盘搭建<mark>包括但不限于</mark> <strong><code>图床、软件床</code></strong> 和 <strong><code>视频外链到视频网站播放</code></strong> 等分发服务以及一些没有提到的不规范使用的方式，若违反被<code>冻结/封号</code>后果自负，并无法解除。</li></ol>',2),G={class:"hint-container danger"},J=e("p",{class:"hint-container-title"},"关于阿里云open的OAuth验证API无法连接",-1),W=e("p",null,[o("由于原api "),e("code",null,"https://api.nn.ci"),o("被sni阻断，导致国内无法连接的情况，故提供两个新的api供使用：")],-1),H=e("li",null,[e("code",null,"https://api-cf.nn.ci"),o(" (套了一层cloudflare)")],-1),U=e("code",null,"https://api.xhofe.top",-1),T={href:"https://www.asiayun.com/aff/QQCOOQKZ",target:"_blank",rel:"noopener noreferrer"},Y=e("li",null,[e("p",null,[o("需要将"),e("code",null,"aliyundrive_open"),o("后台配置中的"),e("code",null,"Oauth令牌链接"),o("更换为")]),e("ul",null,[e("li",null,[e("code",null,"https://api-cf.nn.ci/alist/ali_open/token")]),e("li",null,[e("code",null,"https://api.xhofe.top/alist/ali_open/token")]),e("li",null,[e("img",{src:"https://user-images.githubusercontent.com/56105412/245379419-bc90dd81-35d5-4773-952c-d160830efce8.png",alt:""})])])],-1),Z={href:"https://github.com/alist-org/alist/discussions/4572",target:"_blank",rel:"noopener noreferrer"},X=e("p",null,"是否可以自己搭建授权OAuth验证API？",-1),j={href:"https://api.nni.ci",target:"_blank",rel:"noopener noreferrer"},$=e("h2",{id:"刷新令牌",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#刷新令牌","aria-hidden":"true"},"#"),o(),e("strong",null,"刷新令牌")],-1),ee={href:"https://alist.nn.ci/tool/aliyundrive/request",target:"_blank",rel:"noopener noreferrer"},oe=i('<h4 id="获取示意图" tabindex="-1"><a class="header-anchor" href="#获取示意图" aria-hidden="true">#</a> <strong>获取示意图</strong></h4><p>以下两种方式都可以获得 <strong>refresh_token</strong></p><div class="image-preview"><img src="'+_+'" alt="Go to login" title="Go to login-登录云盘帐号"><img src="'+g+'" alt="Scan QrCode" title="Scan QrCode-扫描获取"></div><h2 id="根文件夹id" tabindex="-1"><a class="header-anchor" href="#根文件夹id" aria-hidden="true">#</a> <strong>根文件夹ID</strong></h2><p>默认为<code>root</code>，展示全部云盘内容，若只想展示某文件夹內内容，可以改为<code>file_id </code></p><p>打开阿里云盘官网，点击进入要设置的文件夹时点击 URL 后面的字符串</p>',6),te={href:"https://www.aliyundrive.com/drive/folder/5fe01e1830601baf774e4827a9fb8fb2b5bf7940",target:"_blank",rel:"noopener noreferrer"},ne=i('<p>这个文件夹的 file_id 即为 <code>5fe01e1830601baf774e4827a9fb8fb2b5bf7940</code></p><p><img src="'+b+'" alt="file_id"></p><br><h2 id="客户端-id-秘钥" tabindex="-1"><a class="header-anchor" href="#客户端-id-秘钥" aria-hidden="true">#</a> <strong>客户端 ID，秘钥</strong></h2><p>正常用户不需要填写为空即可，如果自己申请了官方授权也可以使用自己的进行填写，为空时默认使用 AList 提供的。</p><br><h2 id="秒传" tabindex="-1"><a class="header-anchor" href="#秒传" aria-hidden="true">#</a> <strong>秒传</strong></h2><ul><li><strong>v.3.22.1</strong> 版本 新增功能</li></ul><p>就是秒传，需要在挂载时，需要启用<code>秒传</code>，要秒传的前提是阿里云盘已经有这个文件才可以进行秒传否则就是普通的上传</p><p>秒传计算的是文件<code>sha1</code>值(应该没错)不需要你计算,你只需要上传即可上传好了会自动帮你计算然后上传完成</p>',10),ie={href:"https://www.yuque.com/aliyundrive/zpfszx/ezlzok#y7lyH",target:"_blank",rel:"noopener noreferrer"},le=e("strong",null,"秒传逻辑",-1),re=i('<hr><ul><li><strong>v.3.27.0</strong> 版本 增强秒传：可以直接通过复制方式来和<code>115网盘</code>进行相互秒传文件 <ul><li>前提是要从阿里云盘秒传到115的文件，115已经存在，否则就是正常复制任务。</li><li>如果将115的文件秒传到阿里云盘，需要将阿里云盘的秒传选项打开否则为正常模式上传</li></ul></li></ul><p>如果要使用秒传来上传文件建议在自己家用电脑本地搭建一个AList添加一个<code>本地存储</code>和<code>阿里云盘</code>进行复制秒传这样节省资源。</p><br><h2 id="移除方式" tabindex="-1"><a class="header-anchor" href="#移除方式" aria-hidden="true">#</a> <strong>移除方式</strong></h2><p>不进行设置默认是删除到回收站內了，如果空间不够需要自己手动清理回收站/若删错文件请前往阿里云盘官网客户端进行找回恢复</p><ul><li><strong>回收站</strong>：在AList删除后进入网盘回收站，会占用云盘空间，但是后期如果误删可以找回。</li><li><strong>删除</strong>：直接删除不会停留在回收站，不会占用云盘空间，但是后期如果误删不能找回。 <ul><li>注：请勿泄露自己阿里云盘Open获取的Token， <mark>若不小心泄露请立刻马上去 <a href="#%E6%89%93%E5%BC%80-%E9%98%BF%E9%87%8C%E4%BA%91%E7%9B%98-app-%E6%88%91%E7%9A%84-%E5%8F%B3%E4%B8%8A%E8%A7%92%E8%AE%BE%E7%BD%AE%E9%BD%BF%E8%BD%AE-%E9%9A%90%E7%A7%81%E8%AE%BE%E7%BD%AE-%E6%8E%88%E6%9D%83%E7%AE%A1%E7%90%86-%E7%82%B9%E5%87%BB-alist-%E8%BF%9B%E8%A1%8C%E6%9F%A5%E7%9C%8B"><strong>其他说明 ¹</strong></a> 解除授权,再重新扫码授权换新的刷新令牌，同时解除授权后之前获取的都会失效，以保护您账号的安全</mark></li></ul></li></ul><br><h2 id="云盘类型" tabindex="-1"><a class="header-anchor" href="#云盘类型" aria-hidden="true">#</a> <strong>云盘类型</strong></h2><p>云盘类型可以选择，可以自己的需求选择不同类型，使用 v3.25.1及以上版本的AList添加驱动时进行设置，默认选择的是<code>默认</code>类型</p><ul><li><p><strong>默认</strong>：有达人等级用户默认展示的是<code>资源库</code>内容，没有达人等级用户默认展示的是<code>备份盘</code>内容</p></li><li><p><strong>资源库</strong>：对应云盘的<code>资源库</code></p></li><li><p><strong>备份盘</strong>：对应云盘的<code>备份盘</code></p></li></ul><p>如果你云盘內没有上述提到的内容，需要登录一下阿里云盘手机端<code>4.9.0</code>以上的版本就可以看到</p><br><h2 id="livp-下载格式" tabindex="-1"><a class="header-anchor" href="#livp-下载格式" aria-hidden="true">#</a> <strong>Livp 下载格式</strong></h2><p>即 IOS<code>实况</code>照片因为非IOS系统无法解析，然后就无法下载，现根据自己的需求是需要<code>Jpeg</code>还是<code>Mov</code></p><ul><li>Jpeg：就是<code>实况</code>照片所展示的封面</li><li>Mov：长按<code>实况</code>照片的视频画面</li></ul><br><h2 id="内部上传" tabindex="-1"><a class="header-anchor" href="#内部上传" aria-hidden="true">#</a> <strong>内部上传</strong></h2><p>如果你部署 AList 的服务器是阿里云北京地区ECS，打开此开关可以提升文件上传速度。不符合要求的服务器请不要打开此开关，否则会出现无法上传的问题。</p><ul><li><strong>内部上传</strong>非北京地区的阿里云ECS可以使用吗？不能，因为阿里云盘在使用北京地区的对象存储</li></ul><br><h2 id="其他说明" tabindex="-1"><a class="header-anchor" href="#其他说明" aria-hidden="true">#</a> <strong>其他说明</strong></h2><h5 id="一、" tabindex="-1"><a class="header-anchor" href="#一、" aria-hidden="true">#</a> 一、</h5><blockquote><p>AList 仅获取了 云盘用户 (<strong>名称 头像 ¹</strong>)，(<strong>访问文件权限 ²</strong>)和(<strong>写入文件权限 ³</strong>)，未获取手机号权限</p><p>详情可以通过以下两种方式查看</p><ol><li><p>扫码获取刷新令牌时的<strong>提示</strong></p></li><li><h4 id="打开-阿里云盘-app-我的-右上角设置齿轮-隐私设置-授权管理-点击-alist-进行查看" tabindex="-1"><a class="header-anchor" href="#打开-阿里云盘-app-我的-右上角设置齿轮-隐私设置-授权管理-点击-alist-进行查看" aria-hidden="true">#</a> 打开 <strong>阿里云盘 APP --&gt; 我的 --&gt;右上角设置齿轮 --&gt; 隐私设置 --&gt; 授权管理 --&gt; 点击 AList</strong> 进行查看</h4><ul><li>若不使用了可以随时手动解除权限</li></ul></li></ol></blockquote><h5 id="二、" tabindex="-1"><a class="header-anchor" href="#二、" aria-hidden="true">#</a> 二、</h5><blockquote><p>默认使用的是阿里云盘自带播放器 - <strong>Aliyun Video Previewer</strong></p><p>上传到云盘的视频，会经过转码服务转成 H.264 编码的视频流。（好处是 IOS 可以播放了...嗯 应该是这样）</p><ul><li>新上传到云盘的视频，默认只预转码视频的前 30s。第一次播放时会触发完整的视频转码。转码后的视频会缓存，之后再次触发播放不需要重新转码。</li><li>不足 30s 的视频不会触发预转码，只会在第一次播放时开始转码。</li><li>实时转码需要一定时间。</li><li>画质分别为：LD|SD|HD|FHD|QHD</li></ul></blockquote><h5 id="三、" tabindex="-1"><a class="header-anchor" href="#三、" aria-hidden="true">#</a> 三、</h5><blockquote><p>Q：阿里云盘Open怎么看不了 Office 全家桶类型的文件</p><p>A：<s>因为阿里云盘未开放相关API故暂时无法查看</s>（敬请期待）</p></blockquote><h5 id="四、" tabindex="-1"><a class="header-anchor" href="#四、" aria-hidden="true">#</a> 四、</h5><blockquote><p>Q：在线播放阿里云盘视频无法播放，提示：<strong><code>ExceedCapacityForbidden</code></strong> 错误</p><p>A：<strong>用户容量超限</strong>，限制播放，需要扩容或者删除不必要的文件释放空间，在AList和阿里云盘官方APP分别如下图提示</p><img src="'+f+'" style="zoom:70%;"></blockquote><h5 id="五、" tabindex="-1"><a class="header-anchor" href="#五、" aria-hidden="true">#</a> 五、</h5><blockquote><p>Q：如何加载字幕？</p><p>A：阿里云盘open 需要使用 <strong>Aliyun Video Previewer</strong>播放器，然后暂时&quot;<strong>只支持转码 mkv 封装的 srt、vtt 文本格式字幕</strong>&quot;</p><ul><li>目前只支持转码 eng、jpn、chi 三种语言，其他语言会丢失</li></ul></blockquote><h2 id="默认使用的下载方式" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式" aria-hidden="true">#</a> <strong>默认使用的下载方式</strong></h2>',33),se=m({__name:"aliyundrive_open.html",setup(ae){const r=a("unknown"),s=a("unknown");return typeof fetch<"u"&&(async()=>{const l=await(await fetch(`${v()}/alist/ali_open/limit`)).json();r.value=l.minutes,s.value=l.max})(),(h,l)=>{const n=d("ExternalLinkIcon"),p=d("Mermaid");return E(),k("div",null,[x,w,e("div",y,[C,e("p",null,[B,e("a",q,[o("https://www.aliyundrive.com/cpx/member"),t(n)])]),e("ul",null,[e("li",null,[M,o(" 点击链接领取"),e("a",P,[S,t(n)]),o("，双11大促！历史底价！3折SVIP再送3个月。"),e("a",D,[z,t(n)]),o(" 3折SVIP再送3个月 "),F])]),L]),e("div",I,[K,e("ol",null,[Q,O,N,e("li",null,[o("同一 IP 在 "),e("mark",null,c(r.value),1),o(" 分钟内请求 "),e("mark",null,c(s.value),1),o(" 次，会出现 "),R,o(" 🚫避免滥用，请勿滥用🚫")])]),V]),e("div",G,[J,e("ol",null,[e("li",null,[W,e("ul",null,[H,e("li",null,[U,o(" (辽宁多线， 由"),e("a",T,[o("亚洲云"),t(n)]),o("赞助)")])])]),Y,e("li",null,[e("p",null,[o("查看详情："),e("a",Z,[o("https://github.com/alist-org/alist/discussions/4572"),t(n)])])]),e("li",null,[X,e("ul",null,[e("li",null,[o("暂时不可以，但是你可以反向代理"),e("a",j,[o("源站"),t(n)])])])])])]),$,e("p",null,[o("前往："),e("strong",null,[e("a",ee,[o("https://alist.nn.ci/tool/aliyundrive/request"),t(n)])])]),oe,e("p",null,[o("如 "),e("a",te,[o("https://www.aliyundrive.com/drive/folder/5fe01e1830601baf774e4827a9fb8fb2b5bf7940"),t(n)])]),ne,e("ul",null,[e("li",null,[o("使用的是阿里云盘官方API提供的接口，查看 👉 "),e("a",ie,[le,t(n)])])]),re,t(p,{id:"mermaid-417",code:"eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFREOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqzdCKo9Lc3c1NwUboKxsTGqCSYFFRBtpUnpRYkFGQqZKamGCtEKsWDRREMwlZqXAuVGGxsYxVpZWRXn56Ym5yQWF9sCQQ3EszWJRtFA3z7r2P5i3b6nS9ohRoBVuaSmKcC1wFxmaQZRYBj9bM6aZ3N2Pdm9+PmEtlhdPaDelw2derp2WA1MMoyGqAwN8iGoODknMzkbFJhKenr6KUWZZalFxfrJ+bm5+Xl6GSW5OcrlqUkpiWW6z9dOez51qRKSniQy9CQTrQcAkHnb9A=="})])}}}),ue=A(se,[["__file","aliyundrive_open.html.vue"]]);export{ue as default};
