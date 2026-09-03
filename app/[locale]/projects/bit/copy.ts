/* Bit case study copy. Both languages side by side, same as Reloways.
   A figure with no `src` renders as a labelled placeholder. */

export type Figure = { src?: string; placeholder?: string; aspect?: string; alt?: string; caption?: string };

export type BitCopy = {
  kicker: string;
  title: string;
  subtitle: string;
  lead: string[];
  meta: { label: string; value: string; href?: string }[];
  toolsLabel: string;
  heroFigure: Figure;
  sections: {
    number: string;
    kicker?: string;
    title: string;
    body: string[];
    figure?: Figure;
    blocks?: { heading: string; body: string[]; figure?: Figure }[];
  }[];
  closing: { title: string; body: string[] };
};

const TABLE = '/images/projects/table';
const BIT = '/images/projects/bit';

const en: BitCopy = {
  kicker: 'Case study',
  title: 'Eight Years of Designing Bit',
  subtitle: 'From redesigning the product to the systems still holding it together today',
  lead: [
    'I joined Bit in 2018 as a freelancer, when the product was early and its design language looked nothing like it does now. What started as a few discrete projects turned into eight years working closely with the team and with engineering, involved in how the product developed at every level, from the structure of the interface to the systems underneath large parts of it.',
    'Over those years we built a new visual language from scratch, developed a design system, and made components and systems complex enough that getting them from Figma into the product was its own piece of work.',
    'It did not end at handoff. We could build, measure, test, run surveys and A/B tests, learn from users, and go back to the design. The system we built along the way is still running inside Bit today.',
  ],
  meta: [
    { label: 'Type', value: 'Product design and design systems' },
    { label: 'Company', value: 'Bit (bit.dev)' },
    { label: 'My Role', value: 'Head of Design' },
    { label: 'Duration', value: '2018 to today' },
    { label: 'Live at', value: 'bit.dev', href: 'https://bit.dev' },
  ],
  toolsLabel: 'Tools',
  heroFigure: {
    src: `${BIT}/bit-home.png`,
    aspect: '16/9',
    alt: 'The Bit Cloud homepage today: a dark hero reading "Build like you use apps" above a prompt field',
    caption: 'Bit today, at bit.cloud.',
  },
  sections: [
    {
      number: '01',
      title: 'A Product That Kept Moving',
      body: [
        'Bit was never something I designed once and handed on. Over eight years it changed continuously, and my place in the work changed with it. Sometimes the job was one specific problem. Sometimes a whole experience. Sometimes a system that had to hold up underneath dozens of different experiences at once.',
        'Being close to the team and to engineering let us work directly: raise an idea, build a prototype, put it in front of users, find out what worked, and change it before it set into the product.',
        'That is what made it possible to be part of how the product changed, rather than only designing it.',
      ],
    },
    {
      number: '02',
      kicker: 'Developer experience',
      title: 'Bit’s Command System',
      body: [
        'Bit grew into a platform with a large number of commands and capabilities, and the reference put all of them on one long page. Finding the command you needed meant scrolling past every command you did not.',
        'Working with Eden, I looked at how developers actually find a command and how they build a picture of the way capabilities relate. Instead of leaving the commands as a long list of items, we gave them a hierarchy of categories, groups, and families, so commands with something in common appear together.',
      ],
      figure: {
        src: `${BIT}/bit-cli-reference.jpg`,
        aspect: '16/9',
        alt: 'The CLI reference page, with commands grouped into categories and a filter bar above them',
        caption: 'The reference after the restructure. Commands sit under the area of the product they belong to, and some belong to more than one.',
      },
      blocks: [
        {
          heading: 'A visual language for each category',
          body: [
            'To make that structure scannable, I designed dedicated icons for the categories and built a full icon family around them, drawn as a set rather than one at a time.',
            'They are not there to give the system character. On a dense page an icon lets a developer tell one class of capability from another at a glance, before reading a label, which is what makes the hierarchy usable rather than merely correct.',
          ],
          figure: {
            src: `${BIT}/bit-cli-icons.jpg`,
            aspect: '4005/2160',
            alt: 'The full set of seventy-five CLI icons laid out in a grid',
            caption: 'Seventy-five icons, drawn as one family so the set stays coherent as it grows.',
          },
        },
      ],
    },
    {
      number: '03',
      kicker: 'Design system',
      title: 'A Data Table That Could Grow',
      body: [
        'A data table looks simple until it meets a real product. Different volumes of data, different column structures, nested columns, loading, empty states, search, pagination, and every screen size, each one a separate design problem.',
        'The table was designed to fit a range of situations, and it became our master table. Other teams used it and sent feedback back, which is what refined it. That way each team got a table that changed with demand while still being consumed from a single source that kept evolving.',
      ],
      blocks: [
        {
          heading: 'Start from the smallest thing that works',
          body: [
            'The first job was the plainest useful version: header row, data rows, hover state, nothing to configure before it renders. From there we extended it through real use cases instead of trying to solve every possible scenario in advance.',
            'That order is what tells you which patterns belong to the system itself and which are only needed in one context.',
          ],
          figure: {
            src: `${TABLE}/table_img_001.png`,
            aspect: '1000/230',
            alt: 'The basic table variant: seven columns of contact data with a header row and a single hover state',
            caption: 'The default. Nothing to configure before it renders.',
          },
        },
        {
          heading: 'Design the waiting too',
          body: [
            'A table is not only what the user sees once the data is ready. It spends a good deal of its life loading, partly loaded, or empty, and those states have to feel like the same experience rather than exceptions added afterwards.',
            'Where load time is expected it uses a skeleton rather than a spinner. A spinner says something is happening. A skeleton says what is arriving and how much of it, and holds the layout still so nothing jumps.',
          ],
          figure: {
            src: `${TABLE}/table_skeleton.png`,
            aspect: '1000/360',
            alt: 'The table skeleton state: grey placeholder blocks matching the column structure of the loaded table',
            caption: 'The skeleton mirrors the real column widths, so the layout never shifts when data arrives.',
          },
        },
        {
          heading: 'The documentation is part of the design',
          body: [
            'Alongside the design I wrote the table’s documentation, in a long and precise document. It covered every capability, from pagination and sorting through row selection, row expansion, and infinite scroll. For each one I wrote what it does, when to use it, and how it behaves at the edges.',
            'The need was practical. A shared table reaches teams who were not in the conversations where its behaviour was decided. Without something that explains how it acts, every team interprets it differently and the component quietly splits into several versions.',
            'By the end of it, people on the team could both read about the table and propose changes to it, so everyone using it got the benefit of the improvements.',
          ],
          figure: {
            src: `${TABLE}/table_img_005.png`,
            aspect: '1000/380',
            alt: 'The written documentation cards for pagination, sorting, toolbar, row selection, row expansion, infinite scroll, and column controls',
            caption: 'A sample of the table’s behaviour documentation. Every capability written down before it was built.',
          },
        },
      ],
    },
    {
      number: '04',
      kicker: 'Authentication',
      title: 'Authentication as a System',
      body: [
        'At Bit I worked on authentication as a whole system rather than as a sign-in screen. It covers sign in and sign up, SSO, codes, recovery, and the states that appear along the way.',
        'The aim was one consistent system that can handle several ways in and several situations without exposing the complexity sitting behind it.',
      ],
      figure: {
        src: `${BIT}/bit-authentication.png`,
        aspect: '3053/1884',
        alt: 'Three authentication screens: sign in by email with SSO underneath, a six digit confirmation code, and two-factor authentication',
        caption: 'Three states out of one system. Email and SSO, the confirmation code, and two-factor, each with its own way back out.',
      },
      blocks: [
        {
          heading: 'And when it does not go to plan',
          body: [
            'The easiest flow to design is the one where everything works. The harder work starts when something breaks: a code that fails, a wrong password, verification that never completes, a person with no idea what to do next.',
            'I designed those states so that when the expected path breaks, the user still understands what happened and what their next option is.',
          ],
          figure: { placeholder: 'Error, code, and recovery states', aspect: '16/9' },
        },
      ],
    },
    {
      number: '05',
      kicker: 'Visual language',
      title: 'Building the Way Bit Looks',
      body: [
        'One of the most significant parts of the work was changing the visual language itself. When I arrived in 2018 the product looked different. With the team and with engineering we gradually built a new language, colour, typography, icons, panels, components, and interaction patterns, which became the basis of the product.',
      ],
      blocks: [
        {
          heading: 'A design system that grew out of the product',
          body: [
            'The design system was not a separate project running alongside the product. It grew out of the problems we actually hit.',
            'Every component had to work inside real experiences, against real needs and real engineering limits. When a problem turned up in more than one place, the solution could become part of the system. That is how the library was built: something that supported the product rather than documenting it.',
          ],
          figure: { placeholder: 'The design system: components, panels, tokens', aspect: '16/9' },
        },
      ],
    },
    {
      number: '06',
      title: 'Working Together, Not Handing Over',
      body: [
        'One of the things that defined the work at Bit was the daily contact with the team and with engineering. We could raise an idea, build a prototype, see it running, test it with users, and come back to the design.',
        'We used research, surveys, and A/B testing to find out what actually worked instead of relying on our assumptions. Being close to engineering mattered just as much: design decisions were made against what could really be built, and getting from thought to implementation quickly meant we could try things and change direction without turning every decision into a project of its own.',
        'That is also how I worked on billing, an area where UX, business logic, and actions that carry real consequences for the user all meet. Plans, subscriptions, permissions, and changes to an account had to become flows a person could understand and act through.',
      ],
      figure: {
        placeholder: 'Prototype beside the shipped product, or a piece of work with engineering',
        aspect: '16/9',
      },
    },
  ],
  closing: {
    title: 'Eight Years Inside One Product',
    body: [
      'Looking back at the work at Bit, the thing I value most is not a particular screen. It was the chance to be part of a product over time: to watch it change, to change it alongside, and to build systems that stay after the specific project ends.',
      'I arrived in 2018 as a freelancer, at a product that looked different. Eight years on, the language, the systems, and the way of working we built are still inside it.',
      'The work taught me to move between the smallest detail and the whole system, and to know which of the two a problem is asking for.',
    ],
  },
};

