/* CARELIKA Mask Lab - app logic.
   Data: data.js (protocols, mixing, range, textures, tools), photos.js (product photos),
   site.js (names and pages on carelikacosmetics.com), i18n.js (EN ES DE RU LV texts, generated from i18n/*.json). */
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const store={
  get(k,d){try{const v=localStorage.getItem("carelika.pg."+k);return v==null?d:JSON.parse(v)}catch(e){return d}},
  set(k,v){try{localStorage.setItem("carelika.pg."+k,JSON.stringify(v))}catch(e){}}
};
const UTM="utm_source=mask-lab-app&utm_medium=app&utm_campaign=pro-guide";
const SHOP="https://carelikacosmetics.com";

/* ---------- language ---------- */
const LANG_ORDER=["en","es","de","ru","lv"].filter(l=>LANGS[l]);
let LANG=store.get("lang",null);
if(!LANGS[LANG]){const nav=(navigator.languages||[navigator.language||"en"]).map(l=>String(l).slice(0,2).toLowerCase());LANG=nav.find(l=>LANGS[l])||"en"}
function t(k,v){
  let s=LANGS[LANG][k];if(s==null)s=LANGS.en[k];if(s==null)s=k;
  if(v)for(const x in v)s=s.split("{"+x+"}").join(v[x]);
  return s;
}
const tmin=s=>String(s).replace(/min\b/,t("js.min"));
const proUrl=()=>SHOP+"/pages/professional-registration?"+UTM+"&utm_content="+LANG;
/* copy translated content into the data objects (English stays the fallback) */
function applyContent(){
  for(const k in D){D[k].name=t(`D.${k}.name`);D[k].c.forEach((c,i)=>{c.l=t(`D.${k}.c.${i}.l`);c.g=t(`D.${k}.c.${i}.g`);if(c.z)c.z=t(`D.${k}.c.${i}.z`)})}
  for(const k in SKIN){SKIN[k].note=t(`SKIN.${k}.note`);SKIN[k].teach=t(`SKIN.${k}.teach`)}
  NEEDS.forEach((n,i)=>{n.label=t(`NEEDS.${i}.label`);n.teach=t(`NEEDS.${i}.teach`);n.items.forEach((it,j)=>it[2]=t(`NEEDS.${i}.items.${j}`))});
  CLINIC.forEach((c,i)=>{c.t=t(`CLINIC.${i}.t`);c.s=t(`CLINIC.${i}.s`);c.clear=t(`CLINIC.${i}.clear`);c.avoid=c.avoid.map((x,j)=>t(`CLINIC.${i}.avoid.${j}`));c.use=c.use.map((x,j)=>t(`CLINIC.${i}.use.${j}`))});
  for(const k in MIX)MIX[k].why=t(`MIX.${k}.why`);
  for(const k in TEXTURES){const x=TEXTURES[k];x.label=t(`TEX.${k}.label`);x.sub=t(`TEX.${k}.sub`);x.off=t(`TEX.${k}.off`)}
}
function applyStatic(){
  document.documentElement.lang=LANG;
  document.querySelectorAll("[data-i18n]").forEach(e=>e.innerHTML=t(e.dataset.i18n));
  document.querySelectorAll("[data-i18n-ph]").forEach(e=>e.placeholder=t(e.dataset.i18nPh));
  document.querySelectorAll("#presets [data-m]").forEach(b=>b.textContent=t("t.preset",{n:b.dataset.m}));
  document.querySelectorAll("a[data-pro]").forEach(a=>a.href=proUrl());
  $("#searchbtn").setAttribute("aria-label",t("nav.search"));$("#timerbtn").setAttribute("aria-label",t("nav.timer"));$("#langbtn").setAttribute("aria-label",t("nav.lang"));
  $("#langcode").textContent=LANG.toUpperCase();
  $("#langs").innerHTML=LANG_ORDER.map(l=>'<button type="button" class="langopt" data-lang="'+l+'" aria-pressed="'+(l===LANG)+'"><b>'+l.toUpperCase()+'</b><span>'+esc(LANGS[l]["lang.name"])+'</span></button>').join("");
}
function setLang(l){if(!LANGS[l])return;LANG=l;store.set("lang",l);renderAll()}

/* ---------- names, photos, site links: always the name used on carelikacosmetics.com ---------- */
const siteOf=n=>SITE[String(n).toLowerCase()]||null;
const isPro=n=>{const s=siteOf(n);return !!(s&&/ Professional$/.test(s.t))};
const dn=n=>{const s=siteOf(n);return s?s.t.replace(/ Professional$/,"").replace(/\s+/g," "):n};
const siteUrl=n=>{const s=siteOf(n);return s?SHOP+"/products/"+s.h+"?"+UTM:null};
function photoOf(name){return PHOTO[String(name).toLowerCase()]||null}
function pic(name,cls){
  const p=photoOf(name);
  return p?'<img class="'+cls+'" src="'+p+'" alt="CARELIKA '+esc(dn(name))+'" loading="lazy">'
          :'<div class="'+cls+' noimg"><img src="img/logo.png" alt=""></div>';
}
const proTag=n=>isPro(n)?'<span class="tag">'+t("js.prosize")+'</span>':'';
const link=(u,txt)=>'<a class="lnk" href="'+u+'" target="_blank" rel="noopener">'+esc(txt||t("js.view"))+' '+I.ext+'</a>';
const siteLink=n=>{const u=siteUrl(n);return u?link(u):''};
function texOf(n){if(!/mask|patch|peel off|alginate/i.test(n))return null;for(const [re,k] of TEXTURE_RULES)if(re.test(n))return TEXTURES[k];return null}
const texChip=n=>{const x=texOf(n);return x?'<div class="tex"><img src="'+x.img+'" alt="" loading="lazy"><div><b>'+esc(x.label)+'</b><span>'+esc(x.off)+'</span></div></div>':''};
const tool=k=>TOOLS[k];
const toolUrl=k=>SHOP+"/products/"+TOOLS[k].h+"?"+UTM;
const vesKey=v=>v==="Shaker"?"shaker":"bowl";

