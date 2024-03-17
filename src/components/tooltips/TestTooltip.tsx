import { Tooltip } from '@ark-ui/solid';
import { Portal } from 'solid-js/web';

export default function ToastTooltip(props: { children: any }) {
	return (
		<Tooltip.Root openDelay={250} closeDelay={250} positioning={{ placement: 'top' }}>
			<Tooltip.Trigger>{props.children}</Tooltip.Trigger>
			<Portal>
				<Tooltip.Positioner>
					<Tooltip.Content class="bg-blue-500 text-white rounded-md p-2">Test tooltip</Tooltip.Content>
				</Tooltip.Positioner>
			</Portal>
		</Tooltip.Root>
	);
}
