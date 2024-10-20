import { Reading } from '../models/reading';

let readings: Reading[] = [];

export const addReadingToDB = (data: Reading[]): void => {
  readings.push(...data);
  console.log('Current readings:', readings);
};

export const getReadingFromDB = (from: Date, to: Date): Reading[] => {
  const fromTimestamp = from.getTime(); // Используем время в миллисекундах
  const toTimestamp = to.getTime();     // Используем время в миллисекундах

  console.log('Filtering from:', fromTimestamp, 'to:', toTimestamp);

  return readings.filter(reading => {
    const readingTimestamp = reading.timestamp * 1000;  // Преобразуем timestamp данных в миллисекунды для точного сравнения
    console.log('Reading timestamp:', readingTimestamp);
    return readingTimestamp >= fromTimestamp && readingTimestamp <= toTimestamp;
  });
};