/* ---------- icons (one set, 24px line, used everywhere) ---------- */
const I={
  clock:'<svg viewBox="0 0 24 24"><circle cx="12" cy="13.5" r="7.5"/><path d="M12 9.5v4l2.5 2M9.5 2.5h5M12 2.5V6"/></svg>',
  star:'<svg viewBox="0 0 24 24"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z"/></svg>',
  ext:'<svg viewBox="0 0 24 24"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>',
  bowl:'<svg viewBox="0 0 24 24"><path d="M3.5 12h17c0 4.7-3.8 8-8.5 8s-8.5-3.3-8.5-8z"/><path d="M14.5 12l5.5-8"/></svg>',
  arrow:'<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'
};

/* ---------- lookups ---------- */
const MASKCAT={};
RANGE.forEach((r,ri)=>r[2].forEach(it=>{MASKCAT[it[0].toLowerCase()]={ci:ri,mk:r[1],name:it[0],pack:it[1],price:it[2],sku:it[3]}}));
const catName=i=>t(`RANGE.${i}`);
const MASKS=RANGE.reduce((a,r)=>a+r[2].length,0);
const PROTOS=Object.keys(D).reduce((a,k)=>a+D[k].c.length,0);
let USE={};
function buildUse(){
  USE={};
  const note=(name,type,concern,lead)=>{const k=name.toLowerCase();(USE[k]=USE[k]||{name:name,rows:[]}).rows.push({type,concern,lead})};
  Object.keys(D).forEach(k=>D[k].c.forEach(c=>{
    note(c.sp,D[k].name,c.l,true);c.sa.forEach(s=>note(s,D[k].name,c.l,false));
    note(c.mp,D[k].name,c.l,true);c.ma.forEach(m=>note(m,D[k].name,c.l,false));
  }));
}
const mins=x=>{const m=/(\d+)/.exec(x||"");return m?+m[1]:15};
function cnt(n){const f=new Intl.PluralRules(LANG).select(n);return n+" "+(LANGS[LANG]["js.products."+f]||(f==="one"?t("js.product"):t("js.products")))}
const mixLine=m=>esc(m.ratio)+' · '+m.p+' '+t("js.g")+' : '+m.w+' '+t("js.ml")+' · '+esc(m.temp)+' · '+esc(tmin(m.time))+' · '+(m.ves==="Shaker"?t("js.waterfirst"):t("js.powderfirst"));
function timerBtn(m,label,small){
  return '<button type="button" class="cta'+(small?' sm':'')+'" data-timer="'+mins(m.time)+'" data-label="'+esc(dn(label))+'">'+I.clock+esc(t("js.start",{n:mins(m.time)}))+'</button>';
}

/* ---------- saved ---------- */
let SAVED=store.get("saved",[]);
const savedKey=(a,c)=>a+"|"+c;
function isSaved(k){return SAVED.indexOf(k)>-1}
function toggleSaved(k){SAVED=isSaved(k)?SAVED.filter(x=>x!==k):[k].concat(SAVED);store.set("saved",SAVED);buildHome()}
function savedItems(){return SAVED.map(k=>{const [a,c]=k.split("|");const d=D[a]&&D[a].c[+c];return d?{t:a,c:+c,d}:null}).filter(Boolean)}
function savedHTML(items){return items.map(x=>
  '<button type="button" class="savedp" data-open="'+x.t+'|'+x.c+'">'+pic(x.d.mp,"ph")+
  '<div class="bd"><b>'+esc(D[x.t].name)+' · '+esc(x.d.l)+'</b><span>'+esc(dn(x.d.sp))+' + '+esc(dn(x.d.mp))+'</span></div>'+I.arrow+'</button>').join("")}

