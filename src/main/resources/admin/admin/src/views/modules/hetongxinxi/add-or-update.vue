<template>
	<div class="addEdit-block" style="width: 100%;">
		<el-form
			:style='{"padding":"30px","boxShadow":"0px 4px 10px 0px rgba(0,0,0,0.3020)","borderRadius":"0","flexWrap":"wrap","background":"#fff","display":"flex"}'
			class="add-update-preview"
			ref="ruleForm"
			:model="ruleForm"
			:rules="rules"
			label-width="100px"
		>
			<template >
				<el-form-item :style='{"width":"33.3%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'" label="合同编号" prop="hetongbianhao">
					<el-input v-model="ruleForm.hetongbianhao" placeholder="合同编号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"33.3%","margin":"0 0 20px 0"}' class="input" v-else-if="ruleForm.hetongbianhao" label="合同编号" prop="hetongbianhao">
					<el-input v-model="ruleForm.hetongbianhao" placeholder="合同编号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"33.3%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="合同名称" prop="hetongmingcheng">
					<el-input v-model="ruleForm.hetongmingcheng" placeholder="合同名称" clearable  :readonly="ro.hetongmingcheng"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"33.3%","margin":"0 0 20px 0"}' v-else class="input" label="合同名称" prop="hetongmingcheng">
					<el-input v-model="ruleForm.hetongmingcheng" placeholder="合同名称" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"33.3%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="甲方" prop="jiafang">
					<el-input v-model="ruleForm.jiafang" placeholder="甲方" clearable  :readonly="ro.jiafang"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"33.3%","margin":"0 0 20px 0"}' v-else class="input" label="甲方" prop="jiafang">
					<el-input v-model="ruleForm.jiafang" placeholder="甲方" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"33.3%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="乙方" prop="yifang">
					<el-input v-model="ruleForm.yifang" placeholder="乙方" clearable  :readonly="ro.yifang"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"33.3%","margin":"0 0 20px 0"}' v-else class="input" label="乙方" prop="yifang">
					<el-input v-model="ruleForm.yifang" placeholder="乙方" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"33.3%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="总额" prop="zonge">
					<el-input v-model="ruleForm.zonge" placeholder="总额" clearable  :readonly="ro.zonge"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"33.3%","margin":"0 0 20px 0"}' v-else class="input" label="总额" prop="zonge">
					<el-input v-model="ruleForm.zonge" placeholder="总额" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"33.3%","margin":"0 0 20px 0"}' class="upload" v-if="type!='info'&& !ro.hetongwenjian" label="合同文件" prop="hetongwenjian">
					<file-upload
						tip="点击上传合同文件"
						action="file/upload"
						:limit="1"
						:multiple="true"
						:fileUrls="ruleForm.hetongwenjian?ruleForm.hetongwenjian:''"
						@change="hetongwenjianUploadChange"
					></file-upload>
				</el-form-item>  
				<el-form-item :style='{"width":"33.3%","margin":"0 0 20px 0"}' v-else-if="ruleForm.hetongwenjian" label="合同文件" prop="hetongwenjian">
					<el-button :style='{"border":"0","cursor":"pointer","padding":"0 25px","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"0","background":"#2EB1FD","width":"auto","lineHeight":"40px","fontSize":"14px","height":"40px"}' type="text" size="small" @click="download($base.url+ruleForm.hetongwenjian)">下载</el-button>
				</el-form-item>
				<el-form-item :style='{"width":"33.3%","margin":"0 0 20px 0"}' v-else-if="!ruleForm.hetongwenjian" label="合同文件" prop="hetongwenjian">
					<el-button :style='{"border":"0","cursor":"pointer","padding":"0 25px","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"0","background":"#2EB1FD","width":"auto","lineHeight":"40px","fontSize":"14px","height":"40px"}' type="text" size="small">无</el-button>
				</el-form-item>
				<el-form-item :style='{"width":"33.3%","margin":"0 0 20px 0"}' class="date" v-if="type!='info'" label="签订日期" prop="qiandingriqi">
					<el-date-picker
						format="yyyy 年 MM 月 dd 日"
						value-format="yyyy-MM-dd"
						v-model="ruleForm.qiandingriqi" 
						type="date"
						:readonly="ro.qiandingriqi"
						placeholder="签订日期"
					></el-date-picker> 
				</el-form-item>
				<el-form-item :style='{"width":"33.3%","margin":"0 0 20px 0"}' class="input" v-else-if="ruleForm.qiandingriqi" label="签订日期" prop="qiandingriqi">
					<el-input v-model="ruleForm.qiandingriqi" placeholder="签订日期" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"33.3%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="有效期" prop="youxiaoqi">
					<el-input v-model="ruleForm.youxiaoqi" placeholder="有效期" clearable  :readonly="ro.youxiaoqi"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"33.3%","margin":"0 0 20px 0"}' v-else class="input" label="有效期" prop="youxiaoqi">
					<el-input v-model="ruleForm.youxiaoqi" placeholder="有效期" readonly></el-input>
				</el-form-item>
			</template>
				<el-form-item :style='{"width":"33.3%","margin":"0 0 20px 0"}' class="textarea" v-if="type!='info'" label="合同内容" prop="hetongneirong">
					<el-input
					  style="min-width: 200px; max-width: 600px;"
					  type="textarea"
					  :rows="8"
					  placeholder="合同内容"
					  v-model="ruleForm.hetongneirong" >
					</el-input>
				</el-form-item>
				<el-form-item :style='{"width":"33.3%","margin":"0 0 20px 0"}' v-else-if="ruleForm.hetongneirong" label="合同内容" prop="hetongneirong">
					<span :style='{"fontSize":"14px","lineHeight":"40px","color":"#333","fontWeight":"500","display":"inline-block"}'>{{ruleForm.hetongneirong}}</span>
				</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"0"}' class="btn">
				<el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"0","background":"#2EB1FD","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}'  v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
				<el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#fff","borderRadius":"0","background":"#2EB1FD","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
				<el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#fff","borderRadius":"0","background":"#2EB1FD","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
			</el-form-item>
		</el-form>
    

  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
