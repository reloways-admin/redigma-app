/* Bit case study copy. Both languages side by side, same as Reloways. */

export type Figure = { src?: string; placeholder?: string; aspect?: string; alt?: string; caption?: string };

export type BitCopy = {
  kicker: string;
  title: string;
  lead: string;
  meta: { label: string; value: string; href?: string }[];
  toolsLabel: string;
  heroAlt: string;
  intro: { number: string; title: string; body: string[] };
  areas: {
    number: string;
    kicker: string;
    title: string;
    body: string[];
    blocks: { heading: string; body: string[]; figure: Figure }[];
  }[];
  learned: { number: string; title: string; body: string[] };
  selection: { title: string; body: string[] };
};

const en: BitCopy = {
  kicker: 'Case study',
  title: 'Eight Years of Designing Bit',
  lead: 'Product design, systems, and interfaces across eight years of one product changing underneath me. This is a selection rather than a project: three areas that show how I work on things that are genuinely complicated.',
  meta: [
    { label: 'Type', value: 'Product design and design systems' },
    { label: 'Company', value: 'Bit (bit.dev)' },
    { label: 'My Role', value: 'Head of Design' },
    { label: 'Duration', value: 'Eight years' },
    { label: 'Live at', value: 'bit.dev', href: 'https://bit.dev' },
  ],
  toolsLabel: 'Tools',
  heroAlt: 'The Table documentation page in Bit’s design system, with the full behaviour index in the sidebar',
  intro: {
    number: '01',
    title: 'A Product That Kept Moving',
    body: [
      'Bit was never a thing I designed once and handed on. Over eight years the product changed continuously: new capabilities, new kinds of user, new commercial pressure, new technical limits. Each of those produced new design problems rather than variations on old ones.',
      'That meant working at several levels at the same time. Sometimes the job was a single interaction. Sometimes it was a whole flow. Sometimes it was the system sitting underneath dozens of different experiences at once, where the decision you make is not what something looks like but what it is allowed to do.',
      'The three areas below are the ones that show that range most clearly.',
    ],
  },
  areas: [
    {
      number: '02',
      kicker: 'Developer experience',
      title: 'Making Complexity Navigable',
      body: [
        'Bit’s developer platform carried a growing number of commands, tools, and capabilities. The old reference put all of them on one long page, so finding the command you needed meant scrolling past every command you did not.',
        'The fix was not to design a better page. It was to give the commands a structure: category, then group, then command. That hierarchy could grow with the platform instead of degrading as it grew, and it stopped being a filing decision and became part of the interface itself.',
      ],
      blocks: [
        {
          heading: 'Icons that do work',
          body: [
            'Each category got its own icon, drawn as a family rather than one at a time, with shared proportions and weight. Seventy-five of them in the end.',
            'They are not decoration. On a dense reference page, an icon lets a developer tell one class of capability from another while scanning, before reading a single label.',
          ],
          figure: { placeholder: 'The icon set, all seventy-five together', aspect: '16/9' },
        },
        {
          heading: 'Documentation as part of the product',
          body: [
            'Developer documentation slides easily into a pile of pages someone else has to navigate. I treated it as product surface: its own hierarchy, navigation, categories, and visual language, so the system could be understood before any command was run.',
          ],
          figure: { placeholder: 'The CLI reference, with categories and filtering', aspect: '16/9' },
        },
      ],
    },
    {
      number: '03',
      kicker: 'Design system',
      title: 'A Data Table That Could Grow',
      body: [
        'A data table looks simple until it meets a real product. Different volumes of data, different column structures, nested columns, loading, empty states, pagination, search, and every screen size, each one a separate design problem.',
        'So I approached it as a system rather than a component. It ships in Bit’s open-source design system, which means it is not the table for one screen. It is the table other people build their tables from.',
      ],
      blocks: [
        {
          heading: 'Start from the smallest thing that works',
          body: [
            'The first job was the plainest useful version: header row, data rows, hover state, nothing to configure before it renders. Everything after that was added through real use cases rather than guessed at in advance.',
            'That order matters. If the default is already opinionated, every team that adopts it starts by fighting it. Working outward from the minimum is also how you learn which patterns belong to the system and which belong to one context only.',
          ],
          figure: {
            src: '/images/projects/table/table_img_001.png',
            aspect: '1000/230',
            alt: 'The basic table variant: seven columns of contact data with a header row and a single hover state',
            caption: 'The default. Nothing to configure before it renders.',
          },
        },
        {
          heading: 'Design the waiting, and the emptiness',
          body: [
            'A table is not only what a user sees once the data is there. It spends a good deal of its life loading, partly loaded, or empty. Those states have to feel like the same component rather than something added afterwards.',
            'Where load time is expected, the table uses a skeleton rather than a spinner. A spinner says something is happening. A skeleton says what is arriving and how much of it, and it holds the layout still so nothing jumps.',
            'This is the one idea that recurs across everything below, so it is worth saying once and properly: the interesting half of a system is what it does when things are not going well.',
          ],
          figure: {
            src: '/images/projects/table/table_img_003.png',
            aspect: '1000/360',
            alt: 'The table skeleton state: grey placeholder blocks matching the column structure of the loaded table',
            caption: 'The skeleton mirrors the real column widths, so the layout never shifts when data arrives.',
          },
        },
        {
          heading: 'The toolbar problem',
          body: [
            'As capability accumulated around the table, the controls became their own design problem. Search, filters, actions, and pagination all competed for the same strip and the same attention.',
            'Active search made the conflict concrete. While a query is running, the result set is no longer the full one, so pagination is describing something that is not on screen. It steps back for as long as the field holds a query, and returns when the field clears. Small rule, and the kind of edge case that decides whether a shared component is trusted.',
          ],
          figure: {
            src: '/images/projects/table/table_img_006.png',
            aspect: '1000/145',
            alt: 'Active search in the table: a query in the search field, gender and country filters, and a reduced result set',
            caption: 'Search, filters, and export in the toolbar. Pagination steps back while a query is active.',
          },
        },
        {
          heading: 'A component is more than what the user sees',
          body: [
            'For a component to survive being extended by other people, the design has to work for the people building with it. Every behaviour was written up with its edge cases and interaction states: pagination, sorting, the toolbar, row selection, column controls, row expansion, infinite scroll.',
            'That document is the deliverable, not the appendix to it.',
          ],
          figure: {
            src: '/images/projects/table/table_img_005.png',
            aspect: '1000/380',
            alt: 'The written specification cards for pagination, sorting, toolbar, row selection, row expansion, infinite scroll, and column controls',
            caption: 'Every behaviour written down before it was built.',
          },
        },
      ],
    },
    {
      number: '04',
      kicker: 'Authentication',
      title: 'The Screen Is the Small Part',
      body: [
        'A login screen is one state inside an authentication system. The experience also has to hold sign-up, several ways in, verification, returning users, recovery, and the different contexts a person and an organisation can be in.',
        'I designed those as one system rather than a set of separate screens, which is the only way the edges stay consistent.',
      ],
      blocks: [
        {
          heading: 'Where it actually gets designed',
          body: [
            'The easy flow to design is the one where everything works. The work starts at the wrong password, the expired session, the verification that fails, the person who has no idea what to do next.',
            'The goal in each case is narrow and worth stating plainly: when the expected path breaks, the user should still understand what happened and what their next option is.',
          ],
          figure: { placeholder: 'The authentication map: sign in, sign up, SSO, verification, recovery', aspect: '4/3' },
        },
      ],
    },
  ],
  learned: {
    number: '05',
    title: 'What Eight Years Taught Me',
    body: [
      'Designing one product for eight years changed how I think about the job. The hard part is often not designing the interface. It is deciding what the interface should represent: which states matter, how the parts relate, what happens when something breaks, and how the system can keep growing without getting harder to use.',
      'It also taught me to move between levels of abstraction. A single icon or button, a whole flow, and the system sitting under dozens of experiences are three different kinds of thinking, and the work needs all three in the same week.',
      'Moving between the small detail and the whole system has become the most useful thing about how I work.',
    ],
  },
  selection: {
    title: 'A Selection, Not a Summary',
    body: [
      'Eight years is a great deal of product. Plenty of what I worked on is not here, including billing and the wider visual language, and much of what is here kept changing after the moments shown on this page.',
      'These are simply the pieces that best describe the designer I became while working on Bit: someone who enjoys complicated products, thinks in systems, works closely with engineering, and still cares about the small details that make a complex product feel simple.',
    ],
  },
};

