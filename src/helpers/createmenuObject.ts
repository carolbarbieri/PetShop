import { fishes } from "../controllers/pageController"

type Menuotions = ''| 'all | 'dogs' | 'cats' | 'fishes'

export const createMenuObject = (activeMenu: string) => {
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