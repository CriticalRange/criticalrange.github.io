if(!self.define){let e,s={};const a=(a,f)=>(a=new URL(a+".js",f).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(f,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let r={};const d=e=>a(e,c),b={module:{uri:c},exports:r,require:d};s[c]=Promise.all(f.map((e=>b[e]||d(e)))).then((e=>(i(...e),r)))}}define(["./workbox-24a20688"],(function(e){"use strict";e.setCacheNameDetails({prefix:"Docs Demo"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html.c563def2.js",revision:"cf5a6866d545b8456fda8c095f6ec260"},{url:"assets/404.html.f9b64da3.js",revision:"99e4888f4c235f99cbdbb74ab2089f81"},{url:"assets/app.8e091114.js",revision:"7acb62c743ce81a1533627865329e17d"},{url:"assets/auto.06425392.js",revision:"38849a17ce4dd59d54b7f7fea18ba806"},{url:"assets/baz.html.11eb62b4.js",revision:"b77e1de6cbb0bf9229c0c5c530ca8012"},{url:"assets/baz.html.349a818d.js",revision:"ad25e87b5994d46f181e1aa991b8b4eb"},{url:"assets/baz.html.85380b79.js",revision:"a34b5665fa76f019f0081285877c0a36"},{url:"assets/baz.html.e9edd615.js",revision:"529c46fa8576a8032f2b04349609f985"},{url:"assets/disable.html.27cf0709.js",revision:"993e9f979d88a2467c08100b9dc1ba3e"},{url:"assets/disable.html.2e9158ad.js",revision:"a5456b52e2cc04dd24441d11d17537a7"},{url:"assets/disable.html.ad7a5e4c.js",revision:"58b6b5f2cec6749fe0b8f77b6f0593f5"},{url:"assets/disable.html.f7bb3a4f.js",revision:"c24a60312a11508b9cdab9326ff34a99"},{url:"assets/encrypt.html.013da16b.js",revision:"3cd1b832ccdb26a5992d2f3037ba0c68"},{url:"assets/encrypt.html.53cf9c71.js",revision:"dfaada3b066fccff12db1da7e0086a99"},{url:"assets/encrypt.html.9a9e3451.js",revision:"8eacb1182a58248dd0e570a1213079b7"},{url:"assets/encrypt.html.ebb2433e.js",revision:"caa5fe4e815a5c6fc3af98ecebbefc22"},{url:"assets/flowchart.parse.1479ec3f.js",revision:"a3bf05ec1dc83c91d060510bd82032b8"},{url:"assets/highlight.esm.1d809baf.js",revision:"0949b348e0e7d26440159b7c6c417cad"},{url:"assets/index.d2b3e8c7.js",revision:"1fef675066bb95ec3b3edbc16cbab87e"},{url:"assets/index.html.1fe97cb5.js",revision:"11714af7f4d488b75002e7e8020ebff1"},{url:"assets/index.html.31b0bff8.js",revision:"5c1d0b32d29095f62fd88a3553165920"},{url:"assets/index.html.33b4216a.js",revision:"12c90e57934f61842e9cfd762fe2efe1"},{url:"assets/index.html.4ecf91b8.js",revision:"00a96510f8569eb3d2562cd583a4e4f2"},{url:"assets/index.html.560b1669.js",revision:"71f96ede720d18659ee5a3edc18ccc69"},{url:"assets/index.html.6aefe526.js",revision:"e6420ba55256ac3aad5437a7084d65b3"},{url:"assets/index.html.6ba4c11b.js",revision:"12f579f30e060e35d9f9f79bdc1ba90e"},{url:"assets/index.html.717ab7e1.js",revision:"3b8f8bb21a70678b8c399f5cf0e09a20"},{url:"assets/index.html.73f42ff1.js",revision:"c32aba6e421bc5d970257462300ff216"},{url:"assets/index.html.78359880.js",revision:"593dd20591e58ae1e8b2c34c7529c6e6"},{url:"assets/index.html.80fd1f6c.js",revision:"b735150418fb36b4db3394cfb58481aa"},{url:"assets/index.html.932c08e1.js",revision:"9c93319efa7cc44b9bed206194189132"},{url:"assets/index.html.969244d6.js",revision:"b7902ac81207a23ea62d2e93a5b2b6b8"},{url:"assets/index.html.9d19a83e.js",revision:"11f7208819967d0d1edfef2a3e5a88d0"},{url:"assets/index.html.b69e8d65.js",revision:"4755a2ece662e3947e9b7b7316049139"},{url:"assets/index.html.c5a32150.js",revision:"eccb570ac225da2f3e476948f1b5b515"},{url:"assets/index.html.c72f4176.js",revision:"56e411531ea3c581d2f959c86f8230bc"},{url:"assets/index.html.d7cc9f31.js",revision:"b453d03fd731f2270a7174d4b8316f76"},{url:"assets/index.html.e258e4a0.js",revision:"f9ada5e1153f3d363fb1e089fb670be1"},{url:"assets/index.html.f5599639.js",revision:"5d1728232aa96a35d9c8863d81fd5011"},{url:"assets/KaTeX_AMS-Regular.0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular.30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular.68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold.07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold.1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold.de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular.3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular.5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular.ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold.74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold.9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold.9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular.1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular.51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular.5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold.0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold.138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold.c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic.70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic.99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic.a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic.0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic.97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic.f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular.c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular.c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular.d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic.850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic.dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic.f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic.08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic.7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic.8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold.1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold.e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold.ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic.00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic.3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic.91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular.11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular.68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular.f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular.036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular.1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular.d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular.6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular.95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular.c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular.2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular.a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular.d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular.500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular.6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular.99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular.a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular.c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular.71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular.e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular.f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/league-gothic.38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic.5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic.8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/markdown.esm.36cfeb92.js",revision:"2782fb14c80757ca6a815363b87defce"},{url:"assets/markdown.html.1c72231e.js",revision:"d320ff18c51bbf4bbf812685ebfcb386"},{url:"assets/markdown.html.7317ea05.js",revision:"f1d21fb1551fce5de5bc3ffa593a4956"},{url:"assets/markdown.html.bca6e2fa.js",revision:"aa06b3e9de7a6edd1dc49018250e290c"},{url:"assets/markdown.html.eaf8d57b.js",revision:"8d964f8627180466fe131b1e01136cd9"},{url:"assets/math.esm.0abc2843.js",revision:"c5f77dc064ac53005c0e5446bb6715b0"},{url:"assets/mermaid.esm.min.0e041931.js",revision:"f745f5587cb1e3ca09799ec4df73c542"},{url:"assets/notes.esm.55c982c5.js",revision:"fbad6b0fa80d99a444266ec8836ab70c"},{url:"assets/page.html.1055b4f1.js",revision:"9e72e88373d6a77657cd568dda990ea7"},{url:"assets/page.html.81558c05.js",revision:"ee78842cf031817b4b927413e0259a82"},{url:"assets/page.html.8170ed27.js",revision:"09840fff7c3a852d49e0d2d6a487057f"},{url:"assets/page.html.b4cd5655.js",revision:"3c94ddc69e7184e198ec71527cebd42f"},{url:"assets/photoswipe.esm.f594e77b.js",revision:"58c8e5a3e1981882b36217b62f1c7bae"},{url:"assets/ray.html.6ca1f655.js",revision:"0d8ac6484e3e1686f35498b1affc0169"},{url:"assets/ray.html.7949c04f.js",revision:"436a92e24638e0c1c235e4b2adc09465"},{url:"assets/ray.html.aff6792d.js",revision:"c621a6e5b666809741629c66589dc432"},{url:"assets/ray.html.ec7d370b.js",revision:"3a212c428cc78b66b06bb11e45c2b7e9"},{url:"assets/reveal.esm.e6b6f4fd.js",revision:"2ae13f3f401294fee79646ed1f70afec"},{url:"assets/search.esm.678cee5b.js",revision:"7c1ff9e9285b9354b44c719f60e1cfd0"},{url:"assets/slides.html.2c493616.js",revision:"6910bd4b5ac330ebb14b711a5dc029b6"},{url:"assets/slides.html.6133f4c2.js",revision:"1648c48570f24d0179b588d3ef0ec5d5"},{url:"assets/slides.html.dc6258e4.js",revision:"04242567bffa5e349d7adee68b715b7a"},{url:"assets/slides.html.f7258761.js",revision:"b055f174ab05f0ea0c0fd1c7ddf46fe4"},{url:"assets/source-sans-pro-italic.05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic.ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic.d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular.c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular.d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular.dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold.a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold.b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold.ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic.7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic.dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic.e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/style.359e276b.css",revision:"abe1534a5c26aec447691640c109ad6c"},{url:"assets/vendor.bfaafc04.js",revision:"e7bc3ea6b8a38482c3b6bff1b0781ead"},{url:"assets/vue-repl.4d41f0bc.js",revision:"43bd1ab1fafad78ef5fc12d3cdc6a37b"},{url:"assets/VuePlayground.2236e97b.js",revision:"7443b2a49ce695ef58dabb530106462a"},{url:"assets/waline-meta.eb136eb5.js",revision:"614e9510b9a7a9c2164ae5827a7649f4"},{url:"assets/zoom.esm.1d3cee89.js",revision:"9ea0d576c1bddb5122016122d8a24c68"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"404.html",revision:"60862cf593aedfa8451da0cf54f2bbf3"},{url:"demo/disable.html",revision:"306e28e0152959638cff9bfd2f255651"},{url:"demo/encrypt.html",revision:"56eea18f25997245371aa4f1188de27f"},{url:"demo/index.html",revision:"87809c86a7a1307d7dec4f724d0b96a0"},{url:"demo/markdown.html",revision:"22144aab73e22c1f390b565bef9fb1bf"},{url:"demo/page.html",revision:"2166904274d73faf6d504c65fb2545c6"},{url:"guide/bar/baz.html",revision:"ff8cadf9caec2ba99012fa62aa17aedb"},{url:"guide/bar/index.html",revision:"6aede6f6dacc026293c478e9592c2748"},{url:"guide/foo/index.html",revision:"c31c02012ff405ee127c891497849903"},{url:"guide/foo/ray.html",revision:"7347496e9457bf734328ae0d9cf026e9"},{url:"guide/index.html",revision:"8aaec2a2d2ed08c36d530941a0730918"},{url:"index.html",revision:"14750d58788c67dbbeba7fa252704b8f"},{url:"slides.html",revision:"1154681a407be149000c0289e76d6f16"},{url:"zh/demo/disable.html",revision:"c27d3c1fa366d330efa53645d7597462"},{url:"zh/demo/encrypt.html",revision:"3740c56be652728b16ea7e3b1bc4c52d"},{url:"zh/demo/index.html",revision:"64e1b6ee67fcb0d098a4acb118db5b4f"},{url:"zh/demo/markdown.html",revision:"577c665245871945c34b6a265b235ee2"},{url:"zh/demo/page.html",revision:"40dd2bbbff9945bf4b4d92b3ce870e92"},{url:"zh/guide/bar/baz.html",revision:"a4af1676758e11f4b4f292be673d1cd0"},{url:"zh/guide/bar/index.html",revision:"6d49cebf1b154dc1141e242e68efe476"},{url:"zh/guide/foo/index.html",revision:"ad4e80239661314c72726e41bf43d9a8"},{url:"zh/guide/foo/ray.html",revision:"c6c6ebaad9e9861bde90a2bb17f30018"},{url:"zh/guide/index.html",revision:"28630014d75ad0298aae060348dc3b0c"},{url:"zh/index.html",revision:"eb45c5f051e034791e21ee77958ebe0a"},{url:"zh/slides.html",revision:"942c0b4bff9c37c21c67e13becaa9798"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
