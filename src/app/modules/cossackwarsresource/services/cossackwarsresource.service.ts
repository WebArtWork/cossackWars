import { Injectable } from '@angular/core';
import { Cossackwarsresource } from '../interfaces/cossackwarsresource.interface';
import { CrudService } from 'wacom';

@Injectable({
	providedIn: 'root',
})
export class CossackwarsresourceService extends CrudService<Cossackwarsresource> {
	cossackwarsresources: Cossackwarsresource[] = this.getDocs();

	cossackwarsresourcesByAuthor: Record<string, Cossackwarsresource[]> = {};

	constructor() {
		super({
			name: 'cossackwarsresource',
		});

		this.get();

		this.filteredDocuments(this.cossackwarsresourcesByAuthor);
	}
}
