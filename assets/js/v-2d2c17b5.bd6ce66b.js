"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[64382],{627308:(e,t,o)=>{o.r(t),o.d(t,{data:()=>d});const d=JSON.parse('{"key":"v-2d2c17b5","path":"/devices/ZWT198.html","title":"TuYa ZWT198 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"TuYa ZWT198 control via MQTT","description":"Integrate your TuYa ZWT198 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-09-28T10:54:36.000Z"},"excerpt":"","headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Factory reset (binary)","slug":"factory-reset-binary","link":"#factory-reset-binary","children":[]},{"level":3,"title":"Child lock (lock)","slug":"child-lock-lock","link":"#child-lock-lock","children":[]},{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Frost protection (binary)","slug":"frost-protection-binary","link":"#frost-protection-binary","children":[]},{"level":3,"title":"Max temperature limit (numeric)","slug":"max-temperature-limit-numeric","link":"#max-temperature-limit-numeric","children":[]},{"level":3,"title":"Deadzone temperature (numeric)","slug":"deadzone-temperature-numeric","link":"#deadzone-temperature-numeric","children":[]},{"level":3,"title":"Backlight mode (enum)","slug":"backlight-mode-enum","link":"#backlight-mode-enum","children":[]},{"level":3,"title":"Working day (enum)","slug":"working-day-enum","link":"#working-day-enum","children":[]},{"level":3,"title":"Schedule weekday (text)","slug":"schedule-weekday-text","link":"#schedule-weekday-text","children":[]},{"level":3,"title":"Schedule holiday (text)","slug":"schedule-holiday-text","link":"#schedule-holiday-text","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1705690992000},"filePathRelative":"devices/ZWT198.md"}')},264850:(e,t,o)=>{o.r(t),o.d(t,{default:()=>p});var d=o(166252);const a=(0,d._)("h1",{id:"tuya-zwt198",tabindex:"-1"},[(0,d._)("a",{class:"header-anchor",href:"#tuya-zwt198","aria-hidden":"true"},"#"),(0,d.Uk)(" TuYa ZWT198")],-1),i=(0,d._)("thead",null,[(0,d._)("tr",null,[(0,d._)("th"),(0,d._)("th")])],-1),c=(0,d._)("tr",null,[(0,d._)("td",null,"Model"),(0,d._)("td",null,"ZWT198")],-1),l=(0,d._)("td",null,"Vendor",-1),r=(0,d._)("tr",null,[(0,d._)("td",null,"Description"),(0,d._)("td",null,"Avatto wall thermostat")],-1),s=(0,d._)("tr",null,[(0,d._)("td",null,"Exposes"),(0,d._)("td",null,"factory_reset, lock (state), climate (system_mode, preset, current_heating_setpoint, running_state, local_temperature, local_temperature_calibration), frost_protection, max_temperature_limit, deadzone_temperature, backlight_mode, working_day, schedule_weekday, schedule_holiday, linkquality")],-1),n=(0,d._)("tr",null,[(0,d._)("td",null,"Picture"),(0,d._)("td",null,[(0,d._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZWT198.jpg",alt:"TuYa ZWT198"})])],-1),u=(0,d.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="factory-reset-binary" tabindex="-1"><a class="header-anchor" href="#factory-reset-binary" aria-hidden="true">#</a> Factory reset (binary)</h3><p>Full factory reset, use with caution!. Value can be found in the published state on the <code>factory_reset</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;factory_reset&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> factory reset is ON, if <code>OFF</code> OFF.</p><h3 id="child-lock-lock" tabindex="-1"><a class="header-anchor" href="#child-lock-lock" aria-hidden="true">#</a> Child lock (lock)</h3><p>The current state of this lock is in the published state under the <code>child_lock</code> property (value is <code>LOCK</code> or <code>UNLOCK</code>). To control this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: &quot;LOCK&quot;}</code> or <code>{&quot;child_lock&quot;: &quot;UNLOCK&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate" aria-hidden="true">#</a> Climate</h3><p>This climate device supports the following features: <code>system_mode</code>, <code>preset</code>, <code>current_heating_setpoint</code>, <code>running_state</code>, <code>local_temperature</code>, <code>local_temperature_calibration</code>.</p><ul><li><code>current_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;current_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>35</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). Reading (<code>/get</code>) this attribute is not possible.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>heat</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>preset</code>: Mode of this device (similar to system_mode). To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;preset&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>auto</code>, <code>manual</code>, <code>temporary_manual</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature_calibration</code>: Offset to add/subtract to the local temperature. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;local_temperature_calibration&quot;: VALUE}.</code>The minimal value is <code>-9.9</code> and the maximum value is <code>9.9</code> with a step size of <code>0.1</code>.</li></ul><h3 id="frost-protection-binary" tabindex="-1"><a class="header-anchor" href="#frost-protection-binary" aria-hidden="true">#</a> Frost protection (binary)</h3><p>Antifreeze function. Value can be found in the published state on the <code>frost_protection</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;frost_protection&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> frost protection is ON, if <code>OFF</code> OFF.</p><h3 id="max-temperature-limit-numeric" tabindex="-1"><a class="header-anchor" href="#max-temperature-limit-numeric" aria-hidden="true">#</a> Max temperature limit (numeric)</h3><p>Maximum upper temperature. Value can be found in the published state on the <code>max_temperature_limit</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;max_temperature_limit&quot;: NEW_VALUE}</code>. The minimal value is <code>15</code> and the maximum value is <code>90</code>. The unit of this value is <code>°C</code>. Besides the numeric values the following values are accepted: <code>default</code>.</p><h3 id="deadzone-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#deadzone-temperature-numeric" aria-hidden="true">#</a> Deadzone temperature (numeric)</h3><p>The delta between local_temperature (5&lt;t&lt;35)and current_heating_setpoint to trigger Heat. Value can be found in the published state on the <code>deadzone_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;deadzone_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>0.5</code> and the maximum value is <code>10</code>. The unit of this value is <code>°C</code>. Besides the numeric values the following values are accepted: <code>default</code>.</p><h3 id="backlight-mode-enum" tabindex="-1"><a class="header-anchor" href="#backlight-mode-enum" aria-hidden="true">#</a> Backlight mode (enum)</h3><p>Intensity of the backlight. Value can be found in the published state on the <code>backlight_mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;backlight_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>low</code>, <code>medium</code>, <code>high</code>.</p><h3 id="working-day-enum" tabindex="-1"><a class="header-anchor" href="#working-day-enum" aria-hidden="true">#</a> Working day (enum)</h3><p>Workday setting. Value can be found in the published state on the <code>working_day</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;working_day&quot;: NEW_VALUE}</code>. The possible values are: <code>disabled</code>, <code>6-1</code>, <code>5-2</code>, <code>7</code>.</p><h3 id="schedule-weekday-text" tabindex="-1"><a class="header-anchor" href="#schedule-weekday-text" aria-hidden="true">#</a> Schedule weekday (text)</h3><p>Workdays (6 times <code>hh:mm/cc.c°C</code>). Value can be found in the published state on the <code>schedule_weekday</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_weekday&quot;: NEW_VALUE}</code>.</p><h3 id="schedule-holiday-text" tabindex="-1"><a class="header-anchor" href="#schedule-holiday-text" aria-hidden="true">#</a> Schedule holiday (text)</h3><p>Holidays (2 times <code>hh:mm/cc.c°C)</code>. Value can be found in the published state on the <code>schedule_holiday</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_holiday&quot;: NEW_VALUE}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',24),h={},p=(0,o(983744).Z)(h,[["render",function(e,t){const o=(0,d.up)("RouterLink");return(0,d.wg)(),(0,d.iD)("div",null,[(0,d.kq)(" !!!! "),(0,d.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,d.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,d.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,d.kq)(" !!!! "),a,(0,d._)("table",null,[i,(0,d._)("tbody",null,[c,(0,d._)("tr",null,[l,(0,d._)("td",null,[(0,d.Wm)(o,{to:"/supported-devices/#v=TuYa"},{default:(0,d.w5)((()=>[(0,d.Uk)("TuYa")])),_:1})])]),r,s,n])]),(0,d.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,d.kq)(" Notes END: Do not edit below this line "),u])}]])}}]);