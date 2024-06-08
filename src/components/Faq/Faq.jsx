import React from 'react'
import './Faq.scss';

export default function Faq() {
  const faqs = [
    {
      id: 1,
      question: "What is tax discrimination?",
      answer: 'Tax discrimination occurs when tax policies unfairly favor certain groups or individuals over others, often leading to unequal tax burdens and perpetuating economic inequalities.'
    },
    {
      id: 2,
      question: "Why is it important to fight tax injustices in Kenya?",
      answer: 'Fighting tax injustices is crucial for promoting economic fairness, reducing inequality, ensuring that all citizens contribute their fair share, and improving public trust in the tax system.'
    },
    {
      id: 3,
      question: "How does tax discrimination affect ordinary Kenyans?",
      answer: 'Tax discrimination can disproportionately impact lower-income individuals and small businesses, increasing their financial burden while wealthier individuals or larger corporations might evade taxes or receive unfair advantages.'
    },
    {
      id: 4,
      question: "What are some examples of tax injustices in Kenya?",
      answer: 'Examples include regressive tax policies that disproportionately affect the poor, lack of transparency in tax collection, and corruption that diverts tax revenues away from public services.'
    },
    {
      id: 5,
      question: "How can I get involved in fighting tax injustices?",
      answer: 'You can get involved by joining advocacy groups, participating in awareness campaigns, attending public forums, supporting policy reforms, and spreading information about the importance of fair tax practices.'
    },
    {
      id: 6,
      question: "What role does transparency play in creating a fair tax system?",
      answer: 'Transparency ensures that tax policies are implemented fairly, tax revenues are used appropriately, and corrupt practices are minimized. It builds public trust and accountability in the tax system.'
    },
    {
      id: 7,
      question: "What actions are being taken to address tax injustices in Kenya?",
      answer: 'Actions include advocating for policy reforms, conducting research to highlight tax issues, engaging with policymakers, and raising public awareness through education and community mobilization.'
    },
    {
      id: 8,
      question: "How do fair tax policies benefit the economy?",
      answer: 'Fair tax policies promote economic stability by ensuring all citizens and businesses pay their fair share, leading to better-funded public services, infrastructure development, and a more equitable distribution of wealth.'
    },
    {
      id: 9,
      question: "Can changing tax policies really make a difference?",
      answer: 'Yes, equitable tax policies can significantly reduce economic disparities, improve public services, and create a more inclusive and prosperous society for all citizens.'
    },
    {
      id: 10,
      question: "Where can I learn more about tax justice and advocacy in Kenya?",
      answer: 'You can learn more by visiting our website, attending our events and workshops, reading reports from reputable organizations, and following advocacy groups dedicated to tax justice in Kenya.'
    },
  ]
  
  function toggleAccordion(e) {
    const itemToggle = e.target.getAttribute("aria-expanded");
    if (itemToggle == "false") {
      e.target.setAttribute("aria-expanded", "true");
    } else{
      e.target.setAttribute("aria-expanded", "false");
    }
  }
  return (
<div className="faq">
  <h1>FAQ's</h1>
  <h2>People ask for:</h2>
  <div className="accordion">
    {
      faqs.map(faq => {
        return (
          <div className="accordion-item" key={faq.id}   onClick={(e) => toggleAccordion(e)}  aria-expanded="false">
            <button id="accordion-button-1" name='accordion-button'><span className="accordion-title">{faq.question}</span><span className="icon" aria-hidden="true"></span></button>
            <div className="accordion-content">
              <p>{faq.answer}</p>
            </div>
          </div>
        )
      })
    }
  </div>
</div>
  )
}
