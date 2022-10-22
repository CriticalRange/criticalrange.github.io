import{aa as r,B as a,C as s,A as e,N as t,I as o,P as l}from"./app.db6f54ca.js";import"./vendor.8537dd4d.js";const i={},h=e("h1",{id:"minecraft-version-support",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#minecraft-version-support","aria-hidden":"true"},"#"),t(" Minecraft version support")],-1),d=e("p",null,"With each new Minecraft release comes questions: how well does it play nice with PojavLauncher?",-1),u=e("p",null,"Thanks to the hard work from PojavLauncherTeam, both the Android and the iOS port now cover most Minecraft versions...",-1),c=e("p",null,"...with some small exceptions that will be listed below.",-1),p=e("h3",{id:"current-known-compatibility-problems-with-pojavlauncher-android-as-of-the-version-crocus-v3-openjdk",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#current-known-compatibility-problems-with-pojavlauncher-android-as-of-the-version-crocus-v3-openjdk","aria-hidden":"true"},"#"),t(" Current known compatibility problems with PojavLauncher Android (as of the version "),e("code",null,"crocus_v3-openjdk"),t(")")],-1),_=e("thead",null,[e("tr",null,[e("th",null,"Version"),e("th",null,"Current problem"),e("th",null,"Workaround")])],-1),b=e("tr",null,[e("td",null,"1.13 to 1.13.2"),e("td",null,"Unable to access video settings menu"),e("td",null,"Unknown; the only way to change these settings is to use options.txt.")],-1),m=e("tr",null,[e("td",null,"1.14 to 1.14.2 (1.14.3 is not yet tested)"),e("td",null,"Crashes with java.lang.NullPointerException after a few taps"),e("td",null,"Unknown")],-1),f=e("tr",null,[e("td",null,"Fabric 1.14+"),e("td",null,"Game crashes on startup"),e("td",null,[t("- Go to /sdcard/games/PojavLauncher/.minecraft/.fabric/remappedJars/minecraft-"),e("strong",null,[e("strong",null,"[Minecraft version]")]),t(" (for Android 10+: /sdcard/Android/data/net.kdt.pojavlaunch(.debug)/.minecraft/.fabric/remappedJars/minecraft-"),e("strong",null,[e("strong",null,"[Minecraft version]")]),t("), then rename zipfstmp__"),e("strong",null,"[random number]"),e("strong",null,".tmp to intermediary-fabric-loader-"),e("strong",null,"[Fabric loader version]"),e("strong",null,"-"),e("strong",null,"[Minecraft version]"),t("__.jar")])],-1),v=e("tr",null,[e("td",null,"Up to 1.8.9"),e("td",null,"Game crashes a couple of minutes after joining the world"),e("td",null,"Enable VBO in Minecraft settings. Avoid using OptiFine.")],-1),w=e("td",null,"1.17 or later",-1),g=e("td",null,"Game crashes when loading or exits when initializing",-1),k={href:"https://pojavlauncherteam.github.io/updates/117.html",target:"_blank",rel:"noopener noreferrer"},j=e("h3",{id:"current-known-compatibility-problems-with-pojavlauncher-ios-as-of-the-version-2-0-alpha8",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#current-known-compatibility-problems-with-pojavlauncher-ios-as-of-the-version-2-0-alpha8","aria-hidden":"true"},"#"),t(" Current known compatibility problems with PojavLauncher iOS (as of the version 2.0~alpha8)")],-1),y=e("thead",null,[e("tr",null,[e("th",null,"Version"),e("th",null,"Current problem"),e("th",null,"Workaround")])],-1),x=e("td",null,"1.8.9 or below (up to 1.12.2 on some testers)",-1),L=e("td",null,"Game crashes after a couple of seconds of joining the world",-1),B=e("code",null,"LIBGL_USEVBO=0",-1),O={href:"https://pojavlauncherteam.github.io/ios/wiki/going-further/environment-variables.html",target:"_blank",rel:"noopener noreferrer"},G=e("tr",null,[e("td",null,"1.2.1-1.2.4 and 1.4.4-1.4.7"),e("td",null,"Game crashes when initializing"),e("td",null,[t("1.4.4-1.4.7: Specify the environment variable "),e("code",null,"LIBGL_VERSION=2.1"),t(". 1.2.1-1.2.4: Unknown (the cause of problem is the same, but the trick above doesn't work). Forge 1.2.3-1.2.4 are known to work (but without FML loaded?)")])],-1),N=e("tr",null,[e("td",null,"All RubyDung versions"),e("td",null,"Black screen"),e("td",null,"Unknown")],-1),P=e("td",null,"1.17 or later",-1),V=e("td",null,"Game crashes",-1),A={href:"https://pojavlauncherteam.github.io/updates/117.html",target:"_blank",rel:"noopener noreferrer"},M=e("h2",{id:"note-for-pojavlauncher-ios-version-1-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#note-for-pojavlauncher-ios-version-1-2","aria-hidden":"true"},"#"),t(" Note for PojavLauncher iOS version 1.2:")],-1),S={href:"https://twitter.com/diatrus",target:"_blank",rel:"noopener noreferrer"},C=e("p",null,"This build is also thought to be incompatible with 1.17 or above (not yet tested).",-1),E=e("h2",{id:"note-for-pojavlauncher-android-build-20210321-backwards",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#note-for-pojavlauncher-android-build-20210321-backwards","aria-hidden":"true"},"#"),t(" Note for PojavLauncher Android build 20210321 backwards:")],-1),F=e("p",null,"Due to the fact that this version doesn’t have the ability to add Java runtimes, and also bundled with Java 8, it’s not compatible with 1.17 or above.",-1);function T(U,I){const n=l("ExternalLinkIcon");return a(),s("div",null,[h,d,u,c,p,e("table",null,[_,e("tbody",null,[b,m,f,v,e("tr",null,[w,g,e("td",null,[t("Be sure to check "),e("a",k,[t("this guide"),o(n)]),t(".")])])])]),j,e("table",null,[y,e("tbody",null,[e("tr",null,[x,L,e("td",null,[t("Specify the environment variable "),B,t(". The instruction to do this is "),e("a",O,[t("here"),o(n)]),t(". OptiFine is not yet tested, however, it's thought to be unstable.")])]),G,N,e("tr",null,[P,V,e("td",null,[t("Be sure to check "),e("a",A,[t("this guide"),o(n)]),t(". Note that some testers reported that the assets-v0 trick stops working from 21w37a onwards.")])])])]),M,e("p",null,[t("This version can not launch any version from 1.5.2 or below and any Forge build before 36.1.0 (for 1.16.5). This is because of the need to use OpenJDK 16, which was already ported to iOS by "),e("a",S,[t("@Diatrus"),o(n)]),t(".")]),C,E,F])}const z=r(i,[["render",T],["__file","supported-versions.html.vue"]]);export{z as default};
