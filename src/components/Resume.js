import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './Experience';
import Skills from './Skills';
import resumePic from '../images/Sorsi-resume.png';

class Resume extends Component {
	render() {
		return (
			<div>
				<Grid>
					<Cell col={4}>
						<div style={{ textAlign: 'center' }}>
							<img id="sorsi-resume" src={resumePic} alt="resume-pic" />
						</div>
						<h2 style={{ paddingTop: '2em' }}>Orsolya Sütő</h2>
						<h4 style={{ color: 'grey' }}>Software Developer</h4>
						<hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
						<p>
							As a proud career changer I have been involved in software
							development more than 4 years now. During this time I had the
							opportunity to use my knowledge - with the help of the latest
							technologies - at both smaller and larger companies. Based on my
							team's feedback I proved my persistence with creative solutions
							and work best when I see the whole pistures with the exact goals.
						</p>
						<hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
						<h5>Address</h5>
						<p>2234 Maglod</p>
						<h5>Phone</h5>
						<p>+36 (70) 3318 405</p>
						<h5>Email</h5>
						<p>orsolya.suto.so@gmail.com</p>
						<h5>Web</h5>
						<div>
							<a
								style={{ textDecoration: 'none' }}
								href="https://sorsisorsi.herokuapp.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Sorsi Portfolio 1.0 on Heroku
							</a>
						</div>
						<hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
					</Cell>
					<Cell className="resume-right-col" col={8}>
						<h2>Education</h2>
						<Education
							startYear={2018}
							endYear={2018}
							schoolName="Green Fox Academy"
							schoolDescription="Junior Software Developer course at GFA: basic programming concepts, JavaScript, TypeScript"
						/>
						<Education
							startYear={2009}
							endYear={2014}
							schoolName="Eötvös Loránd University"
							schoolDescription="I graduated at Faculty of Arts with Editor specialization. In my dissertation I examine the effect of manipulation in television commercials."
						/>
						<Education
							startYear={2010}
							endYear={2013}
							schoolName="Zsigmond Király College"
							schoolDescription="I got my degree in film studies, my dissertation's title is 'Madness on the big screen'. I was looking for answers about schizophrenia in the light of film genres."
						/>
						<hr style={{ borderTop: '3px solid #e22947' }} />
						<h2>Experience</h2>
						<Experience
							startYear={2021}
							endYear={'Present'}
							jobName="Frontend Developer at BlackRock"
							jobDescription="As part of Design System Team I'm creating reusable web components for iShares (www.ishares.com/us) brand."
							techStack="HTML, SASS, JS/TS, Stencil JS, StoryBook, Chromatic, FreeMarker FTL, JAVA, GIT, AZURE, JIRA"
						/>
						<Experience
							startYear={2020}
							endYear={2021}
							jobName="Frontend Developer at OnRobot Hungary"
							jobDescription="Worked on a greenfield webapplication, that helps monitoring robots and end of arm tools."
							techStack="HTML, SASS, JS/TS, Angular 2+, websockets, Docker, GIT, JIRA"
						/>
						<Experience
							startYear={2018}
							endYear={2020}
							jobName="Software Developer at Ericsson"
							jobDescription="At Ericsson I had the chance to develop tools for internal usage to automate release processes."
							techStack="HTML, CSS, JS/TS, Angular JS, Python, Django REST, GIT, JIRA"
						/>
						<hr style={{ borderTop: '3px solid #e22947' }} />
						<h2>Skills</h2>
						<Skills skill="JavaScript/TypeScript" progress={98} />
						<Skills skill="HTML/CSS" progress={88} />
						<Skills skill="Angular" progress={75} />
						<Skills skill="React" progress={40} />
						<Skills skill="Redux" progress={10} />
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Resume;