const he: BitCopy = {
  kicker: 'קייס סטדי',
  title: 'שמונה שנים של עיצוב Bit',
  subtitle: 'מעיצוב מחדש של המוצר ועד למערכות שעדיין מחזיקות אותו היום',
  lead: [
    'ב־2018 הצטרפתי ל־Bit כפרילנסר, כשהמוצר עדיין היה בתחילת הדרך והשפה העיצובית שלו נראתה אחרת לגמרי. מה שהתחיל כעבודה על פרויקטים נקודתיים הפך לשמונה שנים של עבודה צמודה עם הצוות והפיתוח, שבהן הייתי מעורב בהתפתחות של המוצר ברמות שונות, מהחוויה והמבנה של הממשק ועד למערכות שמחזיקות חלקים גדולים ממנו.',
    'במהלך השנים בנינו שפה גרפית חדשה מאפס, פיתחנו Design System, ויצרנו קומפוננטות ומערכות מורכבות שהמעבר שלהן מפיגמה למוצר אמיתי היה עבודה בפני עצמה.',
    'העבודה לא הסתיימה במסירה לפיתוח. יכולנו לבנות, למדוד, לבדוק, להריץ סקרים ו־A/B Testing, ללמוד מהמשתמשים ולחזור שוב לעיצוב. המערכת שנבנתה לאורך הדרך עדיין חיה בתוך Bit היום.',
  ],
  meta: [
    { label: 'סוג', value: 'עיצוב מוצר ומערכות עיצוב' },
    { label: 'חברה', value: 'Bit (bit.dev)' },
    { label: 'התפקיד שלי', value: 'ראש עיצוב' },
    { label: 'משך', value: '2018 ועד היום' },
    { label: 'לצפייה', value: 'bit.dev', href: 'https://bit.dev' },
  ],
  toolsLabel: 'כלים',
  heroFigure: {
    src: `${BIT}/bit-home.png`,
    aspect: '16/9',
    alt: 'דף הבית של Bit Cloud היום: הירו כהה עם הכותרת Build like you use apps מעל שדה קלט',
    caption: 'Bit היום, ב־bit.cloud.',
  },
  sections: [
    {
      number: '01',
      title: 'מוצר שמשתנה לאורך זמן',
      body: [
        'Bit לא היה מוצר שעיצבתי פעם אחת והעברתי הלאה. במשך שמונה שנים הוא השתנה כל הזמן, והמקום שלי בתוך העבודה השתנה יחד איתו. לפעמים פתרתי בעיה נקודתית, לפעמים עיצבתי חוויה שלמה, ולפעמים בניתי מערכת שהייתה צריכה להחזיק מתחת לעשרות חוויות שונות בבת אחת.',
        'הקרבה לצוות ולפיתוח אפשרה לנו לעבוד בצורה מאוד ישירה: להעלות רעיון, לבנות פרוטוטייפ, לבדוק אותו מול משתמשים, להבין מה עובד ומה לא, ולשנות אותו לפני שהוא מתקבע במוצר.',
        'זה מה שאפשר לי להיות חלק מהאופן שבו המוצר עצמו השתנה, ולא רק לעצב אותו.',
      ],
    },
    {
      number: '02',
      kicker: 'חוויית מפתחים',
      title: 'מערכת הפקודות של Bit',
      body: [
        'Bit התפתח לפלטפורמה עם מספר גדול של פקודות ויכולות, והספרייה הציגה את כולן בעמוד ארוך אחד. כדי למצוא פקודה היית צריך לגלול על פני כל הפקודות שלא חיפשת.',
        'יחד עם עדן בחנתי איך מפתחים באמת מוצאים פקודה ואיך הם בונים תמונה של הקשר בין היכולות השונות. במקום להשאיר את הפקודות כאוסף ארוך של פריטים, בנינו היררכיה של קטגוריות, קבוצות ומשפחות, כך שפקודות שיש ביניהן קשר מופיעות יחד.',
      ],
      figure: {
        src: `${BIT}/bit-cli-reference.jpg`,
        aspect: '16/9',
        alt: 'עמוד ספריית הפקודות, עם פקודות מקובצות לקטגוריות ושורת סינון מעליהן',
        caption: 'הספרייה אחרי הארגון מחדש. כל פקודה יושבת תחת האזור במוצר שאליו היא שייכת, וחלקן שייכות ליותר מאחד.',
      },
      blocks: [
        {
          heading: 'שפה ויזואלית לכל קטגוריה',
          body: [
            'כדי להפוך את המבנה הזה למשהו שקל לסרוק, עיצבתי אייקונים ייעודיים לקטגוריות ובניתי סביבם משפחת אייקונים שלמה, מצוירת כמערכת ולא אחד־אחד.',
            'הם לא נועדו לתת למערכת אופי. בעמוד צפוף, אייקון מאפשר למפתח להבדיל בין סוגי יכולות במבט, לפני שקרא תווית, וזה מה שהופך את ההיררכיה לשימושית ולא רק לנכונה.',
          ],
          figure: {
            src: `${BIT}/bit-cli-icons.jpg`,
            aspect: '4005/2160',
            alt: 'סט שבעים וחמישה אייקוני ה־CLI פרוס בגריד',
            caption: 'שבעים וחמישה אייקונים, מצוירים כמשפחה אחת כדי שהסט יישאר קוהרנטי כשהוא גדל.',
          },
        },
      ],
    },
    {
      number: '03',
      kicker: 'דיזיין סיסטם',
      title: 'טבלת נתונים שיכולה לגדול',
      body: [
        'טבלת נתונים נראית פשוטה עד שהיא פוגשת מוצר אמיתי. כמויות שונות של מידע, מבני עמודות שונים, מידע מקונן, מצבי טעינה, מצבים ריקים, חיפוש, חלוקה לעמודים וגדלי מסך שונים, כל אחד מהם בעיית עיצוב אחרת.',
        'הטבלה עוצבה על מנת להתאים למגוון מצבים, והיא היוותה את טבלת המאסטר שלנו, ששאר חברי הצוות בצוותים האחרים השתמשו בה והעבירו פידבק על מנת לשכלל אותה. ככה הצוותים קיבלו טבלה שמשתנה על פי ביקוש ותוך כדי נצרכת ממקור אחד שמשתנה.',
      ],
      blocks: [
        {
          heading: 'מתחילים מהדבר הקטן ביותר שעובד',
          body: [
            'השלב הראשון היה הגרסה הפשוטה והשימושית ביותר: שורת כותרת, שורות מידע, מצב ריחוף, ושום דבר שצריך להגדיר לפני שהיא נטענת. משם הרחבנו אותה דרך מקרי שימוש אמיתיים, במקום לנסות לפתור מראש כל תרחיש אפשרי.',
            'הסדר הזה הוא מה שמלמד אילו דפוסים שייכים למערכת עצמה ואילו נדרשים רק בהקשר אחד.',
          ],
          figure: {
            src: `${TABLE}/table_img_001.png`,
            aspect: '1000/230',
            alt: 'הטבלה הבסיסית: שבע עמודות של פרטי קשר עם שורת כותרת ומצב ריחוף אחד',
            caption: 'ברירת המחדל. שום דבר להגדיר לפני שהיא נטענת.',
          },
        },
        {
          heading: 'מעצבים גם את זמן ההמתנה',
          body: [
            'טבלה היא לא רק מה שהמשתמש רואה כשהמידע מוכן. חלק לא קטן מחייה היא נטענת, זמינה חלקית או ריקה, והמצבים האלה צריכים להרגיש כמו חלק מאותה חוויה ולא כמו חריגים שהוספנו אחר כך.',
            'כשצפוי זמן טעינה היא משתמשת בשלד ולא בספינר. ספינר אומר שמשהו קורה. שלד אומר מה עומד להגיע וכמה ממנו, ומחזיק את הפריסה יציבה כך ששום דבר לא קופץ.',
          ],
          figure: {
            src: `${TABLE}/table_skeleton.png`,
            aspect: '1000/360',
            alt: 'מצב השלד של הטבלה: בלוקים אפורים שתואמים את מבנה העמודות של הטבלה הטעונה',
            caption: 'השלד משקף את רוחבי העמודות האמיתיים, כך שהפריסה לא זזה כשהמידע מגיע.',
          },
        },
        {
          heading: 'התיעוד הוא חלק מהעיצוב',
          body: [
            'לצד העיצוב כתבתי את התיעוד של הטבלה במסמך מאוד מפורט ומדויק. המסמך כיסה את כל היכולות שלה, מהחלוקה לעמודים והמיון ועד בחירת שורות, הרחבת שורה וגלילה אינסופית. לכל אחת כתבתי מה היא עושה, מתי להשתמש בה, ואיך היא מתנהגת במצבי הקצה.',
            'הצורך היה מעשי. טבלה משותפת מגיעה לצוותים שלא ישבו בשיחות שבהן הוחלט איך היא אמורה לעבוד. בלי טקסט שמסביר את ההתנהגות, כל צוות מפרש אחרת, והרכיב מתפצל בשקט לכמה גרסאות שונות.',
            'בסופו של התהליך אנשי הצוות יכלו גם לקרוא על הטבלה וגם להציע שינויים, כך שכל מי שמשתמש בה נהנה מהשיפורים.',
          ],
          figure: {
            src: `${TABLE}/table_img_005.png`,
            aspect: '1000/380',
            alt: 'כרטיסי התיעוד הכתוב לחלוקה לעמודים, מיון, Toolbar, בחירת שורות, הרחבת שורה, גלילה אינסופית ושליטה בעמודות',
            caption: 'דוגמה מתוך תיעוד ההתנהגות של הטבלה. כל יכולת נכתבה לפני שנבנתה.',
          },
        },
      ],
    },
    {
      number: '04',
      kicker: 'Authentication',
      title: 'Authentication כמערכת',
      body: [
        'ב־Bit עבדתי על חוויית ה־Authentication כמערכת שלמה ולא רק על מסך הכניסה. העבודה כללה כניסה והרשמה, SSO, קודים, שחזור גישה והמצבים השונים שמופיעים לאורך התהליך.',
        'המטרה הייתה מערכת אחת עקבית שיכולה להתמודד עם דרכי כניסה שונות ועם מצבים שונים, בלי לחשוף למשתמש את המורכבות שנמצאת מאחוריה.',
      ],
      figure: {
        src: `${BIT}/bit-authentication.png`,
        aspect: '3053/1884',
        alt: 'שלושה מסכי Authentication: כניסה במייל עם SSO מתחת, קוד אימות בן שש ספרות, ואימות דו־שלבי',
        caption: 'שלושה מצבים מתוך מערכת אחת. מייל ו־SSO, קוד האימות, והאימות הדו־שלבי, ולכל אחד דרך חזרה משלו.',
      },
      blocks: [
        {
          heading: 'וגם כשהכול לא הולך לפי התוכנית',
          body: [
            'הפלואו הכי קל לעיצוב הוא זה שבו הכול עובד. העבודה המורכבת יותר מתחילה כשמשהו משתבש: קוד שלא עובד, סיסמה שגויה, תהליך אימות שלא הושלם, או משתמש שלא יודע מה לעשות עכשיו.',
            'עיצבתי את המצבים האלה כדי שגם כשהמסלול הצפוי נשבר, המשתמש עדיין יבין מה קרה ומה האפשרות הבאה שלו.',
          ],
          figure: { placeholder: 'מצבי שגיאה, קוד ושחזור', aspect: '16/9' },
        },
      ],
    },
    {
      number: '05',
      kicker: 'שפה ויזואלית',
      title: 'בניית השפה העיצובית של Bit',
      body: [
        'אחד החלקים המשמעותיים ביותר בעבודה לאורך השנים היה השינוי של השפה העיצובית עצמה. כשהגעתי ב־2018 המוצר נראה אחרת. יחד עם הצוות והפיתוח בנינו בהדרגה שפה חדשה, צבעים, טיפוגרפיה, אייקונים, פאנלים, קומפוננטות ודפוסי אינטראקציה, שהפכה לבסיס של המוצר.',
      ],
      blocks: [
        {
          heading: 'דיזיין סיסטם שנבנה מתוך המוצר',
          body: [
            'הדיזיין סיסטם לא נבנה כפרויקט נפרד שהתקיים לצד המוצר. הוא צמח מתוך הבעיות האמיתיות שבהן נתקלנו.',
            'כל קומפוננטה הייתה צריכה לעבוד בתוך חוויות אמיתיות, מול צרכים שונים ומול מגבלות של פיתוח. כשבעיה חזרה ביותר ממקום אחד, הפתרון יכול היה להפוך לחלק מהמערכת. כך נבנתה בהדרגה ספרייה שתומכת במוצר במקום רק לתעד אותו.',
          ],
          figure: { placeholder: 'הדיזיין סיסטם: קומפוננטות, פאנלים וטוקנים', aspect: '16/9' },
        },
      ],
    },
    {
      number: '06',
      title: 'עבודה משותפת, לא מסירה לפיתוח',
      body: [
        'אחד הדברים שהגדירו את העבודה ב־Bit היה הקשר היומיומי עם הצוות והפיתוח. יכולנו להעלות רעיון, לבנות פרוטוטייפ, לראות אותו עובד, לבדוק אותו עם משתמשים ולחזור לשולחן העיצוב.',
        'עשינו שימוש במחקר, סקרים ו־A/B Testing כדי להבין מה באמת עובד ולא להסתמך רק על ההנחות שלנו. הקרבה לפיתוח הייתה חשובה לא פחות: החלטות עיצוביות התקבלו מול מה שאפשר באמת לבנות, והיכולת להגיע מהר ממחשבה למימוש אפשרה לנו להתנסות ולשנות כיוון בלי להפוך כל החלטה לפרויקט בפני עצמו.',
        'ככה עבדתי גם על Billing, אזור שבו UX, לוגיקה עסקית ופעולות בעלות משמעות אמיתית עבור המשתמש נפגשים. תוכניות, מנויים, הרשאות ושינויים בחשבון היו צריכים להפוך לפלואו שאדם יכול להבין ולפעול דרכו.',
      ],
      figure: {
        placeholder: 'פרוטוטייפ מול המוצר שנשלח, או רגע של עבודה משותפת עם הפיתוח',
        aspect: '16/9',
      },
    },
  ],
  closing: {
    title: 'שמונה שנים בתוך מוצר אחד',
    body: [
      'כשאני מסתכל אחורה על העבודה ב־Bit, הדבר שאני הכי מעריך הוא לא מסך מסוים. זו הייתה האפשרות להיות חלק ממוצר לאורך זמן: לראות אותו משתנה, לשנות אותו יחד איתו, ולבנות מערכות שנשארות גם אחרי שהפרויקט הספציפי נגמר.',
      'הגעתי ב־2018 כפרילנסר, למוצר שנראה אחרת. שמונה שנים אחר כך, השפה, המערכות ודרך העבודה שבנינו עדיין נמצאות בתוכו.',
      'העבודה הזו לימדה אותי לעבור בין הפרט הקטן ביותר לבין המערכת כולה, ולדעת מה מבין השניים הבעיה מבקשת.',
    ],
  },
};

export const getBitCopy = (locale: string): BitCopy => (locale === 'he' ? he : en);
