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
    console.log("Input Data:", inputdata);
    if (!inputdata) {
        throw new Error("Input data is null or empty.");
    }
    const input = {
      body: inputdata,
      contentType: "application/json",
      accept: "application/json",
      modelId: "amazon.titan-text-lite-v1",
    };
    console.log("Command Input:", input);
    const command = new InvokeModelCommand(input);
    const response = await client.send(command);
    console.log(response);
  } catch (error) {
    console.log("error", error);
  }
}

Model("hi");

// export default Model
