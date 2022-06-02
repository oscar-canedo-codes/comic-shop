const mongoose = require('mongoose');
const db = require('../db');
const Comic = require('../models/Comic');

const comics = [
    {   
        hero: 'Spider-man', 
        nameHero:'Peter Parker',
        writer:'Brian Bendis',
        year:2000,
        description:'Spider-Man has spider-like abilities including superhuman strength and the ability to cling to most surfaces.',
        illustrator:'Mark Gagley',
        image:'https://www.zonanegativa.com/imagenes/2016/03/Ultimate-Spider-Man-5-cover.jpg',
        "universe": 'Marvel'
    },
    {
        "hero": "Daredevil",
        "nameHero":"Matt Murdock",
        "writer": "Chip Zdarsky",
        "year": 2019,
        "description": "Daredevils origins come from an accident he had in his childhood which gave him special abilities.neighborhood of Hells Kitchen.",
        "illustrator":"Marco Checchetto",
        "image":"https://www.eslahoradelastortas.com/blog/media/2020/11/SMUST007_0.jpg",
        "colletion":"Daredevil de Zdarsky",
        "universe": 'Marvel'
    },

    {
        "hero": "Iron Man",
        "nameHero":"Tony Stark",
        "writer": "Christopher Cantwell",
        "year": 2020,
        "description": "BIG IRON! Tony Stark is looking to restart his engine. He decides hes going back to basics, putting away his high-tech.",
        "illustrator":"C Cafu",
        "image":"https://starsmydestination.files.wordpress.com/2021/01/iron-man-01-portada-alex-ross-starsmydestination.jpg",
        "universe":'Marvel'
    },

    {
         "hero": "Moon Knight",
         "nameHero":"Marc Spector",
         "writer": "Warren Ellis",
         "year": 2014,
         "description": "Marc Spector is Moon Knight!...Or is he? It's hard to tell these days, especially when New York's wildest vigilante protects.",
         "illustrator":"Declan Shalvey",
         "image":"https://i.annihil.us/u/prod/marvel/i/mg/2/80/530e4d1b02751/clean.jpg",
         "universe": 'Marvel'
     },

     {
        "hero": "Wolverine",
        "nameHero":"Logan",
        "writer": "Benjamin Percy",
        "year": 2020,
        "description": "THE BEST IS BACK! Wolverine been through a lot. He’s been a loner. He’s been a killer.",
        "illustrator":"Viktor Bogdanovic",
        "image":"https://i.annihil.us/u/prod/marvel/i/mg/a/20/60917f7b97bfc/clean.jpg",
        "universe": 'Marvel'
    },

    {
        "hero": "X-Men Red",
        "nameHero":"X-Men",
        "writer": "Al Ewing",
        "year": 2022,
        "description": "WHO CAN SAVE THE RED PLANET? The mutants of Arakko spent millennia scarred by war.",
        "illustrator":"Stefano Caselli",
        "image":"https://i.annihil.us/u/prod/marvel/i/mg/9/70/62432e4f27fcd/clean.jpg",
        "universe": 'Marvel'
    },
    {
        "hero": "Jessica Jones",
        "nameHero":"Jessica Jones",
        "writer": "Kelly Thompson",
        "year": 2022,
        "description": "Jessica Jones is forced to question everything she thought she knew about her time with the Purple Man.",
        "illustrator":"Mattia De Iulis",
        "image":"https://i.annihil.us/u/prod/marvel/i/mg/9/10/5c702a03b99dc/clean.jpg",
        "universe": 'Marvel'
    },

    {
        "hero": "Captain Marvel ",
        "nameHero":"Carol Danvers",
        "writer": "Kelly Thompson",
        "year": 2019,
        "description": "Carol Danvers taps into a new level of power in her fight against Ove, but at what cost?",
        "illustrator":"Lee Garbett",
        "image":"https://i.annihil.us/u/prod/marvel/i/mg/f/f0/6030364318df2/clean.jpg",
        "universe": 'Marvel',
    },

    {
        "hero": "Black Widow ",
        "nameHero":"Natasha Romanoff",
        "writer": "Kelly Thompson",
        "year": 2020,
        "description": "Natasha Romanoff is known for having skeletons in her closet, but THE LIVING BLADE is the one skeleton.",
        "illustrator":"Elena Casagrande",
        "image":"https://i.annihil.us/u/prod/marvel/i/mg/6/20/62015569dafd0/clean.jpg",
        "universe": 'Marvel'
    },

    {
        "hero": "X-Men: Black Mystique ",
        "nameHero":"Mystique",
        "writer": "Lonnie Nadler",
        "year": 2018,
        "description": "THAT’S SO RAVEN! What’s a day in the life for Raven Darkholme, A.K.A. Mystique? Brutal kills.",
        "illustrator":"Geraldo Borges",
        "image":"https://i.annihil.us/u/prod/marvel/i/mg/9/50/5bbe675ed5024/clean.jpg",
        "universe": 'Marvel'
    },

    {
        "hero": "Devil's Reign: X-Men ",
        "nameHero":"X-Men",
        "writer": "Gerry Duggan",
        "year": 2018,
        "description": "DEALS WITH THE DEVIL! Turns out attending Hellfire Club soirees was not the naughtiest thing.",
        "illustrator":"Phil Noto",
        "image":"https://i.annihil.us/u/prod/marvel/i/mg/2/f0/62017965a2cd0/clean.jpg",
        "universe": 'Marvel'
    },

    {
        "hero": "Daredevil (2019) ",
        "nameHero":"Matt Murdock",
        "writer": "Chip Zdarsky",
        "year": 2019,
        "description": "DOING TIME CONTINUES! As Elektra gets her bearings in Hell's Kitchen, Matt Murdock finds an unlikely ally in prison.",
        "illustrator":"Marco Checchetto",
        "image":"https://i.annihil.us/u/prod/marvel/i/mg/9/00/60afe347009cc/clean.jpg",
        "universe": 'Marvel'
    },
    {
        "hero": "BATMAN",
        "nameHero": "Bruce Wyne",
        "writer": "Tom King",
        "year": 2022,
        "description": "A shocking heist has the mysterious and deadly figure called the Help cutting his way through Gotham City",
       " illustrator":"David Marquez",
        "image":"https://www.ecccomics.com/content/productos/8208/cubierta_batman_victoria_oscura_black_label_WEB.jpg",
        "universe": "DC",

    },
    {
        "hero": "NUBIA",
        "nameHero": "NUBIA",
        "writer": "Vita Ayala",
        "year": 2022,
        "description": "After the events of Trial of the Amazons, a new era for these warriors has dawned.",
       " illustrator":"Alitha Martinez",
        "image":"https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2022/04/NUBIACOROSP_Cv1_00111_DIGITAL_6266f5833c4899.89406053.jpg?itok=mIqQictt",
        "universe": "DC",
    },
    {
        "hero": "WONDER WOMAN",
        "nameHero": "Diana Prince",
        "writer": "Allan Heinberg",
        "year": 2008,
        "description": "In this volume collecting WONDER WOMAN #1-4, plus WONDER WOMAN ANNUAL #1 by acclaimed writer Allan Heinberg",
       " illustrator":"Gary Frank",
        "image":"https://www.ecccomics.com/content/productos/8091/cubierta_wonder_woman_Goodwatch.jpg",
        "universe": "DC",
    }
];

const comicsDocument = comics.map(comic => new Comic(comic));

db.connectDB()
    // SEARCH FOR PRE-EXISTING ITEMS, IF FOUND DELETE
    .then(async () => {
        const allComics = await Comic.find();
        if(allComics.length > 0){
            await Comic.collection.drop();     
        }
    })
    .catch(err => console.error(`Error deleting information from the DB ${err}`))
    .then(async () => {
        await Comic.insertMany(comicsDocument)
    })
    .catch(err => console.error (`Error creating document in DB: ${err}`))
    .finally(() => mongoose.disconnect());