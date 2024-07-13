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
        {/* <Project project={{
          title: "Demo Webpage",
          link: "https://demo.codyhowell.dev",
          githubLink: "https://github.com/Cody-Howell/DemoProject",
          startDate: new Date('2024-06-11'),
          description: "This website displays the current version of my professional prototype website. Currently, it is a warehouse database using React and Firebase. Please reach out if you're interested in your business using it. ",
          nestedProjects: []
        }} /> */}
        <Project project={{
          title: "Concert Database",
          link: "https://concerts.codydhowell.com",
          githubLink: "https://github.com/Cody-Howell/SnowConcerts",
          startDate: new Date('2023-09-01'),
          description: "A website to host concerts (and a variety of other features) for Snow College. I use React, host files with Google Drive (for now), and have a Firebase system for database features and authentication. In the future, I hope to use a few more JS libraries and have some more complicated projects within this project for the college. I'll be listing those below. ",
          nestedProjects: [
            // { title: "Score Library", 
            //   link: "https://concerts.codydhowell.com/work/scorelibrary", 
            //   githubLink: "", 
            //   startDate: new Date('2024-01-10'), 
            //   description: "DESCRIPTION HERE", 
            //   nestedProjects: [] }
          ]
        }} />

        {/* This is the "Fun Projects" line so that it's easier to find later on, say when scrolling by */}
        <h1>Fun Projects</h1>
        <Project project={{
          title: "Data Structures, Algorithms, and Simulations",
          link: "https://data.codyhowell.dev",
          githubLink: "https://github.com/Cody-Howell/dsaVis",
          startDate: new Date('2024-06-18'),
          description: "This website comes from a few classes I took last year. It's intended to be a visualizer for the various data structures we were looking at (as some were quite complicated), as the visualizer we had at the time wasn't great. This is a summer project in the hopes it's more useful to students in those classes than our current version was. ",
          nestedProjects: [
            {
              title: "MENACE!",
              link: "https://data.codyhowell.dev/simulation/menace",
              githubLink: "",
              startDate: new Date('2024-06-19'),
              description: "A simulator of matchboxes that learn how to play Tic-Tac-Toe. ",
              nestedProjects: []
            },
            {
              title: "100 Prisoner Puzzle",
              link: "https://data.codyhowell.dev/simulation/100prisonerpuzzle",
              githubLink: "",
              startDate: new Date('2024-06-18'),
              description: "A math puzzle to find all the keys (bills) using half the number of guesses than there are boxes. ",
              nestedProjects: []
            }
          ]
        }} />
        <Project project={{
          title: "Summer 2024 Challenges",
          link: "",
          githubLink: "",
          startDate: new Date('2024-06-12'),
          description: "Coding challenges over the summer.",
          nestedProjects: [{
            title: "Summer 2024, Challenge 1",
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
              description: "My second (and final) game in this group. As someone who likes Tetris and enjoys the modern movement style, I got.. not very close in this version. The movement feels a little bit janky, but most things follow modern guideline Tetris (minus T-spins and some rotation specifics). ",
              nestedProjects: []
            }]
          }, {
            title: "Summer 2024, Challenge 2",
            link: "",
            githubLink: "https://github.com/Cody-Howell/SC2024-ProductivityApp",
            startDate: new Date('2024-07-02'),
            description: "Productivity app challenge for the summer. I decided to make a memorization app, trying to make a Progressive Web App.",
            nestedProjects: []
          }, {
            title: "Summer 2024, Challenge 3",
            link: "https://codydhowell.com/challenges/summer2024/chess/",
            githubLink: "https://github.com/Cody-Howell/SC2024-BoardGame",
            startDate: new Date('2024-07-05'),
            description: "I made Chess! mostly. It doesn't have En Passsant or castling. I attempted to code a chess bot with TensorFlow instead, and still have some bugs to fix.",
            nestedProjects: []
          }
          ]
        }} />
      </div>
    );
  }
}

class Project extends React.Component<{ project: ProjectType }, { open: boolean }> {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  }

  render() {
    let nestedProjects: React.ReactNode[] = [];
    for (let i = 0; i < this.props.project.nestedProjects.length; i++) {
      nestedProjects.push(<Project project={this.props.project.nestedProjects[i]} />);
    }
    return (
      <div id='project'>
        <h2>{this.props.project.title}</h2>
        {this.props.project.link !== "" && (<a href={this.props.project.link} target='_blank' rel='noreferrer'>Go To Website</a>)}
        {this.props.project.githubLink !== "" && (<a href={this.props.project.githubLink} target='_blank' rel='noreferrer'>Go To GitHub Repo</a>)}
        <p>Start date: {this.props.project.startDate.toLocaleDateString()}</p>
        {this.props.project.description !== "" && (<p>{this.props.project.description}</p>)}
        {nestedProjects.length > 0 && (<h3 onClick={this.toggleOpen} style={{ cursor: "pointer" }}>Toggle inner projects</h3>)}
        {this.state.open && (nestedProjects)}
      </div>
    )
  }
}