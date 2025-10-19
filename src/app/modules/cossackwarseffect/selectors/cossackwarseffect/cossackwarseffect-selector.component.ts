import {
	SimpleChanges,
	EventEmitter,
	Component,
	OnChanges,
	Output,
	Input,
} from '@angular/core';
import { SelectModule } from 'src/app/core/modules/select/select.module';
import { CossackwarseffectService } from '../../services/cossackwarseffect.service';
import { Cossackwarseffect } from '../../interfaces/cossackwarseffect.interface';

@Component({
	selector: 'cossackwarseffect-selector',
	templateUrl: './cossackwarseffect-selector.component.html',
	styleUrls: ['./cossackwarseffect-selector.component.scss'],
	imports: [SelectModule],
})
export class CossackwarseffectSelectorComponent implements OnChanges {
	@Input() value: string;

	@Output() wChange = new EventEmitter();

	get items(): Cossackwarseffect[] {
		return this._cossackwarseffectService.cossackwarseffects;
	}

	constructor(private _cossackwarseffectService: CossackwarseffectService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['value'] && !changes['value'].firstChange) {
			this.value = changes['value'].currentValue;
		}
	}
}
