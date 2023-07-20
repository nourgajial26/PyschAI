import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {Box, Text, Button, Image, Icon, Spinner} from 'native-base';
const { Configuration, OpenAIApi } = require("openai");
import 'react-native-url-polyfill/auto';

const key = "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";
function Loading({ route, navigation }) {
    const configuration = new Configuration({
        apiKey: key
    });
    const openai = new OpenAIApi(configuration);
    //get image from dalle2
    //unpack values from navigation
    const { fear, safeSpaceWords } = route.params;
    console.log(fear);
    console.log(safeSpaceWords);
    useEffect(() => {
        (async () => {
            let safeSpaceCommma = safeSpaceWords.join(", ");
            console.log("Generating prompt...")
            const prompt = `You are an art prompt generator that takes two parameters (Fear and safeSpace) and creates a prompt for the input  of an AI image generation API(visual only). Fear is an input given by a user that describes a fear they are trying to overcome. safeSpace is an input given by a user that describes where they feel safe.
  
            fear: ${fear}
            safeSpace: ${safeSpaceCommma}
           
            Combine the fear and safe space and output a prompt for an AI image generator API that creates a 360 degree image background of the safeSpace the user input while incorporating elements of their fear. Prioritize making a prompt that is readable by the API. Ex.
           {"fear": "beaches",  "safeSpace": "relaxed, calm,", "output": "a 360 degree video at the seashore, pretty view of a sandy beach"}
            Create a unique ai art prompt(never seen before) that incorporates the user's fear(make sure the fear is included in the final output) and safeSpace inputs. Only answer the single fear and safeSpace combination below.
            
            {"fear": "${fear}", "safeSpace": "${safeSpaceCommma}", "output":`
            console.log(prompt);
            const GTP3Response = await openai.createCompletion({
                model: "text-davinci-002",
                prompt,
                temperature: 0.7,
                max_tokens: 2000,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0,
            });
            //if no response, return error
            if(GTP3Response?.data?.choices?.length === 0){
                console.log("No response from GPT-3");
                return;
            }
            let result = GTP3Response.data.choices[0].text.split("}")[0];
            //stripe starting and ending spaces
            result = result.trim();
            result = result.substring(1, result.length-1);
            //remove all new lines
            result = result.replace(/\\n/g, "");
            //replace all spaces with a single space
            result = result.replace(/\s+/g, " ");
            //return  {answer: result}
            console.log(result);
        const response = await openai.createImage({
            prompt: result,
            n: 3,
            size: "1024x1024",
        });
        console.log(response)
        const generated_images = response.data.data;
        let generated_images_urls = [];
        for (let i = 0; i < generated_images.length; i++) {
            generated_images_urls.push(generated_images[i].url);
        }
        console.log(generated_images_urls);
        navigation.navigate("VR", {images: generated_images_urls})
        })();
      }, []);
    // navigation.navigate("VR", {images: ["https://cdn.mos.cms.futurecdn.net/RWRZff8K2KaPqon44Kugam-415-80.jpg"]})

    return (
        <SafeAreaView flex={1} backgroundColor={"#FED7D7"}>
            <Box flex={1} justifyContent="center" alignItems="center">
                <Text fontSize="2xl" fontWeight="bold">Generating your VR environment...</Text>
                <Spinner size="lg" color="emerald.500" mt={3}/>
            </Box>
        </SafeAreaView>
    );
};

export default Loading;