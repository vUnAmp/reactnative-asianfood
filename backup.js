{
  /* <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTintColor: "black",
          headerTitleStyle: {
            fontSize: 20,
          },
        }}
      >
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            // title: 'This is Login Screen',
            headerTitle: "Hello from Login Screen",
            headerStyle: {
              backgroundColor: "#fff",
            },
            headerTintColor: "black",
            headerTitleStyle: {
              fontStyle: "italic",
              fontWeight: "600",
              fontSize: 16,
            },
          }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={Screens}
          options={{
            headerStyle: {
              backgroundColor: "orange",
            },
            headerTitleStyle: {
              alignSelf: "center",
            },
            // headerLeft: () => (<Text>Hello</Text>),
            title: "Home Screen Wrap",
            headerLeft: () => (
              <TouchableOpacity
                onPress={
                  () => console.log("just press")
                  // <View> <Text>Hello</Text>  </View>
                }
                title="hello"

                // color='rgba(0,0,0,0.1)'
              >
                <View style={{ width: 50, height: 50 }}>
                  <Svg height="100%" width="100%" viewBox="0 4 100 100">
                    <Rect
                      x="20"
                      y="40"
                      rx="2"
                      width="60"
                      height="4.01"
                      stroke="white"
                      strokeWidth="1.81"
                      fill="white"
                    />
                    <Rect
                      x="20"
                      y="55"
                      rx="2"
                      width="60"
                      height="4.01"
                      stroke="white"
                      strokeWidth="1.81"
                      fill="white"
                    />
                    <Rect
                      x="20"
                      y="70"
                      rx="2"
                      width="60"
                      height="4.01"
                      stroke="white"
                      strokeWidth="1.81"
                      fill="white"
                    />
                  </Svg>
                </View>
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
          options={{ title: "Registration Screen" }}
        />
        <Stack.Screen
          name="ImageScreen"
          component={ImageScreen}
          options={{ title: "Image from Firebase" }}
        />
        <Stack.Screen
          name="AddProductScreen"
          component={AddProductScreen}
          options={{ title: "Add product" }}
        />
      </Stack.Navigator> */
}
