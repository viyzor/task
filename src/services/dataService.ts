import { Reading } from '../models/reading';
import { addReadingToDB, getReadingFromDB } from '../database/database';

export const addReading = (rawData: string[]): { success: boolean } => {
    const parsedData: Reading[] = [];

    for (const line of rawData) {
        const [timestamp, name, value] = line.split(' ');

        if (!timestamp || !name || !value || isNaN(Number(timestamp)) || isNaN(Number(value))) {
            return { success: false };
        }

        parsedData.push({
            timestamp: Number(timestamp),
            name,
            value: Number(value),
        });
    }

    addReadingToDB(parsedData);
    return { success: true };
};

export const getReadingsInRange = (from: string, to: string) => {
    // Преобразуем строки дат в начало и конец дня
    const fromDate = new Date(from);
    const toDate = new Date(to);

    console.log('Filtering from:', fromDate.getTime(), 'to:', toDate.getTime());

    return getReadingFromDB(fromDate, toDate);
};