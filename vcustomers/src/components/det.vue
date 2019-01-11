<template>
  <div class="det container">
   <h1 class="page-header">{{customer.name}}</h1>
  
  </div>
</template>

<script>
export default {
  name: 'det',
  data () {
    return {
      customer:""
    }
  },
  methods:{
    fetchCustomers(id){
  		
  		this.$http.get("http://localhost:3000/users/"+id)
  		.then(function(response){

  			console.log(response);
  			this.customer = response.body
  		})
  	},
  },
  created(){
  	this.fetchCustomers(this.$route.params.id);
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
