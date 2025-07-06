import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HousingLocation } from "../housing-location";
import { HousingService } from "../housing.service";

@Component({
	selector: "app-details",
	standalone: true,
	imports: [CommonModule],
	template: `
		<article>
			<img
				class="listing-photo"
				[src]="housingLocation?.photo"
				alt="Exterior photo of {{ housingLocation?.name }}"
			/>
			<section class="listing-description">
				<h2 class="listing-heading">{{ housingLocation?.name }}</h2>
				<p class="listing-location">
					{{ housingLocation?.city + ", " + housingLocation?.state }}
				</p>
				<p class="listing-available-units">
					Available Units: {{ housingLocation?.availableUnits }}
				</p>
			</section>
		</article>
	`,
	styleUrls: ["./details.component.css"],
})
export class DetailsComponent {
	route: ActivatedRoute = inject(ActivatedRoute);
	housingService = inject(HousingService);
	housingLocationId: number = 0;
	housingLocation: HousingLocation | undefined;

	constructor() {
		const housingLocationId = Number(
			this.route.snapshot.paramMap.get("id")
		);

		this.housingLocation =
			this.housingService.getHousingLocationById(housingLocationId);
	}
}
