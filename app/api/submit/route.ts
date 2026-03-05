import { NextRequest, NextResponse } from "next/server";
import { writeFile, readFile, mkdir } from "fs/promises";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const SUBMISSIONS_FILE = path.join(DATA_DIR, "submissions.json");

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, contact, useCase, budget, description } = body;

    if (!name || !contact || !description) {
      return NextResponse.json({ error: "缺少必填字段" }, { status: 400 });
    }

    const submission = {
      id: Date.now().toString(),
      name,
      company: company || "",
      contact,
      useCase: useCase || "",
      budget: budget || "",
      description,
      createdAt: new Date().toISOString(),
    };

    // Load existing submissions
    let submissions: unknown[] = [];
    try {
      const existing = await readFile(SUBMISSIONS_FILE, "utf-8");
      submissions = JSON.parse(existing);
    } catch {
      // File doesn't exist yet — start fresh
      await mkdir(DATA_DIR, { recursive: true });
    }

    submissions.push(submission);
    await writeFile(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2), "utf-8");

    return NextResponse.json({ success: true, id: submission.id });
  } catch (err) {
    console.error("Submit error:", err);
    return NextResponse.json({ error: "服务器错误，请稍后重试" }, { status: 500 });
  }
}
