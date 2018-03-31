module.exports = class {
  constructor(num){
    this.num = num;
    this.clean();
  }

  clean(){
    this.num = this.num.replace(/[().-\s+]+/g, "");
    if(/[a-zA-Z]/g.test(this.num)){
      this.num = null;
      return;
    }
    if(/[@:!]/g.test(this.num)){
      this.num = null;
      return;
    }
    if(this.num[0]=="1"){
      this.num = this.num.slice(1,this.num.length);
    }
    if(this.num.length!=10){
      this.num = null;
      return;
    }
    if(!(parseInt(this.num[0])>1 && parseInt(this.num[0])<10)){
      this.num = null;
      return;
    }
    if(!(parseInt(this.num[3])>1 && parseInt(this.num[3])<10)){
      this.num = null;
      return;
    }
  }

  number(){
    return this.num;
  }
}
