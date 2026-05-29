import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(request: Request) {
  try {
    const { title, content } = await request.json();
    if (!title) return Response.json({ error: "Title wajib diisi" }, { status: 400 });

    const msg = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 250,
      messages: [{
        role: "user",
        content: `Buat ringkasan singkat dalam bahasa Indonesia (3-4 kalimat) untuk artikel kesehatan berikut. Fokus pada poin-poin utama yang paling bermanfaat bagi pembaca awam. Langsung tulis ringkasannya tanpa kata pembuka.

Judul: ${title}
Konten: ${content?.slice(0, 1500) || ""}`,
      }],
    });

    const summary = msg.content[0].type === "text" ? msg.content[0].text : "";
    return Response.json({ summary });
  } catch (e) {
    console.error(e);
    return Response.json({ error: "Gagal membuat ringkasan" }, { status: 500 });
  }
}
