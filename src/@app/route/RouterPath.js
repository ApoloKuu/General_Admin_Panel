import React, { Suspense } from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import AuthPage from '../layouts/AuthPage'
import BlackPage from '../layouts/BlackPage'
import { auth, page } from './RouterPathData'

const RouterPath = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AuthPage/>}>
                    {
                        auth.map((data , id) => {
                            return(
                                <Route key={id} path={data.url} element={
                                    <Suspense fallback={<div>LOADING ...</div>} >
                                        <data.page/>
                                    </Suspense>
                                }
                                />
                            )
                        })
                    }
                </Route>
                <Route path='/' element={<BlackPage />}>
                    {
                        page.map((data , id) => {
                            return(
                                <Route key={id} path={data.url} element={
                                    <Suspense fallback={<div>LOADING ...</div>}>
                                        <data.page />
                                    </Suspense>
                                }
                                />
                            )
                        })
                    }
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default RouterPath