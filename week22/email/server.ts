import express from 'express';
// אנחנו מייבאים את express כדיפולט, ואת הטיפוסים בנפרד (רק עבור TS)
import type { Request, Response } from 'express';
// 1. מבנה הנתונים שאנחנו מצפים לקבל מהמשתמש (בפורמט שלו)
interface IncomingNotification {
  email: string;
  message: string;
  sendEmail: boolean;
  sendWhatsApp: boolean;
  phone?: string;
  subject?: string;
  userDate: string; // הפורמט של המשתמש: MM/DD/YYYY HH:mm
}

const app = express();
app.use(express.json()); // מאפשר לשרת לקרוא JSON מהבקשות שנשלחות אליו

/**
 * פונקציית ההמרה שכבר בדקנו (עכשיו כחלק מהשרת)
 */
function parseUserDateTime(userStr: string): string {
  const [datePart, timePart] = userStr.split(' ');
  const [month, day, year] = datePart.split('/');
  const [hours, minutes] = timePart.split(':');

  const dateObj = new Date(
    Number(year),
    Number(month) - 1,
    Number(day),
    Number(hours),
    Number(minutes)
  );

  return dateObj.toISOString();
}

/**
 * האנדפוינט (Endpoint) החדש שלך
 */
app.post('/api/schedule-notification', async (req: Request, res: Response) => {
  try {
    // 1. הדפסה לטרמינל ברגע שמישהו שלח בקשה - כדי שתראה שזה קרה!
    console.log(`📩 התקבלה בקשה חדשה עבור: ${req.body.email}`);
    console.log(`⏰ זמן מקורי מהמשתמש: ${req.body.userDate}`);

    const data: IncomingNotification = req.body;

    // 2. ביצוע ההמרה ל-ISO
    const isoDate = parseUserDateTime(data.userDate);
    console.log(`🔄 הומר לפורמט n8n (UTC): ${isoDate}`);

    const n8nPayload = {
      email: data.email,
      message: data.message,
      sendEmail: data.sendEmail,
      sendWhatsApp: data.sendWhatsApp,
      phone: data.phone,
      subject: data.subject,
      scheduledTime: isoDate 
    };

    // 3. שליחה ל-n8n
    const n8nResponse = await fetch('http://localhost:5678/webhook/send-message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(n8nPayload),
    });

    if (n8nResponse.ok) {
      console.log('🚀 n8n אישר את קבלת התזמון'); // עוד הדפסה כדי שתהיה רגוע
      res.status(200).json({ success: true, message: 'Notification scheduled!' });
    } else {
      console.error('❌ n8n החזיר שגיאה');
      res.status(500).json({ success: false, error: 'n8n error' });
    }

  } catch (error) {
    console.error('❌ תקלה בשרת:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});
// הפעלת השרת על פורט 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 השרת רץ בכתובת: http://localhost:${PORT}`);
});