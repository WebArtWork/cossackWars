import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormService } from 'src/app/core/modules/form/form.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { TableModule } from 'src/app/core/modules/table/table.module';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { CrudComponent } from 'wacom';
import { cossackwarsresourceFormComponents } from '../../formcomponents/cossackwarsresource.formcomponents';
import { Cossackwarsresource } from '../../interfaces/cossackwarsresource.interface';
import { CossackwarsresourceService } from '../../services/cossackwarsresource.service';

@Component({
	imports: [CommonModule, TableModule],
	templateUrl: './resources.component.html',
	styleUrls: ['./resources.component.scss'],
})
export class ResourcesComponent extends CrudComponent<
	CossackwarsresourceService,
	Cossackwarsresource,
	FormInterface
> {
	override configType: 'local' | 'server' = 'local';

	columns = ['name', 'description'];

	config = this.getConfig();

	constructor(
		_cossackwarsresourceService: CossackwarsresourceService,
		_translate: TranslateService,
		_form: FormService
	) {
		super(cossackwarsresourceFormComponents, _form, _translate, _cossackwarsresourceService, 'Cossackwarsresource');

		this.setDocuments();
	}
}
