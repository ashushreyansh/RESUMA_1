module.exports = (values) => {
    const {
        // Profile-Information
        firstname,
        lastname,
        email,
        phone,
        about,
        github,
        linkedin,
        twitter,

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
        institute3,
        position3,
        duration3,
        experienceDescription3,

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
  * {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

html {
  height: 100%;
}

body {
  min-height: 100%;
  background: #eee;
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  color: #222;
  font-size: 14px;
  line-height: 26px;
  padding-bottom: 50px;
}

.container {
  max-width: 700px;
  background: #fff;
  margin: 0px auto 0px;
  -webkit-box-shadow: 1px 1px 2px #dad7d7;
          box-shadow: 1px 1px 2px #dad7d7;
  border-radius: 3px;
  padding: 40px;
  margin-top: 50px;
}

.header {
  margin-bottom: 30px;
}

.header .full-name {
  font-size: 40px;
  text-transform: uppercase;
  margin-bottom: 5px;
}

.header .first-name {
  font-weight: 700;
}

.header .last-name {
  font-weight: 300;
}

.header .contact-info {
  margin-bottom: 20px;
}

.header .email,
.header .phone {
  color: #999;
  font-weight: 300;
}

.header .separator {
  height: 10px;
  display: inline-block;
  border-left: 2px solid #999;
  margin: 0px 10px;
}

.header .position {
  font-weight: bold;
  display: inline-block;
  margin-right: 10px;
  text-decoration: underline;
}

.details {
  line-height: 20px;
}

.details .section {
  margin-bottom: 40px;

}

.details .section:last-of-type {
  margin-bottom: 0px;
}

.details .section__title {
  letter-spacing: 2px;
  color: #54afe4;
  font-weight: bold;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.details .section__list-item {
  margin-bottom: 20px;
}

.details .section__list-item:last-of-type {
  margin-bottom: 0;
}

.details .left,
.details .right {
  vertical-align: top;
  display: inline-block;
}

.details .left {
  width: 60%;
}

.details .right {
  text-align: right;
  width: 39%;
}

.details .name {
  font-weight: bold;
}

.details a {
  text-decoration: none;
  color: #000;
  font-style: italic;
}

.details a:hover {
  text-decoration: underline;
  color: #000;
}

.details .skills__item {
  margin-bottom: 10px;
}

.details .skills__item .right input {
  display: none;
}

.details .skills__item .right label {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: #c3def3;
  border-radius: 20px;
  margin-right: 3px;
}

.details .skills__item .right input:checked + label {
  background: #79a9ce;
}

	</style>
    </head>
	<body>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        
<div class="container">
<div class="header">
  <div class="full-name">
    <span class="first-name">${firstname}</span> 
    <span class="last-name">${lastname}</span>
  </div>
  <div class="contact-info">
    <span class="email">Email: </span>
    <span class="email-val">${email}</span>
    <span class="separator"></span>
    <span class="phone">Phone: </span>
    <span class="phone-val">${phone}</span>
  </div>
  
  <div class="about">
    <span class="desc">
        ${about} 
    </span>
    
			<p class="rela-block social mb-0"><span style="padding-right: 15px; font-size : 20px; font-style: normal;"><i class="fab fa-github"></i></span>${github}</p>
			
			<p class="rela-block social mb-0"><span style="padding-right: 15px; font-size: 20px; font-style: normal;"><i class="fab fa-twitter-square"></i></span>${twitter}</p>
			
			<p class="rela-block social mb-4"><span style="padding-right: 15px; font-size :20px; font-style: normal;"><i class="fab fa-linkedin"></i></span>${linkedin}</p>
  </div>
</div>
 <div class="details">
    <div class="section">
        <div class="section__title">Experience</div>
        <div class="section__list">
            <div class="section__list-item">
                    <div class="left">
                    <div class="name">${institute1}</div>
                    <div class="duration">${duration1}</div>
                    </div>
                    <div class="right">
                    <div class="name">${position1}</div>
                    <div class="desc">${experienceDescription1}</div>
                    </div>
            </div>
            <div class="section__list-item">
                <div class="left">
                <div class="name">${institute2}</div>
                <div class="duration">${duration2}</div>
                </div>
                <div class="right">
                <div class="name">${position2}</div>
                <div class="desc">${experienceDescription2}</div>
                </div>
            </div>
            `;
    if (institute3 != '' && institute3 != null)
        htmlTemplate += `
            <div class="section__list-item">
                <div class="left">
                    <div class="name">${institute3}</div>
                    <div class="duration">${duration3}</div>
                </div>
                <div class="right">
                    <div class="name">${position3}</div>
                    <div class="desc">${experienceDescription3}</div>
                </div>
            </div>
            `;
    htmlTemplate += ` 
        </div>
    </div>
  <div class="section">
    <div class="section__title">Education</div>
    <div class="section__list">
      <div class="section__list-item">
        <div class="left">
          <div class="name">${college}</div>
          <div class="duration">${fromyear1} - ${toyear1}</div>
        </div>
        <div class="right">
          <div class="name">${qualification1}</div>
          <div class="desc">${description1}</div>
        </div>
      </div>
      <div class="section__list-item">
      <div class="left">
      <div class="name">${school}</div>
      <div class="duration">${fromyear2} - ${toyear2}</div>
    </div>
    <div class="right">
      <div class="name">${qualification2}</div>
      <div class="desc">${description2}</div>
    </div>
      </div>
    </div> 
  </div>
   <div class="section">
    <div class="section__title">Projects</div> 
     <div class="section__list">
       <div class="section__list-item">
         <div class="name">${title1}</div>
         <div class="text">${projectDescription1}</div>
         <div class = 'link'>${link1}</div>
       </div>
       
       <div class="section__list-item">
       <div class="name">${title2}</div>
       <div class="text">${projectDescription2}</div>
       <div class = 'link'>${link2}</div>
       </div>
       `;
    if (title3 != '' || title3 != null)
        htmlTemplate += `<div class="section__list-item">
            <div class="name">${title3}</div>
            <div class="text">${projectDescription3}</div>
            <div class = 'link'>${link3}</div>
             </div>`;
    htmlTemplate += `
  </div>
  `;
    if (
        skill1 != '' ||
        skill1 != null ||
        skill2 != '' ||
        skill2 != null ||
        skill3 != '' ||
        skill3 != null ||
        skill4 != '' ||
        skill4 != null ||
        skill5 != '' ||
        skill5 != null ||
        skill6 != '' ||
        skill6 != null
    )
        htmlTemplate += `
   <div class="section" style="margin-top: 40px;">
     <div class="section__title">Skills</div>
     
     <div class="skills">
     `;
    if (skill1 != '' && skill1 != null)
        htmlTemplate += `
       <div class="skills__item">
         <div class="left"><div class="name">
           ${skill1}
           </div></div>
       </div>
       
     </div>
     `;
    if (skill2 != '' && skill2 != null)
        htmlTemplate += `
     <div class="skills__item">
         <div class="left"><div class="name">
           ${skill2}</div></div>
       </div>
       `;
    if (skill3 != '' && skill3 != null)
        htmlTemplate += `
       <div class="skills__item">
           <div class="left"><div class="name">
             ${skill3}</div></div>
         </div>
         `;
    if (skill4 != '' && skill4 != null) {
        htmlTemplate += `
         <div class="skills__item">
             <div class="left"><div class="name">
               ${skill4}</div></div>
           </div>
           `;
    }
    if (skill5 != '' && skill5 != null) {
        htmlTemplate += `
           <div class="skills__item">
               <div class="left"><div class="name">
                 ${skill5}</div></div>
               
             </div>
             `;
    }
    if (skill6 != '' && skill6 != null)
        htmlTemplate += `
             <div class="skills__item">
                 <div class="left"><div class="name">
                   ${skill6}</div></div>
                 
               </div>
               `;
    htmlTemplate += `
       
    </div>
   <div class="section">
   <div class="section__title">
     Interests
     </div>
     <div class="section__list">
     `;
    if (interest1 != '' && interest1 != null)
        htmlTemplate += `
       <div class="section__list-item">
            ${interest1}        
        </div>
        `;
    if (interest2 != '' && interest2 != null)
        htmlTemplate += `
       <div class="section__list-item">
            ${interest2}        
        </div>
        `;
    if (interest3 != '' && interest3 != null)
        htmlTemplate += `
       <div class="section__list-item">
            ${interest3}        
        </div>
        `;
    if (interest4 != '' && interest4 != null)
        htmlTemplate += `
       <div class="section__list-item">
            ${interest4}        
        </div>
        `;
    if (interest5 != '' && interest5 != null)
        htmlTemplate += `
       <div class="section__list-item">
            ${interest5}        
        </div>
        `;
    if (interest6 != '' && interest6 != null)
        htmlTemplate += `
       <div class="section__list-item">
            ${interest6}        
        </div>
        `;
    htmlTemplate += `
     </div>
   </div>
   </div>
</div>
</div>
    </body>
    </html>
  `;
    return htmlTemplate;
};

/* `;
    if (institute3 != '' && institute3 != null)
        htmlTemplate = `
        <div class="section__list-item">
            <div class="left">
                <div class="name">${institute3}</div>
                <div class="duration">${duration3}</div>
            </div>
            <div class="right">
                <div class="name">${position3}</div>
                <div class="desc">${experienceDescription3}</div>
            </div>
        </div>
        `;
    htmlTemplate += ` */
