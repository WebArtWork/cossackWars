import {
	SimpleChanges,
	EventEmitter,
	Component,
	OnChanges,
	Output,
	Input,
} from '@angular/core';
import { SelectModule } from 'src/app/core/modules/select/select.module';
import { CossackwarsleaderService } from '../../services/cossackwarsleader.service';
import { Cossackwarsleader } from '../../interfaces/cossackwarsleader.interface';

@Component({
	selector: 'cossackwarsleader-selector',
	templateUrl: './cossackwarsleader-selector.component.html',
	styleUrls: ['./cossackwarsleader-selector.component.scss'],
	imports: [SelectModule],
})
export class CossackwarsleaderSelectorComponent implements OnChanges {
	@Input() value: string;

	@Output() wChange = new EventEmitter();

	get items(): Cossackwarsleader[] {
		return this._cossackwarsleaderService.cossackwarsleaders;
	}

	constructor(private _cossackwarsleaderService: CossackwarsleaderService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['value'] && !changes['value'].firstChange) {
			this.value = changes['value'].currentValue;
		}
	}
}
