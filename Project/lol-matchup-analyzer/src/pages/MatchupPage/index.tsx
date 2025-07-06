import React from "react";
import { MatchupDisplay } from "../../components/MatchupDisplay";
import { MatchupSelector } from "../../components/MatchupSelector";
import * as S from "./style";
import { useMatchupPageViewModel } from "./viewModel";

export const MatchupPage: React.FC = () => {
	const { error } = useMatchupPageViewModel();

	if (error) {
		return (
			<S.Container>
				<S.Header>
					<S.Title>Erro</S.Title>
					<S.Subtitle>{error}</S.Subtitle>
				</S.Header>
			</S.Container>
		);
	}

	return (
		<S.Container>
			<S.Header>
				<S.Title>LoL Matchup Analyzer</S.Title>
				<S.Subtitle>
					Selecione dois campeões para comparar suas estatísticas
				</S.Subtitle>
			</S.Header>
			<S.MainContent>
				<MatchupSelector />
				<MatchupDisplay />
			</S.MainContent>
		</S.Container>
	);
};
