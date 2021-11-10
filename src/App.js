import classes from './App.module.css'
import { Route, Switch } from 'react-router-dom'
import Landing from './Containers/Landing/Landing'
import Error404 from './Components/Error404'
import Products from './Containers/Products/Products'
import About from './Containers/About/About'
import Careers from './Containers/Careers/Careers'
import FAQs from './Containers/FAQs/FAQs'
import Cart from './Containers/Cart/Cart'
import { Provider } from 'react-redux'
import { store } from './store/store'
import ItemPage from './Containers/ItemPage/ItemPage'
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/products" exact component={Products} />
          <Route path="/products/:product_id" component={ItemPage} />
          <Route path="/about-us" component={About} />
          <Route path="/careers" component={Careers} />
          <Route path="/faqs" component={FAQs} />
          <Route path="/cart" component={Cart} />
          <Route component={Error404} />
        </Switch>
      </div>
    </Provider>
  )
}

export default App
