const {
  BedrockRuntimeClient,
  InvokeModelCommand,
} = require("@aws-sdk/client-bedrock-runtime");

const config = {
  region: "us-east-1",
};

const client = new BedrockRuntimeClient(config);

async function Model(inputdata) {
  try {
    if (!inputdata) {
      throw new Error("Input data is null or empty.");
    }
    const input = {
      body: `{\"inputText\":\"${inputdata}\",\"textGenerationConfig\":{\"maxTokenCount\":512,\"stopSequences\":[],\"temperature\":0,\"topP\":0.9}}`,
      contentType: "application/json",
      accept: "application/json",
      modelId: "amazon.titan-text-lite-v1",
    };
    const command = new InvokeModelCommand(input);
    const response = await client.send(command);
    const stringData = JSON.parse(Buffer.from(response.body).toString());
    const result = stringData.results[0].outputText

    return result
   

  } catch (error) {
    console.log("error", error);
  }
}



module.exports = Model
