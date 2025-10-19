import {
	SimpleChanges,
	EventEmitter,
	Component,
	OnChanges,
	Output,
	Input,
} from '@angular/core';
import { SelectModule } from 'src/app/core/modules/select/select.module';
import { CossackwarsgameService } from '../../services/cossackwarsgame.service';
import { Cossackwarsgame } from '../../interfaces/cossackwarsgame.interface';

@Component({
	selector: 'cossackwarsgame-selector',
	templateUrl: './cossackwarsgame-selector.component.html',
	styleUrls: ['./cossackwarsgame-selector.component.scss'],
	imports: [SelectModule],
})
export class CossackwarsgameSelectorComponent implements OnChanges {
	@Input() value: string;

	@Output() wChange = new EventEmitter();

	get items(): Cossackwarsgame[] {
		return this._cossackwarsgameService.cossackwarsgames;
	}

	constructor(private _cossackwarsgameService: CossackwarsgameService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['value'] && !changes['value'].firstChange) {
			this.value = changes['value'].currentValue;
		}
	}
}
