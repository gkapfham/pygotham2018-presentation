/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

{/* Support style modification with emotion */}
import styled from 'react-emotion';

{/* Load in the components provided by spectacle */}
import {
  Anim,
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  ComponentPlayground,
  Deck,
  Fill,
  Fit,
  Heading,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  MarkdownSlides,
  Quote,
  Slide,
  SlideSet,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableItem,
  TableRow,
  Table,
  Text,
  GoToAction
} from 'spectacle';

{/* Load in a modified external plugin */}
import CodeSlide from '../improved_modules/spectacle-code-slide';

{/* Use the preloader for the images */}
import preloader from 'spectacle/lib/utils/preloader';

{/* Import the theme */}
import createTheme from '../default';

{/* Handle non-compatible browsers */}
require('normalize.css');

{/* Minimal horizontal padding between rows */}
var minimalHorizontalPadding = 20;

{/* Standard horizontal padding between rows */}
var standardHorizontalPadding = 40;

{/* Standard all-side margin size */}
var standardMargin = 40;

{/* Font used for all questions in section slides */}
var questionFont = 'Roboto Slab';

{/* FontAwesome: Define the colors for the theme */}
var primary = '#bdbdbd';
var secondary =  '#c62828';
var secondarylight = '#ff6e40';
var tertiary = '#283593';
var lighttext = '#9e9e9e';
var darktext = '#212121';
var lighttext = '#9e9e9e';

{/* Spectacle: Define the colors for the theme */}
const theme = createTheme({
  primary: '#9e9e9e',
  secondary: '#b71c1c',
  secondarylight: '#ff6e40',
  tertiary: '#283593',
  darktext: '#212121',
  lighttext: '#9e9e9e'
});

{/* Create a emotion-styled PlainCite without italics */}
const PlainCite = styled(Cite)`
  font-style: normal;
  margin-left: 30px;
`;

{/* Create a emotion-styled SpacedBlockQuote that breathes */}
const SpacedQuote = styled(Quote)`
  line-height: 1.1;
`;

{/* Create a emotion-styled UpHeading that shifts up */}
const UpHeading = styled(Heading)`
  margin-top: -50px;
`;

{/* Create a emotion-styled BigImage that shifts left */}
const BigImage = styled(Image)`
  max-width: 110%;
  width: 110%;
`;

{/* Create a emotion-styled Fill with padding */}
const PaddedFill = styled(Fill)`
  margin-right: 110px;
  justify-content: space-between;
`;

{/* Create a emotion-styled Fill with padding */}
const LeftShiftPaddedFill = styled(Fill)`
  margin-right: 110px;
  // NOTE: comment out next line to get better printing
  margin-left: -100px;
  justify-content: space-between;
`;

{/* Create a emotion-styled Fill with padding */}
const BigLeftShiftPaddedFill = styled(Fill)`
  margin-right: 110px;
  // NOTE: comment out next line to get better printing
  margin-left: -120px;
  justify-content: space-between;
`;

{/* Create a emotion-styled Fill with padding */}
const BottomPaddedFill = styled(Fill)`
  margin-bottom: 40px;
  justify-content: space-between;
`;

{/* Create a emotion-styled Fit with padding */}
const PaddedFit = styled(Fit)`
  margin-right: 100px;
  justify-content: space-between;
`;

{/* Import all of the libraries from FontAwesomeIcon */}
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

{/* Add all of the libraries to the main library */}
library.add(fab, far, fas)

{/* Declare all of the specific icons used in the slides */}

export const Archive = () => (
  <FontAwesomeIcon icon={['fas', 'cubes']} transform="grow-18" color={darktext}/>
)

export const Arrow = () => (
  <FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} transform="grow-18" color={darktext}/>
)

export const DefectReports = () => (
  <FontAwesomeIcon icon={['fas', 'bug']} transform="grow-20" color={darktext}/>
)

export const Deliverables = () => (
  <FontAwesomeIcon icon={['fas', 'code']} transform="grow-20" color={darktext}/>
)

export const Comments = () => (
  <FontAwesomeIcon icon={['fas', 'comments']} size="2x" transform="down-2, left-5" color={darktext}/>
)

export const CommentsShiftUp = () => (
  <FontAwesomeIcon icon={['fas', 'comments']} transform="grow-8, left-2" color={darktext}/>
)

