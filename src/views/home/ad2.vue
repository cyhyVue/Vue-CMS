<template>
  <div style="padding-bottom :50px;">
    <div class="ad2">
      <el-col :span="8" :push="1" style="height:10%;font-size:20px;">更多推荐</el-col>
      <el-row type="flex" justify="space-around" align="middle">
        <el-col :span="2">
          <div class="img-box">
            <img src="http://static.yingyonghui.com/icon/128/6549825.png" alt srcset />
            <p>零售</p>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="img-box">
            <img src="http://static.yingyonghui.com/icon/128/6546479.png" alt srcset />
            <p>零售</p>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="img-box">
            <img src="http://static.yingyonghui.com/icon/128/6545970.png" alt srcset />
            <p>零售</p>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="img-box">
            <img src="http://static.yingyonghui.com/icon/128/6543704.png" alt srcset />
            <p>零售</p>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="img-box">
            <img src="http://static.yingyonghui.com/icon/128/6528143.png" alt srcset />
            <p>零售</p>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="img-box">
            <img src="http://static.yingyonghui.com/icon/128/6544311.png" alt srcset />
            <p>零售</p>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="img-box">
            <img src="http://static.yingyonghui.com/icon/128/6522877.png" alt srcset />
            <p>零售</p>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="img-box">
            <img src="http://static.yingyonghui.com/icon/128/6549051.png" alt srcset />
            <p>零售</p>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.ad2 {
  width: 100%;
  height: 150px;
  background: #ffffff;
  margin-top: 20px;

  .el-row {
    width: 100%;
    height: 80%;
    > .el-col {
      height: 60px;
      background: rgb(255, 255, 255);
    }
  }
}
.img-box {
  text-align: center;
  height: 50%;
  font-size: 14px;
  > img {
    width: 50%;
  }
}
</style>