import {Request, Response} from 'express'

export const home = (req: Request, res: Response) => {
//res.send('home')
res.render('pages/page',{

menu:{
all: true,
dogs: false,
cats: false,
fishes: false,

},
banner: {
title: 'Todos os animais',
background: "allanimais"
}
}
)
};


export const dogs = (req: Request, res: Response) => {
res.render('pages/page',{
menu:{
all: false,
dogs: true,
cats: false,
fishes: false,

},

banner: {
title: 'Cachorros',
background: "banner_dog.jpg"
}
}
)
};


export const cats = (req: Request, res: Response) => {
res.render('pages/page', {

menu:{
all: false,
dogs: false,
cats: true,
fishes: false,

},
banner: {
title: 'Gatos',
background: "banner_cat.jpg"
}
})
};

export const fishes = (req: Request, res: Response) => {
res.render('pages/page', {
menu:{
all: false,
dogs: false,
cats: false,
fishes: true,

},
banner: {
title: 'Peixes',
background: "banner_fishes.jpg"
}
})
};