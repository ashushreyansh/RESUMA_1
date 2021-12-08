module.exports = (values) => {
    const {
        // Profile-Information
        firstname,
        lastname,
        email,
        phone,
        github,
        linkedin,
        twitter,
        about,

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
	<link href="https://fonts.googleapis.com/css?family=Roboto+Slab:300,400,500,600&display=swap" rel="stylesheet">
	<style>
    body {
        background: #1b1b25;
        color: #fff;
        font-family: 'Josefin Sans', sans-serif;
      }
      
      .separator {
        width: 30%;
      }
      
      .title {
        margin-top: 100px;
        margin-bottom: 10px;
      }
      
      .title a {
        color: #db4d57;
      }
      
      .title a:hover {
        text-decoration: none;
        font-weight: bold;
      }
      
      .title hr {
        width: 75%;
        background-color: #fff;
      }
      
      .summary {
        padding: 20px 135px;
      }
      
      .summary p {
        font-size: 1.6rem;
        letter-spacing: 0.2rem;
      }
      
      .work-experience {
        padding: 20px 135px;
      }
      
      .work-experience .experience-title {
        margin-top: 50px;
      }
      
      .work-experience .experience-summary {
        margin-top: 30px;
        margin-bottom: 50px;
      }
    .mail{
        color: #db4d57;
    }
    .main{
        display: flex;
    }
      .work-experience p {
        font-size: 1.6rem;
        letter-spacing: 0.2rem;
      }
      /*# sourceMappingURL=xyz.module.css.map */
	</style>
    </head>
	<body>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        
  <div class="container">
  <div class="row">
    <div class="col-md-10 col-md-offset-1">
      <div class="title text-center">
        <h1>${firstname} ${lastname}</h1>
        <h4 class= 'mail'><a><span style="padding-right:10px;"><i class="fas fa-envelope"></i></span>${email}</a></h4>
        <h4  class= 'mail'><a><span style="padding-right: 10px;"><i class="fab fa-github"></i></span>${github}</a></h4>		
                
            
        <h4><a>${phone}</a></h4>
        <hr />
      </div>
      
      <!-- summary section -->
      <div class="summary">
        <h2 class="text-center">About</h2>
        <p>${about}</p>
        
        <div class="row main">
          <div class="col-md-6 col-sm-6">
          `;
    if (skill1 != '' && skill1 != null)
        htmlTemplate += `
            <p>${skill1}</p>
            `;
    if (skill2 != '' && skill2 != null)
        htmlTemplate += `
            <p>${skill2}</p>
            `;
    if (skill3 != '' && skill3 != null)
        htmlTemplate += `
            <p>${skill3}</p>
            `;
    htmlTemplate += `
          </div>
          <div class="col-md-6 col-sm-6">
          `;
    if (skill4 != '' && skill4 != null)
        htmlTemplate += `
            <p>${skill4}</p>
            `;
    if (skill5 != '' && skill5 != null)
        htmlTemplate += `
            <p>${skill5}</p>
            `;
    if (skill6 != '' && skill6 != null)
        htmlTemplate += `
            <p>${skill6}</p>
            `;
    htmlTemplate += `
          </div>
        </div>
        
      </div>
      
      
      <!-- work experience section -->
      <div class="work-experience">
            <h2 class="text-center">Education</h2>
            <div class="row experience-title">
                <div class="col-md-9">
                    <h3>${college}</h3>
                    <h4>${qualification1}</h4>
                </div>
                <div class="col-md-3">
                    <h3>${fromyear1} - ${toyear1}</h3>
                </div>
            </div>
            <div class="row experience-summary">
                <div class="col-md-12">
                    <p>${description1}</p>
                </div>
            </div>
        
            <!-- Corasent -->
            <div class="row experience-title">
                <div class="col-md-9">
                    <h3>${school}</h3>
                    <h4>${qualification2}</h4>
                </div>
                <div class="col-md-3">
                    <h3>${fromyear2} - ${toyear2}</h3>
                </div>
            </div>
            <div class="row experience-summary">
                <div class="col-md-12">
                    <p>${description2}</p>
                </div>
            </div>
      </div>
      `;
    if (institute1 != '' && institute1 != null)
        htmlTemplate += `
      <div class="work-experience">
            <h2 class="text-center">Work Experience</h2>
            <div class="row experience-title">
                <div class="col-md-9">
                    <h3>${institute1}</h3>
                    <h4>${position1}</h4>
                </div>
                <div class="col-md-3">
                    <h3>${duration1}</h3>
                </div>
            </div>
            <div class="row experience-summary">
                <div class="col-md-12">
                    <p>${experienceDescription1}</p>
                </div>
            </div>
      </div>
      `;
    htmlTemplate += `
      <div class="work-experience">
            <h2 class="text-center">Projects</h2>
            <div class="row experience-title">
                <div class="col-md-9">
                    <h3>${title1}</h3>
                    <h4>${link1}</h4>
                </div>
            </div>
            <div class="row experience-summary">
                <div class="col-md-12">
                    <p>${projectDescription1}</p>
                </div>
            </div>
            <div class="row experience-title">
                <div class="col-md-9">
                    <h3>${title2}</h3>
                    <h4>${link2}</h4>
                </div>
            </div>
            <div class="row experience-summary">
                <div class="col-md-12">
                    <p>${projectDescription2}</p>
                </div>
            </div>
            `;
    if (title3 != '' && title3 != null)
        htmlTemplate += `
            <div class="row experience-title">
                <div class="col-md-9">
                    <h3>${title3}</h3>
                    <h4>${link3}</h4>
                </div>
            </div>
            <div class="row experience-summary">
                <div class="col-md-12">
                    <p>${projectDescription3}</p>
                </div>
            </div>
            `;
    htmlTemplate += `
      </div>
      <div class="work-experience">
      <h2 class="text-center">Interest</h2>
      <div class="row">
          <div class="col-md-6 col-sm-6">
          `;
    if (interest1 != '' && interest1 != null)
        htmlTemplate += `
            <p>${interest1}</p>
            `;
    if (interest2 != '' && interest2 != null)
        htmlTemplate += `
            <p>${interest2}</p>
            `;
    if (interest3 != '' && interest3 != null)
        htmlTemplate += `
            <p>${interest3}</p>
            `;
    htmlTemplate += `
          </div>
          <div class="col-md-6 col-sm-6">
          `;
    if (interest4 != '' && interest4 != null)
        htmlTemplate += `
            <p>${interest4}</p>
            `;
    if (interest5 != '' && interest5 != null)
        htmlTemplate += `
            <p>${interest5}</p>
            `;
    if (interest6 != '' && interest6 != null)
        htmlTemplate += `
            <p>${interest6}</p>
            `;
    htmlTemplate += `
          </div>
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
