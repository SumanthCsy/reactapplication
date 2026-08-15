function App() {
    const isLoggedIn = true;
    if (isLoggedIn) {
        return <h1>Welcome to the App!</h1>;
    }
    else{
        return <h1>Please log in to continue.</h1>;
    }
}
export default App;