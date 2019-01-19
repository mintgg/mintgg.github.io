<template>
  <div class="det container">
   <h1 class="page-header" v-if="customer[id-1]">{{customer[id-1].name}}</h1>
  
  </div>
</template>

<script>
export default {
  name: 'det',
  data () {
    return {
      customer:[],
     id:0
    }
  },
  methods:{
    fetchCustomers(id){
  		
  		this.$http.get("http://www.serendipity.wiki/vuegl/db.json")
  		.then(function(response){

  			console.log(response);
  			this.customer = response.body.users;
  			console.log(this.customer);
  		});
  		this.id=id;
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
