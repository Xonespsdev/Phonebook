<template>
	<div>
   <nav class="panel ">
    <p class="panel-heading">
      Vuejs Phonebook
      <button class="button is-link is-outlined" @click='openAdd'>
        Add New
      </button>
    </p>

    <div class="panel-block">
      <p class="control has-icons-left">
        <input class="input is-medium is-rounded" type="text" placeholder="search" v-model="searchphone">
        <span class="icon is-medium is-left">
          <i class="fas fa-search" aria-hidden="true"></i>
        </span>
      </p>
    </div>
    <a class="panel-block" v-for="item,key in temp">
      <span class="column is-1">
       {{item.name}}
     </span>
     <span class="column is-2">
      {{item.phone}}
    </span>
    <span class="column is-6">
      {{item.email}}
    </span>
    <a class="button is-primary is-outlined" @click='deletephone(key,item.id)'>Delete</a>
    <!--       <span class="panel-icon column is-1"> -->
      <!--     <i class="has-text-info fas fa-edit" aria-hidden="true"></i> -->
      <a class="button is-info is-outlined" @click='openUpdate(key)'>Edit</a>
      <!--  </span> -->

      <!--     <i class="has-text-primary fas fa-eye" aria-hidden="true"></i> -->
      <a class="button is-primary is-outlined" @click='openView(key)' >View</a>
    </a>
  </nav>
  <Addphone :openmodal="Addactive" @closeRequest='close'></Addphone>	
  <Viewphone :openmodal="Viewactive" @closeRequest='close'></Viewphone>  
  <Updatephone :openmodal="Updateactive" @closeRequest='close'></Updatephone>  
</div>

</template>
<script>
let Addphone=require('./addphone.vue');
let Viewphone=require('./showphonebook.vue');
let Updatephone=require('./editphonebook.vue');
export default {
  components:{Addphone,Viewphone,Updatephone},
  data(){
   return{
    Addactive : '',
    Viewactive:'',
    Updateactive:'',
    lists:{},
    errors:{},
    searchphone:'',
    temp:''
  }

},
watch:{
searchphone(){
  if (this.searchphone.length > 0){
   this.temp = this.lists.filter((item)=>{
   return item.name.toLowerCase().indexOf(this.searchphone.toLowerCase())>-1

   });
  }else {
    this.temp=this.lists  
  }
}
},

mounted(){
 axios.post('/getData')
 .then((response)=>{
  this.lists=this.temp=(response.data);
})
 .catch((error)=>{            
  this.errors=(error.response.data.errors);
})
},
methods:{
  openAdd(){
   this.Addactive='is-active';
 },
 openView(key){
  this.$children[1].list=this.lists[key]
  this.Viewactive='is-active';
},
openUpdate(key){
  this.$children[2].list=this.lists[key]
  this.Updateactive='is-active';
},



close(){
 this.Addactive= this.Viewactive= this.Updateactive=""
},
deletephone(key,id){
  if (confirm("Are you sure ?")){
     axios.delete('/addphonebook/${id}')
 .then((response)=>{
  this.lists.splice(key,1);
  // this.lists=(response.data);
})
 .catch((error)=>{            
  this.errors=(error.response.data.errors);
})

}
// console.log('{$key} {$id}');
  }
}
}
</script>