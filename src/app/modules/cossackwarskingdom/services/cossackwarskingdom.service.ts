import { Injectable } from '@angular/core';
import { Cossackwarskingdom } from '../interfaces/cossackwarskingdom.interface';
import { CrudService } from 'wacom';

@Injectable({
	providedIn: 'root',
})
export class CossackwarskingdomService extends CrudService<Cossackwarskingdom> {
	cossackwarskingdoms: Cossackwarskingdom[] = this.getDocs();

	cossackwarskingdomsByAuthor: Record<string, Cossackwarskingdom[]> = {};

	constructor() {
		super({
			name: 'cossackwarskingdom',
		});

		this.get();

		this.filteredDocuments(this.cossackwarskingdomsByAuthor);
	}
}
