export const toHoursAndMinutes = (totalMinutes: number): string => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ''}`;
};

export const validGenres = (genres: Array<{
    id: number,
    name: string
}>): number[] => {
    return genres.reduce((res: number[], genre) => res.concat(genre.id), []);
};
