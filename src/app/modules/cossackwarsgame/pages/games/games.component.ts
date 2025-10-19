import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormService } from 'src/app/core/modules/form/form.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { TableModule } from 'src/app/core/modules/table/table.module';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { CrudComponent } from 'wacom';
import { cossackwarsgameFormComponents } from '../../formcomponents/cossackwarsgame.formcomponents';
import { Cossackwarsgame } from '../../interfaces/cossackwarsgame.interface';
import { CossackwarsgameService } from '../../services/cossackwarsgame.service';

@Component({
	imports: [CommonModule, TableModule],
	templateUrl: './games.component.html',
	styleUrls: ['./games.component.scss'],
})
export class GamesComponent extends CrudComponent<
	CossackwarsgameService,
	Cossackwarsgame,
	FormInterface
> {
	columns = ['name', 'description'];

	config = this.getConfig();

	constructor(
		_cossackwarsgameService: CossackwarsgameService,
		_translate: TranslateService,
		_form: FormService
	) {
		super(cossackwarsgameFormComponents, _form, _translate, _cossackwarsgameService, 'Cossackwarsgame');

		this.setDocuments();
	}
}
