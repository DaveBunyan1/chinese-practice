"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function addWord(formData: FormData) {
  const characters = formData.get("characters") as string;
  const pinyin = formData.get("pinyin") as string;
  const english = formData.get("english") as string;

  if (!characters || !pinyin || !english) return;

  await prisma.word.create({
    data: {
      characters,
      pinyin,
      english,
    },
  });

  revalidatePath("/");
}
