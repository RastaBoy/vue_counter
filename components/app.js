

const App = {
    data() {
        return {
            title: 'Счетчик',
            counter : 0
        }
    }
}



const app = Vue.createApp(App)
app.mount('#app')