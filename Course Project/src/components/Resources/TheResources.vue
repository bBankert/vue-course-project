<template>
    <base-card>
        <base-button @click="setActiveTab('stored-resource')" :mode="storedButtonMode">Stored Resources</base-button>
        <base-button @click="setActiveTab('add-resource')" :mode="addButtonMode">Add Resource</base-button>
    </base-card>
    <component :is="activeTab"></component>
</template>

<script>
import StoredResource from './StoredResource.vue';
import AddResource from './AddResource.vue';
export default {
    components:{
        StoredResource,
        AddResource
    },
    computed:{
        storedButtonMode(){
            return this.activeTab === 'stored-resource' ? null : 'flat';
        },
        addButtonMode(){
            return this.activeTab === 'add-resource' ? null : 'flat';
        },
    },
    data(){
        return{
            activeTab: 'stored-resource',
            resources: [
                {id: 'official-guide',
                title:'Official Guide',
                description: 'Officia Vue.js docs',
                link: 'https://vuejs.org'},
                {id: 'google',
                title:'Google',
                description: 'Learn Google foo',
                link: 'https://google.com'},
            ]
        };
    },
    provide(){
        return{
            resources: this.resources,
            createNewResource: this.createResource,
            deleteResource: this.deleteResource
        };
    },
    methods:{
        setActiveTab(tab){
            this.activeTab = tab;
        },
        createResource(title,description,link){
            const resource = {
                id: new Date().toISOString(),
                title: title,
                description: description,
                link: link
            };
            this.resources.push(resource);
            this.activeTab = 'stored-resource';
        },
        deleteResource(id){
            const res = this.resources.findIndex(resource => resource.id === id);
            this.resources.splice(res,1);
        }
    }
}
</script>