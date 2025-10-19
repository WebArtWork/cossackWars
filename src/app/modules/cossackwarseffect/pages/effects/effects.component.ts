import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormService } from 'src/app/core/modules/form/form.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { TableModule } from 'src/app/core/modules/table/table.module';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { CrudComponent } from 'wacom';
import { cossackwarseffectFormComponents } from '../../formcomponents/cossackwarseffect.formcomponents';
import { Cossackwarseffect } from '../../interfaces/cossackwarseffect.interface';
import { CossackwarseffectService } from '../../services/cossackwarseffect.service';

@Component({
	imports: [CommonModule, TableModule],
	templateUrl: './effects.component.html',
	styleUrls: ['./effects.component.scss'],
})
export class EffectsComponent extends CrudComponent<
	CossackwarseffectService,
	Cossackwarseffect,
	FormInterface
> {
	override configType: 'local' | 'server' = 'local';

	columns = ['name', 'description'];

	config = this.getConfig();

	constructor(
		_cossackwarseffectService: CossackwarseffectService,
		_translate: TranslateService,
		_form: FormService
	) {
		super(cossackwarseffectFormComponents, _form, _translate, _cossackwarseffectService, 'Cossackwarseffect');

		this.setDocuments();
	}
}
