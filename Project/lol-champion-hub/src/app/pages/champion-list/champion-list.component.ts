import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Champion } from '../../../../models/champion.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-champion-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './champion-list.component.html',
  styleUrl: './champion-list.component.css',
})
export class ChampionListComponent {
  champions: Champion[] = [];

  isLoading = true;

  ddragonBaseUrl =
    'https://ddragon.leagueoflegends.com/cdn/14.12.1/img/champion/';

  constructor(apiService: ApiService) {
    apiService.getChampions().subscribe({
      next: (champions) => {
        this.champions = champions;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching champions:', error);
        this.isLoading = false;
      },
    });
  }
}
