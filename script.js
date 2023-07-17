let opin_ai_response;


document.getElementById("submit-button").addEventListener("click", () => {
    console.log("Hello World");
})

let converstaion = [
{role: "user", content: "Hi"},
{role: "assistant", content: "Hi, how can I help you today"}
]

async function conversationUserAdd(question,sentiment){
    converstaion.push({

role:"user",
content:"My happiness out of 10:"+sentiment+"my question is:"+question

    })
}
async function converstaionAssistantAdd(response){
converstaion.push({ role:"assistant",contaet:response});
}

async function openai_test(){
    
    let url = "https://api.openai.com/v1/chat/completions";
    let apiKey1 = "sk";
    let apiKey2 = "-rxI9rz0FSWE2yDsDgbmHT3";
    let apiKey3 = "BlbkFJU8X8TnAYTmgZPx42THLZ";
    let apiKey = apiKey1 + apiKey2 + apiKey3;

    let data = {model: "gpt-3.5-turbo", messages: converstaion};

try {
    const response = await fetch (url,{
        method : "POST",
        headers : {
            "Content-Type":"application/json",
            Authorization : `Bearer ${apiKey}`
        },
        body : JSON.stringify (data),
    });
    if(response.ok){
        const responseData = await response.JSON();
        const messages = responseData.choices[0].messages.content;
    
        converstaionUserAdd(messages);
    
        const utterance = new SpeechSynthesisUtterance(messages);
        SpeechSynthesis.speack(utterance);
        return messages; 
    }
    else {
        console.log("Request failed with status: ",response.status);
    }
} catch (error) {
    console.log("there is an error:",error);
}


}