import { NavigationProp } from "@react-navigation/native"

export type AppStackParamList = {
    AppDrawer:undefined,
    Profile:undefined
}

export type AppStackNavigation = NavigationProp<AppStackParamList>

export type HomeStackParamList = {
    Tests:{
        title?:string,
        path?:string[]
    }
    
    
}

export type DrawerParamList = {
    Home:undefined,
    Profile:undefined
}

export type ProfileStackParamList = {
    Profile:undefined,
    ProfileDetails:undefined
}

export type ProfileStackNavigation = NavigationProp<ProfileStackParamList>;