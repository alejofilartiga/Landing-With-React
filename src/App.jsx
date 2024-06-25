import Header from './assets/components/Header/Header'
import Layout from './assets/components/Layout/Layout'
import Hero from './assets/components/Hero/Hero'
import Products from './assets/components/Products/Products'
import Footer from './assets/components/Footer/Footer'



function App() {
  
  return (
    <>
      <Header/>
      <Layout>
        <Hero/>
        <Products/>
      </Layout>
      <Footer/>
    </>
  )
}

export default App
