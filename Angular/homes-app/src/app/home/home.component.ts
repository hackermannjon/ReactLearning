import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { HousingLocation } from "../housing-location";
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { HousingService } from "../housing.service";

@Component({
	selector: "app-home",
	standalone: true,
	imports: [CommonModule, HousingLocationComponent],
	template: `
		<section>
			<form>
				<input type="text" placeholder="Filter by city" />
				<button class="primary" type="button">Search</button>
			</form>
		</section>
		<section class="results">
			<app-housing-location
				*ngFor="let housingLocation of housingLocationList"
				[housingLocation]="housingLocation"
			></app-housing-location>
		</section>
	`,
	styleUrls: ["./home.component.css"],
})
export class HomeComponent {
	housingLocationList: HousingLocation[] = [];
	housingService: HousingService = inject(HousingService);

	constructor() {
		this.housingLocationList = this.housingService.getAllHousingLocations();
		console.log("Housing Locations:", this.housingLocationList);
	}
}
