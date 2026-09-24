// डेटा लाने का एक फर्जी फंक्शन जो 2 सेकंड बाद प्रॉमीस रिटर्न करता है
function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("डेटा सफलतापूर्वक मिल गया!");
        }, 2000);
    });
}

// async फंक्शन का उपयोग
async function handleData() {
    console.log("डेटा का इंतज़ार कर रहे हैं...");
    
    // await का उपयोग करके प्रॉमीस पूरा होने तक रुकना
    const result = await getData(); 
    
    console.log(result); // 2 सेकंड बाद यह प्रिंट होगा
    console.log("बाकी का कोड चल रहा है...");
}

handleData();
