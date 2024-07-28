import { Loader } from '@mantine/core';

export function Spinner({ show }: { show?: boolean }) {
	return show ? <Loader mx="sm" color="rgb(138,117,255)" size="sm" type="bars" /> : <div />;
}
