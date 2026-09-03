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
  closingFigure: Figure;
  sections: {
    number: string;
    kicker?: string;
    title: string;
    body: string[];
    figure?: Figure;
    figures?: Figure[];
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
    'My part was the design: the visual language, the interface, and a new icon system built from scratch. Along with a good deal of thinking about the cat character that would carry the new product. Keren Rightler was alongside the project from the beginning, and I worked with her, with the founders, and with the illustrator to get the right illustration for every area of the site.',
    'Keren led the strategy, the brand foundation, and the marketing side. That way the two of us ran in parallel and handed the client one result rather than two halves.',
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
    src: `${F}/fincat-hero.webp`,
    aspect: '2560/1636',
    alt: 'The Fincat homepage on a laptop held in two hands, with the illustrated cat and the yellow field',
    caption: 'The homepage as it shipped. The cat and the yellow stayed, everything around them changed.',
  },
  sections: [
    {
      number: '01',
      title: 'What I Inherited Before the Work Started',
      body: [
        'Fincat arrived with two things its audience already recognised: an illustrated cat as the face of the brand, and a palette of black, yellow, and white. You could say the start of the work was clear, in the sense that what could not be given up had already been decided.',
        'It was genuinely interesting to work this way, against a brand that already has a presence, where the job is to stay close to it and change it at the same time. A community that has been around a while has visual equity, and the instinct to modernise by clearing the table would have cost more than it gained. People would have stopped recognising the thing they had followed for years.',
        'So the brief was narrow, and inside that narrowness I had real creative freedom. It was clear to all of us that the cat and the palette stay, and within those limits the client gave me room to find a new graphic language and develop it.',
      ],
      figure: {
        src: `${F}/fincat-visual-language.webp`,
        aspect: '2816/1400',
        alt: 'The Fincat visual language: colour values, a type scale, cards, form elements, avatars, and the cat',
        caption: 'What came out of that constraint. Palette, type scale, components, and the cat, as one language.',
      },
    },
    {
      number: '02',
      title: 'Which Cat, and What World It Lives In',
      body: [
        'The cat itself was never in question. It was the mark people knew the brand by, and the name is Fincat, so it was obvious to everyone that the cat stays.',
        'The open question was which direction to take it in. We explored that together, in full page designs rather than sketches, because you cannot settle the difference between one cat and another without seeing the world it lives in: which pages it has to work on, and how it holds up against the typography and the text around it.',
        'We knew early that we wanted an illustrated cat. What took time was working out how, and in what technique, to draw it. I started by bringing in illustrations, and once we found the right cat we knew it was the one.',
      ],
      figures: [
        {
          src: `${F}/fincat_img_005.png`,
          aspect: '4248/1815',
          alt: 'A range of cat variations in different builds, expressions, and levels of detail',
          caption: 'Searching for the cat. Different builds, different levels of detail, different techniques.',
        },
        {
          src: `${F}/fincat-cat-directions.png`,
          aspect: '4540/4996',
          alt: 'Two versions of the Fincat homepage, one with the cat walking through a city scene and one with the cat seated against a yellow field',
          caption: 'And the same question at full page size. The one below is the one we went with.',
        },
      ],
    },
    {
      number: '03',
      kicker: 'Iconography',
      title: 'New Icons',
      body: [
        'A marketplace of advisers needs a lot of small signals: kinds of service, stages of a process, categories, and more. That means a whole icon set, and it was the part of the process I enjoyed making most.',
        'While working on them I decided the brand needed more colour. Soft tones we could use inside the icons, as fields of colour that lift them off the page. The icons themselves are flat, but built in layers.',
        'I designed whole families of them, to stand for different areas and categories in the product and to give the graphic language some range.',
        'Alongside the category icons I made a second set to support the language, with a light three dimensional shadow, as a counter to the two dimensional cat that reads as though it has depth. That was an important decision, and it is what keeps the two apart.',
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
      kicker: 'Illustration',
      title: 'A Cat in a Range of Poses',
      body: [
        'The cat could not stay a single pose. A brand that has a character needs that character in enough situations to carry a whole site, and one drawing repeated everywhere reads as a logo rather than a personality.',
        'The illustration itself was drawn by an illustrator. My part was designing the screens and working out how the cat could appear as part of the page.',
        'That order mattered. I designed the pages first and worked out where the character was needed and what it was doing there, and only then was the cat drawn and placed into the frame.',
      ],
      figure: {
        placeholder: 'The illustration in use across the site, drawn to a brief that came out of the layouts',
        aspect: '16/9',
      },
    },
    {
      number: '05',
      title: 'Onboarding for Service Providers',
      body: [
        'The other side of the marketplace is the service providers, and for them we built a sign-up experience that is designed and pleasant, using the illustrations and the icons.',
        'That matters more than it sounds. Providers are the supply side of a marketplace, and if signing up feels like paperwork they simply do not finish it. The first screen opens the process, and the second is where the choices and the fields are.',
        'It is also where the icons earn their keep. They label the choices, so the screen can be scanned instead of read, and the yellow marks where to act. The cat stays present but measured, so the character of the brand keeps someone company through the process without getting in the way of them filling it in.',
      ],
      figure: {
        src: `${F}/fincat_img_0062.png`,
        aspect: '4020/1989',
        alt: 'Two Fincat onboarding screens for service providers, an opening screen and a screen of choices and input fields, both using the cat illustrations and the brand yellow',
        caption: 'Service provider onboarding. The opening, then the choices and the fields.',
      },
    },
  ],
  closingFigure: {
    src: `${F}/fincat-overview.webp`,
    aspect: '2816/1586',
    alt: 'The Fincat adviser listing on a laptop, showing rated advisers with photographs',
    caption: 'The marketplace the whole thing was built to carry.',
  },
  closing: {
    title: 'Design and Strategy, Running Together',
    body: [
      'What made this project work is that it was not handed from one person to the other. Keren defined the audience, the brand foundation, and the way Fincat would reach people, and I designed what the users would see and go through. The work was a synergy of doing.',
      'Working in a team is not new to me and I like it a great deal, being part of a group that moves a project along. Having feedback, and someone able to look at the work from outside, is one of the most important things there is for making products with real impact.',
      'Keren and I still take on work together where a project genuinely needs both halves, so if that is the shape of what you need, it is worth asking about as one piece of work rather than two.',
    ],
  },
};

