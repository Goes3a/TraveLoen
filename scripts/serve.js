const http=require('http'),fs=require('fs'),path=require('path');
const root=path.join(__dirname,'..','www');
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript'};
http.createServer((q,r)=>{let p=q.url.split('?')[0];if(p==='/')p='/index.html';
const f=path.join(root,path.normalize(p));if(!f.startsWith(root)||!fs.existsSync(f)){r.writeHead(404);return r.end()}
r.writeHead(200,{'Content-Type':types[path.extname(f)]||'application/octet-stream'});fs.createReadStream(f).pipe(r)}).listen(5173);
