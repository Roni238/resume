export default async (req, res) => {
    try {
      const response = await fetch('https://light-food.ru/api/visitin?site=Резюме', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch from external API');
      }
  
      const data = await response.json();
      res.status(200).json({ message: 'Notification sent', data });
    } catch (error) {
      res.status(500).json({ error: 'Failed to send notification', details: error.message });
    }
  };
  