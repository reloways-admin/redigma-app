export interface Article {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export const articles: Article[] = [
  {
    slug: 'eight-years-and-a-new-door',
    title: 'Eight years, and a new door',
    date: '2026-10-06',
    excerpt: 'I came to Bit thinking I would stay for a month or two. I stayed for eight years.',
    content: `I came to Bit thinking I would stay for a month or two.

I stayed for eight years.

From 2018 until last month, I was Head of Design at Bit, as a freelancer. Eight years on one product. The same app, the same users, the same question every morning: how do we make something people use with their money feel simple and safe?

## How it started

I got to Bit through a friend. We freelanced together at another office. He was busy, he didn't have the time, and he sent Bit my way.

I came as a freelancer because I had done some very good social network work. I arrived thinking, "I'll work here a month or two, and that's it."

The interview was in the office. I showed my work. It felt cool, nice, exciting. I didn't fully know what I was walking into. There was another designer there. The product looked totally different then.

I'm truly grateful for that interview.

## We grew together

Over time, I gradually took more ownership of changing the product, understanding it, and learning it. They were learning how to build it too. A lot changed mid-flight.

There was a shared excitement. Always something new. Always a "let's do things." It was a small office, and it was really fun.

That is where I learned long-term teamwork: taking responsibility for what is mine, and doing it end to end. We worked as a team with people, remotely, through some hard COVID periods. And I had an amazing manager.

I also learned a lot about myself. How good I am. That I need to trust myself. That I can hold a product alone, and that there is no need to fear that.

Some of that came from opening up in moments when I thought I couldn't. When I let others do the work, I understood that certain things were mine to take responsibility for, and that I shouldn't fear it. That is what makes you grow.

Eight years on one product also teaches you things a portfolio of short projects never can. Every screen is a decision about trust, because people use what you design with their money. The best design work is often deciding what not to build yet. Real users will find every edge case you hoped they wouldn't. And don't fear new products and new patterns. Not fearing them made me grow. It made me hungrier to do things. The same goes for the things you think will take your job. They might help you. They might take some parts of it. And they might bring you many new things.

## Freedom, and Berlin

Bit gave me a freedom other places didn't. I went from a full week, to four days, to three days. Flexible days I could play with while I worked.

Somewhere in those eight years I also moved to Berlin, and kept designing for Israel from here. I had always told them I wanted to move to Germany. They understood me. They supported me.

It was an amazing workplace. Thank you for the belief, and for the freedom to do what I wanted.

## The chapter that closed

Like every good thing, there is an end. Last month that chapter closed. Our road together has ended, and that hurts.

But I wouldn't turn the wheel back in any way. I'm grateful for those eight years, and for the people I built them with. I'm headed somewhere new.

## A new door

And a new door is already open.

That last lesson, not fearing the new thing, is a big part of what comes next.

Together with my partner Keren Rightler, I co-founded **Two Otters Studio**. We help businesses that already have a website or a product figure out what is actually holding it back, and what to do next:

- Strategy and messaging that speak the customer's language
- Product definition and UX
- Fast, clickable prototypes, so you see the answer before you commit to months of design

We use AI heavily in how we work. It makes us faster. It doesn't make the decisions. That part is still ours, and it is the part clients pay for.

Keren is in Thailand, I'm in Berlin, and between us the studio basically never sleeps.

If your site or product feels like it isn't saying the right thing, I'd love to hear about it. Comment, or send me a message.

And if someone you know needs exactly this, a tag means a lot right now. 🦦`,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getAllArticles(): Article[] {
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
