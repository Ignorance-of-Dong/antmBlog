import React from "react"
import RouterMap from "./map"
import Route from "./routes"

function RouterView({ route }: any) {
    return <RouterMap route={route === undefined ? Route : route}></RouterMap>
}
export default RouterView