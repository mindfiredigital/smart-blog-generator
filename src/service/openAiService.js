import axios from "axios";
import { generateBlogUrl, openAiValidateUrl } from "../constants/constants";
import Util from "../components/utils/util";

const OpenAiService = {
  validateApiKey: (apiKey) => {
    let headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    };
    return axios.get(openAiValidateUrl, { headers });
  },
  generateBlog: async (apiKey, formData) => {
    let prompt = await Util.getPrompt(formData);
    let payload = {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0,
      stream: false,
    };
    let headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    };
    return await axios.post(generateBlogUrl, payload, { headers });
  },
};

export default OpenAiService;
