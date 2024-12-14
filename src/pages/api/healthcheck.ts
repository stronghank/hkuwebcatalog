export default function handler(res: any) {
  res.status(200).json({ message: 'Health Check Succeeded!' });
}
