if(!self.define){let e,s={};const a=(a,f)=>(a=new URL(a+".js",f).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(f,d)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>a(e,i),b={module:{uri:i},exports:c,require:r};s[i]=Promise.all(f.map((e=>b[e]||r(e)))).then((e=>(d(...e),c)))}}define(["./workbox-24a20688"],(function(e){"use strict";e.setCacheNameDetails({prefix:"Docs Demo"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html.5f0d711d.js",revision:"c2c819962649f6dab69cfa31874da4e8"},{url:"assets/404.html.8d08d586.js",revision:"7005c3acdc67f9aaa77a7ce869d9cac3"},{url:"assets/app.16ca33a7.js",revision:"ddd5d27042179651f91ccd7333aad39c"},{url:"assets/auto.06425392.js",revision:"38849a17ce4dd59d54b7f7fea18ba806"},{url:"assets/baz.html.502dc564.js",revision:"1d1d0fdc171d9ef9f4072485986bcf24"},{url:"assets/baz.html.58cf0a5c.js",revision:"06479562580aecdf1ae94f9e9d5b19b7"},{url:"assets/baz.html.6999fc23.js",revision:"97f296b1f5f906be6bb9d3f58351ea29"},{url:"assets/baz.html.c3597d86.js",revision:"678790be6cba0fe9522f6ad94e721b09"},{url:"assets/disable.html.054d8dd4.js",revision:"e560b3db027f8a49857ca0d334beda47"},{url:"assets/disable.html.3e74d3b8.js",revision:"ea7b42df0c129e9891c566dbb429f201"},{url:"assets/disable.html.4b47def3.js",revision:"30c280ce9591d5639ce863a48bb7b5f4"},{url:"assets/disable.html.617cbf6b.js",revision:"90f8e65eb95c98f3774bd0d12acf807b"},{url:"assets/encrypt.html.47dccc24.js",revision:"440ae486d4fb82571d26223caba2cc3a"},{url:"assets/encrypt.html.813af0a3.js",revision:"cac012bc717a934014165b916e4ad111"},{url:"assets/encrypt.html.bd1f8f46.js",revision:"8d179d1bb80b4b3dd82d7f1d32f47a2a"},{url:"assets/encrypt.html.da5ca072.js",revision:"fee5a90aa1420704fd11892181d4f105"},{url:"assets/flowchart.parse.1479ec3f.js",revision:"a3bf05ec1dc83c91d060510bd82032b8"},{url:"assets/highlight.esm.1d809baf.js",revision:"0949b348e0e7d26440159b7c6c417cad"},{url:"assets/index.d2b3e8c7.js",revision:"1fef675066bb95ec3b3edbc16cbab87e"},{url:"assets/index.html.061ffc15.js",revision:"12383e01b2586390e69208fb7b4adabc"},{url:"assets/index.html.08607772.js",revision:"38a7e707a998f37c09f8eece10f78196"},{url:"assets/index.html.0dbdcfd5.js",revision:"273023fdf29ffa0f27d839770bc28dfd"},{url:"assets/index.html.11cd7f06.js",revision:"13452cbd3a41426a61c3968cd7e4ae0f"},{url:"assets/index.html.31e7a8b9.js",revision:"d1b361fb4de37c6e5b638bab3ddc9660"},{url:"assets/index.html.3bd557dd.js",revision:"69b273c7f41779494b955e0e4b5d0af9"},{url:"assets/index.html.5b4f5b43.js",revision:"c2f22b8c0b7269c3bbc36778a6ee5047"},{url:"assets/index.html.5c1e748e.js",revision:"651040a551a00271b141c9e671f34436"},{url:"assets/index.html.629633ec.js",revision:"03ecc766764d4045b710c1b825ee3faa"},{url:"assets/index.html.6649e9d8.js",revision:"cf48b8cb2e02e2a97cac160f3a4c1f68"},{url:"assets/index.html.74c48aed.js",revision:"be8d6aa41268eed1bb08ceceb6612a07"},{url:"assets/index.html.7c63d9c8.js",revision:"3ff5c0a348ffb9049f0e3731929defd0"},{url:"assets/index.html.81fcbedb.js",revision:"61a97d9c02998fd4a18f053b8a9bfbe9"},{url:"assets/index.html.b575374b.js",revision:"4da69d55a6e88ef81b3b1d9b9028d7dd"},{url:"assets/index.html.b6fc4121.js",revision:"5ba7c27c3d02c1bef05499238cfb502a"},{url:"assets/index.html.df5ce82f.js",revision:"e2dda3b8850de07a2c48c6d4e317e279"},{url:"assets/index.html.e2ddb877.js",revision:"59b4b7c62c1f12afc7b124f861b78e05"},{url:"assets/index.html.eb35afb6.js",revision:"a55b672e8b6690d64fe43bad588019d1"},{url:"assets/index.html.f754c03b.js",revision:"92d5ed79b76c520d255a3c57def83721"},{url:"assets/index.html.fd148c94.js",revision:"6f3c83fd53fc7a3fb1aa28da88bd72d5"},{url:"assets/KaTeX_AMS-Regular.0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular.30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular.68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold.07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold.1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold.de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular.3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular.5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular.ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold.74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold.9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold.9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular.1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular.51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular.5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold.0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold.138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold.c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic.70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic.99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic.a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic.0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic.97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic.f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular.c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular.c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular.d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic.850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic.dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic.f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic.08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic.7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic.8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold.1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold.e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold.ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic.00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic.3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic.91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular.11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular.68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular.f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular.036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular.1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular.d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular.6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular.95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular.c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular.2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular.a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular.d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular.500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular.6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular.99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular.a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular.c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular.71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular.e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular.f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/league-gothic.38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic.5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic.8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/markdown.esm.36cfeb92.js",revision:"2782fb14c80757ca6a815363b87defce"},{url:"assets/markdown.html.4955a948.js",revision:"434c4922f72612bc2ef24736260efac3"},{url:"assets/markdown.html.6b07e688.js",revision:"bc45c9742daf0b361cc715dd35e6abe7"},{url:"assets/markdown.html.a7311857.js",revision:"7e08e20bad1c578f3431bc02159d57d4"},{url:"assets/markdown.html.ed16a7ba.js",revision:"05e1d5e9f166497ca888436a0e504865"},{url:"assets/math.esm.0abc2843.js",revision:"c5f77dc064ac53005c0e5446bb6715b0"},{url:"assets/mermaid.esm.min.0e041931.js",revision:"f745f5587cb1e3ca09799ec4df73c542"},{url:"assets/notes.esm.55c982c5.js",revision:"fbad6b0fa80d99a444266ec8836ab70c"},{url:"assets/page.html.732f5560.js",revision:"ae18eb7067d76e6e244affc85aff4f20"},{url:"assets/page.html.80f39676.js",revision:"4ddf47c6fe5255a88b73fc1268235fe0"},{url:"assets/page.html.9f1019e2.js",revision:"0be93c1a5131a6d2df1f9d5bdc62ef6e"},{url:"assets/page.html.b1107dc8.js",revision:"df92f02131885dd10ea4f2fad8f8e875"},{url:"assets/photoswipe.esm.f594e77b.js",revision:"58c8e5a3e1981882b36217b62f1c7bae"},{url:"assets/ray.html.0bb3fccd.js",revision:"3a96d9fc3f23ba7804896a254cb85bdb"},{url:"assets/ray.html.3e09aeff.js",revision:"839ff57cd36878ef23130abc4db40b24"},{url:"assets/ray.html.575f3914.js",revision:"ef89284361a31f512d9d4b9d083bfc35"},{url:"assets/ray.html.6ddbbe77.js",revision:"28381534aafb1ec02e63bf0fc443b86d"},{url:"assets/reveal.esm.e6b6f4fd.js",revision:"2ae13f3f401294fee79646ed1f70afec"},{url:"assets/search.esm.678cee5b.js",revision:"7c1ff9e9285b9354b44c719f60e1cfd0"},{url:"assets/slides.html.38422a18.js",revision:"fe5b4f24d2c6fd92ddf7d14e1df70d7a"},{url:"assets/slides.html.553abbbd.js",revision:"f49b064ab380abaf6c5ca86d710d8635"},{url:"assets/slides.html.ba297c5a.js",revision:"1dbb347df3dc2b3d71a49ce3d428f7bd"},{url:"assets/slides.html.cfa29a2c.js",revision:"33c652a95bfc3b82a4f8736b987e86b0"},{url:"assets/source-sans-pro-italic.05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic.ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic.d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular.c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular.d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular.dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold.a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold.b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold.ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic.7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic.dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic.e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/style.359e276b.css",revision:"abe1534a5c26aec447691640c109ad6c"},{url:"assets/vendor.3e85b2ef.js",revision:"c44fbc0c243f9ba7d4a43989a9dd7379"},{url:"assets/vue-repl.ed94790e.js",revision:"3bc6f90a9a11afd5bbb084e406530d46"},{url:"assets/VuePlayground.94d5cda2.js",revision:"dac8cb54ac55a0f047a4322427f5a80b"},{url:"assets/waline-meta.eb136eb5.js",revision:"614e9510b9a7a9c2164ae5827a7649f4"},{url:"assets/zoom.esm.1d3cee89.js",revision:"9ea0d576c1bddb5122016122d8a24c68"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"404.html",revision:"634e9b08d49809d85fef84dd705c8bd2"},{url:"demo/disable.html",revision:"d875c7685c69586ba60b866953c664c1"},{url:"demo/encrypt.html",revision:"d5a3f92f1ed58f2d30e5e1c276ccc173"},{url:"demo/index.html",revision:"7784204c26a40309a9723f12f85b2c08"},{url:"demo/markdown.html",revision:"0079bad704fafd2ccb17388015d5693c"},{url:"demo/page.html",revision:"a79d210ec43aebd9705804aaf8ebc0d3"},{url:"guide/bar/baz.html",revision:"e3079772c77ffbfd11f6fc4efc05684b"},{url:"guide/bar/index.html",revision:"ece6309ea3a04a85575926146aa9fe72"},{url:"guide/foo/index.html",revision:"dd6b6a04c139d02f0b504cd0c9dd4b40"},{url:"guide/foo/ray.html",revision:"007c37ef8c0b5b238e08b14425164367"},{url:"guide/index.html",revision:"c5bf2ab9399428f7ca18f05a2e1c7365"},{url:"index.html",revision:"1c8c1a5c726b10030077bd26048e1c98"},{url:"slides.html",revision:"75e7a35abaf0b0c98cb5e4f17438bcf8"},{url:"zh/demo/disable.html",revision:"335e66e1d255884d811a99418f3f12ef"},{url:"zh/demo/encrypt.html",revision:"3a1d815424cdc142e65b37572b35313e"},{url:"zh/demo/index.html",revision:"6dd8d92d950e7619dda7a290f0d993f2"},{url:"zh/demo/markdown.html",revision:"1820bc186b807f18128c964f88144103"},{url:"zh/demo/page.html",revision:"e2a6e3fe1cca8b4342d53319b46d1098"},{url:"zh/guide/bar/baz.html",revision:"681c16c3bf27658647d269216804dcad"},{url:"zh/guide/bar/index.html",revision:"568661992990e845d6dfe97f83447d68"},{url:"zh/guide/foo/index.html",revision:"e98b56af1cebe90122430b12f8428be0"},{url:"zh/guide/foo/ray.html",revision:"1f6ae86d5370f753463c3aba8b58c881"},{url:"zh/guide/index.html",revision:"b8b3163ca14861c5a58c6fdf3ff1ed81"},{url:"zh/index.html",revision:"868a9c405bb669d3e5f02d8ade0fe351"},{url:"zh/slides.html",revision:"1b11ed186e71debf12f23a31268ddbe0"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
