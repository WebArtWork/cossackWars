import {
	SimpleChanges,
	EventEmitter,
	Component,
	OnChanges,
	Output,
	Input,
} from '@angular/core';
import { SelectModule } from 'src/app/core/modules/select/select.module';
import { CossackwarsspaceService } from '../../services/cossackwarsspace.service';
import { Cossackwarsspace } from '../../interfaces/cossackwarsspace.interface';

@Component({
	selector: 'cossackwarsspace-selector',
	templateUrl: './cossackwarsspace-selector.component.html',
	styleUrls: ['./cossackwarsspace-selector.component.scss'],
	imports: [SelectModule],
})
export class CossackwarsspaceSelectorComponent implements OnChanges {
	@Input() value: string;

	@Output() wChange = new EventEmitter();

	get items(): Cossackwarsspace[] {
		return this._cossackwarsspaceService.cossackwarsspaces;
	}

	constructor(private _cossackwarsspaceService: CossackwarsspaceService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['value'] && !changes['value'].firstChange) {
			this.value = changes['value'].currentValue;
		}
	}
}
