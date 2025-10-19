import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormService } from 'src/app/core/modules/form/form.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { TableModule } from 'src/app/core/modules/table/table.module';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { CrudComponent } from 'wacom';
import { cossackwarsleaderFormComponents } from '../../formcomponents/cossackwarsleader.formcomponents';
import { Cossackwarsleader } from '../../interfaces/cossackwarsleader.interface';
import { CossackwarsleaderService } from '../../services/cossackwarsleader.service';

@Component({
	imports: [CommonModule, TableModule],
	templateUrl: './leaders.component.html',
	styleUrls: ['./leaders.component.scss'],
})
export class LeadersComponent extends CrudComponent<
	CossackwarsleaderService,
	Cossackwarsleader,
	FormInterface
> {
	override configType: 'local' | 'server' = 'local';

	columns = ['name', 'description'];

	config = this.getConfig();

	constructor(
		_cossackwarsleaderService: CossackwarsleaderService,
		_translate: TranslateService,
		_form: FormService
	) {
		super(cossackwarsleaderFormComponents, _form, _translate, _cossackwarsleaderService, 'Cossackwarsleader');

		this.setDocuments();
	}
}
