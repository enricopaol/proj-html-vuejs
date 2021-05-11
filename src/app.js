var app = new Vue(
    {
        el: '#app',
        data: {
            pages: [
                'Home',
                'Meet The Brand',
                'Live Dates',
                'Latest News',
                'Albums',
                'Fans'
            ],
            navOpen: false,
            dateOpen: -1
        },
        methods: {
            toggleNav() {
                this.navOpen = !this.navOpen;
            },
            toggleDate(index) {
                if (this.dateOpen != index) {
                    this.dateOpen = index;
                } else {
                    this.dateOpen = -1;
                }                
                
            } 
        }  
    }
)