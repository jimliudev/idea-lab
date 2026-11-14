import{$ as e,E as t,Gt as n,J as r,Kt as i,Lt as a,S as o,St as s,Vt as c,X as l,Yt as u,d,et as f,f as p,kt as m,lt as h,o as g,p as _,pt as v,qt as y,xt as b,y as x,yt as S}from"./three.module-BrEL84vf.js";var ee={type:`change`},C={type:`start`},te={type:`end`},w=new s,T=new v,ne=Math.cos(70*l.DEG2RAD),E=class extends x{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction=`none`,this.enabled=!0,this.target=new y,this.cursor=new y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:r.ROTATE,MIDDLE:r.DOLLY,RIGHT:r.PAN},this.touches={ONE:c.ROTATE,TWO:c.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return u.phi},this.getAzimuthalAngle=function(){return u.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(e){e.addEventListener(`keydown`,Q),this._domElementKeyEvents=e},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener(`keydown`,Q),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(ee),n.update(),s=o.NONE},this.update=function(){let t=new y,r=new S().setFromUnitVectors(e.up,new y(0,1,0)),i=r.clone().invert(),a=new y,c=new S,m=new y,h=2*Math.PI;return function(g=null){let _=n.object.position;t.copy(_).sub(n.target),t.applyQuaternion(r),u.setFromVector3(t),n.autoRotate&&s===o.NONE&&F(N(g)),n.enableDamping?(u.theta+=d.theta*n.dampingFactor,u.phi+=d.phi*n.dampingFactor):(u.theta+=d.theta,u.phi+=d.phi);let v=n.minAzimuthAngle,b=n.maxAzimuthAngle;isFinite(v)&&isFinite(b)&&(v<-Math.PI?v+=h:v>Math.PI&&(v-=h),b<-Math.PI?b+=h:b>Math.PI&&(b-=h),v<=b?u.theta=Math.max(v,Math.min(b,u.theta)):u.theta=u.theta>(v+b)/2?Math.max(v,u.theta):Math.min(b,u.theta)),u.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,u.phi)),u.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(p,n.dampingFactor):n.target.add(p),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&A||n.object.isOrthographicCamera?u.radius=H(u.radius):u.radius=H(u.radius*f),t.setFromSpherical(u),t.applyQuaternion(i),_.copy(n.target).add(t),n.object.lookAt(n.target),n.enableDamping===!0?(d.theta*=1-n.dampingFactor,d.phi*=1-n.dampingFactor,p.multiplyScalar(1-n.dampingFactor)):(d.set(0,0,0),p.set(0,0,0));let x=!1;if(n.zoomToCursor&&A){let r=null;if(n.object.isPerspectiveCamera){let e=t.length();r=H(e*f);let i=e-r;n.object.position.addScaledVector(O,i),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let e=new y(k.x,k.y,0);e.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/f)),n.object.updateProjectionMatrix(),x=!0;let i=new y(k.x,k.y,0);i.unproject(n.object),n.object.position.sub(i).add(e),n.object.updateMatrixWorld(),r=t.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),n.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(r).add(n.object.position):(w.origin.copy(n.object.position),w.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(w.direction))<ne?e.lookAt(n.target):(T.setFromNormalAndCoplanarPoint(n.object.up,n.target),w.intersectPlane(T,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/f)),n.object.updateProjectionMatrix(),x=!0);return f=1,A=!1,x||a.distanceToSquared(n.object.position)>l||8*(1-c.dot(n.object.quaternion))>l||m.distanceToSquared(n.target)>0?(n.dispatchEvent(ee),a.copy(n.object.position),c.copy(n.object.quaternion),m.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener(`contextmenu`,xe),n.domElement.removeEventListener(`pointerdown`,he),n.domElement.removeEventListener(`pointercancel`,Z),n.domElement.removeEventListener(`wheel`,ve),n.domElement.removeEventListener(`pointermove`,X),n.domElement.removeEventListener(`pointerup`,Z),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener(`keydown`,Q),n._domElementKeyEvents=null)};let n=this,o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},s=o.NONE,l=1e-6,u=new a,d=new a,f=1,p=new y,m=new i,h=new i,g=new i,_=new i,v=new i,b=new i,x=new i,E=new i,D=new i,O=new y,k=new i,A=!1,j=[],M={};function N(e){return e===null?2*Math.PI/60/60*n.autoRotateSpeed:2*Math.PI/60*n.autoRotateSpeed*e}function P(e){let t=Math.abs(e)/(100*(window.devicePixelRatio|0));return .95**(n.zoomSpeed*t)}function F(e){d.theta-=e}function I(e){d.phi-=e}let L=function(){let e=new y;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),p.add(e)}}(),R=function(){let e=new y;return function(t,r){n.screenSpacePanning===!0?e.setFromMatrixColumn(r,1):(e.setFromMatrixColumn(r,0),e.crossVectors(n.object.up,e)),e.multiplyScalar(t),p.add(e)}}(),z=function(){let e=new y;return function(t,r){let i=n.domElement;if(n.object.isPerspectiveCamera){let a=n.object.position;e.copy(a).sub(n.target);let o=e.length();o*=Math.tan(n.object.fov/2*Math.PI/180),L(2*t*o/i.clientHeight,n.object.matrix),R(2*r*o/i.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(L(t*(n.object.right-n.object.left)/n.object.zoom/i.clientWidth,n.object.matrix),R(r*(n.object.top-n.object.bottom)/n.object.zoom/i.clientHeight,n.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),n.enablePan=!1)}}();function B(e){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?f/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),n.enableZoom=!1)}function re(e){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?f*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),n.enableZoom=!1)}function V(e,t){if(!n.zoomToCursor)return;A=!0;let r=n.domElement.getBoundingClientRect(),i=e-r.left,a=t-r.top,o=r.width,s=r.height;k.x=i/o*2-1,k.y=-(a/s)*2+1,O.set(k.x,k.y,1).unproject(n.object).sub(n.object.position).normalize()}function H(e){return Math.max(n.minDistance,Math.min(n.maxDistance,e))}function U(e){m.set(e.clientX,e.clientY)}function ie(e){V(e.clientX,e.clientX),x.set(e.clientX,e.clientY)}function W(e){_.set(e.clientX,e.clientY)}function ae(e){h.set(e.clientX,e.clientY),g.subVectors(h,m).multiplyScalar(n.rotateSpeed);let t=n.domElement;F(2*Math.PI*g.x/t.clientHeight),I(2*Math.PI*g.y/t.clientHeight),m.copy(h),n.update()}function oe(e){E.set(e.clientX,e.clientY),D.subVectors(E,x),D.y>0?B(P(D.y)):D.y<0&&re(P(D.y)),x.copy(E),n.update()}function se(e){v.set(e.clientX,e.clientY),b.subVectors(v,_).multiplyScalar(n.panSpeed),z(b.x,b.y),_.copy(v),n.update()}function ce(e){V(e.clientX,e.clientY),e.deltaY<0?re(P(e.deltaY)):e.deltaY>0&&B(P(e.deltaY)),n.update()}function le(e){let t=!1;switch(e.code){case n.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?I(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(0,n.keyPanSpeed),t=!0;break;case n.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?I(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(0,-n.keyPanSpeed),t=!0;break;case n.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?F(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(n.keyPanSpeed,0),t=!0;break;case n.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?F(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(-n.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),n.update())}function G(e){if(j.length===1)m.set(e.pageX,e.pageY);else{let t=$(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);m.set(n,r)}}function K(e){if(j.length===1)_.set(e.pageX,e.pageY);else{let t=$(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);_.set(n,r)}}function q(e){let t=$(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);x.set(0,i)}function ue(e){n.enableZoom&&q(e),n.enablePan&&K(e)}function de(e){n.enableZoom&&q(e),n.enableRotate&&G(e)}function J(e){if(j.length==1)h.set(e.pageX,e.pageY);else{let t=$(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);h.set(n,r)}g.subVectors(h,m).multiplyScalar(n.rotateSpeed);let t=n.domElement;F(2*Math.PI*g.x/t.clientHeight),I(2*Math.PI*g.y/t.clientHeight),m.copy(h)}function Y(e){if(j.length===1)v.set(e.pageX,e.pageY);else{let t=$(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);v.set(n,r)}b.subVectors(v,_).multiplyScalar(n.panSpeed),z(b.x,b.y),_.copy(v)}function fe(e){let t=$(e),r=e.pageX-t.x,i=e.pageY-t.y,a=Math.sqrt(r*r+i*i);E.set(0,a),D.set(0,(E.y/x.y)**+n.zoomSpeed),B(D.y),x.copy(E),V((e.pageX+t.x)*.5,(e.pageY+t.y)*.5)}function pe(e){n.enableZoom&&fe(e),n.enablePan&&Y(e)}function me(e){n.enableZoom&&fe(e),n.enableRotate&&J(e)}function he(e){n.enabled!==!1&&(j.length===0&&(n.domElement.setPointerCapture(e.pointerId),n.domElement.addEventListener(`pointermove`,X),n.domElement.addEventListener(`pointerup`,Z)),Se(e),e.pointerType===`touch`?ye(e):ge(e))}function X(e){n.enabled!==!1&&(e.pointerType===`touch`?be(e):_e(e))}function Z(e){Ce(e),j.length===0&&(n.domElement.releasePointerCapture(e.pointerId),n.domElement.removeEventListener(`pointermove`,X),n.domElement.removeEventListener(`pointerup`,Z)),n.dispatchEvent(te),s=o.NONE}function ge(e){let t;switch(e.button){case 0:t=n.mouseButtons.LEFT;break;case 1:t=n.mouseButtons.MIDDLE;break;case 2:t=n.mouseButtons.RIGHT;break;default:t=-1}switch(t){case r.DOLLY:if(n.enableZoom===!1)return;ie(e),s=o.DOLLY;break;case r.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(n.enablePan===!1)return;W(e),s=o.PAN}else{if(n.enableRotate===!1)return;U(e),s=o.ROTATE}break;case r.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(n.enableRotate===!1)return;U(e),s=o.ROTATE}else{if(n.enablePan===!1)return;W(e),s=o.PAN}break;default:s=o.NONE}s!==o.NONE&&n.dispatchEvent(C)}function _e(e){switch(s){case o.ROTATE:if(n.enableRotate===!1)return;ae(e);break;case o.DOLLY:if(n.enableZoom===!1)return;oe(e);break;case o.PAN:if(n.enablePan===!1)return;se(e)}}function ve(e){n.enabled!==!1&&n.enableZoom!==!1&&s===o.NONE&&(e.preventDefault(),n.dispatchEvent(C),ce(e),n.dispatchEvent(te))}function Q(e){n.enabled!==!1&&n.enablePan!==!1&&le(e)}function ye(e){switch(we(e),j.length){case 1:switch(n.touches.ONE){case c.ROTATE:if(n.enableRotate===!1)return;G(e),s=o.TOUCH_ROTATE;break;case c.PAN:if(n.enablePan===!1)return;K(e),s=o.TOUCH_PAN;break;default:s=o.NONE}break;case 2:switch(n.touches.TWO){case c.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ue(e),s=o.TOUCH_DOLLY_PAN;break;case c.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;de(e),s=o.TOUCH_DOLLY_ROTATE;break;default:s=o.NONE}break;default:s=o.NONE}s!==o.NONE&&n.dispatchEvent(C)}function be(e){switch(we(e),s){case o.TOUCH_ROTATE:if(n.enableRotate===!1)return;J(e),n.update();break;case o.TOUCH_PAN:if(n.enablePan===!1)return;Y(e),n.update();break;case o.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;pe(e),n.update();break;case o.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;me(e),n.update();break;default:s=o.NONE}}function xe(e){n.enabled!==!1&&e.preventDefault()}function Se(e){j.push(e.pointerId)}function Ce(e){delete M[e.pointerId];for(let t=0;t<j.length;t++)if(j[t]==e.pointerId){j.splice(t,1);return}}function we(e){let t=M[e.pointerId];t===void 0&&(t=new i,M[e.pointerId]=t),t.set(e.pageX,e.pageY)}function $(e){let t=e.pointerId===j[0]?j[1]:j[0];return M[t]}n.domElement.addEventListener(`contextmenu`,xe),n.domElement.addEventListener(`pointerdown`,he),n.domElement.addEventListener(`pointercancel`,Z),n.domElement.addEventListener(`wheel`,ve,{passive:!1}),this.update()}},D={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},O=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},k=new h(-1,1,1,-1,0,1),A=new class extends g{constructor(){super(),this.setAttribute(`position`,new o([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new o([0,2,0,0,2,0],2))}},j=class{constructor(t){this._mesh=new e(A,t)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,k)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},M=class extends O{constructor(e,t){super(),this.textureID=t===void 0?`tDiffuse`:t,e instanceof m?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=n.clone(e.uniforms),this.material=new m({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new j(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}},N=class extends O{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},P=class extends O{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},F=class{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){let r=e.getSize(new i);this._width=r.width,this._height=r.height,n=new u(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:t}),n.texture.name=`EffectComposer.rt1`}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new M(D),this.copyPass.material.blending=0,this.clock=new d}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}N!==void 0&&(r instanceof N?n=!0:r instanceof P&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new i);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},I=class extends O{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new p}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},L={name:`LuminosityHighPassShader`,shaderID:`luminosityHighPass`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new p(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},R=class e extends O{constructor(e,r,a,o){super(),this.strength=r===void 0?1:r,this.radius=a,this.threshold=o,this.resolution=e===void 0?new i(256,256):new i(e.x,e.y),this.clearColor=new p(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);this.renderTargetBright=new u(s,c,{type:t}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let n=new u(s,c,{type:t});n.texture.name=`UnrealBloomPass.h`+e,n.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(n);let r=new u(s,c,{type:t});r.texture.name=`UnrealBloomPass.v`+e,r.texture.generateMipmaps=!1,this.renderTargetsVertical.push(r),s=Math.round(s/2),c=Math.round(c/2)}let l=L;this.highPassUniforms=n.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=o,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new m({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];let d=[3,5,7,9,11];s=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(d[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new i(1/s,1/c),s=Math.round(s/2),c=Math.round(c/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=r,this.compositeMaterial.uniforms.bloomRadius.value=.1;let h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new y(1,1,1),new y(1,1,1),new y(1,1,1),new y(1,1,1),new y(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let g=D;this.copyUniforms=n.clone(g.uniforms),this.blendMaterial=new m({uniforms:this.copyUniforms,vertexShader:g.vertexShader,fragmentShader:g.fragmentShader,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new p,this.oldClearAlpha=1,this.basic=new f,this.fsQuad=new j(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new i(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=r.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this.fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this.fsQuad.render(t),s=this.renderTargetsVertical[n];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(r),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new m({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new i(.5,.5)},direction:{value:new i(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new m({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};R.BlurDirectionX=new i(1,0),R.BlurDirectionY=new i(0,1);var z={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},B=class extends O{constructor(){super();let e=z;this.uniforms=n.clone(e.uniforms),this.material=new b({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new j(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},_.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6&&(this.material.defines.AGX_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};export{M as a,F as i,R as n,E as o,I as r,B as t};