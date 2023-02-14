// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import openai from "@/lib/chatgpt";

export default async function handler(req, res) {
  const models = await openai.listModels().then((res) => res?.data?.data);
  const modelOptions = models?.map((e) => ({
    value: e.id,
    label: e.id,
  }));
  res.status(200).json({ modelOptions });
}
