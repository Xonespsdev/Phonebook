<!-- <template>
	<div class="field">
    <label class="label">From</label>
  <div class="field-body">
    <div class="field">
      <p class="control is-expanded ">
        <input class="input" type="text" placeholder="Name">
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control is-expanded has-icons-left has-icons-right">
        <input class="input is-success" type="email" placeholder="Email" value="alex@smith.com">
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
      </p>
    </div>
  </div>
</div>
</div>
</template> -->

<template>
	<div class="modal" :class='openmodal'>
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Contact Form</p>
      <button class="delete" aria-label="close" @click='close'></button>
    </header>
    <section class="modal-card-body">
   <div class="field">
  <label class="label">Name</label>
  <div class="control">
    <input class="input" type="text" placeholder="Alex Smith" v-model="list.name">
  </div>
</div>
<div class="field">
  <label class="label">Phone</label>
  <div class="control">
    <input class="input" type="number" placeholder="+856 2093843834" v-model="list.phone">
  </div>
</div>
<div class="field">
  <label class="label">Email</label>
  <div class="control">
    <input class="input" type="email" placeholder="alexsmith@gmail.com" v-model="list.email">
  </div>
</div>
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success" @click='savephone'>Save</button>
      <button class="button is-info" @click='close'>Cancel</button>
    </footer>
  </div>
</div>
</template>
<script>
	export default{
		props:['openmodal'],
    data(){
      return{
        list:{
          name:'',
          phone:'',
          email:'',
        }
      }
    },
		methods:{
			close(){
           this.$emit('closeRequest')
			},
      savephone(){
       
       axios.post('/addphonebook',this.$data.list).then((response)=>this.close())
  .catch((error)=> console.log(error))
  }
      }
		}
	
</script>