/* ---------- 0. home ---------- */
const SIGNATURE=["Algae Peel Off Mask Cryogenic Complex","Algae Peel Off Mask Marine Collagen","Shaker Prebiotic Creamy Mask Black Beeome","Algae Peel Off Mask Caviar Extract","Carboxy Therapy Fizzing Mask","Papaya Enzyme Mask with Kaolin","Shaker Peel Off Mask Hyaluronic Acid","Biocellulose Face and Neck Mask with Collagen"];
function ruleHTML(){
  const big=k=>'<a class="toolc" href="'+toolUrl(k)+'" target="_blank" rel="noopener"><img src="'+tool(k).img+'" alt="CARELIKA '+esc(tool(k).name)+'" loading="lazy">'+
    '<span class="tn">'+esc(t("rule."+k))+'</span><span class="tt">'+esc(t("rule."+k+".t"))+'</span><span class="tp">'+esc(tool(k).name)+' '+I.ext+'</span></a>';
  const small=k=>'<a class="tools" href="'+toolUrl(k)+'" target="_blank" rel="noopener"><img src="'+tool(k).img+'" alt="CARELIKA '+esc(tool(k).name)+'" loading="lazy"><span>'+esc(tool(k).name)+'</span></a>';
  return '<b>'+esc(t("rule.title"))+'</b><div class="two">'+big("bowl")+big("shaker")+'</div>'+
    '<div class="smalls">'+small("spoon")+small("spatula")+'</div><p>'+t("rule.p")+'</p>';
}
function buildHome(){
  $("#nprot").textContent=PROTOS;$("#nmask").textContent=MASKS;$("#nmix").textContent=Object.keys(MIX).length;
  $("#tile-range").textContent=t("tile.range.s",{n:MASKS});$("#tile-goal").textContent=t("tile.goal.s",{n:NEEDS.length});
  $("#sig").innerHTML=SIGNATURE.map(n=>{
    const mc=MASKCAT[n.toLowerCase()],m=mc&&mc.mk?MIX[mc.mk]:null;
    return '<button type="button" class="sigc" data-find="'+esc(n)+'">'+pic(n,"ph")+
      '<span class="n">'+esc(dn(n))+'</span><span class="s">'+(m?esc(m.ratio)+' · '+esc(m.temp)+' · '+mins(m.time)+' '+esc(t("js.min")):esc(t("js.rtu")))+'</span></button>';
  }).join("");
  const it=savedItems();
  $("#homesaved").innerHTML=it.length?'<div class="lab">'+esc(t("home.saved"))+'</div>'+savedHTML(it.slice(0,3)):"";
  $("#rule").innerHTML=ruleHTML();$("#rule2").innerHTML=ruleHTML();
}
function buildTextures(){
  $("#texgrid").innerHTML=Object.keys(TEXTURES).map(k=>{const x=TEXTURES[k];
    const n=RANGE.reduce((s,r)=>s+r[2].filter(it=>texOf(it[0])===x).length,0);
    return '<button type="button" class="texcard" data-tex="'+k+'"><img src="'+x.img+'" alt="" loading="lazy"><b>'+esc(x.label)+'</b><span>'+esc(x.sub)+'</span><em>'+esc(x.off)+'</em><i class="texn">'+esc(cnt(n))+' '+I.arrow+'</i></button>'}).join("");
}

/* ---------- 1. skin ---------- */
let T=store.get("type","dry"),C=store.get("concern",0);
if(!D[T])T="dry";if(!D[T].c[C])C=0;
function buildTypes(){
  $("#types").innerHTML=Object.keys(D).map(k=>
    '<button type="button" class="tc" data-type="'+k+'" aria-pressed="'+(k===T)+'">'+
    '<img src="'+SKIN[k].img+'" alt="">'+
    '<span>'+esc(D[k].name)+'</span></button>').join("");
  $("#typenote").innerHTML='<b>'+esc(D[T].name)+':</b> '+esc(SKIN[T].note)+'.';
}
function renderPick(scroll){
  const tp=D[T],c=tp.c[C],m=c.mk?MIX[c.mk]:null,k=savedKey(T,C);
  $("#concerns").innerHTML=tp.c.map((x,i)=>'<button type="button" class="chip" data-concern="'+i+'" aria-pressed="'+(i===C)+'">'+esc(x.l)+'</button>').join("");
  const mini=n=>'<button type="button" class="mini" data-find="'+esc(n)+'">'+pic(n,"ph")+'<span>'+esc(dn(n))+'</span></button>';
  const alts=c.sa.map(mini).join(""),altm=c.ma.map(mini).join("");
  $("#result").innerHTML=
    '<div class="rhead"><div class="g"><div class="k">'+esc(t("js.skin",{type:tp.name}))+' · '+esc(c.l)+'</div><h2>'+esc(c.g)+'</h2></div>'+
    '<button type="button" class="star" data-save="'+k+'" aria-pressed="'+isSaved(k)+'">'+I.star+'<span>'+esc(t("js.save"))+'</span></button></div>'+
    (c.z?'<p class="zone">'+esc(c.z)+'</p>':'')+
    '<div class="flow">'+[1,2,3,4,5].map(i=>'<div'+(i===3||i===4?' class="hi"':'')+'><em>'+i+'</em>'+esc(t("flow."+i))+'</div>').join("")+'</div>'+
    '<div class="duo">'+
      '<div class="pc">'+pic(c.sp,"ph")+'<div class="bd"><div class="k">'+esc(t("js.step3"))+'</div><div class="n">'+esc(dn(c.sp))+'</div><span class="t">'+esc(t("js.under"))+'</span>'+siteLink(c.sp)+'</div></div>'+
      '<div class="pc">'+pic(c.mp,"ph")+'<div class="bd"><div class="k">'+esc(t("js.step4"))+'</div><div class="n">'+esc(dn(c.mp))+'</div><span class="t">'+(m?esc(t("js.mixv",{v:t("js."+vesKey(m.ves))})):esc(t("js.rtu")))+'</span>'+siteLink(c.mp)+'</div></div>'+
    '</div>'+texChip(c.mp)+
    (m?specHTML(m)+timerBtn(m,c.mp):'<div class="rtu">'+esc(t("js.rtu.long"))+'</div>')+
    (alts?'<div class="alts"><div class="sh">'+esc(t("js.altS"))+'</div><div class="strip">'+alts+'</div></div>':'')+
    (altm?'<div class="alts"><div class="sh">'+esc(t("js.altM"))+'</div><div class="strip">'+altm+'</div></div>':'')+
    '<p class="teach">'+SKIN[T].teach+'</p>';
  store.set("type",T);store.set("concern",C);
  if(scroll)$("#result").scrollIntoView({behavior:"smooth",block:"start"});
}
function specHTML(m){
  const tot=m.p+m.w,vk=vesKey(m.ves);
  return '<div class="spec"><div class="sh">'+I.bowl+esc(t("js.mixing"))+
    '<a class="vessel" href="'+toolUrl(vk)+'" target="_blank" rel="noopener"><img src="'+tool(vk).img+'" alt="CARELIKA '+esc(tool(vk).name)+'">'+esc(t("js."+vk))+'</a></div>'+
    '<div class="big">'+
      '<div><b class="num">'+m.p+' '+t("js.g")+'</b><span>'+esc(t("js.powder"))+'</span></div>'+
      '<div><b class="num">'+m.w+' '+t("js.ml")+'</b><span>'+esc(t("js.water"))+'</span></div>'+
      '<div><b class="num'+(m.hot?' hot':'')+'">'+esc(m.temp.replace(/\s/,""))+'</b><span>'+esc(t("js.wtemp"))+'</span></div>'+
      '<div><b class="num">'+mins(m.time)+'\'</b><span>'+esc(t("js.expo"))+'</span></div>'+
    '</div>'+
    '<div class="bar2" role="img" aria-label="'+esc(t("js.ratio",{r:m.ratio}))+'"><i class="pw" style="width:'+(m.p/tot*100).toFixed(1)+'%"></i><i class="wt" style="width:'+(m.w/tot*100).toFixed(1)+'%"></i></div>'+
    '<div class="order">'+(m.ves==="Shaker"
      ?'<span><b>1</b>'+esc(t("js.water"))+'</span><span><b>2</b>'+esc(t("js.powder"))+'</span><span><b>3</b>'+esc(t("js.shake"))+'</span>'
      :'<span><b>1</b>'+esc(t("js.powder"))+'</span><span><b>2</b>'+esc(t("js.water"))+'</span><span><b>3</b>'+esc(t("js.mixsmooth"))+'</span>')+
      '<span>'+esc(t("js.ratio",{r:m.ratio}))+'</span><span>'+esc(tmin(m.time))+'</span></div>'+
    '</div>';
}

