import { useAppSelector } from "../../app/hooks";

interface StatComparison {
	label: string;
	champion1Value: number;
	champion2Value: number;
	champion1Higher: boolean;
}

export const useMatchupDisplayViewModel = () => {
	const { selectedChampion1, selectedChampion2 } = useAppSelector(
		(state) => state.champions
	);

	const bothSelected = selectedChampion1 && selectedChampion2;

	const getStatComparisons = (): StatComparison[] => {
		if (!selectedChampion1 || !selectedChampion2) return [];

		const stats1 = selectedChampion1.stats;
		const stats2 = selectedChampion2.stats;

		return [
			{
				label: "HP",
				champion1Value: stats1.hp,
				champion2Value: stats2.hp,
				champion1Higher: stats1.hp > stats2.hp,
			},
			{
				label: "HP por Level",
				champion1Value: stats1.hpperlevel,
				champion2Value: stats2.hpperlevel,
				champion1Higher: stats1.hpperlevel > stats2.hpperlevel,
			},
			{
				label: "MP",
				champion1Value: stats1.mp,
				champion2Value: stats2.mp,
				champion1Higher: stats1.mp > stats2.mp,
			},
			{
				label: "Velocidade de Movimento",
				champion1Value: stats1.movespeed,
				champion2Value: stats2.movespeed,
				champion1Higher: stats1.movespeed > stats2.movespeed,
			},
			{
				label: "Armadura",
				champion1Value: stats1.armor,
				champion2Value: stats2.armor,
				champion1Higher: stats1.armor > stats2.armor,
			},
			{
				label: "Resistência Mágica",
				champion1Value: stats1.spellblock,
				champion2Value: stats2.spellblock,
				champion1Higher: stats1.spellblock > stats2.spellblock,
			},
			{
				label: "Alcance de Ataque",
				champion1Value: stats1.attackrange,
				champion2Value: stats2.attackrange,
				champion1Higher: stats1.attackrange > stats2.attackrange,
			},
			{
				label: "Dano de Ataque",
				champion1Value: stats1.attackdamage,
				champion2Value: stats2.attackdamage,
				champion1Higher: stats1.attackdamage > stats2.attackdamage,
			},
			{
				label: "Velocidade de Ataque",
				champion1Value: stats1.attackspeed,
				champion2Value: stats2.attackspeed,
				champion1Higher: stats1.attackspeed > stats2.attackspeed,
			},
			{
				label: "Chance de Crítico",
				champion1Value: stats1.crit,
				champion2Value: stats2.crit,
				champion1Higher: stats1.crit > stats2.crit,
			},
		];
	};

	const getWinner = (): string => {
		if (!selectedChampion1 || !selectedChampion2) return "";

		const comparisons = getStatComparisons();
		let champion1Wins = 0;
		let champion2Wins = 0;

		comparisons.forEach((stat) => {
			if (stat.champion1Higher) {
				champion1Wins++;
			} else if (stat.champion1Value < stat.champion2Value) {
				champion2Wins++;
			}
		});

		if (champion1Wins > champion2Wins) {
			return `${selectedChampion1.name} tem vantagem geral!`;
		} else if (champion2Wins > champion1Wins) {
			return `${selectedChampion2.name} tem vantagem geral!`;
		} else {
			return "Empate técnico!";
		}
	};

	return {
		selectedChampion1,
		selectedChampion2,
		bothSelected,
		statComparisons: getStatComparisons(),
		winner: getWinner(),
	};
};
