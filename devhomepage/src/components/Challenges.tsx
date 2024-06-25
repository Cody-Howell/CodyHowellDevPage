import React from 'react';
import { ChallengeType } from './ChallengeType';
import { timeframe1Array } from './Data.ts'

export class Challenges extends React.Component {
  render() {
    let renderArray: React.ReactNode[] = [];
    renderArray.push(<TimeFrame title="Summer 2024" challenges={timeframe1Array} key={"Summer2024"}/>);

    return (
      <div id='challengePage'>
        <h1>Challenges</h1>
        <p>This page will hold the links to GitHub repositories for each of the projects we do. Currently, there is only one group,
          the Summer 2024 challenge group, consisting of Taft, Cody, Jesse, Justin, and Jim. Challenges will be updated as time goes on, 
          and you can email me your progress update at updates@codyhowell.dev to adjust the challenge. </p>
          {renderArray}
      </div>
    );
  }
}

class TimeFrame extends React.Component<{challenges: Array<ChallengeType>, title: String}, {open: Boolean}> {
  constructor(props){
    super(props);
    this.state = {
      open: false
    }
  }

  handleOpen = () => {
    this.setState({open: !this.state.open})
  }

  render() {
    let challengeObjects: React.ReactNode[] = [];
    for (let i = this.props.challenges.length - 1; i >= 0; i--){
      challengeObjects.push(<Challenge challenge={this.props.challenges[i]} key={String(this.props.challenges[i].title)}/>);
    }
    return(
      <div className='timeFrameElement'>
        <h1 onClick={this.handleOpen}>{this.props.title} {this.state.open ? (<span>&#x25B2;</span>) : (<span>&#x25BC;</span>)}</h1>
        {this.state.open && (challengeObjects)}
      </div>
    )
  }
}

class Challenge extends React.Component <{challenge: ChallengeType}, {}> {
  render() {
    let challenge = this.props.challenge;
    return(
      <div className='challengeElement' >
        <h2>{challenge.title}: Task #{String(challenge.number)}</h2>
        <p>{challenge.description}</p>
        <p>For now: Create a GitHub repo with your account (you can use the format "SC2024-<i>challenge</i>") to host your code.</p>
        <p>We're doing 4 stars for each challenge, as listed below. Email me when you complete a new star for your progress to be shown here. </p>
        <ol>
          <li>Hello World program - program compiles and runs, maybe has a button.</li>
          <li>Minimum Viable Product - program can be shown for testing. </li>
          <li>Release version - show a stranger for feedback</li>
          <li>Polish version - has everything you want from it</li>
        </ol>
        <h3>Star Due Dates </h3>
        <p>Star 1: {challenge.starDates[0]}</p>
        <p>Star 2: {challenge.starDates[1]}</p>
        <p>Star 3: {challenge.starDates[2]}</p>
        <p>Star 4: {challenge.starDates[3]}</p>

        <p>The next challenge will be posted on: {challenge.dueDate}</p>

        <h3>GitHub Links</h3>
        <p>As people get their pages up, they will be linked to here: </p>
        {challenge.taftLink !== "" && (<><a href={challenge.taftLink}>Taft's Link {drawStars(challenge.taftStars)}</a> <br/></>)}
        {challenge.codyLink !== "" && (<><a href={challenge.codyLink}>Cody's Link {drawStars(challenge.codyStars)}</a> <br/></>)}
        {challenge.jesseLink !== "" && (<><a href={challenge.jesseLink}>Jesse's Link {drawStars(challenge.jesseStars)}</a> <br/></>)}
        {challenge.justinLink !== "" && (<><a href={challenge.justinLink}>Justin's Link {drawStars(challenge.justinStars)}</a> <br/></>)}
        {challenge.jimLink !== "" && (<a href={challenge.jimLink}>Jim's Link {drawStars(challenge.jimStars)}</a>)}
      </div>
    )
  }
}

function drawStars(num: number): React.ReactNode[]{
  let returnStars: React.ReactNode[] = [];
  for (let i = 0; i < 4; i++) {
    if (num > i){
      returnStars.push(<span>&#9733;</span>);
    } else {
      returnStars.push(<span>&#9734;</span>);
    }
  }
  return returnStars;
}