/* ---------- 2. goal ---------- */
let N=store.get("need",0);if(!NEEDS[N])N=0;
function buildNeeds(){
  const nd=NEEDS[N];
  $("#needs").innerHTML=NEEDS.map((x,i)=>'<button type="button" class="chip" data-need="'+i+'" aria-pressed="'+(i===N)+'">'+esc(x.label)+'</button>').join("");
  $("#needhero").src=nd.img;
  $("#needteach").innerHTML=nd.teach;
  const seen=new Set();
  $("#needlist").innerHTML=nd.items.filter(it=>{const k=it[0].toLowerCase();if(seen.has(k))return false;seen.add(k);return true}).map(it=>{
    const mc=MASKCAT[it[0].toLowerCase()],m=mc&&mc.mk?MIX[mc.mk]:null;
    return prodRow(it[0],'<div class="gv">'+esc(it[2])+'</div>'+
      '<div class="tags">'+it[1].map(x=>'<span class="tag">'+esc(t("tag."+x))+'</span>').join("")+'</div>'+
      (m?'<div class="ms">'+mixLine(m)+'</div>'+timerBtn(m,it[0],true):'<div class="ms rt">'+esc(t("js.rtu.short"))+'</div>'));
  }).join("");
  store.set("need",N);
}
function buildClinic(){
  $("#ctxwrap").innerHTML=CLINIC.map(c=>
    '<details class="box ctx"><summary>'+esc(c.t)+'</summary><div class="in"><p class="st">'+esc(c.s)+'</p>'+
    '<div class="ls no"><div class="rl">'+esc(t("js.keepout"))+'</div><ul>'+c.avoid.map(x=>'<li>'+esc(x)+'</li>').join("")+'</ul></div>'+
    '<div class="ls ok"><div class="rl">'+esc(t("js.fits"))+'</div><ul>'+c.use.map(x=>'<li>'+esc(x)+'</li>').join("")+'</ul></div>'+
    '<p class="cl">'+esc(c.clear)+'</p></div></details>').join("");
}

