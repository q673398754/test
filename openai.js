// 引入 @openai/api 包
const openai = require('@openai/api');

// 定义 API 地址和 API 密钥
const API_ENDPOINT = 'https://api.gtp-3.5-turbo.com/v1/';
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// 初始化 OpenAI API
const openaiClient = new openai(OPENAI_API_KEY, {
    version: '2022-01-27'
});

// 将 OpenAI API 封装为一个函数
async function getResponse(input) {
    const response = await openaiClient.completions.create({
        engine: 'text-davinci-002',
        prompt: input,
        max_tokens: 1024,
        n: 1,
        stop: '\n',
        temperature: 0.5
    });
    return response.choices[0].text.trim();
}
