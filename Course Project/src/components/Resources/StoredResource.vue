<template>
    <ul>
        <resource v-for="resource in resources" 
        :key="resource.id"
        :id="resource.id"
        :title="resource.title"
        :description="resource.description"
        :link="resource.link">
        </resource>
    </ul>
</template>

<script>
import Resource from './Resource.vue';
export default {
    inject: ['resources'],
    components: {
        Resource
    },

}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>