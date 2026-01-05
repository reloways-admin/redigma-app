import { NextResponse } from 'next/server';
import { Resend } from 'resend';

type FeedbackPayload = {
  name?: string;
  email?: string;
  message?: string;
  productUrl?: string;
  figmaUrl?: string;
  stage?: 'live' | 'building' | 'idea' | string;
};

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as FeedbackPayload | null;

  if (!body) {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const { name, email, message, productUrl, figmaUrl, stage } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Name, email, and message are required' },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[feedback] Missing RESEND_API_KEY env var');
    return NextResponse.json({ error: 'Email service is not configured' }, { status: 500 });
  }

  const toEmail = process.env.FEEDBACK_TO_EMAIL || 'amir@redigma.com';
  const fromEmail = process.env.FEEDBACK_FROM_EMAIL || 'Redigma <onboarding@resend.dev>';

  const resend = new Resend(apiKey);

  const text = [
    'New feedback request',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Stage: ${stage || '-'}`,
    `Product URL: ${productUrl || '-'}`,
    `Figma URL: ${figmaUrl || '-'}`,
    '',
    'Message:',
    message,
  ].join('\n');

  try {
    const result = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `Redigma feedback request - ${name}`,
      text,
    });

    if ((result as any)?.error) {
      console.error('[feedback] Resend error', (result as any).error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[feedback] Email send failed', err);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 502 });
  }
}