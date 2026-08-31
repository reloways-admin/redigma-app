/* Case study copy, kept out of the component so the two languages sit side by
   side and can be read against each other. German falls back to English. */

export type CaseCopy = {
  kicker: string;
  title: string;
  lead: string;
  meta: { label: string; value: string }[];
  toolsLabel: string;
  heroAlt: string;
  problem: {
    number: string; title: string;
    p1: string; p2: string; p3: string; p4: string; p5: string; quote: string;
    figureAlt: string; figureCaption: string;
  };
  audience: {
    number: string; title: string; p1: string;
    figureAlt: string; figureCaption: string;
  };
  built: {
    number: string; title: string; intro: string;
    blocks: { heading: string; body: string; figure: string }[];
    closing: string;
  };
  role: {
    number: string; title: string; intro: string;
    items: string[]; closing: string;
  };
  status: {
    number: string; title: string;
    p1: string; p2: string; figure: string;
  };
};

const en: CaseCopy = {
  kicker: 'Case study',
  title: 'Designing a Relocation Platform from the Ground Up, While Relocating Myself',
  lead: 'Reloways began as a personal response to moving country myself. I designed and built a platform that brings practical knowledge, trusted local services, and community into one place, while living the problem it solves.',
  meta: [
    { label: 'Type', value: 'Product Design + Full-Stack Build' },
    { label: 'My Role', value: 'Sole designer and co-developer' },
    { label: 'Platform', value: 'Web · Hebrew / English' },
    { label: 'Status', value: 'MVP, live in development' },
  ],
  toolsLabel: 'Tools',
  heroAlt: 'The Reloways homepage open on a laptop in a Berlin cafe',
  problem: {
    number: '01',
    title: 'The Problem',
    p1: 'Relocation is not one problem. It is dozens of small ones that arrive at different times, in an order nobody really tells you about: registering with the city, finding a flat, working out which insurance you need, opening a bank account, finding a doctor, a tax adviser, a language teacher, or a tradesperson you can actually trust.',
    p2: 'The information exists. It is spread across Google, Facebook groups, WhatsApp threads, and government websites, often in German. Every source hands you a different piece of the picture, and assumes you already know which piece you are looking for.',
    p3: 'Going through it myself, what I wanted was one place that answered plainly in my own language, helped me find services and people worth trusting, and told me what I had to do now and what came after it.',
    p4: 'Something else was missing too: the knowledge that never reaches a guide. The answers from people going through the same thing right now. What has changed recently, who they recommend, what worked for them, and what is worth knowing before you start.',
    p5: 'Moving to Berlin myself, I kept looking up the same things over and over, jumping between sources to assemble the picture on my own.',
    quote: 'The real problem was not a lack of information. It was that no single place connected the information, the people, and the services, and helped you work out what to do, when to do it, and who to trust.',
    figureAlt: 'A collage of real questions from Israeli expat groups in Berlin about permits, apartments, licences, and finding Hebrew-speaking professionals',
    figureCaption: 'Where did people look before? “Anyone know a Hebrew-speaking accountant?” “How long does the residence permit take?” “Looking for a plumber, any recommendations?” The same questions come round again and again in the groups, but the answers stay buried in the thread they were asked in. The knowledge exists, it is just hard to find again at the moment you actually need it.',
  },
  audience: {
    number: '02',
    title: 'Who It Is For',
    p1: 'Reloways is for people working out how to live in a city they have just arrived in, in the first months when nothing is familiar and every decision carries a risk they cannot size. I started with Israelis moving to Berlin because that was the move I was making and the community I could reach, but the architecture was built for any nationality and city pair from the start. The first audience is a starting point, not the definition of the product.',
    figureAlt: 'Six Reloways personas, three service seekers and three service providers, each with bio, goals, frustrations, and needs',
    figureCaption: 'Six personas: the people arriving, and the people already there who can help them.',
  },
  built: {
    number: '03',
    title: 'What I Built',
    intro: 'Three decisions carry the product. Each one came out of the problem above rather than from a feature list.',
    blocks: [
      {
        heading: 'A platform that understands where you are',
        body: 'Most relocation sites open on a directory and leave you to work out which part applies to you. Reloways starts by learning about you instead, so it can put the right content and the right route in front of your particular move. It opens with where you are, what your situation is, and whether you have landed yet, and what it learns shapes everything after it. Someone with a visa appointment in three days and someone still weighing up whether to move do not get the same product. The system routes you: it shows you the path and what to do next.',
        figure: 'Onboarding wizard, two or three real steps',
      },
      {
        heading: 'A checklist that knows what comes next',
        body: 'A relocation contains hundreds of tasks and almost none of them matter at the same moment. The checklist is personalised and ordered: grouped by when a thing happens, ranked by how urgent it is, and aware of which task blocks which. Registering your address sits under almost everything else, so it is never something you scroll past. The complexity stays inside the system instead of landing on the user.',
        figure: 'The task checklist, showing phases and urgency',
      },
      {
        heading: 'Knowledge connected to action',
        body: 'A guide that only explains leaves you to act somewhere else. Every article carries its task inside it, at the point in the text where you would actually do the thing. Reading and doing happen in one place, which is what turns a pile of content into a product.',
        figure: 'An article with an inline task card',
      },
    ],
    closing: 'Alongside these sits a directory of local businesses, services, and the people behind them. It is the part that answers the third question, the one about who to trust, and it is the reason the product is more than a set of instructions.',
  },
  role: {
    number: '04',
    title: 'My Role',
    intro: 'I designed Reloways from the ground up: from defining what the product should be and how its information is structured, through the UX, the visual language, and the interaction patterns, to writing a good deal of the code.',
    items: [
      'Product strategy and definition: what it is, what it is not, and what ships first',
      'Research: conversations with people who had already made the move, which is where the ordering came from. A large part of it now runs through the podcast, a marketing arm of Reloways that doubles as a standing source of first-hand accounts',
      'Information architecture: the task model, its dependencies, and the content structure beneath it',
      'User flows, UX and UI, and the design system that keeps them consistent',
      'Prototyping, then the frontend build, including a Hebrew and English interface that mirrors properly rather than reading as a translation',
      'Working with the developer day to day, so decisions were made against what could actually be built',
    ],
    closing: 'Two things have been hard. Establishing the real order of German bureaucracy accurately enough to encode it, and then making something that layered feel obvious to use. The second one is not finished and probably never is. I am still talking to users and listening for where the real needs and the real friction sit.',
  },
  status: {
    number: '05',
    title: 'Where It Stands',
    p1: 'Reloways is live and still being built. Onboarding, the task system, the knowledge centre, and the directory of local businesses and services all work, and the library of articles and podcast episodes grows every week. What began as a personal response to one move has grown into a platform holding practical knowledge, local services, and the community around both.',
    p2: 'The current work is hardening the product and shipping features lean and fast against what the Israeli community in Berlin is actually asking for, which is the audience it is being proven on before it extends. It is a product still in motion rather than a finished piece of work, and it gets a little larger every day.',
    figure: 'The live product on a phone. Two or three real screens, not a mockup.',
  },
};

