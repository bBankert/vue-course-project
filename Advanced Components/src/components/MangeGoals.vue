<template>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal"/>
    <button @click="setGoal">Set Goal</button>
    <teleport to="body">
        <error-alert v-if="invalid">
            <h2>Input is invalid!</h2>
            <p>Please enter something</p>
            <button @click="dismissError">Ok</button>
        </error-alert>
    </teleport>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';
export default {
    components:{
        ErrorAlert
    },
    data(){
        return{
            invalid: false,
        }
    },
    methods:{
        setGoal(){
            const val = this.$refs.goal.value;
            if(!val){
                this.invalid = true;
            }
        },
        dismissError(){
            this.invalid = false;
        }
    }
}
</script>