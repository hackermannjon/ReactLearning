import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Champion } from '../../../../models/champion.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-champion-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './champion-detail.component.html',
  styleUrl: './champion-detail.component.css',
})
export class ChampionDetailComponent implements OnInit {
  champion: Champion | null = null;
  isLoading = true;
  error: string | null = null;

  ddragonBaseUrl =
    'https://ddragon.leagueoflegends.com/cdn/14.12.1/img/champion/';

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadChampion(id);
    }
  }

  private loadChampion(id: string): void {
    this.apiService.getChampionById(id).subscribe({
      next: (champion) => {
        this.champion = champion;
        this.isLoading = false;
      },
      error: (error) => {
        this.error = 'Erro ao carregar o campeão';
        this.isLoading = false;
        console.error('Erro:', error);
      },
    });
  }
}
