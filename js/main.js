const darkMode = document.querySelector('#toggle-input');
const body = document.querySelector('body');

load();
darkMode.addEventListener('click', e =>{
    document.body.classList.toggle('dark');
    darkMode.classList.toggle('active');
    store(body.classList.contains('dark'));
});

/*local storage*/
function load(){
    const darkM = localStorage.getItem('dark');
    if(!darkM){
        store('false');
    }else if(darkM == 'true'){
        body.classList.add('dark');
        darkMode.classList.toggle('active');
    }
}
function store(value){
    localStorage.setItem('dark', value)
}