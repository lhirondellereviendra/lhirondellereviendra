import React from 'react'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'



const NotFoundPage = () => (
  <Layout>
    <Navbar/>
    <section className="hero is-large">
      <div className="hero-body">
        <div className="container has-text-centered">
          <p className="title is-1"> 🤭</p>
          <p className="title is-2">Désolé !</p>
          <p className="content">La page que vous recherchez n'existe pas ou a été déplacée.</p>
        </div>
      </div>
    </section>
    <Footer/>
  </Layout>
)

export default NotFoundPage