/* ---------- 3. mix ---------- */
function repPhoto(k){
  for(const r of RANGE) if(r[1]===k) for(const it of r[2]) if(photoOf(it[0])) return it[0];
  return MIX[k].fam;
}
function buildMix(){
  $("#mixgrid").innerHTML=Object.keys(MIX).map(k=>{
    const m=MIX[k];
    return '<div class="mx"><div class="hd">'+pic(repPhoto(k),"ph")+'<div><div class="fam">'+esc(m.fam)+'</div><span class="ves">'+esc(t("js."+vesKey(m.ves)))+'</span></div></div>'+
      texChip(repPhoto(k))+specHTML(m)+'<p class="why">'+esc(m.why)+'</p>'+timerBtn(m,m.fam)+'</div>';
  }).join("");
  const opts=Object.keys(MIX).map(k=>'<option value="'+k+'">'+esc(MIX[k].fam)+'</option>').join("");
  const a=$("#calcfam").value||"algae",b=$("#wfam").value||"algae";
  $("#calcfam").innerHTML=opts;$("#calcfam").value=a;
  $("#wfam").innerHTML=opts;$("#wfam").value=b;if(!$("#wg").value)$("#wg").value=MIX[b].p;
}
function water(){
  const m=MIX[$("#wfam").value],g=parseFloat($("#wg").value);
  if(!isFinite(g)||g<=0){$("#wml").textContent="-";$("#wd").textContent=t("js.enterg");return}
  $("#wml").textContent=Math.round(g*m.w/m.p);
  $("#wd").textContent=t("js.water.d",{r:m.ratio,t:m.temp,o:m.ves==="Shaker"?t("js.o.shaker"):t("js.o.bowl"),p:m.p});
}
function calc(){
  const m=MIX[$("#calcfam").value],jar=parseFloat($("#calcjar").value),cost=parseFloat($("#calccost").value);
  if(!isFinite(jar)||jar<=0){$("#yieldN").textContent="-";$("#yieldD").textContent=t("js.enterjar");return}
  const n=Math.floor(jar/m.p);
  $("#yieldN").textContent=n;
  $("#yieldL").textContent=n===1?t("jar.one"):t("jar.many");
  let d=t("js.jar.d",{p:m.p,r:m.ratio});
  if(isFinite(cost)&&cost>0&&n>0)d+=" "+t("js.cost",{c:(cost/n).toFixed(2)});
  $("#yieldD").textContent=d;
}

/* ---------- 4. range ---------- */
function prodRow(nm,extra){return '<div class="row">'+pic(nm,"ph")+'<div class="bd"><div class="nm">'+esc(dn(nm))+'</div>'+texChip(nm)+(extra||"")+siteLink(nm)+'</div></div>'}
let F={skin:"",tex:"",mix:"",time:""};
const mkey=n=>{const x=siteOf(n);return x?x.h:String(n).toLowerCase()};
const TAGSKIN={Sens:"sensitive",Dry:"dry",Oily:"oily",Comb:"combination",Norm:"normal",Mature:"mature"};
function skinMap(){
  const o={},add=(n,k)=>{const q=mkey(n);(o[q]=o[q]||{})[k]=1};
  Object.keys(D).forEach(k=>D[k].c.forEach(c=>{add(c.mp,k);c.ma.forEach(m=>add(m,k))}));
  NEEDS.forEach(x=>x.items.forEach(it=>it[1].forEach(g=>{if(TAGSKIN[g]&&D[TAGSKIN[g]])add(it[0],TAGSKIN[g])})));
  return o;
}
function rangeRow(it,m){
  let meta='<span>'+esc(it[3])+'</span><span>'+esc(it[1].replace(/ g$/," "+t("js.g")))+'</span>';
  if(it[2]>0)meta+='<span class="pr">€'+it[2].toFixed(2)+'</span>';
  const g=/^([\d.]+) g$/.exec(it[1]);
  if(m&&g&&it[2]>0){const n=Math.floor(parseFloat(g[1])/m.p);if(n>0)meta+='<span class="cpt">€'+(it[2]/n).toFixed(2)+' '+esc(t("js.treat"))+'</span>'}
  return prodRow(it[0],'<div class="meta">'+meta+'</div>');
}
function filterBar(){
  const texs=Object.keys(TEXTURES).filter(k=>RANGE.some(r=>r[2].some(it=>texOf(it[0])===TEXTURES[k])));
  const group=(key,label,opts)=>'<div class="fl"><span>'+esc(t(label))+'</span><div class="chips scroll">'+
    opts.map(o=>'<button type="button" class="chip" data-f="'+key+'|'+o[0]+'" aria-pressed="'+(F[key]===o[0])+'">'+esc(o[1])+'</button>').join("")+'</div></div>';
  $("#rangefilters").innerHTML='<div class="lab">'+esc(t("filter.title"))+'</div>'+
    group("skin","filter.skin",Object.keys(D).map(k=>[k,D[k].name]))+
    group("tex","filter.tex",texs.map(k=>[k,TEXTURES[k].label]))+
    group("mix","filter.mix",[["bowl",t("js.bowl")],["shaker",t("js.shaker")],["rtu",t("js.rtu")]])+
    group("time","filter.time",[10,15,20].map(n=>[String(n),n+" "+t("js.min")]))+
    '<div class="fres" id="fres" aria-live="polite"></div>';
}
function rangeList(){
  document.querySelectorAll("#rangefilters [data-f]").forEach(c=>{const [k,v]=c.dataset.f.split("|");c.setAttribute("aria-pressed",String(F[k]===v))});
  const on=F.skin||F.tex||F.mix||F.time,res=$("#fres");
  if(on){
    const sk=skinMap(),out=[];
    RANGE.forEach(r=>{const m=r[1]?MIX[r[1]]:null;r[2].forEach(it=>{
      if(F.skin&&!(sk[mkey(it[0])]||{})[F.skin])return;
      if(F.tex&&texOf(it[0])!==TEXTURES[F.tex])return;
      if(F.mix&&(m?vesKey(m.ves):"rtu")!==F.mix)return;
      if(F.time&&!(m&&(m.time.match(/\d+/g)||[]).includes(F.time)))return;
      out.push(rangeRow(it,m));
    })});
    res.innerHTML='<b>'+esc(t("filter.found",{n:out.length}))+'</b><button type="button" class="lnk" id="fclear">'+esc(t("filter.clear"))+'</button>';
    $("#rangewrap").innerHTML=out.length?'<div class="rows">'+out.join("")+'</div>':'<p class="empty">'+esc(t("filter.none"))+'</p>';
    return;
  }
  res.innerHTML="";
  let opened=false;
  $("#rangewrap").innerHTML=RANGE.map((r,ri)=>{
    const m=r[1]?MIX[r[1]]:null,open=!opened&&r[1]==="algae";if(open)opened=true;
    return '<details class="cat"'+(open?" open":"")+'><summary><h3>'+esc(catName(ri))+'</h3>'+
      '<div class="sub">'+esc(cnt(r[2].length))+' · '+(m?esc(m.ratio)+' · '+m.p+' '+t("js.g")+' : '+m.w+' '+t("js.ml")+' · '+esc(m.temp)+' · '+esc(tmin(m.time)):esc(t("js.rtu")))+'</div></summary>'+
      '<div class="rows">'+r[2].map(it=>rangeRow(it,m)).join("")+'</div></details>';
  }).join("");
}
function buildRange(){
  filterBar();rangeList();
  const leads=n=>{const u=USE[n.toLowerCase()];if(!u)return"";const l=u.rows.filter(r=>r.lead).map(r=>r.type+": "+r.concern);
    return l.length?'<div class="gv">'+esc(t("js.lead"))+' '+esc(l.slice(0,3).join("; "))+(l.length>3?" +"+(l.length-3):"")+'</div>':""};
  $("#serumlist").innerHTML=SERUMS.map(n=>prodRow(n,leads(n))).join("");
  $("#creamlist").innerHTML=CREAMS.map(n=>prodRow(n,"")).join("");
}

