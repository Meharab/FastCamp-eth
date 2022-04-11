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
	Button,
} from '../ComponentStyles';

const BalanceOf = () => {
	const { address } = useEthereum();
	const { BalanceOf } = useERC20();
	const [account, setAccount] = useState(address);
	const { data, isLoading } = BalanceOf(account!);
	const [hidden, setHidden] = useState(false);

	return (
		<Box>
			<h4>Amount Of cards</h4>
			<p>Get the number of cards provided to an address</p>
			<Accordion.Root type="single" collapsible>
				<Item value="item-1">
					<TriggerContainer>
						<Trigger disabled={!address }>
							{!address
								? 'Connect Wallet'
								: 'Amount Of cards'}
						</Trigger>
					</TriggerContainer>
					<Parameters>
						<Content>
							<Input
								placeholder="Account"
								onChange={(e) => setAccount(e.target.value)}
							/>

							<Button onClick={() => setHidden((p) => !p)}>
								{!address ? 'Connect Wallet' : isLoading ? 'fetching ...' : !hidden ? 'Amount Of cards' : data.toString()}
							</Button>
						</Content>
					</Parameters>
				</Item>
			</Accordion.Root>
		</Box>
	);
};

export default BalanceOf;
