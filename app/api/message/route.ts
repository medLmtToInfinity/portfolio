import { chatbotPrompt } from "@/helpers/chatbot-prompt";
import { ChatGPTMessage, OpenAIStream, OpenAIStreamPayload } from "@/lib/openai-stream";
import { messageArraySchema } from "@/lib/validators/message";

export async function POST(req: Request) {
    
    const {messages} = await req.json();
    const parsedMessage = messageArraySchema.parse(messages);
    const outbandMessages: ChatGPTMessage[] = parsedMessage.map(message => ({
        role: message.isUserMessage ? "user" : "system",
        content: message.text
    }))
    
    // outbandMessages.unshift({
    //     role: 'system',
    //     content: chatbotPrompt,
    // })
    
    const payload: OpenAIStreamPayload = {
        model: 'gpt-3.5-turbo',
        messages: outbandMessages,
        temperature: 0.7,
        // top_p: 1,
        // frequency_penalty: 0,
        // presence_penalty: 0,
        // max_tokens: 150,
        // stream: true,
        // n: 1,
    }
    
    // console.log(payload)
    const stream = await OpenAIStream(payload);
    // console.log(stream)
    return new Response(stream);
}