<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem
  },
  inject: ['users','teams'],
  created(){
    this.loadTeamMembers(this.$route);
  },
  data() {
    return {
      teamName: '',
      members: []
    };
  },
  methods:{
    loadTeamMembers(route){
      const tid = route.params.teamId;
      if(tid){
        const selectedTeam = this.teams.find(team => team.id === tid);
        const members = selectedTeam.members;
        const selectedMembers = [];
        for(const member in members){
          const selectedUser = this.users.find(user => user.id === members[member]);
          selectedMembers.push(selectedUser);
        }

        this.members = selectedMembers;
        this.teamName = selectedTeam.teamName;
      }
    }
  },
  watch:{
    $route(newRoute){
      this.loadTeamMembers(newRoute);
    }
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>