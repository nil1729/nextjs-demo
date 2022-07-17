import { buildFilePath, getFileContent } from '../../../helpers/file-util';
import fs from 'fs';

export default function NewsletterHandler(req, res) {
	if (req.method === 'POST') {
		const { email_address } = req.body;
		const newsletter_email_list = getFileContent(buildFilePath('newsletter'));
		newsletter_email_list.push(email_address);
		fs.writeFileSync(buildFilePath('newsletter'), JSON.stringify(newsletter_email_list));
		return res.status(200).json({ message: 'Successfully registered for newsletter' });
	} else return res.status(503).json({ message: 'API not implemented' });
}
