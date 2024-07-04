const App = { 

    $: {
        arrowLeft : document.querySelector('[data-id = "arrow-left"]'),
        arrowRight : document.querySelector('[data-id = "arrow-right"]'),
    },
    
    // init() {

    // }

    registerEventListeners() {
        let startimg = 0;
        const imageList = ["./images/tarsier2.jfif", "./images/ube.jpg", "./images/tarsier3.jfif"];
        
        App.$.arrowLeft.addEventListener('click', event => {
            if(startimg === 0) 


        });

    },
};
