/* Fincat case study copy. Both languages side by side, same shape as the others.
   A figure with no `src` renders as a labelled placeholder. */

export type Figure = { src?: string; placeholder?: string; aspect?: string; alt?: string; caption?: string };

export type FincatCopy = {
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

const F = '/images/projects/fincat';

const en: FincatCopy = {
  kicker: 'Case study',
  title: 'Designing a Finance Brand That People Already Trusted',
  subtitle: 'Turning a long-running community into something that looks and works like a business',
  lead: [
    'Fincat is an established name in Israeli finance. It grew as a community first, and by the time I came in it wanted to operate as a brand: a real site, a marketplace of advisers and service providers, and a way of presenting itself that matched what it had become.',
    'My part was the design: the visual language, the interface, and a new icon system designed from scratch. Along with a good deal of thinking about the cat illustration itself, worked through with Keren, with the founders, and with the illustrator, so the drawings that came back were the right ones for each area of the site.',
    'Keren Rightler led the strategy, the brand foundation, and the marketing side. That way the two of us ran in parallel and handed the client one result rather than two halves.',
  ],
  meta: [
    { label: 'Type', value: 'Visual language and product design' },
    { label: 'Client', value: 'Fincat' },
    { label: 'My Role', value: 'Design, UI, and art direction' },
    { label: 'Strategy', value: 'Keren Rightler' },
    { label: 'Industry', value: 'FinTech, financial marketplace' },
  ],
  toolsLabel: 'Tools',
  heroFigure: {
    src: `${F}/fincat_cover_001.jpg`,
    aspect: '16/9',
    alt: 'The Fincat homepage: the illustrated cat beside a headline about today’s financial choices leading to tomorrow’s independence',
    caption: 'The homepage as it shipped. The cat and the yellow stayed, everything around them changed.',
  },
  sections: [
    {
      number: '01',
      title: 'What Could Not Be Thrown Away',
      body: [
        'This was not a blank page. Fincat arrived with two things its audience already recognised: an illustrated cat as the face of the brand, and a palette of black, yellow, and white.',
        'That is the interesting constraint. A community that has been around a while has visual equity, and the instinct to modernise by clearing the table would have cost more than it gained. People would have stopped recognising the thing they had followed for years.',
        'So the brief was narrow and hard at the same time: keep the cat and keep the palette, and change everything else until the brand reads as a business rather than a page you follow.',
      ],
    },
    {
      number: '02',
      title: 'Which Cat, and in What Technique',
      body: [
        'The cat itself was never in question. It was the mark people knew the brand by, and the name is Fincat, so it was obvious to everyone that the cat stays.',
        'The open question was which direction to take it in. We explored that together, in full page designs rather than sketches, because the difference between one cat and another does not settle in the abstract. A cat in a scene reads differently from a cat as a portrait, and the illustration technique changes how serious the whole page feels before anyone reads a word.',
        'Out of that exploration we arrived together at which cat to use and in what technique, and that decision set the terms for every illustration that came after it.',
      ],
      figure: {
        src: `${F}/fincat-cat-directions.png`,
        aspect: '4540/4996',
        alt: 'Two versions of the Fincat homepage, one with the cat walking through a city scene and one with the cat seated against a yellow field',
        caption: 'Two directions for the same cat. The one below is the one we went with.',
      },
    },
    {
      number: '03',
      kicker: 'Iconography',
      title: 'Icons Next to an Illustrated Cat',
      body: [
        'A marketplace of advisers needs a lot of small signals: kinds of service, stages of a process, categories of question. That means an icon set, and an icon set was the hardest thing to get right here.',
        'The reason is the cat. A playful illustration next to geometric, neutral icons reads as two brands sharing a page. Push the icons too far toward the illustration and they stop working at small sizes and start competing with the character.',
        'I designed them as one family, in circles that echo the roundness of the illustration, with a single weight and a shared level of detail. They sit next to the cat without imitating it, and they still read at the size a list actually uses.',
      ],
      figure: {
        src: `${F}/fincat_img_0042.png`,
        aspect: '4248/1815',
        alt: 'Sixteen Fincat icons in circular frames on a black background, covering documents, search, money, insurance, and legal subjects',
        caption: 'The icon set. One weight, one level of detail, round frames that answer the illustration without copying it.',
      },
    },
    {
      number: '04',
      kicker: 'Art direction',
      title: 'Directing the Illustration',
      body: [
        'The cat could not stay a single pose. A brand that has a character needs that character in enough situations to carry a whole site, and one drawing repeated everywhere reads as a logo rather than a personality.',
        'The illustration itself was drawn by an illustrator. My part was the direction: defining the range of poses the brand needed, choosing references, setting the level of detail and the way the cat sits inside the layouts, and reviewing the work as it came back.',
        'That order mattered. I designed the pages first and worked out where the character was needed and doing what, and only then briefed the illustration. Commissioning drawings first and finding places for them afterwards is how a brand ends up with charming assets that never quite fit.',
      ],
      figure: {
        src: `${F}/fincat_img_005.png`,
        aspect: '4248/1815',
        alt: 'A family of Fincat cat illustrations in different poses and expressions',
        caption: 'The pose range, drawn to a brief that came out of the layouts rather than the other way round.',
      },
    },
    {
      number: '05',
      title: 'Where a Friendly Brand Has to Work Hardest',
      body: [
        'The pleasant part of a brand like this is the homepage. The part that decides whether it works is the form.',
        'Fincat asks people to hand over details about their money and to be matched with an adviser they have never met. That is the moment where charm can turn into a reason to distrust, so those screens got the most restrained treatment on the site: the character present but quiet, plenty of room, and the structure doing the reassuring.',
      ],
      figure: {
        src: `${F}/fincat_img_0062.png`,
        aspect: '4020/1989',
        alt: 'Two Fincat screens for joining as a partner, with a form and the cat illustration used sparingly',
        caption: 'Joining as a service provider. The character stays, and steps back.',
      },
    },
  ],
  closing: {
    title: 'Design and Strategy, Running Together',
    body: [
      'What made this project work is that it was not handed between two people. Keren was defining the audience, the brand foundation, and how Fincat would reach people, while I was designing what those people would land on. Neither half waited for the other to finish.',
      'That is a pairing I keep coming back to, and Keren and I still take on work together where a project genuinely needs both: strategy that decides what should be said, and design that decides what it looks like when someone actually meets it.',
      'If that is the shape of what you need, it is worth asking about as one piece of work rather than two.',
    ],
  },
};

const he: FincatCopy = {
  kicker: 'קייס סטדי',
  title: 'עיצוב מותג פיננסי שאנשים כבר סמכו עליו',
  subtitle: 'להפוך קהילה ותיקה למשהו שנראה ועובד כמו עסק',
  lead: [
    'חתול פיננסי הוא שם מוכר בעולם הפיננסים בישראל. הוא צמח קודם כל כקהילה, וכשנכנסתי לתמונה הוא רצה לפעול כמותג: אתר אמיתי, מרקטפלייס של יועצים ונותני שירות, ודרך להציג את עצמו שתתאים למה שהוא כבר הפך להיות.',
    'החלק שלי היה העיצוב: השפה הוויזואלית, הממשק, ומערכת אייקונים חדשה שעוצבה מאפס. וגם חשיבה מעמיקה על האיור של החתול, בעבודה מול קרן, מול המייסדים ומול המאיירת, כדי לקבל את האיורים המושלמים לכל אזור באתר.',
    'קרן רייטלר הובילה את האסטרטגיה, הבסיס המותגי והצד השיווקי. וכך שנינו רצנו במקביל ומסרנו ללקוחות שלנו תוצאה אחת, ולא שני חצאים.',
  ],
  meta: [
    { label: 'סוג', value: 'שפה ויזואלית ועיצוב מוצר' },
    { label: 'לקוח', value: 'חתול פיננסי' },
    { label: 'התפקיד שלי', value: 'עיצוב, ממשק ובימוי איור' },
    { label: 'אסטרטגיה', value: 'קרן רייטלר' },
    { label: 'תעשייה', value: 'פינטק, מרקטפלייס פיננסי' },
  ],
  toolsLabel: 'כלים',
  heroFigure: {
    src: `${F}/fincat_cover_001.jpg`,
    aspect: '16/9',
    alt: 'דף הבית של חתול פיננסי: החתול המאויר לצד כותרת על הבחירות הכלכליות של היום כדרך לעצמאות של מחר',
    caption: 'דף הבית כפי שעלה לאוויר. החתול והצהוב נשארו, כל השאר השתנה.',
  },
  sections: [
    {
      number: '01',
      title: 'מה שאסור היה לזרוק',
      body: [
        'זה לא היה דף חלק. חתול פיננסי הגיע עם שני דברים שהקהל שלו כבר זיהה: חתול מאויר כפנים של המותג, ופלטת שחור, צהוב ולבן.',
        'זה האילוץ המעניין. לקהילה שקיימת כבר זמן יש נכסים ויזואליים, והדחף לרענן על ידי ניקוי השולחן היה עולה יותר ממה שהוא מרוויח. אנשים היו מפסיקים לזהות את הדבר שהם עוקבים אחריו שנים.',
        'לכן הבריף היה צר וקשה בו זמנית: להשאיר את החתול ואת הפלטה, ולשנות כל דבר אחר עד שהמותג נקרא כמו עסק ולא כמו עמוד שעוקבים אחריו.',
      ],
    },
    {
      number: '02',
      title: 'איזה חתול, ובאיזו טכניקה',
      body: [
        'החתול עצמו לא היה בסימן שאלה. הוא היה סימן ההיכר של המותג, והשם עצמו הוא חתול פיננסי, אז היה ברור לכולם שהחתול נשאר.',
        'השאלה הפתוחה הייתה לאיזה כיוון לוקחים אותו. חקרנו את זה יחד, בעמודים מלאים ולא בסקיצות, כי את ההבדל בין חתול לחתול אי אפשר להכריע בהפשטה. חתול בתוך סצנה נקרא אחרת מחתול כדיוקן, וטכניקת האיור קובעת כמה רצינית מרגישה כל הפריסה עוד לפני שקוראים מילה.',
        'מתוך החקירה הזאת הגענו יחד להחלטה באיזה חתול נשתמש ובאיזו טכניקה, וההחלטה הזאת קבעה את התנאים לכל האיורים שבאו אחריה.',
      ],
      figure: {
        src: `${F}/fincat-cat-directions.png`,
        aspect: '4540/4996',
        alt: 'שתי גרסאות של דף הבית של חתול פיננסי, אחת עם החתול מהלך בתוך סצנה עירונית ואחת עם החתול יושב על שדה צהוב',
        caption: 'שני כיוונים לאותו חתול. התחתון הוא זה שבחרנו.',
      },
    },
    {
      number: '03',
      kicker: 'אייקונוגרפיה',
      title: 'אייקונים לצד חתול מאויר',
      body: [
        'מרקטפלייס של יועצים דורש הרבה סימנים קטנים: סוגי שירות, שלבים בתהליך, קטגוריות של שאלות. כלומר סט אייקונים שלם, וזה היה החלק הכי עדין בעיצוב.',
        'הקושי הוא החתול. אייקונים גיאומטריים ויבשים לצד איור שובב נראים כמו שני מותגים על אותו עמוד. אבל אם מקרבים אותם יותר מדי לשפה של האיור, הם מאבדים קריאות בקטן ומתחילים להתחרות בדמות עצמה.',
        'עיצבתי אותם כמשפחה אחת, בתוך מסגרות עגולות שמדברות עם הקווים של האיור, במשקל אחיד ובאותה רמת פירוט. הם יושבים ליד החתול בלי לחקות אותו, ונשארים ברורים גם בגודל הקטן שבו הם מופיעים ברשימה.',
      ],
      figure: {
        src: `${F}/fincat_img_0042.png`,
        aspect: '4248/1815',
        alt: 'שישה עשר אייקונים של חתול פיננסי במסגרות עגולות על רקע שחור, בנושאי מסמכים, חיפוש, כסף, ביטוח ומשפט',
        caption: 'סט האייקונים. משקל אחד, רמת פירוט אחת, ומסגרות עגולות שמשיבות לאיור בלי להעתיק אותו.',
      },
    },
    {
      number: '04',
      kicker: 'בימוי',
      title: 'לבַמות את האיור',
      body: [
        'החתול לא יכול היה להישאר בתנוחה אחת. מותג שיש לו דמות צריך אותה במספיק מצבים כדי לשאת אתר שלם, ואיור אחד שחוזר בכל מקום נקרא כמו לוגו ולא כמו אישיות.',
        'את האיור עצמו ציירה מאיירת. החלק שלי היה הבימוי: להגדיר את טווח התנוחות שהמותג צריך, לבחור רפרנסים, לקבוע את רמת הפירוט ואת האופן שבו החתול יושב בתוך הפריסות, ולעבור על העבודה כשהיא חזרה.',
        'הסדר הזה חשוב. קודם עיצבתי את העמודים והבנתי איפה הדמות נחוצה ומה היא עושה שם, ורק אחר כך תדרכתי את האיור. להזמין איורים קודם ואז לחפש להם מקום זו הדרך שבה מותג נשאר עם נכסים מקסימים שלא באמת מתאימים.',
      ],
      figure: {
        src: `${F}/fincat_img_005.png`,
        aspect: '4248/1815',
        alt: 'משפחת איורים של החתול של חתול פיננסי בתנוחות ובהבעות שונות',
        caption: 'טווח התנוחות, שצויר לפי בריף שיצא מהפריסות ולא להיפך.',
      },
    },
    {
      number: '05',
      title: 'איפה מותג ידידותי צריך לעבוד הכי קשה',
      body: [
        'החלק הנעים במותג כזה הוא דף הבית. החלק שקובע אם הוא עובד הוא הטופס.',
        'חתול פיננסי מבקש מאנשים למסור פרטים על הכסף שלהם ולהיות מחוברים ליועץ שהם לא פגשו. זה הרגע שבו חן יכול להתהפך לסיבה לחשוד, ולכן המסכים האלה קיבלו את הטיפול המאופק ביותר באתר: הדמות נוכחת אבל שקטה, הרבה אוויר, והמבנה הוא זה שמרגיע.',
      ],
      figure: {
        src: `${F}/fincat_img_0062.png`,
        aspect: '4020/1989',
        alt: 'שני מסכים של חתול פיננסי להצטרפות כשותף, עם טופס ועם החתול המאויר בשימוש מדוד',
        caption: 'הצטרפות כנותן שירות. הדמות נשארת, ונסוגה צעד אחורה.',
      },
    },
  ],
  closing: {
    title: 'עיצוב ואסטרטגיה שרצים ביחד',
    body: [
      'מה שגרם לפרויקט הזה לעבוד הוא שהוא לא עבר מיד ליד. קרן הגדירה את הקהל, את הבסיס המותגי ואת הדרך שבה חתול פיננסי יגיע לאנשים, ואני עיצבתי את מה שהאנשים האלה ינחתו עליו. אף חצי לא חיכה שהשני יגמור.',
      'זה צירוף שאני חוזר אליו, וקרן ואני ממשיכים לקחת יחד עבודות שבאמת דורשות את שני הדברים: אסטרטגיה שמחליטה מה צריך להיאמר, ועיצוב שמחליט איך זה נראה כשמישהו באמת פוגש את זה.',
      'אם זו הצורה של מה שאתם צריכים, שווה לשאול על זה כעבודה אחת ולא כשתיים.',
    ],
  },
};

export const getFincatCopy = (locale: string): FincatCopy => (locale === 'he' ? he : en);
