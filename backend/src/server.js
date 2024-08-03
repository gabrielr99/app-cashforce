const app = require('./app');

require('./database');

app.listen(3001, () => console.log('server running on port 3001'));