import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_AZURE_TRANSLATOR_KEY;
const ENDPOINT = process.env.NEXT_PUBLIC_AZURE_TRANSLATOR_ENDPOINT;

export async function translateText(text, targetLang) {
  try {
    const response = await axios.post(
      `${ENDPOINT}/translate`,
      [{ Text: text }],
      {
        params: { "api-version": "3.0", to: targetLang },
        headers: {
          "Ocp-Apim-Subscription-Key": API_KEY,
          "Ocp-Apim-Subscription-Region": "southeastasia", 
          "Content-Type": "application/json",
        },
      }
    );
    return response.data[0].translations[0].text;
  } catch (error) {
    console.error("Translation error:", error);
    return text;
  }
}