import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

const IndexPage = () => 
<Layout>
  <Helmet>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
    <meta name="description" content={data.site.siteMetadata.description} />
    <meta name="keywords" content={data.site.siteMetadata.keywords} />
    <title>{data.site.siteMetadata.title}</title>
    <html lang="en" />
    {/* Google / Search Engine Meta Tags */}
    <meta itemprop="name" content={data.site.siteMetadata.author} /> />
    <meta
      itemprop="description"
      content={data.site.siteMetadata.description}
    />
  </Helmet>
  <Header />
  <Midsection />
</Layout>

export default IndexPage;