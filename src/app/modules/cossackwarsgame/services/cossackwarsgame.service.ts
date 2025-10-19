import { Injectable } from '@angular/core';
import { Cossackwarsgame } from '../interfaces/cossackwarsgame.interface';
import { CrudService } from 'wacom';

@Injectable({
	providedIn: 'root',
})
export class CossackwarsgameService extends CrudService<Cossackwarsgame> {
	constructor() {
		super({
			name: 'cossackwarsgame',
		});
	}
}
