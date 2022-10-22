<template><div><h1 id="getting-pojavlauncher" tabindex="-1"><a class="header-anchor" href="#getting-pojavlauncher" aria-hidden="true">#</a> Getting PojavLauncher</h1>
<h2 id="android" tabindex="-1"><a class="header-anchor" href="#android" aria-hidden="true">#</a> Android</h2>
<ul>
<li>Getting PojavLauncher on Android is divided into 3 parts:</li>
</ul>
<ol>
<li>
<p><RouterLink to="/guide/getting-pojavlauncher.html#releases-github-actions">Releases &amp; GitHub Actions</RouterLink></p>
</li>
<li>
<p><RouterLink to="/guide/getting-pojavlauncher.html#google-play">Google Play</RouterLink></p>
</li>
<li>
<p><RouterLink to="/guide/getting-pojavlauncher.html#building-from-source">Building from source</RouterLink></p>
</li>
</ol>
<h1 id="ios" tabindex="-1"><a class="header-anchor" href="#ios" aria-hidden="true">#</a> iOS</h1>
<ul>
<li>Getting PojavLauncher on iOS is divided into 2 parts:</li>
</ul>
<ol>
<li>
<p><RouterLink to="/guide/getting-pojavlauncher.html#jailbroken-installation">Jailbroken Installation</RouterLink></p>
</li>
<li>
<p><RouterLink to="/guide/getting-pojavlauncher.html#non-jailbroken-installation">Non-Jailbroken Installation</RouterLink></p>
</li>
</ol>
<h3 id="releases-github-actions" tabindex="-1"><a class="header-anchor" href="#releases-github-actions" aria-hidden="true">#</a> Releases &amp; GitHub Actions</h3>
<ol>
<li>You can get prebuilt app from <a href="https://github.com/PojavLauncherTeam/PojavLauncher/releases" target="_blank" rel="noopener noreferrer">stable releases<ExternalLinkIcon/></a> or <a href="https://github.com/PojavLauncherTeam/PojavLauncher/actions" target="_blank" rel="noopener noreferrer">automatic builds<ExternalLinkIcon/></a>.</li>
</ol>
<h3 id="google-play" tabindex="-1"><a class="header-anchor" href="#google-play" aria-hidden="true">#</a> Google Play</h3>
<ol start="2">
<li>You can get it from Google Play by clicking <a href="https://play.google.com/store/apps/details?id=net.kdt.pojavlaunch" target="_blank" rel="noopener noreferrer">here<ExternalLinkIcon/></a> or by clicking the badge below:
<a href="https://play.google.com/store/apps/details?id=net.kdt.pojavlaunch" target="_blank" rel="noopener noreferrer"><img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Google Play" loading="lazy"><ExternalLinkIcon/></a></li>
</ol>
<div class="custom-container warning">
<p class="custom-container-title">Note</p>
<p>PojavLauncher is removed from the shelves of Google Play. It is advised to use <a href="https://github.com/PojavLauncherTeam/PojavLauncher/actions/runs/2876960499" target="_blank" rel="noopener noreferrer">this GitHub Action<ExternalLinkIcon/></a></p>
</div>
<h3 id="building-from-source" tabindex="-1"><a class="header-anchor" href="#building-from-source" aria-hidden="true">#</a> Building from source</h3>
<ul>
<li>
<p>Even though it is well-explained, building from source requires skill, internet and time.</p>
</li>
<li>
<p>You can try building on Android with <a href="https://termux.dev" target="_blank" rel="noopener noreferrer">Termux<ExternalLinkIcon/></a>, but no support will be included for it.</p>
</li>
<li>
<p>It is recommended to clone the PojavLauncher repository before starting <a href="https://criticalrange.github.io/guide/getting-pojavlauncher.html#setting-up-jre" target="_blank" rel="noopener noreferrer">Setting Up JRE<ExternalLinkIcon/></a></p>
</li>
<li>
<p><code v-pre>git clone https://github.com/PojavLauncherTeam/PojavLauncher</code></p>
</li>
</ul>
<h4 id="setting-up-jre" tabindex="-1"><a class="header-anchor" href="#setting-up-jre" aria-hidden="true">#</a> Setting up JRE</h4>
<ul>
<li>
<p>You can download it from <a href="https://github.com/PojavLauncherTeam/android-openjdk-build-multiarch/actions" target="_blank" rel="noopener noreferrer">CI Auto Builds<ExternalLinkIcon/></a> if you don't want to/can't build.</p>
</li>
<li>
<p>Source: <a href="https://github.com/PojavLauncherTeam/android-openjdk-build-multiarch" target="_blank" rel="noopener noreferrer">PojavLauncherTeam/android-openjdk-build-multiarch<ExternalLinkIcon/></a></p>
</li>
</ul>
<h5 id="android-1" tabindex="-1"><a class="header-anchor" href="#android-1" aria-hidden="true">#</a> Android</h5>
<ul>
<li>Clone the git repository of PojavLauncherTeam/android-openjdk-build-multiarch</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>git clone https://github.com/PojavLauncherTeam/android-openjdk-build-multiarch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>cd to the cloned repository</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>cd android-openjdk-build-multiarch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>Download Android NDK r10e from <a href="https://github.com/android/ndk/wiki/Unsupported-Downloads#r10e" target="_blank" rel="noopener noreferrer">here<ExternalLinkIcon/></a> and place it in this directory with a file explorer. (Can't automatically download because of EULA)</li>
</ul>
<div class="custom-container warning">
<p class="custom-container-title">Note</p>
<p>Do not attempt to build using a newer or older NDK, it will lead to compilation errors.</p>
</div>
<h5 id="ios-1" tabindex="-1"><a class="header-anchor" href="#ios-1" aria-hidden="true">#</a> iOS</h5>
<ul>
<li>Get the latest <a href="https://developer.apple.com/xcode/" target="_blank" rel="noopener noreferrer">Xcode<ExternalLinkIcon/></a> (tested with Xcode 12).</li>
</ul>
<h6 id="platform-and-architecture-specific-environment-variables" tabindex="-1"><a class="header-anchor" href="#platform-and-architecture-specific-environment-variables" aria-hidden="true">#</a> Platform and architecture specific environment variables</h6>
<table>
<thead>
<tr>
<th>Platform</th>
<th>Architecture</th>
<th>Target</th>
<th>Target_JDK</th>
</tr>
</thead>
<tbody>
<tr>
<td>Android</td>
<td>armv8/aarch64</td>
<td>aarch64-linux-android</td>
<td>aarch64</td>
</tr>
<tr>
<td>Android</td>
<td>armv7/aarch32</td>
<td>arm-linux-androideabi</td>
<td>arm</td>
</tr>
<tr>
<td>Android</td>
<td>x86/i686</td>
<td>i686-linux-android</td>
<td>x86</td>
</tr>
<tr>
<td>Android</td>
<td>x86_64/amd64</td>
<td>x86_64-linux-android</td>
<td>x86_64</td>
</tr>
<tr>
<td>iOS/iPadOS</td>
<td>armv8/aarch64</td>
<td>aarch64-macos-ios</td>
<td>aarch64</td>
</tr>
</tbody>
</table>
<h6 id="building-jre-java-runtime-environment" tabindex="-1"><a class="header-anchor" href="#building-jre-java-runtime-environment" aria-hidden="true">#</a> Building JRE (Java Runtime Environment)</h6>
<p>:::: code-group
::: code-group-item Android</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">BUILD_IOS</span><span class="token operator">=</span><span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>:::
::: code-group-item iOS</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">BUILD_IOS</span><span class="token operator">=</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>:::
::::</p>
<p><code v-pre>export BUILD_FREETYPE_VERSION=[2.10.4]</code></p>
<div class="custom-container tip">
<p class="custom-container-title">Tips</p>
<p>You can use versions <strong>between 2.6.2 and 2.10.4</strong> but <strong>2.10.4</strong> is preferred.</p>
</div>
<p><code v-pre>export JDK_DEBUG_LEVEL=[release]</code></p>
<div class="custom-container tip">
<p class="custom-container-title">Tips</p>
<p>You can use <strong>release</strong>, <strong>fastdebug</strong> and <strong>debug</strong>, but <strong>release</strong> is preferred</p>
</div>
<p><code v-pre>export JVM_VARIANTS=[client]</code></p>
<div class="custom-container tip">
<p class="custom-container-title">Tips</p>
<p>You can use <strong>client</strong> and <strong>server</strong> variants, <strong>Client</strong> is for <strong>aarch32</strong> and <strong>server</strong> is for <strong>other architectures</strong></p>
</div>
<p>(Android only)</p>
<p><code v-pre>./extractndk.sh</code></p>
<p><code v-pre>./maketoolchain.sh</code></p>
<ul>
<li>Get CUPS, Freetype and build Freetype</li>
</ul>
<p><code v-pre>./getlibs.sh</code></p>
<p><code v-pre>./buildlibs.sh</code></p>
<ul>
<li>Clone JDK, run once</li>
</ul>
<p><code v-pre>./clonejdk.sh</code></p>
<ul>
<li>Configure JDK and build</li>
</ul>
<p><code v-pre>./buildjdk.sh</code></p>
<div class="custom-container tip">
<p class="custom-container-title">Tips</p>
<p>If no configuration is changed, run <code v-pre>sh makejdkwithoutconfigure.sh</code> instead</p>
</div>
<ul>
<li>And finally, pack the built JDK</li>
</ul>
<p><code v-pre>./removejdkdebuginfo.sh</code></p>
<p><code v-pre>./tarjdk.sh</code></p>
<h4 id="lwjgl" tabindex="-1"><a class="header-anchor" href="#lwjgl" aria-hidden="true">#</a> LWJGL</h4>
<ul>
<li>Coming soon</li>
</ul>
<h4 id="building-the-launcher" tabindex="-1"><a class="header-anchor" href="#building-the-launcher" aria-hidden="true">#</a> Building the Launcher</h4>
<h5 id="updating-translations" tabindex="-1"><a class="header-anchor" href="#updating-translations" aria-hidden="true">#</a> Updating translations</h5>
<ul>
<li>
<p>Updating translations is easier thanks to language list updater scripts</p>
</li>
<li>
<p>Just run this command and it'll be automatically updated from Crowdin.</p>
</li>
</ul>
<p>:::: code-group
::: code-group-item Windows</p>
<div class="language-bat line-numbers-mode" data-ext="bat"><pre v-pre class="language-bat"><code>scripts\languagelist_updater.bat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>:::
::: code-group-item Linux/MacOS</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">chmod</span> +x scripts/languagelist_updater.sh
<span class="token function">bash</span> scripts/languagelist_updater.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>:::
::::</p>
<h5 id="build-glfw-stub" tabindex="-1"><a class="header-anchor" href="#build-glfw-stub" aria-hidden="true">#</a> Build GLFW Stub</h5>
<p>:::: code-group
::: code-group-item Windows</p>
<div class="language-gradlew line-numbers-mode" data-ext="gradlew"><pre v-pre class="language-gradlew"><code>./gradlew :jre_lwjgl3glfw:build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>:::
::: code-group-item Linux/MacOS</p>
<div class="language-gradle line-numbers-mode" data-ext="gradle"><pre v-pre class="language-gradle"><code>gradle <span class="token punctuation">:</span>jre_lwjgl3glfw<span class="token punctuation">:</span>build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>:::
::::</p>
<h5 id="build-the-launcher" tabindex="-1"><a class="header-anchor" href="#build-the-launcher" aria-hidden="true">#</a> Build the Launcher</h5>
<p>:::: code-group
::: code-group-item Windows</p>
<div class="language-gradlew line-numbers-mode" data-ext="gradlew"><pre v-pre class="language-gradlew"><code>./gradlew.bat :app_pojavlauncher:assembleDebug
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>:::
::: code-group-item Linux/MacOS</p>
<div class="language-gradle line-numbers-mode" data-ext="gradle"><pre v-pre class="language-gradle"><code><span class="token punctuation">.</span>/gradlew <span class="token punctuation">:</span>app_pojavlauncher<span class="token punctuation">:</span>assembleDebug
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>:::
::::</p>
<h3 id="jailbroken-installation" tabindex="-1"><a class="header-anchor" href="#jailbroken-installation" aria-hidden="true">#</a> Jailbroken Installation</h3>
<h3 id="non-jailbroken-installation" tabindex="-1"><a class="header-anchor" href="#non-jailbroken-installation" aria-hidden="true">#</a> Non-Jailbroken Installation</h3>
</div></template>


