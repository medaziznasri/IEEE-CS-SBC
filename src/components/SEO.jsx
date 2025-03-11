import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url, type = 'website' }) => {
  const siteName = 'IEEE Computational Intelligence Society - ISI Mahdia';
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const defaultDescription = 'Join IEEE CIS ISI Mahdia to explore computational intelligence technologies through workshops, projects, and networking opportunities.';
  const defaultImage = '/src/assets/CISNBG.png';
  const defaultUrl = 'https://ieee-cis-isima.org';

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* OpenGraph Meta Tags */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={url || defaultUrl} />
      <meta property="og:type" content={type} />
      
      
      {/* Canonical Link */}
      <link rel="canonical" href={url || defaultUrl} />
    </Helmet>
  );
};

export default SEO;
