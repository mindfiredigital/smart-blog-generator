const Util = {
  getPrompt: async (formData) => {
    const optionalPrompt = await getOptionalPrompt(formData);
    const prompt = `
      Follow these set of instructions to generate a seo optimized article.
      - Generate a seo friendly and informative title using this '${
        formData.title
      }'.
      - Use the code snippet as a reference delimited by triple pipes and add improvised code to the final response explaining each of them in a detailed way.
      - Understand the context and make the article more relatable to the instructions given,which is delimited by triple quotes,if present.  
      - Add table of contents to the description ,refering different section of the article.

      ${
        formData.instruction
          ? `Description : """${formData.instruction}"""`
          : ""
      }
      ${
        formData.codeSnippet
          ? `Code Snippet : |||${formData.codeSnippet}|||`
          : ""
      }
      ${optionalPrompt ? optionalPrompt : ""}
      Make sure to return description in markdown format compatible with showdown.js.
      Return the response in json format with keys as title and description with respective values.
    `;
    return prompt;
  },
};
const getOptionalPrompt = async (formData) => {
  let prompt = `Write an article between ${
    formData.articlesize === "long"
      ? "3000-3500"
      : formData.articlesize === "short"
      ? "120-240"
      : "400-600"
  } words by using the information provided above in more ${
    formData.tone ? formData.tone : "friendly"
  } way.
    Focus on important details provided in the description and code snippets and make it relevant for the ${
      formData.domain ? formData.domain : "software"
    } team.
    ${
      formData.hideCredentials
        ? "Hide secret keys and credentials with astericks if present in the provided description or code snippets."
        : ""
    } 
    `;
  return prompt;
};

export default Util;
