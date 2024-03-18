import toast from 'solid-toast';
import { Motion } from 'solid-motionone';

export default function ToastButton() {
	return (
		<Motion animate={{ opacity: [0, 1] }} transition={{ duration: 1, easing: 'ease-in-out' }}>
			<button onClick={() => toast.success('Here is your toast.')} class="font-bold underline">
				Show Toast
			</button>
		</Motion>
	);
}
