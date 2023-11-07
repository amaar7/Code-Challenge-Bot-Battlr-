# Bot Battlr - React Web App

![Bot Battlr Logo](insert-your-logo-url-here.png)

## Table of Contents

- [Introduction](#introduction)
- [Project Setup](#project-setup)
- [Requirements](#requirements)
- [Core Deliverables](#core-deliverables)
- [Advanced Deliverables](#advanced-deliverables)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Introduction

Welcome to **Bot Battlr**, the ultimate destination where you can create and customize your own Bot Army. This React web app allows you to explore a collection of robots, view their details, and recruit them into your army. The app is a fun and interactive way to practice React components, props, state, events, and data fetching.

## Project Setup

To get started with the project, follow these steps:

1. Create a new project folder.
2. Set up a new GitHub repository for your project.
3. Add your technical mentor (TM) as a contributor to the repository (for grading purposes).
4. Ensure you commit your changes to the repository regularly.
5. Create a `db.json` file in your project directory to serve as the data source for your local server.
6. Start the JSON DB server with the following command:

   ```bash
   json-server --watch db.json
   
Requirements
To meet the project requirements, ensure the following:

Have a well-written README.md file.
Fetch data from a local server running JSON DB server.
Core Deliverables
As a user, you should be able to:

View profiles of all bots rendered in BotCollection.
Add an individual bot to your army by clicking on it. The selected bot should render in the YourBotArmy component. The bot can be enlisted only once and does not disappear from the BotCollection.
Release a bot from your army by clicking on it. The bot should be removed from the YourBotArmy component.
Discharge a bot from service permanently by clicking the red button marked "x," which deletes the bot from both the backend and the YourBotArmy on the frontend.
Endpoints for Core Deliverables
GET /bots
Example Response:

json
Copy code
[
  {
    "id": 101,
    "name": "wHz-93",
    "health": 94,
    "damage": 20,
    "armor": 63,
    "bot_class": "Support",
    "catchphrase": "1010010101001101100011000111101",
    "avatar_url": "insert-bot-avatar-url-here",
    "created_at": "2018-10-02T19:55:10.800Z",
    "updated_at": "2018-10-02T19:55:10.800Z"
  },
  {
    "id": 102,
    "name": "RyM-66",
    "health": 86,
    "damage": 36,
    "armor": 77,
    "bot_class": "Medic",
    "catchphrase": "0110011100000100011110100110011000011001",
    "avatar_url": "insert-bot-avatar-url-here",
    "created_at": "2018-10-02T19:55:10.827Z",
    "updated_at": "2018-10-02T19:55:10.827Z"
  }
]
DELETE /bots/:id
Example Response:

json
Copy code
{}
Advanced Deliverables
While these advanced deliverables are optional, they are great ways to further develop your skills.

As a user, you can also:

Choose whether to enlist a bot into your army or simply view their data. Clicking on the card displays a show view (BotSpecs) for that bot, replacing BotCollection. BotSpecs includes buttons to return to the list view and to enlist the bot.
Sort bots by their health, damage, or armor with a new component, SortBar.
Remove a bot from the BotCollection when enlisted in your army.
Filter bots by their class, supporting multiple filters simultaneously.
Only enlist one bot from each bot_class (e.g., "Support," "Medic," "Assault," "Defender," "Captain," "Witch").
Usage
To run the project, follow these steps:

bash
Copy code
npm install
npm start
Contributing
If you wish to contribute to this project, please follow our contributing guidelines.

License
This project is licensed under the MIT License. See the LICENSE.md file for more details.

Acknowledgments
We would like to express our gratitude to [list any libraries, tools, or individuals] for their contributions to this project.

[Optional: Include your contact information or links to your personal website or social media profiles.]

sql
Copy code

Replace the placeholders in this template with your project-specific details, and ensure to add any relevant links, images, or resources. This README file provides an informative and well-structured overview of your project.



