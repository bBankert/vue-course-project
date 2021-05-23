const app = Vue.createApp({
    data(){
        return{
            friends: [
                {id:1,name:"Manuel Lorenz",phone:"01234 5678 991",email:"manuel@localhost.com"},
                {id:2,name:"Julie Jones",phone:"09876 543 221",email:"julie@localhost.com"}
            ],
        }
    },
});

app.component('friend-contact',{
    template: `
    <li>
        <h2>{{friend.name}}</h2>
        <button>Show Details</button>
        <ul v-if="friend.visible">
            <li><strong>Phone:</strong> {{friend.phone}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
        </ul>
    </li>
  `,
    data(){
        return {
            visible: false,
            friend: {id:1,name:"Manuel Lorenz",phone:"01234 5678 991",email:"manuel@localhost.com"}
        
        }
    },
    methods:{
        toggleDetails(){
            this.visible = !this.visible;
        }
    }
});


app.mount('#app')