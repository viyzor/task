import { Reading } from '../models/reading';
import { addReadingToDB, getReadingFromDB } from '../database/database';

/**
 * Adds readings from raw data to the database.
 * Returns { success: true } if data is valid, otherwise { success: false }.
 */
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

/**
 * Gets readings from the database for the given date range.
 */
export const getReadingsInRange = (from: string, to: string) => {
    const fromDate = new Date(from);
    const toDate = new Date(to);

    return getReadingFromDB(fromDate, toDate);
};