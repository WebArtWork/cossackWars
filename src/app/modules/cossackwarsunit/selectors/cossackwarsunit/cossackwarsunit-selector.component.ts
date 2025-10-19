import {
	SimpleChanges,
	EventEmitter,
	Component,
	OnChanges,
	Output,
	Input,
} from '@angular/core';
import { SelectModule } from 'src/app/core/modules/select/select.module';
import { CossackwarsunitService } from '../../services/cossackwarsunit.service';
import { Cossackwarsunit } from '../../interfaces/cossackwarsunit.interface';

@Component({
	selector: 'cossackwarsunit-selector',
	templateUrl: './cossackwarsunit-selector.component.html',
	styleUrls: ['./cossackwarsunit-selector.component.scss'],
	imports: [SelectModule],
})
export class CossackwarsunitSelectorComponent implements OnChanges {
	@Input() value: string;

	@Output() wChange = new EventEmitter();

	get items(): Cossackwarsunit[] {
		return this._cossackwarsunitService.cossackwarsunits;
	}

	constructor(private _cossackwarsunitService: CossackwarsunitService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['value'] && !changes['value'].firstChange) {
			this.value = changes['value'].currentValue;
		}
	}
}
