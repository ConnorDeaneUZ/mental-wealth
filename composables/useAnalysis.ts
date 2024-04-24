import { positiveKeywords } from "~/config/SentimentAnalysis/positive";
import { negativeKeywords } from "~/config/SentimentAnalysis/negative";

const positiveSet = new Set(positiveKeywords);
const negativeSet = new Set(negativeKeywords);

export async function analyzeSentiment(text: string) {
    let positiveCount = 0;
    let negativeCount = 0;

    // Split the journal entry into individual words
    const words = text.split(/[\s,.;:!?()'"`-]+/);

    words.forEach(word => {
        if (positiveSet.has(word)) {
            positiveCount++;
        } else if (negativeSet.has(word)) {
            negativeCount++;
        }
    });

    return { positiveCount, negativeCount };
}

