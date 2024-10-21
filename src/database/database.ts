import { Reading } from '../models/reading';

let readings: Reading[] = [];

/**
 * Adds a list of readings to the in-memory database.
 */
export const addReadingToDB = (data: Reading[]): void => {
  readings.push(...data);
  console.log('Current readings:', readings);
};

/**
 * Retrieves readings from the in-memory database within the given date range.
 */
export const getReadingFromDB = (from: Date, to: Date): Reading[] => {
  const fromTimestamp = from.getTime(); // Using time in milliseconds
  const toTimestamp = to.getTime();     // Using time in milliseconds

  console.log('Filtering from:', fromTimestamp, 'to:', toTimestamp);

  return readings.filter(reading => {
    const readingTimestamp = reading.timestamp * 1000;  // Convert timestamp to milliseconds
    return readingTimestamp >= fromTimestamp && readingTimestamp <= toTimestamp;
  });
};