import {createBrowserRouter} from 'react-router-dom'
import Layout from '../components/Layout'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage';
import ContactPage from '../pages/ContactPage';
import PromotionPage from '../pages/PromotionPage';
import ProfilePage from '../pages/ProfilePage';
import ChangePasswordPage from '../pages/ChangePasswordPage';
import GameLogsPage from '../pages/GameLogsPage';
 import WalletPage from '../pages/WalletPage';
import DepositPage from '../pages/DepositPage';
import WithDrawPage from '../pages/WithDrawPage';
const routers= createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<HomePage/>
            },
            {
               path:'/login',
                element:<LoginPage/>
            },
            {
                path:'/contact',
                element:<ContactPage/>
             },
             {
                path:'/promotion',
                element:<PromotionPage/>
             },
             {
                path:'/change-password',
                element:<ChangePasswordPage/>
             },
             {
                path:'/profile',
                element:<ProfilePage/>
             },
             {
                path:'/game-logs',
                element:<GameLogsPage/>
             },
            
             {
               path:'/wallet',
               element:<WalletPage/>
            },
            {
               path:'/deposit',
               element:<DepositPage/>
            },
            {
               path:'/with-draw',
               element:<WithDrawPage/>
            },
             
        ]
    }
])
export default routers;