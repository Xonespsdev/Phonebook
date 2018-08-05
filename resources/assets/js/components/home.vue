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
      <input class="input is-small" type="text" placeholder="search">
      <span class="icon is-small is-left">
        <i class="fas fa-search" aria-hidden="true"></i>
      </span>
    </p>
  </div>
  <a class="panel-block">
    <span class="column is-9">
    	marksheet
    </span>
    <span class="panel-icon column is-1">
    <i class="has-text-danger  fas fa-trash" aria-hidden="true"></i>
    </span>
      <span class="panel-icon column is-1">
    <i class="has-text-info fas fa-edit" aria-hidden="true"></i>
    </span>
      <span class="panel-icon column is-1">
    <i class="has-text-primary fas fa-eye" aria-hidden="true"></i>
    </span>
  </a>
</nav>
<Addphone :openmodal="Addactive" @closeRequest='close'></Addphone>	
	</div>

</template>
<script>
let Addphone=require('./addphone.vue');
	export default {
    components:{Addphone},
    data(){
    	return{
    		Addactive : ''
    }
	},
	methods:{
		openAdd(){
			this.Addactive='is-active';
		},
		close(){
			this.Addactive=""
		}
	}
}
</script>