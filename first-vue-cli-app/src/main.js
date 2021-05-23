import { createApp } from 'vue';
import App from './App.vue';
import Friend from './components/Friend.vue';
import NewFriend from './components/NewFriend.vue';

const app = createApp(App);

app.component('friend',Friend);
app.component('new-friend',NewFriend);

app.mount('#app');
