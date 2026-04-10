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

    // Check for API key presence
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing from environment variables.");
      return {
        success: false,
        message: "Sanctuary configuration error: API Key missing."
      };
    }

    // Real Integration: Send the email via Resend
    const result = await sendSanctuaryEmail(email);

    if (!result.success) {
      console.warn("Mail integration failed:", result.error);
      return {
        success: false,
        message: `Sanctuary gateway error: ${result.error}`
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
