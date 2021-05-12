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
                
            },
             
        }

    }      

)



window.addEventListener('scroll', parallax);

function parallax() {
    const element = document.getElementsByClassName('parallax')[0];    
    const scrollY = window.pageYOffset;
    const elementOffset = element.offsetTop; 
    const viewPortHeight = window.innerHeight;  

    const positionY = (scrollY * - 0.7) + ( elementOffset * 0.7 ) - (viewPortHeight * 0.2)  + 'px';
    element.style.backgroundPosition = 'center ' + positionY ;        
}




