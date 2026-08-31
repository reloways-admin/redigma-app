/* GoMatchIt case study copy. Both languages side by side.
   Every figure here is an image the page already had. No new material. */

export type Figure = { src?: string; placeholder?: string; aspect?: string; alt?: string; caption?: string };

export type GoMatchItCopy = {
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

const G = '/images/projects/gomatchit';

const en: GoMatchItCopy = {
  kicker: 'Case study',
  title: 'From Idea to Product in Three Months',
  subtitle: 'Designing and building an MVP that was usable and could still grow',
  lead: [
    'GoMatchIt was a new product that had to get from an idea to something people could actually use, in three months.',
    'I was responsible for defining the product experience from the ground up: working out what had to be built first, designing the core flows, building the interface, and working closely with development to turn the ideas into something that runs.',
    'The goal was never to design everything. It was to work out what had to exist for the product to be useful, what could wait, and how to build a base that could grow past the MVP.',
  ],
  meta: [
    { label: 'Type', value: 'Product design, idea to MVP' },
    { label: 'Client', value: 'GoMatchIt' },
    { label: 'My Role', value: 'Lead Product Designer' },
    { label: 'Timeline', value: 'Three months' },
    { label: 'Industry', value: 'B2B SaaS, process automation' },
  ],
  toolsLabel: 'Tools',
  heroFigure: {
    src: `${G}/gomatchit_cover_001-1.png`,
    aspect: '16/9',
    alt: 'The GoMatchIt canvas with a customer record process mapped across colour-coded activity blocks',
  },
  sections: [
    {
      number: '01',
      title: 'The Product',
      body: [
        'GoMatchIt lets a company map a business process that runs across several pieces of software at once. A user lays the process out on a canvas as a chain of activity blocks, connects the tools each step depends on, and ends up with something the rest of the organisation can read.',
        'The challenge was to give the product enough structure to be clear, while keeping the first version focused enough that it could actually be built and launched inside the time we had.',
      ],
      figure: {
        src: `${G}/gomatchit_canvas_img_002-1.png`,
        aspect: '1000/510',
        alt: 'The canvas with a titled process group containing colour-coded activity blocks connected by flow lines',
        caption: 'A process on the canvas. Colour carries the type of each step, and the software it touches sits inside the block.',
      },
    },
    {
      number: '02',
      title: 'Starting From the Core',
      body: [
        'The first step was not designing the interface. It was deciding what the product actually had to do.',
        'The founder had already built a working version. Everything the product needed was present in it: the grid, the swimlanes, the panel for adding a process, the zoom. What it did not have was any order of importance, so nothing told you where to look or what mattered first.',
        'That is a good position to inherit. The structural questions had been answered by someone who understood the domain, which left a genuine design problem: separating what had to be in the MVP from what could arrive later, so we could build a focused first version rather than a small copy of a much larger product.',
      ],
      figure: {
        src: `${G}/gomatchit_canvas_img_001-1.png`,
        aspect: '1000/510',
        alt: 'The early GoMatchIt build: a grey grid canvas with an add-process panel and no visual hierarchy',
        caption: 'The build I inherited. Everything is there, and nothing is louder than anything else.',
      },
    },
    {
      number: '03',
      title: 'Finding the Right Structure',
      body: [
        'Once the core was clear, the work moved to how the parts of the product relate to each other.',
        'A process is a chain of activity blocks, each one typed by what it does: create a record, move data, run a check. Type is carried by colour and by a label in the block header, so a process is legible from a distance before anyone reads a word of it. Each block also shows the software it touches, because seeing that a step runs through one tool and hands off to another is most of the reason to draw the process at all.',
        'Grouping came next. A process is boxed and titled on the canvas, which lets several processes share one workspace without collapsing into a single undifferentiated diagram.',
      ],
    },
    {
      number: '04',
      title: 'The Complicated Parts',
      body: [
        'Some parts of the product needed more than a direct interface. Configuring an activity block takes a lot of fields: the parent process, the activity category and type, the trigger, the performers, the entities, the method. On its own page the user loses the context that made the block make sense. In a small popover it does not fit.',
        'I worked through it in prototypes, and the answer was a wide panel that opens over the canvas, with the fields grouped into labelled columns and a live preview of the resulting block beside them. You configure the thing while looking at the thing.',
        'The same question applied to navigation. The canvas needs controls at several levels at once, so we split them: a persistent top bar for workspace and process, a set of controls anchored to the canvas for creating blocks, and zoom pinned to the corner. Each one owns a fixed place, so it is learned once.',
      ],
      figure: {
        src: `${G}/gomatchit_canvas_img_highlight.png`,
        aspect: '1000/510',
        alt: 'The activity block editor open over the canvas, with grouped field columns, a live block preview, and the surrounding controls highlighted',
        caption: 'The editor over the canvas, with the persistent controls marked. Live preview on the right.',
      },
    },
    {
      number: '05',
      title: 'Building a System, Not Only Screens',
      body: [
        'As the product settled, individual screens became patterns and components that could be reused.',
        'The point was not only visual consistency inside the MVP. It was a base that could support the next versions without designing everything again. Typography, colour with usage rules attached, spacing, radii, and the anatomy of a block were all defined once, as tokens, so later screens became assembly rather than invention.',
        'The comparison below is where that landed. An earlier variant carried a heavy tinted header and a separate category strip. The version we shipped drops the strip, moves the type into the block header, and gives the integration path the width instead. Simpler to build and easier to read, which is the usual trade when you design inside a real constraint rather than around it.',
      ],
      figure: {
        src: `${G}/gomatchit_canvas_img_005.png`,
        aspect: '1000/350',
        alt: 'Two design versions of the activity block side by side, labelled Version 01 and Version 03',
        caption: 'Version 01 against the version we shipped. Less chrome, more room for the integration path.',
      },
    },
    {
      number: '06',
      title: 'From Prototype to Product',
      body: [
        'The work ran alongside development the whole way. Rather than designing everything up front and handing it over, we moved back and forth between design and implementation.',
        'That let us try ideas against the real product, find problems earlier, and make decisions against what could actually be built. With one developer and a fixed date, that was not a preference. It was the only way the timeline held.',
      ],
    },
    {
      number: '07',
      title: 'What We Launched',
      body: [
        'After three months the product had gone from an initial idea to a working MVP.',
        'The result was not every feature we could imagine. It was a first, focused version that established the core experience and left a foundation to keep building on.',
        'The dashboard is where that shows most plainly. Navigation on one side, a searchable list carrying owner, software, status and dates in the centre, and a preview of whatever is selected on the other. Nothing about it is novel, and that is deliberate: the canvas is where the product earns its distinctiveness, and the dashboard should be immediately familiar.',
      ],
      figure: {
        src: `${G}/gomatchit_canvas_img_expermental.png`,
        aspect: '1000/510',
        alt: 'The GoMatchIt dashboard: navigation sidebar, a searchable process list with owner, software, and status columns, and a detail preview panel',
        caption: 'Navigate, list, preview. The least surprising surface in the product, on purpose.',
      },
    },
  ],
  closing: {
    title: 'What I Took From It',
    body: [
      'The main lesson was not how to design faster. It was how to decide what not to design yet.',
      'Under a real time constraint, product design is as much a question of prioritisation as of interfaces: finding the smallest product that can be useful, making the important decisions early, and building just enough system to make the next version possible without overbuilding the first one.',
    ],
  },
};

const he: GoMatchItCopy = {
  kicker: 'קייס סטדי',
  title: 'מרעיון למוצר תוך שלושה חודשים',
  subtitle: 'עיצוב ובניית MVP שימושי וניתן להרחבה',
  lead: [
    'GoMatchIt היה מוצר חדש שהיה צריך לעבור מרעיון למשהו שאנשים יכולים באמת להשתמש בו, בתוך שלושה חודשים בלבד.',
    'הייתי אחראי על הגדרת חוויית המוצר מהיסוד: להבין מה צריך להיבנות קודם, לעצב את הפלואו המרכזי, לבנות את הממשק ולעבוד בצמוד לפיתוח כדי להפוך את הרעיונות למוצר עובד.',
    'המטרה לא הייתה לעצב הכול. היא הייתה להבין מה חייב להיות קיים כדי שהמוצר יהיה שימושי, מה יכול לחכות, ואיך לבנות בסיס שיוכל לגדול מעבר ל־MVP.',
  ],
  meta: [
    { label: 'סוג', value: 'עיצוב מוצר, מרעיון ל־MVP' },
    { label: 'לקוח', value: 'GoMatchIt' },
    { label: 'התפקיד שלי', value: 'מעצב מוצר מוביל' },
    { label: 'לוח זמנים', value: 'שלושה חודשים' },
    { label: 'תעשייה', value: 'B2B SaaS, אוטומציית תהליכים' },
  ],
  toolsLabel: 'כלים',
  heroFigure: {
    src: `${G}/gomatchit_cover_001-1.png`,
    aspect: '16/9',
    alt: 'הקנבס של GoMatchIt עם תהליך ממופה על בלוקי פעילות בצבעים שונים',
  },
  sections: [
    {
      number: '01',
      title: 'המוצר',
      body: [
        'GoMatchIt מאפשר לחברה למפות תהליך עסקי שרץ על פני כמה תוכנות בבת אחת. המשתמש פורש את התהליך על קנבס כשרשרת של בלוקי פעילות, מחבר את הכלים שכל שלב תלוי בהם, ומקבל משהו שכל הארגון יכול לקרוא.',
        'האתגר היה לתת למוצר מספיק מבנה כדי שיהיה ברור, ובמקביל לשמור על הגרסה הראשונה ממוקדת מספיק כדי שאפשר יהיה באמת לבנות ולהשיק אותה בזמן שהיה לנו.',
      ],
      figure: {
        src: `${G}/gomatchit_canvas_img_002-1.png`,
        aspect: '1000/510',
        alt: 'הקנבס עם קבוצת תהליך מכותרת שמכילה בלוקי פעילות צבעוניים המחוברים בקווי זרימה',
        caption: 'תהליך על הקנבס. הצבע נושא את סוג השלב, והתוכנה שהוא נוגע בה יושבת בתוך הבלוק.',
      },
    },
    {
      number: '02',
      title: 'מתחילים מהליבה',
      body: [
        'השלב הראשון לא היה לעצב את הממשק. הוא היה להחליט מה המוצר באמת צריך לעשות.',
        'המייסד כבר בנה גרסה עובדת. כל מה שהמוצר היה צריך כבר נמצא שם: הגריד, השבילים, הפאנל להוספת תהליך, הזום. מה שלא היה שם הוא סדר חשיבות, ולכן שום דבר לא אמר לך לאן להסתכל ומה חשוב קודם.',
        'זו נקודת פתיחה טובה לרשת. השאלות המבניות כבר נענו על ידי מי שמבין את התחום, ומה שנשאר היה בעיית עיצוב אמיתית: להפריד בין מה שחייב להיות ב־MVP לבין מה שיכול להגיע בהמשך, כדי לבנות גרסה ראשונה ממוקדת ולא עותק קטן של מוצר גדול בהרבה.',
      ],
      figure: {
        src: `${G}/gomatchit_canvas_img_001-1.png`,
        aspect: '1000/510',
        alt: 'הגרסה המוקדמת של GoMatchIt: קנבס גריד אפור עם פאנל להוספת תהליך ובלי היררכיה ויזואלית',
        caption: 'הגרסה שקיבלתי לידיי. הכול נמצא שם, ושום דבר לא חזק יותר משום דבר אחר.',
      },
    },
    {
      number: '03',
      title: 'למצוא את המבנה הנכון',
      body: [
        'ברגע שהליבה הייתה ברורה, העבודה עברה ליחסים בין החלקים השונים של המוצר.',
        'תהליך הוא שרשרת של בלוקי פעילות, וכל אחד מהם מסווג לפי מה שהוא עושה: יצירת רשומה, העברת מידע, בדיקה. הסיווג נישא על ידי צבע ועל ידי תווית בראש הבלוק, כך שתהליך קריא ממרחק עוד לפני שקוראים בו מילה. כל בלוק גם מציג את התוכנה שהוא נוגע בה, כי לראות ששלב אחד רץ דרך כלי אחד ומוסר לכלי אחר זה רוב הסיבה לצייר את התהליך מלכתחילה.',
        'אחר כך הגיע הקיבוץ. תהליך יושב בתוך מסגרת עם כותרת על הקנבס, וזה מאפשר לכמה תהליכים לחלוק סביבת עבודה אחת בלי להתמזג לתרשים אחד בלתי מובחן.',
      ],
    },
    {
      number: '04',
      title: 'המקומות המורכבים',
      body: [
        'חלקים מסוימים במוצר דרשו יותר מממשק ישיר. הגדרה של בלוק פעילות דורשת הרבה שדות: התהליך שהוא שייך אליו, קטגוריית הפעילות והסוג שלה, הטריגר, המבצעים, הישויות והשיטה. בעמוד נפרד המשתמש מאבד את ההקשר שנתן לבלוק משמעות. בפופאובר קטן זה פשוט לא נכנס.',
        'עבדתי על זה דרך פרוטוטייפים, והפתרון היה פאנל רחב שנפתח מעל הקנבס, עם השדות מקובצים לעמודות מסומנות ותצוגה מקדימה חיה של הבלוק שנוצר לצידן. אתה מגדיר את הדבר תוך כדי שאתה מסתכל עליו.',
        'אותה שאלה חלה על הניווט. הקנבס צריך פקדים בכמה רמות בו זמנית, אז פיצלנו אותם: סרגל עליון קבוע לסביבת העבודה ולתהליך, קבוצת פקדים מעוגנת לקנבס ליצירת בלוקים, והזום מוצמד לפינה. לכל אחד מקום קבוע, וכך לומדים אותו פעם אחת.',
      ],
      figure: {
        src: `${G}/gomatchit_canvas_img_highlight.png`,
        aspect: '1000/510',
        alt: 'עורך בלוק הפעילות פתוח מעל הקנבס, עם עמודות שדות מקובצות, תצוגה מקדימה חיה של הבלוק, והפקדים שמסביב מסומנים',
        caption: 'העורך מעל הקנבס, עם הפקדים הקבועים מסומנים. תצוגה מקדימה חיה בצד.',
      },
    },
    {
      number: '05',
      title: 'לבנות מערכת, לא רק מסכים',
      body: [
        'ככל שהמוצר התגבש, מסכים בודדים הפכו לדפוסים ולרכיבים שאפשר להשתמש בהם שוב.',
        'המטרה לא הייתה רק עקביות ויזואלית בתוך ה־MVP. היא הייתה בסיס שיוכל לתמוך בגרסאות הבאות בלי לעצב הכול מחדש. טיפוגרפיה, צבע עם חוקי שימוש מוצמדים לו, מרווחים, רדיוסים והאנטומיה של בלוק הוגדרו פעם אחת כטוקנים, כך שמסכים מאוחרים יותר הפכו להרכבה ולא להמצאה.',
        'ההשוואה שלמטה היא המקום שבו זה נחת. גרסה מוקדמת נשאה כותרת צבועה כבדה ורצועת קטגוריה נפרדת. הגרסה שנשלחה מוותרת על הרצועה, מעבירה את הסיווג לראש הבלוק, ונותנת את הרוחב לנתיב האינטגרציה במקום. פשוטה יותר לבנייה וקריאה יותר, וזו בדרך כלל העסקה כשמעצבים בתוך אילוץ אמיתי ולא סביבו.',
      ],
      figure: {
        src: `${G}/gomatchit_canvas_img_005.png`,
        aspect: '1000/350',
        alt: 'שתי גרסאות עיצוב של בלוק הפעילות זו לצד זו, מסומנות Version 01 ו־Version 03',
        caption: 'Version 01 מול הגרסה שנשלחה. פחות קישוט, יותר מקום לנתיב האינטגרציה.',
      },
    },
    {
      number: '06',
      title: 'מפרוטוטייפ למוצר',
      body: [
        'העבודה נעשתה בצמוד לפיתוח לאורך כל הדרך. במקום לעצב הכול מראש ואז להעביר לפיתוח, עבדנו הלוך ושוב בין עיצוב למימוש.',
        'זה אפשר לנו לבדוק רעיונות מול המוצר האמיתי, לזהות בעיות מוקדם יותר ולקבל החלטות מול מה שבאמת אפשר לבנות. עם מפתח אחד ותאריך קבוע זו לא הייתה העדפה. זו הייתה הדרך היחידה שלוח הזמנים החזיק.',
      ],
    },
    {
      number: '07',
      title: 'מה השקנו',
      body: [
        'אחרי שלושה חודשים המוצר עבר מרעיון ראשוני ל־MVP עובד.',
        'התוצאה לא הייתה כל פיצ׳ר שיכולנו לדמיין. היא הייתה גרסה ראשונה וממוקדת שביססה את חוויית הליבה והשאירה תשתית להמשך.',
        'הדשבורד הוא המקום שבו זה נראה הכי בבירור. ניווט בצד אחד, רשימה שאפשר לחפש ולסנן בה עם בעלים, תוכנות, סטטוס ותאריכים במרכז, ותצוגה מקדימה של מה שנבחר בצד השני. אין בו שום דבר חדשני, וזה בכוונה: הקנבס הוא המקום שבו המוצר מרוויח את הייחוד שלו, והדשבורד צריך להיות מוכר מיד.',
      ],
      figure: {
        src: `${G}/gomatchit_canvas_img_expermental.png`,
        aspect: '1000/510',
        alt: 'הדשבורד של GoMatchIt: סרגל ניווט, רשימת תהליכים עם עמודות בעלים, תוכנות וסטטוס, ופאנל תצוגה מקדימה',
        caption: 'לנווט, לרשום, להציג. המשטח הכי פחות מפתיע במוצר, בכוונה.',
      },
    },
  ],
  closing: {
    title: 'מה לקחתי מהפרויקט',
    body: [
      'השיעור המרכזי לא היה איך לעצב מהר יותר. הוא היה איך להחליט מה לא לעצב עדיין.',
      'תחת מגבלת זמן אמיתית, עיצוב מוצר הוא שאלה של תעדוף לא פחות משהוא שאלה של ממשקים: למצוא את המוצר הקטן ביותר שיכול להיות שימושי, לקבל את ההחלטות החשובות מוקדם, ולבנות מספיק מערכת כדי לאפשר את הגרסה הבאה בלי לבנות יותר מדי בראשונה.',
    ],
  },
};

export const getGoMatchItCopy = (locale: string): GoMatchItCopy => (locale === 'he' ? he : en);
