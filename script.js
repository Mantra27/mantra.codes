let writer = document.getElementById("terminal")
let count = 0;
let _string = "\xa0cd Desktop/code";
let typingSpeed = 30 //lower the ammount = faster the type
let _current;
let zoomSpeed
let notMobileDevice = true;
window.mobileAndTabletCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };
  if(window.mobileAndTabletCheck()){
    notMobileDevice = false;
    document.getElementById("main-content").remove();
    document.getElementById("sphere").remove();
    document.getElementById("terminal").innerText = `We're really sorry but the website aint compatible with mobile devices yet`
    document.getElementById("spher").remove();

  }
  
dragElement(document.getElementById("window"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

    let _firstHalf = new Promise((res, rej)=>{
        let _interval = setInterval(async ()=>{
            if(count>_string.length-1){
                clearInterval(_interval);
                setTimeout(()=>{
                    res(1)
                }, 100)
            }
            else if(_string[count] == " "){
                writer.innerText += "\xa0"
                count++;
            }
            else{
                writer.innerText += _string[count];
                count++;
            }
        }, typingSpeed);
        _current = _interval;
    });

    let _exitPromiseHell = new Promise((exitRes, exitRej)=>{

    _firstHalf.then(()=>{
        writer.innerText += '\n$/Desktop/code/~\xa0'
        count = 0;
        _string = "ts-node mantra.ts"
        let _parentPromise = new Promise((res, rej)=>{
            document.querySelector(".window-text").innerText = 'suRge@mantra:~/Desktop/code '
            _current = setTimeout(() => {
                let _interval = setInterval(async ()=>{
                    if(count>_string.length-1){
                        clearInterval(_interval);
                        writer.innerText += '\n';
                        res(1)
                    }
                    else if(_string[count] == " "){
                        writer.innerText += "\xa0"
                        count++;
                    }
                    else{
                        writer.innerText += _string[count];
                        count++;
                    }
                }, typingSpeed);
            }, 400);
            });
            
            _parentPromise.then(()=>{
                let _randomDebug = [
                    `Starting Server...`, //0
                    `Connecting to Database instance...`, //1
                    `Connecting to Database instance...`, //2
                    `Fetching Data...`, //4
                    `Filling Coffee mug...`, //5
                    `Almost Ready...`, //6
                    `Almost Ready...`, //7
                ]
                let _loaderDone = `▓`
                let _loaderUndone = `▒▒▒▒▒▒▒▒▒▒▒▒▒▒`.split("")
                let deadLine = Math.random() * (1500 - 700) + 700;

                    _current = setTimeout(()=>{
                        _current = setTimeout(()=>{
                            _current = setTimeout(()=>{
                                _current = setTimeout(()=>{
                                    _current = setTimeout(()=>{
                                        _current = setTimeout(()=>{
                                            _current = setTimeout(()=>{
                                                _current = setTimeout(()=>{
                                                    _loaderUndone[12] = _loaderDone;
                                                    _loaderUndone[13] = _loaderDone;
                                                    writer.innerText = `$/~ cd Desktop/code
                                                    $/Desktop/code/~  ts-node mantra.ts\n${_loaderUndone.join("")} 100% Done!`
                                                    exitRes(1)
                                                }, deadLine/5)
                                                writer.innerText = `$/~ cd Desktop/code
                                                $/Desktop/code/~  ts-node mantra.ts\n${_loaderUndone.join("")} ${Math.floor(Math.random() * (99 - 87) + 87)}% - ${_randomDebug[6]}`
                                            }, deadLine/7)
                                            _loaderUndone[10] = _loaderDone;
                                            _loaderUndone[11] = _loaderDone;
                                            writer.innerText = `$/~ cd Desktop/code
                                            $/Desktop/code/~  ts-node mantra.ts\n${_loaderUndone.join("")} ${Math.floor(Math.random() * (87 - 64) + 64)}% - ${_randomDebug[5]}`
                                        }, deadLine/6)
                                        _loaderUndone[7] = _loaderDone;
                                        _loaderUndone[8] = _loaderDone;
                                        _loaderUndone[9] = _loaderDone;
                                        writer.innerText = `$/~ cd Desktop/code
                                        $/Desktop/code/~  ts-node mantra.ts\n${_loaderUndone.join("")} ${Math.floor(Math.random() * (64 - 56) + 56)}% - ${_randomDebug[4]}`
                                    }, deadLine/5)
                                    _loaderUndone[6] = _loaderDone;
                                    writer.innerText = `$/~ cd Desktop/code
                                    $/Desktop/code/~  ts-node mantra.ts\n${_loaderUndone.join("")} ${Math.floor(Math.random() * (55 - 48) + 48)}% - ${_randomDebug[3]}`
                                }, deadLine/4)
                                _loaderUndone[3] = _loaderDone;
                                _loaderUndone[4] = _loaderDone;
                                _loaderUndone[5] = _loaderDone;
                                writer.innerText = `$/~ cd Desktop/code
                                $/Desktop/code/~  ts-node mantra.ts\n${_loaderUndone.join("")} ${Math.floor(Math.random() * (44 - 28) + 28)}% - ${_randomDebug[2]}`
                            }, deadLine/3)
                            _loaderUndone[1] = _loaderDone;
                            _loaderUndone[2] = _loaderDone;
                            writer.innerText = `$/~ cd Desktop/code
                            $/Desktop/code/~  ts-node mantra.ts\n${_loaderUndone.join("")} ${Math.floor(Math.random() * (27 - 13) + 13)}% - ${_randomDebug[1]}`
                        }, deadLine/2)
                        _loaderUndone[0] = _loaderDone;
                        writer.innerText = `$/~ cd Desktop/code
                        $/Desktop/code/~  ts-node mantra.ts\n${_loaderUndone.join("")} ${Math.floor(Math.random() * (12 - 1) + 1)}% - ${_randomDebug[0]}`
                        // writer.innerText += `▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 10%`
                    }, 500)
                
            })
        })
    })
    _exitPromiseHell.then(()=>{
        console.log("pkg downloaded");
    
        let data = [];
        let finalValue = 180;
        let k = 1;

        while(finalValue >= 1){
            finalValue = 100 * Math.pow(0.98, k)
            data.push({y: finalValue+80});
            k++;
        };

        let i = 0;
        const cache = setInterval(() => {
            if(data[i] == undefined || !data[i]?.y){
                console.log("end of the zoop");
                clearInterval(cache)}
            else{
                if(data[i].y < 90){
                    document.getElementById("main-content").style.opacity = "100%";
                document.getElementById("main-content").className = "main-content";
                }
                console.log(data[i].y)
                camera.fov = data[i].y
                camera.updateProjectionMatrix();
                i++;
            }
            
        }, 10);

        // let counter = 0;
        
        // while(data[counter] != undefined){
        //     if(counter%3 == 0){
        //         console.log(data[counter]);
        //         camera.fov = data[counter].y;
        //         camera.updateProjectionMatrix();
        //         counter++
        //     }
            
        // }
        
        console.log(data.length)
        // while(data[counter] != undefined){
        //         camera.fov = data[count].y
        //         console.log(camera.fov)
        // }
        // let count = 0;
        //     let zoomer = setInterval(()=>{

        //         if(data[count].y<80){
        //             console.log("end of the zoom");
        //             clearInterval(zoomer);
        //             count = 0;
        //             data = [];

        //             // for (var k = 0; k < n; k++) {
        //             //     data.push({y: 2.718 ^ - Math.pow(b, -0.006 * k)});
        //             // }

        //             // const miniInterval = setInterval(()=>{

        //             //     camera.fov = data[count].y
        //             //     console.log(camera.fov)
        //             //     camera.updateProjectionMatrix();
        //             //     count++;

        //             // }, 3);
                    
        //         }
        //         camera.fov = data[count].y
        //         console.log(camera.fov)
        //         camera.updateProjectionMatrix();
        //         count++;
        //     }, 0)
            setTimeout(()=>{
                $("#window").fadeOut(600);
            }, 1000)
    })
        

    document.getElementById('close').addEventListener("click", ()=>{
            console.log("closed")
            $("#window").fadeOut(100);
            // document.getElementById("window").style.display = 'none'
    })
    
    //user imputs

    let _aliveSession = true;
    //exit current instance

    document.addEventListener("keydown", (key)=>{

        if(key.ctrlKey && key.keyCode == 67){
            console.log('exited');
            writer.innerText += "\n^C"
            clearInterval(_current)
            clearTimeout(_current)
            _aliveSession = false;
            writer.innerText += "\n";
            writer.innerText += "$/Desktop/code/~\xa0"; 
        }
           
    });

    document.addEventListener("keyup", (key)=>{
        if(!_aliveSession){
            writer.setAttribute("contenteditable", true)
        }
        console.log(key.keyCode);
        let commands = [`ts-node mantra.ts`, `cd Desktop/code`];
        let keyCommands = 0;

        if(key.keyCode == 38 && !_aliveSession){
            writer.innerText +=  commands[keyCommands]
            keyCommands++;
        }

        if(key.keyCode == 40 && !_aliveSession){
            writer.innerText +=  commands[keyCommands]
            keyCommands--;
        }

        if(key.keyCode == 8){
            let _temp =  writer.innerText
            let amt = writer.innerText.trim().replace("\n", "").trim().split("").length;
            if(writer.innerText.trim().replace("\n", "").trim().split("")[amt-1] == '~'){
                writer.innerText = _temp;
                console.log("cannot edit more")
            }
        }
        else if(key.keyCode == 13){
            let amt = writer.innerText.split("\n").length;
            console.log(writer.innerText.split("\n")[amt].join("").split("~"))
        }

    });

    let fullscreen = false;

    document.getElementById('max').addEventListener("click", ()=>{
        const hideMinimise = ()=>{
            if(!fullscreen) return document.getElementById("min").className = 'btn not-btn';
            document.getElementById("min").className = 'btn min-btn';
        }

        if(!fullscreen){
            let elem = document.getElementById("window")
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
                hideMinimise()
            } else if (elem.webkitRequestFullscreen) { /* Safari */
                elem.webkitRequestFullscreen();
                hideMinimise()
            } else if (elem.msRequestFullscreen) { /* IE11 */
                elem.msRequestFullscreen();
                hideMinimise()
            }
            fullscreen = true;
        }
        else {
                hideMinimise();
                fullscreen = false;
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                }
        }

        // var el = document.documentElement
        //     , rfs = // for newer Webkit and Firefox
        //         el.requestFullscreen
        //         || el.webkitRequestFullScreen
        //         || el.mozRequestFullScreen
        //         || el.msRequestFullscreen
        // ;
        // if(typeof rfs!="undefined" && rfs){
        // rfs.call(el);
        // } else if(typeof window.ActiveXObject!="undefined"){
        // // for Internet Explorer
        // var wscript = new ActiveXObject("WScript.Shell");
        // if (wscript!=null) {
        //     wscript.SendKeys("{F11}");
        // }
        // }
    })

    import * as THREE from "https://cdn.skypack.dev/three@0.124.0";
    import { OrbitControls } from "https://cdn.skypack.dev/three@0.124.0/examples/jsm/controls/OrbitControls";
    import { GLTFLoader } from "https://cdn.skypack.dev/three@0.124.0/examples/jsm/loaders/GLTFLoader";
    import { FBXLoader } from "https://cdn.skypack.dev/three@0.124.0/examples/jsm/loaders/FBXLoader";
    import { EffectComposer } from "https://cdn.skypack.dev/three@0.124.0/examples/jsm/postprocessing/EffectComposer";
    import Stats from "https://cdn.skypack.dev/three@0.124.0/examples/jsm/libs/stats.module";
    import { RenderPass } from "https://cdn.skypack.dev/three@0.124.0/examples/jsm/postprocessing/RenderPass.js";
    import { ShaderPass } from "https://cdn.skypack.dev/three@0.124.0/examples/jsm/postprocessing/ShaderPass.js";
    import gsap from "https://cdn.skypack.dev/gsap@3.6.0";
    
    console.log(OrbitControls)
    const calcAspect = (el) => el.clientWidth / el.clientHeight;
    const getNormalizedMousePos = (e) => {
        return {
            x: (e.clientX / window.innerWidth) * 2 - 1,
            y: -(e.clientY / window.innerHeight) * 2 + 1
        };
    };
    // 获取重心坐标系
    const getBaryCoord = (bufferGeometry) => {
        // https://gist.github.com/mattdesl/e399418558b2b52b58f5edeafea3c16c
        const length = bufferGeometry.attributes.position.array.length;
        const count = length / 3;
        const bary = [];
        for (let i = 0; i < count; i++) {
            bary.push(0, 0, 1, 0, 1, 0, 1, 0, 0);
        }
        const aCenter = new Float32Array(bary);
        bufferGeometry.setAttribute("aCenter", new THREE.BufferAttribute(aCenter, 3));
    };

    const gridIcosahedronTextureUrl = `https://i.loli.net/2021/03/09/1Cglerjx3yLauOo.jpg`;
    // const gridIcosahedronTextureUrl = "https://i.ibb.co/8PxhSfK/resized.jpg"
    const gridIcosahedronShapeVertexShader = `
    #define GLSLIFY 1
    //
    // GLSL textureless classic 3D noise "cnoise",
    // with an RSL-style periodic variant "pnoise".
    // Author:  Stefan Gustavson (stefan.gustavson@liu.se)
    // Version: 2011-10-11
    //
    // Many thanks to Ian McEwan of Ashima Arts for the
    // ideas for permutation and gradient selection.
    //
    // Copyright (c) 2011 Stefan Gustavson. All rights reserved.
    // Distributed under the MIT license. See LICENSE file.
    // https://github.com/ashima/webgl-noise
    //
    
    vec3 mod289(vec3 x)
    {
      return x - floor(x * (1.0 / 289.0)) * 289.0;
    }
    
    vec4 mod289(vec4 x)
    {
      return x - floor(x * (1.0 / 289.0)) * 289.0;
    }
    
    vec4 permute(vec4 x)
    {
      return mod289(((x*34.0)+1.0)*x);
    }
    
    vec4 taylorInvSqrt(vec4 r)
    {
      return 1.79284291400159 - 0.85373472095314 * r;
    }
    
    vec3 fade(vec3 t) {
      return t*t*t*(t*(t*6.0-15.0)+10.0);
    }
    
    // Classic Perlin noise
    float cnoise(vec3 P)
    {
      vec3 Pi0 = floor(P); // Integer part for indexing
      vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
      Pi0 = mod289(Pi0);
      Pi1 = mod289(Pi1);
      vec3 Pf0 = fract(P); // Fractional part for interpolation
      vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
      vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
      vec4 iy = vec4(Pi0.yy, Pi1.yy);
      vec4 iz0 = Pi0.zzzz;
      vec4 iz1 = Pi1.zzzz;
    
      vec4 ixy = permute(permute(ix) + iy);
      vec4 ixy0 = permute(ixy + iz0);
      vec4 ixy1 = permute(ixy + iz1);
    
      vec4 gx0 = ixy0 * (1.0 / 7.0);
      vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
      gx0 = fract(gx0);
      vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
      vec4 sz0 = step(gz0, vec4(0.0));
      gx0 -= sz0 * (step(0.0, gx0) - 0.5);
      gy0 -= sz0 * (step(0.0, gy0) - 0.5);
    
      vec4 gx1 = ixy1 * (1.0 / 7.0);
      vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
      gx1 = fract(gx1);
      vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
      vec4 sz1 = step(gz1, vec4(0.0));
      gx1 -= sz1 * (step(0.0, gx1) - 0.5);
      gy1 -= sz1 * (step(0.0, gy1) - 0.5);
    
      vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
      vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
      vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
      vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
      vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
      vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
      vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
      vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);
    
      vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
      g000 *= norm0.x;
      g010 *= norm0.y;
      g100 *= norm0.z;
      g110 *= norm0.w;
      vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
      g001 *= norm1.x;
      g011 *= norm1.y;
      g101 *= norm1.z;
      g111 *= norm1.w;
    
      float n000 = dot(g000, Pf0);
      float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
      float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
      float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
      float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
      float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
      float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
      float n111 = dot(g111, Pf1);
    
      vec3 fade_xyz = fade(Pf0);
      vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
      vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
      float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
      return 2.2 * n_xyz;
    }
    
    // https://tympanus.net/codrops/2019/10/29/real-time-multiside-refraction-in-three-steps/
    vec4 getWorldPosition(mat4 modelMat,vec3 pos){
        vec4 worldPosition=modelMat*vec4(pos,1.);
        return worldPosition;
    }
    
    // https://tympanus.net/codrops/2019/10/29/real-time-multiside-refraction-in-three-steps/
    vec3 getEyeVector(mat4 modelMat,vec3 pos,vec3 camPos){
        vec4 worldPosition=getWorldPosition(modelMat,pos);
        vec3 eyeVector=normalize(worldPosition.xyz-camPos);
        return eyeVector;
    }
    
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vEyeVector;
    
    uniform float uNoiseDensity;
    
    void main(){
        // 噪声扭曲顶点
        vec3 noise=pow(cnoise(normal),3.)*normal*uNoiseDensity;
        vec3 newPos=position+noise;
        
        vec4 modelPosition=modelMatrix*vec4(newPos,1.);
        vec4 viewPosition=viewMatrix*modelPosition;
        vec4 projectedPosition=projectionMatrix*viewPosition;
        gl_Position=projectedPosition;
        
        vUv=uv;
        
        // 获取N和I
        vNormal=normalize(normalMatrix*normal);
        vEyeVector=getEyeVector(modelMatrix,position,cameraPosition);
    }
    `;
    const gridIcosahedronShapeFragmentShader = `
    #define GLSLIFY 1
    // https://community.khronos.org/t/getting-the-normal-with-dfdx-and-dfdy/70177
    vec3 computeNormal(vec3 normal){
        vec3 X=dFdx(normal);
        vec3 Y=dFdy(normal);
        vec3 cNormal=normalize(cross(X,Y));
        return cNormal;
    }
    
    // http://glslsandbox.com/e#47182.0
    vec2 hash22(vec2 p){
        p=fract(p*vec2(5.3983,5.4427));
        p+=dot(p.yx,p.xy+vec2(21.5351,14.3137));
        return fract(vec2(p.x*p.y*95.4337,p.x*p.y*97.597));
    }
    
    // https://www.shadertoy.com/view/4scSW4
    float fresnel(float bias,float scale,float power,vec3 I,vec3 N)
    {
        return bias+scale*pow(1.+dot(I,N),power);
    }
    
    float invert(float n){
        return 1.-n;
    }
    
    vec3 invert(vec3 n){
        return 1.-n;
    }
    
    uniform float uTime;
    uniform vec2 uMouse;
    uniform vec2 uResolution;
    uniform sampler2D uTexture;
    uniform float uRefractionStrength;
    
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vEyeVector;
    
    void main(){
        vec2 newUv=vUv;
        
        // 平滑着色
        vec3 cNormal=computeNormal(vNormal);
        
        // 漫反射
        float diffuse=dot(cNormal,vec3(1.));
        
        // 折射随机度
        vec2 rand=hash22(vec2(floor(diffuse*10.)));
        vec2 strength=vec2(sign((rand.x-.5))+(rand.x-.5)*.6,sign((rand.y-.5))+(rand.y-.5)*.6);
        newUv=strength*gl_FragCoord.xy/vec2(1000.);
        
        // 折射
        vec3 refraction=.3*refract(vEyeVector,cNormal,1./3.);
        newUv+=refraction.xy;
        
        // 材质贴图
        vec4 texture=texture2D(uTexture,newUv);
        vec4 color=texture;
        
        // 菲涅尔反射
        float F=fresnel(0.,1.,2.,vEyeVector,cNormal);
        color*=(1.-F);
        
        gl_FragColor=color;
    }
    `;
    const gridIcosahedronEdgeVertexShader = `
    #define GLSLIFY 1
    //
    // GLSL textureless classic 3D noise "cnoise",
    // with an RSL-style periodic variant "pnoise".
    // Author:  Stefan Gustavson (stefan.gustavson@liu.se)
    // Version: 2011-10-11
    //
    // Many thanks to Ian McEwan of Ashima Arts for the
    // ideas for permutation and gradient selection.
    //
    // Copyright (c) 2011 Stefan Gustavson. All rights reserved.
    // Distributed under the MIT license. See LICENSE file.
    // https://github.com/ashima/webgl-noise
    //
    
    vec3 mod289(vec3 x)
    {
      return x - floor(x * (1.0 / 289.0)) * 289.0;
    }
    
    vec4 mod289(vec4 x)
    {
      return x - floor(x * (1.0 / 289.0)) * 289.0;
    }
    
    vec4 permute(vec4 x)
    {
      return mod289(((x*34.0)+1.0)*x);
    }
    
    vec4 taylorInvSqrt(vec4 r)
    {
      return 1.79284291400159 - 0.85373472095314 * r;
    }
    
    vec3 fade(vec3 t) {
      return t*t*t*(t*(t*6.0-15.0)+10.0);
    }
    
    // Classic Perlin noise
    float cnoise(vec3 P)
    {
      vec3 Pi0 = floor(P); // Integer part for indexing
      vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
      Pi0 = mod289(Pi0);
      Pi1 = mod289(Pi1);
      vec3 Pf0 = fract(P); // Fractional part for interpolation
      vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
      vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
      vec4 iy = vec4(Pi0.yy, Pi1.yy);
      vec4 iz0 = Pi0.zzzz;
      vec4 iz1 = Pi1.zzzz;
    
      vec4 ixy = permute(permute(ix) + iy);
      vec4 ixy0 = permute(ixy + iz0);
      vec4 ixy1 = permute(ixy + iz1);
    
      vec4 gx0 = ixy0 * (1.0 / 7.0);
      vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
      gx0 = fract(gx0);
      vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
      vec4 sz0 = step(gz0, vec4(0.0));
      gx0 -= sz0 * (step(0.0, gx0) - 0.5);
      gy0 -= sz0 * (step(0.0, gy0) - 0.5);
    
      vec4 gx1 = ixy1 * (1.0 / 7.0);
      vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
      gx1 = fract(gx1);
      vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
      vec4 sz1 = step(gz1, vec4(0.0));
      gx1 -= sz1 * (step(0.0, gx1) - 0.5);
      gy1 -= sz1 * (step(0.0, gy1) - 0.5);
    
      vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
      vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
      vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
      vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
      vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
      vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
      vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
      vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);
    
      vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
      g000 *= norm0.x;
      g010 *= norm0.y;
      g100 *= norm0.z;
      g110 *= norm0.w;
      vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
      g001 *= norm1.x;
      g011 *= norm1.y;
      g101 *= norm1.z;
      g111 *= norm1.w;
    
      float n000 = dot(g000, Pf0);
      float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
      float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
      float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
      float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
      float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
      float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
      float n111 = dot(g111, Pf1);
    
      vec3 fade_xyz = fade(Pf0);
      vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
      vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
      float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
      return 2.2 * n_xyz;
    }
    
    varying vec2 vUv;
    varying vec3 vCenter;
    
    attribute vec3 aCenter;
    
    uniform float uNoiseDensity;
    
    void main(){
        // 噪声扭曲顶点
        vec3 noise=pow(cnoise(normal),3.)*normal*uNoiseDensity;
        vec3 newPos=position+noise;
        
        vec4 modelPosition=modelMatrix*vec4(newPos,1.);
        vec4 viewPosition=viewMatrix*modelPosition;
        vec4 projectedPosition=projectionMatrix*viewPosition;
        gl_Position=projectedPosition;
        
        vUv=uv;
        
        vCenter=aCenter;
    }
    `;
    const gridIcosahedronEdgeFragmentShader = `
    uniform float uTime;
    uniform vec2 uMouse;
    uniform vec2 uResolution;
    uniform float uWidth;
    
    varying vec2 vUv;
    varying vec3 vCenter;
    
    // https://threejs.org/examples/?q=wire#webgl_materials_wireframe
    float edgeFactorTri(){
        vec3 d=fwidth(vCenter);
        vec3 a3=smoothstep(d*(uWidth-.5),d*(uWidth+.5),vCenter);
        return min(min(a3.x,a3.y),a3.z);
    }
    
    float invert(float n){
        return 1.-n;
    }
    
    void main(){
        float line=invert(edgeFactorTri());
        if(line<.1){
            discard;
        }
        vec4 color=vec4(vec3(line),1.);
        gl_FragColor=color;
    }
    `;
    const gridIcosahedronPostprocessingVertexShader = `
    varying vec2 vUv;
    
    void main(){
        vec4 modelPosition=modelMatrix*vec4(position,1.);
        vec4 viewPosition=viewMatrix*modelPosition;
        vec4 projectedPosition=projectionMatrix*viewPosition;
        gl_Position=projectedPosition;
        
        vUv=uv;
    }
    `;
    const gridIcosahedronPostprocessingFragmentShader = `
    #define GLSLIFY 1
    // https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
    float hash(vec2 p){return fract(1e4*sin(17.*p.x+p.y*.1)*(.1+abs(sin(p.y*13.+p.x))));}
    
    vec3 blackAndWhite(vec3 color){
        return vec3((color.r+color.g+color.b)/5.);
    }
    
    vec4 RGBShift(sampler2D t,vec2 rUv,vec2 gUv,vec2 bUv,float isBlackWhite){
        vec4 color1=texture2D(t,rUv);
        vec4 color2=texture2D(t,gUv);
        vec4 color3=texture2D(t,bUv);
        if(isBlackWhite==1.){
            color1.rgb=blackAndWhite(color1.rgb);
            color2.rgb=blackAndWhite(color2.rgb);
            color3.rgb=blackAndWhite(color3.rgb);
        }
        vec4 color=vec4(color1.r,color2.g,color3.b,color2.a);
        return color;
    }
    
    uniform float uTime;
    uniform vec2 uMouse;
    uniform vec2 uResolution;
    uniform sampler2D tDiffuse;
    uniform float uRGBShift;
    
    varying vec2 vUv;
    
    void main(){
        vec2 newUv=vUv;
        
        // RGB扭曲
        vec2 rUv=vUv+vec2(.01)*uRGBShift;
        vec2 gUv=vUv+vec2(0.);
        vec2 bUv=vUv+vec2(.01)*uRGBShift*-1.;
        vec4 color=RGBShift(tDiffuse,rUv,gUv,bUv,1.);
        
        // 噪声背景
        float noise=hash(newUv+uTime)*.15;
        color.rgb+=vec3(noise);
        
        gl_FragColor=color;
    }
    `;
    let camera;
    class Base {
        constructor(sel, debug = false) {
            this.debug = debug;
            this.container = document.querySelector(sel);
            this.perspectiveCameraParams = {
                fov: 180,
                near: 0.1,
                far: 100
            };
            this.orthographicCameraParams = {
                zoom: 2,
                near: -100,
                far: 1000
            };
            this.cameraPosition = new THREE.Vector3(0, 0, 0);
            this.lookAtPosition = new THREE.Vector3(0, 0, 0);
            this.rendererParams = {
                outputEncoding: THREE.LinearEncoding,
                config: {
                    alpha: true,
                    antialias: true
                }
            };
            this.mousePos = new THREE.Vector2(0, 0);
        }
        // 初始化
        init() {
            this.createScene();
            this.createPerspectiveCamera();
            this.createRenderer();
            this.createMesh({});
            this.createLight();
            this.createOrbitControls();
            this.addListeners();
            this.setLoop();
        }
        // 创建场景
        createScene() {
            const scene = new THREE.Scene();
            if (this.debug) {
                scene.add(new THREE.AxesHelper());
                const stats = Stats();
                this.container.appendChild(stats.dom);
                this.stats = stats;
            }
            this.scene = scene;
        }
        // 创建透视相机
        createPerspectiveCamera() {
            const { perspectiveCameraParams, cameraPosition, lookAtPosition } = this;
            const { fov, near, far } = perspectiveCameraParams;
            const aspect = calcAspect(this.container);
            camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
            camera.position.copy(cameraPosition);
            camera.lookAt(lookAtPosition);
            this.camera = camera;
        }
        // 创建正交相机
        createOrthographicCamera() {
            const { orthographicCameraParams, cameraPosition, lookAtPosition } = this;
            const { left, right, top, bottom, near, far } = orthographicCameraParams;
            const camera = new THREE.OrthographicCamera(left, right, top, bottom, near, far);
            camera.position.copy(cameraPosition);
            camera.lookAt(lookAtPosition);
            this.camera = camera;
        }
        // 更新正交相机参数
        updateOrthographicCameraParams() {
            const { container } = this;
            const { zoom, near, far } = this.orthographicCameraParams;
            const aspect = calcAspect(container);
            this.orthographicCameraParams = {
                left: -zoom * aspect,
                right: zoom * aspect,
                top: zoom,
                bottom: -zoom,
                near,
                far,
                zoom
            };
        }
        // 创建渲染
        createRenderer(useWebGL1 = false) {
            var _a;
            const { rendererParams } = this;
            const { outputEncoding, config } = rendererParams;
            const renderer = !useWebGL1
                ? new THREE.WebGLRenderer(config)
                : new THREE.WebGL1Renderer(config);
            renderer.setSize(this.container.clientWidth, this.container.clientHeight);
            renderer.outputEncoding = outputEncoding;
            this.resizeRendererToDisplaySize();
            (_a = this.container) === null || _a === void 0 ? void 0 : _a.appendChild(renderer.domElement);
            this.renderer = renderer;
            this.renderer.setClearColor(0x000000, 0);
        }
        // 允许投影
        enableShadow() {
            this.renderer.shadowMap.enabled = true;
        }
        // 调整渲染器尺寸
        resizeRendererToDisplaySize() {
            const { renderer } = this;
            if (!renderer) {
                return;
            }
            const canvas = renderer.domElement;
            const pixelRatio = window.devicePixelRatio;
            const { clientWidth, clientHeight } = canvas;
            const width = (clientWidth * pixelRatio) | 0;
            const height = (clientHeight * pixelRatio) | 0;
            const isResizeNeeded = canvas.width !== width || canvas.height !== height;
            if (isResizeNeeded) {
                renderer.setSize(width, height, false);
            }
            return isResizeNeeded;
        }
        // 创建网格
        createMesh(meshObject, container = this.scene) {
            const { geometry = new THREE.BoxGeometry(1, 1, 1), material = new THREE.MeshStandardMaterial({
                color: new THREE.Color("#d9dfc8")
            }), position = new THREE.Vector3(0, 0, 0) } = meshObject;
            const mesh = new THREE.Mesh(geometry, material);
            mesh.position.copy(position);
            container.add(mesh);
            return mesh;
        }
        // 创建光源
        createLight() {
            const dirLight = new THREE.DirectionalLight(new THREE.Color("#ffffff"), 0.5);
            dirLight.position.set(0, 50, 0);
            this.scene.add(dirLight);
            const ambiLight = new THREE.AmbientLight(new THREE.Color("#ffffff"), 0.4);
            this.scene.add(ambiLight);
        }
        // 创建轨道控制
        createOrbitControls() {
            const controls = new OrbitControls(this.camera, this.renderer.domElement);
            const { lookAtPosition } = this;
            controls.target.copy(lookAtPosition);
            controls.update();
            this.controls = controls;
        }
        // 监听事件
        addListeners() {
            this.onResize();
        }
        // 监听画面缩放
        onResize() {
            window.addEventListener("resize", (e) => {
                if (this.camera instanceof THREE.PerspectiveCamera) {
                    const aspect = calcAspect(this.container);
                    const camera = this.camera;
                    camera.aspect = aspect;
                    camera.updateProjectionMatrix();
                }
                else if (this.camera instanceof THREE.OrthographicCamera) {
                    this.updateOrthographicCameraParams();
                    const camera = this.camera;
                    const { left, right, top, bottom, near, far } = this.orthographicCameraParams;
                    camera.left = left;
                    camera.right = right;
                    camera.top = top;
                    camera.bottom = bottom;
                    camera.near = near;
                    camera.far = far;
                    camera.updateProjectionMatrix();
                }
                this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
            });
        }
        // 动画
        update() {
            console.log("animation");
        }
        // 渲染
        setLoop() {
            this.renderer.setAnimationLoop(() => {
                this.resizeRendererToDisplaySize();
                this.update();
                if (this.controls) {
                    this.controls.update();
                }
                if (this.stats) {
                    this.stats.update();
                }
                if (this.composer) {
                    this.composer.render();
                }
                else {
                    this.renderer.render(this.scene, this.camera);
                }
            });
        }
        // 创建文本
        createText(text = "", config, material = new THREE.MeshStandardMaterial({
            color: "#ffffff"
        })) {
            const geo = new THREE.TextGeometry(text, config);
            const mesh = new THREE.Mesh(geo, material);
            return mesh;
        }
        // 创建音效源
        createAudioSource() {
            const listener = new THREE.AudioListener();
            this.camera.add(listener);
            const sound = new THREE.Audio(listener);
            this.sound = sound;
        }
        // 加载音效
        loadAudio(url) {
            const loader = new THREE.AudioLoader();
            return new Promise((resolve) => {
                loader.load(url, (buffer) => {
                    this.sound.setBuffer(buffer);
                    resolve(buffer);
                });
            });
        }
        // 加载模型
        loadModel(url) {
            const loader = new GLTFLoader();
            return new Promise((resolve, reject) => {
                loader.load(url, (gltf) => {
                    const model = gltf.scene;
                    resolve(model);
                }, undefined, (err) => {
                    console.log(err);
                    reject();
                });
            });
        }
        // 加载FBX模型
        loadFBXModel(url) {
            const loader = new FBXLoader();
            return new Promise((resolve, reject) => {
                loader.load(url, (obj) => {
                    resolve(obj);
                }, undefined, (err) => {
                    console.log(err);
                    reject();
                });
            });
        }
        // 加载字体
        loadFont(url) {
            const loader = new THREE.FontLoader();
            return new Promise((resolve) => {
                loader.load(url, (font) => {
                    resolve(font);
                });
            });
        }
        // 创建点选模型
        createRaycaster() {
            this.raycaster = new THREE.Raycaster();
            this.trackMousePos();
        }
        // 追踪鼠标位置
        trackMousePos() {
            window.addEventListener("mousemove", (e) => {
                this.setMousePos(e);
            });
            window.addEventListener("mouseout", () => {
                this.clearMousePos();
            });
            window.addEventListener("mouseleave", () => {
                this.clearMousePos();
            });
            window.addEventListener("touchstart", (e) => {
                this.setMousePos(e.touches[0]);
            }, { passive: false });
            window.addEventListener("touchmove", (e) => {
                this.setMousePos(e.touches[0]);
            });
            window.addEventListener("touchend", () => {
                this.clearMousePos();
            });
        }
        // 设置鼠标位置
        setMousePos(e) {
            const { x, y } = getNormalizedMousePos(e);
            this.mousePos.x = x;
            this.mousePos.y = y;
        }
        // 清空鼠标位置
        clearMousePos() {
            this.mousePos.x = -100000;
            this.mousePos.y = -100000;
        }
        // 获取点击物
        getInterSects() {
            this.raycaster.setFromCamera(this.mousePos, this.camera);
            const intersects = this.raycaster.intersectObjects(this.scene.children, true);
            return intersects;
        }
        // 选中点击物时
        onChooseIntersect(target) {
            const intersects = this.getInterSects();
            const intersect = intersects[0];
            if (!intersect || !intersect.face) {
                return null;
            }
            const { object } = intersect;
            return target === object ? intersect : null;
        }
    }
    class GridIcosahedron extends Base {
        constructor(sel, debug) {
            super(sel, debug);
            this.clock = new THREE.Clock();
            this.cameraPosition = new THREE.Vector3(0, 0, 2);
            this.params = {
                uNoiseDensity: 0
            };
            this.mouseSpeed = 0;
        }
        // 初始化
        init() {
            this.createScene();
            this.createPerspectiveCamera();
            this.createRenderer();
            this.createGridIcosahedronShapeMaterial();
            this.createGridIcosahedronEdgeMaterial();
            this.createIcoShape();
            this.createIcoEdge();
            this.createPostprocessingEffect();
            this.createLight();
            this.trackMouseSpeed();
            this.createOrbitControls();
            this.addListeners();
            this.setLoop();
        }
        // 创建图形材质
        createGridIcosahedronShapeMaterial() {
            const loader = new THREE.TextureLoader();
            const texture = loader.load(gridIcosahedronTextureUrl);
            texture.wrapS = texture.wrapT = THREE.MirroredRepeatWrapping;
            const gridIcosahedronShapeMaterial = new THREE.ShaderMaterial({
                vertexShader: gridIcosahedronShapeVertexShader,
                fragmentShader: gridIcosahedronShapeFragmentShader,
                side: THREE.DoubleSide,
                uniforms: {
                    uTime: {
                        value: 0
                    },
                    uMouse: {
                        value: new THREE.Vector2(0, 0)
                    },
                    uResolution: {
                        value: new THREE.Vector2(window.innerWidth, window.innerHeight)
                    },
                    uTexture: {
                        value: texture
                    },
                    uRefractionStrength: {
                        value: 0.2
                    },
                    uNoiseDensity: {
                        value: this.params.uNoiseDensity
                    }
                }
            });
            this.gridIcosahedronShapeMaterial = gridIcosahedronShapeMaterial;
        }
        // 创建边框材质
        createGridIcosahedronEdgeMaterial() {
            const gridIcosahedronEdgeMaterial = new THREE.ShaderMaterial({
                vertexShader: gridIcosahedronEdgeVertexShader,
                fragmentShader: gridIcosahedronEdgeFragmentShader,
                side: THREE.DoubleSide,
                uniforms: {
                    uTime: {
                        value: 0
                    },
                    uMouse: {
                        value: new THREE.Vector2(0, 0)
                    },
                    uResolution: {
                        value: new THREE.Vector2(window.innerWidth, window.innerHeight)
                    },
                    uWidth: {
                        value: 2
                    },
                    uNoiseDensity: {
                        value: this.params.uNoiseDensity
                    }
                }
            });
            this.gridIcosahedronEdgeMaterial = gridIcosahedronEdgeMaterial;
        }
        // 创建二十面体图形
        createIcoShape() {
            const geometry = new THREE.IcosahedronBufferGeometry(1, 1);
            const material = this.gridIcosahedronShapeMaterial;
            this.createMesh({
                geometry,
                material
            });
        }
        // 创建二十面体边框
        createIcoEdge() {
            const geometry = new THREE.IcosahedronBufferGeometry(1.001, 1);
            getBaryCoord(geometry);
            const material = this.gridIcosahedronEdgeMaterial;
            this.createMesh({
                geometry,
                material
            });
        }
        // 获取重心坐标系
        getBaryCoord(bufferGeometry) {
            // https://gist.github.com/mattdesl/e399418558b2b52b58f5edeafea3c16c
            const length = bufferGeometry.attributes.position.array.length;
            const count = length / 3;
            const bary = [];
            for (let i = 0; i < count; i++) {
                bary.push(0, 0, 1, 0, 1, 0, 1, 0, 0);
            }
            const aCenter = new Float32Array(bary);
            bufferGeometry.setAttribute("aCenter", new THREE.BufferAttribute(aCenter, 3));
        }
        // 创建后期处理特效
        createPostprocessingEffect() {
            const composer = new EffectComposer(this.renderer);
            const renderPass = new RenderPass(this.scene, this.camera);
            composer.addPass(renderPass);
            const customPass = new ShaderPass({
                vertexShader: gridIcosahedronPostprocessingVertexShader,
                fragmentShader: gridIcosahedronPostprocessingFragmentShader,
                uniforms: {
                    tDiffuse: {
                        value: null
                    },
                    uTime: {
                        value: 0
                    },
                    uRGBShift: {
                        value: 0.3
                    }
                }
            });
            customPass.renderToScreen = true;
            composer.addPass(customPass);
            this.composer = composer;
            this.customPass = customPass;
        }
        // 动画
        update() {
            const elapsedTime = this.clock.getElapsedTime();
            const mousePos = this.mousePos;
            const mouseSpeed = this.mouseSpeed * 5;
            if (this.gridIcosahedronShapeMaterial) {
                this.gridIcosahedronShapeMaterial.uniforms.uTime.value = elapsedTime;
                this.gridIcosahedronShapeMaterial.uniforms.uMouse.value = mousePos;
                this.scene.rotation.x = elapsedTime / 15;
                this.scene.rotation.y = elapsedTime / 15;
                gsap.to(this.gridIcosahedronShapeMaterial.uniforms.uNoiseDensity, {
                    value: mouseSpeed,
                    duration: 2
                });
                gsap.to(this.gridIcosahedronEdgeMaterial.uniforms.uNoiseDensity, {
                    value: mouseSpeed,
                    duration: 2
                });
            }
            if (this.customPass) {
                this.customPass.uniforms.uTime.value = elapsedTime;
                gsap.to(this.customPass.uniforms.uRGBShift, {
                    value: mouseSpeed / 10,
                    duration: 2
                });
            }
        }
        // 追踪鼠标速度
        trackMouseSpeed() {
            // https://stackoverflow.com/questions/6417036/track-mouse-speed-with-js
            let lastMouseX = -1;
            let lastMouseY = -1;
            let mouseSpeed = 0;
            window.addEventListener("mousemove", (e) => {
                const mousex = e.pageX;
                const mousey = e.pageY;
                if (lastMouseX > -1) {
                    mouseSpeed = Math.max(Math.abs(mousex - lastMouseX), Math.abs(mousey - lastMouseY));
                    this.mouseSpeed = mouseSpeed / 100;
                }
                lastMouseX = mousex;
                lastMouseY = mousey;
            });
            document.addEventListener("mouseleave", () => {
                this.mouseSpeed = 0;
            });
        }
    }
    const start = () => {
        const gridIcosahedron = new GridIcosahedron(".grid-icosahedron", false);
        gridIcosahedron.init();
    };
    start();

    



    