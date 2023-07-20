import React from 'react';
import { SafeAreaView } from 'react-native';
import { Box, Text, Button, Image, Icon } from 'native-base';

export default ({ navigation }) => {
    const navigateLearn = () => {
        navigation.navigate('Learn');
    };

    return (
        <SafeAreaView flex={1} backgroundColor={"#FED7D7"}>
            <Box flex={1} justifyContent="center" alignItems="center" >
                <Box w="90%" justifyContent="center" >
                        <Text fontSize="4xl" alignSelf="flex-start" fontWeight="bold">PsychAI</Text>
                        <Image rounded={"lg"} source={require("../assets/mine.jpeg")} w="100%" h="60%" alt="White character standing in front of a red portal." />
                    <Button mt={4} onPress={navigateLearn} colorScheme="red" w="100%">
                        <Text fontSize="lg" color="white" fontWeight="bold">Continue</Text>
                    </Button>
                </Box>
            </Box>
        </SafeAreaView>
    );
};