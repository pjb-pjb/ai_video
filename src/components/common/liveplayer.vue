<template>
    <div class="h5videowrapper h5container" :class="{fullscreen:isFull}"
         @mouseover="show_menu=true" @mouseout="show_menu=false" style="width:100%;height:100%;">
        <video class="h5video" :id="h5id" autoplay webkit-playsinline playsinline></video>
        <template v-if="this.tokens">
            <div class="h5controls" v-show="show_menu" style=" padding:0px">

                <button v-show="this.num" type="button" class="btn vidbuttion pull-right" @click="CloseVideo($event)"><i class="mdi mdi-close"></i></button>
                <button type="button" class="btn vidbuttion pull-right" @click="show_fangxian=!show_fangxian;"><i class="mdi mdi-parking"></i></button>
                <button type="button" @click="fullScreen()" class="btn vidbuttion pull-right" > <i class="mdi mdi-fullscreen"></i></button>
                <button type="button" @click="fullScreen()" class="btn vidbuttion pull-right" > <i class="mdi mdi-fullscreen-exit"></i></button>
                <button type="button" class="btn vidbuttion pull-right" @click="DoSnapshot($event)"><i class="mdi mdi-camera"></i></button>
                <!-- audio
                <button type="button" class="btn vidbuttion pull-right" > <i class="mdi  mdi-record"></i></button>
                <button type="button" class="btn vidbuttion pull-right" href="#"> <i class="mdi mdi-volume-high"></i></button>
                <button type="button" class="btn vidbuttion pull-right" href="#"> <i class="mdi mdi-volume-off"></i></button>
                -->
            </div>
        </template>
        <div class="ptzcontrols" v-show="show_fangxian" style="padding:0px">
            <div class="row">
                <button type="button" class="btn ptzbuttonnone pull-right" href="#"><i></i></button>
                <button type="button" class="btn ptzbutton pull-right" href="#"
                        @mousedown="PtzActionZoomIn($event)" @mouseup="PtzActionStop($event)"
                        @touchstart="PtzActionZoomIn($event)" @touchend="PtzActionStop($event)"><i
                        class="mdi  mdi-plus-circle-outline"></i></button>
                <button type="button" class="btn ptzbuttonnone pull-right" href="#"><i></i></button>
                <button type="button" class="btn ptzbutton pull-right" href="#"
                        @mousedown="PtzActionUp($event)" @mouseup="PtzActionStop($event)"
                        @touchstart="PtzActionUp($event)" @touchend="PtzActionStop($event)"><i
                        class="mdi  mdi-arrow-up"></i></button>
            </div>
            <div class="row ">
                <button type="button" class="btn ptzbuttonnone pull-right" href="#"><i></i></button>
                <button type="button" class="btn ptzbuttonnone pull-right" href="#"><i></i></button>
                <button type="button" class="btn ptzbutton pull-right" href="#"
                        @mousedown="PtzActionRight($event)" @mouseup="PtzActionStop($event)"
                        @touchstart="PtzActionRight($event)" @touchend="PtzActionStop($event)"><i
                        class="mdi  mdi-arrow-right"></i></button>
                <button type="button" class="btn ptzbuttonnone pull-right" href="#"><i></i></button>
                <button type="button" class="btn ptzbutton pull-right" href="#"
                        @mousedown="PtzActionLeft($event)" @mouseup="PtzActionStop($event)"
                        @touchstart="PtzActionLeft($event)" @touchend="PtzActionStop($event)"><i
                        class="mdi  mdi-arrow-left"></i></button>
            </div>
            <div class="row ">
                <button type="button" class="btn ptzbuttonnone pull-right" href="#"><i></i></button>
                <button type="button" class="btn ptzbutton pull-right" href="#"
                        @mousedown="PtzActionZoomOut($event)" @mouseup="PtzActionStop($event)"
                        @touchstart="PtzActionZoomOut($event)" @touchend="PtzActionStop($event)"><i
                        class="mdi  mdi-minus-circle-outline"></i></button>
                <button type="button" class="btn ptzbuttonnone pull-right" href="#"><i></i></button>
                <button type="button" class="btn ptzbutton pull-right" href="#"
                        @mousedown="PtzActionDown($event)" @mouseup="PtzActionStop($event)"
                        @touchstart="PtzActionDown($event)" @touchend="PtzActionStop($event)"><i
                        class="mdi  mdi-arrow-down"></i></button>
            </div>
        </div>
    </div>
