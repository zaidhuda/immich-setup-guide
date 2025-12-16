import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize client only if key exists (handled in UI if missing)
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const askGeminiTroubleshooter = async (
  currentSlideContext: string,
  userQuestion: string,
  history: { role: string; text: string }[] = []
): Promise<string> => {
  if (!ai) {
    throw new Error("API Key is missing.");
  }

  const model = "gemini-2.5-flash";
  
  const systemInstruction = `
    You are an expert DevOps engineer specializing in Apple Silicon (M1/M2/M3) architecture and Cloudflare networking. 
    You are helping a user set up the Immich Photo Server on a MacBook Pro M2 using Docker Compose and Cloudflare Tunnels (cloudflared).
    
    Current Slide Context: ${currentSlideContext}
    
    Guidelines:
    1. Be concise and actionable.
    2. Specificity: When giving commands, assume macOS zsh terminal.
    3. Docker on Mac: Remember that bind mounts (./folder) can have permission issues on macOS if not in the user home directory.
    4. Cloudflare: Distinguish between 'cloudflared tunnel run' (ad-hoc) and configuration via 'config.yml'.
    5. If the user asks about "Connection Refused", check if they are using 'localhost' or 'host.docker.internal' correctly in the tunnel config.
    
    Solve their specific problem based on the slide they are currently viewing.
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: [
        ...history.map(h => ({ role: h.role, parts: [{ text: h.text }] })),
        { role: 'user', parts: [{ text: userQuestion }] }
      ],
      config: {
        systemInstruction,
        maxOutputTokens: 400, 
      }
    });

    return response.text || "I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to contact the AI assistant.");
  }
};