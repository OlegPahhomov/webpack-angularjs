export default class MainCtrl {

    constructor(){
        let vm = this;
        vm.something = "hello";

        vm.funcyFunction = () => {
            console.log("hello");
        }
    }
}