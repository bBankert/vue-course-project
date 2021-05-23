import { createApp } from 'vue';
import {createRouter,createWebHistory} from 'vue-router';

import App from './App.vue';

import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import UsersFooter from './components/users/UsersFooter.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import TeamMembers from './components/teams/TeamMembers.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/teams',
        components: {default: TeamsList,footer: TeamsFooter},
        alias: '/',
        children: [
            {name: 'team-members', path: ':teamId',component: TeamMembers}
        ]},
        {path: '/users',
        components: {default: UsersList,footer: UsersFooter}},
        {path: '/:notFound(.*)', redirect: '/'}
        
    ]
});

const app = createApp(App);

//initialize router in app
app.use(router);

app.mount('#app');
