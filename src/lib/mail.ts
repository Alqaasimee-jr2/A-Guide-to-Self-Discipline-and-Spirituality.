import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendSanctuaryEmail(email: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: "A New Horizon <onboarding@resend.dev>", // Or your verified domain
      to: [email],
      subject: "Your Journey Begins | The 8-Week Compass",
      html: `
        <div style="font-family: serif; color: #2C3E50; max-width: 600px; margin: 0 auto; padding: 40px; background-color: #F5F5DC;">
          <h1 style="font-style: italic; font-weight: 500;">Welcome to the Sanctuary.</h1>
          <p style="font-size: 18px; line-height: 1.6; color: #708090;">
            "Freedom is found in the framework of discipline."
          </p>
          <p style="font-size: 16px; line-height: 1.6;">
            You have taken the first step. For the next 8 weeks, this compass will be your guide. 
            We have attached your foundational blueprint to this sanctuary path.
          </p>
          <div style="margin-top: 30px; text-align: center;">
            <a href="https://anewhorizon.guide/assets/book.pdf" style="background-color: #4F7942; color: #F5F5DC; padding: 15px 30px; text-decoration: none; font-weight: bold; text-transform: uppercase; letter-spacing: 2px; border-radius: 2px;">Download Your Compass</a>
          </div>
          <div style="margin-top: 40px; padding: 20px; border: 1px solid #D6D6C2;">
            <p style="font-size: 14px; text-transform: uppercase; letter-spacing: 2px; color: #4F7942; font-weight: bold;">
              The First Reflection
            </p>
            <p style="font-style: italic;">
              "In a world designed for noise, where will you find your silence?"
            </p>
          </div>
          <p style="margin-top: 40px; font-size: 12px; color: #708090; text-transform: uppercase; letter-spacing: 1px;">
            Truly, C.R.I.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return { success: false, error: error.message || "Unknown mail gateway error" };
    }

    return { success: true, data };
  } catch (error: any) {
    console.error("Internal Mail Error:", error);
    return { success: false, error: error.message || "Internal server error in mail module" };
  }
}