</template>
<script>
    import '../../assets/adapter.js'
    import {H5sPlayerWS, H5sPlayerHls, H5sPlayerRTC} from '../../assets/h5splayer.js'
    import {H5siOS, H5sPlayerCreate} from '../../assets/h5splayerhelper.js'

    export default {
        name: 'liveplayer',
        props: ['h5id', 'tokens','num'],
        data() {
            return {
                videoid: this.h5videoid,
                h5handler: undefined,
                currtoken: undefined,
                ptzshow: false,
                proto: 'WS',
                show_menu: false,
                show_fangxian: false,
                isFull: false,
                token:"",
            }
        },
        activated() {
            // console.log(this.h5id, "activated");
        },
        deactivated() {
            // console.log(this.h5id, "deactivated");
        },
        beforeDestroy() {
            // console.log(this.h5id, "beforeDestroy");
            if (this.h5handler != undefined) {
                this.h5handler.disconnect();
                delete this.h5handler;
                this.h5handler = undefined;
            }
            this.currtoken = undefined;
        },
        destroyed() {
            // console.log(this.h5id, "destroyed");
          if (this.h5handler != undefined) {
            // $rtcbutton.css("display", "none");
            this.h5handler.disconnect();
            delete this.h5handler;
            this.h5handler = undefined;
          }
        },
        mounted() {

            let _this = this;
            this.token = this.tokens;
            if (this.token) {
                _this.PlayVideo(this.token);
            }
        },
        methods: {
            fullScreen() {
                if (!this.token) {
                    return;
                }
                this.isFull = !this.isFull;
            },
            //下载图片
            downloadIamge(src, name) {
                if (!this.token) {
                    return;
                }
                var image = new Image();
                // 解决跨域 Canvas 污染问题
                image.setAttribute('crossOrigin', 'anonymous');
                image.onload = function () {
                    var canvas = document.createElement('canvas');
                    canvas.width = image.width;
                    canvas.height = image.height;

                    var context = canvas.getContext('2d')
                    context.drawImage(image, 0, 0, image.width, image.height)
                    var url = canvas.toDataURL('image/png');

                    // 生成一个a元素
                    var a = document.createElement('a');
                    // 创建一个单击事件
                    var event = new MouseEvent('click');

                    // 将a的download属性设置为我们想要下载的图片名称，若name不存在则使用‘下载图片名称’作为默认名称
                    a.download = name || '下载图片名称';
                    // 将生成的URL设置为a.href属性
                    a.href = url;
                    // 触发a的单击事件
                    a.dispatchEvent(event);
                }
                image.src = src;
            },
            PlayVideo(token) {

                if (this.h5handler != undefined) {
                    this.h5handler.disconnect();
                    delete this.h5handler;
                    this.h5handler = undefined;
                }
                this.currtoken = token;
                // console.log("play ", token);


                var root = process.env.API_ROOT;
                var wsroot = process.env.WS_HOST_ROOT;


                if (root == undefined) {
                    root = window.location.protocol + '//' + window.location.host + window.location.pathname;
                }
                if (wsroot == undefined) {
                    wsroot = window.location.host;
                }


                let conf = {
                    videoid: this.h5id,
                    protocol: window.location.protocol, //http: or https:
                    host: wsroot, //localhost:8080
                    rootpath: '/', // '/'
                    token: token,
                    hlsver: 'v1', //v1 is for ts, v2 is for fmp4
                    session: "da52ce80-63a9-418d-85a5-d14ebb537ec8" //session got from login
                };


                //
                // console.log($container );
                // return ;
                if (this.proto == 'RTC' || (H5siOS() === true)) {
                    this.h5handler = new H5sPlayerRTC(conf);
                } else {
                    this.h5handler = new H5sPlayerWS(conf);
                }


                this.h5handler.connect();
            },
            CloseVideo(event) {
                this.$emit('CloseVideoBox',this.num);
                this.token = "";
                var $container = $("#" + this.h5id);
                var $controls = $container.children(".h5controls");
                var $rtcbutton = $controls.children(".rtcbutton");
                if (this.h5handler != undefined) {
                    // $rtcbutton.css("display", "none");
                    this.h5handler.disconnect();
                    delete this.h5handler;
                    this.h5handler = undefined;
                    // this.$Notice.info({
                    //     title: "Stop successfully"
                    // });
                    // $("#" + this.h5videoid).get(0).load();
                    // $("#" + this.h5videoid).get(0).poster = '';
                }
                var $video = $("#" + this.h5id);
                var videoHTML = '<video id="'+this.h5id+'" class="h5video" id=' + this.videoid + ' autoplay webkit-playsinline playsinline></video>';
                $video.parent().append(videoHTML);
                $video.remove();
            },
            PtzControlShow(event) {
                // console.log(this.ptzshow);
                var $container = $("#" + this.h5id);
                var $controls = $container.children(".ptzcontrols");
                if (this.ptzshow == false) {
                    $controls.css("display", "block");
                    this.ptzshow = true;
                } else {
                    $controls.css("display", "none");
                    this.ptzshow = false;
                }
            },

            PtzActionZoomIn(event) {
                // console.log("PtzActionZoomIn");
                this.PtzAction('zoomin');
            },
            PtzActionZoomOut(event) {
                this.PtzAction('zoomout');
            },
            PtzActionLeft(event) {
                this.PtzAction('left');
            },
            PtzActionRight(event) {
                this.PtzAction('right');
            },
            PtzActionUp(event) {
                this.PtzAction('up');
            },
            PtzActionDown(event) {
                this.PtzAction('down');
            },
            PtzActionStop(event) {
                // console.log("PtzActionStop");
                this.PtzAction('stop');
            },

            PtzAction(action) {

                if (this.h5handler == undefined) {
                    return;
                }
                let _this = this;
                var root = process.env.API_ROOT;
                if (root == undefined) {
                    root = window.location.protocol + '//' + window.location.host + window.location.pathname;
                }

                var ptzcmd = "token=" + this.currtoken + "&action=" + action + "&speed=0.1";

                var url = root + "/api/v1/Ptz?" + ptzcmd + "&session=" + "a8bc161e-bc9d-4e6a-ab3a-c80531ffbfb2";
                this.$http.get(url).then(result => {
                    // console.log(result);
                    if (result.status == 200) {

                    }
                }).catch(error => {
                    // console.log('ptz failed!', error);
                });
            },
            DoRecord(event) {
                if (this.h5handler == undefined) {
                    return;
                }
                let _this = this;
                var root = process.env.API_ROOT;
                if (root == undefined) {
                    root = window.location.protocol + '//' + window.location.host + window.location.pathname;
                }
                var record = "token=" + this.currtoken + "&duration=300";
                // console.log("record cmd", record);

                var url = root + "/api/v1/Record?" + record + "&session=" + this.$store.state.token;

                this.$http.get(url).then(result => {
                    // console.log(result);
                    if (result.status == 200) {
                        this.$Notice.info({
                            title: "Record successfully"
                        })
                    }
                }).catch(error => {
                    // console.log('Record failed!', error);
                    this.$Notice.info({
                        title: "Record failed !"
                    })
                });
            },
            DoSnapshot(event) {
                if (this.h5handler == undefined) {
                    return;
                }
                let _this = this;
                var root = process.env.API_ROOT;
                if (root == undefined) {
                    root = window.location.protocol + '//' + window.location.host + window.location.pathname;
                }

                var snapshot = "token=" + this.currtoken;
                // console.log("snapshot cmd", snapshot);

                var url = root + "/api/v1/Snapshot?" + snapshot + "&session=" + this.$store.state.token;

                this.$http.get(url).then(result => {
                    // console.log(result);
                    if (result.status == 200) {
                        this.$message({
                            message: '截图成功',
                            type: 'success'
                        });
                        // this.downloadIamge(process.env.IMG_ROOT+result.data.strUrl,result.data.strFileName);
                        // console.log("http://172.16.3.174:8080" + result.data.strUrl);
                        setTimeout(() => {
                            this.downloadIamge(process.env.IMG_ROOT + result.data.strUrl, "a");
                        }, 2000);
                    }
                }).catch(error => {
                    // console.log('Snapshot failed!', error);
                    this.$message({
                        message: '截图失败',
                        type: 'error'
                    });
                });
            }
        },
        watch: {
            tokens() {
                if(this.tokens){
                    this.token = this.tokens;
                    this.PlayVideo(this.token);
                }else {
                    this.CloseVideo();
                    this.isFull = false;
                }
            }
        }
    }
    //fill scale-down
