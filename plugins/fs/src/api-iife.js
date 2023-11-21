if("__TAURI__"in window){var __TAURI_PLUGIN_FS__=function(t){"use strict";function e(t,e,n,i){if("a"===n&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?i:"a"===n?i.call(t):i?i.value:e.get(t)}var n,i,o;"function"==typeof SuppressedError&&SuppressedError;class r{constructor(){this.__TAURI_CHANNEL_MARKER__=!0,n.set(this,(()=>{})),this.id=function(t,e=!1){return window.__TAURI_INTERNALS__.transformCallback(t,e)}((t=>{e(this,n,"f").call(this,t)}))}set onmessage(t){!function(t,e,n,i,o){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!o:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");"a"===i?o.call(t,n):o?o.value=n:e.set(t,n)}(this,n,t,"f")}get onmessage(){return e(this,n,"f")}toJSON(){return`__CHANNEL__:${this.id}`}}async function a(t,e={},n){return window.__TAURI_INTERNALS__.invoke(t,e,n)}function s(t){return{isFile:t.isFile,isDirectory:t.isDirectory,isSymlink:t.isSymlink,size:t.size,mtime:null!=t.mtime?new Date(t.mtime):null,atime:null!=t.atime?new Date(t.atime):null,birthtime:null!=t.birthtime?new Date(t.birthtime):null,readonly:t.readonly,fileAttributes:t.fileAttributes,dev:t.dev,ino:t.ino,mode:t.mode,nlink:t.nlink,uid:t.uid,gid:t.gid,rdev:t.rdev,blksize:t.blksize,blocks:t.blocks}}n=new WeakMap,t.BaseDirectory=void 0,(i=t.BaseDirectory||(t.BaseDirectory={}))[i.Audio=1]="Audio",i[i.Cache=2]="Cache",i[i.Config=3]="Config",i[i.Data=4]="Data",i[i.LocalData=5]="LocalData",i[i.Document=6]="Document",i[i.Download=7]="Download",i[i.Picture=8]="Picture",i[i.Public=9]="Public",i[i.Video=10]="Video",i[i.Resource=11]="Resource",i[i.Temp=12]="Temp",i[i.AppConfig=13]="AppConfig",i[i.AppData=14]="AppData",i[i.AppLocalData=15]="AppLocalData",i[i.AppCache=16]="AppCache",i[i.AppLog=17]="AppLog",i[i.Desktop=18]="Desktop",i[i.Executable=19]="Executable",i[i.Font=20]="Font",i[i.Home=21]="Home",i[i.Runtime=22]="Runtime",i[i.Template=23]="Template",t.SeekMode=void 0,(o=t.SeekMode||(t.SeekMode={}))[o.Start=0]="Start",o[o.Current=1]="Current",o[o.End=2]="End";class c{constructor(t){this.rid=t}async read(t){return l(this.rid,t)}async seek(t,e){return u(this.rid,t,e)}async stat(){return p(this.rid)}async truncate(t){return w(this.rid,t)}async write(t){return d(this.rid,t)}async close(){return f(this.rid)}}async function f(t){return a("plugin:fs|close",{rid:t})}async function l(t,e){if(0===e.byteLength)return 0;const[n,i]=await a("plugin:fs|read",{rid:t,len:e.byteLength});return e.set(n),0===i?null:i}async function u(t,e,n){return a("plugin:fs|seek",{rid:t,offset:e,whence:n})}async function p(t){return s(await a("plugin:fs|fstat",{rid:t}))}async function w(t,e){return a("plugin:fs|ftruncate",{rid:t,len:e})}async function d(t,e){return a("plugin:fs|write",{rid:t,data:Array.from(e)})}async function h(t){await a("plugin:fs|unwatch",{id:t})}return t.FsFile=c,t.close=f,t.copyFile=async function(t,e,n){if(t instanceof URL&&"file:"!==t.protocol||e instanceof URL&&"file:"!==e.protocol)throw new TypeError("Must be a file URL.");return a("plugin:fs|copy_file",{fromPath:t instanceof URL?t.toString():t,toPath:e instanceof URL?e.toString():e,options:n})},t.create=async function(t,e){if(t instanceof URL&&"file:"!==t.protocol)throw new TypeError("Must be a file URL.");const n=await a("plugin:fs|create",{path:t instanceof URL?t.toString():t,options:e});return new c(n)},t.exists=async function(t,e){if(t instanceof URL&&"file:"!==t.protocol)throw new TypeError("Must be a file URL.");return a("plugin:fs|exists",{path:t instanceof URL?t.toString():t,options:e})},t.fstat=p,t.ftruncate=w,t.lstat=async function(t,e){return s(await a("plugin:fs|lstat",{path:t instanceof URL?t.toString():t,options:e}))},t.mkdir=async function(t,e){if(t instanceof URL&&"file:"!==t.protocol)throw new TypeError("Must be a file URL.");return a("plugin:fs|mkdir",{path:t instanceof URL?t.toString():t,options:e})},t.open=async function(t,e){if(t instanceof URL&&"file:"!==t.protocol)throw new TypeError("Must be a file URL.");const n=await a("plugin:fs|open",{path:t instanceof URL?t.toString():t,options:e});return new c(n)},t.read=l,t.readDir=async function(t,e){if(t instanceof URL&&"file:"!==t.protocol)throw new TypeError("Must be a file URL.");return a("plugin:fs|read_dir",{path:t instanceof URL?t.toString():t,options:e})},t.readFile=async function(t,e){if(t instanceof URL&&"file:"!==t.protocol)throw new TypeError("Must be a file URL.");const n=await a("plugin:fs|read_file",{path:t instanceof URL?t.toString():t,options:e});return Uint8Array.from(n)},t.readTextFile=async function(t,e){if(t instanceof URL&&"file:"!==t.protocol)throw new TypeError("Must be a file URL.");return a("plugin:fs|read_text_file",{path:t instanceof URL?t.toString():t,options:e})},t.readTextFileLines=async function(t,e){if(t instanceof URL&&"file:"!==t.protocol)throw new TypeError("Must be a file URL.");const n=t instanceof URL?t.toString():t;return Promise.resolve({path:n,rid:null,async next(){this.rid||(this.rid=await a("plugin:fs|read_text_file_lines",{path:n,options:e}));const[t,i]=await a("plugin:fs|read_text_file_lines_next",{rid:this.rid});return i&&(this.rid=null),{value:i?"":t,done:i}},[Symbol.asyncIterator](){return this}})},t.remove=async function(t,e){if(t instanceof URL&&"file:"!==t.protocol)throw new TypeError("Must be a file URL.");return a("plugin:fs|remove",{path:t instanceof URL?t.toString():t,options:e})},t.rename=async function(t,e,n){if(t instanceof URL&&"file:"!==t.protocol||e instanceof URL&&"file:"!==e.protocol)throw new TypeError("Must be a file URL.");return a("plugin:fs|rename",{oldPath:t instanceof URL?t.toString():t,newPath:e instanceof URL?e.toString():e,options:n})},t.seek=u,t.stat=async function(t,e){return s(await a("plugin:fs|stat",{path:t instanceof URL?t.toString():t,options:e}))},t.truncate=async function(t,e,n){if(t instanceof URL&&"file:"!==t.protocol)throw new TypeError("Must be a file URL.");return a("plugin:fs|truncate",{path:t instanceof URL?t.toString():t,len:e,options:n})},t.watch=async function(t,e,n){const i={recursive:!1,delayMs:2e3,...n},o=Array.isArray(t)?t:[t];for(const t of o)if(t instanceof URL&&"file:"!==t.protocol)throw new TypeError("Must be a file URL.");const s=new r;s.onmessage=e;const c=await a("plugin:fs|watch",{paths:o.map((t=>t instanceof URL?t.toString():t)),options:i,onEvent:s});return()=>{h(c)}},t.watchImmediate=async function(t,e,n){const i={recursive:!1,...n,delayMs:null},o=Array.isArray(t)?t:[t];for(const t of o)if(t instanceof URL&&"file:"!==t.protocol)throw new TypeError("Must be a file URL.");const s=new r;s.onmessage=e;const c=await a("plugin:fs|watch",{paths:o.map((t=>t instanceof URL?t.toString():t)),options:i,onEvent:s});return()=>{h(c)}},t.write=d,t.writeFile=async function(t,e,n){if(t instanceof URL&&"file:"!==t.protocol)throw new TypeError("Must be a file URL.");return a("plugin:fs|write_file",{path:t instanceof URL?t.toString():t,data:Array.from(e),options:n})},t.writeTextFile=async function(t,e,n){if(t instanceof URL&&"file:"!==t.protocol)throw new TypeError("Must be a file URL.");return a("plugin:fs|write_text_file",{path:t instanceof URL?t.toString():t,data:e,options:n})},t}({});Object.defineProperty(window.__TAURI__,"fs",{value:__TAURI_PLUGIN_FS__})}
