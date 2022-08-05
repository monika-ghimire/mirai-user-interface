function myFunction() {
    var x = document.getElementById("inputVlaueUser");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  } 


 let list=[1,2,3]
 let show= document.getElementById('cardHolder')
  const  myFunctioncomfirm = () => {
    // list.forEach(() => {
      let singleString =`<div class="top-details">
        <div><img src="./imges/person1.png" alt="" srcset=""></div>
        <div>olive asaaha</div>
        <div>
            <ul class="work-exp-holder" >
                visual Desiner
                <li>wirk 2</li>
                <li>work 3</li>
            </ul>
        </div>
      </div>
      <div class="dottom-details">
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <p class="job-rating">100% job sucess</p>
      </div>
        <div >
           <div><p>815 project completed</p></div>
           <div>butwal Nepal</div>
        </div>
      }`
  
    // });
    show.innerHTML = singleString  ;
    
  };

  myFunctioncomfirm()

  // function () {
  //   var x = document.getElementById("inputVlaueUserComfirm");
  //   if (x.type === "password") {
  //     x.type = "text";
  //   } else {
  //     x.type = "password";
  //   }
  // } 

 

 

