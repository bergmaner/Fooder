import { useContext } from "react";
import { NavigationProp, NavigationRoute, NavigationContext, NavigationParams, NavigationScreenProp } from "react-navigation";

export function useNavigation(){
    return useContext(NavigationContext) as NavigationScreenProp<NavigationRoute, NavigationParams>
}