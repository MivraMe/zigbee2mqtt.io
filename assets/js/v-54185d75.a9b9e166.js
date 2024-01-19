"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[93962],{210977:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o=JSON.parse('{"key":"v-54185d75","path":"/devices/DJT11LM.html","title":"Xiaomi DJT11LM control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Xiaomi DJT11LM control via MQTT","description":"Integrate your Xiaomi DJT11LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2019-07-22T20:08:17.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Battery","slug":"battery","link":"#battery","children":[]},{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Meaning of strength value","slug":"meaning-of-strength-value","link":"#meaning-of-strength-value","children":[]},{"level":3,"title":"Frequency of vibration actions","slug":"frequency-of-vibration-actions","link":"#frequency-of-vibration-actions","children":[]},{"level":3,"title":"Troubleshooting: device stops sending messages/disconnects from network","slug":"troubleshooting-device-stops-sending-messages-disconnects-from-network","link":"#troubleshooting-device-stops-sending-messages-disconnects-from-network","children":[]},{"level":3,"title":"Sensitivity","slug":"sensitivity","link":"#sensitivity","children":[]},{"level":3,"title":"Calibration","slug":"calibration","link":"#calibration","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Device temperature (numeric)","slug":"device-temperature-numeric","link":"#device-temperature-numeric","children":[]},{"level":3,"title":"Vibration (binary)","slug":"vibration-binary","link":"#vibration-binary","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Strength (numeric)","slug":"strength-numeric","link":"#strength-numeric","children":[]},{"level":3,"title":"Sensitivity (enum)","slug":"sensitivity-enum","link":"#sensitivity-enum","children":[]},{"level":3,"title":"Angle x (numeric)","slug":"angle-x-numeric","link":"#angle-x-numeric","children":[]},{"level":3,"title":"Angle y (numeric)","slug":"angle-y-numeric","link":"#angle-y-numeric","children":[]},{"level":3,"title":"Angle z (numeric)","slug":"angle-z-numeric","link":"#angle-z-numeric","children":[]},{"level":3,"title":"X axis (numeric)","slug":"x-axis-numeric","link":"#x-axis-numeric","children":[]},{"level":3,"title":"Y axis (numeric)","slug":"y-axis-numeric","link":"#y-axis-numeric","children":[]},{"level":3,"title":"Z axis (numeric)","slug":"z-axis-numeric","link":"#z-axis-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Power outage count (numeric)","slug":"power-outage-count-numeric","link":"#power-outage-count-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1705690992000},"filePathRelative":"devices/DJT11LM.md"}')},134145:(e,t,i)=>{i.r(t),i.d(t,{default:()=>g});var o=i(166252);const a=(0,o._)("h1",{id:"xiaomi-djt11lm",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#xiaomi-djt11lm","aria-hidden":"true"},"#"),(0,o.Uk)(" Xiaomi DJT11LM")],-1),n=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th")])],-1),r=(0,o._)("tr",null,[(0,o._)("td",null,"Model"),(0,o._)("td",null,"DJT11LM")],-1),s=(0,o._)("td",null,"Vendor",-1),d=(0,o._)("tr",null,[(0,o._)("td",null,"Description"),(0,o._)("td",null,"Aqara vibration sensor")],-1),c=(0,o._)("tr",null,[(0,o._)("td",null,"Exposes"),(0,o._)("td",null,"battery, device_temperature, vibration, action, strength, sensitivity, angle_x, angle_y, angle_z, x_axis, y_axis, z_axis, voltage, power_outage_count, linkquality")],-1),l=(0,o._)("tr",null,[(0,o._)("td",null,"Picture"),(0,o._)("td",null,[(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/DJT11LM.jpg",alt:"Xiaomi DJT11LM"})])],-1),u=(0,o.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="battery" tabindex="-1"><a class="header-anchor" href="#battery" aria-hidden="true">#</a> Battery</h3><p>Uses a CR2032 battery</p><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Press the reset button for about 5 seconds. The LED lights up 3 times. Then press the button again every 2 seconds to keep it awake (maximum 20 times).</p><p><em>NOTE: When you fail to pair a device, try replacing the battery, this could solve the problem.</em></p><h3 id="meaning-of-strength-value" tabindex="-1"><a class="header-anchor" href="#meaning-of-strength-value" aria-hidden="true">#</a> Meaning of <code>strength</code> value</h3><p>The <code>strength</code> value, which is reported every 300 seconds after vibration is detected, is the max strength measured during a period of 300 second.</p><h3 id="frequency-of-vibration-actions" tabindex="-1"><a class="header-anchor" href="#frequency-of-vibration-actions" aria-hidden="true">#</a> Frequency of <code>vibration</code> actions</h3><p>The subtopic <code>/action</code> with payload <code>vibration</code> and associated status JSON blobs are emitted about one second after onset, but not more frequently than once per minute regardless of whether vibrations are continuous or intermittent within that minute. This action message is distinct from the status JSON blob message emitted approximately every hour and after <code>vibration_timeout</code> described below.</p><p>If vibrations should persist, another <code>vibration</code> action will be emitted after that minute interval expires. There is no evident way of changing the duration of this hold-off period.</p><h3 id="troubleshooting-device-stops-sending-messages-disconnects-from-network" tabindex="-1"><a class="header-anchor" href="#troubleshooting-device-stops-sending-messages-disconnects-from-network" aria-hidden="true">#</a> Troubleshooting: device stops sending messages/disconnects from network</h3><p>Since Xiaomi devices do not fully comply to the Zigbee standard, it sometimes happens that they disconnect from the network. Most of the times this happens because of the following reasons:</p><ul><li>Device has a weak signal, you can see the signal quality in the published messages as <code>linkquality</code>. A linkquality &lt; 20 is considered weak.</li><li>Low battery voltage, this can even happen when the battery still appears full. Try a different battery.</li><li>The device is connected through a router which cannot deal with Xiaomi devices. This is known to happen devices from: Centralite, General Electric, Iris, Ledvance, Legrand, OSRAM, Sylvania, SmartThings, Securifi. A possible solution is to connect the device directly to the central coordinator by pushing the reset button while being physically close to it.</li></ul>',14),h={href:"https://community.hubitat.com/t/xiaomi-aqara-devices-pairing-keeping-them-connected/623",target:"_blank",rel:"noopener noreferrer"},p=(0,o.uE)('<h3 id="sensitivity" tabindex="-1"><a class="header-anchor" href="#sensitivity" aria-hidden="true">#</a> Sensitivity</h3><p>The sensitivity can be changed by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code><code>{&quot;sensitivity&quot;: &quot;SENSITIVITY&quot;}</code> where <code>SENSITIVITY</code> is one of the following values: <code>low</code>, <code>medium</code>, <code>high</code>.</p><p>After setting the sensitivity you immediately have to start pressing the reset button with an interval of 1 second until you see Zigbee2MQTT publishing the new sensitivity to MQTT.</p><h3 id="calibration" tabindex="-1"><a class="header-anchor" href="#calibration" aria-hidden="true">#</a> Calibration</h3><p>In order to improve the factory calibration or lack thereof, you can get a better result with a 2 step offset calibration:</p><ul><li>Ensure the x, y and z offset are set to 0 in the device specific settings</li><li>Put the device on a level surface, face up. <ul><li>A few seconds after the tilt action, the angles and accelerometer values (<code>x_axis</code>, <code>y_axis</code>, <code>z_axis</code>) are updated</li><li><code>x_axis</code> and <code>y_axis</code> should be small, <code>z_axis</code> around 1000</li><li>Set the offset for x and y to the opposite values of <code>x_axis</code> and <code>y_axis</code> to compensate.</li></ul></li><li>Put the device on a side <ul><li>After a few seconds, te values update, and <code>z_axis</code> should be small, as well as one of the <code>x_axis</code> or <code>y_axis</code>, the other being around ±1000</li><li>Set the offset for z to the opposite of <code>z_axis</code> You can fine tune the values of the offset by trying other sides and picking values that match best. Remember that the device sends accelerometer values a few seconds after the actual tilt event.</li></ul></li></ul>',6),m=(0,o._)("h2",{id:"options",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,o.Uk)(" Options")],-1),b=(0,o.uE)('<ul><li><p><code>device_temperature_calibration</code>: Calibrates the device_temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>vibration_timeout</code>: Time in seconds after which vibration is cleared after detecting it (default 90 seconds). The value must be a number with a minimum value of <code>0</code></p></li><li><p><code>x_calibration</code>: Calibrates the x value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>y_calibration</code>: Calibrates the y value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>z_calibration</code>: Calibrates the z value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported.. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="device-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#device-temperature-numeric" aria-hidden="true">#</a> Device temperature (numeric)</h3><p>Temperature of the device. Value can be found in the published state on the <code>device_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="vibration-binary" tabindex="-1"><a class="header-anchor" href="#vibration-binary" aria-hidden="true">#</a> Vibration (binary)</h3><p>Indicates whether the device detected vibration. Value can be found in the published state on the <code>vibration</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> vibration is ON, if <code>false</code> OFF.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>vibration</code>, <code>tilt</code>, <code>drop</code>.</p><h3 id="strength-numeric" tabindex="-1"><a class="header-anchor" href="#strength-numeric" aria-hidden="true">#</a> Strength (numeric)</h3><p>Value can be found in the published state on the <code>strength</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="sensitivity-enum" tabindex="-1"><a class="header-anchor" href="#sensitivity-enum" aria-hidden="true">#</a> Sensitivity (enum)</h3><p>Value can be found in the published state on the <code>sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensitivity&quot;: NEW_VALUE}</code>. The possible values are: <code>low</code>, <code>medium</code>, <code>high</code>.</p><h3 id="angle-x-numeric" tabindex="-1"><a class="header-anchor" href="#angle-x-numeric" aria-hidden="true">#</a> Angle x (numeric)</h3><p>Value can be found in the published state on the <code>angle_x</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>-90</code> and the maximum value is <code>90</code>. The unit of this value is <code>°</code>.</p><h3 id="angle-y-numeric" tabindex="-1"><a class="header-anchor" href="#angle-y-numeric" aria-hidden="true">#</a> Angle y (numeric)</h3><p>Value can be found in the published state on the <code>angle_y</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>-90</code> and the maximum value is <code>90</code>. The unit of this value is <code>°</code>.</p><h3 id="angle-z-numeric" tabindex="-1"><a class="header-anchor" href="#angle-z-numeric" aria-hidden="true">#</a> Angle z (numeric)</h3><p>Value can be found in the published state on the <code>angle_z</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>-90</code> and the maximum value is <code>90</code>. The unit of this value is <code>°</code>.</p><h3 id="x-axis-numeric" tabindex="-1"><a class="header-anchor" href="#x-axis-numeric" aria-hidden="true">#</a> X axis (numeric)</h3><p>Accelerometer X value. Value can be found in the published state on the <code>x_axis</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="y-axis-numeric" tabindex="-1"><a class="header-anchor" href="#y-axis-numeric" aria-hidden="true">#</a> Y axis (numeric)</h3><p>Accelerometer Y value. Value can be found in the published state on the <code>y_axis</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="z-axis-numeric" tabindex="-1"><a class="header-anchor" href="#z-axis-numeric" aria-hidden="true">#</a> Z axis (numeric)</h3><p>Accelerometer Z value. Value can be found in the published state on the <code>z_axis</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="power-outage-count-numeric" tabindex="-1"><a class="header-anchor" href="#power-outage-count-numeric" aria-hidden="true">#</a> Power outage count (numeric)</h3><p>Number of power outages. Value can be found in the published state on the <code>power_outage_count</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',32),v={},g=(0,i(983744).Z)(v,[["render",function(e,t){const i=(0,o.up)("RouterLink"),v=(0,o.up)("ExternalLinkIcon");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.kq)(" !!!! "),(0,o.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,o.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,o.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,o.kq)(" !!!! "),a,(0,o._)("table",null,[n,(0,o._)("tbody",null,[r,(0,o._)("tr",null,[s,(0,o._)("td",null,[(0,o.Wm)(i,{to:"/supported-devices/#v=Xiaomi"},{default:(0,o.w5)((()=>[(0,o.Uk)("Xiaomi")])),_:1})])]),d,c,l])]),(0,o.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,(0,o._)("p",null,[(0,o.Uk)("More detailed information about this can be found "),(0,o._)("a",h,[(0,o.Uk)("here"),(0,o.Wm)(v)]),(0,o.Uk)(".")]),p,(0,o.kq)(" Notes END: Do not edit below this line "),m,(0,o._)("p",null,[(0,o._)("em",null,[(0,o.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.w5)((()=>[(0,o.Uk)("How to use device type specific configuration")])),_:1})])]),b])}]])}}]);