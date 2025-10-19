import {
	SimpleChanges,
	EventEmitter,
	Component,
	OnChanges,
	Output,
	Input,
} from '@angular/core';
import { SelectModule } from 'src/app/core/modules/select/select.module';
import { CossackwarskingdomService } from '../../services/cossackwarskingdom.service';
import { Cossackwarskingdom } from '../../interfaces/cossackwarskingdom.interface';

@Component({
	selector: 'cossackwarskingdom-selector',
	templateUrl: './cossackwarskingdom-selector.component.html',
	styleUrls: ['./cossackwarskingdom-selector.component.scss'],
	imports: [SelectModule],
})
export class CossackwarskingdomSelectorComponent implements OnChanges {
	@Input() value: string;

	@Output() wChange = new EventEmitter();

	get items(): Cossackwarskingdom[] {
		return this._cossackwarskingdomService.cossackwarskingdoms;
	}

	constructor(private _cossackwarskingdomService: CossackwarskingdomService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['value'] && !changes['value'].firstChange) {
			this.value = changes['value'].currentValue;
		}
	}
}