export default {
	data() {
		let self = this
		var validateIdCard = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!checkIdCard(value)) {
				callback(new Error("请输入正确的身份证号码"));
			} else {
				callback();
			}
		};
		var validateUrl = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isURL(value)) {
				callback(new Error("请输入正确的URL地址"));
			} else {
				callback();
			}
		};
		var validateMobile = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isMobile(value)) {
				callback(new Error("请输入正确的手机号码"));
			} else {
				callback();
			}
		};
		var validatePhone = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isPhone(value)) {
				callback(new Error("请输入正确的电话号码"));
			} else {
				callback();
			}
		};
		var validateEmail = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isEmail(value)) {
				callback(new Error("请输入正确的邮箱地址"));
			} else {
				callback();
			}
		};
		var validateNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isNumber(value)) {
				callback(new Error("请输入数字"));
			} else {
				callback();
			}
		};
		var validateIntNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isIntNumer(value)) {
				callback(new Error("请输入整数"));
			} else {
				callback();
			}
		};
		return {
			id: '',
			type: '',
			
			
			ro:{
				hetongbianhao : false,
				hetongmingcheng : false,
				jiafang : false,
				yifang : false,
				zonge : false,
				hetongwenjian : false,
				qiandingriqi : false,
				hetongneirong : false,
				youxiaoqi : false,
				crossuserid : false,
				crossrefid : false,
			},
			
			
			ruleForm: {
				hetongbianhao: this.getUUID(),
				hetongmingcheng: '',
				jiafang: '',
				yifang: '',
				zonge: '',
				hetongwenjian: '',
				qiandingriqi: '',
				hetongneirong: '',
				youxiaoqi: '',
				crossuserid: '',
				crossrefid: '',
			},
		
			
			rules: {
				hetongbianhao: [
				],
				hetongmingcheng: [
					{ required: true, message: '合同名称不能为空', trigger: 'blur' },
				],
				jiafang: [
					{ required: true, message: '甲方不能为空', trigger: 'blur' },
				],
				yifang: [
					{ required: true, message: '乙方不能为空', trigger: 'blur' },
				],
				zonge: [
					{ validator: validateNumber, trigger: 'blur' },
				],
				hetongwenjian: [
					{ required: true, message: '合同文件不能为空', trigger: 'blur' },
				],
				qiandingriqi: [
					{ required: true, message: '签订日期不能为空', trigger: 'blur' },
				],
				hetongneirong: [
					{ required: true, message: '合同内容不能为空', trigger: 'blur' },
				],
				youxiaoqi: [
				],
				crossuserid: [
				],
				crossrefid: [
				],
			}
		};
	},
	props: ["parent"],
	computed: {



	},
	created() {
	},
	methods: {
		
		// 下载
		download(file){
			window.open(`${file}`)
		},
		// 初始化
		init(id,type) {
			if (id) {
				this.id = id;
				this.type = type;
			}
			if(this.type=='info'||this.type=='else'){
				this.info(id);
			}else if(this.type=='logistics'){
				this.logistics=false;
				this.info(id);
			}else if(this.type=='cross'){
				var obj = this.$storage.getObj('crossObj');
				for (var o in obj){
						if(o=='hetongbianhao'){
							this.ruleForm.hetongbianhao = obj[o];
							this.ro.hetongbianhao = true;
							continue;
						}
						if(o=='hetongmingcheng'){
							this.ruleForm.hetongmingcheng = obj[o];
							this.ro.hetongmingcheng = true;
							continue;
						}
						if(o=='jiafang'){
							this.ruleForm.jiafang = obj[o];
							this.ro.jiafang = true;
							continue;
						}
						if(o=='yifang'){
							this.ruleForm.yifang = obj[o];
							this.ro.yifang = true;
							continue;
						}
						if(o=='zonge'){
							this.ruleForm.zonge = obj[o];
							this.ro.zonge = true;
							continue;
						}
						if(o=='hetongwenjian'){
							this.ruleForm.hetongwenjian = obj[o];
							this.ro.hetongwenjian = true;
							continue;
						}
						if(o=='qiandingriqi'){
							this.ruleForm.qiandingriqi = obj[o];
							this.ro.qiandingriqi = true;
							continue;
						}
						if(o=='hetongneirong'){
							this.ruleForm.hetongneirong = obj[o];
							this.ro.hetongneirong = true;
							continue;
						}
						if(o=='youxiaoqi'){
							this.ruleForm.youxiaoqi = obj[o];
							this.ro.youxiaoqi = true;
							continue;
						}
						if(o=='crossuserid'){
							this.ruleForm.crossuserid = obj[o];
							this.ro.crossuserid = true;
							continue;
						}
						if(o=='crossrefid'){
							this.ruleForm.crossrefid = obj[o];
							this.ro.crossrefid = true;
							continue;
						}
				}
				











			}
			
			
			// 获取用户信息
			this.$http({
				url: `${this.$storage.get('sessionTable')}/session`,
				method: "get"
			}).then(({ data }) => {
				if (data && data.code === 0) {
					
					var json = data.data;
				} else {
					this.$message.error(data.msg);
				}
			});
			
			
		},
    // 多级联动参数

    info(id) {
      this.$http({
        url: `hetongxinxi/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        this.ruleForm = data.data;
        //解决前台上传图片后台不显示的问题
        let reg=new RegExp('../../../upload','g')//g代表全部
        } else {
          this.$message.error(data.msg);
        }
      });
    },


    // 提交
    onSubmit() {












	if(this.ruleForm.hetongwenjian!=null) {
		this.ruleForm.hetongwenjian = this.ruleForm.hetongwenjian.replace(new RegExp(this.$base.url,"g"),"");
	}











var objcross = this.$storage.getObj('crossObj');

      //更新跨表属性
       var crossuserid;
       var crossrefid;
       var crossoptnum;
       if(this.type=='cross'){
                var statusColumnName = this.$storage.get('statusColumnName');
                var statusColumnValue = this.$storage.get('statusColumnValue');
                if(statusColumnName!='') {
                        var obj = this.$storage.getObj('crossObj');
                       if(statusColumnName && !statusColumnName.startsWith("[")) {
                               for (var o in obj){
                                 if(o==statusColumnName){
                                   obj[o] = statusColumnValue;
                                 }
                               }
                               var table = this.$storage.get('crossTable');
                             this.$http({
                                 url: `${table}/update`,
                                 method: "post",
                                 data: obj
                               }).then(({ data }) => {});
                       } else {
                               crossuserid=this.$storage.get('userid');
                               crossrefid=obj['id'];
                               crossoptnum=this.$storage.get('statusColumnName');
                               crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                        }
                }
        }
       this.$refs["ruleForm"].validate(valid => {
         if (valid) {
		 if(crossrefid && crossuserid) {
			 this.ruleForm.crossuserid = crossuserid;
			 this.ruleForm.crossrefid = crossrefid;
			let params = { 
				page: 1, 
				limit: 10, 
				crossuserid:this.ruleForm.crossuserid,
				crossrefid:this.ruleForm.crossrefid,
			} 
			this.$http({ 
				url: "hetongxinxi/page", 
				method: "get", 
				params: params 
			}).then(({ 
				data 
			}) => { 
				if (data && data.code === 0) { 
				       if(data.data.total>=crossoptnum) {
					     this.$message.error(this.$storage.get('tips'));
					       return false;
				       } else {
					 this.$http({
					   url: `hetongxinxi/${!this.ruleForm.id ? "save" : "update"}`,
					   method: "post",
					   data: this.ruleForm
					 }).then(({ data }) => {
					   if (data && data.code === 0) {
					     this.$message({
					       message: "操作成功",
					       type: "success",
					       duration: 1500,
					       onClose: () => {
						 this.parent.showFlag = true;
						 this.parent.addOrUpdateFlag = false;
						 this.parent.hetongxinxiCrossAddOrUpdateFlag = false;
						 this.parent.search();
						 this.parent.contentStyleChange();
					       }
					     });
					   } else {
					     this.$message.error(data.msg);
					   }
					 });

				       }
				} else { 
				} 
			});
		 } else {
			 this.$http({
			   url: `hetongxinxi/${!this.ruleForm.id ? "save" : "update"}`,
			   method: "post",
			   data: this.ruleForm
			 }).then(({ data }) => {
			   if (data && data.code === 0) {
			     this.$message({
			       message: "操作成功",
			       type: "success",
			       duration: 1500,
			       onClose: () => {
				 this.parent.showFlag = true;
				 this.parent.addOrUpdateFlag = false;
				 this.parent.hetongxinxiCrossAddOrUpdateFlag = false;
				 this.parent.search();
				 this.parent.contentStyleChange();
			       }
			     });
			   } else {
			     this.$message.error(data.msg);
			   }
			 });
		 }
         }
       });
    },
    // 获取uuid
    getUUID () {
      return new Date().getTime();
    },
    // 返回
    back() {
      this.parent.showFlag = true;
      this.parent.addOrUpdateFlag = false;
      this.parent.hetongxinxiCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
    hetongwenjianUploadChange(fileUrls) {
	    this.ruleForm.hetongwenjian = fileUrls;
    },
  }
};
</script>
<style lang="scss" scoped>
	.amap-wrapper {
		width: 100%;
		height: 500px;
	}
	
	.search-box {
		position: absolute;
	}
	
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  	  padding: 0 10px 0 0;
	  	  color: #000;
	  	  font-weight: 500;
	  	  width: 100px;
	  	  font-size: 14px;
	  	  line-height: 40px;
	  	  text-align: right;
	  	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 100px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  	  border: 2px solid #797979;
	  	  border-radius: 0;
	  	  padding: 0 12px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: #000;
	  	  width: 400px;
	  	  font-size: 14px;
	  	  height: 40px;
	  	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  	  border: 2px solid #797979;
	  	  border-radius: 0;
	  	  padding: 0 10px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: #000;
	  	  width: 200px;
	  	  font-size: 14px;
	  	  height: 40px;
	  	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  	  border: 2px solid #797979;
	  	  border-radius: 0;
	  	  padding: 0 10px 0 30px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: #000;
	  	  width: 200px;
	  	  font-size: 14px;
	  	  height: 40px;
	  	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  	  border: 2px dashed #797979;
	  	  cursor: pointer;
	  	  border-radius: 6px;
	  	  color: #797979;
	  	  width: 90px;
	  	  font-size: 32px;
	  	  line-height: 90px;
	  	  text-align: center;
	  	  height: 90px;
	  	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  	  border: 2px dashed #797979;
	  	  cursor: pointer;
	  	  border-radius: 6px;
	  	  color: #797979;
	  	  width: 90px;
	  	  font-size: 32px;
	  	  line-height: 90px;
	  	  text-align: center;
	  	  height: 90px;
	  	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  	  border: 2px dashed #797979;
	  	  cursor: pointer;
	  	  border-radius: 6px;
	  	  color: #797979;
	  	  width: 90px;
	  	  font-size: 32px;
	  	  line-height: 90px;
	  	  text-align: center;
	  	  height: 90px;
	  	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  	  border: 2px solid #797979;
	  	  border-radius: 0;
	  	  padding: 12px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: #000;
	  	  width: 400px;
	  	  font-size: 14px;
	  	  height: 120px;
	  	}
</style>
