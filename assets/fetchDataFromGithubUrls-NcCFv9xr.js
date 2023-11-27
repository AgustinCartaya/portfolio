var H=(s,t,e)=>{if(!t.has(s))throw TypeError("Cannot "+e)};var r=(s,t,e)=>(H(s,t,"read from private field"),e?e.call(s):t.get(s)),c=(s,t,e)=>{if(t.has(s))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(s):t.set(s,e)},n=(s,t,e,i)=>(H(s,t,"write to private field"),i?i.call(s,e):t.set(s,e),e);var d=(s,t,e)=>(H(s,t,"access private method"),e);import{S as Ot,a as J,n as wt,i as ut,b as lt,t as Et,f as Ut,c as St,d as dt,e as bt,r as v,g as Qt}from"./index-VsBuxk_P.js";var y,h,I,f,w,T,R,M,P,D,E,U,O,S,Q,A,L,X,j,Y,$,Z,k,tt,B,et,K,st,N,rt,V,mt,yt,Ft=(yt=class extends Ot{constructor(t,e){super();c(this,Q);c(this,L);c(this,j);c(this,$);c(this,k);c(this,B);c(this,K);c(this,N);c(this,V);c(this,y,void 0);c(this,h,void 0);c(this,I,void 0);c(this,f,void 0);c(this,w,void 0);c(this,T,void 0);c(this,R,void 0);c(this,M,void 0);c(this,P,void 0);c(this,D,void 0);c(this,E,void 0);c(this,U,void 0);c(this,O,void 0);c(this,S,void 0);n(this,h,void 0),n(this,I,void 0),n(this,f,void 0),n(this,S,new Set),n(this,y,t),this.options=e,n(this,R,null),this.bindMethods(),this.setOptions(e)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(r(this,h).addObserver(this),ft(r(this,h),this.options)?d(this,Q,A).call(this):this.updateResult(),d(this,k,tt).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return it(r(this,h),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return it(r(this,h),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,d(this,B,et).call(this),d(this,K,st).call(this),r(this,h).removeObserver(this)}setOptions(t,e){const i=this.options,p=r(this,h);if(this.options=r(this,y).defaultQueryOptions(t),J(i,this.options)||r(this,y).getQueryCache().notify({type:"observerOptionsUpdated",query:r(this,h),observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=i.queryKey),d(this,N,rt).call(this);const a=this.hasListeners();a&&pt(r(this,h),p,this.options,i)&&d(this,Q,A).call(this),this.updateResult(e),a&&(r(this,h)!==p||this.options.enabled!==i.enabled||this.options.staleTime!==i.staleTime)&&d(this,L,X).call(this);const o=d(this,j,Y).call(this);a&&(r(this,h)!==p||this.options.enabled!==i.enabled||o!==r(this,O))&&d(this,$,Z).call(this,o)}getOptimisticResult(t){const e=r(this,y).getQueryCache().build(r(this,y),t),i=this.createResult(e,t);return Tt(this,i)&&(n(this,f,i),n(this,T,this.options),n(this,w,r(this,h).state)),i}getCurrentResult(){return r(this,f)}trackResult(t){const e={};return Object.keys(t).forEach(i=>{Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:()=>(r(this,S).add(i),t[i])})}),e}getCurrentQuery(){return r(this,h)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const e=r(this,y).defaultQueryOptions(t),i=r(this,y).getQueryCache().build(r(this,y),e);return i.isFetchingOptimistic=!0,i.fetch().then(()=>this.createResult(i,e))}fetch(t){return d(this,Q,A).call(this,{...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),r(this,f)))}createResult(t,e){var ct;const i=r(this,h),p=this.options,a=r(this,f),o=r(this,w),l=r(this,T),F=t!==i?t.state:r(this,I),{state:u}=t;let{error:W,errorUpdatedAt:at,fetchStatus:x,status:C}=u,ot=!1,m;if(e._optimisticResults){const b=this.hasListeners(),G=!b&&ft(t,e),Ct=b&&pt(t,i,e,p);(G||Ct)&&(x=St(t.options.networkMode)?"fetching":"paused",u.dataUpdatedAt||(C="pending")),e._optimisticResults==="isRestoring"&&(x="idle")}if(e.select&&typeof u.data<"u")if(a&&u.data===(o==null?void 0:o.data)&&e.select===r(this,M))m=r(this,P);else try{n(this,M,e.select),m=e.select(u.data),m=dt(a==null?void 0:a.data,m,e),n(this,P,m),n(this,R,null)}catch(b){n(this,R,b)}else m=u.data;if(typeof e.placeholderData<"u"&&typeof m>"u"&&C==="pending"){let b;if(a!=null&&a.isPlaceholderData&&e.placeholderData===(l==null?void 0:l.placeholderData))b=a.data;else if(b=typeof e.placeholderData=="function"?e.placeholderData((ct=r(this,D))==null?void 0:ct.state.data,r(this,D)):e.placeholderData,e.select&&typeof b<"u")try{b=e.select(b),n(this,R,null)}catch(G){n(this,R,G)}typeof b<"u"&&(C="success",m=dt(a==null?void 0:a.data,b,e),ot=!0)}r(this,R)&&(W=r(this,R),m=r(this,P),at=Date.now(),C="error");const _=x==="fetching",z=C==="pending",q=C==="error",ht=z&&_;return{status:C,fetchStatus:x,isPending:z,isSuccess:C==="success",isError:q,isInitialLoading:ht,isLoading:ht,data:m,dataUpdatedAt:u.dataUpdatedAt,error:W,errorUpdatedAt:at,failureCount:u.fetchFailureCount,failureReason:u.fetchFailureReason,errorUpdateCount:u.errorUpdateCount,isFetched:u.dataUpdateCount>0||u.errorUpdateCount>0,isFetchedAfterMount:u.dataUpdateCount>F.dataUpdateCount||u.errorUpdateCount>F.errorUpdateCount,isFetching:_,isRefetching:_&&!z,isLoadingError:q&&u.dataUpdatedAt===0,isPaused:x==="paused",isPlaceholderData:ot,isRefetchError:q&&u.dataUpdatedAt!==0,isStale:nt(t,e),refetch:this.refetch}}updateResult(t){const e=r(this,f),i=this.createResult(r(this,h),this.options);if(n(this,w,r(this,h).state),n(this,T,this.options),r(this,w).data!==void 0&&n(this,D,r(this,h)),J(i,e))return;n(this,f,i);const p={},a=()=>{if(!e)return!0;const{notifyOnChangeProps:o}=this.options,l=typeof o=="function"?o():o;if(l==="all"||!l&&!r(this,S).size)return!0;const g=new Set(l??r(this,S));return this.options.throwOnError&&g.add("error"),Object.keys(r(this,f)).some(F=>{const u=F;return r(this,f)[u]!==e[u]&&g.has(u)})};(t==null?void 0:t.listeners)!==!1&&a()&&(p.listeners=!0),d(this,V,mt).call(this,{...p,...t})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&d(this,k,tt).call(this)}},y=new WeakMap,h=new WeakMap,I=new WeakMap,f=new WeakMap,w=new WeakMap,T=new WeakMap,R=new WeakMap,M=new WeakMap,P=new WeakMap,D=new WeakMap,E=new WeakMap,U=new WeakMap,O=new WeakMap,S=new WeakMap,Q=new WeakSet,A=function(t){d(this,N,rt).call(this);let e=r(this,h).fetch(this.options,t);return t!=null&&t.throwOnError||(e=e.catch(wt)),e},L=new WeakSet,X=function(){if(d(this,B,et).call(this),ut||r(this,f).isStale||!lt(this.options.staleTime))return;const e=Et(r(this,f).dataUpdatedAt,this.options.staleTime)+1;n(this,E,setTimeout(()=>{r(this,f).isStale||this.updateResult()},e))},j=new WeakSet,Y=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(r(this,h)):this.options.refetchInterval)??!1},$=new WeakSet,Z=function(t){d(this,K,st).call(this),n(this,O,t),!(ut||this.options.enabled===!1||!lt(r(this,O))||r(this,O)===0)&&n(this,U,setInterval(()=>{(this.options.refetchIntervalInBackground||Ut.isFocused())&&d(this,Q,A).call(this)},r(this,O)))},k=new WeakSet,tt=function(){d(this,L,X).call(this),d(this,$,Z).call(this,d(this,j,Y).call(this))},B=new WeakSet,et=function(){r(this,E)&&(clearTimeout(r(this,E)),n(this,E,void 0))},K=new WeakSet,st=function(){r(this,U)&&(clearInterval(r(this,U)),n(this,U,void 0))},N=new WeakSet,rt=function(){const t=r(this,y).getQueryCache().build(r(this,y),this.options);if(t===r(this,h))return;const e=r(this,h);n(this,h,t),n(this,I,t.state),this.hasListeners()&&(e==null||e.removeObserver(this),t.addObserver(this))},V=new WeakSet,mt=function(t){bt.batch(()=>{t.listeners&&this.listeners.forEach(e=>{e(r(this,f))}),r(this,y).getQueryCache().notify({query:r(this,h),type:"observerResultsUpdated"})})},yt);function It(s,t){return t.enabled!==!1&&!s.state.dataUpdatedAt&&!(s.state.status==="error"&&t.retryOnMount===!1)}function ft(s,t){return It(s,t)||s.state.dataUpdatedAt>0&&it(s,t,t.refetchOnMount)}function it(s,t,e){if(t.enabled!==!1){const i=typeof e=="function"?e(s):e;return i==="always"||i!==!1&&nt(s,t)}return!1}function pt(s,t,e,i){return e.enabled!==!1&&(s!==t||i.enabled===!1)&&(!e.suspense||s.state.status!=="error")&&nt(s,e)}function nt(s,t){return s.isStaleByTime(t.staleTime)}function Tt(s,t){return!J(s.getCurrentResult(),t)}var Rt=v.createContext(!1),Pt=()=>v.useContext(Rt);Rt.Provider;function Dt(){let s=!1;return{clearReset:()=>{s=!1},reset:()=>{s=!0},isReset:()=>s}}var xt=v.createContext(Dt()),At=()=>v.useContext(xt);function Mt(s,t){return typeof s=="function"?s(...t):!!s}var Lt=(s,t)=>{(s.suspense||s.throwOnError)&&(t.isReset()||(s.retryOnMount=!1))},jt=s=>{v.useEffect(()=>{s.clearReset()},[s])},$t=({result:s,errorResetBoundary:t,throwOnError:e,query:i})=>s.isError&&!t.isReset()&&!s.isFetching&&Mt(e,[s.error,i]),kt=s=>{s.suspense&&typeof s.staleTime!="number"&&(s.staleTime=1e3)},Bt=(s,t)=>(s==null?void 0:s.suspense)&&t.isPending,Kt=(s,t,e)=>t.fetchOptimistic(s).catch(()=>{e.clearReset()});function Nt(s,t,e){const i=Qt(e),p=Pt(),a=At(),o=i.defaultQueryOptions(s);o._optimisticResults=p?"isRestoring":"optimistic",kt(o),Lt(o,a),jt(a);const[l]=v.useState(()=>new t(i,o)),g=l.getOptimisticResult(o);if(v.useSyncExternalStore(v.useCallback(F=>{const u=p?()=>{}:l.subscribe(bt.batchCalls(F));return l.updateResult(),u},[l,p]),()=>l.getCurrentResult(),()=>l.getCurrentResult()),v.useEffect(()=>{l.setOptions(o,{listeners:!1})},[o,l]),Bt(o,g))throw l.setOptions(o,{listeners:!1}),Kt(o,l,a);if($t({result:g,errorResetBoundary:a,throwOnError:o.throwOnError,query:l.getCurrentQuery()}))throw g.error;return o.notifyOnChangeProps?g:l.trackResult(g)}function Gt(s,t){return Nt(s,Ft,t)}const Vt=async s=>{try{return(await(await fetch(s)).json()).map(p=>p.path)}catch{}},gt="AgustinCartaya",vt="portfolio",Wt=`https://raw.githubusercontent.com/${gt}/${vt}/main/`,Ht=async s=>{try{const t=`https://api.github.com/repos/${gt}/${vt}/contents/${s}`,e=await Vt(t),i=await Promise.all(e.map(a=>fetch(`${Wt}${a}/description.json`)));return await Promise.all(i.map(async a=>{try{return await a.json()}catch(o){throw new Error("Failed to parse JSON:",o)}}))}catch(t){throw new Error(`Oops, an error occurred: ${t}`)}};export{Ht as f,Gt as u};