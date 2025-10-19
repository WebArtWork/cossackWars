import { Injectable } from '@angular/core';
import { Cossackwarsleader } from '../interfaces/cossackwarsleader.interface';
import { CrudService } from 'wacom';

@Injectable({
	providedIn: 'root',
})
export class CossackwarsleaderService extends CrudService<Cossackwarsleader> {
	cossackwarsleaders: Cossackwarsleader[] = this.getDocs();

	cossackwarsleadersByAuthor: Record<string, Cossackwarsleader[]> = {};

	constructor() {
		super({
			name: 'cossackwarsleader',
		});

		this.get();

		this.filteredDocuments(this.cossackwarsleadersByAuthor);
	}
}
