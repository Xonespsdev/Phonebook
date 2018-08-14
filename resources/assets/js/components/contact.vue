<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-content">
                    <div class="card-header is-medium">Example Component</div>

                    <div class="card-body">
                        <div class="field">
                          <div class="control">
                            <label>Name</label>
                            <input class="input is-info is-medium" type="name" placeholder="Input name">
                        </div>
                    </div>
                    <div class="field">
                      <div class="control">
                        <label>Email</label>
                        
                        <input class="input is-info is-medium" type="email" placeholder="Input email">
                    </div>
                </div>
                <div class="control">
                    <label>Message</label>                    
                  <textarea class="textarea is-hovered" type="text" placeholder="Hovered textarea"></textarea>
               </div>
               <a class="button is-primary is-outlined">Submit</a>
            </div>
        </div>
    </div>
</div>
</div>
</template>

<script>
export default {
    mounted() {
        console.log('Component mounted.')
    }
}
</script>
