"use server";

import { sendSanctuaryEmail } from "@/lib/mail";

export async function subscribeAction(prevState: any, formData: FormData) {
  const email = formData.get("email") as string;

  if (!email || !email.includes("@")) {
    return {
      success: false,
      message: "A valid sanctuary email is required."
    };
  }

  // Real Integration: Send the email via Resend
  const result = await sendSanctuaryEmail(email);

  if (!result.success) {
    return {
      success: false,
      message: "The sanctuary gateway is currently unavailable. Please try again later."
    };
  }
  
  // Simulate a slight delay for high-class experience
  await new Promise((resolve) => setTimeout(resolve, 800));

  return {
    success: true,
    message: "Your commitment has been recorded. The Compass is on its way."
  };
}
