import formidable from 'formidable';
import { NextRequest } from 'next/server';

export function parseForm(req: NextRequest): Promise<{ fields: any; files: any }> {
    return new Promise((resolve, reject) => {
        const form = formidable({ multiples: true, keepExtensions: true });
        form.parse(req as any, (err, fields, files) => {
            if (err) reject(err);
            resolve({ fields, files });
        });
    });
}