import React, { useState, useEffect } from 'react';
import {SafeAreaView} from 'react-native';
import {Box, Text, Button, Image, Icon, Input, Checkbox} from 'native-base';

export default ({ navigation }) => {
    const [fear, setFear] = useState("");
    const [groupValues, setGroupValues] = useState(["relaxing", "calm", "peaceful"]);
    const navigateLoading = () => {
        console.log(fear)
        console.log(groupValues)
        navigation.navigate('Loading', {fear, safeSpaceWords: groupValues});
    };

    return (
        <SafeAreaView flex={1} backgroundColor={"#FED7D7"}>
            <Box flex={1} justifyContent="center" alignItems="center">
                <Box w="90%">
                <Text fontSize="3xl" fontWeight="bold">Let's learn about you.</Text>
                {/* Text that asks about your phobias, and provides an input for you to share your fear. */}
                <Text fontSize="lg" fontWeight="bold">What fear do you want to progress past?</Text>
                <Input size="xl" placeholder="Describe your fear. ex. spiders, heights" onChange={(e)=>setFear(e.nativeEvent.text)} value={fear} />
                <Text fontSize="lg" fontWeight="bold">What words would describe your safe space?</Text>
                <Checkbox.Group colorScheme="danger" accessibilityRole='checkbox' accessibilityLabel='Cozy' onChange={(e)=>setGroupValues(e)} value={groupValues}>
                    <Checkbox value="cozy" accessibilityRole='checkbox' accessibilityLabel='Cozy'>Cozy</Checkbox>
                    <Checkbox value="warm" accessibilityRole='checkbox' accessibilityLabel='Cozy'>Nature</Checkbox>
                    <Checkbox value="calm"accessibilityRole='checkbox' accessibilityLabel='Cozy'>Calm</Checkbox>
                    <Checkbox value="peaceful" accessibilityRole='checkbox' accessibilityLabel='Cozy'>Peaceful</Checkbox>
                    <Checkbox value="relaxing" accessibilityRole='checkbox' accessibilityLabel='Cozy'>Relaxing</Checkbox>
                    <Checkbox value="beach" accessibilityRole='checkbox' accessibilityLabel='Cozy'>Beach</Checkbox>
                    <Checkbox value="park" accessibilityRole='checkbox' accessibilityLabel='Cozy'>Park</Checkbox>
                </Checkbox.Group>
                <Button onPress={()=>navigateLoading()} colorScheme="red" mt={4} mb={5} w="100%">
                    <Text fontSize="lg" color="white" fontWeight="bold">Generate VR Environment</Text>
                </Button>
                </Box>
                
            </Box>
        </SafeAreaView>
    );
};