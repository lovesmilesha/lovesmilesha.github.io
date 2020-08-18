(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{67:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return o}));var b=a(2),n=(a(0),a(87));const r={id:"sshloginserver",title:"\u79d8\u94a5\u767b\u5f55\u670d\u52a1\u5668",author:"flybird",author_title:"\u524d\u7aef\u5f00\u53d1 @ Tencent",author_url:"https://github.com/leosxie",author_image_url:"https://avatars3.githubusercontent.com/u/181152?s=60&v=4",tags:["Linux","ssh\u767b\u5f55\u670d\u52a1\u5668"]},s={permalink:"/blog/sshloginserver",editUrl:"https://github.com/leosxie/leosxie.github.io/tree/tcb/blog/blog/2020-08-18-server.md",source:"@site/blog/2020-08-18-server.md",description:"1. \u9996\u5148\u5728\u672c\u5730\u673a\u5668\u751f\u6210\u79d8\u94a5\u5bf9\uff0c\u76ee\u524d\u66f4\u63a8\u8350\u662f 4096\uff0c\u8ffd\u6c42\u66f4\u9ad8\u5b89\u5168\u6027\u63a8\u8350 ECC\uff0c\u6587\u4ef6\u540d\u79f0\u81ea\u5b9a\u4e49,\u6211\u8fd9\u91cc\u4ee5 ~/.ssh/id_rsa-remote-ssh \u4e3a\u4f8b",date:"2020-08-18T00:00:00.000Z",tags:[{label:"Linux",permalink:"/blog/tags/linux"},{label:"ssh\u767b\u5f55\u670d\u52a1\u5668",permalink:"/blog/tags/ssh\u767b\u5f55\u670d\u52a1\u5668"}],title:"\u79d8\u94a5\u767b\u5f55\u670d\u52a1\u5668",readingTime:.635,truncated:!0,nextItem:{title:"docusaurus \u642d\u5efa\u535a\u5ba2",permalink:"/blog/welcome"}},l=[],c={rightToc:l};function o({components:e,...t}){return Object(n.b)("wrapper",Object(b.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"\u9996\u5148\u5728\u672c\u5730\u673a\u5668\u751f\u6210\u79d8\u94a5\u5bf9\uff0c\u76ee\u524d\u66f4\u63a8\u8350\u662f 4096\uff0c\u8ffd\u6c42\u66f4\u9ad8\u5b89\u5168\u6027\u63a8\u8350 ECC\uff0c\u6587\u4ef6\u540d\u79f0\u81ea\u5b9a\u4e49,\u6211\u8fd9\u91cc\u4ee5 ",Object(n.b)("strong",{parentName:"li"},"~/.ssh/id_rsa-remote-ssh")," \u4e3a\u4f8b")),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-bash"}),"ssh-keygen -t rsa -b 4096 -f ~/.ssh/id_rsa-remote-ssh\n")),Object(n.b)("ol",{start:2},Object(n.b)("li",{parentName:"ol"},"\u5c06.pub \u6587\u4ef6\u7684\u5185\u5bb9\u590d\u5236\u5230 ",Object(n.b)("strong",{parentName:"li"},"~/.ssh/authorized_keys")," \u4e2d\u6267\u884c ",Object(n.b)("strong",{parentName:"li"},"ssh-copy-id")," \u547d\u4ee4\u5373\u53ef\uff0c\u628a ssh \u7684 pub \u5185\u5bb9\u76f4\u63a5\u590d\u5236\u5230\u670d\u52a1\u5668\u7684 authorized_keys \u4e2d \u7528\u6237\u540d")),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-bash"}),"ssh-copy-id -i ~/.ssh/id_rsa-remote-ssh  -p \u7aef\u53e3 \u7528\u6237\u540d@\u670d\u52a1\u5668ip\n")),Object(n.b)("ol",{start:3},Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"\u53d8\u66f4 ",Object(n.b)("strong",{parentName:"p"},"~/.ssh/config")," \u6587\u4ef6\u7684\u5185\u5bb9\uff0c\u5229\u7528 SSH \u7684\u7528\u6237\u914d\u7f6e\u6587\u4ef6\uff0c\u7b80\u5316\u7ba1\u7406 SSH \u4f1a\u8bdd"),Object(n.b)("blockquote",{parentName:"li"},Object(n.b)("p",{parentName:"blockquote"},"\u7528\u6237\u914d\u7f6e\u6587\u4ef6 (~/.ssh/config)\uff0c\u7cfb\u7edf\u914d\u7f6e\u6587\u4ef6 (/etc/ssh/ssh_config)")),Object(n.b)("table",{parentName:"li"},Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u914d\u7f6e"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u542b\u4e49"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Host"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u522b\u540d")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"HostName"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u4e3b\u673a\u540d")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"User"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u7528\u6237\u540d")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Port"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u767b\u5f55\u7aef\u53e3")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"IdentityFile"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u79d8\u94a5\u6587\u4ef6\u5b58\u653e\u5730\u5740")))))),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-bash"}),"cat ~/.ssh/config\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"\u52a0\u5165\u4ee5\u4e0b\u5185\u5bb9")),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-bash"}),"Host 192.168.1.3\n    HostName 192.168.1.1\n    User root\n    Port 22\n    IdentityFile ~/.ssh/id_rsa-remote-ssh\n")),Object(n.b)("ol",{start:3},Object(n.b)("li",{parentName:"ol"},"\u6539\u53d8\u670d\u52a1\u5668\u4e2d authorized_keys \u6587\u4ef6\u4ee5\u53ca.ssh \u76ee\u5f55\u7684\u6743\u9650")),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-bash"}),"chmod 600 ~/.ssh/authorized_keys\nchmod 700 -R ~/.ssh\n")),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-bash"}),"# \u6700\u540e ssh \u767b\u5f55\u670d\u52a1\u5668\u5373\u53ef\uff0c\u518d\u4e5f\u4e0d\u7528\u8f93\u5165\u5bc6\u7801\u548c\u7528\u6237\u540d\u4e86\nssh 192.168.1.3\n\n# \u9a8c\u8bc1\u5b8c\u6bd5\u53ef\u4ee5\u8003\u8651\u7981\u6b62\u7528\u6237\u540d\u767b\u5f55\uff0c\u4fdd\u8bc1\u5b89\u5168\n")))}o.isMDXComponent=!0}}]);