import app from './app';

const PORT = 4000;

const handleListening = () => {
    console.log(`Listening on http://localhost:${PORT} ${__dirname}`)
}
app.listen(PORT, handleListening);