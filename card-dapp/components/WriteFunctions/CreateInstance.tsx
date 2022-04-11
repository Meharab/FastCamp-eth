import { useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { useEthereum } from '@decentology/hyperverse-ethereum';
import { useERC20 } from '@decentology/hyperverse-evm-erc20';
import {
	Box,
	Item,
	TriggerContainer,
	Trigger,
	Parameters,
	Input,
	Content,
	Button
} from '../ComponentStyles';

const CreateInstance = () => {
	const { address } = useEthereum();
	const { NewInstance, CheckInstance } = useERC20();
	const { data: instance } = CheckInstance(address);
	const { mutate, isLoading } = NewInstance();
	const [tokenName, setTokenName] = useState('');
	const [tokenSymbol, setTokenSymbol] = useState('');
	const [tokenDecimals, setTokenDecimals] = useState(0);

	const createNewInstance = async () => {
		try {
			mutate({
				account: address!,
				name: tokenName,
				symbol: tokenSymbol,
				decimal: tokenDecimals
			});
		} catch (error) {
			throw error;
		}
	};

	return (
		<Box>
			<h4>New Card</h4>
			<p>Create your own business card</p>
			<Accordion.Root type="single" collapsible>
				<Item value="item-1">
					<TriggerContainer>
						<Trigger disabled={!address || instance}>
							{!address
								? 'Connect Wallet'
								: instance
								? 'You already have a card'
								: 'Create New Card'}
						</Trigger>
					</TriggerContainer>
					<Parameters>
						<Content>
							<Input
								placeholder="Your Name"
								onChange={(e) => setTokenName(e.target.value)}
							/>
							<Input
								placeholder="Your Email"
								onChange={(e) => setTokenSymbol(e.target.value)}
							/>
							<Input
								type="number"
								min="0"
								placeholder="Your 1 digit Number"
								onChange={(e) => setTokenDecimals(e.currentTarget.valueAsNumber)}
							/>
							<Button onClick={createNewInstance}>
								{!address
									? 'Connet Wallet'
									: isLoading
									? 'txn loading ...'
									: 'Create New Card'}
							</Button>
						</Content>
					</Parameters>
				</Item>
			</Accordion.Root>
		</Box>
	);
};

export default CreateInstance;
