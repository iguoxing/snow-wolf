
// 实现一个LazyMan，可以按照以下方式调用:
// LazyMan(“Hank”)输出:
// Hi! This is Hank!

// LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
// Hi! This is Hank!
// //等待10秒..
// Wake up after 10
// Eat dinner~

// LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
// Hi This is Hank!
// Eat dinner~
// Eat supper~
// LazyMan(“Hank”).eat(“supper”).sleepFirst(5)输出
// //等待5秒
// Wake up after 5
// Hi This is Hank!
// Eat supper
class LazyManBase{
    constructor (name){
        this.arr=[]//
        this.commands=[]//
        this.commands.push({'name':'name','value':name})
        setTimeout(()=>{
            this.excute()
        },0)
        // console.log(this.commands);
    }
    func(obj){
        switch(obj.name){
            case 'name':
                console.log(`Hi! This is ${obj.value}!`);
                return true;
            case 'sleep':
                setTimeout(function(){
                    console.log(` Wake up after ${obj.value}`);
                },obj.value*1000)
                return true;
            case 'eat':
                console.log(`Eat ${obj.value}~`);
                return true;

        }
    }
    async excute(name){
        console.log('this.commands',this.commands);
        let _this = this;
        for (let val of this.commands){
            let tmp=await _this.func(val)
            console.log(tmp);
        }
        // for(var i=0;i<this.commands.length;i++){
        //     await func(_this.commands[i])
        // }
    }
    sleep(name){
        this.commands.push({'name':'sleep','value':name})
        return this//不返回this setTimeout 会找不到指向
    }
    eat(name){
        this.commands.push({'name':'eat','value':name})
        return this//不返回this setTimeout 会找不到指向
    }
}

// 利用原型链实现连续调用
function LazyMan(name){
    return new LazyManBase(name);
}

LazyMan('Hank').sleep(3).eat('dinner')