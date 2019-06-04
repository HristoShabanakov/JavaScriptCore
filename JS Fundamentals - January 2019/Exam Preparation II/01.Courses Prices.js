function prices(jsFund, jsAdv, jsApp, form){

    const courses = {
        'JS Fund':170,
        'JS Adv':180,
        'JS App':190,
    };

    let totalPrice = 0;

    if(jsFund){
        totalPrice += courses['JS Fund'];
    }

    if(jsAdv){
        totalPrice+= courses['JS Adv'];
    }

    if(jsApp){
        totalPrice += courses['JS App'];
    }

    if(jsFund && jsAdv){
        //Тhe student receives a 10% discount.
        totalPrice -=  courses['JS Adv'] * 0.1;
    }

    if(jsFund && jsAdv && jsApp){
        totalPrice -= totalPrice * 0.06;
    }

    if(form === 'online'){
        totalPrice -= totalPrice * 0.06;
    }

    console.log(Math.round(totalPrice));
}

prices(true, false, false, "onsite");