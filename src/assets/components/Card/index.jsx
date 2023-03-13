import { Button, Typography } from '@mui/material';
import styles from './Card.module.scss';
import {
	AiFillDislike,
	AiFillLike,
	AiOutlineDislike,
	AiOutlineLike,
} from 'react-icons/ai';
import { useState } from 'react';
const Card = ({ title, description, image, link, like, dislike }) => {
	const [likeCount, setLikeCount] = useState(like);
	const [dislikeCount, setDislikeCount] = useState(dislike);

	function handleLike() {
		return setLikeCount(likeCount + 1);
	}

	function handleDislike() {
		return setDislikeCount(dislikeCount + 1);
	}

	return (
		<div className={styles.card}>
			<div className={styles.cardImage}>
				<img src={link} alt={image} />
			</div>
			<div className={styles.cardContent}>
				<Typography
					variant="h5"
					component="div"
					gutterBottom
					textAlign={'center'}
					color={'#5e60ce'}
				>
					{title}
				</Typography>
				<Typography
					variant="subtitle2"
					component="div"
					gutterBottom
					textAlign={'center'}
					color={'#ffffff'}
				>
					{description}
				</Typography>
			</div>
			<div className={styles.cardButton}>
				<div className={styles.cardButtonLike}>
					<Button variant="text" color="success" onClick={handleLike}>
						<AiOutlineLike size={25} />
					</Button>
					<Typography
						variant="subtitle2"
						component="div"
						gutterBottom
						fontSize={'1.2rem'}
						color={'#ffffff'}
					>
						{likeCount}
					</Typography>
				</div>
				<div className={styles.cardButtonDislike}>
					<Button variant="text" color="error" onClick={handleDislike}>
						<AiOutlineDislike size={25} />
					</Button>
					<Typography
						variant="subtitle2"
						component="div"
						gutterBottom
						fontSize={'1.2rem'}
						color={'#ffffff'}
					>
						{dislikeCount}
					</Typography>
				</div>
			</div>
		</div>
	);
};

export default Card;
