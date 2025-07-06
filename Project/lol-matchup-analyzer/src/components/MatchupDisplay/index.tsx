import React from "react";
import { ChampionCard } from "../ChampionCard";
import * as S from "./style";
import { useMatchupDisplayViewModel } from "./viewModel";

export const MatchupDisplay: React.FC = () => {
	const {
		selectedChampion1,
		selectedChampion2,
		bothSelected,
		statComparisons,
		winner,
	} = useMatchupDisplayViewModel();

	if (!bothSelected) {
		return (
			<S.Container>
				<S.EmptyState>
					Selecione dois campeões para ver a comparação detalhada
				</S.EmptyState>
			</S.Container>
		);
	}

	return (
		<S.Container>
			<S.Title>Comparação Detalhada</S.Title>

			<S.ComparisonGrid>
				<S.ChampionSection>
					<ChampionCard
						champion={selectedChampion1!}
						enableNavigation
					/>
					<S.StatsContainer>
						<S.CategoryTitle>Status Base</S.CategoryTitle>
						{statComparisons.map((stat, index) => (
							<S.StatRow key={index}>
								<S.StatLabel>{stat.label}</S.StatLabel>
								<S.StatValue isHigher={stat.champion1Higher}>
									{stat.champion1Value.toFixed(1)}
								</S.StatValue>
							</S.StatRow>
						))}
					</S.StatsContainer>
				</S.ChampionSection>

				<S.VSSection>
					<S.VSText>VS</S.VSText>
					<S.WinnerText>{winner}</S.WinnerText>
				</S.VSSection>

				<S.ChampionSection>
					<ChampionCard
						champion={selectedChampion2!}
						enableNavigation
					/>
					<S.StatsContainer>
						<S.CategoryTitle>Status Base</S.CategoryTitle>
						{statComparisons.map((stat, index) => (
							<S.StatRow key={index}>
								<S.StatLabel>{stat.label}</S.StatLabel>
								<S.StatValue
									isHigher={
										!stat.champion1Higher &&
										stat.champion1Value !==
											stat.champion2Value
									}
								>
									{stat.champion2Value.toFixed(1)}
								</S.StatValue>
							</S.StatRow>
						))}
					</S.StatsContainer>
				</S.ChampionSection>
			</S.ComparisonGrid>
		</S.Container>
	);
};
