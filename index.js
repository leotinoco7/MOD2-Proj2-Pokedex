const express = require('express');
const path = require('path');
const app = express();

const port = 3000;

let message = '';

const menu = [
    {
        title: 'INÍCIO',
        link: '/',
    },
    {
        title: 'ADICIONAR POKÉMON',
        link: '/add',
    },
    {
        title: 'POKEDEX',
        link: '/pokedex',
    },
    {
        title: 'ABOUT',
        link: '/about',
    },
];

const pokedex = [
    {
        id: '1',
        name: 'Charmander',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
        desc: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
        type: 'Fire',
        height: 'a',
        weight: 'a',
        cat: 'a',
        hab: 'a',
    },
    {
        id: '2',
        name: 'Charmander',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
        desc: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
        type: 'Fire',
        height: 'a',
        weight: 'a',
        cat: 'a',
        hab: 'a',
    },
    {
        id: '3',
        name: 'Charmander',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
        desc: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
        type: 'Fire',
        height: 'a',
        weight: 'a',
        cat: 'a',
        hab: 'a',
    },
    {
        id: '4',
        name: 'Charmander',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
        desc: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
        type: 'Fire',
        height: 'a',
        weight: 'a',
        cat: 'a',
        hab: 'a',
    },
    {
        id: '5',
        name: 'Charmander',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
        desc: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
        type: 'Fire',
        height: 'a',
        weight: 'a',
        cat: 'a',
        hab: 'a',
    },
];

const type = [
    'Água',
    'Dragão',
    'Elétrico',
    'Fada',
    'Fantasma',
    'Ferro',
    'Fogo',
    'Gelo',
    'Grama',
    'Inseto',
    'Lutador',
    'Normal',
    'Pedra',
    'Psíquico',
    'Sombrio',
    'Terra',
    'Veneno',
    'Voador',
];

app.set('view engine', 'ejs');
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', { pokedex, menu });
});

app.get('/add', (req, res) => {
    res.render('add', { pokedex, menu, type, message });

    setTimeout(() => {
        message = '';
    }, 5000);
});

app.get('/pokedex', (req, res) => {
    res.render('pokedex', { pokedex, menu});
});

app.get('/about', (req, res) => {
    res.render('about', { pokedex, menu });
});


app.post('/create', (req, res) => {
    const pokemon = req.body;
    pokemon.id = pokedex.length + 1;
    pokedex.push(pokemon);

    message = `${pokemon.name} foi cadastrado na Pokédex com sucesso.`;

    setTimeout(() => {
        message = '';
    }, 5000);

    res.redirect('/add');
});

app.get("/detalhes/:id", (req, res) => {
    const id = req.params.id;
    // res.render('detalhesp', { pokedex, menu, id });
  });

  app.get('/detalhesp', (req, res) => {
    res.render('detalhesp', { pokedex, menu, id });
});


app.get("/delete/:id", (req, res) => {
    const id = req.params.id;
    delete pokedex[id];

    res.redirect('../pokedex');
  });


  app.listen(port, () =>
    console.log(`Servidor rodando em http://localhost:${port}`),
);
