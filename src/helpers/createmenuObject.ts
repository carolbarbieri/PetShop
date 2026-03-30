import { fish } from "../controllers/pageController"

type Menuoptions = ''| 'all' | 'dogs' | 'cats' | 'fishes'

export const createMenuObject = (activeMenu:Menuoptions ) => {
let returnObject = {
all: false,
dogs: false,
cats: false,
fishes: false
}

if (activeMenu !== '') {
    returnObject[activeMenu] = true
}


return returnObject

}