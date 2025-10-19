import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormService } from 'src/app/core/modules/form/form.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { TableModule } from 'src/app/core/modules/table/table.module';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { CrudComponent } from 'wacom';
import { cossackwarskingdomFormComponents } from '../../formcomponents/cossackwarskingdom.formcomponents';
import { Cossackwarskingdom } from '../../interfaces/cossackwarskingdom.interface';
import { CossackwarskingdomService } from '../../services/cossackwarskingdom.service';

@Component({
	imports: [CommonModule, TableModule],
	templateUrl: './kingdoms.component.html',
	styleUrls: ['./kingdoms.component.scss'],
})
export class KingdomsComponent extends CrudComponent<
	CossackwarskingdomService,
	Cossackwarskingdom,
	FormInterface
> {
	override configType: 'local' | 'server' = 'local';

	columns = ['name', 'description'];

	config = this.getConfig();

	constructor(
		_cossackwarskingdomService: CossackwarskingdomService,
		_translate: TranslateService,
		_form: FormService
	) {
		super(cossackwarskingdomFormComponents, _form, _translate, _cossackwarskingdomService, 'Cossackwarskingdom');

		this.setDocuments();
	}
}
