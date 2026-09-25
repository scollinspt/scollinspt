# Project Log

## 2026-09-25 - Movement Systems professional-profile integration

- Added Movement Systems and the Human Movement Systems Laboratory as first-class parts
	of the Clinical Inquiry program across the homepage, research narrative, projects
	directory, and professional background.
- Defined clinical instantiation as the disciplined application of population evidence,
	mechanisms, and movement knowledge to an inspectable working model of one person.
- Preserved the boundary that population knowledge informs but does not determine
	patient-specific conclusions.
- Connected HMS Lab inquiry to Plymouth State University DPT's clinicians-first,
	hands-on learning philosophy and Pro Bono Clinic while distinguishing clinical care,
	education, and research.
- Linked to the authoritative Movement Systems site and repository rather than copying
	their detailed scientific and operational content.

### Publication gate

- Local implementation and validation may proceed before publication.
- Public release verification remains deferred until `https://movementsystems.org`
	presents a valid custom-domain certificate and HTTPS is enforced.
- The Pages workflow supports manual dispatch and an hourly schedule from `main`, so a
	source push may publish before a separate manual deployment.

### Local validation

- Confirmed all six public pages return HTTP 200 at 1,440 x 1,000 and 390 x 844.
- Confirmed each page has a descriptive title, metadata description, and exactly one
	`h1`, with no duplicate IDs, broken images, or horizontal overflow.
- Confirmed the mobile menu exposes all five navigation links, updates its expanded
	state, and reaches the selected page.
- Confirmed all internal pages, the research anchor, styles, script, and favicon resolve.
- Confirmed authoritative links for stats4PT, Physiolog, the project repositories, and
	Substack respond; the Movement Systems HTTPS link remains behind the publication gate
	until its certificate is issued.

## 2026-09-10 - Analytics resume and application workflow

- Developed a two-page, ATS-readable resume for senior healthcare analytics and clinical informatics opportunities.
- Reframed academic, clinical, and leadership experience around consultative analytics, decision support, stakeholder communication, and healthcare operations.
- Documented hands-on analytics and programming experience in R and Python, along with Power BI dashboard experience.
- Added verified doctoral coursework in biostatistics, epidemiology, advanced regression modeling, multivariate methods, and work analysis.
- Added the in-progress MBA in General Management and relevant finance, accounting, management, and strategy coursework.
- Distinguished completed public projects from research and software initiatives that remain in active development.
- Established `job-materials/` as the private location for position-specific resumes and application artifacts.
- Added repository ignore rules for private job materials, transcripts, and macOS metadata.
- Reviewed the Humana Senior Analytics Consultant application workflow and identified corrections needed after automated resume parsing.
- Deferred publication of a general analytics resume until it can be reviewed separately for durable positioning, claim verification, and public contact information.

### Validation

- Generated DOCX and PDF resume formats from the Markdown source.
- Confirmed the tailored PDF remained two pages and retained extractable headings and role-relevant text.
- Confirmed private application materials and transcripts are excluded from Git tracking.