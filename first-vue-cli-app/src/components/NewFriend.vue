<template>
    <form @submit.prevent="submitHandler">
        <div>
            <label>Name</label>
            <input type="text" v-model="contactName"/>
        </div>
        <div>
            <label>Phone</label>
            <input type="tel" v-model="contactPhone"/>
        </div>
        <div>
            <label>Email</label>
            <input type="email" v-model="contactEmail"/>
        </div>
        <div>
            <button type="submit">Create Contact</button>
        </div>
    </form>
</template>

<script>
export default {
    emits: ['create-contact'],
    data(){
        return{
            contactName:'',
            contactPhone:'',
            contactEmail:''
        };
    },
    methods:{
        submitHandler(){
            this.$emit('create-contact',
            this.contactName,
            this.contactPhone,
            this.contactEmail)
        },
    }
}
</script>