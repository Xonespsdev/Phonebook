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
          <input class="input" :class="{'is-danger': errors.name}" type="text" placeholder="Alex Smith" v-model="list.name">
        </div>
        <small v-if="errors.name" class="has-text-danger">{{errors.name[0]}}</small>
      </div>
      <div class="field">
        <label class="label">Phone</label>
        <div class="control">
          <input class="input" :class="{'is-danger':errors.phone}" type="number" placeholder="+856 2093843834" v-model="list.phone">
        </div>
        <small v-if="errors.phone" class="has-text-danger">{{errors.phone[0]}}</small>
      </div>
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input class="input" :class="{'is-danger':errors.email}" type="email" placeholder="alexsmith@gmail.com" v-model="list.email">
        </div>
        <small v-if="errors.email" class="has-text-danger">{{errors.email[0]}}</small>
      </div>
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success" @click="savephone">Save</button>
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
      },
      errors:{}
    }
  },
  methods:{
   close(){
     this.$emit('closeRequest')
   },
   savephone(){
    axios.post('/addphonebook', this.$data.list).then((response)=>{
      
      this.close();
      this.$parent.lists.push(response.data);
      this.$parent.lists.sort(function(a,b){
        if(a.name > b.name){
          return 1;
        }else if(a.name < b.name){
          return -1;
        }
      })
      this.list=""
    })

    .catch((error)=>{            
      this.errors=(error.response.data.errors);
    })
  }
}
}

</script>