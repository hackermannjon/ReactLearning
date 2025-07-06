import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";

export const useChampionDetailPageViewModel = () => {
	const { championId } = useParams<{ championId: string }>();
	const navigate = useNavigate();
	const { champions } = useAppSelector((state) => state.champions);

	const champion = champions.find((c) => c.id === championId);
	const ddragonBaseUrl =
		"https://ddragon.leagueoflegends.com/cdn/img/champion/loading/";
	const imageUrl = champion ? `${ddragonBaseUrl}${champion.id}_0.jpg` : "";

	const handleBackClick = () => {
		navigate("/");
	};

	const getFormattedStats = () => {
		if (!champion) return [];

		return [
			{ label: "HP", value: champion.stats.hp },
			{ label: "HP por Level", value: champion.stats.hpperlevel },
			{ label: "MP", value: champion.stats.mp },
			{ label: "MP por Level", value: champion.stats.mpperlevel },
			{
				label: "Velocidade de Movimento",
				value: champion.stats.movespeed,
			},
			{ label: "Armadura", value: champion.stats.armor },
			{
				label: "Armadura por Level",
				value: champion.stats.armorperlevel,
			},
			{ label: "Resistência Mágica", value: champion.stats.spellblock },
			{
				label: "Res. Mágica por Level",
				value: champion.stats.spellblockperlevel,
			},
			{ label: "Alcance de Ataque", value: champion.stats.attackrange },
			{ label: "Regeneração de HP", value: champion.stats.hpregen },
			{
				label: "Regen. HP por Level",
				value: champion.stats.hpregenperlevel,
			},
			{ label: "Regeneração de MP", value: champion.stats.mpregen },
			{
				label: "Regen. MP por Level",
				value: champion.stats.mpregenperlevel,
			},
			{ label: "Chance de Crítico", value: champion.stats.crit },
			{ label: "Crítico por Level", value: champion.stats.critperlevel },
			{ label: "Dano de Ataque", value: champion.stats.attackdamage },
			{
				label: "Dano por Level",
				value: champion.stats.attackdamageperlevel,
			},
			{
				label: "Vel. Ataque por Level",
				value: champion.stats.attackspeedperlevel,
			},
			{
				label: "Velocidade de Ataque",
				value: champion.stats.attackspeed,
			},
		];
	};

	return {
		champion,
		imageUrl,
		formattedStats: getFormattedStats(),
		handleBackClick,
	};
};
