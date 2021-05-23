const app = Vue.createApp({
    data(){
        return{
            aSelected: false,
            bSelected: false,
            cSelected: false
        };
    },
    computed:{
        aClasses(){
            return { active: this.aSelected };
        }
    },
    methods:{
        boxSelected(box){
            switch(box){
                case 'A':
                    this.aSelected = !this.aSelected;
                    break;
                case 'B':
                    this.bSelected = !this.bSelected;
                    break;
                case 'C':
                    this.cSelected = !this.cSelected;
                    break;
            }
        }
    }
});

app.mount('#styling');