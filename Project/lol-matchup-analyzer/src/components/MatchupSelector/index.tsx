import React from "react";
import { ChampionCard } from "../ChampionCard";
import * as S from "./style";
import { useMatchupSelectorViewModel } from "./viewModel";

export const MatchupSelector: React.FC = () => {
	const {
		champions,
		selectedChampion1,
		selectedChampion2,
		loading,
		searchTerm,
		selectingSlot,
		isSelecting,
		setSearchTerm,
		handleChampionSelect,
		handleSlotClick,
	} = useMatchupSelectorViewModel();

	if (loading) {
		return (
			<S.Container>
				<S.Title>Carregando campeões...</S.Title>
			</S.Container>
		);
	}

	return (
		<S.Container>
			<S.Title>Selecione os Campeões para Comparar</S.Title>

			<S.SelectionContainer>
				<S.ChampionSlot>
					<S.SlotLabel>Campeão 1</S.SlotLabel>
					{selectedChampion1 ? (
						<div onClick={() => handleSlotClick("champion1")}>
							<ChampionCard champion={selectedChampion1} />
						</div>
					) : (
						<S.SelectedChampionCard
							onClick={() => handleSlotClick("champion1")}
							style={{ cursor: "pointer" }}
						>
							{selectingSlot === "champion1"
								? "Selecione um campeão..."
								: "Clique para selecionar"}
						</S.SelectedChampionCard>
					)}
				</S.ChampionSlot>

				<S.VSText>VS</S.VSText>

				<S.ChampionSlot>
					<S.SlotLabel>Campeão 2</S.SlotLabel>
					{selectedChampion2 ? (
						<div onClick={() => handleSlotClick("champion2")}>
							<ChampionCard champion={selectedChampion2} />
						</div>
					) : (
						<S.SelectedChampionCard
							onClick={() => handleSlotClick("champion2")}
							style={{ cursor: "pointer" }}
						>
							{selectingSlot === "champion2"
								? "Selecione um campeão..."
								: "Clique para selecionar"}
						</S.SelectedChampionCard>
					)}
				</S.ChampionSlot>
			</S.SelectionContainer>

			{isSelecting && (
				<>
					<S.SearchInput
						type="text"
						placeholder="Buscar campeão por nome ou role..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>

					<S.ChampionsList>
						{champions.map((champion) => (
							<ChampionCard
								key={champion.id}
								champion={champion}
								onClick={handleChampionSelect}
							/>
						))}
					</S.ChampionsList>
				</>
			)}
		</S.Container>
	);
};
