/**
 * Simulates network delay for mock APIs
 * @param min Minimum delay in ms (default 300)
 * @param max Maximum delay in ms (default 500)
 */
export async function mockDelay(min = 300, max = 500): Promise<void> {
    const delay = Math.floor(Math.random() * (max - min + 1)) + min;
    await new Promise((resolve) => setTimeout(resolve, delay));
}
