# **My Portfolio Site**
###  **A journey into selling myself online.**
### [My Live Portfolio][1]

   
## Goals
 This portfolio has been a very interesting project for me to work on.  It has been an opportunity for me to both showcase my skills and also build my online presence and identity.  When building this website, I had two main components I wanted to focus on:
 ###### 1.  Portfolio Landing Page
  * I wanted a page that showcased both my programing skills and my abilities in regards to front-end design.
  * I wanted a page that accurately conveyed who I am as a person and the things that I value.
  * I also wanted a section dedicated to showcasing my skills as a graphic designer.
 ###### 2.  Building a Blog to Link to from my Landing Page
  * I wanted a blog that looked beautiful aesthetically with a name and message that suited me.
  * I wanted to have a blog that focused on some key areas of my life:
     * Coding - A place where I can document my journey into developing myself as a software engineer.
     * Lifestyle - A place where I can share my personal lifestyle and views with others in a constructive manner.
     * Projects - A place where I can showcase current projects I am working on, both inside and outside of tech.
     * Resume - Another place where I can showcase my resume and receive feedback on it.
     * About - A page where I could share with others my views behind LHM and why I believe in that cause.
     
     
## Design Inspiration for Portfolio
<div align="center"><img src="images/portfolioPic.jpg" width="500"></div>

When beginning with the design of my portfolio, I started with the picture I wanted to use as a headshot.  I studied this image for a while and thought of ways that I could edit it to make it flow nicely within a portfolio.  I started by looking at the color and the content of the picture.  I saw that with some photo manipulation I could crop this image into a circle with a new background, I could also embellish the color of my shirt a little bit to make it more workable with an overall design scheme.  

I begin planning out my design theme with my photo manipulation in mind.  I wanted my theme to make use of white space, but also utilize colors which matched the shirt in the picture.  I chose to go with a design that featured various shades of blues, pastel greens, and purples in order to complement the shirt.  I then counter balanced the design with a light gray gradient with a small amount of variation.  The design I chose was a series of opaque CSS squares that were rotated and translated off the page with a fixed position.  This made the design universal as the user scrolls.

Next I thought about the content I wanted surrounding my head portfolio picture.  I decided to make a variation of a word cloud.  I wanted the cloud to feature some key characteristics and traits that I value and possess.  I also wanted to feature my personal slogan, **"Reliable Solutions for Real-World Problems,"** as well as access to my social media accounts, resume and contact information.

I ended up creating a head section of my portfolio that I felt accurately conveyed me as a person,shared my values and included symmetry and balance as design elements.

<div align="center"><img src="markdownimages/PortfolioHead.png" width="500"></div>

Having a symmetrical design element to my portfolio was important to me, because symmetry and balance are both important aspects of my personal and professional lives.  Symmetry and balance also heavily influenced the development of my personal logo which is featured on my portfolio as well. 

<div align="center"><img src="images/MMLogoColored.png" width="250"></div>

Throughout my portfolio I make use of modal boxes quite a bit.  I use them to show off my resume, projects as well as graphic design skills.  I worked hard to develop interesting transitional animations for each of the modals.
* The resume modal comes down from the top of the screen.
* The project modals come down from the top and can be scrolled to both the right and the left using javascript.
* The graphic design modal extends from the bottom of the screen.

<div align="center">
    <img src="markdownimages/PortfolioGraphic.png" height="200"> 
    <img src="markdownimages/PortfolioProject.png" height="200"> 
    <img src="markdownimages/PortfolioResume.png" height="200">
</div>

The main portion of my profile is broken into two different segments:

1.  Project Section
   * Features all of my current projects.
   * Provides some insight on my role in the projects.
   * Links to the github.
   * Links to a Live Demo if available.
   * Features a video of the app in action.  (A work in progress :D)

2.  About the Developer Section:
   * Features the original head shot.
   * A section telling the user more about me and my journey into software engineering.
   * A section that lists out all of skills based on three categories:
      1.  What I'm currently working on learning.
      2.  What I currently know.
      3.  What I'd like to learn.

I thought this skills section was very important because I wanted to share not only what I have experience with, but what I'm continuing to work towards learning and what I would like to learn in the future.  I wanted to offer aid to recruiters and prospective employers in matching me with a position that matches my skillset and offers opportunities to gain further technological experience with technologies I'm interested in.

<div align="center"> 
    <img src="/markdownimages/PortfolioProjects.png" height="200"> 
    <img src="markdownimages/PortfolioDev.png" height="200"> 
    <img src="markdownimages/PortfolioSkills.png" height="200">
</div>

