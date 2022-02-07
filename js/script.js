console.log('js ok');
console.log('Vue ok', Vue);
console.log('axios ok', axios);

Vue.config.devtools = true;

const app = new Vue({
    el: '#root', 
    data:{
        emails:[],
        mailNum: 10,
    },
    methods: {
        getRandomMail(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then( res => {
            const email = res.data.response;
            this.emails.push(email);
            })
        }
    },  
    mounted(){
        for(let i = 0; i < this.mailNum; i++){
            this.getRandomMail();
        }
    }   
})
