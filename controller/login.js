const functions = require('./util');

const error_msg = 'Wrong user or password';

export function login(pos_el){
     
        var data = require('../model/data/login.json')
        var element = require('../model/elements/login.json')       
        console.log(data.data[pos_el].error)
        console.log(element.error)
        // 1. enter text username
         functions.set_input(element.username, data.data[pos_el].username);
         //2. enter text password
         functions.set_input(element.password, data.data[pos_el].password);
         //3. Click button
         functions.click(element.button);

        if(data.data[pos_el].error !== ""){
              functions.verify_message(element.error, error_msg);
         }
         
       
 }
