import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormService } from 'src/app/core/modules/form/form.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { TableModule } from 'src/app/core/modules/table/table.module';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { CrudComponent } from 'wacom';
import { cossackwarsunitFormComponents } from '../../formcomponents/cossackwarsunit.formcomponents';
import { Cossackwarsunit } from '../../interfaces/cossackwarsunit.interface';
import { CossackwarsunitService } from '../../services/cossackwarsunit.service';

@Component({
	imports: [CommonModule, TableModule],
	templateUrl: './units.component.html',
	styleUrls: ['./units.component.scss'],
})
export class UnitsComponent extends CrudComponent<
	CossackwarsunitService,
	Cossackwarsunit,
	FormInterface
> {
	override configType: 'local' | 'server' = 'local';

	columns = ['name', 'description'];

	config = this.getConfig();

	constructor(
		_cossackwarsunitService: CossackwarsunitService,
		_translate: TranslateService,
		_form: FormService
	) {
		super(cossackwarsunitFormComponents, _form, _translate, _cossackwarsunitService, 'Cossackwarsunit');

		this.setDocuments();
	}
}
