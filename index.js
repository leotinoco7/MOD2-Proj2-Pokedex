const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

let message = '';

const menu = [
    {
        title: 'POKEDEX',
        link: '/',
    },
    {
        title: 'ADICIONAR POKEMON',
        link: '/add',
    },
];

const pokedex = [
    {
        id: '1',
        name: 'Bulbasaur',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
        desc: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
        type: 'Planta',
        height: '0.7m',
        weight: '6.9kg',
        cat: 'Seed',
        hab: 'Vinei Whip',
    },
    {
        id: '4',
        name: 'Charmander',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
        desc: 't has a preference for hot things. When it rains, steam is said to spout from the tip of its tail,',
        type: 'Fogo',
        height: '0.6m',
        weight: '8.5kg',
        cat: 'Lizard',
        hab: 'Ember',
    },
    {
        id: '7',
        name: 'Squirtle',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
        desc: 'There is a plant seed on its back right from the day this PoWhen it retracts its long neck into its shell, it squirts out water with vigorous force.',
        type: 'Água',
        height: '0.5m',
        weight: '9kg',
        cat: 'Tiny Turtle',
        hab: 'Bubble',
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
    res.render('detalhesp', { pokedex, menu, id });
  });

app.get("/delete/:id", (req, res) => {
    const id = req.params.id;
    delete pokedex[id];

   res.redirect('/');
  });


  app.listen(port, () =>
    console.log(`Servidor rodando em http://localhost:${port}`),
);
