"use server";

import { sendSanctuaryEmail } from "@/lib/mail";

export async function subscribeAction(prevState: any, formData: FormData) {
  try {
    const email = formData.get("email") as string;
    console.log("Newsletter subscription attempt for:", email);

    if (!email || !email.includes("@")) {
      return {
        success: false,
        message: "A valid sanctuary email is required."
      };
    }

    // Real Integration: Send the email via Resend
    const result = await sendSanctuaryEmail(email);

    if (!result.success) {
      console.warn("Mail integration failed:", result.error);
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
  } catch (err: any) {
    console.error("CRITICAL ACTION ERROR:", err);
    return {
      success: false,
      message: "An unexpected error occurred. Our monks are investigating."
    };
  }
}
