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

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Layout,
      children: [
        {
          path: '/banner',
          name: 'Banner',
          component: Banner
        },
        {
          path: '/hello',
          name: 'HelloWorld',
          component: HelloWorld
        },
        {
          path: '/login',
          name: 'Login',
          component: Login
        },
        {
          path: '/my-account',
          name: 'my-account',
          component: MyAccount,
          children: [
            {
              path: '/account-dashboard',
              name: 'Account Dashboard',
              component: AccountDashboard
            },
            {
              path: '/account-information',
              name: 'Account Information',
              component: AccountInformation
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
        }
      ]
    }
  ]
})
