// 1. הגדרת המבנה - שמנו סימן שאלה (?) ליד שדות שיכולים להיות ריקים
interface N8nPayload {
  email: string;
  message: string;
  sendEmail: boolean;
  sendWhatsApp: boolean;
  phone?: string;    // אופציונלי - לא חייב אם שולחים רק מייל
  subject?: string;  // אופציונלי - לא חייב אם שולחים רק וואטסאפ
  scheduledTime?: string;
}

/**
 * פונקציה לשליחת הודעות דרך n8n
 */
export const sendNotification = async (payload: N8nPayload): Promise<void> => {
  // כתובת ה-Webhook של n8n במצב בדיקה
  const webhookUrl = 'http://localhost:5678/webhook/send-message';

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      console.log('✅ הבקשה נשלחה ל-n8n בהצלחה');
    } else {
      const errorData = await response.text();
      console.error('❌ n8n החזיר שגיאה:', response.status, errorData);
    }
  } catch (error) {
    console.error('❌ שגיאת תקשורת (וודא ש-n8n דולק):', error);
  }
};

/**
 * פונקציה שלוקחת טקסט מהמשתמש (MM/DD/YYYY HH:mm) 
 * ומחזירה תאריך ש-n8n יבין בדיוק לפי השעה בישראל
 */
function parseUserDateTime(userStr: string): string {
  // נניח המשתמש הכניס: "03/25/2026 16:00"
  const [datePart, timePart] = userStr.split(' '); // פיצול לתאריך ושעה
  const [month, day, year] = datePart.split('/');   // פיצול יום/חודש/שנה
  const [hours, minutes] = timePart.split(':');     // פיצול שעה/דקה

  // יצירת אובייקט תאריך (חודש ב-JS מתחיל מ-0, לכן פחות 1)
  const dateObj = new Date(
    Number(year),
    Number(month) - 1,
    Number(day),
    Number(hours),
    Number(minutes)
  );

  // החזרה בפורמט ISO - זה הפורמט ששלחת קודם וראינו ש-n8n מבין מעולה
  return dateObj.toISOString();
}

// --- ככה אתה משתמש בזה בתוך ה-sendNotification שלך ---

const userInput = "03/25/2026 15:59"; // זה מגיע מהמשתמש שלך (Input, Form וכו')

sendNotification({
  email: "davidkobyof@gmail.com",
  subject: "הודעה מתוזמנת",
  message: "היי, זו הודעה שתוזמנה על ידי המשתמש!",
  sendEmail: true,
  sendWhatsApp: false,
  phone: "972584539144",
  scheduledTime: parseUserDateTime(userInput) // כאן קורה הקסם
});