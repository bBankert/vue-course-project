<template>
    <base-dialog v-if="invalid" title="Invalid Input" @close-dialog="dismiss">
        <template #default>
            <p>Unfortunately, at least one input is invalid.</p>
            <p>Please fill in each input field</p>
        </template>
        <template #actions>
            <base-button @click="dismiss">Dismiss</base-button>
        </template>
    </base-dialog>
    <keep-alive>
        <base-card>
        <form @submit.prevent="createResource">
            <div class="form-control">
                <label>Title</label>
                <input id="title" name="title" type="text" ref="title" />
            </div>
            <div class="form-control">
                <label>Description</label>
                <textarea id="description" name="description" rows="3" type="text" ref="description" />
            </div>
            <div class="form-control">
                <label>Link</label>
                <input id="link" name="link" type="url" ref="link" />
            </div>
            <div>
                <base-button type="submit">Submit</base-button>
            </div>
        </form>
        </base-card>
    </keep-alive>
</template>

<script>
export default {
    inject: ['createNewResource'],
    data(){
        return{
            invalid: false
        };
    },
    methods:{
        createResource(){
            const title = this.$refs.title.value;
            const description = this.$refs.description.value;
            const link = this.$refs.link.value;
            //validity check
            if(title.trim() === '' ||
             description.trim() === '' ||
              link.trim() === ''){
                this.invalid = true;
                return;
            }
            this.createNewResource(title,description,link);
        },
        dismiss(){
            this.invalid = false;
        }
    }
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>