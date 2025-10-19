import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormService } from 'src/app/core/modules/form/form.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { TableModule } from 'src/app/core/modules/table/table.module';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { CrudComponent } from 'wacom';
import { cossackwarscardFormComponents } from '../../formcomponents/cossackwarscard.formcomponents';
import { Cossackwarscard } from '../../interfaces/cossackwarscard.interface';
import { CossackwarscardService } from '../../services/cossackwarscard.service';

@Component({
	imports: [CommonModule, TableModule],
	templateUrl: './cards.component.html',
	styleUrls: ['./cards.component.scss'],
})
export class CardsComponent extends CrudComponent<
	CossackwarscardService,
	Cossackwarscard,
	FormInterface
> {
	override configType: 'local' | 'server' = 'local';

	columns = ['name', 'description'];

	config = this.getConfig();

	constructor(
		_cossackwarscardService: CossackwarscardService,
		_translate: TranslateService,
		_form: FormService
	) {
		super(cossackwarscardFormComponents, _form, _translate, _cossackwarscardService, 'Cossackwarscard');

		this.setDocuments();
	}
}
