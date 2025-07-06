import React from "react";
import * as S from "./style";
import { useChampionDetailPageViewModel } from "./viewModel";

export const ChampionDetailPage: React.FC = () => {
	const { champion, imageUrl, formattedStats, handleBackClick } =
		useChampionDetailPageViewModel();

	if (!champion) {
		return (
			<S.Container>
				<S.Header>
					<S.ChampionName>Campeão não encontrado</S.ChampionName>
					<S.BackButton onClick={handleBackClick}>
						Voltar para a página inicial
					</S.BackButton>
				</S.Header>
			</S.Container>
		);
	}

	return (
		<S.Container>
			<S.Header>
				<S.ChampionImage src={imageUrl} alt={champion.name} />
				<S.ChampionName>{champion.name}</S.ChampionName>
				<S.ChampionTitle>{champion.title}</S.ChampionTitle>
				<S.TagsContainer>
					{champion.tags.map((tag) => (
						<S.Tag key={tag}>{tag}</S.Tag>
					))}
				</S.TagsContainer>
				<div style={{ marginTop: "20px" }}>
					<S.BackButton onClick={handleBackClick}>
						← Voltar para Comparação
					</S.BackButton>
				</div>
			</S.Header>

			<S.MainContent>
				<S.StatsSection>
					<S.SectionTitle>Estatísticas Detalhadas</S.SectionTitle>
					<S.StatsGrid>
						{formattedStats.map((stat, index) => (
							<S.StatCard key={index}>
								<S.StatLabel>{stat.label}</S.StatLabel>
								<S.StatValue>{stat.value}</S.StatValue>
							</S.StatCard>
						))}
					</S.StatsGrid>
				</S.StatsSection>

				<S.StatsSection>
					<S.SectionTitle>Informações Gerais</S.SectionTitle>
					<S.StatsGrid>
						<S.StatCard>
							<S.StatLabel>Tipo de Recurso</S.StatLabel>
							<S.StatValue>{champion.partype}</S.StatValue>
						</S.StatCard>
						<S.StatCard>
							<S.StatLabel>Dificuldade</S.StatLabel>
							<S.StatValue>
								{champion.info.difficulty}/10
							</S.StatValue>
						</S.StatCard>
						<S.StatCard>
							<S.StatLabel>Ataque</S.StatLabel>
							<S.StatValue>{champion.info.attack}/10</S.StatValue>
						</S.StatCard>
						<S.StatCard>
							<S.StatLabel>Defesa</S.StatLabel>
							<S.StatValue>
								{champion.info.defense}/10
							</S.StatValue>
						</S.StatCard>
						<S.StatCard>
							<S.StatLabel>Magia</S.StatLabel>
							<S.StatValue>{champion.info.magic}/10</S.StatValue>
						</S.StatCard>
					</S.StatsGrid>
				</S.StatsSection>
			</S.MainContent>
		</S.Container>
	);
};