/* ---------- 5. find + saved ---------- */
function search(){
  const q=$("#q").value.trim().toLowerCase(),host=$("#hits");
  if(q.length<2){host.innerHTML="";renderSaved(true);return}
  renderSaved(false);
  const names=new Set(),hit=n=>n.toLowerCase().includes(q)||dn(n).toLowerCase().includes(q);
  Object.keys(MASKCAT).forEach(k=>{if(hit(MASKCAT[k].name))names.add(MASKCAT[k].name)});
  SERUMS.concat(CREAMS).forEach(n=>{if(hit(n))names.add(n)});
  Object.keys(USE).forEach(k=>{if(hit(USE[k].name))names.add(USE[k].name)});
  const list=[],shown=new Set();
  [...names].sort((a,b)=>dn(a).localeCompare(dn(b))).forEach(n=>{const k=dn(n).toLowerCase();if(!shown.has(k)){shown.add(k);list.push(n)}});
  if(!list.length){host.innerHTML='<p class="empty">'+esc(t("js.nomatch"))+'</p>';return}
  host.innerHTML=list.slice(0,30).map(n=>{
    const mc=MASKCAT[n.toLowerCase()],u=USE[n.toLowerCase()];
    const kind=mc||/mask/i.test(n)?t("js.kind.mask"):(CREAMS.indexOf(n)>-1?t("js.kind.cream"):t("js.kind.serum"));
    let det='<div class="tags"><span class="tag">'+esc(kind)+'</span>'+(mc?'<span class="tag">'+esc(catName(mc.ci))+'</span>':'')+proTag(n)+'</div>';
    if(mc){const m=mc.mk?MIX[mc.mk]:null;det+=m?'<div class="ms">'+mixLine(m)+'</div>'+timerBtn(m,n,true):'<div class="ms rt">'+esc(t("js.rtu.short"))+'</div>'}
    if(u){const l=u.rows.filter(r=>r.lead).map(r=>r.type+": "+r.concern);if(l.length)det+='<div class="gv">'+esc(t("js.lead"))+' '+esc(l.slice(0,4).join("; "))+(l.length>4?" +"+(l.length-4):"")+'</div>'}
    return prodRow(n,det);
  }).join("");
}
function renderSaved(show){
  const host=$("#saved");
  if(!show){host.innerHTML="";return}
  const items=savedItems();
  host.innerHTML='<div class="lab">'+esc(t("js.saved"))+'</div>'+(items.length?savedHTML(items):'<p class="empty">'+esc(t("js.savedEmpty"))+'</p>');
}
function openFind(q){$("#q").value=q||"";go("find",true);if(!q)setTimeout(()=>$("#q").focus(),60)}

