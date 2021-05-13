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
            dateOpen: -1,
            liveDates: [
                {
                    date: '17/08/2020 Gem Festival 2020 Anakalia, Georgia ',
                    iFrameLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47143.839623291155!2d41.559132921311104!3d42.39601032108319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405dd3503d5ccb83%3A0xe6594e70d69782bc!2sAnaklia%2C%20Georgia!5e0!3m2!1sit!2sit!4v1620815528095!5m2!1sit!2sit'
                },
                {
                    date: '24/09/2020 Groovefest Dominical Republic',
                    iFrameLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.1106733332094!2d-68.40322868510518!3d18.659028987328522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ea8ecc141b4de87%3A0xc1a9012d0c5050ab!2sBarcel%C3%B3%20B%C3%A1varo%20Beach%20-%20Adults%20Only!5e0!3m2!1sit!2sit!4v1620815938146!5m2!1sit!2sit'
                },
                {
                    date: '31/10/2020 Oasis Festival 2020 Marrakech, Morocco',
                    iFrameLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217406.37638548054!2d-8.1479381904096!3d31.63454497560447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8d96179e51%3A0x5950b6534f87adb8!2sMarrakech%2C%20Marocco!5e0!3m2!1sit!2sit!4v1620816376124!5m2!1sit!2sit'
                },
                {
                    date: '07/11/2020 Moga Festival - Essaouria, Morocco',
                    iFrameLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27211.8385861556!2d-9.78005180001179!3d31.510978945276168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdad9a4e9f588ccf%3A0x57421a176d5d7d30!2sProvincia%20di%20Essaouira%2C%20Marocco!5e0!3m2!1sit!2sit!4v1620816428560!5m2!1sit!2sit'
                },
                {
                    date: '10/12/2020 Envision Festival - Uvita, Costa Rica',
                    iFrameLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31511.211376917334!2d-83.7555601243083!3d9.163364997555368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa15797d4474891%3A0x39ea10029c9e9f27!2sProvincia%20di%20Puntarenas%2C%20Uvita%2C%20Costa%20Rica!5e0!3m2!1sit!2sit!4v1620816477187!5m2!1sit!2sit'
                }
            ]
        },
        methods: {
            toggleNav() {
                this.navOpen = !this.navOpen;
            },
            toggleDate(index) {
                const elementHeight = document.getElementsByClassName('info-container')[index].scrollHeight;   
                
                // First I close all the dates
                let dates = document.getElementsByClassName('info-container');
                for (let i = 0; i < dates.length; i++) {
                    thisDate = dates[i];
                    thisDate.style.height = 0 + 'px';
                }
                
                // Then i toggle the class 'open' (that controls icon, margin and opacity), and open the right date
                if (this.dateOpen != index) {
                    this.dateOpen = index;                           
                    document.getElementsByClassName('info-container')[index].style.height = elementHeight + 'px';
                } else {
                    this.dateOpen = -1;
                    document.getElementsByClassName('info-container')[index].style.height = 0 + 'px';
                }                
                
            }            
             
        }

    }      

)



window.addEventListener('scroll', parallax);

function parallax() {
    const element = document.querySelector('.parallax');    
    const scrollY = window.pageYOffset;
    const elementOffset = element.offsetTop; 
    const viewPortHeight = window.innerHeight;  

    const positionY = (scrollY * - 0.7) + ( elementOffset * 0.7 ) - (viewPortHeight * 0.2)  + 'px';
    element.style.backgroundPosition = 'center ' + positionY ;        
}




