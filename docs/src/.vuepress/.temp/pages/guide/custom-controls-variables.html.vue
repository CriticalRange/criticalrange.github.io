<template><div><h1 id="custom-controls-variables" tabindex="-1"><a class="header-anchor" href="#custom-controls-variables" aria-hidden="true">#</a> Custom controls variables</h1>
<h2 id="available-variables" tabindex="-1"><a class="header-anchor" href="#available-variables" aria-hidden="true">#</a> Available variables</h2>
<h3 id="screen-size-variables" tabindex="-1"><a class="header-anchor" href="#screen-size-variables" aria-hidden="true">#</a> Screen size variables</h3>
<ul>
<li><code v-pre>screen_width</code>: width of the screen.</li>
<li><code v-pre>screen_height</code>: height of the screen.</li>
</ul>
<h4 id="control-variables" tabindex="-1"><a class="header-anchor" href="#control-variables" aria-hidden="true">#</a> Control variables</h4>
<ul>
<li><code v-pre>width</code>: width of the control button itself.</li>
<li><code v-pre>height</code>: height of the control button itself.</li>
</ul>
<h4 id="position-variables" tabindex="-1"><a class="header-anchor" href="#position-variables" aria-hidden="true">#</a> Position variables</h4>
<ul>
<li><code v-pre>top</code>: top of the screen, default is 0.</li>
<li><code v-pre>left</code>: left of the screen, default is 0.</li>
<li><code v-pre>right</code>: right of the screen, calculated as <code v-pre>${screen_width} - ${width} - ${margin}</code>.</li>
<li><code v-pre>bottom</code>: bottom of the screen, calculated as <code v-pre>${screen_height} - ${height} - ${margin}</code>.</li>
</ul>
<h4 id="other-variables" tabindex="-1"><a class="header-anchor" href="#other-variables" aria-hidden="true">#</a> Other variables</h4>
<ul>
<li><code v-pre>margin</code>: margin, default is 2dp.</li>
</ul>
<h3 id="how-does-it-work" tabindex="-1"><a class="header-anchor" href="#how-does-it-work" aria-hidden="true">#</a> How does it work</h3>
<p>Currently, variables only apply for Dynamic X and Y, which is in format <code v-pre>${variable}</code>.
For example</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>"dynamicX": "${screen_width} - ${width} * 2 + ${margin}"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>With these given properties:</p>
<ul>
<li>Screen width is <strong>1280</strong></li>
<li>Button width is <strong>100</strong></li>
<li>Margin is <strong>2dp</strong>, convert into pixels unit is <strong>4px</strong></li>
</ul>
<p>It will be converted into</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>"dynamicX": "1280 - 100 * 2 + 4"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then, the <code v-pre>x</code> field (stored in the memory when pasted to a control json) is being calculated from <code v-pre>dynamicX</code> using <a href="https://lallafa.objecthunter.net/exp4j" target="_blank" rel="noopener noreferrer">exp4j<ExternalLinkIcon/></a>.</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>ControlData controlData = ...
controlData.x = new ExpressionBuilder(controlData.dynamicX).build().evaluate();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


