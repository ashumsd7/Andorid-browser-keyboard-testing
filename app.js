new Vue({
    el: '#app',
    data() {
        return {
            showReqPass1: false,
            showReqPass2: false,
            inputData2:'',
            inputData1:'',
            wrongpass1:false,
            wrongpass2:false
        }
    },
    methods: {
        keyPressCheck(evt) {
        
            var charCode = evt.which ? evt.which : evt.keyCode;
            if (charCode) {
              this.showReqPass1 = false;
              this.showReqPass2 = false;
            } else {
              this.showReqPass1 = true;
              this.showReqPass2 = true;
            }
          },
          handle1(){
            if(this.inputData1!="")
            {
              this.wrongpass1=true;
            }
            else
            this.showReqPass1 = true;
          },
          handle2(){
            if(this.inputData2!="")
            {
              this.wrongpass2=true;
            }
            else
            this.showReqPass2 = true;
          }
    },
})