The last section of my portfolio was very important for me to convey.  Even though it is at the bottom of the page, it is far from the least important section.  This section features all of my recent graphic design work.  Upon clicking on one of the images, the user can learn more about the inspiration behind that particular design.  This section was important to me because I wanted to demonstrate my creativity and versatility in regards to front-end development.

<div align="center"><img src="/markdownimages/PortfolioGraphics.png" width="500"></div>

In the end, I felt I developed a design and brand that suits me as a person.  I worked hard to bring craftsmanship, personality and personal identity to all aspects of the design and ended up being very happy with the result.

## Challenges

In this project I ran into several challenges in regards to design, coding and content.  I'd like to share about the most difficult of my struggles in each of these areas.

#### Design

In regards to the design of my portfolio, I ran into two main challenges.

The first challenge was the creation of the word cloud.  In order to create the word cloud I had to use a series of flex boxes in order to position the words exactly the way I wanted them to appear.  This required a series of nested flex boxes with various classes and psuedo that were dictating the justification, styling and alignment of each given word.  The execution of the word cloud quickly became a more complex task than I had originally estimated.  Here is a snippet of code from the development of the word cloud:

```html
<div id="RightColumn" class="flexColumnSide">
    <div class="flexRSide column justifyEnd alignStart">
        <div class="firstRowText">CREATIVE</div>
        <div class="flex justifyEnd">
            <div class="secondRowSmallText">Insightful</div>
            <div class="secondRowSmallText">Strategic</div>
            <div class="secondRowSmallText">Progressive</div>
        </div>
    </div>
    <div class="flexRSide justifyEnd alignStart column basis13">
        <div class="flex justifyEnd alignStart">
            <div class="thirdRowSmallText">Detail Oriented</div>
            <div class="thirdRowSmallText">Influential</div>
            <div class="thirdRowSmallText">Productive</div>
        </div>
        <div class="fourthRowMedText">RESULT DRIVEN</div>
    </div>
    <div class="flexRSide">
        <div class="largeMiddleFont">DYNAMIC</div>
        <div class="flex column fontSize15 alignStart lineH90">
            <div class="middleSide">Energetic</div>
            <div class="middleSide">Commited</div>
            <div class="middleSide">Sincere</div>
        </div>
    </div>
    <div class="flexRSide alignStart column">
        <div class="fifthRowMedText">INDUSTRIOUS</div>
        <div class="flex justifyEnd">
            <div class="flex column">
                <div class="sixthS1Text"> Diverse</div>
                <div class="sixthS2Text">Flexible</div>
            </div>
            <div class="sixthLargeText">Comprehensive</div>
        </div> 
    </div>
    <div class="flexRSide alignStart">
        <div class="lastRowText">CONSISTENT</div>
    </div>
</div>
```

The second main challenge I faced in regards to design was a very important challenge to overcome.  That was the issue of responsiveness and restructuring of the page depending on the screen size of the window being used to view the site.  This required me to scale the absolute positioning of the modal boxes and editing the flexboxes that wrapped around my page content.  This is an example of my media queries for the mainpage.

```css
@media only screen and (min-width: 500px) {
    .projectItem {
        flex-basis: 45%;
        height: 13em;
    }
    .pageHead {
        margin-top: 10%;
    }
}

@media only screen and (min-width: 768px) {
    #aboutContent {
        flex-direction: row
    }
    .animePanel {
        flex-direction: row;
        justify-content: center;
    }
    .pageOne {
        height: 100vh;
    }
    #LeftColumn {
        display: flex;
        flex-basis: 45%;
        order: 0;
        align-items: flex-end;
        margin-top: 0;
    }
    .projectItem {
        flex-basis: 40%;
        height: 15em;
        width: 15em;
    }
    
}

@media only screen and (min-width: 1000px) {
    #LeftColumn {
        flex-basis: 30%;
    }
    #RightColumn {
        display: flex;
    }
    .projectItem {
        flex-basis: 35%;
        height: 20em;
        width: 20em;
    }
    .pageHead {
        margin-top: 5%;
    }
    
}
@media only screen and (min-width: 1200px) {
    .projectItem {
        flex-basis: 30%;
        height: 20em;
        width: 20em;
    }
}

```

After editing the modals accordingly, I found myself to have a responsive portfolio:

<div align="center">
    <img src="/markdownimages/ResponsiveHead.png" height="200px">
    <img src="/markdownimages/ResponsiveProjects.png" height="200px">
    <img src="/markdownimages/ResponsiveAbout.png" height="200px">
    <img src="/markdownimages/ResponsiveModal.png" height="200px">
</div>


### Coming soon!
      
[1]: https://www.matthew-marberry.com