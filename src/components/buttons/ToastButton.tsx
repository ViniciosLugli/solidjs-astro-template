import toast from 'solid-toast';

export default function ToastButton() {
	return (
		<button onClick={() => toast.success('Here is your toast.')} class="font-bold underline">
			Show Toast
		</button>
	);
}
