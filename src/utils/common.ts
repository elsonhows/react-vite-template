export async function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function loaderDelayFn<T>(fn: (...args: Array<unknown>) => Promise<T> | T) {
	const delay = Number(sessionStorage.getItem('loaderDelay') ?? 0);
	const delayPromise = new Promise((r) => setTimeout(r, delay));

	await delayPromise;
	const res = await fn();

	return res;
}
