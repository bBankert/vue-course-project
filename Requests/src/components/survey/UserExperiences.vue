<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <p v-if="!loaded">Loading...</p>
      <p v-else-if="error">{{error}}</p>
      <p v-else-if="!results || results.length == 0">No Results Found</p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  data(){
    return{
      results:[],
      loaded: false,
      error: '',
    }
  },
  methods:{
    loadExperiences(){
      this.loaded = false;
      this.error = null;
      fetch('https://first-vue-project-d431e-default-rtdb.firebaseio.com/surveys.json')
      .then((res) => {
        if(res.ok){
          return res.json();
        }
      }).then((json) => {
        this.loaded = true;
        const results = [];
        for(let result in json){
          results.push({id: result,name: json[result].name,rating:json[result].rating});
        }
        this.results = results;
      }).catch(() => {
        this.error = 'Failed to fetch surveys';
        this.loaded = true;
      });
    },
  },
  mounted(){
    this.loadExperiences();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>