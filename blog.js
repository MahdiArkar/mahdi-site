/* ===== Giscus config: fill after enabling Discussions on your GitHub repo (https://giscus.app) ===== */
var GISCUS={repo:'YOUR_USER/YOUR_REPO',repoId:'',category:'Announcements',categoryId:''};
(function(){
var R=document.documentElement,L=function(){return R.lang==='en'?'en':'fa'};
try{var t=localStorage.getItem('theme'),l=localStorage.getItem('lang')}catch(e){}
if(t!=='light'&&t!=='dark')t=matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';
R.setAttribute('data-theme',t);R.lang=l==='en'?'en':'fa';R.dir=R.lang==='en'?'ltr':'rtl';
var B=document.body,$=function(i){return document.getElementById(i)};
function save(k,v){try{localStorage.setItem(k,v)}catch(e){}}
function gis(m){var f=document.querySelector('iframe.giscus-frame');if(f)f.contentWindow.postMessage({giscus:{setConfig:m}},'https://giscus.app')}
function sync(){var en=L()==='en';document.title=B.dataset[en?'titleEn':'titleFa'];
$('langBtn').textContent=en?'فا':'EN';$('themeBtn').textContent=R.dataset.theme==='light'?'🌙':'☀️';
document.querySelectorAll('.code-h button').forEach(function(b){b.textContent=en?'Copy':'کپی'});
gis({theme:R.dataset.theme==='light'?'light':'dark_dimmed',lang:en?'en':'fa'})}
$('themeBtn').onclick=function(){var n=R.dataset.theme==='light'?'dark':'light';R.dataset.theme=n;save('theme',n);sync()};
$('langBtn').onclick=function(){var n=L()==='en'?'fa':'en';R.lang=n;R.dir=n==='en'?'ltr':'rtl';save('lang',n);sync()};
function bar(){var h=R.scrollHeight-innerHeight;$('bar').style.width=(h>0?scrollY/h*100:0)+'%'}
addEventListener('scroll',bar,{passive:true});
function init(){
document.querySelectorAll('pre>code').forEach(function(c){
 if(window.hljs)hljs.highlightElement(c);var p=c.parentNode,w=document.createElement('div');w.className='code';
 var h=document.createElement('div');h.className='code-h';var s=document.createElement('span');s.textContent=c.dataset.file||c.className.replace('language-','');
 var b=document.createElement('button');b.type='button';b.onclick=function(){navigator.clipboard.writeText(c.textContent).then(function(){var o=b.textContent;b.classList.add('ok');b.textContent='✓';setTimeout(function(){b.classList.remove('ok');b.textContent=o},1500)})};
 h.append(s,b);p.replaceWith(w);w.append(h,p)});
var box=$('giscus');
if(box){if(GISCUS.repoId){var g=document.createElement('script');g.src='https://giscus.app/client.js';g.async=true;g.crossOrigin='anonymous';
 g.dataset.repo=GISCUS.repo;g.dataset.repoId=GISCUS.repoId;g.dataset.category=GISCUS.category;g.dataset.categoryId=GISCUS.categoryId;g.dataset.mapping='pathname';
 g.dataset.reactionsEnabled='1';g.dataset.inputPosition='top';g.dataset.theme=R.dataset.theme==='light'?'light':'dark_dimmed';g.dataset.lang=L();box.append(g)}
 else box.innerHTML='<p style="color:var(--dim);font-family:var(--mono);font-size:13px">giscus not configured — edit GISCUS in blog.js</p>'}
sync();bar()}
var s=document.createElement('script');s.src='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js';
s.onload=init;s.onerror=init;document.head.append(s);
})();
