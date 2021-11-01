import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components
import Home from './components/Home';
import Login from './components/Login';
import NewAccount from './components/NewAccount';
import Products from './components/Products';
import Product from './components/Product';
import PaymentData from './components/PaymentData';
import PaymentCheckout from './components/PaymentCheckout';
import PaymentConfirm from './components/PaymentConfirm';
import Orders from './components/Orders';
import Order from './components/Order';
import Contact from './components/Contact';
import VerifyAccount from './components/VerifyAccount';
import AccountValidated from './components/AccountValidated';
import TermsConditions from './components/TermsConditions';
import Admin from './components/Admin';
import PrivateRoute from './components/routes/PrivateRoute';
// States
import CategoriesState from './contexts/categories/categoriesState';
import ProductsState from './contexts/products/productsState';
import CheckoutState from './contexts/checkout/checkoutState';
import AuthState from './contexts/auth/authState';
import AdminState from './contexts/admin/adminState';
import TagState from './contexts/tags/tagState';
import OrderState from './contexts/orders/orderState';
import NewsletterState from './contexts/newsletter/newsletterState';
function App() {
  return (
    <AuthState>
      <ProductsState>
        <CategoriesState>
          <TagState>
            <CheckoutState>
              <OrderState>
                <NewsletterState>
                  <AdminState>
                    <Router>
                      <Switch>
                        <Route exact path={"/"} component={Home} />
                        <Route exact path={"/login"} component={Login} />
                        <Route exact path={"/new-account"} component={NewAccount} />
                        <Route exact path={"/products"} component={Products} />
                        <Route exact path={"/products/:tag"} component={Products} />
                        <Route exact path={"/product/:id"} component={Product} />
                        <Route exact path={"/payment-data"} component={PaymentData} />
                        <Route exact path={"/payment-checkout"} component={PaymentCheckout} />
                        <Route exact path={"/payment-confirm"} component={PaymentConfirm} />
                        <Route exact path={"/account/orders"} component={Orders} />
                        <Route exact path={"/order/:id"} component={Order} />
                        <Route exact path={"/account/validation/:id"} component={AccountValidated} />
                        <Route exact path={"/contact"} component={Contact} />
                        <Route exact path={"/account/verify"} component={VerifyAccount} />
                        <Route exact path={"/terms-conditions"} component={TermsConditions} />
                        <PrivateRoute exact path={"/admin"} component={Admin} />
                      </Switch>
                    </Router>
                  </AdminState>
                </NewsletterState>
              </OrderState>
            </CheckoutState>
          </TagState>
        </CategoriesState>
      </ProductsState>
    </AuthState >
  );
}

export default App;
