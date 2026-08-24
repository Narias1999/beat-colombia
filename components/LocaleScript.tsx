// Render-blocking snippet that runs before paint.
//
// On a visitor's FIRST visit (no stored choice), sends Spanish-speaking
// browsers to the /es version. Any other language stays on English, which is
// the fallback. Once the visitor uses the EN/ES switcher their choice is
// stored and auto-detection never runs again.
//
// Redirection is one-way (en -> es) on purpose: landing on /es directly is
// always treated as deliberate. <html lang> is baked in per locale by the
// route-group root layouts, so this script never touches it.

const SCRIPT = `(function(){try{
var path=location.pathname;
if(/^\\/es(\\/|$)/.test(path))return;
var stored=null;try{stored=localStorage.getItem('beat_lang');}catch(e){}
if(stored)return;
var l=(navigator.languages&&navigator.languages.length)?navigator.languages:[navigator.language||''];
/* Respect priority order: the first entry matching a locale we support wins,
   so ["en-US","es-CO"] stays English rather than matching es further down. */
var pick='';
for(var i=0;i<l.length&&!pick;i++){
  if(/^es(-|$)/i.test(l[i]))pick='es';
  else if(/^en(-|$)/i.test(l[i]))pick='en';
}
if(pick!=='es')return;
location.replace('/es'+(path==='/'?'/':path)+location.search+location.hash);
}catch(e){}})();`;

export default function LocaleScript() {
  return <script dangerouslySetInnerHTML={{ __html: SCRIPT }} />;
}
