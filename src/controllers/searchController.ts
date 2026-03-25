import {Request, Response} from 'express';
import { Pet } from '../models/pet';
import { createMenuObject } from '../helpers/createmenuObject';

export const search = (req: Request, res: Response) => {
let query: string = req.query.q as string
if(!query) {
	res.redirect('/')

	return
}

let list = Pet.getFromName(query)
res.render('page/pages', {
	menu: createMenuObject(''),
	list,
	query
});
};

