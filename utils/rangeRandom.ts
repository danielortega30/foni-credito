export const getRandomRange = () => {
    const start = Math.floor(Math.random() * 90);
    const end = start + 100;
    return { start, end };
};