const he: FincatCopy = {
  kicker: 'קייס סטדי',
  title: 'עיצוב מותג פיננסי שאנשים כבר סמכו עליו',
  subtitle: 'להפוך קהילה ותיקה למשהו שנראה ועובד כמו עסק',
  lead: [
    'חתול פיננסי הוא שם מוכר בעולם הפיננסים בישראל. הוא צמח קודם כל כקהילה, וכשנכנסתי לתמונה הוא רצה לפעול כמותג: אתר אמיתי, מרקטפלייס של יועצים ונותני שירות, ודרך להציג את עצמו שתתאים למה שהוא כבר הפך להיות.',
    'החלק שלי היה העיצוב: השפה הוויזואלית, הממשק, ומערכת אייקונים חדשה שעוצבה מאפס. וגם חשיבה מעמיקה על דמות החתול שתלווה את המוצר החדש. קרן רייטלר ליוותה את הפרויקט מההתחלה, ואני עבדתי מולה בשילוב כוחות, יחד עם המייסדים ועם המאיירת, כדי לקבל את האיורים המושלמים לכל אזור באתר.',
    'קרן הובילה את האסטרטגיה, הבסיס המותגי והצד השיווקי. וכך שנינו רצנו במקביל ומסרנו ללקוחות שלנו תוצאה אחת, ולא שני חצאים.',
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
    src: `${F}/fincat-hero.webp`,
    aspect: '2560/1636',
    alt: 'דף הבית של חתול פיננסי על מחשב נייד שמוחזק בשתי ידיים, עם החתול המאויר והשדה הצהוב',
    caption: 'דף הבית כפי שעלה לאוויר. החתול והצהוב נשארו, כל השאר השתנה.',
  },
  sections: [
    {
      number: '01',
      title: 'מה קיבלתי בירושה לפני תחילת העבודה',
      body: [
        'חתול פיננסי הגיע עם שני דברים שהקהל שלו כבר זיהה: חתול מאויר כפנים של המותג, ופלטת שחור, צהוב ולבן. אפשר לומר שתחילת העבודה הייתה ברורה, במובן הזה שידענו על מה אסור לוותר.',
        'היה מעניין מאוד לעבוד ככה, מול מותג שכבר יש לו נוכחות, ולהבין איך להיצמד אליה ובו בזמן גם לשנות אותה. לקהילה שקיימת כבר זמן יש נכסים ויזואליים, והדחף לרענן על ידי ניקוי השולחן היה עולה יותר ממה שהוא מרוויח. אנשים היו מפסיקים לזהות את הדבר שהם עוקבים אחריו שנים.',
        'לכן הבריף היה צר, ודווקא בתוכו קיבלתי חופש יצירתי אמיתי. היה ברור לכולנו שהחתול ופלטת הצבעים נשארים, ובתוך הגבולות האלה הלקוחות נתנו לי מקום למצוא שפה גרפית חדשה ולפתח אותה.',
      ],
      figure: {
        src: `${F}/fincat-visual-language.webp`,
        aspect: '2816/1400',
        alt: 'השפה הוויזואלית של חתול פיננסי: ערכי צבע, סולם טיפוגרפי, כרטיסים, אלמנטים של טופס, אווטרים והחתול',
        caption: 'מה שיצא מהאילוץ הזה. פלטה, סולם טיפוגרפי, קומפוננטות והחתול, כשפה אחת.',
      },
    },
    {
      number: '02',
      title: 'איזה חתול, ובאיזה עולם הוא חי',
      body: [
        'החתול עצמו לא היה בסימן שאלה. הוא היה סימן ההיכר של המותג, והשם עצמו הוא חתול פיננסי, אז היה ברור לכולם שהחתול נשאר.',
        'השאלה הפתוחה הייתה לאיזה כיוון לוקחים אותו. חקרנו את זה יחד, בעמודים מלאים ולא בסקיצות, כי את ההבדל בין חתול לחתול אי אפשר להכריע בלי לראות את העולם שבו הוא חי: באילו עמודים הוא צריך לתפקד, ואיך הוא בא לידי ביטוי אל מול הטיפוגרפיה והטקסטים באתר.',
        'הבנו מוקדם שאנחנו רוצים חתול מאויר. מה שלקח זמן היה לבחון באיזו דרך ובאיזו טכניקה נאייר אותו. בהתחלה אני הבאתי איורים, ואחרי שמצאנו את החתול המושלם ידענו שזה הוא.',
      ],
      figures: [
        {
          src: `${F}/fincat_img_005.png`,
          aspect: '4248/1815',
          alt: 'מגוון וריאציות של החתול במבנים, בהבעות וברמות פירוט שונות',
          caption: 'החיפוש אחרי החתול. מבנים שונים, רמות פירוט שונות, טכניקות שונות.',
        },
        {
          src: `${F}/fincat-cat-directions.png`,
          aspect: '4540/4996',
          alt: 'שתי גרסאות של דף הבית של חתול פיננסי, אחת עם החתול מהלך בתוך סצנה עירונית ואחת עם החתול יושב על שדה צהוב',
          caption: 'ואותה שאלה בגודל של עמוד מלא. התחתון הוא זה שבחרנו.',
        },
      ],
    },
    {
      number: '03',
      kicker: 'אייקונוגרפיה',
      title: 'אייקונים חדשים',
      body: [
        'מרקטפלייס של יועצים דורש הרבה סימנים קטנים: סוגי שירות, שלבים בתהליך, קטגוריות ועוד. כלומר סט אייקונים שלם, וזה היה החלק שהכי נהניתי ליצור בתהליך.',
        'תוך כדי העבודה על האייקונים החלטתי שצריך להוסיף עוד צבעים למותג. צבעים רכים שנוכל להשתמש בהם בתוך האייקונים, כמשטחי צבע שמבליטים אותם. האייקונים עצמם שטוחים, אבל בנויים בשכבות.',
        'עיצבתי משפחות שלמות של אייקונים, כדי לייצג אזורים וקטגוריות שונים במוצר ולתת עושר לשפה הגרפית.',
        'לצד האייקונים של הקטגוריות יצרתי גם שפה של אייקונים שתומכים בשפה, עם אפקט קל של הצללה תלת ממדית, כקונטרה לחתול הדו ממדי שנראה תלת ממדי. זו הייתה החלטה עיצובית חשובה, והיא מה שמבדל בין השניים.',
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
      kicker: 'איור',
      title: 'חתול במגוון תנוחות',
      body: [
        'החתול לא יכול היה להישאר בתנוחה אחת. מותג שיש לו דמות צריך אותה במספיק מצבים כדי לשאת אתר שלם, ואיור אחד שחוזר בכל מקום נקרא כמו לוגו ולא כמו אישיות.',
        'את האיור עצמו ציירה מאיירת. החלק שלי היה עיצוב המסכים והחשיבה איך החתול יכול להופיע כחלק מהעמוד.',
        'הסדר הזה חשוב. קודם עיצבתי את העמודים והבנתי איפה הדמות נחוצה ומה היא עושה שם, ורק אחר כך החתול אויר ונכנס לפריים.',
      ],
      figure: {
        placeholder: 'האיור בשימוש לאורך האתר, שצויר לפי בריף שיצא מהפריסות',
        aspect: '16/9',
      },
    },
    {
      number: '05',
      title: 'חוויית Onboarding לנותני השירות',
      body: [
        'הצד השני של המרקטפלייס הוא נותני השירות, ולהם בנינו חוויית הרשמה מעוצבת ונעימה, על ידי שימוש באיורים ובאייקונים.',
        'זה חשוב יותר ממה שזה נשמע. נותני השירות הם ההיצע של המרקטפלייס, ואם ההרשמה מרגישה כמו מילוי טפסים הם פשוט לא מסיימים אותה. המסך הראשון פותח את התהליך, והשני הוא זה שבו בוחרים ומזינים פרטים.',
        'זה גם המקום שבו האייקונים מוכיחים את עצמם. הם מתייגים את הבחירות, כך שאפשר לסרוק את המסך במקום לקרוא אותו, והצהוב מסמן איפה פועלים. החתול נשאר נוכח אבל מדוד, כדי שהאופי של המותג ילווה את מי שנרשם בלי להפריע לו למלא.',
      ],
      figure: {
        src: `${F}/fincat_img_0062.png`,
        aspect: '4020/1989',
        alt: 'שני מסכי אונבורדינג של חתול פיננסי לנותני שירות, מסך פתיחה ומסך של בחירות ושדות קלט, שניהם עם החתולים המאוירים והצהוב של המותג',
        caption: 'האונבורדינג של נותני השירות. הפתיחה, ואחריה הבחירות והשדות.',
      },
    },
  ],
  closingFigure: {
    src: `${F}/fincat-overview.webp`,
    aspect: '2816/1586',
    alt: 'רשימת היועצים של חתול פיננסי על מחשב נייד, עם יועצים מדורגים ותמונות',
    caption: 'המרקטפלייס שכל זה נבנה כדי לשאת.',
  },
  closing: {
    title: 'עיצוב ואסטרטגיה שרצים ביחד',
    body: [
      'מה שגרם לפרויקט הזה לעבוד הוא שהוא לא עבר מיד ליד. קרן הגדירה את הקהל, את הבסיס המותגי ואת הדרך שבה חתול פיננסי יגיע לאנשים, ואני עיצבתי את מה שהמשתמשים יראו ויחוו. העבודה הייתה סינרגיה של עשייה.',
      'עבודה בצוות היא לא זרה לי ואני מאוד אוהב אותה, להיות חלק מצוות שמניע פרויקטים. כשיש פידבק ויכולת התבוננות מהצד, זה אחד הדברים החשובים ביותר כדי ליצור מוצרים איכותיים עם אימפקט אמיתי.',
      'קרן ואני ממשיכים לקחת יחד עבודות שבאמת דורשות את שני החצאים, אז אם זו הצורה של מה שאתם צריכים, שווה לשאול על זה כעבודה אחת ולא כשתיים.',
    ],
  },
};

export const getFincatCopy = (locale: string): FincatCopy => (locale === 'he' ? he : en);
