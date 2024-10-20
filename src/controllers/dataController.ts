import { Request, Response } from 'express';
import { addReading, getReadingsInRange } from '../services/dataService';

export const postData = (req: Request, res: Response) => {
    const rawData = req.body.split('\n');
    const result = addReading(rawData);

    if (!result.success) {
        return res.status(400).json({ success: false });
    }

    return res.json({ success: true });
};

export const getData = (req: Request, res: Response) => {
    const { from, to } = req.query;
    const data = getReadingsInRange(from as string, to as string);

    return res.json(data);
};