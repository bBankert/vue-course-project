<template>
    <li>
        <h2>{{ name }} {{ favorite ? '(Favorite)' : '' }}</h2>
        <button @click="toggleFavorite">Toggle Favorite</button>
        <button @click="toggleDetails">{{ visible ? "Hide" : "Show"}} Details</button>
        <ul v-if="visible">
            <li><strong>Phone:</strong> {{phone}}</li>
            <li><strong>Email:</strong> {{email}}</li>
        </ul>
        <button @click="$emit('delete-friend',this.id)">Delete</button>
    </li>
</template>

<script>
export default {
    /* props: [
        'name',
        'phone',
        'email',
        'favorite'
    ] */
    props:{
        id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
            },
        phone: {
            type: String,
            required: true
            },
        email: {
            type: String,
            required: true
            },
        favorite: {
            type: Boolean,
            required: false,
            default: false,
            /* validator: function(value){
                return value === '0' || value === '1';
            } */
        }
    },
    emits:{
        'toggle-favorite': function(id){
            if(id){
                return true;
            }
            else{
                console.warn('missing ID');
                return false;
            }
        },
        'delete-friend': function(id){
            if(id){
                return true;
            }
            else{
                console.warn('missing ID');
                return false;
            }
        }
    },
    data(){
        return{
            visible: false,
        };
    },
    methods:{
        toggleDetails(){
            this.visible = !this.visible;
        },
        toggleFavorite(){
            this.$emit('toggle-favorite',this.id);
        },
    }
};
</script>
