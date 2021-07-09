import CssBaseline from '@material-ui/core/CssBaseline'
import Footer from './components/Footer/Footer'
import Aside from './components/Aside/Aside'
import React from 'react'
import Header from './components/Header/Header'
import AppRouter from './components/AppRouter/AppRouter'

const App: React.FC = () => {
    return (
        <>
            <CssBaseline />

            <div className='appContainer'>
                <Header />
                <div className='appGridContent'>
                    <Aside />
                    <div className='appContent'>
                        <AppRouter />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default App
