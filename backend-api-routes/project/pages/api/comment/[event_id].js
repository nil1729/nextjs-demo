import { buildFilePath, getFileContent } from '../../../helpers/file-util';
import fs from 'fs';

export default function getCommentsHandler(req, res) {
	if (req.method === 'GET') {
		const { event_id } = req.query;
		const comment_list = getFileContent(buildFilePath('comments'));
		const filtered_comments = comment_list.filter((item) => item.event_id === event_id);
		return res.status(200).json(filtered_comments);
	} else return res.status(503).json({ message: 'API not implemented' });
}
