<template>
  <div class="add container">
   <h1 class="page-header">添加用户</h1>
   <form v-on:submit="addCustomer">
      <div class="well">
        <h4>用户信息</h4>
        <div class="form-group">
          <label>姓名</label>
          <input type="text" class="form-control" placeholder="name" v-model="customer.name">
        </div>
        <div class="form-group">
          <label>电话</label>
          <input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
        </div>
        <div class="form-group">
          <label>邮箱</label>
          <input type="text" class="form-control" placeholder="email" v-model="customer.email">
        </div>
        <div class="form-group">
          <label>学历</label>
          <input type="text" class="form-control" placeholder="edu" v-model="customer.edu">
        </div>
        <div class="form-group">
          <label>毕业学校</label>
          <input type="text" class="form-control" placeholder="school" v-model="customer.school">
        </div>
        <div class="form-group">
          <label>职业</label>
          <input type="text" class="form-control" placeholder="pro" v-model="customer.pro">
        </div>
        <button type="submit" class="btn-primary">添加</button>
      </div>
   </form>
  </div>
</template>

<script>
export default {
  name: 'add',
  data () {
    return {
      customer:{}
    }
  },
  methods:{
    addCustomer(e){
      if(!this.customer.name||!this.customer.phone||!this.customer.email){
        alert("请填入正确的数据");
      }else{
        let newCustomer = {
          name:this.customer.name,
          phone:this.customer.phone,
          email:this.customer.email,
          edu:this.customer.edu,
          school:this.customer.school,
          pro:this.customer.pro
        }
        this.$http.post("http://www.serendipity.wiki/vuegl/db.json",newCustomer)
        .then(function(response){
          // console.log(response);
          this.$router.push({path:"/"});
        })
        e.preventDefault();
      }
      e.preventDefault();

    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
