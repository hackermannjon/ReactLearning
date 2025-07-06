import { useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Champion } from "../../models/champion.model";
import {
	setSelectedChampion1,
	setSelectedChampion2,
} from "../../redux/championsSlice";

export const useMatchupSelectorViewModel = () => {
	const dispatch = useAppDispatch();
	const { champions, selectedChampion1, selectedChampion2, loading } =
		useAppSelector((state) => state.champions);

	const [searchTerm, setSearchTerm] = useState("");
	const [selectingSlot, setSelectingSlot] = useState<
		"champion1" | "champion2" | null
	>(null);

	const filteredChampions = useMemo(() => {
		if (!searchTerm) return champions;
		return champions.filter(
			(champion) =>
				champion.name
					.toLowerCase()
					.includes(searchTerm.toLowerCase()) ||
				champion.tags.some((tag) =>
					tag.toLowerCase().includes(searchTerm.toLowerCase())
				)
		);
	}, [champions, searchTerm]);

	const handleChampionSelect = (champion: Champion) => {
		if (selectingSlot === "champion1") {
			dispatch(setSelectedChampion1(champion));
		} else if (selectingSlot === "champion2") {
			dispatch(setSelectedChampion2(champion));
		}
		setSelectingSlot(null);
		setSearchTerm("");
	};

	const handleSlotClick = (slot: "champion1" | "champion2") => {
		setSelectingSlot(selectingSlot === slot ? null : slot);
		setSearchTerm("");
	};

	const isSelecting = selectingSlot !== null;

	return {
		champions: filteredChampions,
		selectedChampion1,
		selectedChampion2,
		loading,
		searchTerm,
		selectingSlot,
		isSelecting,
		setSearchTerm,
		handleChampionSelect,
		handleSlotClick,
	};
};
