import { ContactFormProps } from "@/pages/contacts";

export const sendEmail = async (
  args: ContactFormProps
): Promise<{ message: string }> => {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(args),
  });

  if (!res.ok)
    throw new Error("Something went wrong! Your email was not sent.");

  return res.json() as Promise<{ message: string }>;
};