export const Evaluation = () => (
  <FontAwesomeIcon icon={['fas', 'arrows-alt']} transform="grow-18" color={darktext}/>
)

export const GitHub = () => (
  <FontAwesomeIcon icon={['fab', 'github']} transform="grow-20" color={darktext}/>
)

export const GitHubGiant = () => (
  <FontAwesomeIcon icon={['fab', 'github']} transform="grow-40" color={darktext}/>
)

export const Globe = () => (
  <FontAwesomeIcon icon={['fas', 'globe']} transform="grow-18" color={darktext}/>
)

export const Gradle = () => (
  <FontAwesomeIcon icon={['fas', 'th-large']} transform="grow-20" color={darktext}/>
)

export const Insights = () => (
  <FontAwesomeIcon icon={['fas', 'lightbulb']} transform="grow-20" color={darktext}/>
)

export const Key = () => (
  <FontAwesomeIcon icon={['fas', 'key']} transform="grow-18" color={darktext}/>
)

export const Map = () => (
  <FontAwesomeIcon icon={['fas', 'map']} size="2x" transform="down-3, left-2" color={darktext}/>
)

export const ListIcon = () => (
  <FontAwesomeIcon icon={['fas', 'list']} transform="grow-18" color={darktext}/>
)

export const Prompt = () => (
  <FontAwesomeIcon icon={['fas', 'terminal']} transform="grow-20" color={darktext}/>
)

export const PullRequests = () => (
  <FontAwesomeIcon icon={['fas', 'code-branch']} transform="grow-20" color={darktext}/>
)

export const Python = () => (
  <FontAwesomeIcon icon={['fab', 'python']} transform="grow-20" color={darktext}/>
)

export const PythonGiant = () => (
  <FontAwesomeIcon icon={['fab', 'python']} transform="grow-40" color={darktext}/>
)

export const RepoFull = () => (
  <FontAwesomeIcon icon={['fas', 'square']} transform="grow-20" color={darktext}/>
)

export const RepoMinus = () => (
  <FontAwesomeIcon icon={['fas', 'minus-square']} transform="grow-20" color={darktext}/>
)

export const Script = () => (
  <FontAwesomeIcon icon={['fas', 'cube']} transform="grow-20" color={darktext}/>
)

export const Toggle = () => (
  <FontAwesomeIcon icon={['fas', 'toggle-on']} transform="grow-20" color={darktext}/>
)

export const Travis = () => (
  <FontAwesomeIcon icon={['fas', 'user-secret']} transform="grow-20" color={darktext}/>
)

export const TravisGiant = () => (
  <FontAwesomeIcon icon={['fas', 'user-secret']} transform="grow-30" color={darktext}/>
)

export const Twitter = () => (
  <div>
    <FontAwesomeIcon icon={['fab', 'twitter']} size="3x" transform="left-2" color="#283593"/>
  </div>
)

export const Trophy = () => (
  <FontAwesomeIcon icon={['fas', 'trophy']} transform="grow-18" color={darktext}/>
)

export const Web = () => (
  <div>
    <FontAwesomeIcon icon={['fas', 'globe']} size="3x" transform="left-2" color="#283593"/>
  </div>
)

export default class Presentation extends Component {
  constructor() {
    super(...arguments);

    this.updateSteps = this.updateSteps.bind(this);
  }

  state = {
    steps: 0
  };

  updateSteps(steps) {
    if (this.state.steps !== steps) {
      this.setState({ steps });
    }
  }

