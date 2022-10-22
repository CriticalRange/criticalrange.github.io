<template><div><h1 id="minecraft-version-support" tabindex="-1"><a class="header-anchor" href="#minecraft-version-support" aria-hidden="true">#</a> Minecraft version support</h1>
<p>With each new Minecraft release comes questions: how well does it play nice with PojavLauncher?</p>
<p>Thanks to the hard work from PojavLauncherTeam, both the Android and the iOS port now cover most Minecraft versions...</p>
<p>...with some small exceptions that will be listed below.</p>
<h3 id="current-known-compatibility-problems-with-pojavlauncher-android-as-of-the-version-crocus-v3-openjdk" tabindex="-1"><a class="header-anchor" href="#current-known-compatibility-problems-with-pojavlauncher-android-as-of-the-version-crocus-v3-openjdk" aria-hidden="true">#</a> Current known compatibility problems with PojavLauncher Android (as of the version <code v-pre>crocus_v3-openjdk</code>)</h3>
<table>
<thead>
<tr>
<th>Version</th>
<th>Current problem</th>
<th>Workaround</th>
</tr>
</thead>
<tbody>
<tr>
<td>1.13 to 1.13.2</td>
<td>Unable to access video settings menu</td>
<td>Unknown; the only way to change these settings is to use options.txt.</td>
</tr>
<tr>
<td>1.14 to 1.14.2 (1.14.3 is not yet tested)</td>
<td>Crashes with java.lang.NullPointerException after a few taps</td>
<td>Unknown</td>
</tr>
<tr>
<td>Fabric 1.14+</td>
<td>Game crashes on startup</td>
<td>- Go to /sdcard/games/PojavLauncher/.minecraft/.fabric/remappedJars/minecraft-<strong><strong>[Minecraft version]</strong></strong> (for Android 10+: /sdcard/Android/data/net.kdt.pojavlaunch(.debug)/.minecraft/.fabric/remappedJars/minecraft-<strong><strong>[Minecraft version]</strong></strong>), then rename zipfstmp__<strong>[random number]</strong><strong>.tmp to intermediary-fabric-loader-</strong><strong>[Fabric loader version]</strong><strong>-</strong><strong>[Minecraft version]</strong>__.jar</td>
</tr>
<tr>
<td>Up to 1.8.9</td>
<td>Game crashes a couple of minutes after joining the world</td>
<td>Enable VBO in Minecraft settings. Avoid using OptiFine.</td>
</tr>
<tr>
<td>1.17 or later</td>
<td>Game crashes when loading or exits when initializing</td>
<td>Be sure to check <a href="https://pojavlauncherteam.github.io/updates/117.html" target="_blank" rel="noopener noreferrer">this guide<ExternalLinkIcon/></a>.</td>
</tr>
</tbody>
</table>
<h3 id="current-known-compatibility-problems-with-pojavlauncher-ios-as-of-the-version-2-0-alpha8" tabindex="-1"><a class="header-anchor" href="#current-known-compatibility-problems-with-pojavlauncher-ios-as-of-the-version-2-0-alpha8" aria-hidden="true">#</a> Current known compatibility problems with PojavLauncher iOS (as of the version 2.0~alpha8)</h3>
<table>
<thead>
<tr>
<th>Version</th>
<th>Current problem</th>
<th>Workaround</th>
</tr>
</thead>
<tbody>
<tr>
<td>1.8.9 or below (up to 1.12.2 on some testers)</td>
<td>Game crashes after a couple of seconds of joining the world</td>
<td>Specify the environment variable <code v-pre>LIBGL_USEVBO=0</code>. The instruction to do this is <a href="https://pojavlauncherteam.github.io/ios/wiki/going-further/environment-variables.html" target="_blank" rel="noopener noreferrer">here<ExternalLinkIcon/></a>. OptiFine is not yet tested, however, it's thought to be unstable.</td>
</tr>
<tr>
<td>1.2.1-1.2.4 and 1.4.4-1.4.7</td>
<td>Game crashes when initializing</td>
<td>1.4.4-1.4.7: Specify the environment variable <code v-pre>LIBGL_VERSION=2.1</code>. 1.2.1-1.2.4: Unknown (the cause of problem is the same, but the trick above doesn't work). Forge 1.2.3-1.2.4 are known to work (but without FML loaded?)</td>
</tr>
<tr>
<td>All RubyDung versions</td>
<td>Black screen</td>
<td>Unknown</td>
</tr>
<tr>
<td>1.17 or later</td>
<td>Game crashes</td>
<td>Be sure to check <a href="https://pojavlauncherteam.github.io/updates/117.html" target="_blank" rel="noopener noreferrer">this guide<ExternalLinkIcon/></a>. Note that some testers reported that the assets-v0 trick stops working from 21w37a onwards.</td>
</tr>
</tbody>
</table>
<h2 id="note-for-pojavlauncher-ios-version-1-2" tabindex="-1"><a class="header-anchor" href="#note-for-pojavlauncher-ios-version-1-2" aria-hidden="true">#</a> Note for PojavLauncher iOS version 1.2:</h2>
<p>This version can not launch any version from 1.5.2 or below and any Forge build before 36.1.0 (for 1.16.5). This is because of the need to use OpenJDK 16, which was already ported to iOS by <a href="https://twitter.com/diatrus" target="_blank" rel="noopener noreferrer">@Diatrus<ExternalLinkIcon/></a>.</p>
<p>This build is also thought to be incompatible with 1.17 or above (not yet tested).</p>
<h2 id="note-for-pojavlauncher-android-build-20210321-backwards" tabindex="-1"><a class="header-anchor" href="#note-for-pojavlauncher-android-build-20210321-backwards" aria-hidden="true">#</a> Note for PojavLauncher Android build 20210321 backwards:</h2>
<p>Due to the fact that this version doesn’t have the ability to add Java runtimes, and also bundled with Java 8, it’s not compatible with 1.17 or above.</p>
</div></template>


