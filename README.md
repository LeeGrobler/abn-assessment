# Vue 3 Tree Graph Project

## Overview

This project consists of a frontend and backend for a TypeScript Vue 3 application. The frontend renders a tree graph based on an array of objects delivered by the backend. When clicking on a node, a bottom sheet opens to show the details of the selected element.

For a live demo of this project, visit https://leegrobler.github.io/abn-assessment/

## Features

- Dynamic rendering of a tree graph based on an input array of objects.
- Backend server built with Node.js and Express to deliver the array.
- Click on a node to open a bottom sheet displaying the details of the selected element.

## Prerequisites

Node.js and npm installed on your machine.

## Setup

1. Clone the repository:

```
git clone https://github.com/LeeGrobler/abn-assessment
```

2. Navigate to the project directory:

```
cd abn-assessment
```

3. Install dependencies for both frontend and backend:

```
cd client
npm install
cd ../server
npm install
```

4. Run the backend server:

```
node index.js
```

The backend will be available at http://localhost:3000.

5. In a separate terminal, run the frontend:

```
cd ../client
npm run dev
```

The frontend will be available at http://localhost:3001.

## Usage

1. Access the frontend application in your browser.
2. Click on a node to open the bottom sheet and view details.
3. Explore the tree graph and interact with the bottom sheet to inspect different elements.

## Project Structure

- /client: Contains the source code for the Vue 3 frontend project.
- /server: Contains the source code for the Node.js and Express backend server.

## Technologies Used

### Frontend

- Vue 3
- TypeScript
- Vuetify

### Backend

- Node.js
- Express
- CORS
