import styles from './ResumeReact.module.scss';

export default function ResumeReact() {
  return (
    <div className={styles.container}>
      <header className={styles.resumeHeader}>
        <div className={styles.nameBlock}>
          <h1>Peter Menh</h1>
          <div className={styles.title}>Software Engineer</div>
          <div className={styles.contact}>petermenh.developer@gmail.com • (806) 881-8656</div>
        </div>
        <div className={styles.headerMeta}>
          <div>linkedin.com/in/petermenh</div>
        </div>
        <div className={styles.headerSummary}>
          <p>
            Software engineer with a Bachelor's in Computer Science and expertise in e-commerce and Salesforce Commerce Cloud.
            Experienced in leading projects, translating technical concepts for business stakeholders, and delivering high-performance,
            data-driven solutions. Skilled at process improvement, team collaboration, and aligning technology initiatives with strategic business goals.
          </p>
        </div>
      </header>

      <aside className={styles.sidebar} aria-label="sidebar">
        <div className={styles.links}>
          <div className={styles.sectionTitle}>Location</div>
          <div className={styles.eduItem}>Dallas–Fort Worth, TX</div>
        </div>

        <div className={styles.skills}>
          <div className={styles.sectionTitle}>Key Skills</div>
          <div className={styles.skillList}>
            <div className={styles.skillCategory}>Software Development &amp; Programming</div>
            <div className={styles.skillItems}>
              {['C#','Java','JavaScript','TypeScript','Python','ReactJS','AngularJS','jQuery','ASP.NET Core','HTML5','CSS3','JSON','MVC Pattern','NPM','GitHub'].map(s => (
                <span key={s} className={styles.skill}>{s}</span>
              ))}
            </div>

            <div className={styles.skillCategory}>Mobile Development</div>
            <div className={styles.skillItems}>
              {['Android','iOS','Xamarin','Unity'].map(s => (
                <span key={s} className={styles.skill}>{s}</span>
              ))}
            </div>

            <div className={styles.skillCategory}>Cloud &amp; E-Commerce</div>
            <div className={styles.skillItems}>
              {['Salesforce Commerce Cloud','E-Commerce Platforms'].map(s => (
                <span key={s} className={styles.skill}>{s}</span>
              ))}
            </div>

            <div className={styles.skillCategory}>Project &amp; Program Management</div>
            <div className={styles.skillItems}>
              {['Agile','Scrum','Jira','Risk & Change Management','Project Planning & Execution','Process Improvement'].map(s => (
                <span key={s} className={styles.skill}>{s}</span>
              ))}
            </div>

            <div className={styles.skillCategory}>Platforms &amp; Tools</div>
            <div className={styles.skillItems}>
              {['Windows','macOS','Linux','Microsoft 365 Apps'].map(s => (
                <span key={s} className={styles.skill}>{s}</span>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.education}>
          <div className={styles.sectionTitle}>Education</div>
          <div className={styles.eduItem}>
            <strong>Bachelor's in Computer Science</strong>
            <div className={styles.muted}>University of Texas at Arlington, Dec 2016</div>
          </div>
          <div className={styles.eduItem}>
            <strong>Associate's in Architecture</strong>
            <div className={styles.muted}>Amarillo College, May 2008</div>
          </div>
        </div>
      </aside>

      <main className={styles.main}>
        <section id="experience">
          <div className={styles.sectionTitle}>Professional Experience</div>
          <div className={styles.jobs}>
            {[
              {
                title: 'Senior Software Developer',
                company: '— Tractor Supply Company (Web Design Services)',
                period: 'Sept 2024 — Jul 2025',
                bullets: [
                  'Engineered a design system with reusable React/TypeScript components, improving consistency across platforms.',
                  'Partnered with design and business teams to align UI/UX with business objectives.',
                  'Contributed to 100+ pages of documentation and tutorials, ensuring adoption across teams.',
                ],
              },
              {
                title: 'Senior Salesforce Commerce Cloud Developer',
                company: '— Sally Beauty (Retail)',
                period: 'Oct 2020 — Sept 2024',
                bullets: [
                  'Led front-end and back-end enhancements to modernize legacy UI and improve user experience.',
                  'Boosted site performance via caching optimization and codebase streamlining.',
                  'Integrated Google Analytics and third-party services to capture insights and enhance customer engagement.',
                ],
              },
              {
                title: 'Web Applications Developer',
                company: '— First Command (Financial Planning)',
                period: 'Oct 2019 — Oct 2020',
                bullets: [
                  'Built a digital forms platform that increased advisor productivity and conversion rates.',
                  'Designed features in AngularJS and ensured stability through unit testing.',
                ],
              },
              {
                title: 'Mobile Applications Developer',
                company: '— Southwest Airlines Pilots Association (SWAPA)',
                period: 'Mar 2019 — Oct 2019',
                bullets: [
                  'Developed Xamarin mobile features to support pilots across multiple locations.',
                  'Partnered with UX designers and pilots to improve workflows and release reliability.',
                ],
              },
              {
                title: 'Salesforce Commerce Cloud Developer',
                company: '— Pier 1 Imports (Retail)',
                period: 'Apr 2017 — Mar 2019',
                bullets: [
                  'Enhanced eCommerce performance with caching and responsive design.',
                  'Managed Adobe & Google Analytics platforms for retail insights.',
                  'Improved accessibility compliance with ADA standards.',
                ],
              },
              {
                title: 'Web Applications Developer',
                company: '— Ayoka Systems (Software Development)',
                period: 'May 2016 — Apr 2017',
                bullets: [
                  'Delivered multiple client solutions using .NET & MVC within strict deadlines.',
                  'Provided tailored business solutions to diverse industries.',
                ],
              },
            ].map((job) => (
              <article key={job.period} className={styles.job}>
                <header>
                  <h3>{job.title} <span className={styles.company}>{job.company}</span></h3>
                  <time>{job.period}</time>
                </header>
                <ul>
                  {job.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="certifications" className={styles.certifications}>
          <div className={styles.sectionTitle}>Certifications</div>
          <ul className={styles.certList}>
            <li><strong>Connected Manager Certification</strong> — Aug 2025 <span className={styles.muted}>| Capgemini University</span></li>
            <li><strong>Certified SAFe 5 Practitioner</strong> — Apr 2023 <span className={styles.muted}>| Scaled Agile</span></li>
          </ul>
        </section>
      </main>
    </div>
  );
}
