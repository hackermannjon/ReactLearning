import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
	selector: "app-details",
	standalone: true,
	imports: [CommonModule],
	template: ` <p>details works! {{ housingLocationId }}</p> `,
	styleUrls: ["./details.component.css"],
})
export class DetailsComponent {
	route: ActivatedRoute = inject(ActivatedRoute);
	housingLocationId: number = 0;

	constructor() {
		this.housingLocationId = Number(this.route.snapshot.paramMap.get("id"));
		console.log("Housing Location ID:", this.housingLocationId);
	}
}
