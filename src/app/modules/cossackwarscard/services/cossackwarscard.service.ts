import { Injectable } from '@angular/core';
import { Cossackwarscard } from '../interfaces/cossackwarscard.interface';
import { CrudService } from 'wacom';

@Injectable({
	providedIn: 'root',
})
export class CossackwarscardService extends CrudService<Cossackwarscard> {
	cossackwarscards: Cossackwarscard[] = this.getDocs();

	cossackwarscardsByAuthor: Record<string, Cossackwarscard[]> = {};

	constructor() {
		super({
			name: 'cossackwarscard',
		});

		this.get();

		this.filteredDocuments(this.cossackwarscardsByAuthor);
	}
}
