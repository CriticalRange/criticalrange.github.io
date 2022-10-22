<template><div><h1 id="contributing-to-the-launchers" tabindex="-1"><a class="header-anchor" href="#contributing-to-the-launchers" aria-hidden="true">#</a> Contributing to the launchers</h1>
<ul>
<li>
<p>PojavLauncher is completely open source, so we're happy to accept your contributions to our launcher repositories, whether it be code or not. Here's some things to do for contributions:</p>
</li>
<li>
<p>Submit your changes through a pull request and be descriptive about what changed. This makes our jobs easier by helping us figure out what changed quicker.</p>
</li>
<li>
<p>Try not to lump multiple, unrelated changes into one pull. This can make it harder for us to review the code or cause a situation where nothing too productive <em>actually</em> changed. If you're going to make multiple, unrelated changes, try seeing what can be grouped with another, and submit multiple pull requests instead.</p>
</li>
<li>
<p>Be flexible and ready to change your code if required. We recommend keeping your fork healthy and up to date by creating pull requests on your repository (from PojavLauncherTeam to your fork) to grab the latest changes.</p>
</li>
</ul>
<p>The following should help decipher how PojavLauncher works.</p>
<h3 id="ios" tabindex="-1"><a class="header-anchor" href="#ios" aria-hidden="true">#</a> iOS</h3>
<ul>
<li>Uses OpenJDK 16 from Procursus to get a real Java environment</li>
<li>Uses MetalANGLE for OpenGL ES -&gt; Metal translator.</li>
<li>Uses GL4ES for OpenGL -&gt; OpenGL ES translator.</li>
<li>Uses our <a href="https://github.com/PojavLauncherTeam/lwjgl3" target="_blank" rel="noopener noreferrer">LWJGL3 iOS port<ExternalLinkIcon/></a>.</li>
<li>Uses the same launch method as PojavLauncher Android.</li>
</ul>
<h3 id="android" tabindex="-1"><a class="header-anchor" href="#android" aria-hidden="true">#</a> Android</h3>
<ul>
<li>OpenJDK 8 Mobile port: ARM32, ARM64, x86, x86_64</li>
<li>Mod installer headless</li>
<li>Mod installer with GUI - uses Caciocavallo project for AWT without X11.</li>
<li>OpenGL in OpenJDK environment</li>
<li>OpenAL (work on most devices)</li>
<li>Support Minecraft 1.12.2 and below - uses lwjglx, a LWJGL2 compatibility layer for LWJGL3.</li>
<li>Support Minecraft 1.13 - uses GLFW stub.</li>
<li>Game surface zooming.</li>
<li>New input pipe rewritten to native code to boost performance.</li>
</ul>
</div></template>


