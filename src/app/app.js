const express = require('express');
const qraphqlController = require('./controller/graphql.Controller');
const bodyParser = require('body-parser'),
    methodOverride = require('method-override');



class ClsApp {

    static init() {
        let promise = new Promise((resolve, reject) => {
            let app = express();
            app.use(bodyParser.json());
            app.use(bodyParser.urlencoded({ extended: false }));
            app.use(methodOverride('_method'));

            app.get('/', (req, res) => {
                res.send('ok')
            })
            app.listen(3000, (req, res) => {
                console.log('server started at : 3000');
            })
            qraphqlController.init(app).then(() => {
                resolve('server started!');
            })
        })
        return promise;
    }

}

ClsApp.init().then((data) => {
    console.log('\n' + data);
}).catch((error) => {
    console.log(error);
});

