

const obj = {
    register : {
        name: "register",
        route: '/registration',
        status: null
    }, 
    saveCard : {
        name: "saveCard",
        route: '/registration/save-card',
        status: null
    }
}

const steps = {};

const createObject = () => {
    const step = {
        "basic":["register", "saveCard"],
         "teacherBook":["saveCard"]
    }

    for(let i = 0; i < step.length; i++) {
        const key = step[i];
        const subKey = {};
       for(let j = 0; j < roots.length; j++) {
           const k = roots[j];
           const newSubKey = { [k] : obj[k] }
           Object.assign(subKey,newSubKey)
       }
       Object.assign(steps, {[key]:subKey});
       
    }
    console.log(steps)



    
}
createObject()