const he: BitCopy = {
  kicker: 'קייס סטדי',
  title: 'שמונה שנים של עיצוב Bit',
  lead: 'עיצוב מוצר, מערכות וממשקים לאורך שמונה שנים שבהן המוצר השתנה מתחתיי. זו בחירה ולא פרויקט: שלושה תחומים שמראים איך אני עובד על דברים מורכבים באמת.',
  meta: [
    { label: 'סוג', value: 'עיצוב מוצר ומערכות עיצוב' },
    { label: 'חברה', value: 'Bit (bit.dev)' },
    { label: 'התפקיד שלי', value: 'ראש עיצוב' },
    { label: 'משך', value: 'שמונה שנים' },
    { label: 'לצפייה', value: 'bit.dev', href: 'https://bit.dev' },
  ],
  toolsLabel: 'כלים',
  heroAlt: 'עמוד התיעוד של הטבלה בדיזיין סיסטם של Bit, עם אינדקס ההתנהגויות המלא בצד',
  intro: {
    number: '01',
    title: 'מוצר שלא הפסיק לזוז',
    body: [
      'Bit לא היה מוצר שעיצבתי פעם אחת והעברתי הלאה. במשך שמונה שנים הוא השתנה כל הזמן: יכולות חדשות, סוגי משתמשים חדשים, לחצים עסקיים חדשים ומגבלות טכנולוגיות חדשות. כל אחד מאלה ייצר בעיות עיצוב חדשות, ולא וריאציות על ישנות.',
      'זה דרש לעבוד בכמה רמות במקביל. לפעמים המשימה הייתה אינטראקציה אחת. לפעמים פלואו שלם. ולפעמים המערכת שיושבת מתחת לעשרות חוויות בבת אחת, שבה ההחלטה היא לא איך משהו נראה אלא מה מותר לו לעשות.',
      'שלושת התחומים שלמטה הם אלה שמראים את הטווח הזה הכי בבירור.',
    ],
  },
  areas: [
    {
      number: '02',
      kicker: 'חוויית מפתחים',
      title: 'להפוך מורכבות למשהו שאפשר לנווט בו',
      body: [
        'פלטפורמת המפתחים של Bit כללה מספר הולך וגדל של פקודות, כלים ויכולות. הספרייה הישנה הציגה את כולן בעמוד ארוך אחד, כך שכדי למצוא פקודה היית צריך לגלול על פני כל הפקודות שלא חיפשת.',
        'הפתרון לא היה לעצב עמוד טוב יותר. הוא היה לתת לפקודות מבנה: קטגוריה, ואז קבוצה, ואז פקודה. ההיררכיה הזאת יכולה לגדול יחד עם הפלטפורמה במקום להישבר ככל שהיא גדלה, והיא הפסיקה להיות החלטת תיוק והפכה לחלק מהממשק עצמו.',
      ],
      blocks: [
        {
          heading: 'אייקונים שעושים עבודה',
          body: [
            'כל קטגוריה קיבלה אייקון משלה, מצויר כמשפחה ולא אחד־אחד, עם פרופורציות ומשקל משותפים. שבעים וחמישה בסך הכול.',
            'הם לא קישוט. בעמוד ספרייה צפוף, אייקון מאפשר למפתח להבדיל בין סוגי יכולות תוך כדי סריקה, לפני שהוא קרא תווית אחת.',
          ],
          figure: { placeholder: 'סט האייקונים, כל שבעים וחמישה יחד', aspect: '16/9' },
        },
        {
          heading: 'התיעוד הוא חלק מהמוצר',
          body: [
            'תיעוד למפתחים גולש בקלות לערימת עמודים שמישהו אחר צריך לנווט בהם. התייחסתי אליו כאל שטח מוצר: היררכיה, ניווט, קטגוריות ושפה ויזואלית משלו, כדי שאפשר יהיה להבין את המערכת עוד לפני שהריצו פקודה אחת.',
          ],
          figure: { placeholder: 'ספריית הפקודות, עם קטגוריות וסינון', aspect: '16/9' },
        },
      ],
    },
    {
      number: '03',
      kicker: 'דיזיין סיסטם',
      title: 'טבלת נתונים שיכולה לגדול',
      body: [
        'טבלת נתונים נראית פשוטה עד שהיא פוגשת מוצר אמיתי. כמויות שונות של מידע, מבני עמודות שונים, עמודות מקוננות, טעינה, מצבים ריקים, פייג׳ינציה, חיפוש וכל גודל מסך, כל אחד מהם בעיית עיצוב נפרדת.',
        'לכן ניגשתי אליה כמערכת ולא כקומפוננטה. היא נשלחת בדיזיין סיסטם בקוד פתוח של Bit, כלומר היא לא הטבלה של מסך אחד. היא הטבלה שאחרים בונים ממנה את הטבלאות שלהם.',
      ],
      blocks: [
        {
          heading: 'מתחילים מהדבר הקטן ביותר שעובד',
          body: [
            'המשימה הראשונה הייתה הגרסה הפשוטה והשימושית ביותר: שורת כותרת, שורות מידע, מצב ריחוף, ושום דבר שצריך להגדיר לפני שהיא נטענת. כל מה שבא אחרי נוסף דרך מקרי שימוש אמיתיים ולא נוחש מראש.',
            'הסדר הזה חשוב. אם ברירת המחדל כבר דעתנית, כל צוות שמאמץ אותה מתחיל במאבק בה. עבודה החוצה מהמינימום היא גם הדרך ללמוד אילו דפוסים שייכים למערכת ואילו שייכים להקשר אחד בלבד.',
          ],
          figure: {
            src: '/images/projects/table/table_img_001.png',
            aspect: '1000/230',
            alt: 'הטבלה הבסיסית: שבע עמודות של פרטי קשר עם שורת כותרת ומצב ריחוף אחד',
            caption: 'ברירת המחדל. שום דבר להגדיר לפני שהיא נטענת.',
          },
        },
        {
          heading: 'מעצבים גם את ההמתנה, וגם את הריקנות',
          body: [
            'טבלה היא לא רק מה שרואים כשהמידע כבר שם. חלק לא קטן מחייה היא נטענת, טעונה חלקית או ריקה. המצבים האלה צריכים להרגיש כמו אותה קומפוננטה ולא כמו משהו שהוסיפו אחר כך.',
            'כשצפוי זמן טעינה, הטבלה משתמשת בשלד ולא בספינר. ספינר אומר שמשהו קורה. שלד אומר מה עומד להגיע וכמה ממנו, והוא מחזיק את הפריסה יציבה כך ששום דבר לא קופץ.',
            'זו התובנה שחוזרת בכל מה שלמטה, אז שווה לומר אותה פעם אחת וכמו שצריך: החצי המעניין של מערכת הוא מה שהיא עושה כשלא הכול הולך טוב.',
          ],
          figure: {
            src: '/images/projects/table/table_img_003.png',
            aspect: '1000/360',
            alt: 'מצב השלד של הטבלה: בלוקים אפורים שתואמים את מבנה העמודות של הטבלה הטעונה',
            caption: 'השלד משקף את רוחבי העמודות האמיתיים, כך שהפריסה לא זזה כשהמידע מגיע.',
          },
        },
        {
          heading: 'בעיית ה־Toolbar',
          body: [
            'ככל שהצטברו יכולות סביב הטבלה, הפקדים עצמם הפכו לבעיית עיצוב. חיפוש, סינון, פעולות ופייג׳ינציה התחרו כולם על אותה רצועה ועל אותה תשומת לב.',
            'החיפוש הפעיל הפך את ההתנגשות למוחשית. בזמן שאילתה רצה, קבוצת התוצאות כבר אינה המלאה, אז הפייג׳ינציה מתארת משהו שלא נמצא על המסך. היא נסוגה כל עוד שדה החיפוש מחזיק שאילתה, וחוזרת כשהוא מתנקה. חוק קטן, ובדיוק סוג מקרה הקצה שקובע אם סומכים על קומפוננטה משותפת.',
          ],
          figure: {
            src: '/images/projects/table/table_img_006.png',
            aspect: '1000/145',
            alt: 'חיפוש פעיל בטבלה: שאילתה בשדה החיפוש, מסננים וקבוצת תוצאות מצומצמת',
            caption: 'חיפוש, סינון וייצוא ב־Toolbar. הפייג׳ינציה נסוגה כל עוד השאילתה פעילה.',
          },
        },
        {
          heading: 'קומפוננטה היא יותר ממה שהמשתמש רואה',
          body: [
            'כדי שקומפוננטה תשרוד הרחבה בידי אנשים אחרים, העיצוב צריך לעבוד גם עבור מי שבונה איתה. כל התנהגות תועדה עם מקרי הקצה ומצבי האינטראקציה שלה: פייג׳ינציה, מיון, ה־Toolbar, בחירת שורות, שליטה בעמודות, הרחבת שורה וגלילה אינסופית.',
            'המסמך הזה הוא התוצר, לא הנספח לו.',
          ],
          figure: {
            src: '/images/projects/table/table_img_005.png',
            aspect: '1000/380',
            alt: 'כרטיסי המפרט הכתוב לפייג׳ינציה, מיון, Toolbar, בחירת שורות, הרחבת שורה, גלילה אינסופית ושליטה בעמודות',
            caption: 'כל התנהגות נכתבה לפני שנבנתה.',
          },
        },
      ],
    },
    {
      number: '04',
      kicker: 'Authentication',
      title: 'המסך הוא החלק הקטן',
      body: [
        'מסך התחברות הוא מצב אחד בתוך מערכת Authentication שלמה. החוויה צריכה להחזיק גם הרשמה, כמה דרכי כניסה, אימות, משתמשים חוזרים, שחזור גישה, וההקשרים השונים שאדם וארגון יכולים להיות בהם.',
        'עיצבתי את אלה כמערכת אחת ולא כאוסף מסכים נפרדים, כי זו הדרך היחידה שהקצוות נשארים עקביים.',
      ],
      blocks: [
        {
          heading: 'איפה זה באמת נעשה',
          body: [
            'הפלואו הקל לעיצוב הוא זה שבו הכול עובד. העבודה מתחילה בסיסמה שגויה, בסשן שפג, באימות שנכשל, ובאדם שאין לו מושג מה לעשות עכשיו.',
            'המטרה בכל אחד מהמקרים צרה ושווה לומר אותה בפשטות: כשהמסלול הצפוי נשבר, המשתמש עדיין צריך להבין מה קרה ומה האפשרות הבאה שלו.',
          ],
          figure: { placeholder: 'מפת ה־Authentication: כניסה, הרשמה, SSO, אימות ושחזור', aspect: '4/3' },
        },
      ],
    },
  ],
  learned: {
    number: '05',
    title: 'מה שמונה שנים לימדו אותי',
    body: [
      'לעצב מוצר אחד במשך שמונה שנים שינה את הדרך שבה אני חושב על העבודה. החלק הקשה הוא לרוב לא לעצב את הממשק. הוא להחליט מה הממשק צריך לייצג: אילו מצבים חשובים, איך החלקים קשורים זה לזה, מה קורה כשמשהו נשבר, ואיך המערכת יכולה להמשיך לגדול בלי להיות קשה יותר לשימוש.',
      'זה גם לימד אותי לנוע בין רמות הפשטה. אייקון או כפתור בודד, פלואו שלם, והמערכת שמתחת לעשרות חוויות הם שלושה סוגי חשיבה שונים, והעבודה דורשת את שלושתם באותו שבוע.',
      'התנועה הזאת בין הפרט הקטן למערכת כולה הפכה לדבר הכי שימושי באופן שבו אני עובד.',
    ],
  },
  selection: {
    title: 'בחירה, לא סיכום',
    body: [
      'שמונה שנים הן המון מוצר. הרבה ממה שעבדתי עליו לא נמצא כאן, כולל Billing והשפה הוויזואלית הרחבה, והרבה ממה שכן נמצא כאן המשיך להשתנות אחרי הרגעים שמוצגים בעמוד.',
      'אלה פשוט החלקים שמתארים הכי טוב את המעצב שהפכתי להיות תוך כדי העבודה על Bit: מי שנהנה ממוצרים מורכבים, חושב במערכות, עובד צמוד לפיתוח, ועדיין אכפת לו מהפרטים הקטנים שהופכים מוצר מורכב לפשוט.',
    ],
  },
};

export const getBitCopy = (locale: string): BitCopy => (locale === 'he' ? he : en);
