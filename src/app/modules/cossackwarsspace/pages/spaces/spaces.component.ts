import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormService } from 'src/app/core/modules/form/form.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { TableModule } from 'src/app/core/modules/table/table.module';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { CrudComponent } from 'wacom';
import { cossackwarsspaceFormComponents } from '../../formcomponents/cossackwarsspace.formcomponents';
import { Cossackwarsspace } from '../../interfaces/cossackwarsspace.interface';
import { CossackwarsspaceService } from '../../services/cossackwarsspace.service';

@Component({
	imports: [CommonModule, TableModule],
	templateUrl: './spaces.component.html',
	styleUrls: ['./spaces.component.scss'],
})
export class SpacesComponent extends CrudComponent<
	CossackwarsspaceService,
	Cossackwarsspace,
	FormInterface
> {
	override configType: 'local' | 'server' = 'local';

	columns = ['name', 'description'];

	config = this.getConfig();

	constructor(
		_cossackwarsspaceService: CossackwarsspaceService,
		_translate: TranslateService,
		_form: FormService
	) {
		super(cossackwarsspaceFormComponents, _form, _translate, _cossackwarsspaceService, 'Cossackwarsspace');

		this.setDocuments();
	}
}