const he: CaseCopy = {
  kicker: 'קייס סטדי',
  title: 'איך עיצבתי פלטפורמת רילוקיישן מאפס,\nבזמן שחוויתי את הבעיה בעצמי',
  lead: 'Reloways התחיל מתוך חוויית הרילוקיישן האישית שלי. בזמן שחוויתי בעצמי את האתגרים של מעבר למדינה חדשה, עיצבתי ובניתי פלטפורמה שמרכזת ידע מעשי, נותני שירות מקומיים שאפשר לסמוך עליהם וקהילה - כדי לעזור לאחרים לנווט את החיים במקום חדש.',
  meta: [
    { label: 'סוג', value: 'עיצוב מוצר ובנייה מלאה' },
    { label: 'התפקיד שלי', value: 'מעצב יחיד ושותף לפיתוח' },
    { label: 'פלטפורמה', value: 'ווב · עברית / אנגלית' },
    { label: 'סטטוס', value: 'MVP, חי ובפיתוח' },
  ],
  toolsLabel: 'כלים',
  heroAlt: 'דף הבית של Reloways פתוח על מחשב נייד בבית קפה בברלין',
  problem: {
    number: '01',
    title: 'הבעיה',
    p1: 'רילוקיישן הוא לא בעיה אחת. הוא עשרות בעיות קטנות שמגיעות בזמנים שונים ובסדר שאף אחד לא באמת מספר לך עליו: להירשם בעירייה, למצוא דירה, להבין איזה ביטוח צריך, לפתוח חשבון בנק, למצוא רופא, יועץ מס, מורה לשפה או בעל מקצוע שאפשר באמת לסמוך עליו.',
    p2: 'המידע קיים. הוא מפוזר בין Google, קבוצות Facebook, שרשורי WhatsApp ואתרים ממשלתיים, לעיתים קרובות בגרמנית. וכל מקור נותן לך חתיכה אחרת מהתמונה, ומניח שאתה כבר יודע מה אתה מחפש.',
    p3: 'כמי שעבר את התהליך בעצמי, חיפשתי מקום אחד שייתן לי תשובות פשוטות בעברית, יעזור לי למצוא שירותים ואנשים שאפשר לסמוך עליהם, ויגיד לי מה אני צריך לעשות עכשיו ומה יבוא אחר כך.',
    p4: 'אבל היה חסר עוד משהו: הידע שלא נמצא במדריכים. התשובות של אנשים שעוברים את אותו הדבר ממש עכשיו: מה השתנה לאחרונה, על מי הם ממליצים, מה עבד להם ומה כדאי לדעת לפני שמתחילים.',
    p5: 'בזמן המעבר שלי לברלין מצאתי את עצמי מחפש שוב ושוב את אותם הדברים, וקופץ בין מקורות שונים כדי לחבר בעצמי את התמונה.',
    quote: 'הבעיה האמיתית לא הייתה חוסר במידע. היא הייתה שאין מקום אחד שמחבר בין המידע, האנשים והשירותים, ועוזר להבין מה לעשות, מתי לעשות את זה, ובמי אפשר לבטוח.',
    figureAlt: 'קולאזְ של שאלות אמיתיות מקבוצות ישראלים בברלין על אישורים, דירות, רישיונות ומציאת בעלי מקצוע דוברי עברית',
    figureCaption: 'איפה אנשים חיפשו קודם? “מישהו מכיר רואה חשבון דובר עברית?” “כמה זמן לוקח לקבל אישור שהייה?” “מחפש אינסטלטור, יש לכם המלצות?” אותן שאלות חוזרות שוב ושוב בקבוצות, אבל התשובות נשארות קבורות בשרשור שבו נשאלו. הידע קיים, פשוט קשה למצוא אותו שוב כשבאמת צריך אותו.',
  },
  audience: {
    number: '02',
    title: 'למי זה',
    p1: 'Reloways מיועד לאנשים שמנסים להבין איך חיים בעיר שהם בדיוק הגיעו אליה, בחודשים הראשונים שבהם שום דבר לא מוכר וכל החלטה נושאת סיכון שהם לא יודעים להעריך את גודלו. התחלתי עם ישראלים שעוברים לברלין כי זה היה המעבר שאני עשיתי והקהילה שהייתה לי גישה אליה, אבל הארכיטקטורה נבנתה מההתחלה לכל צירוף של לאום ועיר. הקהל הראשון הוא נקודת התחלה, לא ההגדרה של המוצר.',
    figureAlt: 'שש פרסונות של Reloways, שלושה מחפשי שירות ושלושה נותני שירות, לכל אחת ביוגרפיה, מטרות, תסכולים וצרכים',
    figureCaption: 'שש פרסונות: האנשים שמגיעים, והאנשים שכבר שם ויכולים לעזור להם.',
  },
  built: {
    number: '03',
    title: 'מה בניתי',
    intro: 'שלוש החלטות נושאות את המוצר. כל אחת מהן נבעה מהבעיה שלמעלה ולא מרשימת פיצ׳רים.',
    blocks: [
      {
        heading: 'פלטפורמה שמבינה איפה אתה נמצא',
        body: 'רוב אתרי הרילוקיישן נפתחים על אינדקס ומשאירים לך להבין איזה חלק רלוונטי לך. Reloways מתחיל בללמוד עליך במקום, כדי להציב מולך את התוכן ואת הדרך שמתאימים למעבר הספציפי שלך. הוא נפתח בשאלות איפה אתה, מה המצב שלך והאם כבר נחתת, ומה שהוא לומד מעצב את כל מה שבא אחריו. מישהו עם תור לוויזה בעוד שלושה ימים ומישהו שעדיין מתלבט אם לעבור לא מקבלים את אותו מוצר. המערכת מנתבת אותך: היא מראה לך את הדרך ומה לעשות עכשיו.',
        figure: 'אונבורדינג, שניים שלושה מסכים אמיתיים',
      },
      {
        heading: 'צ׳קליסט שיודע מה בא אחר כך',
        body: 'רילוקיישן מכיל מאות משימות וכמעט אף אחת מהן לא רלוונטית באותו רגע. הצ׳קליסט מותאם אישית ומסודר: מקובץ לפי מתי דבר קורה, מדורג לפי כמה הוא דחוף, ומודע לאיזו משימה חוסמת איזו. רישום הכתובת יושב מתחת כמעט לכל השאר, אז הוא אף פעם לא משהו שגוללים מעליו. המורכבות נשארת בתוך המערכת במקום לנחות על המשתמש.',
        figure: 'הצ׳קליסט, עם השלבים והדחיפות',
      },
      {
        heading: 'ידע שמחובר לפעולה',
        body: 'מדריך שרק מסביר משאיר אותך לפעול במקום אחר. כל מאמר נושא בתוכו את המשימה שלו, בנקודה בטקסט שבה באמת היית עושה את הדבר. קריאה ועשייה קורות במקום אחד, וזה מה שהופך ערימת תוכן למוצר.',
        figure: 'מאמר עם כרטיס משימה משובץ',
      },
    ],
    closing: 'לצד שלושת אלה יושב אינדקס של עסקים מקומיים, שירותים והאנשים שמאחוריהם. זה החלק שעונה על השאלה השלישית, זו שעל מי אפשר לסמוך, וזו הסיבה שהמוצר הוא יותר מאוסף הוראות.',
  },
  role: {
    number: '04',
    title: 'התפקיד שלי',
    intro: 'עיצבתי את Reloways מאפס: מהגדרה של מה המוצר צריך להיות ואיך המידע שלו בנוי, דרך ה־UX, השפה הוויזואלית ודפוסי האינטראקציה, ועד לכתיבה של חלק לא קטן מהקוד.',
    items: [
      'אסטרטגיה והגדרת מוצר: מה זה, מה זה לא, ומה יוצא ראשון',
      'מחקר: שיחות עם אנשים שכבר עשו את המעבר, ומשם הגיע הסדר של המשימות. חלק גדול ממנו עובר היום דרך הפודקאסט, זרוע שיווקית של Reloways שמשמשת גם מקור קבוע לעדויות ממקור ראשון',
      'ארכיטקטורת מידע: מודל המשימות, התלויות ביניהן, ומבנה התוכן שמתחת',
      'פלואים, UX ו־UI, והדיזיין סיסטם ששומר עליהם עקביים',
      'פרוטוטייפינג ואז בניית הפרונטאנד, כולל ממשק עברית ואנגלית שמתהפך נכון ולא נקרא כמו תרגום',
      'עבודה יומיומית עם המפתח, כדי שההחלטות יתקבלו מול מה שבאמת אפשר לבנות',
    ],
    closing: 'שני דברים היו קשים. לבסס את הסדר האמיתי של הביורוקרטיה הגרמנית בדיוק מספיק כדי לקודד אותו, ואז לגרום למשהו כל כך רב שכבות להרגיש מובן מאליו. השני לא נגמר וכנראה לעולם לא ייגמר. אני עדיין מדבר עם משתמשים ומקשיב לאן הצרכים והחיכוך האמיתיים בורחים.',
  },
  status: {
    number: '05',
    title: 'איפה זה עומד',
    p1: 'Reloways חי ועדיין נבנה. האונבורדינג, מערכת המשימות, מרכז הידע והאינדקס של העסקים והשירותים המקומיים כולם עובדים, וספריית המאמרים ופרקי הפודקאסט גדלה מדי שבוע. מה שהתחיל כתגובה אישית למעבר אחד צמח לפלטפורמה שמחזיקה ידע מעשי, שירותים מקומיים והקהילה שסביב שניהם.',
    p2: 'העבודה עכשיו היא לחזק את המוצר ולשלוח פיצ׳רים בפיתוח רזה ומהיר, מול מה שהקהילה הישראלית בברלין באמת מבקשת. זה הקהל שעליו המוצר מוכיח את עצמו לפני שהוא מתרחב. זה מוצר שעדיין בתנועה ולא עבודה גמורה, והוא גדל קצת בכל יום.',
    figure: 'המוצר החי על טלפון. שניים שלושה מסכים אמיתיים, לא מוקאפ.',
  },
};

export const COPY: Record<string, CaseCopy> = { en, he };

/** German has no translation of this case study yet, so it reads in English. */
export const getCopy = (locale: string): CaseCopy => COPY[locale] ?? en;
