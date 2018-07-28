import { createStore } from 'redux';


const $form = document.getElementById('form');
$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData($form);
    const title = data.get('title');
    console.log(title);
    store.dispatch({
        type: 'ADD_SONG',
        payload: {
            title
        }
    })
}

const inicialState = [
    {
        "title": "Joder",
    },
    {
        "title": "Joder 2",
    },
    {
        "title": "Joder 3",
    }
]

const reducer = function (state, action) {
    switch (action.type) {
        case 'ADD_SONG':
            return [...state, action.payload]
        default:
            return state;
    }
}

const store = createStore(
    reducer,
    inicialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)


function render() {
    const $container = document.getElementById('playlist');
    const playlist = store.getState();
    $container.innerHTML='';
    playlist.forEach(item => {
        const template = document.createElement('p');
        template.textContent = item.title;
        $container.appendChild(template);

    });
}
render();

function handleChangue() {
    render();
}

store.subscribe(handleChangue)
console.log(store.getState());