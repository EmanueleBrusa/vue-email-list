const {createApp} = Vue

createApp({
    data() {
        return {
            email: '',
            arrayEmail: []
        }
    },
    mounted() {
        this.generateTenEmails();
    },
    methods: {
        generateTenEmails(){
            for(let i=1; i<=10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
                    this.arrayEmail.push(result.data.response) 
                });
            }
        }
    }
}).mount('#app');