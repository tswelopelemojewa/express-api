document.addEventListener('alpine:init', () => {
    Alpine.data('greetWidget', function () {
        return {
            username: 'Buddy',
            greeting: 'hello',
            language: 'english',

            init() {
                // this.greet();
                
                this.username;
                this.greeting;
                this.language;
            },

            greet() {
                // call the api and get a greeting back
                axios
                    .get(`/api/greet?username=${this.username}&language=${this.language}`)
                    .then(result => {

                        if (result.data.error) {
                            this.greeting = result.data.error
                        } else {
                            this.greeting = result.data.message
                        }

                    })
            }

        }
    })

})