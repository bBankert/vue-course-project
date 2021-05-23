const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
      lastName: '',
      /* fullName: '' */
    };
  },
  watch: {
    /* name(value){
      if(!value)
        this.fullName = '';
      else
        this.fullName = value + ' ' + this.lastName;
    },
    lastName(value){
      if(!value)
        this.fullName = '';
      else
        this.fullName = this.name + ' ' + value;
    } */
    counter(value){
      if(value > 50){
        const that = this;
        setTimeout(function(){
          that.counter = 0;
        },2000);
      }
    }
  },
  computed: {
    fullName(){
      if(!this.name || !this.lastName)
        return ''
      else
        return this.name + ' ' + this.lastName
    }
  },
  methods:{
    increment(amount){
      this.counter += amount;
    },
    decrement(amount){
      this.counter -= amount;
    },
    setName(event, lastName){
      this.name = event.target.value;
    },
    confirmName(){
      this.confirmedName = this.name;
    },
    submitForm(){
      alert('Submitted');
    },
    resetInput(){
      this.name = ''
    },
    outputFullName(){
      
    }
  }
});

app.mount('#events');
