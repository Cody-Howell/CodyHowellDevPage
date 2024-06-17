import React from 'react';

type ProjectType = {
  title: string, 
  link: string, 
  githubLink: string,
  description: string, 
  startDate: Date,
  nestedProjects: Array<ProjectType>
}

export class Projects extends React.Component {
  render() {
    return (
      <div id='projectPage'>
        <h1>Projects</h1>
        <p>This page will host any project that has a website URL, or occasionally I may link 
          to a GitHub repository that I worked on. Some are serious/professional pages, others are very short challenges
          such as the games, where we had a week or two to code something. 
        </p>
        <h1>Serious Projects</h1>
        <Project project={{title: "Concert Database", 
        link: "https://concerts.codydhowell.com",
        githubLink: "https://github.com/Cody-Howell/SnowConcerts",
        startDate: new Date('2023-09-01'),
        description: "A website to host concerts (and a variety of other features) for Snow College. I use React, host files with Google Drive (for now), and have a Firebase system for database features and authentication. In the future, I hope to use a few more JS libraries and have some more complicated projects within this project for the college. I'll be listing those below. ",
        nestedProjects: [{title: "Score Library", link: "https://concerts.codydhowell.com/work/scorelibrary", githubLink: "", startDate: new Date('2024-01-10'), description: "Currently not working as intended; but it's a page that allows you to search through our indexed scores. Start by selecting a part in the top select form; only Jazz and Orchestral scores have been indexed. The form allows you to search the collection by a JS contains() method, so it filters by that subsection for each field.  ", nestedProjects: []}]
        }} />
      
        <h1>Fun Projects</h1>
        <Project project={{title: "Summer 2024, Challenge 1", 
        link: "",
        githubLink: "https://github.com/Cody-Howell/SC2024-RetroGame", 
        startDate: new Date('2024-06-12'),
        description: "",
        nestedProjects: [{
          title: "Asteroids",
          link: "https://codydhowell.com/challenges/summer2024/asteroids/",
          githubLink: "https://github.com/Cody-Howell/SC2024-RetroGame/tree/main/asteroids",
          startDate: new Date('2024-06-12'), 
          description: "Simple challenge to re-create the retro Asteroids game. It's written in React and Typescript, which TS is a bit of a new language for me.",
          nestedProjects: []
        }, 
        {
          title: "Tetris",
          link: "https://codydhowell.com/challenges/summer2024/tetris/",
          githubLink: "https://github.com/Cody-Howell/SC2024-RetroGame/tree/main/tetris",
          startDate: new Date('2024-06-14'), 
          description: "My second (and final) game in this group. As someone who likes Tetris and enjoys the modern movement style, I got.. close in this version. The movement feels a little bit janky, but most things follow modern guideline Tetris (minus T-spins and some rotation specifics). ",
          nestedProjects: []
        }]
        }} />
      </div>
    );
  }
}

class Project extends React.Component <{project: ProjectType}, {}> {
  render() {
    let nestedProjects: React.ReactNode[] = [];
    for (let i = 0; i < this.props.project.nestedProjects.length; i++){
      nestedProjects.push(<Project project={this.props.project.nestedProjects[i]}/>);
    }
    return(
      <div id='project'>
        <h2>{this.props.project.title}</h2>
        {this.props.project.link !== "" && (<a href={this.props.project.link} target='_blank' rel='noreferrer'>Go To Website</a>)}
        {this.props.project.githubLink !== "" && (<a href={this.props.project.githubLink} target='_blank' rel='noreferrer'>Go To GitHub Repo</a>)}
        <p>Start date: {this.props.project.startDate.toLocaleDateString()}</p>
        {this.props.project.description !== "" && (<p>{this.props.project.description}</p>)}
        {nestedProjects}
      </div>
    )
  }
}