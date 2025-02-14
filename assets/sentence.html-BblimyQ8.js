import{_ as c,r as l,c as r,e as n,w as a,a as t,o as p,b as e,d as s}from"./app-CWeFrRjJ.js";const h={},u=t('<h2 id="表达式和语句" tabindex="-1"><a class="header-anchor" href="#表达式和语句"><span>表达式和语句</span></a></h2><div class="custom-container tip"><p class="custom-container-title">名词解释</p><p>表达式是一组代码的集合，Javascript解释器会将其计算出一个结果</p><p>语句是js整句或命令，js语句是以分号结束</p></div><div class="custom-container warning"><p class="custom-container-title">表达式和语句区别</p><p>表达式计算出一个值，但语句用来自行以使某件事发生（做什么事）</p></div><h2 id="流程控制语句" tabindex="-1"><a class="header-anchor" href="#流程控制语句"><span>流程控制语句</span></a></h2><h3 id="顺序" tabindex="-1"><a class="header-anchor" href="#顺序"><span>顺序</span></a></h3><p>流程按照线性顺序执行</p><h3 id="分支" tabindex="-1"><a class="header-anchor" href="#分支"><span>分支</span></a></h3><h4 id="if分支语句" tabindex="-1"><a class="header-anchor" href="#if分支语句"><span>if分支语句</span></a></h4>',8),o=e("div",{class:"language-text line-numbers-mode","data-highlighter":"prismjs","data-ext":"text","data-title":"text"},[e("pre",null,[e("code",null,[e("span",{class:"line"},"if(条件){"),s(`
`),e("span",{class:"line"},"	满足条件执行的代码"),s(`
`),e("span",{class:"line"},"}"),s(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),v=e("div",{class:"language-text line-numbers-mode","data-highlighter":"prismjs","data-ext":"text","data-title":"text"},[e("pre",null,[e("code",null,[e("span",{class:"line"},"if(条件){"),s(`
`),e("span",{class:"line"},"	满足条件要执行的代码"),s(`
`),e("span",{class:"line"},"}"),s(`
`),e("span",{class:"line"},"else {"),s(`
`),e("span",{class:"line"},"	不满足条件执行的代码"),s(`
`),e("span",{class:"line"},"}"),s(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),m=t(`<h4 id="三元运算符" tabindex="-1"><a class="header-anchor" href="#三元运算符"><span>三元运算符</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">条件?满足条件执行的代码:不满足条件执行的代码</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="switch语句" tabindex="-1"><a class="header-anchor" href="#switch语句"><span>switch语句</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">switch(条件){</span>
<span class="line">	case 值1:</span>
<span class="line">		代码1</span>
<span class="line">		break</span>
<span class="line">	case 值2</span>
<span class="line">		代码2</span>
<span class="line">		break</span>
<span class="line">	case 值3</span>
<span class="line">		代码3</span>
<span class="line">		break</span>
<span class="line">	default</span>
<span class="line">		代码n</span>
<span class="line">		break        </span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="循环" tabindex="-1"><a class="header-anchor" href="#循环"><span>循环</span></a></h3><div class="custom-container danger"><p class="custom-container-title">终止条件</p><p>循环一定要有终止条件，否则会死循环</p></div><h4 id="while" tabindex="-1"><a class="header-anchor" href="#while"><span>while</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">while(循环条件){</span>
<span class="line">	要重复执行的代码(循环体)</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="for" tabindex="-1"><a class="header-anchor" href="#for"><span>for</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">for(声明记录循环次数的变量;循环条件；变化值){</span>
<span class="line">	循环体</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="循环结束" tabindex="-1"><a class="header-anchor" href="#循环结束"><span>循环结束</span></a></h4><p>continue: 结束本次循环，继续下次循环</p><p>break:跳出循环</p>`,13);function b(x,g){const i=l("CodeGroupItem"),d=l("CodeGroup");return p(),r("div",null,[u,n(d,null,{default:a(()=>[n(i,{title:"单层"},{default:a(()=>[o]),_:1}),n(i,{title:"双层"},{default:a(()=>[v]),_:1})]),_:1}),m])}const _=c(h,[["render",b],["__file","sentence.html.vue"]]),k=JSON.parse('{"path":"/js/sentence.html","title":"语句","lang":"zh-CN","frontmatter":{"title":"语句"},"headers":[{"level":2,"title":"表达式和语句","slug":"表达式和语句","link":"#表达式和语句","children":[]},{"level":2,"title":"流程控制语句","slug":"流程控制语句","link":"#流程控制语句","children":[{"level":3,"title":"顺序","slug":"顺序","link":"#顺序","children":[]},{"level":3,"title":"分支","slug":"分支","link":"#分支","children":[]},{"level":3,"title":"循环","slug":"循环","link":"#循环","children":[]}]}],"git":{},"filePathRelative":"js/sentence.md"}');export{_ as comp,k as data};
