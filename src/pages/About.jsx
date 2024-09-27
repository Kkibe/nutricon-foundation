import React from 'react'
import Contact from '../components/Contact/Contact';
import Image from '../assets/wdd.png';
import FaqItem from '../components/FaqItem/FaqItem';
import AppHelmet from '../components/AppHelmet';

export default function About() {
  const faqs = [
    {
      "id": 1,
      "question": "What topics does this blog cover?",
      "answer": "We cover a range of topics including nutrition, fitness, diabetes management, and general health advice."
    },
    {
      "id": 2,
      "question": "Who is this blog for?",
      "answer": "Our blog is for anyone looking to improve their health, manage diabetes, or adopt a healthier lifestyle through fitness and nutrition."
    },
    {
      "id": 3,
      "question": "Are the tips and advice backed by research?",
      "answer": "Yes, our content is based on scientific research and expert insights to ensure accurate and reliable information."
    },
    {
      "id": 4,
      "question": "Can I follow specific diets from the blog?",
      "answer": "We provide guidance on balanced diets, but it's important to consult a healthcare professional for personalized dietary plans."
    },
    {
      "id": 5,
      "question": "How often is the content updated?",
      "answer": "We regularly update the blog with fresh content and new health tips."
    },
    {
      "id": 6,
      "question": "Can I subscribe to the blog?",
      "answer": "Yes, you can subscribe to receive updates on new posts and articles."
    },
    {
      "id": 7,
      "question": "Do you offer fitness routines for beginners?",
      "answer": "Yes, we provide fitness tips and routines suitable for all levels, including beginners."
    },
    {
      "id": 8,
      "question": "What kind of diabetes management advice do you provide?",
      "answer": "We offer tips on managing diabetes through diet, exercise, and lifestyle changes."
    },
    {
      "id": 9,
      "question": "Are the tips applicable for all age groups?",
      "answer": "Our tips are generally applicable to adults of all age groups, but it's always best to consult a healthcare professional for specific advice."
    },
    {
      "id": 10,
      "question": "How can I contact you for more information?",
      "answer": "You can reach out to us through our contact page for any inquiries or feedback."
    }
  ]
  
  return (
<div className='about'>
    <AppHelmet title={'About | Nutricon Foundation'} />
    <div className="quote">
      <img src={Image} alt="taxa_about_flyer_thumbnail" />
      <div className='content'>
        <p>
          Welcome to our blog, your trusted source for expert advice on nutrition, fitness, diabetes management, and healthy living. Our mission is to empower individuals with practical, science-based tips to improve their overall well-being. Whether you're looking to create a balanced diet, discover new workout routines, or manage diabetes through lifestyle changes, our content is tailored to help you succeed. We provide easy-to-follow guides, insightful articles, and the latest research to support your health journey.
        </p>
      </div>
    </div>
    <div className="quote">
      <div className='content'>
        <p>
          Our team of health enthusiasts and experts is passionate about making wellness accessible for everyone. From nutritional advice to fitness plans, we strive to simplify the path to a healthier lifestyle. We believe that small changes can have a big impact on your health, and we're here to guide you every step of the way. Join our growing community and take charge of your health with confidence and clarity.
        </p>
      </div>
    </div>
    <h1 id='faq'>FAQ's</h1>
    <h2>People ask for:</h2>
    <div className="faqs-container">
    {
      faqs.map(faq => {
        return (
          <FaqItem key={faq.id} question={faq.question} answer={faq.answer}/>
        )
      })
    }
    </div>
    <Contact />
  </div>
  )
}
