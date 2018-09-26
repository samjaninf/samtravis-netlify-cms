import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div className="Page transition-item">
    <Helmet title="Home | Samuel J Travis" />
    <div className="Main">
      <Header />
      {children}
    </div>
  </div>
)

export default TemplateWrapper
