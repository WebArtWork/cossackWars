import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// Core
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from 'src/app/core/core.module';
import { AppComponent } from './app.component';
import { GuestComponent } from './core/theme/guest/guest.component';
import { PublicComponent } from './core/theme/public/public.component';
import { UserComponent } from './core/theme/user/user.component';
// config
import { environment } from 'src/environments/environment';
import { MetaGuard, WacomModule } from 'wacom';
// guards
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AdminsGuard } from './core/guards/admins.guard';
import { AuthenticatedGuard } from './core/guards/authenticated.guard';
import { GuestGuard } from './core/guards/guest.guard';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/sign',
		pathMatch: 'full'
	},
	{
		path: '',
		canActivate: [GuestGuard],
		component: GuestComponent,
		children: [
			/* guest */
			{
				path: 'sign',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Sign'
					}
				},
				loadChildren: () =>
					import('./pages/guest/sign/sign.module').then(
						(m) => m.SignModule
					)
			}
		]
	},
	{
		path: '',
		canActivate: [AuthenticatedGuard],
		component: UserComponent,
		children: [
			/* user */
			{
				path: 'gameplay',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Gameplay'
					}
				},
				loadChildren: () =>
					import('./pages/user/gameplay/gameplay.module').then(
						(m) => m.GameplayModule
					)
			},
			{
				path: 'profile',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'My Profile'
					}
				},
				loadChildren: () =>
					import('./pages/user/profile/profile.module').then(
						(m) => m.ProfileModule
					)
			}
		]
	},
	{
		path: 'admin',
		canActivate: [AdminsGuard],
		component: UserComponent,
		children: [
			/* admin */
			{
				path: 'games',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Games'
					}
				},
				loadChildren: () =>
					import(
						'./modules/cossackwarsgame/pages/games/games.routes'
					).then((r) => r.gamesRoutes)
			},
			{
				path: 'effects',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Effects'
					}
				},
				loadChildren: () =>
					import(
						'./modules/cossackwarseffect/pages/effects/effects.routes'
					).then((r) => r.effectsRoutes)
			},
			{
				path: 'spaces',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Spaces'
					}
				},
				loadChildren: () =>
					import(
						'./modules/cossackwarsspace/pages/spaces/spaces.routes'
					).then((r) => r.spacesRoutes)
			},
			{
				path: 'cards',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Cards'
					}
				},
				loadChildren: () =>
					import(
						'./modules/cossackwarscard/pages/cards/cards.routes'
					).then((r) => r.cardsRoutes)
			},
			{
				path: 'units',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Units'
					}
				},
				loadChildren: () =>
					import(
						'./modules/cossackwarsunit/pages/units/units.routes'
					).then((r) => r.unitsRoutes)
			},
			{
				path: 'resources',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Resources'
					}
				},
				loadChildren: () =>
					import(
						'./modules/cossackwarsresource/pages/resources/resources.routes'
					).then((r) => r.resourcesRoutes)
			},
			{
				path: 'leaders',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Leaders'
					}
				},
				loadChildren: () =>
					import(
						'./modules/cossackwarsleader/pages/leaders/leaders.routes'
					).then((r) => r.leadersRoutes)
			},
			{
				path: 'kingdoms',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Kingdoms'
					}
				},
				loadChildren: () =>
					import(
						'./modules/cossackwarskingdom/pages/kingdoms/kingdoms.routes'
					).then((r) => r.kingdomsRoutes)
			},
			{
				path: 'users',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Users'
					}
				},
				loadChildren: () =>
					import('./modules/user/pages/users/users.module').then(
						(m) => m.UsersModule
					)
			},
			{
				path: 'forms',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Forms'
					}
				},
				loadChildren: () =>
					import(
						'./modules/customform/pages/customforms/customforms.module'
					).then((m) => m.CustomformsModule)
			},
			{
				path: 'translates',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Translates'
					}
				},
				loadChildren: () =>
					import(
						'./core/modules/translate/pages/translates/translates.module'
					).then((m) => m.TranslatesModule)
			}
		]
	},
	{
		path: '**',
		redirectTo: 'profile',
		pathMatch: 'full'
	}
];

@NgModule({
	declarations: [
		AppComponent,
		GuestComponent,
		UserComponent,
		PublicComponent
	],
	imports: [
		CoreModule,
		BrowserModule,
		BrowserAnimationsModule,
		WacomModule.forRoot({
			store: {},
			http: {
				url: environment.url
			},
			socket: environment.production,
			meta: {
				useTitleSuffix: true,
				defaults: {
					title: environment.meta.title,
					favicon: environment.meta.favicon,
					description: environment.meta.description,
					titleSuffix: ' | ' + environment.meta.title,
					'og:image': environment.meta.image
				}
			},
			modal: {
				modals: {
					/* modals */
				}
			},
			alert: {
				alerts: {
					/* alerts */
				}
			},
			loader: {
				loaders: {
					/* loaders */
				}
			},
			popup: {
				popups: {
					/* popups */
				}
			}
		}),
		RouterModule.forRoot(routes, {
			scrollPositionRestoration: 'enabled',
			preloadingStrategy: PreloadAllModules
		})
	],
	providers: [
		/* providers */
		{ provide: LocationStrategy, useClass: HashLocationStrategy },
		AuthenticatedGuard,
		GuestGuard,
		AdminsGuard
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
