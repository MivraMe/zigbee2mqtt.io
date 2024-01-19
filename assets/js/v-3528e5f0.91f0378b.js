"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[40683],{543183:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o=JSON.parse('{"key":"v-3528e5f0","path":"/devices/324131092621.html","title":"Philips 324131092621 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Philips 324131092621 control via MQTT","description":"Integrate your Philips 324131092621 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2019-07-22T20:08:17.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Binding","slug":"binding","link":"#binding","children":[]},{"level":3,"title":"Troubleshooting","slug":"troubleshooting","link":"#troubleshooting","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Action duration (numeric)","slug":"action-duration-numeric","link":"#action-duration-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1705690992000},"filePathRelative":"devices/324131092621.md"}')},613807:(e,t,i)=>{i.r(t),i.d(t,{default:()=>w});var o=i(166252);const n=(0,o._)("h1",{id:"philips-324131092621",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#philips-324131092621","aria-hidden":"true"},"#"),(0,o.Uk)(" Philips 324131092621")],-1),a=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th")])],-1),s=(0,o._)("tr",null,[(0,o._)("td",null,"Model"),(0,o._)("td",null,"324131092621")],-1),l=(0,o._)("td",null,"Vendor",-1),d=(0,o._)("tr",null,[(0,o._)("td",null,"Description"),(0,o._)("td",null,"Hue dimmer switch")],-1),r=(0,o._)("tr",null,[(0,o._)("td",null,"Exposes"),(0,o._)("td",null,"battery, action, action_duration, linkquality")],-1),c=(0,o._)("tr",null,[(0,o._)("td",null,"Picture"),(0,o._)("td",null,[(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/324131092621.jpg",alt:"Philips 324131092621"})])],-1),h=(0,o.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Factory reset the Hue dimmer switch by pressing and holding the setup button on the back for 10 seconds.</p><p>Restart the Hue dimmer switch by holding all 4 buttons of the Hue dimmer switch. You can let go when the light on the front flashes red/green briefly.</p><h4 id="using-the-dimmer-to-reset-other-zigbee-devices" tabindex="-1"><a class="header-anchor" href="#using-the-dimmer-to-reset-other-zigbee-devices" aria-hidden="true">#</a> Using the dimmer to reset other Zigbee devices</h4><p>Many devices can be factory reset / re-paired with a help of Hue dimmer switch:</p><ol><li>Make sure your device is powered on.</li><li>Take the dimmer and hold the ON and OFF buttons close to your device for approximately 10 seconds.</li><li>After about 10 seconds both your Zigbee device and the Hue dimmer should flash.</li><li>Hold it down for a further one second.</li><li>Your device should now be discoverable by your network.</li></ol>',7),u={href:"https://www.youtube.com/watch?v=qvlEAELiJKs",target:"_blank",rel:"noopener noreferrer"},p=(0,o._)("p",null,"This method also works for Philips Hue Lightstrips, IKEA Trådfri, Sonoff ZBMINI, and Tuya light bulbs.",-1),m=(0,o._)("h3",{id:"binding",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#binding","aria-hidden":"true"},"#"),(0,o.Uk)(" Binding")],-1),g=(0,o._)("code",null,"coordinator",-1),b=(0,o.uE)('<h3 id="troubleshooting" tabindex="-1"><a class="header-anchor" href="#troubleshooting" aria-hidden="true">#</a> Troubleshooting</h3><h4 id="resetting-the-device" tabindex="-1"><a class="header-anchor" href="#resetting-the-device" aria-hidden="true">#</a> Resetting the device</h4><ul><li>Method 1: Press all four buttons for 4 seconds. When the light turns green, release the buttons. The device will flash green and red alternatively after which it will reconnect to the network.</li><li>Method 2: Use a needle or paperclip to press the reset button on the back for 10 seconds. The behavior is similar to method 1</li></ul><h4 id="device-refuses-actions" tabindex="-1"><a class="header-anchor" href="#device-refuses-actions" aria-hidden="true">#</a> Device refuses actions</h4><p>If actions (e.g. applying zigbee2mqtt/bridge/request/device/remove to a dimmer) result in timeouts, perform a reset (see above) and apply the action right after the device announced itself in the network.</p><h4 id="device-announces-itself-but-the-buttons-don-t-work" tabindex="-1"><a class="header-anchor" href="#device-announces-itself-but-the-buttons-don-t-work" aria-hidden="true">#</a> Device announces itself but the buttons don&#39;t work</h4><p>The dimmer appears to be working normally and the logs in Zigbee2MQTT look good. However, nothing happens when a button is pressed (no light, no log message in Zigbee2MQTT). In this case:</p><ul><li>Reset the device</li><li>Use zigbee2mqtt/bridge/request/device/remove to remove the device from the network (this should result in a &quot;left the network&quot; log message)</li><li>Allow joining of new devices in Zigbee2MQTT</li><li>Reset the device again</li><li>Wait for it to pair again. The device should now be operational.</li></ul>',8),f=(0,o._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,o.Uk)(" OTA updates")],-1),v=(0,o._)("h2",{id:"options",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,o.Uk)(" Options")],-1),k=(0,o.uE)('<ul><li><p><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Only works when legacy is false. Example:</p></li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span>\n  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span>\n  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported.. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on_press</code>, <code>on_press_release</code>, <code>on_hold</code>, <code>on_hold_release</code>, <code>up_press</code>, <code>up_press_release</code>, <code>up_hold</code>, <code>up_hold_release</code>, <code>down_press</code>, <code>down_press_release</code>, <code>down_hold</code>, <code>down_hold_release</code>, <code>off_press</code>, <code>off_press_release</code>, <code>off_hold</code>, <code>off_hold_release</code>.</p><h3 id="action-duration-numeric" tabindex="-1"><a class="header-anchor" href="#action-duration-numeric" aria-hidden="true">#</a> Action duration (numeric)</h3><p>Value can be found in the published state on the <code>action_duration</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>s</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',11),_={},w=(0,i(983744).Z)(_,[["render",function(e,t){const i=(0,o.up)("RouterLink"),_=(0,o.up)("ExternalLinkIcon");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.kq)(" !!!! "),(0,o.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,o.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,o.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,o.kq)(" !!!! "),n,(0,o._)("table",null,[a,(0,o._)("tbody",null,[s,(0,o._)("tr",null,[l,(0,o._)("td",null,[(0,o.Wm)(i,{to:"/supported-devices/#v=Philips"},{default:(0,o.w5)((()=>[(0,o.Uk)("Philips")])),_:1})])]),d,r,c])]),(0,o.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),h,(0,o._)("p",null,[(0,o.Uk)("To use the Hue dimmer switch to factory reset a Hue light bulb see "),(0,o._)("a",u,[(0,o.Uk)("HOWTO: Factory reset a Hue bulb"),(0,o.Wm)(_)]),(0,o.Uk)(".")]),p,m,(0,o._)("p",null,[(0,o.Uk)("If you want to bind the dimmer to a (Hue) lamp you'll have to "),(0,o._)("em",null,[(0,o.Wm)(i,{to:"/guide/usage/binding.html"},{default:(0,o.w5)((()=>[(0,o.Uk)("bind it to the lamp through MQTT")])),_:1})]),(0,o.Uk)(" and unbind it from the coordinator. Use the dimmer as source and a literal "),g,(0,o.Uk)(" as target for that.")]),b,(0,o.kq)(" Notes END: Do not edit below this line "),f,(0,o._)("p",null,[(0,o.Uk)("This device supports OTA updates, for more information see "),(0,o.Wm)(i,{to:"/guide/usage/ota_updates.html"},{default:(0,o.w5)((()=>[(0,o.Uk)("OTA updates")])),_:1}),(0,o.Uk)(".")]),v,(0,o._)("p",null,[(0,o._)("em",null,[(0,o.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.w5)((()=>[(0,o.Uk)("How to use device type specific configuration")])),_:1})])]),k])}]])}}]);