/* ---------- timer ---------- */
const RING=339.3;
let TM=store.get("timer",null),tick=null,wake=null,actx=null,beeped=false;
function fmt(s){s=Math.max(0,Math.round(s));return Math.floor(s/60)+":"+String(s%60).padStart(2,"0")}
function left(){if(!TM)return 0;return TM.paused!=null?TM.paused:(TM.end-Date.now())/1000}
const VLANG={en:"en-GB",es:"es-ES",de:"de-DE",ru:"ru-RU",lv:"lv-LV"};
let voiceOn=store.get("voice",true),warned=false,tune=null,tuneSrc=null;
function say(txt){
  try{
    if(!voiceOn||!window.speechSynthesis)return;
    const u=new SpeechSynthesisUtterance(txt);u.lang=VLANG[LANG]||"en-GB";u.rate=.95;
    const v=speechSynthesis.getVoices().find(x=>x.lang.toLowerCase().startsWith(LANG));if(v)u.voice=v;
    speechSynthesis.cancel();speechSynthesis.speak(u);
  }catch(e){}
}
function voiceBtn(){$("#tvoice").textContent=t(voiceOn?"v.on":"v.off");$("#tvoice").setAttribute("aria-pressed",String(voiceOn))}
function startTimer(min,label){
  try{actx=actx||new (window.AudioContext||window.webkitAudioContext)();actx.resume()}catch(e){}
  TM={end:Date.now()+min*60000,dur:min*60,label:label||"",paused:null};beeped=false;warned=false;stopTune();loadTune();
  /* speech must start inside this tap or phones block it later */
  if(!store.get("greeted",false)){store.set("greeted",true);say(t("v.hello"))}else say(" ");
  saveT();openSheet();loop();lockScreen();
}
function saveT(){store.set("timer",TM)}
function loop(){
  clearInterval(tick);
  if(!TM){$("#pill").classList.remove("on");return}
  const draw=()=>{
    const s=left(),done=s<=0;
    $("#tleft").textContent=fmt(s);$("#pillt").textContent=done?t("t.time"):fmt(s);
    $("#pilln").textContent=TM.label||t("t.exposure");$("#tname").textContent=TM.label;
    $("#tring").style.strokeDashoffset=(RING*(1-Math.max(0,s)/TM.dur)).toFixed(1);
    $("#tstate").textContent=done?t("t.done"):(TM.paused!=null?t("t.paused"):t("t.exposure"));
    $("#tmain").textContent=done?t("t.restart"):(TM.paused!=null?t("t.resume"):t("t.pause"));
    $("#sheet").classList.toggle("done",done);$("#pill").classList.toggle("done",done);
    $("#pill").classList.toggle("on",!$("#sheet").classList.contains("on"));
    if(!done&&TM.paused==null&&!warned&&s<=60&&TM.dur>60){warned=true;say(t("v.min1"))}
    if(done&&!beeped){beeped=true;alarm()}
  };
  draw();tick=setInterval(draw,500);
}
function chime(){
  [0,0.45,0.9].forEach(x=>{const o=actx.createOscillator(),g=actx.createGain();o.frequency.value=880;o.connect(g);g.connect(actx.destination);
    g.gain.setValueAtTime(0.0001,actx.currentTime+x);g.gain.exponentialRampToValueAtTime(0.3,actx.currentTime+x+0.03);g.gain.exponentialRampToValueAtTime(0.0001,actx.currentTime+x+0.35);
    o.start(actx.currentTime+x);o.stop(actx.currentTime+x+0.4)});
}
function loadTune(){if(tune||!actx)return;fetch("audio/spa-end.mp3").then(r=>r.arrayBuffer()).then(b=>actx.decodeAudioData(b)).then(x=>{tune=x}).catch(()=>{})}
function stopTune(){try{tuneSrc&&tuneSrc.stop()}catch(e){}tuneSrc=null}
function playEnd(){
  try{
    actx=actx||new (window.AudioContext||window.webkitAudioContext)();actx.resume();stopTune();
    if(!tune){chime();loadTune();return}
    tuneSrc=actx.createBufferSource();tuneSrc.buffer=tune;tuneSrc.connect(actx.destination);tuneSrc.start();
  }catch(e){}
}
function alarm(){
  try{navigator.vibrate&&navigator.vibrate([300,200,300])}catch(e){}
  playEnd();
  setTimeout(()=>{if(TM&&left()<=0)say(t("v.done"))},9000);
  const run=TM;setTimeout(()=>{if(TM===run&&left()<=0){playEnd();setTimeout(()=>{if(TM===run)say(t("v.done"))},9000)}},60000);
  releaseScreen();
}
async function lockScreen(){try{if("wakeLock" in navigator)wake=await navigator.wakeLock.request("screen")}catch(e){}}
function releaseScreen(){try{wake&&wake.release();wake=null}catch(e){}}
function openSheet(){$("#sheet").classList.add("on");$("#presets").style.display=TM?"none":"flex";$("#pill").classList.remove("on");
  if(!TM){$("#tleft").textContent="0:00";$("#tstate").textContent=t("t.choose");$("#tname").textContent="";$("#tring").style.strokeDashoffset=RING;$("#tmain").textContent=t("t.start15");}}
