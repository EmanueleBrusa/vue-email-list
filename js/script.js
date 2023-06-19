const {createApp} = Vue

createApp({
    data() {
        return {
            email: '', //questo poteva non andare? 
            arrayEmail: []
        }
    },
    mounted() {
        this.generateTenEmails();
        //modo alternativo 
        //for (let i=1; i<=10, i++){
            //axios.get('link?).then((response)) => 
            //{
                //this.arrayEmail.push(response.data.response)
            //}
        //}
    },
    methods: {
        generateTenEmails(){
            for(let i=0; i<10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
                    this.arrayEmail.push(result.data.response) 
                });
            }
        }
    }
}).mount('#app');