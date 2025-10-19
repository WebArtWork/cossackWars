import {
	SimpleChanges,
	EventEmitter,
	Component,
	OnChanges,
	Output,
	Input,
} from '@angular/core';
import { SelectModule } from 'src/app/core/modules/select/select.module';
import { CossackwarsresourceService } from '../../services/cossackwarsresource.service';
import { Cossackwarsresource } from '../../interfaces/cossackwarsresource.interface';

@Component({
	selector: 'cossackwarsresource-selector',
	templateUrl: './cossackwarsresource-selector.component.html',
	styleUrls: ['./cossackwarsresource-selector.component.scss'],
	imports: [SelectModule],
})
export class CossackwarsresourceSelectorComponent implements OnChanges {
	@Input() value: string;

	@Output() wChange = new EventEmitter();

	get items(): Cossackwarsresource[] {
		return this._cossackwarsresourceService.cossackwarsresources;
	}

	constructor(private _cossackwarsresourceService: CossackwarsresourceService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['value'] && !changes['value'].firstChange) {
			this.value = changes['value'].currentValue;
		}
	}
}
