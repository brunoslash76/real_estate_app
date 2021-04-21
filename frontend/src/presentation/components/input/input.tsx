import React, { MouseEventHandler, useRef } from 'react';
import Search from '@/presentation/components/icons/search.png';
import Styles from './input-styles.scss';

type Props = {
	state: any;
	setState: any;
	handleClick?: any;
	placeholder: string;
	name: string;
	clickType?: "button" | "submit" | "reset"
};

const Input: React.FC<Props> = ({
	state,
	setState,
	placeholder,
	handleClick,
	name,
	clickType,
}: Props) => {
	const inputRef = useRef<HTMLInputElement>();
	const handleChange = (event: React.FocusEvent<HTMLInputElement>): void => {
		setState({
			...state,
			[event.target.name]: event.target.value,
		});
	};

	return (
		<div className={Styles.inputContainer}>
			<div className={Styles.inputWrap}>
				<input
					ref={inputRef}
					placeholder=' '
					onChange={handleChange}
					name={name}
				/>
				<label onClick={() => inputRef.current.focus()}>
					{placeholder}
				</label>
			</div>
			<div className={Styles.icon}>
				<button
					type={clickType}
					className={Styles.button}
					onClick={handleClick}
				>
					<img src={Search} />
				</button>
			</div>
		</div>
	);
};

export default Input;