function hideSheet(){$("#sheet").classList.remove("on");if(TM)$("#pill").classList.add("on")}
function stopTimer(){stopTune();TM=null;saveT();clearInterval(tick);releaseScreen();$("#pill").classList.remove("on","done");$("#sheet").classList.remove("done");hideSheet()}
function adjust(d){if(!TM)return;if(TM.paused!=null)TM.paused=Math.max(0,TM.paused+d*60);else TM.end+=d*60000;TM.dur=Math.max(TM.dur+d*60,60);if(left()>0)beeped=false;if(left()>60)warned=false;saveT();loop()}
function mainBtn(){
  if(!TM){startTimer(15,"");return}
  if(left()<=0){startTimer(Math.round(TM.dur/60),TM.label);return}
  if(TM.paused!=null){TM.end=Date.now()+TM.paused*1000;TM.paused=null;lockScreen()}else{TM.paused=left();releaseScreen()}
  saveT();loop();
}
document.addEventListener("visibilitychange",()=>{if(!document.hidden&&TM&&TM.paused==null&&left()>0)lockScreen()});

/* ---------- navigation ---------- */
const VIEWS=["home","pick","need","mix","range","find"];
let VIEW="home";
function go(v,push){
  if(VIEWS.indexOf(v)<0)v="home";VIEW=v;
  VIEWS.forEach(x=>$("#v-"+x).classList.toggle("on",x===v));
  document.querySelectorAll(".tab").forEach(b=>b.setAttribute("aria-selected",b.dataset.v===v?"true":"false"));
  $("#searchbtn").setAttribute("aria-pressed",v==="find");
  if(push&&location.hash.slice(1)!==v)history.replaceState(null,"","#"+v);
  if(v==="find")search();
  scrollTo({top:0,behavior:"instant"});
}

/* ---------- install prompt ---------- */
let deferred=null;
const standalone=matchMedia("(display-mode: standalone)").matches||navigator.standalone;
const ios=/iphone|ipad|ipod/i.test(navigator.userAgent);
function showInstall(){if(standalone||store.get("installHidden",false))return;$("#install").classList.add("on")}
function installText(){if(ios&&!standalone){$("#installtxt").textContent=t("install.ios");$("#installgo").style.display="none";showInstall()}}
addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferred=e;showInstall()});

/* ---------- events (delegated) ---------- */
document.addEventListener("click",e=>{
  const b=e.target.closest("button");if(!b)return;
  if(b.dataset.type){T=b.dataset.type;C=0;buildTypes();renderPick(false);return}
  if(b.dataset.concern!=null){C=+b.dataset.concern;renderPick(true);return}
  if(b.dataset.f){const [k,v]=b.dataset.f.split("|");F[k]=F[k]===v?"":v;rangeList();return}
  if(b.id==="tvoice"){voiceOn=!voiceOn;store.set("voice",voiceOn);voiceBtn();if(voiceOn)say(t("v.done"));else try{speechSynthesis.cancel()}catch(e){}return}
  if(b.id==="fclear"){F={skin:"",tex:"",mix:"",time:""};rangeList();return}
  if(b.dataset.tex){F={skin:"",tex:b.dataset.tex,mix:"",time:""};rangeList();go("range",true);$("#fres").scrollIntoView({block:"center"});return}
  if(b.dataset.need!=null){N=+b.dataset.need;buildNeeds();return}
  if(b.dataset.save){toggleSaved(b.dataset.save);b.setAttribute("aria-pressed",isSaved(b.dataset.save));return}
  if(b.dataset.timer){startTimer(+b.dataset.timer,b.dataset.label);return}
  if(b.dataset.open){const [a,c]=b.dataset.open.split("|");T=a;C=+c;buildTypes();renderPick(false);go("pick",true);return}
  if(b.dataset.find){openFind(dn(b.dataset.find));return}
  if(b.dataset.m){startTimer(+b.dataset.m,"");return}
  if(b.dataset.lang){setLang(b.dataset.lang);$("#langsheet").classList.remove("on");return}
  if(b.dataset.v){go(b.dataset.v,true);return}
  switch(b.id){
    case "timerbtn":case "tile-timer":openSheet();if(TM)loop();break;
    case "searchbtn":case "homesearch":openFind("");break;
    case "langbtn":$("#langsheet").classList.add("on");break;
    case "langclose":$("#langsheet").classList.remove("on");break;
    case "pill":openSheet();loop();break;
    case "thide":hideSheet();break;
    case "tstop":stopTimer();break;
    case "tplus":adjust(1);break;
    case "tminus":adjust(-1);break;
    case "tmain":mainBtn();break;
    case "installgo":if(deferred){deferred.prompt();deferred=null}$("#install").classList.remove("on");break;
    case "installx":store.set("installHidden",true);$("#install").classList.remove("on");break;
  }
});
addEventListener("hashchange",()=>go(location.hash.slice(1),false));
["#calcfam","#calcjar","#calccost"].forEach(s=>$(s).addEventListener("input",calc));
["#wfam","#wg"].forEach(s=>$(s).addEventListener("input",water));
$("#wfam").addEventListener("change",()=>{$("#wg").value=MIX[$("#wfam").value].p;water()});
$("#q").addEventListener("input",search);

/* ---------- boot ---------- */
function renderAll(){
  applyContent();applyStatic();buildUse();
  buildHome();buildTextures();buildTypes();renderPick(false);buildNeeds();buildClinic();buildMix();buildRange();calc();water();installText();voiceBtn();
  if(VIEW==="find")search();
  if(TM)loop();
}
renderAll();
if(TM&&left()<=0)beeped=true;
go(location.hash.slice(1)||"home",false);
if("serviceWorker" in navigator&&location.protocol!=="file:"&&location.hostname!=="localhost")addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));
