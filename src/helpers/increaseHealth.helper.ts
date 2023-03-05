export const increaseHeroCurrentHealth = (setState: any, number: number) => {
    setState((health: number) => health + number);
};
