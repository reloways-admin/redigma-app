import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message, stage, services, productUrl, figmaUrl } = body;

    const lines: string[] = [];
    if (name)       lines.push(`<p><strong>Name:</strong> ${name}</p>`);
    if (email)      lines.push(`<p><strong>Email:</strong> ${email}</p>`);
    if (stage)      lines.push(`<p><strong>Stage:</strong> ${stage}</p>`);
    if (productUrl) lines.push(`<p><strong>Product URL:</strong> ${productUrl}</p>`);
    if (figmaUrl)   lines.push(`<p><strong>Figma URL:</strong> ${figmaUrl}</p>`);
    if (services?.length) lines.push(`<p><strong>Services:</strong> ${services.join(', ')}</p>`);
    if (message)    lines.push(`<p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`);

    await resend.emails.send({
      from: process.env.FEEDBACK_FROM_EMAIL as string,
      to: process.env.FEEDBACK_TO_EMAIL as string,
      replyTo: email,
      subject: `New inquiry from ${name || email}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="margin-bottom: 24px;">New Redigma inquiry</h2>
          ${lines.join('\n')}
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[feedback route]', err);
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}
