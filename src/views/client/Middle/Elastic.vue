<template>
  <div class="Elastic">
    <el-button type="primary" @click="dialogFormVisible = true">添加客户</el-button>

    <el-dialog title :visible.sync="dialogFormVisible" align="middle" type="flex">
      <el-divider>添加客户</el-divider>

      <span>
          <span style="color:red">*</span>客户身份 :
      </span>

      <el-radio v-model="radio" label="1">非会员</el-radio>

      <el-radio v-model="radio" label="2">会员</el-radio>
      <br />

      <span>
          <span style="color:red;margin-left:30px;margin-top:20px">*</span>手机号 :
      </span>

      <el-input v-model="Telephone" placeholder style="width:200px;margin-top:20px;"></el-input>
      <br />

      <span style="margin-left:55px;">姓名 :</span>

      <el-input v-model="names" placeholder style="width:200px;      margin-top:20px;">        
      </el-input>
      <br />

      <span style="margin-left:70px;">标签 :</span>

      <el-select v-model="value" clearable placeholder     style="margin-top:20px;">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <br />

      <span style="margin-left:-40px;">性别 :</span>

      <el-radio-group v-model="radio1" style="margin-top:20px;">
        <el-radio :label="3">男</el-radio>
        <el-radio :label="6">女</el-radio>
      </el-radio-group>
      <br />

      <div class="block" style="margin-left:70px;">
        <span class="demonstration">生日 :</span>
        <el-date-picker v-model="date" type="date" placeholder="选择日期" style="margin-top:20px;"></el-date-picker>
      </div>

      <span style="margin-left:68px;">地域 :</span>

      <el-select v-model="city" clearable placeholder style="margin-top:20px;">
          <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.label">
          </el-option>
      </el-select>
      <br />

      <span style="margin-left:52px;">备注 :</span>

      <el-input
          type="textarea"
          :rows="2"
          placeholder="请不要超过200字"
          v-model="textarea"
          style="width:200px;margin-top:20px;">
      </el-input>

      <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="add">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
  export default {
    data() {
      return {
        radio: "1",
        radio1: "2",
        input: "",
        input1: "",
        value: "",
        textarea: "",
        dialogTableVisible: false,
        dialogFormVisible: false,
        Telephone: "",
        city: "",
        names: "",
        date: "",
        form: {
          names: "",
          region: "",
          date1: "",
          date2: "",
          delivery: false,
          type: [],
          resource: "",
          desc: ""
        },
        options: [
          {
            value: "选项1",
            label: "无标签用户"
          }
        ],
        options1: [
          {
            value: "选项1",
            label: "深圳"
          },
          {
            value: "选项2",
            label: "东莞"
          },
          {
            value: "选项3",
            label: "惠州"
          },
          {
            value: "选项4",
            label: "广州"
          }
        ],
    
        formLabelWidth: "120px"
      };
  },


  methods: {
    ...mapMutations(["updateAdd"]),
    add() {
      var tianjiaArr = {
        names: this.names,
        city: this.city,
        date: Date.now(this.date),
        // date:this.date,
        Telephone: this.Telephone
      };
      console.log(tianjiaArr);
      this.updateAdd(tianjiaArr);
    }
  },

  computed: {
    ...mapState(["clientArr2"])
  }

};
</script>

<style lang="scss" scoped>
.Elastic {
  overflow: hidden;
  box-sizing: border-box;
  float: left;
}
</style>
