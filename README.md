# Tic Tac Toe Game

This project is a simple implementation of the classic game Tic Tac Toe, built with React.

## Project Structure

The project consists of two main React components, `Board` and `Square`, and a helper function `calculateWinner`.

### Board Component

The `Board` component is responsible for rendering the game board and handling game logic. It uses React's `useState` hook to manage the game's state.

The `Board` component maintains the following pieces of state:

- `squares`: An array representing the current state of the game board. Each element in the array corresponds to a square on the board, which can be either 'X', 'O', or `null` (for an empty square).
- `xIsNext`: A boolean indicating whether the next move is 'X'. If `false`, the next move is 'O'.
- `history`: An array representing the history of the game. Each element in the array is a past state of the `squares` array.

The `Board` component also defines two functions for handling user interactions:

- `handleClick(i)`: Called when the `i`th square on the board is clicked. If the square is already filled or the game is already won, the function returns immediately. Otherwise, it updates the state to reflect the move and switches the turn to the other player.
- `jumpTo(step)`: Called when the user wants to go back to a previous move. It updates the state to reflect the game state at the specified move.

### Square Component

The `Square` component is a functional component that takes a `value` prop (the value of the square) and an `onSquareClick` prop (a function to call when the square is clicked). It renders a button with the specified value, and calls `onSquareClick` when the button is clicked.

### calculateWinner Function

The `calculateWinner(squares)` function determines the winner of the game. It takes an array representing a game board and returns 'X' if X has won, 'O' if O has won, or `null` if the game is not yet won.

## How to Run

To run this project, you will need to have Node.js and npm installed on your machine. Then, you can clone the repository and install the dependencies by running `npm install`. Finally, you can start the development server by running `npm start`.

## License

This project is licensed under the MIT License.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
