import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Champion } from "../models/champion.model";

export interface ChampionsState {
	champions: Champion[];
	selectedChampion1: Champion | null;
	selectedChampion2: Champion | null;
	loading: boolean;
	error: string | null;
}

const initialState: ChampionsState = {
	champions: [],
	selectedChampion1: null,
	selectedChampion2: null,
	loading: false,
	error: null,
};

// Async thunk para buscar todos os campeões
export const fetchAllChampions = createAsyncThunk(
	"champions/fetchAll",
	async () => {
		const response = await fetch(
			"https://lol-api-jv-santos.joao-santos-3563.workers.dev/champions"
		);
		if (!response.ok) {
			throw new Error("Failed to fetch champions");
		}
		const data = await response.json();
		return data;
	}
);

const championsSlice = createSlice({
	name: "champions",
	initialState,
	reducers: {
		setSelectedChampion1: (state, action: PayloadAction<Champion>) => {
			state.selectedChampion1 = action.payload;
		},
		setSelectedChampion2: (state, action: PayloadAction<Champion>) => {
			state.selectedChampion2 = action.payload;
		},
		clearSelectedChampions: (state) => {
			state.selectedChampion1 = null;
			state.selectedChampion2 = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchAllChampions.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchAllChampions.fulfilled, (state, action) => {
				state.loading = false;
				state.champions = action.payload;
			})
			.addCase(fetchAllChampions.rejected, (state, action) => {
				state.loading = false;
				state.error =
					action.error.message || "Failed to fetch champions";
			});
	},
});

export const {
	setSelectedChampion1,
	setSelectedChampion2,
	clearSelectedChampions,
} = championsSlice.actions;

export default championsSlice.reducer;
