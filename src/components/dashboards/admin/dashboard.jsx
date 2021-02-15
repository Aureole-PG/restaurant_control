import React, {lazy, Suspense} from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import Layout from '../../layout/admin';

const client=[
    {
        path:'',
        exact:true,
        component: lazy(()=>import('../../../views/admin/status'))
    },
    {
        path:'menu',
        component: lazy(()=>import('../../../views/admin/addMenu'))
    },
    {
        path:'menuForm',
        component: lazy(()=>import('../../../views/admin/addMenu/addMenuForm'))
    },
    {
        path:'users',
        component: lazy(()=>import('../../../views/admin/addUsers'))
    },
    {
        path:'usersForm',
        component: lazy(()=>import('../../../views/admin/addUsers/userForm'))
    },
]


export default function Routers() {
    const { url } = useRouteMatch();
    console.log(url)
    return (
        <Layout>
            <Suspense fallback={<div>Cargando...</div>}>
                <Switch>
                    {client.map((route, id)=>(
                        <Route exact={route.exact} key={id} path={`${url}/${route.path}`}>
                            <route.component/>
                        </Route>
                    ))}
                </Switch>
            </Suspense>
            
        </Layout>
    )
}