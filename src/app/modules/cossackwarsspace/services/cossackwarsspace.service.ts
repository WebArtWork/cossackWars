import { Injectable } from '@angular/core';
import { Cossackwarsspace } from '../interfaces/cossackwarsspace.interface';
import { CrudService } from 'wacom';

@Injectable({
	providedIn: 'root',
})
export class CossackwarsspaceService extends CrudService<Cossackwarsspace> {
	cossackwarsspaces: Cossackwarsspace[] = this.getDocs();

	cossackwarsspacesByAuthor: Record<string, Cossackwarsspace[]> = {};

	constructor() {
		super({
			name: 'cossackwarsspace',
		});

		this.get();

		this.filteredDocuments(this.cossackwarsspacesByAuthor);
	}
}
