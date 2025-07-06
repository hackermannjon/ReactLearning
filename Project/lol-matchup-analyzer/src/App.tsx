import { Route, Routes } from "react-router-dom";
import { ChampionDetailPage } from "./pages/ChampionDetailPage";
import { MatchupPage } from "./pages/MatchupPage";

function App() {
	return (
		<Routes>
			<Route path="/" element={<MatchupPage />} />
			<Route
				path="/champion/:championId"
				element={<ChampionDetailPage />}
			/>
		</Routes>
	);
}

export default App;
