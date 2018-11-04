import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/view/Layout'
// import Home from '@/view/home/Home'
import Banner from '@/view/banner/Banner'
import MyAccount from '@/view/myaccount/MyAccount'
import AccountDashboard from '@/view/myaccount/component/AccountDashboard'
import AccountInformation from '@/view/myaccount/component/AccountInformation'
import AddressBook from '@/view/myaccount/component/AddressBook'
import MyDownloadableProducts from '@/view/myaccount/component/MyDownloadableProducts'
import MyOrders from '@/view/myaccount/component/MyOrders'
import MyProductReviews from '@/view/myaccount/component/MyProductReviews'
import NewsletterSubscriptions from '@/view/myaccount/component/NewsletterSubscriptions'
import MyCreditCards from '@/view/myaccount/component/MyCreditCards'
import BillingAgreements from '@/view/myaccount/component/BillingAgreements'
import MyWishList from '@/view/myaccount/component/MyWishList'
import Login from '@/view/customer/Login'
import Register from '@/view/customer/Register'
import AboutUs from '@/view/about-us/AboutUs'
import Structure from '@/view/about-us/component/Structure'
import FactoryScene from '@/view/about-us/component/FactoryScene'
import Cables from '@/view/cables/Cables'
import MicroUSB from '@/view/cables/component/MicroUSB'
import TypeC from '@/view/cables/component/Type-C'
import Lightning from '@/view/cables/component/Lightning'
import Other from '@/view/cables/component/Other'
import PowerBank from '@/view/cables/PowerBank'
import Temper from '@/view/temper/Temper'
import TemperPro from '@/view/temper/TemperPro'
import IPhone from '@/view/temper/component/IPhone'
import Huawei from '@/view/temper/component/Huawei'
import Oppo from '@/view/temper/component/Oppo'
import Vivo from '@/view/temper/component/Vivo'
import Samsung from '@/view/temper/component/Samsung'
import Others from '@/view/temper/component/Others'

import Support from '@/view/support/Support'
import FAQ from '@/view/support/component/FAQ'
import AfterSalePolicy from '@/view/support/component/AfterSalePolicy'
import Map from '@/view/support/component/Map'
import ContactUs from '@/view/common/ContactUs'
import PrivacyPolicy from '@/view/common/PrivacyPolicy'
import TermsOfService from '@/view/common/TermsOfService'
import WarrantySafety from '@/view/common/Warranty&Safety'
// import LatestNews from '@/view/latest-news/LatestNews'

import AddProducts from '@/view/product/AddProducts'
import AddMicroUsb from '@/view/product/component/AddMicroUSB'
import AddTemper from '@/view/product/component/AddTemper'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Layout,
      redirect: 'banner',
      children: [
        {
          path: '/banner',
          name: '',
          component: Banner
        },
        {
          path: '/hello',
          name: 'HelloWorld',
          component: HelloWorld
        },
        {
          path: '/register',
          name: 'Register',
          component: Register
        },
        {
          path: '/login',
          name: 'Login',
          component: Login
        },
        {
          path: '/about-us',
          name: 'AboutUs',
          component: AboutUs,
          redirect: 'structure',
          children: [
            {
              path: '/structure',
              name: 'Structure',
              component: Structure
            },
            {
              path: '/factory-scene',
              name: 'FactoryScene',
              component: FactoryScene
            }
          ]
        },
        {
          path: '/cables',
          name: 'Cables',
          component: Cables,
          redirect: 'micro-usb',
          children: [
            {
              path: '/micro-usb',
              name: 'Micro USB',
              component: MicroUSB
            },
            {
              path: '/lightning',
              name: 'Lightning',
              component: Lightning
            },
            {
              path: '/type-c',
              name: 'Type-C',
              component: TypeC
            },
            {
              path: '/other',
              name: 'Other',
              component: Other
            }
          ]
        },
        {
          path: '/power-bank/:productId',
          name: 'Products',
          component: PowerBank
        },
        {
          path: '/temper-pro/:productId',
          name: 'Temper',
          component: TemperPro
        },
        {
          path: '/my-account',
          name: 'my-account',
          component: MyAccount,
          redirect: '/account-information',
          meta: {auth: true},
          children: [
            {
              path: '/account-dashboard',
              name: 'Account Dashboard',
              component: AccountDashboard
            },
            {
              path: '/account-information',
              name: 'Account Information',
              component: AccountInformation,
              meta: {auth: true}
            },
            {
              path: '/address-book',
              name: 'Address Book',
              component: AddressBook
            },
            {
              path: '/my-orders',
              name: 'My Orders',
              component: MyOrders
            },
            {
              path: '/my-downloadable-products',
              name: 'My Downloadable Products',
              component: MyDownloadableProducts
            },
            {
              path: '/my-product-reviews',
              name: 'My Product Reviews',
              component: MyProductReviews
            },
            {
              path: '/newsletter-subscriptions',
              name: 'Newsletter Subscriptions',
              component: NewsletterSubscriptions
            },
            {
              path: '/my-credit-cards',
              name: 'My Credit Cards',
              component: MyCreditCards
            },
            {
              path: '/billing-agreements',
              name: 'Billing Agreements',
              component: BillingAgreements
            },
            {
              path: '/my-wish-list',
              name: 'My Wish List',
              component: MyWishList
            }
          ]
        },
        {
          path: '/temper',
          name: 'Temper',
          component: Temper,
          redirect: '/iPhone',
          children: [
            {
              path: '/iPhone',
              name: 'iPhone',
              component: IPhone
            },
            {
              path: '/huawei',
              name: 'Huawei',
              component: Huawei
            },
            {
              path: '/oppo',
              name: 'Oppo',
              component: Oppo
            },
            {
              path: '/vivo',
              name: 'Vivo',
              component: Vivo
            },
            {
              path: '/samsung',
              name: 'Samsung',
              component: Samsung
            },
            {
              path: '/others',
              name: 'Others',
              component: Others
            }
          ]
        },
        {
          path: '/support',
          name: 'Support',
          component: Support,
          redirect: '/faq',
          children: [
            {
              path: '/faq',
              name: 'Frequently Asked Questions',
              component: FAQ
            },
            {
              path: '/after-sale-policy',
              name: 'After Sale Policy',
              component: AfterSalePolicy
            },
            {
              path: '/map',
              name: 'Map',
              component: Map
            }
          ]
        },
        {
          path: '/contact-us',
          name: 'Contact Us',
          component: ContactUs
        },
        {
          path: '/privacy-policy',
          name: 'Privacy Policy',
          component: PrivacyPolicy
        },
        {
          path: '/terms-of-service',
          name: 'Terms of Service',
          component: TermsOfService
        },
        {
          path: '/warranty-safety',
          name: 'Warranty & Safety',
          component: WarrantySafety
        },
        {
          path: '/add-products',
          name: 'Add Products',
          component: AddProducts,
          children: [
            {
              path: '/add-usb',
              name: 'AddMicroUsb',
              component: AddMicroUsb
            },
            {
              path: '/add-temper',
              name: 'Add Temper',
              component: AddTemper
            }
          ]
        }
      ]
    }
  ]
})
