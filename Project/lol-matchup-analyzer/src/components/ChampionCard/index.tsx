import React from "react";
import { useNavigate } from "react-router-dom";
import { Champion } from "../../models/champion.model";
import * as S from "./style";
import { useChampionCardViewModel } from "./viewModel";

interface ChampionCardProps {
	champion: Champion;
	onClick?: (champion: Champion) => void;
	enableNavigation?: boolean;
}

export const ChampionCard: React.FC<ChampionCardProps> = (props) => {
	const { champion, imageUrl } = useChampionCardViewModel(props.champion);
	const navigate = useNavigate();

	const handleClick = () => {
		if (props.onClick) {
			props.onClick(champion);
		} else if (props.enableNavigation) {
			navigate(`/champion/${champion.id}`);
		}
	};

	const isClickable = props.onClick || props.enableNavigation;

	return (
		<S.Container
			onClick={isClickable ? handleClick : undefined}
			style={{ cursor: isClickable ? "pointer" : "default" }}
		>
			<S.Image src={imageUrl} alt={champion.name} />
			<S.Info>
				<S.Name>{champion.name}</S.Name>
				<S.Title>{champion.title}</S.Title>
				<S.TagsContainer>
					{champion.tags.map((tag) => (
						<S.Tag key={tag}>{tag}</S.Tag>
					))}
				</S.TagsContainer>
			</S.Info>
		</S.Container>
	);
};
