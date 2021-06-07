// import React from "react";
// import { View, Text, StyleSheet, ScrollView, ImageBackground, Image } from "react-native";
// import { DrawerNavigatorItems } from "react-navigation-drawer";
// import { Ionicons } from "@expo/vector-icons";

// export default SideBar = props => (
//     <ScrollView>
//         <ImageBackground
//             source={require("../assets/geometry-background.png")}
//             style={{ width: undefined, padding: 16, paddingTop: 48 }}
//         >
//             <Image source={require("../assets/superman-facebook.jpg")} style={styles.profile} />
//             <Text style={styles.name}>Monsieur patate</Text>

//             {/* <View style={{ flexDirection: "row" }}>
//                 <Text style={styles.followers}>734 Followers</Text>
//                 <Ionicons name="md-people" size={16} color="rgba(255, 255, 255, 0.8)" />
//             </View> */}
//         </ImageBackground>

//         <View style={styles.container} forceInset={{ top: "always", horizontal: "never" }}>
//             <DrawerNavigatorItems {...props} />
//         </View>
//     </ScrollView>
// );

// const styles = StyleSheet.create({
//     container: {
//         flex: 1
//     },
//     profile: {
//         width: 80,
//         height: 80,
//         borderRadius: 40,
//         borderWidth: 3,
//         borderColor: "#FFF"
//     },
//     name: {
//         color: "#FFF",
//         fontSize: 20,
//         fontWeight: "800",
//         marginVertical: 8
//     },
//     followers: {
//         color: "rgba(255, 255, 255, 0.8)",
//         fontSize: 13,
//         marginRight: 4
//     }
// });


// import React from "react";

// import { createAppContainer } from "react-navigation";
// import { createDrawerNavigator } from "react-navigation-drawer";
// import { Dimensions } from "react-native";

// import { Feather } from "@expo/vector-icons";

// import {
//     ProfileScreen,
//     AddAreaScreen,
//     ActivityScreen,
//     ListScreen,
//     ReportScreen,
//     StatisticScreen,
//     SignOutScreen, HomeScreen
// } from "./screens";

// import SideBar from "./components/SideBar";

// const DrawerNavigator = createDrawerNavigator(
//     {
//         Profile: {
//             screen: ProfileScreen,
//             navigationOptions: {
//                 drawerIcon: ({ tintColor }) => <Feather name="user" size={16} color={tintColor} />
//             }
//         },
//         Home: {
//             screen: HomeScreen,
//             navigationOptions: {
//                 title: "Home",
//                 drawerIcon: ({ tintColor }) => <Feather name="home" size={16} color={tintColor} />
//             }
//         },
//         AddArea: {
//             screen: AddAreaScreen,
//             navigationOptions: {
//                 title: "Add Area",
//                 drawerIcon: ({ tintColor }) => <Feather name="plus" size={16} color={tintColor} />
//             }
//         },
//         // Activity: {
//         //     screen: ActivityScreen,
//         //     navigationOptions: {
//         //         drawerIcon: ({ tintColor }) => <Feather name="activity" size={16} color={tintColor} />
//         //     }
//         // },
//         // List: {
//         //     screen: ListScreen,
//         //     navigationOptions: {
//         //         title: "Lists",
//         //         drawerIcon: ({ tintColor }) => <Feather name="list" size={16} color={tintColor} />
//         //     }
//         // },
//         // Report: {
//         //     screen: ReportScreen,
//         //     navigationOptions: {
//         //         title: "Reports",
//         //         drawerIcon: ({ tintColor }) => <Feather name="bar-chart" size={16} color={tintColor} />
//         //     }
//         // },
//         // Statistic: {
//         //     screen: StatisticScreen,
//         //     navigationOptions: {
//         //         title: "Statistics",
//         //         drawerIcon: ({ tintColor }) => <Feather name="trending-up" size={16} color={tintColor} />
//         //     }
//         // },
//         SignOut: {
//             screen: SignOutScreen,
//             navigationOptions: {
//                 title: "Sign Out",
//                 drawerIcon: ({ tintColor }) => <Feather name="log-out" size={16} color={tintColor} />
//             }
//         }
//     },
//     {
//         contentComponent: props => <SideBar {...props} />,

//         drawerWidth: Dimensions.get("window").width * 0.85,
//         hideStatusBar: true,

//         contentOptions: {
//             activeBackgroundColor: "rgba(212,118,207, 0.2)",
//             activeTintColor: "#53115B",
//             itemsContainerStyle: {
//                 marginTop: 16,
//                 marginHorizontal: 8
//             },
//             itemStyle: {
//                 borderRadius: 4
//             }
//         }
//     }
// );

// export default createAppContainer(DrawerNavigator);