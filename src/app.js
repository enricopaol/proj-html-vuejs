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
            navOpen: false
        },
        methods: {
            toggleNav() {
                this.navOpen = !this.navOpen;
            }

        }
    }
)