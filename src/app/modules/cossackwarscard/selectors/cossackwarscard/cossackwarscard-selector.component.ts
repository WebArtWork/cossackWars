import {
	SimpleChanges,
	EventEmitter,
	Component,
	OnChanges,
	Output,
	Input,
} from '@angular/core';
import { SelectModule } from 'src/app/core/modules/select/select.module';
import { CossackwarscardService } from '../../services/cossackwarscard.service';
import { Cossackwarscard } from '../../interfaces/cossackwarscard.interface';

@Component({
	selector: 'cossackwarscard-selector',
	templateUrl: './cossackwarscard-selector.component.html',
	styleUrls: ['./cossackwarscard-selector.component.scss'],
	imports: [SelectModule],
})
export class CossackwarscardSelectorComponent implements OnChanges {
	@Input() value: string;

	@Output() wChange = new EventEmitter();

	get items(): Cossackwarscard[] {
		return this._cossackwarscardService.cossackwarscards;
	}

	constructor(private _cossackwarscardService: CossackwarscardService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['value'] && !changes['value'].firstChange) {
			this.value = changes['value'].currentValue;
		}
	}
}