  render() {

    {/* Create the Deck of slides with no controls and no progress bars */}
    return (
      <Deck
        contentHeight={700}
        contentWidth={1024}
        transition={['slide']}
        transitionDuration={500}
        theme={theme}
        controls={false}
        progress={'none'}
      >

        {/* Slide { */}
        <Slide transition={['slide', 'spin']} bgColor="primary">

          <Text bold textSize="3em" lineHeight={2.5} textColor="secondary">
            Using Python, Travis CI, and GitHub to Effectively Teach Programming
          </Text>

          <Text bold textSize="2.5em" lineHeight={2.5} textColor="darktext">
           Gregory M. Kapfhammer
          </Text>

          <Text bold textSize="1.5em" textColor="darktext">
            October 5 at PyGotham 2018
          </Text>

        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide margin={-10} transitionDuration={0} transition={['']} bgColor="primary">

          <Layout>
            <BottomPaddedFill>
              <Text bold fit textColor="darktext">
                Hi! My name is
              </Text>
            </BottomPaddedFill>
          </Layout>

          <Layout>
            <Fill>
              <Text bold fit caps textColor="secondary">
                Gregory M. Kapfhammer
              </Text>
            </Fill>
          </Layout>

          <Layout>
            <Text height={minimalHorizontalPadding}>
              &nbsp;
            </Text>
          </Layout>

          <Layout>
            <Fit>
              <Twitter/>
            </Fit>
            <Fit>
              <Text fill bold textSize="2em" textColor="tertiary">
                @GregKapfhammer
              </Text>
            </Fit>
          </Layout>

          <Layout>
            <Text height={minimalHorizontalPadding}>
              &nbsp;
            </Text>
          </Layout>

          <Layout>
            <Fit>
              <Web/>
            </Fit>
            <Fit>
              <Text fill bold textSize="2em" textColor="tertiary">
                www.gregorykapfhammer.com
              </Text>
            </Fit>
          </Layout>

        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionDuration={0} transition={['']} bgColor="primary">
          <Layout>
            <Appear transitionDuration={100}>
              <Fill>
                <Text bold fit textSize="3em" textColor="darktext">
                  <Map/>
                  Roadmap for this Talk
                </Text>
              </Fill>
            </Appear>
          </Layout>
          <Layout>
            <Text height={standardHorizontalPadding*2}>
              &nbsp;
            </Text>
          </Layout>
          <Layout>
            <Appear transitionDuration={100}>
              <Fill>
                <Text bold textSize="2em" textColor="secondary">
                  Introduce strategies and tools for effectively teaching programming
                </Text>
              </Fill>
            </Appear>
          </Layout>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transition={['']} bgColor="primary">
          <Heading fill bold caps size={1} lineHeight={1.1} textColor="tertiary">
            Use industry standard software in all courses
          </Heading>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transition={['']} bgColor="primary">
          <Heading fill bold caps size={1} lineHeight={1.1} textColor="tertiary">
            Suitable for instructors in industry or academia
          </Heading>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transition={['']} bgColor="primary">
          <Heading fit textColor="darktext">
            Exploring Technologies
          </Heading>

          <Layout>
            <Text height={standardHorizontalPadding*2}>
              &nbsp;
            </Text>
          </Layout>

          <Layout>
            <Fill>
              <Heading size={1} textColor="secondary" margin={standardMargin}>
                <GitHub/>
              </Heading>
            </Fill>
            <Fill>
              <Heading size={1} textColor="secondary" margin={standardMargin}>
                <Travis/>
              </Heading>
            </Fill>
            <Fill>
              <Heading size={1} textColor="secondary" margin={standardMargin}>
                <Python/>
              </Heading>
            </Fill>
          </Layout>

          <Layout>
            <Fill>
              <Heading size={4} textColor="secondary" margin={standardMargin}>
                GitHub
              </Heading>
            </Fill>
            <Fill>
              <Heading size={4} textColor="secondary" margin={standardMargin}>
                Travis
              </Heading>
            </Fill>
            <Fill>
              <Heading size={4} textColor="secondary" margin={standardMargin}>
                Python
              </Heading>
            </Fill>
          </Layout>

          <Layout>
            <Text height={standardHorizontalPadding*.25}>
              &nbsp;
            </Text>
          </Layout>

          <Layout>
            <Appear transitionDuration={100}>
              <Fill>
                <Text bold textSize="2.0em" height={standardHorizontalPadding*2} textColor="tertiary">
                  Discuss in greater detail!
                </Text>
              </Fill>
            </Appear>
          </Layout>

        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionDuration={0} transition={['slide']} align="center center" bgColor="primary">

        <Layout>
          <Fill>
            <Heading margin={standardMargin*3} size={1}><GitHubGiant/></Heading>
            <Heading fit size={1} textColor="secondary">GitHub</Heading>
          </Fill>
        </Layout>

        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionDuration={0} transition={['slide']} align="center center" bgColor="primary">

        <Layout>
          <Fill>
            <Heading margin={standardMargin*2} size={1}><TravisGiant/></Heading>
            <Heading fit size={1} textColor="secondary">Travis</Heading>
          </Fill>
        </Layout>

        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionDuration={0} transition={['slide']} align="center center" bgColor="primary">

        <Layout>
          <Fill>
            <Heading margin={standardMargin*3} size={1}><PythonGiant/></Heading>
            <Heading fit size={1} textColor="secondary">Python</Heading>
          </Fill>
        </Layout>

        </Slide>
        {/* Slide } */}

        {/* SECTION: Motivation { */}

        {/* Slide { */}
        <Slide transition={['']} bgColor="primary">
          <Heading fit textColor="darktext">
            Important Goals
          </Heading>

          <Layout>
            <Text height={standardHorizontalPadding*2}>
              &nbsp;
            </Text>
          </Layout>

          <Layout>
            <Fill>
              <Heading size={1} textColor="secondary" margin={standardMargin}>
                <Globe/>
              </Heading>
            </Fill>
            <Fill>
              <Heading size={1} textColor="secondary" margin={standardMargin}>
                <Key/>
              </Heading>
            </Fill>
            <Fill>
              <Heading size={1} textColor="secondary" margin={standardMargin}>
                <Evaluation/>
              </Heading>
            </Fill>
          </Layout>

          <Layout>
            <Fill>
              <Heading size={4} textColor="secondary" margin={standardMargin}>
                Clear Status
              </Heading>
            </Fill>
            <Fill>
              <Heading size={4} textColor="secondary" margin={standardMargin}>
                Key Ideas
              </Heading>
            </Fill>
            <Fill>
              <Heading size={4} textColor="secondary" margin={standardMargin}>
                Fast Grading
              </Heading>
            </Fill>
          </Layout>

        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transition={['']} bgColor="primary">
          <Heading fill bold caps size={1} lineHeight={1.1} textColor="tertiary">
            Help students and teachers effectively collaborate
          </Heading>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transition={['']} bgColor="primary">
          <Heading fit textColor="darktext">
            Deliverables to Check
          </Heading>
          <Appear transitionDuration={100}>
          <List bold textColor={darktext} textAlign="left" textSize="2em" margin={minimalHorizontalPadding} start={1}>
            <ListItem margin={minimalHorizontalPadding}>Source Code</ListItem>
            <ListItem margin={minimalHorizontalPadding}>Technical Writing</ListItem>
            <ListItem margin={minimalHorizontalPadding}>Commit Counts</ListItem>
            <ListItem margin={minimalHorizontalPadding}>Commit Messages</ListItem>
            <ListItem margin={minimalHorizontalPadding}>Program Output</ListItem>
            <ListItem margin={minimalHorizontalPadding}>Data Files</ListItem>
          </List>
          </Appear>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transition={['']} bgColor="primary">
          <Heading fill bold caps size={1} lineHeight={1.1} textColor="tertiary">
            Leverage existing tools whenever possible
          </Heading>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transition={['']} bgColor="primary">
          <Heading fit textColor="darktext">
            Tools to Support Checks
          </Heading>
          <Appear transitionDuration={100}>
          <List bold textColor={darktext} textAlign="left" textSize="2em" margin={minimalHorizontalPadding} start={1}>
            <ListItem margin={minimalHorizontalPadding}>Source code linting</ListItem>
            <ListItem margin={minimalHorizontalPadding}>Markdown linting</ListItem>
            <ListItem margin={minimalHorizontalPadding}>Prose checking</ListItem>
            <ListItem margin={minimalHorizontalPadding}>JUnit test suite</ListItem>
            <ListItem margin={minimalHorizontalPadding}>Pytest test suite</ListItem>
            <ListItem margin={minimalHorizontalPadding}>Automated build tools</ListItem>
          </List>
          </Appear>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transition={['']} bgColor="primary">
          <Heading fill bold caps size={1} lineHeight={1.1} textColor="tertiary">
            Develop new solutions in Python when necessary
          </Heading>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transition={['']} bgColor="primary">
          <Heading fit textColor="darktext">
            Benefits of Python
          </Heading>

          <Layout>
            <Text height={standardHorizontalPadding*2}>
              &nbsp;
            </Text>
          </Layout>

          <Layout>
            <Fill>
              <Heading size={1} textColor="secondary" margin={standardMargin}>
                <Archive/>
              </Heading>
            </Fill>
            <Fill>
              <Heading size={1} textColor="secondary" margin={standardMargin}>
                <Trophy/>
              </Heading>
            </Fill>
            <Fill>
              <Heading size={1} textColor="secondary" margin={standardMargin}>
                <ListIcon/>
              </Heading>
            </Fill>
          </Layout>

          <Layout>
            <Fill>
              <Heading size={4} textColor="secondary" margin={standardMargin}>
                Tools
              </Heading>
            </Fill>
            <Fill>
              <Heading size={4} textColor="secondary" margin={standardMargin}>
                Packages
              </Heading>
            </Fill>
            <Fill>
              <Heading size={4} textColor="secondary" margin={standardMargin}>
                Testing
              </Heading>
            </Fill>
          </Layout>

        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transition={['']} bgColor="primary">
          <Heading fit textColor="darktext">
            Tools for Development
          </Heading>
          <Appear transitionDuration={100}>
          <List bold textColor={darktext} textAlign="left" textSize="2em" margin={minimalHorizontalPadding} start={1}>
            <ListItem margin={minimalHorizontalPadding}>Black</ListItem>
            <ListItem margin={minimalHorizontalPadding}>Flake8</ListItem>
            <ListItem margin={minimalHorizontalPadding}>Pipenv</ListItem>
            <ListItem margin={minimalHorizontalPadding}>Pylint</ListItem>
            <ListItem margin={minimalHorizontalPadding}>Pytest</ListItem>
            <ListItem margin={minimalHorizontalPadding}>Pytest Plugins (e.g., Codecov)</ListItem>
          </List>
          </Appear>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transition={['']} bgColor="primary">
          <Heading fill bold caps size={1} lineHeight={1.1} textColor="tertiary">
            Design principles that guided development
          </Heading>

          <Layout>
            <Text height={standardHorizontalPadding*.25}>
            &nbsp;
            </Text>
          </Layout>

          <Text bold textSize="1.5em" textColor="darktext">
            Inspired by John Ousterhout's
          </Text>

          <Text bold textSize="1.5em" textColor="darktext">
            <em>A Philosophy of Software Design</em>
          </Text>

        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionDuration={0} transition={['']} bgColor="primary">
          <Layout>
            <Appear transitionDuration={100}>
              <Fill>
                <Text bold fit textSize="3em" textColor="darktext">
                  <Map/>
                  Design Principles
                </Text>
              </Fill>
            </Appear>
          </Layout>
          <Layout>
            <Text height={standardHorizontalPadding*2}>
              &nbsp;
            </Text>
          </Layout>

          <Layout>
            <Appear transitionDuration={100}>
              <Fill>
                <Text bold textSize="1.15em" height={standardHorizontalPadding*2} textColor="secondary">
                    ‣ Working code is not sufficient: aim for simplicity
                </Text>
              </Fill>
            </Appear>
          </Layout>

          <Layout>
            <Appear transitionDuration={100}>
              <Fill>
                <Text bold textSize="1.15em" height={standardHorizontalPadding*2} textColor="secondary">
                  ‣ Code that hasn't been executed does not work
                </Text>
              </Fill>
            </Appear>
          </Layout>

          <Layout>
            <Appear transitionDuration={100}>
              <Fill>
                <Text bold textSize="1.15em" height={standardHorizontalPadding*2} textColor="secondary">
                  ‣ Simple interfaces over simple implementations
                </Text>
              </Fill>
            </Appear>
          </Layout>

          <Layout>
            <Appear transitionDuration={100}>
              <Fill>
                <Text bold textSize="1.15em" height={standardHorizontalPadding*2} textColor="secondary">
                  ‣ Great documentation encourages contributions
                </Text>
              </Fill>
            </Appear>
          </Layout>

        </Slide>
        {/* Slide } */}

        {/* SECTION: Motivation } */}

        {/* SECTION: Configure { */}

        {/* Slide { */}
        <Slide bgColor="primary">
          <Heading fit textColor="darktext">
            Flexible Checking
          </Heading>
          <Layout>
            <Text height={standardHorizontalPadding*1}>
              &nbsp;
            </Text>
          </Layout>
          <Layout>
            <Fill>
              <Heading size={1} textColor="secondary" margin={standardMargin}>
                <Prompt/>
              </Heading>
            </Fill>
            <Fill>
              <Heading size={1} textColor="secondary" margin={standardMargin}>
                <Travis/>
              </Heading>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Heading size={4} textColor="secondary" margin={standardMargin}>
                Local
              </Heading>
            </Fill>
            <Fill>
              <Heading size={4} textColor="secondary" margin={standardMargin}>
                Travis
              </Heading>
            </Fill>
          </Layout>

          <Layout>
            <Appear transitionDuration={100}>
              <Fill>
                <Text bold textSize="1.35em" height={standardHorizontalPadding*2} textColor="tertiary">
                  See GatorGrader and GatorGradle in the GatorEducator organization on GitHub
                </Text>
              </Fill>
            </Appear>
          </Layout>

        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transition={['']} bgColor="primary">
          <Heading fill bold caps size={1} lineHeight={1.1} textColor="tertiary">
            Create two repositories for each assignment
          </Heading>
        </Slide>
        {/* Slide { */}

        {/* Slide { */}
        <Slide bgColor="primary">
          <Heading fit textColor="darktext">
            Using Travis CI
          </Heading>

          <Layout>
            <Text height={standardHorizontalPadding*2}>
              &nbsp;
            </Text>
          </Layout>

          <Layout>
            <Fill>
              <Heading size={1} textColor="secondary" margin={standardMargin}>
                <RepoFull/>
              </Heading>
            </Fill>
            <Fill>
              <Heading size={1} textColor="secondary" margin={standardMargin}>
                <RepoMinus/>
              </Heading>
            </Fill>
            <Fill>
              <Heading size={1} textColor="secondary" margin={standardMargin}>
                <Toggle/>
              </Heading>
            </Fill>
          </Layout>

          <Layout>
            <Fill>
              <Heading size={4} textColor="secondary" margin={standardMargin}>
                Solution
              </Heading>
            </Fill>
            <Fill>
              <Heading size={4} textColor="secondary" margin={standardMargin}>
                Starter
              </Heading>
            </Fill>
            <Fill>
              <Heading size={4} textColor="secondary" margin={standardMargin}>
                Check
              </Heading>
            </Fill>
          </Layout>

        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide bgColor="primary">
          <Heading fill bold caps size={1} lineHeight={1.1} textColor="tertiary">
            The starter repository should <em>not</em> pass the tests
          </Heading>
        </Slide>
        {/* Slide } */}

        {/* SECTION: Configure } */}

        {/* SECTION: Running the Tools { */}

        {/* Slide { */}
        <Slide bgColor="primary">
          <Heading fit textColor="darktext">
            Efficient Project Grading
          </Heading>

          <Layout>
            <Text height={standardHorizontalPadding*2}>
              &nbsp;
            </Text>
          </Layout>

          <Layout>
            <Fill>
              <Heading size={1} textColor="secondary" margin={standardMargin}>
                <Script/>
              </Heading>
            </Fill>
            <Fill>
              <Heading size={1} textColor="secondary" margin={standardMargin}>
                <Arrow/>
              </Heading>
            </Fill>
            <Fill>
              <Heading size={1} textColor="secondary" margin={standardMargin}>
                <Gradle/>
              </Heading>
            </Fill>
          </Layout>

          <Layout>
            <Fill>
              <Heading size={4} textColor="secondary" margin={standardMargin}>
                Python
              </Heading>
            </Fill>
            <Fill>
              <Heading size={1} textColor="secondary" margin={standardMargin}>
                &nbsp;
              </Heading>
            </Fill>
            <Fill>
              <Heading size={4} textColor="secondary" margin={standardMargin}>
                Gradle
              </Heading>
            </Fill>
          </Layout>

          <Appear>
          <Text bold textSize="1.2em" margin={-30} height={standardHorizontalPadding*4} textColor="tertiary">
            Supporting different programming languages, the
            Gradle plugin runs GatorGrader checks in parallel
          </Text>
          </Appear>

        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <CodeSlide
          lang="js"
          code={require('raw-loader!../assets/code/travis.yml')}
          ranges={[
            { loc: [0, 0], title: 'Let\'s Configure Travis CI!',
              note: 'Travis CI runs private builds for every student' },
            { loc: [0, 5], title: 'Use Java and Python',
              note: 'Java is the main language for this introductory course' },
            { loc: [6, 11], title: 'Configure Pipenv',
              note: 'Ensure that Pipenv works well with Travis' },
            { loc: [13, 18], title: 'Install Supporting Tools',
              note: 'Install and configure Gradle and other tools like Pipenv' },
            { loc: [48, 52], title: 'Check Documentation',
              note: 'Ensure that the provided documentation is still valid' },
            { loc: [52, 58], title: 'Run Gradle Checks',
              note: 'Check, build, and run the student\'s source code' },
            { loc: [58, 60], title: 'Perform GatorGrader\'s Checks',
              note: 'Install and use GatorGrader to perform all of the checks' },
          ]}/>
        {/* Slide } */}

        {/* Slide { */}
        <CodeSlide
          lang="js"
          code={require('raw-loader!../assets/code/gatorgrader.sh')}
          ranges={[
            { loc: [0, 0], title: 'Let\'s Configure GatorGrader!',
              note: 'Configure GatorGrader for use through Gradle' },
            { loc: [0, 5], title: 'Configure an Assignment',
              note: 'The build should fail if any of the checks do not pass' },
            { loc: [8, 14], title: 'Specify Source Code Checks',
              note: 'Count different types of comments and inspect the output' },
            { loc: [17, 22], title: 'Check Technical Writing',
              note: 'Run linters and check the length of written paragraphs' },
            { loc: [22, 24], title: 'Check GitHub Repository',
              note: 'Ensure that the students commit a sufficient number of times' },
            { loc: [26, 29], title: 'Check Command Output',
              note: 'Ensure that the program runs and produces correct output' },
          ]}/>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transition={['']} bgColor="primary">

          <Heading fit textColor="darktext">
            GatorGrader's Output
          </Heading>

          <Layout>
            <Text height={standardHorizontalPadding*.5}>
              &nbsp;
            </Text>
          </Layout>

          <Text bold textAlign="left" textSize="1.25em" margin={-1} lineHeight={1.0} textColor="darktext">
            <pre>
            ✘  Repository has at least 14 commit(s) {'\n'}➔ Found 9 commit(s) in the Git repository
            </pre>
          </Text>

          <Text bold textAlign="left" textSize="1.25em" lineHeight={2.0} textColor="darktext">
            <pre>
            ✘  The writing has at least 100 word(s){'\n'}➔ Found 12 word(s) in a paragraph
            </pre>
          </Text>

          <Text bold textAlign="left" textSize="1.25em" lineHeight={2.0} textColor="darktext">
            <pre>
            ✘  The output has one of the '28.75'{'\n'}➔ Found 0 fragment(s) in the output
            </pre>
          </Text>

          <Text bold textAlign="left" textSize="1.15em" lineHeight={2.5} textColor="tertiary">
            <pre>
            Passed 6/13 (46%) of checks for f2018-lab3
            </pre>
          </Text>

        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide bgColor="primary">
          <Heading fit textColor="darktext">
            Courses and Topics
          </Heading>
          <Layout>
            <Text height={standardHorizontalPadding*.5}>
              &nbsp;
            </Text>
          </Layout>
          <Appear transitionDuration={100}>
          <List bold textColor={darktext} textAlign="left" textSize="2em" margin={minimalHorizontalPadding} start={1}>
            <ListItem margin={minimalHorizontalPadding}>Computational Expression</ListItem>
            <ListItem margin={minimalHorizontalPadding}>Data Abstraction</ListItem>
            <ListItem margin={minimalHorizontalPadding}>Software Engineering</ListItem>
            <ListItem margin={minimalHorizontalPadding}>Web Development</ListItem>
            <ListItem margin={minimalHorizontalPadding}>Artificial Intelligence</ListItem>
          </List>
          </Appear>
          <Layout>
            <Text height={standardHorizontalPadding*.1}>
              &nbsp;
            </Text>
          </Layout>
          <Appear>
          <Heading fit textColor="secondary">
            Different topics, goals, languages, and levels
          </Heading>
          </Appear>
          <Layout>
            <Text height={standardHorizontalPadding*.5}>
              &nbsp;
            </Text>
          </Layout>
          <Appear>
          <Heading fit textColor="secondary">
            Used during laboratory, practical, and class
          </Heading>
          </Appear>

        </Slide>
        {/* Slide } */}

        {/* SECTION: Check } */}

        {/* SECTION: Feedback { */}

        {/* Slide { */}
        <Slide transition={['slide']} bgColor="primary">
          <BlockQuote>
            <SpacedQuote textSize="2em" textColor="darktext">

              GatorGrader is like having a constant coach! I liked receiving
              feedback on the quality of my source code and writing before
              turning in the final version of my lab.

            </SpacedQuote>
            <PlainCite bold caps textSize="2em">
              Anna Yeager
            </PlainCite>
          </BlockQuote>

        </Slide>
        {/* Slide } */}

        {/* SECTION: Feedback } */}

        {/* SECTION: Conclusion { */}

        {/* Slide { */}
        <Slide transitionDuration={0} transition={['']} bgColor="primary">
          <Heading fit textColor="darktext">
            Ideas for Experiments
          </Heading>

          <Layout>
            <Text height={standardHorizontalPadding*2}>
              &nbsp;
            </Text>
          </Layout>

          <Layout>
            <Fill>
              <Heading size={1} textColor="secondary" margin={standardMargin}>
                <Deliverables/>
              </Heading>
            </Fill>
            <Fill>
              <Heading size={1} textColor="secondary" margin={standardMargin}>
                <Insights/>
              </Heading>
            </Fill>
          </Layout>

          <Layout>
            <Fill>
              <Heading size={4} textColor="secondary" margin={standardMargin}>
                Deliverables
              </Heading>
            </Fill>
            <Fill>
              <Heading size={4} textColor="secondary" margin={standardMargin}>
                Insights
              </Heading>
            </Fill>
          </Layout>

        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionDuration={0} transition={['']} bgColor="primary">
          <Heading fill bold caps size={1} lineHeight={1.1} textColor="tertiary">
            What code and concepts cause student frustration?
          </Heading>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionDuration={0} transition={['']} bgColor="primary">
          <Heading fit textColor="darktext">
            Let's Collaborate
          </Heading>

          <Layout>
            <Text height={standardHorizontalPadding*2}>
              &nbsp;
            </Text>
          </Layout>

          <Layout>
            <Fill>
              <Heading size={1} textColor="secondary" margin={standardMargin}>
                <PullRequests/>
              </Heading>
            </Fill>
            <Fill>
              <Heading size={1} textColor="secondary" margin={standardMargin}>
                <DefectReports/>
              </Heading>
            </Fill>
          </Layout>

          <Layout>
            <Fill>
              <Heading size={4} textColor="secondary" margin={standardMargin}>
                New Checks
              </Heading>
            </Fill>
            <Fill>
              <Heading size={4} textColor="secondary" margin={standardMargin}>
                Bug Reports
              </Heading>
            </Fill>
          </Layout>

          <Layout>
            <Appear transitionDuration={100}>
              <Fill>
                <Text bold textSize="1.25em" height={standardHorizontalPadding*2} textColor="tertiary">
                  See GatorGrader and GatorGradle in GatorEducator on GitHub
                </Text>
              </Fill>
            </Appear>
          </Layout>

        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide bgColor="primary">
          <Heading fit textColor="darktext">
            Main Contributions
          </Heading>

          <Layout>
            <Text height={standardHorizontalPadding}>
              &nbsp;
            </Text>
          </Layout>

          <Layout>
            <Fill>
              <Heading size={1} textColor="secondary" margin={standardMargin}>
                <Globe/>
              </Heading>
            </Fill>
            <Fill>
              <Heading size={1} textColor="secondary" margin={standardMargin}>
                <Key/>
              </Heading>
            </Fill>
            <Fill>
              <Heading size={1} textColor="secondary" margin={standardMargin}>
                <Evaluation/>
              </Heading>
            </Fill>
          </Layout>

          <Layout>
            <Fill>
              <Heading size={4} textColor="secondary" margin={standardMargin}>
                Clear Status
              </Heading>
            </Fill>
            <Fill>
              <Heading size={4} textColor="secondary" margin={standardMargin}>
                Key Ideas
              </Heading>
            </Fill>
            <Fill>
              <Heading size={4} textColor="secondary" margin={standardMargin}>
                Fast Grading
              </Heading>
            </Fill>
          </Layout>

          <Heading size={4} textColor="tertiary">
            GatorEducator/GatorGrader
          </Heading>

        </Slide>
        {/* Slide } */}

        {/* SECTION: Conclusion } */}

        {/* Slide { */}
        <Slide bgColor="primary">
        </Slide>
        {/* Slide } */}

      </Deck>
    );
  }
}
