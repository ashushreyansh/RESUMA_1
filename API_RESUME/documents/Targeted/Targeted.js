module.exports = (values) => {
    const {
        // Profile-Information
        firstname,
        lastname,
        email,
        phone,
        website,
        github,
        linkedin,
        twitter,
        facebook,
        instagram,

        // Education Information
        college,
        fromyear1,
        toyear1,
        qualification1,
        description1,
        school,
        fromyear2,
        toyear2,
        qualification2,
        description2,

        // Project Information...
        title1,
        link1,
        projectDescription1,
        title2,
        link2,
        projectDescription2,
        title3,
        link3,
        projectDescription3,

        // Experience Information
        institute1,
        position1,
        duration1,
        experienceDescription1,
        institute2,
        position2,
        duration2,
        experienceDescription2,

        // Extra Information
        skill1,
        skill2,
        skill3,
        skill4,
        skill5,
        skill6,
        interest1,
        interest2,
        interest3,
        interest4,
        interest5,
        interest6,
    } = values;

    let htmlTemplate = `
  <!DOCTYPE html>
    <html>
        <head>
            <title>${firstname}'s Resume</title>
            <meta charset="UTF-8"> 
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <link href='https://fonts.googleapis.com/css?family=Lato:400,300,700' rel='stylesheet' type='text/css'>
            <style>
                @font-face {
                    font-family: 'Open Sans';
                    font-style: normal;
                    font-weight: 400;
                    font-display: swap;
                    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                    src: local('Open Sans Regular'), local('OpenSans-Regular'), url("https://fonts.gstatic.com/s/opensans/v16/mem8YaGs126MiZpBA-UFVZ0b.woff2") format('woff2');
                }
                @font-face {
                    font-family: 'Roboto';
                    font-style: normal;
                    font-weight: 400;
                    font-display: swap;
                    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                    src: local('Roboto'), local('Roboto-Regular'), url("https://fonts.gstatic.com/s/roboto/v19/KFOmCnqEu92Fr1Mu4mxK.woff2") format('woff2');
                }
                @page {
                    size: A4;
                }
                body {
                    color-adjust: exact;
                    background-color: #fff;
                    font-family: 'Open Sans', sans-serif;
                    font-weight: 300;
                    display: flex;
                    justify-content: center;
                }
                .btn-print {
                    z-index: 1;
                    position: absolute;
                    right: 20px;
                    top: 20px;
                }
                .resume {
                    display: block;
                    font-family: 'Roboto', sans-serif;
                    font-size: 13.0736px;
                    font-weight: 400;
                    line-height: 1.5;
                    min-height: 1090.41px;
                }
                .resume h1 {
                    font-size: 2.86em;
                    font-weight: 600;
                    letter-spacing: -0.5px;
                }
                .resume h2 {
                    font-size: 1.43em;
                    font-weight: 600;
                    line-height: 1;
                    margin-bottom: 0;
                }
                .resume p {
                    margin-bottom: 1em;
                }
                .resume p:last-child {
                    margin-bottom: 0;
                }
                .resume ul {
                    padding-left: 20px;
                }
                .resume .resume__header, .resume .resume__section {
                    font-family: 'Open Sans', sans-serif;
                    font-size: 0.95em;
                }
                .resume .resume__header {
                    padding: 6em 4em 0;
                }
                .resume .resume__section {
                    margin-bottom: 4em;
                }
                .resume .resume__section:last-child {
                    padding-bottom: 0;
                }
                .resume .resume__section-title {
                    display: flex;
                    align-items: center;
                    margin-bottom: 1.43em;
                }
                .resume .resume__section-title > i {
                    margin-right: 0.63em;
                    font-size: 1.14em;
                    background-color: #5695cd;
                    color: #fff;
                    border: 0.25em solid #aacae6;
                    border-radius: 50%;
                    width: 2.51em;
                    height: 2.51em;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    line-height: 1.6;
                }
                .resume .resume__section-title > h2 {
                    margin-top: 0;
                    font-size: 1.5em;
                }
                .resume .resume__columns {
                    overflow: hidden;
                    padding: 4em;
                    padding-top: 0;
                }
                .resume .resume__main {
                    float: left;
                    width: 75%;
                    padding-right: 6em;
                }
                .resume .resume__side {
                    float: left;
                    width: 25%;
                }
                .resume .other-info p > b {
                    color: #555;
                }
                .resume .info-item {
                    margin-bottom: 0.2em;
                    font-weight: 300;
                }
                .resume .info-item:last-child {
                    margin-bottom: 0;
                }
                .resume .info-label {
                    display: inline-block;
                    padding-right: 0.63em;
                    font-size: 1.14em;
                    min-width: 2.19em;
                    text-align: center;
                }
                .resume .info-label i {
                    color: #5695cd;
                }
                .resume .xp-item {
                    margin-bottom: 4em;
                }
                .resume .xp-item:last-child {
                    margin-bottom: 0;
                }
                .resume .xp-job {
                    font-size: 1.14em;
                    font-weight: 600;
                    line-height: 1.25;
                }
                .resume .xp-job span, .resume .xp-job small {
                    font-weight: 400;
                }
                .resume .xp-job small {
                    font-size: 0.9em;
                }
                .resume .xp-date {
                    font-size: 0.8em;
                    margin-top: 0.3em;
                    margin-bottom: 1em;
                    color: #5695cd;
                }
                .resume .extra {
                    margin-bottom: 2em;
                }
                .resume .extra:last-child {
                    margin-bottom: 0;
                }
                .resume .extra-info small {
                    color: #666;
                    display: inline-block;
                    font-size: 0.7em;
                }
                .resume .extra-details, .resume .extra-details__progress {
                    border-radius: 6px;
                }
                .resume .extra-details {
                    margin-top: 0.5em;
                    background-color: #d1d9e1;
                    width: 100%;
                    height: 5px;
                    position: relative;
                }
                .resume .extra-details__progress {
                    background-color: #5695cd;
                    height: 5px;
                    position: absolute;
                    top: 0;
                    left: 0;
                }
                .resume .lang-item {
                    margin-bottom: 2em;
                }
                .resume .lang-item:last-child {
                    margin-bottom: 0;
                }
                .resume .lang-label {
                    width: 8em;
                }
                @media print {
                    body {
                        min-width: initial !important;
                    }
                    .btn-print {
                        display: none;
                    }
                }
            
            </style>
        </head>
	<body>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        <div class="sheet">
            <div class="two-column resume">
                <section class="resume__section resume__header">
                    <div class="resume__content">
                        <h1>${firstname} ${lastname}</h1>
                        <div class="info-item"><span class="info-label"><i class="fa fa-location-arrow"></i></span><span class="info-text">770 Marçal de Arruda Campos St., Bauru, SP, Brazil,
                                Zip: 17063-060</span></div>
                        <div class="info-item"><span class="info-label"><i class="fa fa-envelope"></i></span><span class="info-text">${email}</span></div>
                        <div class="info-item"><span class="info-label"><i class="fa fa-phone"></i></span><span class="info-text">${phone}</span></div>
                    </div>
                </section>
                <div class="resume__columns">
                    <div class="resume__main">
                        <section class="resume__section resume__summary">
                            <div class="resume__content">
                                <div class="resume__section-title"><i class="fa fa-pencil-square-o"></i>
                                    <h2>Professional Summary</h2>
                                </div>
                                <div class="other">
                                    <div class="other-info">
                                        <p>PHP & JavaScript developer + Devops Enthusiast with a
                                            decade of success leading teams in delivering appropriate
                                            technology solutions for desktop and mobile products.</p>
                                        <p>Comprehensive knowledge of enterprise architecture,
                                            agile methodologies, remote work, cloud services and
                                            web-based applications.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section class="resume__section resume__experience">
                            <div class="resume__content">
                                <div class="resume__section-title"><i class="fa fa-briefcase"></i>
                                    <h2>Employment History</h2>
                                </div>
                                <div class="xp-item">
                                    <div class="xp-job">${position1}
                                        <span>@ ${institute1}</span><br />
                                    </div>
                                    <div class="xp-date">${duration1}</div>
                                    <div class="xp-detail">
                                        <ul>
                                            ${experienceDescription1}
                                        </ul>
                                    </div>
                                </div>
                                <div class="xp-item">
                                    <div class="xp-job">${position2}
                                        <span>@ ${institute2}</span><br /><small>Bauru, Sao Paulo</small>
                                    </div>
                                    <div class="xp-date">${duration2}</div>
                                    <div class="xp-detail">
                                        <ul>
                                            ${experienceDescription2}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class="resume__side">
                        <section class="resume__section resume__skills">
                            <div class="resume__content">
                                <div class="resume__section-title"><i class="fa fa-align-center"></i>
                                    <h2>Skills</h2>
                                </div>
                                <div class="resume__text">
                                `;
                                if(skill1 != '' && skill1 != null)
                                htmlTemplate += `
                                    <div class="extra">
                                        <div class="extra-info">${skill1}<br /></div>
                                    </div>
                                    `;
                                if(skill2 != '' && skill2 != null)
                                htmlTemplate += `
                                    <div class="extra">
                                        <div class="extra-info">${skill2}<br /></div>
                                    </div>
                                    `;
                                if(skill3 != '' && skill3 != null)
                                htmlTemplate += `
                                    <div class="extra">
                                        <div class="extra-info">${skill3}<br /></div>
                                    </div>
                                    `;
                                if(skill4 != '' && skill4 != null)
                                htmlTemplate += `
                                    <div class="extra">
                                        <div class="extra-info">${skill4}<br /></div>
                                    </div>
                                    `;
                                if(skill5 != '' && skill5 != null)
                                htmlTemplate += `
                                    <div class="extra">
                                        <div class="extra-info">${skill5}<br /></div>
                                    </div>
                                    `;
                                if(skill6 != '' && skill6 != null)
                                htmlTemplate += `
                                    <div class="extra">
                                        <div class="extra-info">${skill6}<br /></div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section class="resume__section resume__languages">
                            <div class="resume__content">
                                <div class="resume__section-title"><i class="fas fa-project-diagram"></i>
                                    <h2>Projects</h2>
                                </div>
                                `;
                            if(title1 != '' && title1 != null)
                                htmlTemplate += `
                                <div class="extra">
                                    <div class="extra-info">${title1}</div>
                                </div>
                                `;
                            if(title2 != '' && title2 != null)
                                htmlTemplate += `
                                <div class="extra">
                                    <div class="extra-info">${title2}</div>
                                </div>
                                `;
                            if(title2 != '' && title2 != null)
                                htmlTemplate += `
                                <div class="extra">
                                    <div class="extra-info">${title3}</div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </body>
    </html>
  `;
    return htmlTemplate;
};
