import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function AppHelmet({title}) {
  return (
    <Helmet>
        <meta charSet="utf-8" />
        <title>{title} - Nutrition and Fitness Tips for Healthy Living and fulfilling life</title>
        <link rel="canonical" href={window.location.hostname} />
        <base href={window.location.hostname}></base>
        <meta name="description" content={"A source for expert advice on nutrition, fitness, and diabetes management. Explore tips for healthy living, balanced diets, and effective workout routines to support your overall health and wellness journey"}/>
    </Helmet>
  )
}
