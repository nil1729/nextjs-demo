import fs from 'fs';
import path from 'path';

export function buildFilePath(filename) {
	return path.join(process.cwd(), '_data', `${filename}.json`);
}

export function getFileContent(file_path) {
	return JSON.parse(fs.readFileSync(file_path, 'utf-8').toString());
}
