import { Injectable } from '@angular/core';
import { Cossackwarseffect } from '../interfaces/cossackwarseffect.interface';
import { CrudService } from 'wacom';

@Injectable({
	providedIn: 'root',
})
export class CossackwarseffectService extends CrudService<Cossackwarseffect> {
	cossackwarseffects: Cossackwarseffect[] = this.getDocs();

	cossackwarseffectsByAuthor: Record<string, Cossackwarseffect[]> = {};

	constructor() {
		super({
			name: 'cossackwarseffect',
		});

		this.get();

		this.filteredDocuments(this.cossackwarseffectsByAuthor);
	}
}
