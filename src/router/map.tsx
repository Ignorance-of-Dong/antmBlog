import React, { Suspense } from "react"
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";

function RouterMap(props: any) {
    const { route } = props;
    const defaultRouter = <Route path="/" component={() => {
        return <Redirect to="/homepage" key={22} />
    }} key={22} exact/>
    return <Router><Suspense fallback={<div></div>}><Switch>
        {
            route.map((item: any, index: number) => {
                const Comp = item.component
                return <Route path={item.path} component={(routers: any) => {
                    return <Comp route={item.children} {...routers}></Comp>
                }} key={index} />
            }).concat(defaultRouter)
        }

    </Switch></Suspense></Router>
}

export default RouterMap