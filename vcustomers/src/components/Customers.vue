<template>
  <div class="customers container">
   <h1 class="page-header">用户管理系统</h1>
   <table class="table table-striped">
   	<thead>
   		<tr>
   			<th>姓名</th>
   			<th>电话</th>
   			<th>邮箱</th>
   			<th></th>
   		</tr>
   	</thead>
   	<tbody>
   		<tr v-for="customer in customers">
   			<td>{{customer.name}}</td>
   			<td>{{customer.phone}}</td>
   			<td>{{customer.email}}</td>
   			<td>{{customer.id}}</td>
   			<td><router-link class="btn btn-default" v-bind:to="'/customer/'+customer.id">详情</router-link></td>
   		</tr>
   	</tbody>
   </table>
  </div>
</template>

<script>

import det from './det'

export default {
  name: 'customers',
    components: {
 
    det
  },
  data () {
    return {
     	customers:[]
    }
  },
  methods:{
  	fetchCustomers(){
  		
  		this.$http.get("http://www.serendipity.wiki/vuegl/db.json")
  		.then(function(response){

  			console.log(response);
  			this.customers = response.body.users;

  		})
  	},
  },
  created(){
  	this.fetchCustomers();
  },
  // uptade(){
  // 	this.fetchCustomers();
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
