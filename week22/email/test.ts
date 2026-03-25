// test.ts
// סקריפט קטן שבודק אם השרת שלך (בפורט 3000) יודע לדבר עם n8n

const testSchedule = async () => {
  const serverUrl = 'http://localhost:3000/api/schedule-notification';

  // 1. נגדיר זמן של 2 דקות מהרגע הנוכחי של המחשב שלך
  const now = new Date();
  now.setMinutes(now.getMinutes() + 2);
  
  // נכין את הפורמט שהשרת שלך מצפה לו: MM/DD/YYYY HH:mm
  const formattedDate = `${String(now.getMonth() + 1).padStart(2, '0')}/${String(now.getDate()).padStart(2, '0')}/${now.getFullYear()} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

  const payload = {
    email: "davidkobyof@gmail.com",
    message: "הודעת בדיקה מהסקריפט! הכל עובד!",
    sendEmail: true,
    sendWhatsApp: true,
    phone: "972584539144",
    subject: "בדיקת מערכת מקצה לקצה",
    userDate: formattedDate // הזמן הדינמי שיצרנו
  };

  console.log(`📡 שולח בקשת בדיקה לשרת עבור זמן: ${formattedDate}...`);

  try {
    const response = await fetch(serverUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    
    if (response.ok) {
      console.log('✅ השרת קיבל את הבקשה והחזיר תשובה חיובית:');
      console.log(result);
      console.log('\n💡 עכשיו בדוק את הטרמינל של השרת ואת ה-Executions ב-n8n!');
    } else {
      console.error('❌ השרת החזיר שגיאה:', result);
    }
  } catch (error) {
    console.error('❌ שגיאת תקשורת עם השרת (וודא ש-tsx server.ts רץ):', error);
  }
};

testSchedule();