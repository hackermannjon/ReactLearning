import styled from "styled-components";

export const Container = styled.div`
	background-color: #0a1428;
	padding: 20px;
	border-radius: 8px;
	margin-bottom: 20px;
`;

export const Title = styled.h2`
	color: #f0e6d2;
	text-align: center;
	margin-bottom: 20px;
`;

export const SelectionContainer = styled.div`
	display: flex;
	gap: 20px;
	justify-content: center;
	align-items: flex-start;
	flex-wrap: wrap;
`;

export const ChampionSlot = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
`;

export const SlotLabel = styled.h3`
	color: #c9aa71;
	margin: 0;
`;

export const SelectedChampionCard = styled.div`
	width: 200px;
	height: 280px;
	border: 2px dashed #c89b3c;
	border-radius: 8px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #a09b8c;
	text-align: center;
	background-color: #1e2328;
`;

export const ChampionsList = styled.div`
	margin-top: 20px;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	gap: 20px;
	max-height: 400px;
	overflow-y: auto;
	padding: 10px;

	&::-webkit-scrollbar {
		width: 8px;
	}

	&::-webkit-scrollbar-track {
		background: #1e2328;
		border-radius: 4px;
	}

	&::-webkit-scrollbar-thumb {
		background: #c89b3c;
		border-radius: 4px;
	}
`;

export const SearchInput = styled.input`
	width: 100%;
	padding: 12px;
	margin-bottom: 20px;
	background-color: #1e2328;
	border: 1px solid #c89b3c;
	border-radius: 4px;
	color: #f0e6d2;
	font-size: 16px;

	&::placeholder {
		color: #a09b8c;
	}

	&:focus {
		outline: none;
		border-color: #f0e6d2;
	}
`;

export const VSText = styled.div`
	color: #c89b3c;
	font-size: 2rem;
	font-weight: bold;
	display: flex;
	align-items: center;
	margin: 0 20px;
`;
