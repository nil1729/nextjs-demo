import { buildFilePath, getFileContent } from '../../../helpers/file-util';
import fs from 'fs';

export default function commentHandler(req, res) {
	if (req.method === 'POST') {
		const { text, name, email_address, event_id } = req.body;
		const comment = {
			text: text,
			name: name,
			email_address: email_address,
			id: new Date().toISOString(),
			event_id: event_id,
		};
		const comment_list = getFileContent(buildFilePath('comments'));
		comment_list.push(comment);
		fs.writeFileSync(buildFilePath('comments'), JSON.stringify(comment_list));
		return res.status(200).json({ message: 'Comment added successfully' });
	} else return res.status(503).json({ message: 'API not implemented' });
}
