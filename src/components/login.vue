<template>
    <div class="login-box">
        <Head></Head>
        <main>
            <div class="top">
                <div class="text">权限校验</div>
                <!--<div class="close"><i class="el-icon-close"></i></div>-->
            </div>
            <div class="middle">
                <el-form :rules="rules" ref="ruleForm" style="width: 70%;margin: 0 auto;margin-top: 28px;"
                         :label-position="labelPosition" label-width="100px"
                         :model="formLabelAlign">
                    <el-form-item label="操作人" prop="name">
                        <el-input v-model="formLabelAlign.name" style="color: #fff;" placeholder="请输入姓名"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="pass">
                        <el-input type="password" v-model="formLabelAlign.pass" placeholder='请输入密码'></el-input>
                    </el-form-item>
                    <!--<el-form-item label="双因子验证">-->
                    <!--<el-input v-model="formLabelAlign.code" placeholder="校验通过"></el-input>-->
                    <!--</el-form-item>-->
                </el-form>
            </div>
            <div class="bottom">
                <div :class="{left:true,active:flag}" @click="submit">登录</div>
                <div :class="{right:true,active:!flag}" @mousedown="mousedown" @mouseup="mouseup">取消</div>
            </div>
        </main>
        <footer>技术支持：山西振中电力股份有限公司</footer>
    </div>
</template>

<script>
    import Head from "./common/head.vue";
    import {$ajax, loginCheck} from "@/http/api/api.js";
    import base64 from "@/utils/base64.js";

    export default {
        name: 'Login',
        data() {
            return {
                //标记选中登录还是取消
                flag: true,
                labelPosition: 'right',
                formLabelAlign: {
                    name: '',
                    pass: '',
                    code: ''
                },
                rules: {
                    name: [
                        {required: true, message: '请输入姓名', trigger: 'blur'},
                    ],
                    pass: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                    ],
                    code: [
                        {required: true, message: '请输入校验因子', trigger: 'blur'},
                    ]
                }
            }
        },
        components: {
            Head
        },
        methods: {
            submit() {
                this.$refs["ruleForm"].validate((valid) => {
                    if (!valid) {
                    } else {
                        var data = this.formLabelAlign;
                        if (data.name == "admin" && data.pass == "zzes1234") {
                            sessionStorage.isLogin = "yes";
                            this.$router.push("/home/map");
                        } else {
                            this.$message({
                                message: '登录失败',
                                type: 'error'
                            });
                        }
                        // loginCheck.data = {
                        //     "userNameOrEmailAddress": this.formLabelAlign.name,
                        //     "password": this.formLabelAlign.pass,
                        //     "rememberClient": true
                        // }
                        // $ajax(loginCheck,  (res)=>{
                        //     if (res && res.data.success) {
                        //         sessionStorage[base64.encode("isLogin")] = base64.encode("yes"),
                        //         sessionStorage[base64.encode("token")] = base64.encode(res.data.result.accessToken);
                        //         sessionStorage[base64.encode("username")] = base64.encode(this.formLabelAlign.name);
                        //         this.$store.state.isHaveRouter = false;
                        //         this.$message({
                        //             message: '登录成功',
                        //             type: 'success'
                        //         });
                        //         this.$router.push("/nav");
                        //     }else {
                        //         this.$message({
                        //             message: '登录失败',
                        //             type: 'error'
                        //         });
                        //     }
                        // }, function () {
                        //     this.$message({
                        //         message: '登录失败',
                        //         type: 'error'
                        //     });
                        // });
                    }
                });
            },
            mousedown() {
                this.$refs["ruleForm"].resetFields();
                this.flag = false;
            },
            mouseup() {
                this.flag = true;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .login-box {
        width: 100%;
        min-height: 100vh;
        background: {
            image: url(../assets/login/bg.png);
            size: 100% 100%;
        }
        margin: 0;
        main {
            max-width: 793px;
            height: 450px;
            margin: 100px auto 0;
            padding: 0 50px;
            box-sizing: border-box;
            .top {
                width: 693px;
                height: 63px;
                background-color: #181e72;
                border: solid 1px #42bdff;
                border-radius: 10px 10px 0 0;

                .text {
                    height: 100%;
                    line-height: 63px;
                    float: left;
                    font-size: 18px;
                    font-weight: normal;
                    font-stretch: normal;
                    letter-spacing: 1px;
                    color: #ffffff;
                    margin-left: 40px;
                }

                .close {
                    width: 24px;
                    height: 24px;
                    background-color: #e7eafd;
                    margin-top: 20px;
                    margin-right: 21px;
                    float: right;
                    border-radius: 50%;
                    text-align: center;
                    line-height: 24px;
                    cursor: pointer;
                }
            }

            .middle {
                width: 693px;
                height: 286px;
                background-color: #172070;
                border: solid 1px #42bdff;
                .el-form-item {
                    margin: 50px 0px;
                }
                .el-form-item__label {
                    color: #fff;
                }

                .el-input__inner {
                    height: 50px;
                    background-color: #e7eafd;
                    border: solid 0px #a0a0a0;
                    border-radius: 0;
                    font-size: 14px;
                    font-weight: normal;
                    font-stretch: normal;
                    letter-spacing: 1px;
                }

                $color: #000;

                input::-webkit-input-placeholder {
                    color: $color;
                }

                input::-moz-placeholder {
                    /* Mozilla Firefox 19+ */
                    color: $color;
                }

                input:-moz-placeholder {
                    /* Mozilla Firefox 4 to 18 */
                    color: $color;
                }

                input:-ms-input-placeholder {
                    /* Internet Explorer 10-11 */
                    color: $color;
                }
            }

            .bottom {
                width: 693px;
                height: 63px;
                background-color: #181e72;
                border: solid 1px #42bdff;
                border-radius: 0 0 10px 10px;
                .left, .right {
                    &.active {
                        background: #42bdff;
                    }
                    width: 50%;
                    height: 100%;
                    line-height: 63px;
                    text-align: center;
                    font-size: 18px;
                    font-weight: normal;
                    font-stretch: normal;
                    letter-spacing: 1px;
                    color: #ffffff;
                    float: left;
                    cursor: pointer;
                    transition: all 0.3s;
                }
            }
        }
        footer {
            color: #e7eafd;
            font-size: 14px;
            text-align: center;
            position: fixed;
            bottom: 20px;
            width: 100%;
        }
    }
</style>
