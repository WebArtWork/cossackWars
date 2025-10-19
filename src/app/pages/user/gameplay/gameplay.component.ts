import { Component, inject } from '@angular/core';
import { CossackwarscardService } from 'src/app/modules/cossackwarscard/services/cossackwarscard.service';
import { CossackwarseffectService } from 'src/app/modules/cossackwarseffect/services/cossackwarseffect.service';
import { CossackwarsgameService } from 'src/app/modules/cossackwarsgame/services/cossackwarsgame.service';
import { CossackwarskingdomService } from 'src/app/modules/cossackwarskingdom/services/cossackwarskingdom.service';
import { CossackwarsleaderService } from 'src/app/modules/cossackwarsleader/services/cossackwarsleader.service';
import { CossackwarsresourceService } from 'src/app/modules/cossackwarsresource/services/cossackwarsresource.service';
import { CossackwarsspaceService } from 'src/app/modules/cossackwarsspace/services/cossackwarsspace.service';
import { CossackwarsunitService } from 'src/app/modules/cossackwarsunit/services/cossackwarsunit.service';
import { UserService } from 'src/app/modules/user/services/user.service';

@Component({
	templateUrl: './gameplay.component.html',
	styleUrls: ['./gameplay.component.scss'],
	standalone: false
})
export class GameplayComponent {
	userService = inject(UserService);

	cardService = inject(CossackwarscardService);

	effectService = inject(CossackwarseffectService);

	gameService = inject(CossackwarsgameService);

	kingdomService = inject(CossackwarskingdomService);

	leaderService = inject(CossackwarsleaderService);

	resourceService = inject(CossackwarsresourceService);

	spaceService = inject(CossackwarsspaceService);

	unitService = inject(CossackwarsunitService);

	isMenuOpen = false;
}