</script>

<style scoped>

    .h5video {
        object-fit: fill;
    }

    .h5videowrapper {
        padding: 0px;
        height: 100%;
        width: 100%;
        /*padding: 18px;*/
        /*background: url(../../assets/home/images/videoShang.png) no-repeat;*/
        /*background-size: 100% 100%;*/
    }

    video {
        width: 100%;
        height: 100%
    }

    .vidbuttion {
        height: 24px;
        width: 24px;
        padding: 0px;
        margin: 0px;
        margin-left: 5px;
        opacity: 0.60;

    }

    .vidbuttion:hover {
        /*background-color: #3c8dbc;*/
        cursor: pointer;
        color: rgb(187, 184, 184);
    }

    .ptzbutton {
        height: 24px;
        width: 24px;
        padding: 0px;
        margin: 0px;
        opacity: 1;
        background: rgba(255, 255, 255, 0.3);
    }

    .ptzbuttonnone {
        height: 24px;
        width: 24px;
        padding: 0px;
        margin: 0px;
        margin-right: 0px;
        opacity: 0;
        background: rgba(255, 255, 255, 0);
    }

    .ptzbutton:hover {
        /*background-color: #3c8dbc;*/
        cursor: pointer;
        color: rgb(187, 184, 184);
    }

    .h5container {
        position: relative;
        display: inline-block;
        z-index: 99;
    }

    .rtcbutton {
        display: none;
    }

    .h5container > .h5controls {
        position: absolute;
        top: 0px;
        right:0px;
        background: rgba(255, 255, 255, 0.3);
        padding: 0px;
        box-sizing: content-box;
        z-index: 10000;
        /*width: calc(100% - 28px);*/

    }

    .h5container > .ptzcontrols {
        position: absolute;
        bottom: 0;
        background: rgba(255, 255, 255, 0);
        padding: 0px;
        box-sizing: content-box;
        z-index: 11000;
        width: 100%;

    }

    .row {
        height: 30px;
    }

    button, input, select, textarea {
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
    }
</style>
<style>
    video{
        width: 100%;
        height: 100%;
        object-fit: fill;
    }
</style>