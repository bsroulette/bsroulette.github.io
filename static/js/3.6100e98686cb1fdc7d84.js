webpackJsonp([3],{"4C71":function(t,e,i){t.exports=i.p+"static/img/diceeos.d29d885.png"},"7d4M":function(t,e,i){"use strict";var s,n=(s="undefined"!=typeof window&&window.devicePixelRatio||1,function(t){return Math.round(t*s)/s}),o={name:"VueSliderComponent",props:{width:{type:[Number,String],default:"auto"},height:{type:[Number,String],default:6},data:{type:Array,default:null},dotSize:{type:Number,default:16},dotWidth:{type:Number,required:!1},dotHeight:{type:Number,required:!1},min:{type:Number,default:0},max:{type:Number,default:100},maxWidth:{type:Number,default:100},interval:{type:Number,default:1},show:{type:Boolean,default:!0},disabled:{type:[Boolean,Array],default:!1},piecewise:{type:Boolean,default:!1},tooltip:{type:[String,Boolean],default:"always"},eventType:{type:String,default:"auto"},direction:{type:String,default:"horizontal"},reverse:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},clickable:{type:Boolean,default:!0},speed:{type:Number,default:.5},realTime:{type:Boolean,default:!1},stopPropagation:{type:Boolean,default:!1},value:{type:[String,Number,Array,Object],default:0},rollValue:{type:[String,Number],default:0},showUpAnimation:{type:Boolean,default:!1},showDownAnimation:{type:Boolean,default:!1},piecewiseLabel:{type:Boolean,default:!1},debug:{type:Boolean,default:!0},fixed:{type:Boolean,default:!1},processDragable:{type:Boolean,default:!1},useKeyboard:{type:Boolean,default:!1},actionsKeyboard:{type:Array,default:function(){return[function(t){return t-1},function(t){return t+1}]}},tooltipMerge:{type:Boolean,default:!0},startAnimation:{type:Boolean,default:!1},sliderStyle:[Array,Object,Function],focusStyle:[Array,Object,Function],tooltipDir:[Array,String],formatter:[String,Function],mergeFormatter:[String,Function],piecewiseStyle:Object,disabledStyle:Object,piecewiseActiveStyle:Object,processStyle:Object,bgStyle:Object,tooltipStyle:[Array,Object,Function],disabledDotStyle:[Array,Object,Function],labelStyle:Object,labelActiveStyle:Object},data:function(){return{flag:!1,keydownFlag:null,focusFlag:!1,processFlag:!1,processSign:null,size:0,fixedValue:0,focusSlider:0,currentValue:0,currentSlider:0,isComponentExists:!0,isMounted:!1}},computed:{fixedTipColor:function(){return this.value>this.rollValue?"rgb(2, 242, 146)":"rgb(241, 2, 96)"},fixedLeft:function(){return(this.rollValue-this.minimum)/this.spacing*this.gap-8+"px"},dotWidthVal:function(){return"number"==typeof this.dotWidth?this.dotWidth:this.dotSize},dotHeightVal:function(){return"number"==typeof this.dotHeight?this.dotHeight:this.dotSize},flowDirection:function(){return"vue-slider-"+this.direction+(this.reverse?"-reverse":"")},tooltipMergedPosition:function(){if(!this.isMounted)return{};var t=this.tooltipDirection[0];if(this.$refs.dot0){if("vertical"===this.direction){var e={};return e[t]="-"+(this.dotHeightVal/2-this.width/2+9)+"px",e}var i={};return i[t]="-"+(this.dotWidthVal/2-this.height/2+9)+"px",i.left="50%",i}},tooltipDirection:function(){var t=this.tooltipDir||("vertical"===this.direction?"left":"top");return Array.isArray(t)?this.isRange?t:t[1]:this.isRange?[t,t]:t},tooltipStatus:function(){return"hover"===this.tooltip&&this.flag?"vue-slider-always":this.tooltip?"vue-slider-"+this.tooltip:""},tooltipClass:function(){return["vue-slider-tooltip-"+this.tooltipDirection,"vue-slider-tooltip"]},disabledArray:function(){return Array.isArray(this.disabled)?this.disabled:[this.disabled,this.disabled]},boolDisabled:function(){return this.disabledArray.every(function(t){return!0===t})},isDisabled:function(){return"none"===this.eventType||this.boolDisabled},disabledClass:function(){return this.boolDisabled?"vue-slider-disabled":""},stateClass:function(){return{"vue-slider-state-process-drag":this.processFlag,"vue-slider-state-drag":this.flag&&!this.processFlag&&!this.keydownFlag,"vue-slider-state-focus":this.focusFlag}},isRange:function(){return Array.isArray(this.value)},slider:function(){return this.isRange?[this.$refs.dot0,this.$refs.dot1]:this.$refs.dot},minimum:function(){return this.data?0:this.min},val:{get:function(){return this.data?this.isRange?[this.data[this.currentValue[0]],this.data[this.currentValue[1]]]:this.data[this.currentValue]:this.currentValue},set:function(t){if(this.data)if(this.isRange){var e=this.data.indexOf(t[0]),i=this.data.indexOf(t[1]);e>-1&&i>-1&&(this.currentValue=[e,i])}else{var s=this.data.indexOf(t);s>-1&&(this.currentValue=s)}else this.currentValue=t}},currentIndex:function(){return this.isRange?this.data?this.currentValue:[this.getIndexByValue(this.currentValue[0]),this.getIndexByValue(this.currentValue[1])]:this.getIndexByValue(this.currentValue)},indexRange:function(){return this.isRange?this.currentIndex:[0,this.currentIndex]},maximum:function(){return this.data?this.data.length-1:this.max},multiple:function(){var t=(""+this.interval).split(".")[1];return t?Math.pow(10,t.length):1},spacing:function(){return this.data?1:this.interval},total:function(){return this.data?this.data.length-1:(Math.floor((this.maximum-this.minimum)*this.multiple)%(this.interval*this.multiple)!=0&&this.printError("Prop[interval] is illegal, Please make sure that the interval can be divisible"),(this.maximum-this.minimum)/this.interval)},gap:function(){return this.size/this.total},position:function(){return this.isRange?[(this.currentValue[0]-this.minimum)/this.spacing*this.gap,(this.currentValue[1]-this.minimum)/this.spacing*this.gap]:(this.currentValue-this.minimum)/this.spacing*this.gap},limit:function(){return this.isRange?this.fixed?[[0,(this.total-this.fixedValue)*this.gap],[this.fixedValue*this.gap,this.size]]:[[0,this.position[1]],[this.position[0],this.size]]:[0,this.size]},valueLimit:function(){return this.isRange?this.fixed?[[this.minimum,this.maximum-this.fixedValue*(this.spacing*this.multiple)/this.multiple],[this.minimum+this.fixedValue*(this.spacing*this.multiple)/this.multiple,this.maximum]]:[[this.minimum,this.currentValue[1]],[this.currentValue[0],this.maximum]]:[this.minimum,this.maximum]},idleSlider:function(){return 0===this.currentSlider?1:0},wrapStyles:function(){return"vertical"===this.direction?{height:"number"==typeof this.height?this.height+"px":this.height,padding:this.dotHeightVal/2+"px "+this.dotWidthVal/2+"px"}:{width:"number"==typeof this.width?this.width+"px":this.width,padding:this.dotHeightVal/2+"px "+this.dotWidthVal/2+"px"}},sliderStyles:function(){return Array.isArray(this.sliderStyle)?this.isRange?this.sliderStyle:this.sliderStyle[1]:"function"==typeof this.sliderStyle?this.sliderStyle(this.val,this.currentIndex):this.isRange?[this.sliderStyle,this.sliderStyle]:this.sliderStyle},focusStyles:function(){return Array.isArray(this.focusStyle)?this.isRange?this.focusStyle:this.focusStyle[1]:"function"==typeof this.focusStyle?this.focusStyle(this.val,this.currentIndex):this.isRange?[this.focusStyle,this.focusStyle]:this.focusStyle},disabledDotStyles:function(){var t=this.disabledDotStyle;if(Array.isArray(t))return t;if("function"==typeof t){var e=t(this.val,this.currentIndex);return Array.isArray(e)?e:[e,e]}return t?[t,t]:[{backgroundColor:"#ccc"},{backgroundColor:"#ccc"}]},tooltipStyles:function(){return Array.isArray(this.tooltipStyle)?this.isRange?this.tooltipStyle:this.tooltipStyle[1]:"function"==typeof this.tooltipStyle?this.tooltipStyle(this.val,this.currentIndex):this.isRange?[this.tooltipStyle,this.tooltipStyle]:this.tooltipStyle},elemStyles:function(){return"vertical"===this.direction?{width:this.width+"px",height:"100%"}:{height:this.height+"px"}},dotStyles:function(){return"vertical"===this.direction?{width:this.dotWidthVal+"px",height:this.dotHeightVal+"px",left:-(this.dotWidthVal-this.width)/2+"px"}:{width:this.dotWidthVal+"px",height:this.dotHeightVal+"px",top:-(this.dotHeightVal-this.height)/2+"px"}},piecewiseDotStyle:function(){return"vertical"===this.direction?{width:this.width+"px",height:this.width+"px"}:{width:this.height+"px",height:this.height+"px"}},piecewiseDotWrap:function(){if(!this.piecewise&&!this.piecewiseLabel)return!1;for(var t=[],e=0;e<=this.total;e++){var i="vertical"===this.direction?{bottom:this.gap*e-this.width/2+"px",left:0}:{left:this.gap*e-this.height/2+"px",top:0},s=this.reverse?this.total-e:e,n=this.data?this.data[s]:this.spacing*s+this.min;t.push({style:i,label:this.formatter?this.formatting(n):n,inRange:s>=this.indexRange[0]&&s<=this.indexRange[1]})}return t}},watch:{showDownAnimation:function(t){if(t){var e=this.getRule();e.index&&e.styleSheet.deleteRule(e.index),e.styleSheet.insertRule("@keyframes fadeOutTipDown{0% {top: -600%;opacity: 1; left: 50%;}65% {top: 150%;opacity: 1;left: "+this.fixedLeft+";}100% {top: 150%;opacity: 1;left: "+this.fixedLeft+";}}",e.index)}},value:function(t){this.flag||this.setValue(t,!0)},max:function(t){if(t<this.min)return this.printError("The maximum value can not be less than the minimum value.");var e=this.limitValue(this.val);this.setValue(e),this.refresh()},min:function(t){if(t>this.max)return this.printError("The minimum value can not be greater than the maximum value.");var e=this.limitValue(this.val);this.setValue(e),this.refresh()},show:function(t){var e=this;t&&!this.size&&this.$nextTick(function(){e.refresh()})},fixed:function(){this.computedFixedValue()}},methods:{getRule:function(){for(var t,e={},i=document.styleSheets,s=0;s<i.length;++s)for(var n=0;n<i[s].rules.length;++n)"fadeOutTipDown"==(t=i[s].rules[n]).name&&7==t.type&&(e.cssRule=t,e.styleSheet=i[s],e.index=n);return e},bindEvents:function(){document.addEventListener("touchmove",this.moving,{passive:!1}),document.addEventListener("touchend",this.moveEnd,{passive:!1}),document.addEventListener("mousedown",this.blurSlider),document.addEventListener("mousemove",this.moving),document.addEventListener("mouseup",this.moveEnd),document.addEventListener("mouseleave",this.moveEnd),document.addEventListener("keydown",this.handleKeydown),document.addEventListener("keyup",this.handleKeyup),window.addEventListener("resize",this.refresh),this.isRange&&this.tooltipMerge&&(this.$refs.dot0.addEventListener("transitionend",this.handleOverlapTooltip),this.$refs.dot1.addEventListener("transitionend",this.handleOverlapTooltip))},unbindEvents:function(){document.removeEventListener("touchmove",this.moving),document.removeEventListener("touchend",this.moveEnd),document.removeEventListener("mousedown",this.blurSlider),document.removeEventListener("mousemove",this.moving),document.removeEventListener("mouseup",this.moveEnd),document.removeEventListener("mouseleave",this.moveEnd),document.removeEventListener("keydown",this.handleKeydown),document.removeEventListener("keyup",this.handleKeyup),window.removeEventListener("resize",this.refresh),this.isRange&&this.tooltipMerge&&(this.$refs.dot0.removeEventListener("transitionend",this.handleOverlapTooltip),this.$refs.dot1.removeEventListener("transitionend",this.handleOverlapTooltip))},handleKeydown:function(t){if(!this.useKeyboard||!this.focusFlag)return!1;switch(t.keyCode){case 37:case 40:t.preventDefault(),this.keydownFlag=!0,this.flag=!0,this.changeFocusSlider(this.actionsKeyboard[0]);break;case 38:case 39:t.preventDefault(),this.keydownFlag=!0,this.flag=!0,this.changeFocusSlider(this.actionsKeyboard[1])}},handleKeyup:function(){this.keydownFlag&&(this.keydownFlag=!1,this.flag=!1)},changeFocusSlider:function(t){var e=this;if(this.isRange){var i=this.currentIndex.map(function(i,s){if(s===e.focusSlider||e.fixed){var n=t(i),o=e.fixed?e.valueLimit[s]:[0,e.total];if(n<=o[1]&&n>=o[0])return n}return i});i[0]>i[1]&&(this.focusSlider=0===this.focusSlider?1:0,i=i.reverse()),this.setIndex(i)}else this.setIndex(t(this.currentIndex))},blurSlider:function(t){var e=this.isRange?this.$refs["dot"+this.focusSlider]:this.$refs.dot;if(!e||e===t.target)return!1;this.focusFlag=!1},formatting:function(t){return"string"==typeof this.formatter?this.formatter.replace(/\{value\}/,t):this.formatter(t)},mergeFormatting:function(t,e){return"string"==typeof this.mergeFormatter?this.mergeFormatter.replace(/\{(value1|value2)\}/g,function(i,s){return"value1"===s?t:e}):this.mergeFormatter(t,e)},getPos:function(t){return this.realTime&&this.getStaticData(),"vertical"===this.direction?this.reverse?t.pageY-this.offset:this.size-(t.pageY-this.offset):this.reverse?this.size-(t.clientX-this.offset):t.clientX-this.offset},processClick:function(t){this.fixed&&t.stopPropagation()},wrapClick:function(t){var e=this;if(this.isDisabled||!this.clickable||this.processFlag)return!1;var i=this.getPos(t);if(this.isRange)if(this.disabledArray.every(function(t){return!1===t}))this.currentSlider=i>(this.position[1]-this.position[0])/2+this.position[0]?1:0;else if(this.disabledArray[0]){if(i<this.position[0])return!1;this.currentSlider=1}else if(this.disabledArray[1]){if(i>this.position[1])return!1;this.currentSlider=0}if(this.disabledArray[this.currentSlider])return!1;if(this.setValueOnPos(i),this.isRange&&this.tooltipMerge){var s=setInterval(function(){return e.handleOverlapTooltip()},16.7);setTimeout(function(){return window.clearInterval(s)},1e3*this.speed)}},moveStart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments[2];if(this.disabledArray[e])return!1;if(this.stopPropagation&&t.stopPropagation(),this.isRange&&(this.currentSlider=e,i)){if(!this.processDragable)return!1;this.processFlag=!0,this.processSign={pos:this.position,start:this.getPos(t.targetTouches&&t.targetTouches[0]?t.targetTouches[0]:t)}}!i&&this.useKeyboard&&(this.focusFlag=!0,this.focusSlider=e),this.flag=!0,this.$emit("drag-start",this)},moving:function(t){if(this.stopPropagation&&t.stopPropagation(),!this.flag)return!1;t.preventDefault(),t.targetTouches&&t.targetTouches[0]&&(t=t.targetTouches[0]),this.processFlag?(this.currentSlider=0,this.setValueOnPos(this.processSign.pos[0]+this.getPos(t)-this.processSign.start,!0),this.currentSlider=1,this.setValueOnPos(this.processSign.pos[1]+this.getPos(t)-this.processSign.start,!0)):this.setValueOnPos(this.getPos(t),!0),this.isRange&&this.tooltipMerge&&this.handleOverlapTooltip()},moveEnd:function(t){var e=this;if(this.stopPropagation&&t.stopPropagation(),!this.flag)return!1;this.$emit("drag-end",this),this.lazy&&this.isDiff(this.val,this.value)&&this.syncValue(),this.flag=!1,window.setTimeout(function(){e.processFlag=!1},0),this.setPosition()},setValueOnPos:function(t,e){var i=this.isRange?this.limit[this.currentSlider]:this.limit,s=this.isRange?this.valueLimit[this.currentSlider]:this.valueLimit;if(t>=i[0]&&t<=i[1]){this.setTransform(t);var n=this.getValueByIndex(Math.round(t/this.gap));this.setCurrentValue(n,e),this.isRange&&this.fixed&&(this.setTransform(t+this.fixedValue*this.gap*(0===this.currentSlider?1:-1),!0),this.setCurrentValue((n*this.multiple+this.fixedValue*this.spacing*this.multiple*(0===this.currentSlider?1:-1))/this.multiple,e,!0))}else t<i[0]?(this.setTransform(i[0]),this.setCurrentValue(s[0]),this.isRange&&this.fixed?(this.setTransform(this.limit[this.idleSlider][0],!0),this.setCurrentValue(this.valueLimit[this.idleSlider][0],e,!0)):this.fixed||this.disabledArray[0]||1!==this.currentSlider||(this.focusSlider=0,this.currentSlider=0)):(this.setTransform(i[1]),this.setCurrentValue(s[1]),this.isRange&&this.fixed?(this.setTransform(this.limit[this.idleSlider][1],!0),this.setCurrentValue(this.valueLimit[this.idleSlider][1],e,!0)):this.fixed||this.disabledArray[1]||0!==this.currentSlider||(this.focusSlider=1,this.currentSlider=1))},isDiff:function(t,e){return Object.prototype.toString.call(t)!==Object.prototype.toString.call(e)||(Array.isArray(t)&&t.length===e.length?t.some(function(t,i){return t!==e[i]}):t!==e)},setCurrentValue:function(t,e,i){var s=i?this.idleSlider:this.currentSlider;if(t<this.minimum||t>this.maximum)return!1;this.isRange?this.isDiff(this.currentValue[s],t)&&(this.currentValue.splice(s,1,t),this.lazy&&this.flag||this.syncValue()):this.isDiff(this.currentValue,t)&&(this.currentValue=t,this.lazy&&this.flag||this.syncValue()),e||this.setPosition()},getValueByIndex:function(t){return(this.spacing*this.multiple*t+this.minimum*this.multiple)/this.multiple},getIndexByValue:function(t){return Math.round((t-this.minimum)*this.multiple)/(this.spacing*this.multiple)},setIndex:function(t){if(Array.isArray(t)&&this.isRange){var e=void 0;e=this.data?[this.data[t[0]],this.data[t[1]]]:[this.getValueByIndex(t[0]),this.getValueByIndex(t[1])],this.setValue(e)}else t=this.getValueByIndex(t),this.isRange&&(this.currentSlider=t>(this.currentValue[1]-this.currentValue[0])/2+this.currentValue[0]?1:0),this.setCurrentValue(t)},setValue:function(t,e,i){var s=this;if(this.isDiff(this.val,t)){var n=this.limitValue(t);this.val=this.isRange?n.concat():n,this.computedFixedValue(),this.syncValue(e)}this.$nextTick(function(){return s.setPosition(i)})},computedFixedValue:function(){if(!this.fixed)return this.fixedValue=0,!1;this.fixedValue=this.currentIndex[1]-this.currentIndex[0]},setPosition:function(t){this.flag||this.setTransitionTime(void 0===t?this.speed:t),this.isRange?(this.setTransform(this.position[0],1===this.currentSlider),this.setTransform(this.position[1],0===this.currentSlider)):this.setTransform(this.position),this.flag||this.setTransitionTime(0)},setTransform:function(t,e){var i=e?this.idleSlider:this.currentSlider,s=n(("vertical"===this.direction?this.dotHeightVal/2-t:t-this.dotWidthVal/2)*(this.reverse?-1:1)),o="vertical"===this.direction?"translateY("+s+"px)":"translateX("+s+"px)",a=this.fixed?this.fixedValue*this.gap+"px":(0===i?this.position[1]-t:t-this.position[0])+"px",r=this.fixed?(0===i?t:t-this.fixedValue*this.gap)+"px":(0===i?t:this.position[0])+"px";this.isRange?(this.slider[i].style.transform=o,this.slider[i].style.WebkitTransform=o,this.slider[i].style.msTransform=o,"vertical"===this.direction?(this.$refs.process.style.height=a,this.$refs.process.style[this.reverse?"top":"bottom"]=r):(this.$refs.process.style.width=a,this.$refs.process.style[this.reverse?"right":"left"]=r)):(this.slider.style.transform=o,this.slider.style.WebkitTransform=o,this.slider.style.msTransform=o,"vertical"===this.direction?(this.$refs.process.style.height=t+"px",this.$refs.process.style[this.reverse?"top":"bottom"]=0):(this.$refs.process.style.width=t+"px",this.$refs.process.style[this.reverse?"right":"left"]=0))},setTransitionTime:function(t){if(t||this.$refs.process.offsetWidth,this.isRange){for(var e=0;e<this.slider.length;e++)this.slider[e].style.transitionDuration=t+"s",this.slider[e].style.WebkitTransitionDuration=t+"s";this.$refs.process.style.transitionDuration=t+"s",this.$refs.process.style.WebkitTransitionDuration=t+"s"}else this.slider.style.transitionDuration=t+"s",this.slider.style.WebkitTransitionDuration=t+"s",this.$refs.process.style.transitionDuration=t+"s",this.$refs.process.style.WebkitTransitionDuration=t+"s"},limitValue:function(t){var e=this;if(this.data)return t;var i=function(i){return i<e.min?(e.printError("The value of the slider is "+t+", the minimum value is "+e.min+", the value of this slider can not be less than the minimum value"),e.min):i>e.max?(e.printError("The value of the slider is "+t+", the maximum value is "+e.max+", the value of this slider can not be greater than the maximum value"),e.max):i};return this.isRange?t.map(function(t){return i(t)}):i(t)},syncValue:function(t){var e=this.isRange?this.val.concat():this.val;this.$emit("input",e),this.keydownFlag&&this.$emit("on-keypress",e),t||this.$emit("callback",e)},getValue:function(){return this.val},getIndex:function(){return this.currentIndex},getStaticData:function(){this.$refs.elem&&(this.size="vertical"===this.direction?this.$refs.elem.offsetHeight:this.$refs.elem.offsetWidth*this.maxWidth/100,this.offset="vertical"===this.direction?this.$refs.elem.getBoundingClientRect().top+window.pageYOffset||document.documentElement.scrollTop:this.$refs.elem.getBoundingClientRect().left)},refresh:function(){this.$refs.elem&&(this.getStaticData(),this.computedFixedValue(),this.setPosition())},printError:function(t){this.debug&&console.error("[VueSlider error]: "+t)},handleOverlapTooltip:function(){var t=this.tooltipDirection[0]===this.tooltipDirection[1];if(this.isRange&&t){var e=this.reverse?this.$refs.tooltip1:this.$refs.tooltip0,i=this.reverse?this.$refs.tooltip0:this.$refs.tooltip1,s=e.getBoundingClientRect(),n=i.getBoundingClientRect(),o=s.right,a=n.left,r=s.top,l=n.top+n.height,h="horizontal"===this.direction&&o>a,u="vertical"===this.direction&&l>r;h||u?this.handleDisplayMergedTooltip(!0):this.handleDisplayMergedTooltip(!1)}},handleDisplayMergedTooltip:function(t){var e=this.$refs.tooltip0,i=this.$refs.tooltip1,s=this.$refs.process.getElementsByClassName("vue-merged-tooltip")[0];t?(e.style.visibility="hidden",i.style.visibility="hidden",s.style.visibility="visible"):(e.style.visibility="visible",i.style.visibility="visible",s.style.visibility="hidden")}},mounted:function(){var t=this;if(this.isComponentExists=!0,"undefined"==typeof window||"undefined"==typeof document)return this.printError("window or document is undefined, can not be initialization.");this.$nextTick(function(){t.isComponentExists&&(t.getStaticData(),t.setValue(t.limitValue(t.value),!0,t.startAnimation?t.speed:0),t.bindEvents(),t.isRange&&t.tooltipMerge&&!t.startAnimation&&t.$nextTick(function(){t.handleOverlapTooltip()}))}),this.isMounted=!0},beforeDestroy:function(){this.isComponentExists=!1,this.unbindEvents()}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],ref:"wrap",class:["vue-slider-component",t.flowDirection,t.disabledClass,t.stateClass,{"vue-slider-has-label":t.piecewiseLabel}],style:[t.wrapStyles,t.boolDisabled?t.disabledStyle:null],on:{click:t.wrapClick}},[i("div",{ref:"elem",staticClass:"vue-slider",style:[t.elemStyles,t.bgStyle],attrs:{"aria-hidden":"true"}},[t.isRange?[i("div",{key:"dot0",ref:"dot0",class:[t.tooltipStatus,"vue-slider-dot",{"vue-slider-dot-focus":t.focusFlag&&0===t.focusSlider,"vue-slider-dot-dragging":t.flag&&0===t.currentSlider,"vue-slider-dot-disabled":!t.boolDisabled&&t.disabledArray[0]}],style:[t.dotStyles,!t.boolDisabled&&t.disabledArray[0]?t.disabledDotStyles[0]:null,t.sliderStyles[0],t.focusFlag&&0===t.focusSlider?t.focusStyles[0]:null],on:{mousedown:function(e){t.moveStart(e,0)},touchstart:function(e){t.moveStart(e,0)}}},[i("div",{ref:"tooltip0",class:["vue-slider-tooltip-"+t.tooltipDirection[0],"vue-slider-tooltip-wrap"]},[t._t("tooltip",[i("span",{staticClass:"vue-slider-tooltip",style:t.tooltipStyles[0]},[t._v(t._s(t.formatter?t.formatting(t.val[0]):t.val[0]))])],{value:t.val[0],index:0,disabled:!t.boolDisabled&&t.disabledArray[0]})],2)]),t._v(" "),i("div",{key:"dot1",ref:"dot1",class:[t.tooltipStatus,"vue-slider-dot",{"vue-slider-dot-focus":t.focusFlag&&1===t.focusSlider,"vue-slider-dot-dragging":t.flag&&1===t.currentSlider,"vue-slider-dot-disabled":!t.boolDisabled&&t.disabledArray[1]}],style:[t.dotStyles,!t.boolDisabled&&t.disabledArray[1]?t.disabledDotStyles[1]:null,t.sliderStyles[1],t.focusFlag&&1===t.focusSlider?t.focusStyles[1]:null],on:{mousedown:function(e){t.moveStart(e,1)},touchstart:function(e){t.moveStart(e,1)}}},[i("div",{ref:"tooltip1",class:["vue-slider-tooltip-"+t.tooltipDirection[1],"vue-slider-tooltip-wrap"]},[t._t("tooltip",[i("span",{staticClass:"vue-slider-tooltip",style:t.tooltipStyles[1]},[t._v(t._s(t.formatter?t.formatting(t.val[1]):t.val[1]))])],{value:t.val[1],index:1,disabled:!t.boolDisabled&&t.disabledArray[1]})],2)])]:[i("div",{key:"dot",ref:"dot",class:[t.tooltipStatus,"vue-slider-dot",{"vue-slider-dot-focus":t.focusFlag&&0===t.focusSlider,"vue-slider-dot-dragging":t.flag&&0===t.currentSlider}],style:[t.dotStyles,t.sliderStyles,t.focusFlag&&0===t.focusSlider?t.focusStyles:null],on:{mousedown:t.moveStart,touchstart:t.moveStart}},[i("div",{class:["vue-slider-tooltip-"+t.tooltipDirection,"vue-slider-tooltip-wrap"]},[t._t("tooltip",[i("span",{staticClass:"vue-slider-tooltip",style:t.tooltipStyles},[t._v(t._s(t.formatter?t.formatting(t.val):t.val))])],{value:t.val})],2)])],t._v(" "),i("ul",{staticClass:"vue-slider-piecewise"},t._l(t.piecewiseDotWrap,function(e,s){return i("li",{key:s,staticClass:"vue-slider-piecewise-item",style:[t.piecewiseDotStyle,e.style]},[t._t("piecewise",[t.piecewise?i("span",{staticClass:"vue-slider-piecewise-dot",style:[t.piecewiseStyle,e.inRange?t.piecewiseActiveStyle:null]}):t._e()],{label:e.label,index:s,first:0===s,last:s===t.piecewiseDotWrap.length-1,active:e.inRange}),t._v(" "),t._t("label",[t.piecewiseLabel?i("span",{staticClass:"vue-slider-piecewise-label",style:[t.labelStyle,e.inRange?t.labelActiveStyle:null]},[t._v("\n            "+t._s(e.label)+"\n          ")]):t._e()],{label:e.label,index:s,first:0===s,last:s===t.piecewiseDotWrap.length-1,active:e.inRange})],2)})),t._v(" "),i("div",{ref:"process",class:["vue-slider-process",{"vue-slider-process-dragable":t.isRange&&t.processDragable}],style:t.processStyle,on:{click:t.processClick,mousedown:function(e){t.moveStart(e,0,!0)},touchstart:function(e){t.moveStart(e,0,!0)}}},[i("div",{ref:"mergedTooltip",class:["vue-merged-tooltip","vue-slider-tooltip-"+t.tooltipDirection[0],"vue-slider-tooltip-wrap"],style:t.tooltipMergedPosition},[t._t("tooltip",[i("span",{staticClass:"vue-slider-tooltip",style:t.tooltipStyles},[t._v("\n            "+t._s(t.mergeFormatter?t.mergeFormatting(t.val[0],t.val[1]):t.formatter?t.val[0]===t.val[1]?t.formatting(t.val[0]):t.formatting(t.val[0])+" - "+t.formatting(t.val[1]):t.val[0]===t.val[1]?t.val[0]:t.val[0]+" - "+t.val[1])+"\n          ")])],{value:t.val,merge:!0})],2)]),t._v(" "),t.isRange||t.data?t._e():i("input",{directives:[{name:"model",rawName:"v-model",value:t.val,expression:"val"}],staticClass:"vue-slider-sr-only",attrs:{type:"range",min:t.min,max:t.max},domProps:{value:t.val},on:{__r:function(e){t.val=e.target.value}}}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.rollValue,expression:"rollValue"}],class:["vue-slider-tooltip-bottom","fixed-tooltip","animation",{animateTipDown:this.showDownAnimation}],style:{left:t.fixedLeft}},[t._t("tooltip",[i("span",{class:t.value>t.rollValue?"vue-slider-tooltip fixed-tooltip-success":"vue-slider-tooltip fixed-tooltip-fail",style:{border:"1px solid "+t.fixedTipColor,backgroundColor:t.fixedTipColor},attrs:{tip:t.fixedTipColor}},[t._v(t._s(t.formatter?t.formatting(t.rollValue):t.rollValue))])],{value:t.rollValue})],2)],2)])},staticRenderFns:[]};var r=i("VU/8")(o,a,!1,function(t){i("J3Cv")},null,null);e.a=r.exports},GlnT:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("QYhL"),n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"game"},[s("div",{staticClass:"game-content"},[s("div",{staticClass:"game-container"},[s("div",{staticClass:"form"},[s("el-row",{staticClass:"form-group",attrs:{gutter:15}},[s("el-col",{attrs:{xs:24,sm:15,md:15}},[s("span",{staticClass:"game-small"},[t._v(t._s(t.t_bet_amount))]),t._v(" "),s("div",{staticClass:"input-amount-group"},[s("div",{staticClass:"input-group"},[s("img",{staticClass:"eos-logo",attrs:{src:t.eosLogo}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.eos,expression:"eos"}],domProps:{value:t.eos},on:{input:function(e){e.target.composing||(t.eos=e.target.value)}}})]),t._v(" "),s("ul",{staticClass:"amount-rate"},[s("li",{on:{click:function(e){t.setEOS(.5)}}},[t._v("1/2")]),t._v(" "),s("li",{on:{click:function(e){t.setEOS(2)}}},[t._v("2X")]),t._v(" "),s("li",{on:{click:function(e){t.setEOS()}}},[t._v("MAX")])])])]),t._v(" "),s("el-col",{style:{paddingTop:"7.5px"},attrs:{xs:24,sm:9,md:9}},[s("span",{staticClass:"game-small"},[t._v(t._s(t.t_payout_win))]),t._v(" "),s("div",{staticClass:"bet-cell"},[s("img",{staticClass:"eos-logo",attrs:{src:t.eosLogo}}),t._v(" "),s("span",[t._v(t._s(t.payWin))])])])],1),t._v(" "),s("div",{staticClass:"info-container"},[s("ul",[s("li",[s("label",{staticClass:"show-big"},[t._v(t._s(t.t_roll_under_win))]),t._v(" "),s("label",{staticClass:"show-small"},[t._v(t._s(t.t_rool_under_win_small))]),t._v(" "),s("span",[t._v(t._s(t.sliderModel.value)+"↓ ")])]),t._v(" "),s("li",[s("label",[t._v(t._s(t.t_payout))]),t._v(" "),s("span",[t._v(t._s(Number(t.payOut).toFixed(2))+"x")])]),t._v(" "),s("li",[s("label",[t._v(t._s(t.t_win_chance))]),t._v(" "),s("span",[t._v(t._s(t.winChance)+"%")])])])]),t._v(" "),s("div",{staticClass:"bet-div"},[s("div",{staticClass:"auto-div",on:{click:function(e){t.autoClick()}}},[s("span",[t._v("自动投注")]),t._v(" "),t.auto?s("img",{attrs:{src:i("hI+B")}}):s("img",{attrs:{src:i("cCOT")}})])]),t._v(" "),s("footer",{staticClass:"game-footer"},[s("el-row",{attrs:{gutter:15}},[s("el-col",{attrs:{xs:24,sm:8,md:8}},[s("div",{staticClass:"accountBalance-container"},[s("img",{staticClass:"eos-lg",attrs:{src:t.eosLogo}}),t._v(" "),s("span",{staticClass:"eos-animation",class:{animateUp:this.showUpAnimation,animateDown:this.showDownAnimation}},[t._v(t._s(t.animationTxt))]),t._v(" "),s("span",[t._v(t._s(Number(t.accountBalance).toFixed(4)))])])]),t._v(" "),s("el-col",{attrs:{xs:24,sm:8,md:8}},[s("div",{staticClass:"currentsand-container"},[s("img",{staticClass:"eos-lg",attrs:{src:t.sandLogo}}),t._v(" "),s("span",{staticClass:"eos-animation",class:{animateUp:this.showUpAnimation,animateDown:this.showDownAnimation}},[t._v(t._s(t.animationTxt))]),t._v(" "),s("span",[t._v(t._s(t._f("deleteSand")(t.sandBalance)))])])]),t._v(" "),s("el-col",{staticClass:"col-btn",attrs:{xs:24,sm:8,md:8}},[t.account.name?s("el-button",{staticClass:"btn-action",attrs:{disabled:t.btnDisable},on:{click:t.doAction}},[t._v(t._s(t.actionTxt))]):s("button",{staticClass:"btn-action",on:{click:t.login}},[t._v(t._s(t.t_login))])],1),t._v(" "),s("el-col",{attrs:{xs:24,sm:8,md:8}})],1)],1)],1)]),t._v(" "),s("div",{staticClass:"slider-wapper"},[s("section",{staticClass:"slider-container"},[s("div",{staticClass:"slider"},[s("span",[t._v("1")]),t._v(" "),s("vue-slider",t._b({ref:"slider",staticClass:"slider-div",model:{value:t.sliderModel.value,callback:function(e){t.$set(t.sliderModel,"value",e)},expression:"sliderModel.value"}},"vue-slider",t.sliderModel,!1)),t._v(" "),s("span",[t._v("100")])],1)])])]),t._v(" "),s("order")],1)},staticRenderFns:[]};var o=function(t){i("LyZT")},a=i("VU/8")(s.a,n,!1,o,"data-v-742d17e0",null);e.default=a.exports},J3Cv:function(t,e){},LyZT:function(t,e){},QYhL:function(t,e,i){"use strict";(function(t){var s=i("hiCB"),n=i.n(s),o=i("d7EF"),a=i.n(o),r=i("//Fk"),l=i.n(r),h=i("4C71"),u=i.n(h),c=i("5LMJ"),d=i.n(c),f=i("rViV"),m=i.n(f),p=i("in2j"),v=(i("VsUZ"),i("pa/N")),g=i("bzuE"),y=i("BVsN"),b=i.n(y),w=i("7d4M");e.a={mounted:function(){this.getEOS(),this.getPool(),"sand"==this.coinName?(this.factor=100,this.eos=10):(this.factor=1,this.eos=1)},data:function(){return{sliderModel:{value:50,width:"100%",height:12,direction:"horizontal",dotSize:16,eventType:"auto",min:2,max:96,minRange:2,maxRange:96,interval:1,startAnimation:!1,tooltipMerge:!0,debug:t&&Object({NODE_ENV:"production"})&&!1,disabled:!1,show:!0,realTime:!1,tooltip:"always",clickable:!0,tooltipDir:"top",piecewise:!1,lazy:!1,useKeyboard:!1,reverse:!1,speed:.5,focusStyle:null,bgStyle:{"background-color":"#f10260"},sliderStyle:{background:"#f6f6f6",border:"1px solid #c5c5c5","font-weight":"normal","border-radius":"0"},tooltipStyle:null,processStyle:{"background-color":"#02f292","box-shadow":"0 0 20px #02f292",left:"0","border-radius":"5px"},piecewiseStyle:null,disabledStyle:null,maxWidth:96,showUpAnimation:!1,showDownAnimation:!1},eosLogo:u.a,sandLogo:d.a,eos:1,accountBalance:0,poolBalance:0,timer:0,animationTxt:0,actionTxt:"ROLL DICE",animating:!1,showUpAnimation:!1,showDownAnimation:!1,language:"en",btnDisable:!1,loadTimer:null,rollValue:0,auto:!1,factor:1,sandFactor:10,sandPoolBalance:0,sandBalance:"0",expiration:0,referrer:"",clientSeed:""}},methods:{autoClick:function(){this.auto=!this.auto},getEOS:function(t){var e=this;this.account.name&&l.a.all([v.a.getAccount(this.account.name),v.a.getTableRows({json:!0,code:g.a.betsandToken,table:"accounts",scope:this.account.name})]).then(function(t){var i=a()(t,2),s=i[0],n=i[1];e.sandBalance=n.rows[0].balance,e.$store.commit("UPDATE_ACCOUNT_INFO",s),e.accountBalance=Number(s.core_liquid_balance.replace(/\sEOS/,""))})},getPool:function(){var t=this;l.a.all([v.a.getTableRows({json:!0,code:"eosio.token",table:"accounts",scope:g.a.rouletteAccount}),v.a.getTableRows({json:!0,code:g.a.rouletteAccount,table:"fundpool",scope:g.a.rouletteAccount}),v.a.getTableRows({json:!0,code:g.a.betsandToken,table:"accounts",scope:g.a.rouletteAccount})]).then(function(e){var i=a()(e,3),s=i[0],n=i[1],o=i[2];t.sandPoolBalance=o.rows[0].balance.slice(0,-5),n.rows[0]&&n.rows[0].locked&&s.rows[0]&&s.rows[0].balance?t.poolBalance=s.rows[0].balance.slice(0,-4)-n.rows[0].locked.slice(0,-4):s.rows[0]&&s.rows[0].balance&&(t.poolBalance=s.rows[0].balance.slice(0,-4))})},maxBetAmount:function(){return"sand"==this.coinName?this.$floor(this.sandPoolBalance/20/(98.5/this.winChance)*.9,4):this.$floor(this.poolBalance/20/(98.5/this.winChance)*.9,4)},setEOS:function(t){if("sand"==this.coinName){var e=t?this.eos*t:this.sandBalance.replace(" SAND","");switch(!0){case e<10:e=10;break;case e>this.sandBalance.replace(" SAND",""):e=this.sandBalance.replace(" SAND","");break;case e>this.maxBetAmount():e=this.maxBetAmount()}this.eos=Number(e).toFixed(4)}else{this.poolBalance;var i=this.accountBalance,s=t?this.eos*t:this.accountBalance;switch(!0){case s<.1:s=.1;break;case s>i:s=i;break;case s>this.maxBetAmount():s=this.maxBetAmount()}this.eos=Number(s).toFixed(4)}},getClientSeed:function(){if(this.customSeed)return b()("sha1").update(this.account.name+this.customSeed).digest("hex");var t=Math.floor(Math.random()*Math.floor(n.a));return b()("sha1").update(this.account.name+Date.now()+t).digest("hex")},doAction:function(){var t=this;this.$store.commit("HIDDEN_ALL_DIALOG"),this.btnDisable=!0;var e=this.maxBetAmount();if(this.eos>e)return this.$message({showClose:!0,message:this.$t("common.bet_max",{amount:e.toFixed(4),coinName:this.coinName.toUpperCase()}),type:"info",duration:1500}),void(this.btnDisable=!1);var i=.1*this.factor;if(this.eos<i)return this.$message({showClose:!0,message:this.$t("common.bet_min",{amount:i.toFixed(4),coinName:this.coinName.toUpperCase()}),type:"info",duration:1500}),void(this.btnDisable=!1);var s=scatter.eos(p.a,m.a,{});this.showEOSAnimation=!0,this.$message({showClose:!0,message:this.$t("common.confirm_transfer"),type:"info",duration:1500}),s.transaction({actions:[{account:"eos"==this.coinName?"eosio.token":g.a.betsandToken,name:"transfer",authorization:[{actor:this.account.name,permission:this.account.authority}],data:{from:this.account.name,to:g.a.diceAccount,quantity:Number(this.eos).toFixed(4)+" "+this.coinName.toUpperCase(),memo:this.getMemo()}}]}).then(function(){t.getEOS(!0);t.fetchResult(),t.animating=!0,t.$message({showClose:!0,message:t.$t("common.bet_result"),type:"info",duration:1500})}).catch(function(e){t.btnDisable=!1,t.$notify.error(e.message||JSON.parse(e).error.details[0].message)})},getMemo:function(){this.referrer=this.getRequest("ref");var t=new Date;return this.expiration=Math.floor(t.getTime()),this.clientSeed=this.getClientSeed(),this.sliderModel.value+"-"+this.clientSeed+"-"+this.expiration+"-"+this.referrer},getRequest:function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),i=window.location.search.substr(1).match(e),s="";return null!=i&&(s=i[2]),e=null,i=null,null==s||""==s||"undefined"==s?"":s},fetchResult:function(){var t=this;v.a.getTableRows({json:!0,code:g.a.diceAccount,table:"results",scope:g.a.diceAccount,limit:1e3}).then(function(e){var i=!1;console.log("=====",e);for(var s=0;s<e.rows.length;s++){var n=e.rows[s];if(n.player==t.account.name&&n.user_seed_hash==t.clientSeed)i=!0,t.sliderModel.rollValue=n.random_roll,n.payout==="0.0000 "+t.coinName.toUpperCase()?t.sliderModel.showDownAnimation=!0:(t.showUpAnimation=!0,t.animationTxt=n.payout,t.sliderModel.showDownAnimation=!0),setTimeout(function(){t.showDownAnimation=!1,t.showUpAnimation=!1,t.sliderModel.showUpAnimation=!1,t.sliderModel.showDownAnimation=!1},3100),t.animating=!1,t.getEOS(),t.getPool(),t.btnDisable=!1,clearTimeout(t.loadTimer),t.auto&&setTimeout(function(){t.doAction()},1500)}i||t.fetchResult()}).catch(function(e){t.$message({showClose:!0,message:e.message,type:"warning",duration:1500})})},login:function(){var t=this;this.$emit("HIDDEN_MENU"),scatter&&scatter.getIdentity({accounts:[p.a]}).then(function(){scatter.authenticate();var e=scatter.identity.accounts.find(function(t){return"eos"===t.blockchain});e&&(t.$store.commit("UPDATE_ACCOUNT",e),t.$message({showClose:!0,message:t.$t("common.login_success"),type:"success",duration:1500}))}).catch(function(e){t.$message({showClose:!0,message:e.message,type:"warning",duration:1500})})}},watch:{account:function(){this.getEOS()},animating:function(){var t=this,e=this.animating;if(!e)return clearInterval(this.timer),void(this.actionTxt="ROLL DICE");this.timer=setInterval(function(){t.actionTxt=(100*Math.random()).toFixed(0)},100)},coinName:function(){"sand"==this.coinName?(this.factor=100,this.eos=10):(this.factor=1,this.eos=1)}},components:{vueSlider:w.a,order:i("R7Pr").default},computed:{customSeed:function(){return this.$store.state.customSeed},winChance:function(){return this.sliderModel.value-1},payOut:function(){return 98.5/this.winChance},payWin:function(){return(this.eos*this.payOut).toFixed(4)},account:function(){return this.$store.state.account},t_bet_amount:function(){return this.$t("dice.bet_amount")},t_payout_win:function(){return this.$t("dice.payout_win")},t_roll_under_win:function(){return this.$t("dice.roll_under_win")},t_payout:function(){return this.$t("dice.payout")},t_win_chance:function(){return this.$t("dice.win_chance")},t_login:function(){return this.$t("common.login")},t_rool_under_win_small:function(){return this.$t("dice.rool_under_win_small")},coinName:function(){return this.$store.state.coinName}}}}).call(e,i("W2nU"))}});
//# sourceMappingURL=3.6100e98686cb1fdc7d84.js.map