const model = {
    app:{
        currentPage: 'homePage',

    },

    viewState:
    {
        name: '',
        email: '',
        password: '',

    },
    
    data:{
    EmailAndPasswords:[
        {name: 'Admin', email:'admin@gmail.com', password:'password'},
        {name: 'Martin', email: 'martin@gmail.com', password:'tikaMasala4life'},
        {name: 'Rebecka', email:'rebecka@mail.com', password:'skyrim123'},

    ],
    }








};

window.onload = () => updateView();