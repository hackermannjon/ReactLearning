import { Champion } from "../../models/champion.model";

const ddragonBaseUrl =
	"https://ddragon.leagueoflegends.com/cdn/img/champion/loading/";

export const useChampionCardViewModel = (champion: Champion) => {
	const imageUrl = `${ddragonBaseUrl}${champion.id}_0.jpg`;

	return {
		champion,
		imageUrl,
	};
};
