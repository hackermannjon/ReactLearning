import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchAllChampions } from "../../redux/championsSlice";

export const useMatchupPageViewModel = () => {
	const dispatch = useAppDispatch();
	const { loading, error } = useAppSelector((state) => state.champions);

	useEffect(() => {
		dispatch(fetchAllChampions());
	}, [dispatch]);

	return {
		loading,
		error,
	};
};
