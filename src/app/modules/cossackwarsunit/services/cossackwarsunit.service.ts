import { Injectable } from '@angular/core';
import { Cossackwarsunit } from '../interfaces/cossackwarsunit.interface';
import { CrudService } from 'wacom';

@Injectable({
	providedIn: 'root',
})
export class CossackwarsunitService extends CrudService<Cossackwarsunit> {
	cossackwarsunits: Cossackwarsunit[] = this.getDocs();

	cossackwarsunitsByAuthor: Record<string, Cossackwarsunit[]> = {};

	constructor() {
		super({
			name: 'cossackwarsunit',
		});

		this.get();

		this.filteredDocuments(this.cossackwarsunitsByAuthor);
	}
}
