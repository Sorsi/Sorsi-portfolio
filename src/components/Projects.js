import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  CardMenu,
  IconButton,
} from "react-mdl";
import quizUp from "../images/quizUp.png";
import weatherApp from "../images/weatherApp.png";
import roboFriends from "../images/roboFriends.png";
import movieDatabase from "../images/movieDatabase.png";
import coffeeStore from "../images/coffeeStore.png";
import mathSite from "../images/mathSite.png";
import pure from "../images/pure.png";
import memoriesApp from "../images/memoriesApp.png"

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };
    this.toggleCategories = this.toggleCategories.bind(this);
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#000",
                height: "176px",
                backgroundImage: `url(${quizUp})`,
              }}
            ></CardTitle>
            <CardText>CoffeeQuiz</CardText>
            <CardActions border>
              <a
                className="button-ancestor"
                href="https://github.com/Sorsi/CoffeeQuiz"
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub
              </a>
              <a
                className="button-ancestor"
                href={quizUp}
                rel="noopener noreferrer"
                target="_blank"
              >
                Show a pic
              </a>
              <a
                className="button-ancestor"
                href="http://sorso.host20.uk/CoffeeQuiz"
                rel="noopener noreferrer"
                target="_blank"
              >
                App
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#000",
                height: "176px",
                background:
                  "url(https://frontendlabepam.github.io/FL5/angular/assets/img/angular-js-logo.png) center / cover",
              }}
            ></CardTitle>
            <CardText>Filming Locations</CardText>
            <CardActions border>
              <a
                className="button-ancestor"
                href="https://github.com/Sorsi/Movies"
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub
              </a>
              <a className="button-ancestor">Show a pic</a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#000",
                height: "176px",
                background:
                  "url(https://frontendlabepam.github.io/FL5/angular/assets/img/angular-js-logo.png) center / cover",
              }}
            ></CardTitle>
            <CardText>### Angular Project #3 ###</CardText>
            <CardActions border>
              <a className="button-ancestor">GitHub</a>
              <a className="button-ancestor">Show a pic</a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#000",
                height: "176px",
                backgroundImage: `url(${weatherApp})`,
              }}
            ></CardTitle>
            <CardText>Weather App</CardText>
            <CardActions border>
              <a
                className="button-ancestor"
                href="https://github.com/Sorsi/PlanetApps/tree/master/weather-app"
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub
              </a>
              <a
                className="button-ancestor"
                href={weatherApp}
                rel="noopener noreferrer"
                target="_blank"
              >
                Show a pic
              </a>
              <a
                className="button-ancestor"
                href="http://sorso.host20.uk/WeatherApp/"
                rel="noopener noreferrer"
                target="_blank"
              >
                App
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#000",
                height: "176px",
                background: `url(${roboFriends})  center / cover`,
              }}
            ></CardTitle>
            <CardText>RoboFriends</CardText>
            <CardActions border>
              <a
                className="button-ancestor"
                href="https://github.com/Sorsi/PlanetApps/tree/master/robofriends"
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub
              </a>
              <a
                className="button-ancestor"
                href={roboFriends}
                rel="noopener noreferrer"
                target="_blank"
              >
                Show a pic
              </a>
              <a
                className="button-ancestor"
                href="http://sorso.host20.uk/RoboFriends/"
                rel="noopener noreferrer"
                target="_blank"
              >
                App
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#000",
                height: "176px",
                backgroundImage: `url(${movieDatabase})`,
              }}
            ></CardTitle>
            <CardText>Movie Database</CardText>
            <CardActions border>
            <a
                className="button-ancestor"
                href="https://github.com/Sorsi/PlanetApps/tree/master/movie-database"
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub
              </a>
              <a
                className="button-ancestor"
                href={movieDatabase}
                rel="noopener noreferrer"
                target="_blank"
              >
                Show a pic
              </a>
              <a
                className="button-ancestor"
                href="http://sorso.host20.uk/MovieDatabase/"
                rel="noopener noreferrer"
                target="_blank"
              >
                App
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#000",
                height: "176px",
                backgroundImage: `url(${memoriesApp})`,
              }}
            ></CardTitle>
            <CardText>Memories App</CardText>
            <CardActions border>
              <a
                className="button-ancestor"
                href="https://github.com/Sorsi/Memories"
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub
              </a>
              <a
                className="button-ancestor"
                href={memoriesApp}
                rel="noopener noreferrer"
                target="_blank"
              >
                Show a pic
              </a>
              <a
                className="button-ancestor"
                href="https://xenodochial-euler-0680bb.netlify.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                App
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#000",
                height: "176px",
                backgroundImage: `url(${coffeeStore})`,
              }}
            ></CardTitle>
            <CardText>Coffee Store</CardText>
            <CardActions border>
              <a
                className="button-ancestor"
                href="https://github.com/Sorsi/Sorsi-s-Coffe-Store"
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub
              </a>
              <a
                className="button-ancestor"
                href={coffeeStore}
                rel="noopener noreferrer"
                target="_blank"
              >
                Show a pic
              </a>
              <a
                className="button-ancestor"
                href="http://sorso.host20.uk/CoffeeStore/index.html"
                rel="noopener noreferrer"
                target="_blank"
              >
                App
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#000",
                height: "176px",
                background: `url(${mathSite})  center / cover`,
              }}
            ></CardTitle>
            <CardText>Math Site</CardText>
            <CardActions border>
              <a
                className="button-ancestor"
                href="https://github.com/Sorsi/Math-Site"
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub
              </a>
              <a
                className="button-ancestor"
                href={mathSite}
                rel="noopener noreferrer"
                target="_blank"
              >
                Show a pic
              </a>
              <a
                className="button-ancestor"
                href="http://sorso.host20.uk/MathsWebsite/"
                rel="noopener noreferrer"
                target="_blank"
              >
                App
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#000",
                height: "176px",
                backgroundImage: `url(${pure})`,
              }}
            ></CardTitle>
            <CardText>Maths Game</CardText>
            <CardActions border>
            <a
                className="button-ancestor"
                href="https://github.com/Sorsi/MathsGame"
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub
              </a>
              <a
                className="button-ancestor"
                href={pure}
                rel="noopener noreferrer"
                target="_blank"
              >
                Show a pic
              </a>
              <a
                className="button-ancestor"
                href="http://sorso.host20.uk/MathsGame/"
                rel="noopener noreferrer"
                target="_blank"
              >
                App
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabID) => this.setState({ activeTab: tabID })}
          ripple
        >
          <Tab>Angular</Tab>
          <Tab>React</Tab>
          <Tab>Pure JS</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
