// small UI helpers
document.addEventListener('submit', function(e){
  if(e.target.id === 'contact-form' || e.target.id === 'newsletter-form'){
    e.preventDefault();
    alert('Thanks! We received your message. We will contact you at the provided email.');
    e.target.reset();
  }
});

// service-detail loader - reads ?topic= from URL
(function(){
  const params = new URLSearchParams(location.search);
  const topic = params.get('topic') || 'managed-cloud';
  const titleEl = document.getElementById('service-title');
  const introEl = document.getElementById('service-intro');
  const bodyEl = document.getElementById('service-body');
  const services = {
    'managed-cloud': {
      title: 'Managed Cloud Services',
      intro: 'Complete lifecycle management for your cloud infrastructure — monitoring, backups, incident response, and cost optimization.',
      body: `<h3>What we manage</h3>
      <ul><li>24/7 monitoring & alerting</li><li>Backups & DR</li><li>Security patching & compliance</li><li>Cost optimisation & reporting</li></ul>
      <a href="contact.html" class="btn">Request Assessment</a>`
    },
    'devops': {
      title: 'DevOps & Automation',
      intro: 'Automate delivery pipelines and infrastructure so your engineering teams can ship faster and safer.',
      body: `<h3>Key capabilities</h3>
      <ul><li>CI/CD design & implementation</li><li>Infrastructure as Code (Terraform/CF)</li><li>Container orchestration (Kubernetes)</li></ul>
      <a href="contact.html" class="btn">Talk to an expert</a>`
    },
    'staffing': {
      title: 'Cloud Staffing Solutions',
      intro: 'On-demand cloud engineers, architects and support staff. Short-term or long-term engagements.',
      body: `<h3>Staffing models</h3><ul><li>Contract</li><li>Contract-to-hire</li><li>Dedicated teams</li></ul>
      <a href="mailto:career@cloudlyne.com" class="btn">Submit Resume</a>`
    },
    'strategy': {
      title: 'Cloud Strategy & Consulting',
      intro: 'Migration planning, architecture reviews, security audits and a roadmap aligned to business goals.',
      body: `<p>We run discovery workshops, create migration plans, and help roadmap cloud adoption.</p>
      <a href="contact.html" class="btn">Book a workshop</a>`
    }
  };

  if(titleEl){
    const s = services[topic] || services['managed-cloud'];
    titleEl.innerText = s.title;
    introEl.innerText = s.intro;
    bodyEl.innerHTML = s.body;
  }
})();

